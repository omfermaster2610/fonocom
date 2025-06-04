'use client'
import { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import { usuario } from '../usuarios/usuarioService'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [usuario, setUsuario] = useState<usuario | null>(null)

useEffect(() => {
  async function fetchUsuario() {
    const saved = localStorage.getItem('user');
    if (!saved) return;

    const { username } = JSON.parse(saved);

    try {
      const res = await fetch(`/api/usuario?username=${username}`);
      if (!res.ok) throw new Error('Error al obtener usuario');
      const data = await res.json();
      setUsuario(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchUsuario();
}, []);


  return (
    <>
      <header className="bg-lime-500 text-gray-900 w-full z-10">
      <div
        className="w-full max-w-screen-xl mx-auto flex items-center justify-between h-16"
        style={{
          padding: "0 1.5rem",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => setIsOpen(true)}>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        <div className="text-sm">
            Bienvenido/a. {usuario ? usuario.username : 'Cargando...'}
          </div>
      </div>
      </header>

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
