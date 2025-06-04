import { db } from "./db"

export interface User {
  id: number
  username: string
  password: string
}

export interface LoginResponse {
  success: boolean
  user?: Omit<User, "password">
  message?: string
}

class AuthService {
  public async authenticate(username: string, password: string): Promise<LoginResponse> {
    try {
      const [rows] = await db.execute(
        "SELECT * FROM usuarios WHERE username = ? AND password = ?",
        [username, password]
      )

      const user = (rows as User[])[0]

      if (user) {
        const { password: _, ...userWithoutPassword } = user
        return {
          success: true,
          user: userWithoutPassword,
        }
      }

      return {
        success: false,
        message: "Credenciales incorrectas",
      }
    } catch (error) {
      console.error("Authentication error:", error)
      return {
        success: false,
        message: "Error interno del servidor",
      }
    }
  }

  public async getAllUsers(): Promise<Omit<User, "password">[]> {
    try {
      const [rows] = await db.execute("SELECT id, username FROM usuarios")
      return rows as Omit<User, "password">[]
    } catch (error) {
      console.error("Error al obtener usuarios:", error)
      return []
    }
  }
}

export const authService = new AuthService()
