import { obtenerUsuario } from './usuarioService';

export async function validarLogin(username: string, password: string) {
  const usuario = await obtenerUsuario(username);
  if (!usuario) return null;

  if (usuario.password === password) {
    return usuario;
  }

  return null;
}
