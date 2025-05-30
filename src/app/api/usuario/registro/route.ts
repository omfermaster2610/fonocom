import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Faltan campos' },
        { status: 400 }
      )
    }

    const filePath = path.join(process.cwd(), 'data', 'data.json')
    const rawData = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, 'utf-8')
      : '[]'

    const users = JSON.parse(rawData)

    if (!Array.isArray(users)) {
      return NextResponse.json(
        { success: false, message: 'Datos corruptos' },
        { status: 500 }
      )
    }

    const exists = users.some((u) => u.username === username)
    if (exists) {
      return NextResponse.json(
        { success: false, message: 'Usuario ya existe' },
        { status: 409 }
      )
    }

    const newUser = {
      username,
      password,
      progreso: {
        comunicacion: 0,
        empleo: 0,
        ideas: 0,
      },
    }

    users.push(newUser)
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8')

    const userResponse = { ...newUser }
    delete userResponse.password // Opcional

    return NextResponse.json({ success: true, user: userResponse })
  } catch (error) {
    console.error('ERROR REGISTRO:', error)
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    )
  }
}
