import { useEffect } from "react";
import { Link } from "react-router-dom";
import { modules } from "../data/modules.js";
import { quizzes } from "../data/quizzes.js";

export default function Home() {
  useEffect(() => {
    document.title = "Salud laboral · IPE I";
  }, []);

  return (
    <div className="page">
      <section className="hero">
        <div className="wrap">
          <p className="kicker" data-enter="true" style={{ "--i": 0 }}>
            <span className="mark" aria-hidden="true" />
            IPE I · Informática · Unidad 2
          </p>
          <h1 data-enter="true" style={{ "--i": 1 }}>
            Salud laboral, medida en el puesto
          </h1>
          <div className="rule" data-enter="true" style={{ "--i": 2 }} />
          <p className="lead" data-enter="true" style={{ "--i": 3 }}>
            La OMS no llama salud a la simple ausencia de enfermedad. En un puesto de informática ese equilibrio se
            mide: luz, ruido, grados y la forma de sentarse delante de la pantalla.
          </p>
          <p className="fact" data-enter="true" style={{ "--i": 4 }}>
            Programar pide <b>500 lux</b>. Una oficina debería estar entre <b>40 y 45 dBA</b>.
          </p>
          <div className="actions" data-enter="true" style={{ "--i": 5 }}>
            <Link className="btn solid" to="/temario">
              Ver el temario
            </Link>
            <Link className="btn" to="/cuestionarios">
              Abrir los cuestionarios
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="temas">
        <div className="wrap">
          <p className="kicker">
            <span className="mark" aria-hidden="true" />
            Temario
          </p>
          <h2 id="temas">Trece temas de examen</h2>
          <p className="deck">Del concepto de salud a la señal de evacuación. Cada ficha guarda el dato que suele caer.</p>
          <div className="index">
            {modules.map((item) => (
              <Link className="row" key={item.id} to={`/temario/${item.id}`}>
                <span className="num">{item.num}</span>
                <em>{item.title}</em>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pruebas">
        <div className="wrap">
          <p className="kicker">
            <span className="mark" aria-hidden="true" />
            Cuestionarios
          </p>
          <h2 id="pruebas">Cinco pruebas, cada vez más finas</h2>
          <p className="deck">
            La primera pide definiciones. La última pide aplicar el criterio a un caso, con el reloj en marcha.
          </p>
          <div className="quiz-list">
            {quizzes.map((quiz) => (
              <Link key={quiz.id} to={`/cuestionarios/${quiz.id}`}>
                <span className="ticks" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => (
                    <i key={index} className={index < quiz.level ? "on" : ""} style={{ "--i": index }} />
                  ))}
                </span>
                <span>
                  <strong>{quiz.title}</strong>
                  <span>
                    Nivel {quiz.level} · {quiz.questions.length} preguntas
                    {quiz.minutes ? ` · ${quiz.minutes} min` : ""}
                  </span>
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
