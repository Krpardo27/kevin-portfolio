export function validateContact(data) {
  const errors = [];

  if (!data.nombre || data.nombre.trim().length < 2) {
    errors.push("Nombre inválido");
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push("Correo inválido");
  }

  // Teléfono obligatorio
  if (!data.telefono || !/^\+?\d{8,15}$/.test(data.telefono)) {
    errors.push("Teléfono inválido");
  }

  // Mensaje opcional
  if (data.mensaje && data.mensaje.length < 5) {
    errors.push("Mensaje muy corto");
  }

  return errors;
}
