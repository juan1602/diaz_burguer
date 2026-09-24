import { menu } from "../data/menu";
import { CategoriaMenu } from "./CategoriaMenu";

export function Menu() {
  return (
    <main className="menu">
      {menu.map((categoria) => (
        <CategoriaMenu key={categoria.id} categoria={categoria} />
      ))}
    </main>
  );
}
