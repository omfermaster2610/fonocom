import { NextResponse } from 'next/server'
import db from '../../../../../db'

export async function POST(req: Request) {
  try {
    console.log('🟢 Entró a POST /api/usuario/actualizar');
    const body = await req.json()
    const { username, password, id } = body

    if (!username || !password) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
    }

    // Actualiza el password del usuario y devuelve sus datos
    const result = await db.query(
      `UPDATE usuarios SET password = $1, username = $2 where id = $3 RETURNING id, username`,
      [password, username, id]
    )

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })
    }

    const user = result.rows[0]

    const progresoRes = await db.query(
      `SELECT progreso_json FROM progreso WHERE usuarioid = $1`,
      [user.id]
    )

    const progreso = progresoRes.rows[0]?.progreso_json || {
      comunicacion: {},
      empleo: {},
      ideas: {},
    }

    return NextResponse.json({
      user: {
        username: user.username,
        password: '',
        progreso,
      },
    })
  } catch (err) {
    console.error('Error al actualizar usuario:', err)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
