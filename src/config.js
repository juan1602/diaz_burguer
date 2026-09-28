// En desarrollo esto queda vacío y las peticiones usan rutas relativas
// (el proxy de Vite las redirige al backend local). En producción,
// se define VITE_API_URL con la URL pública del backend (Railway).
export const API_URL = import.meta.env.VITE_API_URL ?? "";

export function urlImagen(ruta) {
  return ruta ? `${API_URL}${ruta}` : ruta;
}
