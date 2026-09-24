import { local } from "../data/local";

export function InfoLocal() {
  return (
    <section className="info-local" aria-label="Información del local">
      <p className="info-local__dato">
        {local.barrio}, {local.direccion}
      </p>
      <p className="info-local__dato">{local.ciudad}</p>
      <p className="info-local__dato">@{local.instagram}</p>
    </section>
  );
}
