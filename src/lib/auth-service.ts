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
      const res = await db.query(
        "SELECT * FROM usuarios WHERE username = $1 AND password = $2",
        [username, password]
      )
      const user = res.rows[0]

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
      const res = await db.query("SELECT id, username FROM usuarios")
      return res.rows as Omit<User, "password">[]
    } catch (error) {
      console.error("Error al obtener usuarios:", error)
      return []
    }
  }
}

export const authService = new AuthService()
