import db from "../../db";

export async function validarLogin(username: string, password: string) {
  try {
    const res = await db.query(
      "SELECT id, username, password FROM usuarios WHERE username = $1",
      [username]
    );

    const usuario = res.rows[0];
    if (!usuario) return null;

    console.log("Usuario encontrado:", usuario);
    console.log("Password:", password);

    if (usuario.password === password) {
      // Puedes devolver más info si es necesario
      return {
        id: usuario.id,
        username: usuario.username,
        // evita devolver la contraseña
      };
    }

    return null;
  } catch (error) {
    console.error("Error al validar login:", error);
    return null;
  }
}
