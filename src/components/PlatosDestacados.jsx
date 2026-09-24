import { getProductosDestacados } from "../data/menu";
import { formatPrecio } from "../utils/formatPrecio";

export function PlatosDestacados() {
  const destacados = getProductosDestacados();

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 text-center">
      <h2 className="font-display text-4xl tracking-wide text-rojo uppercase">
        Platos Destacados
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
        Los favoritos de la casa
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {destacados.map((producto) => (
          <article
            key={producto.id}
            className="rounded-2xl bg-negro-suave p-6 text-left ring-1 ring-negro-borde"
          >
            <h3 className="font-display text-2xl text-white uppercase">
              {producto.nombre}
            </h3>
            <p className="mt-2 text-sm leading-snug text-gray-400">
              {producto.descripcion}
            </p>
            <p className="mt-4 text-xl font-bold text-rojo">
              {formatPrecio(producto.precio)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
