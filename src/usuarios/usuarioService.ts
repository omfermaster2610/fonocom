/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../lib/db';
import type { Usuario, Progreso } from './usuario';

export interface usuario {
  username: string
  password?: string  // Opcional, porque usualmente no quieres tener la contraseña en frontend
  progreso: {
    comunicacion: number
    empleo: number
    ideas: number
  }
}

export async function obtenerUsuario(username: string): Promise<Usuario | null> {
  const resUsuario = await db.query('SELECT * FROM usuarios WHERE username = $1', [username]);
  if (resUsuario.rows.length === 0) return null;

  const usuario = resUsuario.rows[0] as Usuario;

  // Obtener progreso separado
  const resProgreso = await db.query(
    'SELECT comunicacion, empleo, ideas FROM progreso WHERE usuarioid = $1',
    [usuario.id]
  );

  const progreso = (resProgreso.rows[0] as Progreso) || {
    comunicacion: 0,
    empleo: 0,
    ideas: 0,
  };

  return { ...usuario, progreso };
}


export async function guardarUsuario(usuario: Usuario): Promise<void> {
  // Insertar o actualizar el usuario usando ON CONFLICT
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
    `INSERT INTO progreso (usuarioid, comunicacion, empleo, ideas)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (usuarioid) DO UPDATE SET
       comunicacion = EXCLUDED.comunicacion,
       empleo = EXCLUDED.empleo,
       ideas = EXCLUDED.ideas`,
    [
      usuarioid,
      usuario.progreso.comunicacion,
      usuario.progreso.empleo,
      usuario.progreso.ideas,
    ]
  );
}


export async function obtenerProgreso(usuarioid: number): Promise<Progreso> {
  const res = await db.query(
    'SELECT comunicacion, empleo, ideas FROM progreso WHERE usuarioid = $1',
    [usuarioid]
  );
  return (res.rows[0] as Progreso) || {
    comunicacion: 0,
    empleo: 0,
    ideas: 0,
  };
}


export async function actualizarProgreso(usuarioid: number, nuevoProgreso: Progreso): Promise<void> {
  await db.query(
    `UPDATE progreso SET comunicacion = $1, empleo = $2, ideas = $3 WHERE usuarioid = $4`,
    [
      nuevoProgreso.comunicacion,
      nuevoProgreso.empleo,
      nuevoProgreso.ideas,
      usuarioid,
    ]
  );
}

