/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { guardarUsuario, obtenerUsuario } from '@/usuarios/usuarioService'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Faltan campos' },
        { status: 400 }
      )
    }

    // Verifica si el usuario ya existe en la base de datos
    const existente = await obtenerUsuario(username)
    if (existente) {
      return NextResponse.json(
        { success: false, message: 'Usuario ya existe' },
        { status: 409 }
      )
    }

    // Guardar nuevo usuario en la base de datos
    await guardarUsuario({
      username,
      password,
      progreso: {
        comunicacion: 0,
        empleo: 0,
        ideas: 0,
      },
    } as any)

    return NextResponse.json({ success: true, user: { username } })
  } catch (error) {
    console.error('ERROR REGISTRO:', error)
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    )
  }
}
