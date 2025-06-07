// app/api/login/route.js
import { NextResponse } from "next/server";
import { validarLogin } from "@/usuarios/login"; // Asegúrate de que esta ruta es válida

export async function POST(request) {
  try {
    // Obtener y parsear el cuerpo de la solicitud
    const body = await request.json();
    const { username, password } = body;

    // Validación básica de datos
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Credenciales inválidas" },
        { status: 400 }
      );
    }

    // Log para depuración (puedes eliminarlo en producción)
    console.log("Intento de login con:", { username, password });

    // Verificación con la base de datos
    const usuario = await validarLogin(username.trim(), password.trim());

    // Si no se encuentra usuario válido
    if (!usuario) {
      return NextResponse.json(
        { success: false, message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    // Eliminar contraseña del objeto antes de enviarlo al frontend
    const { password: _, ...usuarioSinPassword } = usuario;

    // Respuesta exitosa
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
