import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const isLocal = process.env.DB_HOST === 'localhost' || process.env.DB_HOST === '127.0.0.1'

export const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 5432,
  ssl: isLocal ? false : { rejectUnauthorized: false },
})
console.log('DB_PASSWORD:', typeof process.env.DB_PASSWORD, process.env.DB_PASSWORD);


