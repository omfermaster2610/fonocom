/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../lib/db';
import type { Usuario, Progreso } from './usuario';

export interface usuario {
  username: string
  password: string
  progreso: {
    [modulo: string]: {
      [actividad: string]: number
    }
  }
}

export async function obtenerUsuario(username: string): Promise<Usuario | null> {
  const resUsuario = await db.query('SELECT * FROM usuarios WHERE username = $1', [username]);
  if (resUsuario.rows.length === 0) return null;

  const usuario = resUsuario.rows[0] as Usuario;

  // Obtener progreso separado
  const resProgreso = await db.query(
    'SELECT progreso_json FROM progreso WHERE usuarioid = $1',
    [usuario.id]
  );

  const progreso = resProgreso.rows[0]?.progreso_json || {
    comunicacion: {},
    empleo: {},
    ideas: {},
  };

  return { ...usuario, progreso };
}

export async function guardarUsuario(usuario: Usuario): Promise<void> {
  const res = await db.query(
    `INSERT INTO usuarios (username, password)
     VALUES ($1, $2)
     ON CONFLICT (username) DO UPDATE SET password = EXCLUDED.password
     RETURNING id`,
    [usuario.username, usuario.password]
  );

  const usuarioid = res.rows[0].id;

  // Insertar o actualizar progreso usando ON CONFLICT
  await db.query(
    `INSERT INTO progreso (usuarioid, progreso_json)
    VALUES ($1, $2)
    ON CONFLICT (usuarioid) DO UPDATE SET
      progreso_json = EXCLUDED.progreso_json`,
    [
      usuarioid,
      usuario.progreso
    ]
  );
}

export async function registrarUsuario({ username, password }: { username: string, password: string }) {
  const res = await db.query(
    `INSERT INTO usuarios (username, password) VALUES ($1, $2) RETURNING id, username`,
    [username, password]
  )

  const nuevoUsuario = res.rows[0]

  await db.query(
    `INSERT INTO progreso (usuarioid, progreso_json) VALUES ($1, '{}')`,
    [nuevoUsuario.id]
  )

  return nuevoUsuario
}

export async function obtenerProgreso(usuarioId: number): Promise<any> {
  const result = await db.query(
    "SELECT progreso_json FROM progreso WHERE usuarioid = $1",
    [usuarioId]
  );
  return result.rows[0]?.progreso_json || {};
}

export async function actualizarProgreso(usuarioId: number, nuevoProgreso: any): Promise<void> {
  await db.query(
    "UPDATE progreso SET progreso_json = $1 WHERE usuarioid = $2",
    [nuevoProgreso, usuarioId]
  );
}

