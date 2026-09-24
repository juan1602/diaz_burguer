import { ProductoCard } from "./ProductoCard";

export function CategoriaMenu({ categoria }) {
  return (
    <section className="categoria-menu" aria-labelledby={`cat-${categoria.id}`}>
      <h2 className="categoria-menu__titulo" id={`cat-${categoria.id}`}>
        {categoria.nombre}
      </h2>
      <div className="categoria-menu__lista">
        {categoria.productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}
