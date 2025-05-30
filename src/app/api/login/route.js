import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(request) {
  try {
    const { username, password } = await request.json()
    console.log("Recibido:", username, password)

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Faltan credenciales" },
        { status: 400 }
      )
    }

    const filePath = path.join(process.cwd(), "data", "data.json")
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, message: "Archivo no encontrado" },
        { status: 500 }
      )
    }

    const rawData = fs.readFileSync(filePath, "utf-8")
    const users = JSON.parse(rawData)

    // Buscar usuario válido
    const user = users.find(
      (u) => u.username === username && u.password === password
    )

    if (user) {
      const { password, ...userWithoutPassword } = user
      console.log("Login exitoso:", userWithoutPassword)
      return NextResponse.json({ success: true, user: userWithoutPassword })
    } else {
      console.log("Credenciales incorrectas")
      return NextResponse.json(
        { success: false, message: "Credenciales incorrectas" },
        { status: 401 }
      )
    }

  } catch (error) {
    console.error("Error en login:", error)
    return NextResponse.json(
      { success: false, message: "Error del servidor" },
      { status: 500 }
    )
  }
}
