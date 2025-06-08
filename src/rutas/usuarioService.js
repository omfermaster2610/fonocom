/* eslint-disable import/no-anonymous-default-export */
import db from '../lib/js/db.js';

async function obtenerUsuario(username) {
  const resUsuario = await db.query('SELECT * FROM usuarios WHERE username = $1', [username]);
  if (resUsuario.rows.length === 0) return null;

  const usuario = resUsuario.rows[0];

  // Obtener progreso como JSON
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

async function guardarUsuario(usuario) {
  const res = await db.query(
    `INSERT INTO usuarios (username, password)
     VALUES ($1, $2)
     ON CONFLICT (username) DO UPDATE SET password = EXCLUDED.password
     RETURNING id`,
    [usuario.username, usuario.password]
  );

  const usuarioid = res.rows[0].id;

  await db.query(
    `INSERT INTO progreso (usuarioid, progreso_json)
     VALUES ($1, $2)
     ON CONFLICT (usuarioid) DO UPDATE SET progreso_json = EXCLUDED.progreso_json`,
    [usuarioid, usuario.progreso]
  );
}

async function obtenerProgreso(usuarioid) {
  const res = await db.query(
    'SELECT progreso_json FROM progreso WHERE usuarioid = $1',
    [usuarioid]
  );
  return res.rows[0]?.progreso_json || {
    comunicacion: {},
    empleo: {},
    ideas: {},
  };
}

async function actualizarProgreso(usuarioid, nuevoProgreso) {
  await db.query(
    `UPDATE progreso SET progreso_json = $1 WHERE usuarioid = $2`,
    [nuevoProgreso, usuarioid]
  );
}

export default {
  obtenerUsuario,
  guardarUsuario,
  obtenerProgreso,
  actualizarProgreso,
};
