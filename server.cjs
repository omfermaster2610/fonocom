/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3001

// Middlewares
app.use(cors())
app.use(express.json())

// Rutas
(async () => {
  const usuarioRoutes = await import('./src/rutas/usuario.js')
  app.use('/api/usuario', usuarioRoutes.default)
})()

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API corriendo correctamente')
})

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
