import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getModule } from "../data/modules.js";
import { widgets } from "../widgets.jsx";

function Block({ block }) {
  if (block.type === "h") return <h2>{block.text}</h2>;
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="quote">
        <p>{block.text}</p>
        <cite>{block.cite}</cite>
      </blockquote>
    );
  }
  if (block.type === "note") {
    return (
      <aside className="note">
        <p>{block.text}</p>
      </aside>
    );
  }
  if (block.type === "image") {
    return (
      <div className="figure">
        <img src={block.src} alt={block.alt} width="1376" height="768" />
      </div>
    );
  }
  if (block.type === "table") {
    return (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {block.headers.map((header) => (
                <th key={header || "c"} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell, index) => (
                  <td key={`${block.headers[index]}-${cell}`}>
                    {block.headers[index] ? <span className="cell-label">{block.headers[index]}</span> : null}
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === "widget") {
    const View = widgets[block.id];
    return View ? <View /> : null;
  }
  return null;
}

export default function Modulo() {
  const { id } = useParams();
  const module = getModule(id);

  useEffect(() => {
    document.title = module ? `${module.title} · Temario` : "Temario";
  }, [module]);

  if (!module) {
    return (
      <div className="page">
        <section className="article">
          <div className="wrap">
            <h1>Ese tema no está en la unidad.</h1>
            <Link className="back" to="/temario">
              Volver al temario
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <article className="article">
        <div className="wrap">
          <Link className="back" to="/temario">
            ← Temario
          </Link>
          <p className="kicker">
            <span className="mark" aria-hidden="true" />
            Tema {module.num}
          </p>
          <h1>{module.title}</h1>
          <p className="lead">{module.lead}</p>
          <div className="prose">
            {module.blocks.map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
