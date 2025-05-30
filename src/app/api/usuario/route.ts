/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')

  if (!username) {
    return NextResponse.json(
      { success: false, message: 'Falta el nombre de usuario' },
      { status: 400 }
    )
  }

  const filePath = path.join(process.cwd(), 'data', 'data.json')
  const jsonData = fs.readFileSync(filePath, 'utf-8')
  const usuarios = JSON.parse(jsonData)

  const usuario = usuarios.find((u: any) => u.username === username)

  if (!usuario) {
    return NextResponse.json(
      { success: false, message: 'Usuario no encontrado' },
      { status: 404 }
    )
  }

  const { password, ...userSinPass } = usuario
  return NextResponse.json(userSinPass)
}
