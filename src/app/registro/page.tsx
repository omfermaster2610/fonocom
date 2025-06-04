"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "../footer"

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ username: "", password: "", confirm: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  
  if (form.password !== form.confirm) {
    setError("Las contraseñas no coinciden");
    return;
  }
  
  setLoading(true);
  try {
    const res = await fetch("/api/usuario/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: form.username, password: form.password }),
    });
  
    const data = await res.json();
  
    if (res.ok && data.success) {
      alert("Usuario registrado correctamente");
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/homepage");
    } else {
      setError(data.message || "Error al registrar");
    }
  } catch (error) {
    setError("Error de conexión");
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Imagen con difuminado */}
      <div className="relative w-full h-[100vh] hidden md:block">
        <Image
          src="/images/fondoRegistro.png"
          alt="Registro"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#f3f3f3] via-white/50 to-transparent"></div>
      </div>

      {/* Formulario */}
      <div className="flex items-center justify-center bg-[#f3f3f3] px-6 py-10">
        <div className="w-full max-w-md">
          <p className="text-3xl font-bold mb-4 text-black">Regístrate hoy</p>
          <br/>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="username"
              name="username"
              placeholder="Nombre de usuario..."
              value={form.username}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña..."
              value={form.password}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300"
              required
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirmar contraseña..."
              value={form.confirm}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300"
              required
            />
            {error && <p className="text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="button bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition"
            >
              {loading ? "Registrando..." : "Registrarme"}
            </button>
          </form>
          <br/>
          <p className="text-sm mt-4 underline">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-blue-600 underline">Inicia sesión.</Link>
                          <br/>
            <Link href="/" className="text-blue-600 hover:underline ml-2">Volver atras.</Link>
          </p>
                <Footer />
        </div>
      </div>
    </main>
  )
}
