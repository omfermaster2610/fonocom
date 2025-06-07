import { NextResponse } from 'next/server'
import { registrarUsuario, obtenerUsuario } from '@/usuarios/usuarioService'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Faltan campos' },
        { status: 400 }
      )
    }

    // Verifica si el usuario ya existe
    const existente = await obtenerUsuario(username)
    if (existente) {
      return NextResponse.json(
        { success: false, message: 'Usuario ya existe' },
        { status: 409 }
      )
    }

    // Crear nuevo usuario y su progreso
    const nuevoUsuario = await registrarUsuario({ username, password })

    return NextResponse.json({
      success: true,
      user: {
        id: nuevoUsuario.id,
        username: nuevoUsuario.username,
      },
    }, { status: 201 })

  } catch (error) {
    console.error('ERROR REGISTRO:', error)
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    )
  }
}
