import { local } from "../data/local";

export function Contacto() {
  return (
    <section
      className="border-t border-negro-borde bg-negro-suave px-4 py-14 text-center"
      aria-label="Contacto y ubicación"
    >
      <h2 className="font-display text-3xl tracking-wide text-rojo uppercase">
        Visítanos
      </h2>
      <div className="mt-4 space-y-1 text-gray-300">
        <p>
          {local.barrio}, {local.direccion}
        </p>
        <p>{local.ciudad}</p>
        <p className="text-rojo">@{local.instagram}</p>
      </div>
    </section>
  );
}
