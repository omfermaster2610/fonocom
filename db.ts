import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';

console.log("Conectando con DATABASE_URL...");
console.log("DATABASE_URL:", process.env.DATABASE_URL || "No definida");

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Probar conexión al iniciar
db.connect()
  .then((client) => {
    return client
      .query('SELECT NOW()')
      .then((res) => {
        console.log("Conexión a PostgreSQL exitosa. Hora actual:", res.rows[0].now);
        client.release();
      })
      .catch((err) => {
        console.error("Error al ejecutar query de prueba:", err);
        client.release();
      });
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

export default db;
