/**
 * Registra usuarios y valida sus datos básicos.
 */

function registrarUsuario(nombre, correo) {
  // Validar el nombre
  if (typeof nombre !== "string" || nombre.trim() === "") {
    throw new Error("El nombre es obligatorio");
  }

  // Validar el correo electrónico
  if (
    typeof correo !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())
  ) {
    throw new Error("El correo no es válido");
  }

  // Retornar los datos del usuario
  return {
    nombre: nombre.trim(),
    correo: correo.trim().toLowerCase()
  };
}

module.exports = { registrarUsuario };
