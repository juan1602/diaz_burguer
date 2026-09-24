import { formatPrecio } from "../utils/formatPrecio";

export function ProductoCard({ producto }) {
  return (
    <article className="producto-card">
      <div className="producto-card__encabezado">
        <h3 className="producto-card__nombre">{producto.nombre}</h3>
        <span className="producto-card__precio">
          {formatPrecio(producto.precio)}
        </span>
      </div>
      {producto.descripcion && (
        <p className="producto-card__descripcion">{producto.descripcion}</p>
      )}
    </article>
  );
}
