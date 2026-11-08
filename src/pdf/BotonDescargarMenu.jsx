import { useState } from "react";

export function BotonDescargarMenu({ categorias }) {
  const [estado, setEstado] = useState("listo"); // "listo" | "generando" | "error"

  async function descargar() {
    setEstado("generando");
    try {
      // import() dinámico: la librería del PDF solo se descarga al tocar el botón.
      const { descargarMenuPdf } = await import("./descargarMenuPdf");
      await descargarMenuPdf(categorias);
      setEstado("listo");
    } catch (error) {
      console.error("No se pudo generar el PDF del menú", error);
      setEstado("error");
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={descargar}
        disabled={estado === "generando" || categorias.length === 0}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-hueso ring-1 ring-rojo/60 transition hover:bg-rojo/10 disabled:cursor-wait disabled:opacity-60"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 text-rojo"
          aria-hidden="true"
        >
          <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
        </svg>
        {estado === "generando" ? "Preparando el menú…" : "Descargar menú en PDF"}
      </button>
      {estado === "error" && (
        <p className="text-sm text-rojo">No se pudo crear el PDF. Intenta de nuevo.</p>
      )}
    </div>
  );
}
