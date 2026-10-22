/**
 * Registra usuarios y valida sus datos básicos.
 */

function registrarUsuario(nombre, correo) {
  if (typeof nombre !== "string" || nombre.trim() === "") {
    throw new Error("El nombre es obligatorio");
  }

  if (typeof correo !== "string" || !correo.includes("@")) {
    throw new Error("El correo no es válido");
  }

  return {
    nombre: nombre.trim(),
    correo: correo.trim().toLowerCase()
  };
}

module.exports = { registrarUsuario };
