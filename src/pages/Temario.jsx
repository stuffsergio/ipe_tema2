import { useEffect } from "react";
import { Link } from "react-router-dom";
import { modules } from "../data/modules.js";

export default function Temario() {
  useEffect(() => {
    document.title = "Temario · Salud laboral";
  }, []);

  return (
    <div className="page">
      <section className="article">
        <div className="wrap">
          <p className="kicker">
            <span className="mark" aria-hidden="true" />
            Unidad 2
          </p>
          <h1 className="page-title">Temario</h1>
          <p className="lead">Trece fichas. Entra en una y quédate con el número, el color o el caso límite.</p>
          <div className="index" style={{ marginTop: 36 }}>
            {modules.map((item) => (
              <Link className="row" key={item.id} to={`/temario/${item.id}`}>
                <span className="num">{item.num}</span>
                <span>
                  <em>{item.title}</em>
                </span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
