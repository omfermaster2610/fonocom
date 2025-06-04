import { Router } from 'express'
import { obtenerUsuario } from '../servicios/usuarioService.js'

const router = Router()

// Ruta para obtener usuario por username
router.get('/', async (req, res) => {
  const { username } = req.query

  if (!username) {
    return res.status(400).json({ error: 'Falta el parámetro username' })
  }

  try {
    const usuario = await obtenerUsuario(username)
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }
    res.json(usuario)
  } catch (error) {
    console.error('Error en /api/usuario:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

export default router
