import { formatPrecio } from "../utils/formatPrecio";

export function ProductoCard({ producto }) {
  return (
    <article className="rounded-xl bg-negro-suave p-4 ring-1 ring-negro-borde transition hover:ring-rojo/50">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-semibold text-white">{producto.nombre}</h3>
        <span className="whitespace-nowrap font-bold text-rojo">
          {formatPrecio(producto.precio)}
        </span>
      </div>
      {producto.descripcion && (
        <p className="mt-1.5 text-sm leading-snug text-gray-400">
          {producto.descripcion}
        </p>
      )}
    </article>
  );
}
