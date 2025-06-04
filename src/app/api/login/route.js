import { NextResponse } from "next/server";
import { validarLogin } from "@/usuarios/login";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (
      typeof username !== 'string' ||
      typeof password !== 'string' ||
      !username.trim() ||
      !password.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Credenciales inválidas" },
        { status: 400 }
      );
    }

    console.log('Tipo de username:', typeof username, 'Valor:', username);
    console.log('Tipo de password:', typeof password, 'Valor:', password);

    const usuario = await validarLogin(username, password);

    if (!usuario) {
      return NextResponse.json(
        { success: false, message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    const { password: _, ...usuarioSinPassword } = usuario;

    return NextResponse.json({
      success: true,
      user: usuarioSinPassword,
    });

  } catch (error) {
    console.error("Error en login:", error);
    return NextResponse.json(
      { success: false, message: "Error del servidor" },
      { status: 500 }
    );
  }
}
