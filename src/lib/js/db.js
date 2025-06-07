import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // ← Render lo necesita
  },
});

console.log("Intentando conectar a PostgreSQL en:", process.env.DATABASE_URL);

db.connect()
  .then(client => {
    return client
      .query('SELECT NOW()')
      .then(res => {
        console.log("✅ Conexión exitosa. Hora actual del servidor PostgreSQL:", res.rows[0].now);
        client.release();
      })
      .catch(err => {
        console.error("❌ Error ejecutando query de prueba:", err);
        client.release();
      });
  })
  .catch(err => {
    console.error("❌ No se pudo conectar a la base de datos:", err);
  });

export default db;