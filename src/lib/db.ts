import dotenv from 'dotenv';
dotenv.config(); // Siempre primero

import { Pool } from 'pg';

console.log("🟡 Verificando conexión a la base de datos...");
console.log("DATABASE_URL:", process.env.DATABASE_URL || "❌ No definida");

// Crear el pool usando connectionString
export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Requerido por proveedores como Render
  },
});

// Probar la conexión inmediatamente
db.connect()
  .then((client) => {
    console.log("✅ Conectado a la base de datos correctamente.");

    return client
      .query('SELECT NOW()')
      .then((res) => {
        console.log("📅 Hora actual en DB:", res.rows[0].now);
        client.release();
      })
      .catch((err) => {
        console.error("❌ Error ejecutando query de prueba:", err);
        client.release();
      });
  })
  .catch((err) => {
    console.error("❌ No se pudo conectar al pool de la base de datos:", err);
  });
