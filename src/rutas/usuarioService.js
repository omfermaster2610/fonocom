/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import db from '../lib/js/db.js';


async function obtenerUsuario(username) {
  const resUsuario = await db.query('SELECT * FROM usuarios WHERE username = $1', [username]);
  if (resUsuario.rows.length === 0) return null;

  const usuario = resUsuario.rows[0];

  // Obtener progreso separado
  const resProgreso = await db.query(
    'SELECT comunicacion, empleo, ideas FROM progreso WHERE usuarioid = $1',
    [usuario.id]
  );

  const progreso = resProgreso.rows[0] || {
    comunicacion: 0,
    empleo: 0,
    ideas: 0,
  };

  return { ...usuario, progreso };
}

async function guardarUsuario(usuario) {
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

async function obtenerProgreso(usuarioid) {
  const res = await db.query(
    'SELECT comunicacion, empleo, ideas FROM progreso WHERE usuarioid = $1',
    [usuarioid]
  );
  return res.rows[0] || {
    comunicacion: 0,
    empleo: 0,
    ideas: 0,
  };
}

async function actualizarProgreso(usuarioid, nuevoProgreso) {
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

export default {
  obtenerUsuario,
  guardarUsuario,
  obtenerProgreso,
  actualizarProgreso,
};
