import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getQuiz } from "../data/quizzes.js";

function shuffle(questions) {
  return questions.map((question) => {
    const bag = question.options.map((text, index) => ({ text, ok: index === question.correct }));
    for (let index = bag.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [bag[index], bag[swap]] = [bag[swap], bag[index]];
    }
    return {
      prompt: question.prompt,
      why: question.why,
      options: bag.map((item) => item.text),
      correct: bag.findIndex((item) => item.ok),
    };
  });
}

function clock(total) {
  const minutes = String(Math.floor(total / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function Quiz() {
  const { id } = useParams();
  const quiz = getQuiz(id);
  const [round, setRound] = useState(0);
  const deck = useMemo(() => (quiz ? shuffle(quiz.questions) : []), [quiz, round]);
  const [index, setIndex] = useState(0);
  const [pick, setPick] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [left, setLeft] = useState(quiz?.minutes ? quiz.minutes * 60 : null);

  useEffect(() => {
    document.title = quiz ? `${quiz.title} · Cuestionario` : "Cuestionario";
  }, [quiz]);

  useEffect(() => {
    setIndex(0);
    setPick(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
    setLeft(quiz?.minutes ? quiz.minutes * 60 : null);
  }, [quiz, round]);

  useEffect(() => {
    if (left == null || done) return undefined;
    const timer = setInterval(() => {
      setLeft((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [left == null, done, round]);

  useEffect(() => {
    if (left === 0) setDone(true);
  }, [left]);

  if (!quiz) {
    return (
      <div className="page">
        <section className="play wrap">
          <h1>Ese cuestionario no existe.</h1>
          <Link className="back" to="/cuestionarios">
            Volver a los cuestionarios
          </Link>
        </section>
      </div>
    );
  }

  const question = deck[index];
  const total = deck.length;
  const progress = done ? 1 : (index + (revealed ? 1 : 0)) / total;

  function check() {
    if (pick == null || revealed) return;
    if (pick === question.correct) setScore((value) => value + 1);
    setRevealed(true);
  }

  function next() {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setPick(null);
    setRevealed(false);
  }

  return (
    <div className="page">
      <section className="play wrap">
        <Link className="back" to="/cuestionarios">
          ← Cuestionarios
        </Link>
        <p className="kicker">
          <span className="mark" aria-hidden="true" />
          Nivel {quiz.level}
        </p>
        <h1 className="q-title">{quiz.title}</h1>
        <div className="meta-row">
          <span>{done ? "Cerrado" : `Pregunta ${index + 1} de ${total}`}</span>
          {left != null ? <span>{clock(left)}</span> : <span>Sin límite de tiempo</span>}
        </div>
        <div className="progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>

        {done ? (
          <div>
            <p className="score">
              <b>{score}</b> de {total}
            </p>
            <p className="lead">
              {left === 0
                ? "Se acabó el tiempo. Lo que no llegaste a comprobar cuenta como no acertado."
                : score === total
                  ? "La tanda está completa."
                  : "Vuelve al tema si un criterio se ha quedado flojo."}
            </p>
            <div className="play-actions">
              <button type="button" className="btn solid" onClick={() => setRound((value) => value + 1)}>
                Repetir la tanda
              </button>
              <Link className="btn" to={`/temario/${quiz.module}`}>
                Abrir el tema
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="q-title" id="enunciado">
              {question.prompt}
            </h2>
            <fieldset className="choices" aria-labelledby="enunciado">
              {question.options.map((option, optionIndex) => {
                const status = revealed && optionIndex === question.correct ? "is-right" : "";
                const wrong = revealed && pick === optionIndex && optionIndex !== question.correct ? "is-wrong" : "";
                return (
                  <label className={`choice ${status} ${wrong}`} key={option}>
                    <input
                      type="radio"
                      name={`q-${round}-${index}`}
                      checked={pick === optionIndex}
                      disabled={revealed}
                      onChange={() => setPick(optionIndex)}
                    />
                    <span className="box" aria-hidden="true" />
                    <span>{option}</span>
                  </label>
                );
              })}
            </fieldset>
            {revealed ? (
              <p className="explain" role="status">
                {question.why}
              </p>
            ) : null}
            <div className="play-actions">
              {revealed ? (
                <button type="button" className="btn solid" onClick={next}>
                  {index + 1 === total ? "Ver el resultado" : "Siguiente pregunta"}
                </button>
              ) : (
                <button type="button" className="btn solid" disabled={pick == null} onClick={check}>
                  Comprobar
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
