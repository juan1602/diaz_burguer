import { menu } from "../data/menu";
import { CategoriaMenu } from "./CategoriaMenu";

export function Menu() {
  return (
    <main id="menu" className="mx-auto max-w-3xl scroll-mt-20 px-4 pt-14 pb-16">
      <h2 className="mb-8 text-center font-display text-4xl tracking-wide text-rojo uppercase">
        Menú Completo
      </h2>
      {menu.map((categoria) => (
        <CategoriaMenu key={categoria.id} categoria={categoria} />
      ))}
    </main>
  );
}
