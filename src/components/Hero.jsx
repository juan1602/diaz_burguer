import { local } from "../data/local";
import logo from "../assets/logo-diaz-burguer.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-negro px-4 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(226,35,26,0.25),transparent_60%)]" />
      <img
        src={logo}
        alt={`${local.nombre} - ${local.eslogan}`}
        className="relative w-56 rounded-2xl shadow-2xl shadow-black/60 ring-1 ring-negro-borde sm:w-72"
      />
      <a
        href="#menu"
        className="relative mt-10 rounded-full bg-rojo px-8 py-3 font-semibold tracking-wide text-white uppercase shadow-lg shadow-rojo/30 transition hover:bg-rojo-oscuro"
      >
        Ver menú
      </a>
    </section>
  );
}
