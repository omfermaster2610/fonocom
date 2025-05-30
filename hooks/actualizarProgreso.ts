import { useEffect } from "react"

export function useActualizarProgreso(modulo: string) {
  useEffect(() => {
    const userStr = localStorage.getItem("user")
    if (!userStr) return

    const user = JSON.parse(userStr)
    const dataStr = localStorage.getItem("data")
    if (!dataStr) return

    const data = JSON.parse(dataStr)
    const userIndex = data.findIndex((u: any) => u.username === user.username)
    if (userIndex === -1) return

    const actividades = data[userIndex].actividades?.[modulo] || []
    const completadas = actividades.filter((a: any) => a.estado === "completado").length

    data[userIndex].progreso[modulo] = completadas
    localStorage.setItem("data", JSON.stringify(data))
  }, [modulo])
}
