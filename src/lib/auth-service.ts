import fs from "fs"
import path from "path"

export interface User {
  id: number
  username: string
  password: string
  name: string
  email: string
  role: string
}

export interface LoginResponse {
  success: boolean
  user?: Omit<User, "password">
  message?: string
}

class AuthService {
  private usersFilePath: string

  constructor() {
    this.usersFilePath = path.join(process.cwd(), "data", "data.json")
  }

  private loadUsers(): User[] {
    try {
      // Crear directorio si no existe
      const dataDir = path.dirname(this.usersFilePath)
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }

      // Crear archivo si no existe
      if (!fs.existsSync(this.usersFilePath)) {
        const defaultUsers: User[] = [
          {
            id: 1,
            username: "admin",
            password: "123456",
            name: "Administrador",
            email: "admin@example.com",
            role: "admin",
          },
        ]
        fs.writeFileSync(this.usersFilePath, JSON.stringify(defaultUsers, null, 2))
      }

      const fileContent = fs.readFileSync(this.usersFilePath, "utf-8")
      return JSON.parse(fileContent)
    } catch (error) {
      console.error("Error loading users:", error)
      return []
    }
  }

  public authenticate(username: string, password: string): LoginResponse {
    try {
      const users = this.loadUsers()

      const user = users.find((u) => u.username === username && u.password === password)

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

  public getAllUsers(): Omit<User, "password">[] {
    const users = this.loadUsers()
    return users.map(({ password, ...user }) => user)
  }
}

export const authService = new AuthService()
