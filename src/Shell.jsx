import { useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  ["/", "Inicio"],
  ["/temario", "Temario"],
  ["/cuestionarios", "Cuestionarios"],
];

export default function Shell() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link className="brand" to="/">
            <span className="mark" aria-hidden="true" />
            Salud laboral
          </Link>
          <nav className="nav-links" aria-label="Secciones">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="contenido" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="foot">
        <div className="wrap">IPE I · Informática · Unidad didáctica 2. Estudio a partir del temario y de las guías del INSST.</div>
      </footer>
    </>
  );
}
