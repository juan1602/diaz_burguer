import { local } from "../data/local";

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-diaz">Díaz</span>
        <span className="header__logo-burguer">Burguer</span>
      </div>
      <p className="header__eslogan">{local.eslogan}</p>
    </header>
  );
}
