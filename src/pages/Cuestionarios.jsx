import { useEffect } from "react";
import { Link } from "react-router-dom";
import { quizzes } from "../data/quizzes.js";

export default function Cuestionarios() {
  useEffect(() => {
    document.title = "Cuestionarios · Salud laboral";
  }, []);

  return (
    <div className="page">
      <section className="article">
        <div className="wrap">
          <p className="kicker">
            <span className="mark" aria-hidden="true" />
            Autoevaluación
          </p>
          <h1 className="page-title">Cuestionarios</h1>
          <p className="lead">Cinco tandas. Cada una aprieta más que la anterior. La última lleva reloj.</p>
          <div className="quiz-list" style={{ marginTop: 28 }}>
            {quizzes.map((quiz) => (
              <Link key={quiz.id} to={`/cuestionarios/${quiz.id}`}>
                <span className="ticks" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => (
                    <i key={index} className={index < quiz.level ? "on" : ""} style={{ "--i": index }} />
                  ))}
                </span>
                <span>
                  <strong>{quiz.title}</strong>
                  <span>{quiz.summary}</span>
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
