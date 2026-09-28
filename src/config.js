// En desarrollo esto queda vacío y las peticiones usan rutas relativas
// (el proxy de Vite las redirige al backend local). En producción,
// se define VITE_API_URL con la URL pública del backend (Railway).
export const API_URL = import.meta.env.VITE_API_URL ?? "";

export function urlImagen(ruta) {
  if (!ruta) return ruta;
  // Las fotos de Cloudinary ya son URLs completas (https://...);
  // solo las rutas relativas antiguas necesitan la URL del backend.
  return ruta.startsWith("http") ? ruta : `${API_URL}${ruta}`;
}
