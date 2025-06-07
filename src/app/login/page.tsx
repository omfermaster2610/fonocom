"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "../footer"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: String(formData.username),
        password: String(formData.password),
      }),})

      const data = await res.json()

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user))
        router.push("/homepage")
      } else {
        setError(data.message || "Credenciales incorrectas")
      }
    } catch (err) {
      setError("Error de conexión")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Imagen de fondo */}
        <div className="relative w-full h-[100vh] hidden md:block">
        <Image
          src="/images/fondoRegistro.png"
          alt="Login"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#f3f3f3] via-white/50 to-transparent"></div>
      </div>

        {/* Contenedor de formulario alineado a la izquierda */}
        <div className="flex items-center justify-center bg-[#f3f3f3] px-6 py-10">
        <div className="w-full max-w-md">
            <p className="text-3xl font-bold mb-6 text-gray-800">Iniciar Sesión</p>
            <br/>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="username"
                name="username"
                placeholder="Nombre de usuario"
                value={formData.username}
                onChange={handleInputChange}
                className="p-3 rounded-lg border border-gray-300"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
                className="p-3 rounded-lg border border-gray-300"
                required
              />
              {error && <p className="text-red-500 mt-4">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="button bg-blue-500 text-white py-2 px-4 rounded"
              >
                {loading ? "Cargando..." : "Iniciar sesión"}
              </button>
            </form>
            <br/>
            <p className="mt-4 text-center text-sm underline">
              ¿No tienes cuenta?{" "}
              <Link href="/registro" className="text-blue-600 hover:underline">
                Regístrate aquí
              </Link>
              <br/>
              <Link href="/" className="text-blue-600 hover:underline ml-2">Volver atras.</Link>
            </p>
            <Footer />
          </div>
        </div>
    </main>
    </>
  )
}
