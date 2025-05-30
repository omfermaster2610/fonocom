"use client"

import { useState, useEffect } from "react"
import Header from "../../../header"
import Footer from "../../../footer"

interface ProgresoResponse {
  username: string
  progreso: {
    ideas: number
  }
}

interface ActualizarProgresoResponse {
  username: string
  modulo: string
  progresoAnterior: number
  progresoNuevo: number
  completado: boolean
}

export default function Modulo1() {
  const [completado, setCompletado] = useState(false)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  // Obtener username del localStorage (o podrías usar contexto/props)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("user")
      if (userStr) {
        try {
          const user = JSON.parse(userStr)
          setUsername(user.username)
        } catch (err) {
          setError("Error al obtener datos de usuario")
          setLoading(false)
        }
      } else {
        setError("No se encontró usuario logueado")
        setLoading(false)
      }
    }
  }, [])

  // Cargar progreso cuando tenemos el username
  useEffect(() => {
    if (username) {
      cargarProgreso()
    }
  }, [username])

  const cargarProgreso = async () => {
    if (!username) return

    try {
      setLoading(true)
      const response = await fetch(`/api/progreso?username=${encodeURIComponent(username)}`)

      if (!response.ok) {
        if (response.status === 404) {
          setError("Usuario no encontrado en el sistema")
        } else {
          setError("Error al cargar el progreso")
        }
        setLoading(false)
        return
      }

      const data: ProgresoResponse = await response.json()
      setCompletado(data.progreso.ideas >= 1)
      setError(null)
    } catch (err) {
      console.error("Error loading progress:", err)
      setError("Error de conexión al cargar el progreso")
    } finally {
      setLoading(false)
    }
  }

  const marcarActividadCompletada = async () => {
    if (!username || updating) return

    try {
      setUpdating(true)
      setError(null)

      const response = await fetch("/api/progreso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          modulo: "ideas",
          incremento: 20,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(errorData.error || "Error al actualizar el progreso")
        return
      }

      const data: ActualizarProgresoResponse = await response.json()
      setCompletado(data.completado)

      // Mostrar mensaje de éxito
      console.log(`Progreso actualizado: ${(data.progresoNuevo).toFixed(0)}%`)
    } catch (err) {
      console.error("Error updating progress:", err)
      setError("Error de conexión al actualizar el progreso")
    } finally {
      setUpdating(false)
    }
  }

  if (loading) {
    return (
      <div className="p-6 space-y-6">
        <Header />
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lime-500"></div>
            <span className="ml-2">Cargando progreso...</span>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      <Header />
      <div className="px-6 space-y-6"
      style={{
              padding: "0 1.5rem",
              }}>
        <br />
        <h1 className="text-2xl font-bold">🏛️ Ideas de negocio</h1>
        <h2 className="text-2xl font-bold">Actividad 5: Formación a familias o cuidadores sobre emprendimiento</h2>

        <section className="space-y-4">
          <br />
          <h3 className="text-xl font-extrabold">Descripción</h3>
          <p className="text-sm font-light leading-relaxed">
            La escucha activa es una habilidad fundamental en la comunicación efectiva. Implica prestar atención
            completa al hablante, comprender su mensaje, y responder de manera apropiada. Esta actividad te ayudará a
            desarrollar esta importante competencia.
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong>Error:</strong> {error}
              <button onClick={cargarProgreso} className="ml-2 text-sm underline hover:no-underline">
                Reintentar
              </button>
            </div>
          )}

          <br />
          <button
            onClick={marcarActividadCompletada}
            disabled={completado || !!error || updating}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-200 flex items-center gap-2 ${
              completado
                ? "bg-green-500 text-white cursor-default"
                : error
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : updating
                    ? "bg-lime-400 text-white cursor-wait"
                    : "bg-lime-500 text-white hover:bg-lime-600 hover:shadow-lg active:transform active:scale-95"
            }`}
          >
            {updating && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>}
            {completado ? "✅ Actividad Completada" : updating ? "Guardando..." : "🚀 Comenzar Actividad"}
          </button>

          {completado && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4">
              <strong>¡Excelente!</strong> Has completado esta actividad exitosamente.
            </div>
          )}

          {username && <div className="text-xs text-gray-500 mt-2">Usuario: {username}</div>}
        </section>
      </div>
      <Footer />
    </div>
  )
}
