import { ProductoCard } from "./ProductoCard";

export function CategoriaMenu({ categoria }) {
  return (
    <section className="mb-10" aria-labelledby={`cat-${categoria.id}`}>
      <h2
        id={`cat-${categoria.id}`}
        className="mb-4 border-l-4 border-rojo pl-3 font-display text-3xl tracking-wide text-rojo uppercase"
      >
        {categoria.nombre}
      </h2>
      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2">
        {categoria.productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}
