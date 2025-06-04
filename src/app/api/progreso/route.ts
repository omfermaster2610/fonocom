import { type NextRequest, NextResponse } from "next/server";
import { obtenerUsuario, actualizarProgreso, obtenerProgreso } from "@/usuarios/usuarioService";
import type { Progreso } from "@/usuarios/usuario";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const usuario = await obtenerUsuario(username);

    if (!usuario) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    const progreso: Progreso = await obtenerProgreso(usuario.id);

    return NextResponse.json({
      username: usuario.username,
      progreso,
    });
  } catch (error) {
    console.error("Error in GET:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, modulo, incremento } = body;

    if (!username || !modulo || incremento === undefined) {
      return NextResponse.json(
        { error: "Username, modulo, and incremento are required" },
        { status: 400 }
      );
    }

    const modulosValidos = ['comunicacion', 'empleo', 'ideas'] as const;
    type Modulo = typeof modulosValidos[number];

    if (!modulosValidos.includes(modulo)) {
      return NextResponse.json({ error: "Módulo inválido" }, { status: 400 });
    }

    const usuario = await obtenerUsuario(username);
    if (!usuario) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Obtener progreso actual desde la tabla progreso
    const progresoActual: Progreso = await obtenerProgreso(usuario.id);

    const progresoModuloActual = progresoActual[modulo as Modulo] || 0;
    const nuevoProgreso = Math.min(progresoModuloActual + incremento, 100);
    progresoActual[modulo as Modulo] = nuevoProgreso;

    await actualizarProgreso(usuario.id, progresoActual);

    return NextResponse.json({
      username,
      modulo,
      progresoAnterior: progresoModuloActual,
      progresoNuevo: nuevoProgreso,
      completado: nuevoProgreso >= 1,
    });
  } catch (error) {
    console.error("Error in POST:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}