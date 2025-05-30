import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

interface User {
  username: string
  progreso?: {
    [modulo: string]: number
  }
}

const DATA_FILE_PATH = path.join(process.cwd(), "data", "data.json")

// Función para leer el archivo JSON
function readDataFile(): User[] {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      const dir = path.dirname(DATA_FILE_PATH)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      fs.writeFileSync(DATA_FILE_PATH, JSON.stringify([]))
      return []
    }

    const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8")
    return JSON.parse(fileContent)
  } catch (error) {
    console.error("Error reading data file:", error)
    return []
  }
}

// Función para escribir el archivo JSON
function writeDataFile(data: User[]): boolean {
  try {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2))
    return true
  } catch (error) {
    console.error("Error writing data file:", error)
    return false
  }
}

// GET - Obtener progreso de un usuario
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get("username")

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 })
    }

    const data = readDataFile()
    const user = data.find((u) => u.username === username)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      username: user.username,
      progreso: user.progreso || {},
    })
  } catch (error) {
    console.error("Error in GET:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// POST - Actualizar progreso de un usuario
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, modulo, incremento } = body

    if (!username || !modulo || incremento === undefined) {
      return NextResponse.json(
        { error: "Username, modulo, and incremento are required" },
        { status: 400 }
      )
    }

    const data = readDataFile()
    const userIndex = data.findIndex((u) => u.username === username)

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    if (!data[userIndex].progreso) {
      data[userIndex].progreso = {}
    }

    const progresoActual = data[userIndex].progreso[modulo] || 0
    const nuevoProgreso = Math.min(progresoActual + incremento, 100)

    data[userIndex].progreso[modulo] = nuevoProgreso

    const success = writeDataFile(data)

    if (!success) {
      return NextResponse.json({ error: "Failed to save data" }, { status: 500 })
    }

    return NextResponse.json({
      username,
      modulo,
      progresoAnterior: progresoActual,
      progresoNuevo: nuevoProgreso,
      completado: nuevoProgreso >= 1,
    })
  } catch (error) {
    console.error("Error in POST:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
