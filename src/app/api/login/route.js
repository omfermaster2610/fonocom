import { NextResponse } from "next/server";
import { validarLogin } from "@/usuarios/login";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Faltan credenciales" },
        { status: 400 }
      );
    }

    const usuario = await validarLogin(username, password);

    if (!usuario) {
      return NextResponse.json(
        { success: false, message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    // Elimina la contraseña antes de enviar la respuesta
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
