async function solicitud(url, opciones = {}) {
  const respuesta = await fetch(url, {
    credentials: "include",
    headers: opciones.body instanceof FormData ? undefined : { "Content-Type": "application/json" },
    ...opciones,
  });

  if (!respuesta.ok) {
    const datos = await respuesta.json().catch(() => null);
    throw new Error(datos?.error ?? `Error ${respuesta.status}`);
  }

  if (respuesta.status === 204) {
    return null;
  }

  return respuesta.json();
}

export function crearCategoria(nombre) {
  return solicitud("/api/admin/categorias", {
    method: "POST",
    body: JSON.stringify({ nombre }),
  });
}

export function actualizarCategoria(id, nombre) {
  return solicitud(`/api/admin/categorias/${id}`, {
    method: "PUT",
    body: JSON.stringify({ nombre }),
  });
}

export function eliminarCategoria(id) {
  return solicitud(`/api/admin/categorias/${id}`, { method: "DELETE" });
}

export function crearProducto(datos) {
  return solicitud("/api/admin/productos", {
    method: "POST",
    body: JSON.stringify(datos),
  });
}

export function actualizarProducto(id, datos) {
  return solicitud(`/api/admin/productos/${id}`, {
    method: "PUT",
    body: JSON.stringify(datos),
  });
}

export function eliminarProducto(id) {
  return solicitud(`/api/admin/productos/${id}`, { method: "DELETE" });
}

export function subirImagen(archivo) {
  const formData = new FormData();
  formData.append("archivo", archivo);
  return solicitud("/api/admin/imagenes", {
    method: "POST",
    body: formData,
  });
}
