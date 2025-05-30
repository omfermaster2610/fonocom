import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const { username, newUsername, newPassword } = await req.json()

    if (!username || !newUsername || !newPassword) {
      return NextResponse.json(
        { success: false, message: 'Faltan datos' },
        { status: 400 }
      )
    }

    const filePath = path.join(process.cwd(), 'data', 'data.json')

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { success: false, message: 'Archivo no encontrado' },
        { status: 500 }
      )
    }

    const rawData = fs.readFileSync(filePath, 'utf-8')
    const users = JSON.parse(rawData)

    // Verificar que sea un array
    if (!Array.isArray(users)) {
      return NextResponse.json(
        { success: false, message: 'Formato inválido de datos' },
        { status: 500 }
      )
    }

    // Buscar usuario por username
    const userIndex = users.findIndex((u) => u.username === username)

    if (userIndex === -1) {
      return NextResponse.json(
        { success: false, message: 'Usuario no encontrado' },
        { status: 404 }
      )
    }

    // Actualizar datos
    users[userIndex].username = newUsername
    users[userIndex].password = newPassword

    // Guardar cambios
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8')

    const updatedUser = { ...users[userIndex] }
    delete updatedUser.password // Opcional: ocultar password al devolver

    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error) {
    console.error('ERROR AL ACTUALIZAR:', error)
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    )
  }
}
