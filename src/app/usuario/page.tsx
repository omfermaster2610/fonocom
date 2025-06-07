'use client'

import { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { useRouter } from 'next/navigation'


interface Usuario {
  id: number
  username: string
  password: string
  progreso: {
    comunicacion: number
    empleo: number
    ideas: number
  }
}
export default function UsuarioPage() {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [form, setForm] = useState({ username: '', password: '' })
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  const cerrarSesion = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  useEffect(() => {
    const saved = localStorage.getItem('user')
    console.log("Usuario guardado:", saved)

    if (!saved) return

    const { username } = JSON.parse(saved)
    console.log("Buscando usuario:", username)

    fetch(`/api/usuario?username=${username}`)
      .then(res => {
        if (!res.ok) throw new Error('No encontrado');
        return res.json();
      })
      .then(data => {
        setUsuario(data);
        setForm({ username: data.username, password: '' });
      })
      .catch(err => {
        console.error("Error al obtener usuario:", err);
        setUsuario(null);
      });
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/usuario/actualizar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        id: usuario?.id
      })
    });
      if (res.ok) {
        const data = await res.json();
        setUsuario(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert('Datos actualizados correctamente');
      } else {
        alert('Error al actualizar');
      }
    } catch (error) {
      alert('Error de conexión');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="p-6 flex"
      style={{
                    padding: "0 1.5rem",
                }}>
        <br/>
        <div className="flex-grow">
        <br/>
        <section>
            <p className="text-xl font-semibold mb-4">
          Bienvenido/a {usuario ? usuario.username : 'Cargando...'}
        </p>
        <br/>        
        {usuario ? (
          <div className="space-y-2">
            <p>Progreso en Comunicación: {usuario.progreso.comunicacion}%</p>
            <p>Progreso en Empleo: {usuario.progreso.empleo}%</p>
            <p>Progreso en Ideas: {usuario.progreso.ideas}%</p>
          </div>
        ) : (
          <p>Cargando progreso...</p>
        )}
        </section>
        <br/>
        <section>
            <p className="flex flex-col text-xl font-semibold mb-4">Modificar usuario</p>
            <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-semibold">
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="border border-black px-2 py-1"
            />
          </div>
            <br/>
          <div>
            <label htmlFor="password" className="block font-semibold">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border border-black px-2 py-1"
            />
          </div>
          <br/>
          <button
            type="submit"
            disabled={loading}
            className="button bg-lime-500 px-4 py-2 rounded font-bold"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </form>
        </section>
        <button onClick={cerrarSesion} className="mt-4 bg-red-500 text-white px-4 py-2">
          Cerrar sesión
        </button>
        </div>
        <aside className=" w-64 p-4 border-l border-gray-300 shrink-0 justify-center">
            <img src="/gifs/usuario.webp" alt="Comunicación" className='w-192 h-192' />
        </aside>
      </main>
      <Footer />
    </>
  )
}
