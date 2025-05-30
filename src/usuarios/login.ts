import { obtenerUsuario } from "./usuarioService";

export function validarLogin(username: string, password: string) {
  const usuario = obtenerUsuario(username);
  if (!usuario) return null;

  // Compara contraseña (aquí en texto plano, idealmente con hash)
  if (usuario.password === password) {
    return usuario;
  }

  return null;
}
