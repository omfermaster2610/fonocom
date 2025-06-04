import { NextResponse } from 'next/server'
import { obtenerUsuario } from '@/usuarios/usuarioService'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')

  if (!username) {
    return NextResponse.json(
      { success: false, message: 'Falta el nombre de usuario' },
      { status: 400 }
    )
  }

  try {
    const usuario = await obtenerUsuario(username)

    if (!usuario) {
      return NextResponse.json(
        { success: false, message: 'Usuario no encontrado' },
        { status: 404 }
      )
    }

    const { password, ...userSinPass } = usuario
    return NextResponse.json(userSinPass)
  } catch (error) {
    console.error('ERROR OBTENER USUARIO:', error)
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    )
  }
}
