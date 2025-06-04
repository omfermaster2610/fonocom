import { NextResponse } from 'next/server'
import { obtenerUsuario, guardarUsuario } from '@/usuarios/usuarioService'

export async function POST(req: Request) {
  try {
    const { username, newUsername, newPassword } = await req.json()

    if (!username || !newUsername || !newPassword) {
      return NextResponse.json(
        { success: false, message: 'Faltan datos' },
        { status: 400 }
      )
    }

    // Obtener usuario actual
    const usuario = await obtenerUsuario(username)
    if (!usuario) {
      return NextResponse.json(
        { success: false, message: 'Usuario no encontrado' },
        { status: 404 }
      )
    }

    // Actualizar datos
    usuario.username = newUsername
    usuario.password = newPassword

    // Guardar usuario actualizado (usuarioService también actualiza progreso)
    await guardarUsuario(usuario)

    const { password, ...usuarioSinPass } = usuario

    return NextResponse.json({ success: true, user: usuarioSinPass })
  } catch (error) {
    console.error('ERROR AL ACTUALIZAR:', error)
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    )
  }
}
