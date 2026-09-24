import { useEffect, useState } from "react";

export function StickyHeader() {
  const [conFondo, setConFondo] = useState(false);

  useEffect(() => {
    function alScroll() {
      setConFondo(window.scrollY > 40);
    }
    window.addEventListener("scroll", alScroll);
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-3 transition-colors duration-300 ${
        conFondo
          ? "bg-negro/95 shadow-lg shadow-black/40 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <span className="font-display text-2xl tracking-wide uppercase">
        <span className="text-rojo">Díaz</span>{" "}
        <span className="text-white">Burguer</span>
      </span>
    </nav>
  );
}
