import { StickyHeader } from "./components/StickyHeader";
import { Hero } from "./components/Hero";
import { PlatosDestacados } from "./components/PlatosDestacados";
import { Menu } from "./components/Menu";
import { Contacto } from "./components/Contacto";

function App() {
  return (
    <div className="min-h-screen bg-negro">
      <StickyHeader />
      <Hero />
      <PlatosDestacados />
      <Menu />
      <Contacto />
    </div>
  );
}

export default App;
