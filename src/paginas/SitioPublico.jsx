import { useMenu } from "../hooks/useMenu";
import { StickyHeader } from "../components/StickyHeader";
import { Hero } from "../components/Hero";
import { PlatosDestacados } from "../components/PlatosDestacados";
import { Menu } from "../components/Menu";
import { Contacto } from "../components/Contacto";

export function SitioPublico() {
  const { categorias, cargando, error } = useMenu();

  return (
    <div className="min-h-screen bg-negro">
      <StickyHeader />
      <Hero />
      <PlatosDestacados categorias={categorias} cargando={cargando} />
      <Menu categorias={categorias} cargando={cargando} error={error} />
      <Contacto />
    </div>
  );
}
