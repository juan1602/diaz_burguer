import { local } from "../data/local";
import logo from "../assets/logo-diaz-burguer.jpg";
import { Marquesina } from "./Marquesina";

export function Hero() {
  return (
    <section className="textura relative flex min-h-svh flex-col overflow-hidden px-5 pt-24 pb-24">
      {/* Brillo rojo de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(227,38,27,0.28),transparent_62%)]" />

      {/* Iniciales gigantes de marca de agua */}
      <div
        aria-hidden="true"
        className="texto-contorno-tenue pointer-events-none absolute top-10 -left-10 -rotate-8 font-display text-[460px] leading-[0.8] select-none"
      >
        DB
      </div>

      <div className="relative mx-auto flex w-full max-w-md flex-1 flex-col">
        <p className="inline-block origin-left -rotate-4 font-marcador text-lg text-amarillo">
          Hecho en San Martín
        </p>
        <h1 className="mt-1.5 font-display leading-[0.82] tracking-wide">
          <span className="block text-[124px] text-rojo">Díaz</span>
          <span className="texto-contorno block text-[96px] leading-[0.86] tracking-widest">
            Burguer
          </span>
        </h1>

        {/* Círculo con resplandor. Cuando haya foto de hamburguesa
            recortada, reemplaza el logo por esa imagen. */}
        <div className="relative mx-auto mt-6 grid size-[330px] max-w-full place-items-center rounded-full bg-[radial-gradient(circle,rgba(227,38,27,0.6),rgba(227,38,27,0)_66%)]">
          <img
            src={logo}
            alt={`${local.nombre} - ${local.eslogan}`}
            className="size-[240px] rounded-full object-cover shadow-2xl shadow-black/70 ring-2 ring-hueso/30"
          />
        </div>

        {/* Eslogan como papel pegado con cinta */}
        <div className="relative z-10 -mt-8 ml-3 self-start -rotate-3">
          <p className="relative bg-hueso px-4.5 py-2.5 font-marcador text-xl text-negro shadow-[0_6px_16px_rgba(0,0,0,0.5)]">
            {local.eslogan}
            <span className="absolute -top-2.5 -left-3.5 h-5 w-14 -rotate-24 bg-[rgba(230,215,180,0.75)]" />
            <span className="absolute -right-4 -bottom-2 h-5 w-14 -rotate-20 bg-[rgba(230,215,180,0.75)]" />
          </p>
        </div>

        <a
          href="#menu"
          className="mt-8 flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-rojo font-display text-[28px] tracking-wide text-white shadow-[0_12px_30px_rgba(227,38,27,0.45)] transition hover:bg-rojo-oscuro"
        >
          Ver menú
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <Marquesina
        texto="HAMBURGUESAS ARTESANALES ★ SAN MARTÍN, CESAR ★ PAN BRIOCHE ★ CARNE AHUMADA ★"
        className="absolute bottom-6 -left-10 w-[calc(100%+80px)] -rotate-3 bg-amarillo text-negro md:-rotate-1"
      />
    </section>
  );
}
