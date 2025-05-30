'use client'
import { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import { usuario } from '../usuarios/usuarioService'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [usuario, setUsuario] = useState<usuario | null>(null)

useEffect(() => {
  const saved = localStorage.getItem('user')
  console.log("Usuario guardado:", saved)

  if (!saved) return

  const { username } = JSON.parse(saved)
  console.log("Buscando usuario:", username)

  fetch(`/api/usuario?username=${username}`)
    .then(res => res.json())
    .then(data => {
      console.log("Usuario encontrado:", data)
      setUsuario(data)
    })
    .catch(err => console.error("Error al obtener usuario:", err))
}, [])


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
