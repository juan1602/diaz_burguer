import { obtenerIconoCategoria } from "../utils/categoriaIconos";

export function CategoriaExplorador({ categorias, idSeleccionada, onSeleccionar }) {
  return (
    <div>
      <p className="text-xs tracking-widest text-gray-500 uppercase">Explora</p>
      <h3 className="mb-3 font-display text-2xl text-white uppercase">Categorías</h3>
      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
        {categorias.map((categoria) => {
          const activa = categoria.id === idSeleccionada;
          return (
            <button
              key={categoria.id}
              type="button"
              onClick={() => onSeleccionar(categoria.id)}
              className={`flex w-20 shrink-0 flex-col items-center gap-2 rounded-xl p-3 ring-1 transition ${
                activa
                  ? "bg-rojo/15 ring-rojo"
                  : "bg-negro-suave ring-negro-borde hover:ring-rojo/40"
              }`}
            >
              <span className="text-2xl">{obtenerIconoCategoria(categoria.nombre)}</span>
              <span className="text-center text-xs font-medium text-white">
                {categoria.nombre}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
