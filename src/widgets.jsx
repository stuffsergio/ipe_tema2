import { useState } from "react";

function Slider({ min, max, value, onChange, label }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <input
      className="slider"
      type="range"
      min={min}
      max={max}
      value={value}
      aria-label={label}
      onChange={(event) => onChange(Number(event.target.value))}
      style={{ "--pct": `${pct}%` }}
    />
  );
}

export function NoiseMeter() {
  const [mode, setMode] = useState("oficina");
  const [db, setDb] = useState(42);
  const office = mode === "oficina";
  let text = "Dentro de los 40–45 dBA que pide la NTP 503.";
  if (office && db < 40) text = "Por debajo del rango de oficina. Holgado para concentrarse.";
  if (office && db > 45 && db <= 50) text = "En el borde. A partir de 50 dBA empiezan las quejas.";
  if (office && db > 50) text = "Disconfort: más errores y menos concentración. Aún no es el umbral del EPI.";
  if (!office && db < 80) text = "Por debajo del valor inferior de acción (80 dBA).";
  if (!office && db >= 80 && db < 85) text = "Valor inferior: el protector se entrega y el uso es voluntario.";
  if (!office && db >= 85 && db <= 87) text = "Valor superior: el protector es obligatorio y la zona se señaliza.";
  if (!office && db > 87) text = "Por encima del límite en el oído (87 dBA). Hay que corregir ya.";

  return (
    <div className="widget">
      <p className="kicker">Práctica</p>
      <h3>Medidor de ruido</h3>
      <p className="hint">Misma escala, dos normas. Cambia de local y mueve el nivel.</p>
      <div className="modes">
        <button type="button" aria-pressed={office} onClick={() => setMode("oficina")}>
          Oficina
        </button>
        <button type="button" aria-pressed={!office} onClick={() => setMode("cpd")}>
          CPD
        </button>
      </div>
      <Slider min={30} max={100} value={db} onChange={setDb} label="Nivel sonoro en decibelios" />
      <p className="readout">
        <b>{db} dBA</b> · {text}
      </p>
    </div>
  );
}

export function LuxMeter() {
  const [lux, setLux] = useState(500);
  let text = "Exigencia alta: oficina, programación y trabajo con pantalla.";
  if (lux < 50) text = "Corto incluso para un pasillo de uso habitual.";
  else if (lux < 100) text = "Pasillo de uso habitual. Aún no cubre un almacén.";
  else if (lux < 200) text = "Exigencia baja: almacén de hardware o mantenimiento.";
  else if (lux < 500) text = "Exigencia moderada. Se queda corto para programar.";
  else if (lux < 1000) text = "Exigencia alta: oficina, programación y trabajo con pantalla.";
  else if (lux < 5000) text = "Exigencia muy alta: microelectrónica o soldadura de placas.";
  else text = "Trabajo de precisión, como la inspección de un microchip.";

  return (
    <div className="widget">
      <p className="kicker">Práctica</p>
      <h3>Medidor de lux</h3>
      <p className="hint">El RD 486/1997 cambia el mínimo según lo que la vista tiene que resolver.</p>
      <Slider min={0} max={1000} value={lux} onChange={setLux} label="Iluminación en lux" />
      <p className="readout">
        <b>{lux} lux</b> · {text}
      </p>
    </div>
  );
}

export function ErgoBench() {
  const [distance, setDistance] = useState(55);
  const [angle, setAngle] = useState(30);
  const [foot, setFoot] = useState(10);
  const [keyboard, setKeyboard] = useState(true);
  const rows = [
    [distance >= 40, "Distancia ojo-pantalla", `${distance} cm`, "Mínimo 40 cm"],
    [angle <= 60, "Mirada por debajo de la horizontal", `${angle}°`, "Hasta 60°"],
    [foot <= 15, "Inclinación del reposapiés", `${foot}°`, "De 0° a 15°"],
    [keyboard, "Teclado independiente", keyboard ? "Sí" : "No", "Separado de la pantalla"],
  ];

  return (
    <div className="widget">
      <p className="kicker">Práctica</p>
      <h3>Puesto con pantalla</h3>
      <p className="hint">Ajusta el puesto. El punto se enciende cuando el valor entra en la guía.</p>
      <div className="checks">
        <div className="check">
          <span className={rows[0][0] ? "dot on" : "dot"} />
          <span>Distancia · {distance} cm</span>
          <Slider min={20} max={90} value={distance} onChange={setDistance} label="Distancia al monitor en centímetros" />
        </div>
        <div className="check">
          <span className={rows[1][0] ? "dot on" : "dot"} />
          <span>Ángulo de visión · {angle}°</span>
          <Slider min={0} max={80} value={angle} onChange={setAngle} label="Ángulo de visión hacia abajo" />
        </div>
        <div className="check">
          <span className={rows[2][0] ? "dot on" : "dot"} />
          <span>Reposapiés · {foot}°</span>
          <Slider min={0} max={30} value={foot} onChange={setFoot} label="Inclinación del reposapiés" />
        </div>
        <div className="check">
          <span className={keyboard ? "dot on" : "dot"} />
          <span>Teclado independiente</span>
          <button type="button" className="mini" aria-pressed={keyboard} onClick={() => setKeyboard((value) => !value)}>
            {keyboard ? "Independiente" : "Pegado a la pantalla"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ClimateBench() {
  const [temp, setTemp] = useState(22);
  const [humidity, setHumidity] = useState(45);
  const [cpd, setCpd] = useState(false);
  const tempOk = temp >= 17 && temp <= 27;
  const humidOk = cpd ? humidity >= 50 && humidity <= 70 : humidity >= 30 && humidity <= 70;
  let text = "Oficina dentro de 17–27 ºC y del 30 % al 70 % de humedad.";
  if (!tempOk) text = "Fuera de 17–27 ºC. Ese es el intervalo del trabajo sedentario.";
  else if (cpd && humidity < 50) text = "En el CPD la humedad no puede bajar del 50 %: hay riesgo de electricidad estática.";
  else if (!humidOk) text = "La humedad general tiene que quedar entre el 30 % y el 70 %.";
  else if (cpd) text = "Humedad de sala técnica en rango, por encima del 50 %.";

  return (
    <div className="widget">
      <p className="kicker">Práctica</p>
      <h3>Temperatura y humedad</h3>
      <div className="modes">
        <button type="button" aria-pressed={!cpd} onClick={() => setCpd(false)}>
          Oficina
        </button>
        <button type="button" aria-pressed={cpd} onClick={() => setCpd(true)}>
          CPD
        </button>
      </div>
      <p className="hint">Temperatura: {temp} ºC</p>
      <Slider min={10} max={35} value={temp} onChange={setTemp} label="Temperatura en grados" />
      <p className="hint">Humedad: {humidity} %</p>
      <Slider min={20} max={80} value={humidity} onChange={setHumidity} label="Humedad relativa" />
      <p className="readout">{text}</p>
    </div>
  );
}

const CASES = [
  { id: "itinere", text: "Alcance al volver a casa por la ruta habitual, sin paradas.", at: true },
  { id: "shop", text: "Desvío para comprar y choque al salir de ese aparcamiento.", at: false },
  { id: "mision", text: "Golpe yendo a otra sede a reparar un servidor, por orden de la empresa.", at: true },
  { id: "ray", text: "Lesión por un rayo en la oficina, sin relación con la tarea.", at: false },
  { id: "trust", text: "Corte al repetir una maniobra diaria por exceso de confianza.", at: true },
  { id: "reckless", text: "Corte tras quitar la protección que estaba prohibido retirar.", at: false },
  { id: "save", text: "Lesión al socorrer a un compañero dentro del centro.", at: true },
  { id: "dolo", text: "Lesión buscada a propósito.", at: false },
];

export function AccidentSort() {
  const [picks, setPicks] = useState({});
  const [checked, setChecked] = useState(false);
  const ready = CASES.every((item) => picks[item.id]);

  return (
    <div className="widget">
      <p className="kicker">Práctica</p>
      <h3>¿Entra como accidente de trabajo?</h3>
      <p className="hint">Clasifica cada supuesto. La corrección aparece al cerrar la tanda.</p>
      <div className="cases">
        {CASES.map((item) => {
          const pick = picks[item.id];
          const ok = checked && pick === (item.at ? "si" : "no");
          return (
            <div className="case" key={item.id}>
              <div>
                <p>{item.text}</p>
                {checked ? <small>{ok ? "Encaja con el criterio." : item.at ? "Sí es accidente de trabajo." : "No entra como accidente de trabajo."}</small> : null}
              </div>
              <div className="pair">
                <button
                  type="button"
                  className="mini"
                  aria-pressed={pick === "si"}
                  disabled={checked}
                  onClick={() => setPicks((prev) => ({ ...prev, [item.id]: "si" }))}
                >
                  Sí es
                </button>
                <button
                  type="button"
                  className="mini"
                  aria-pressed={pick === "no"}
                  disabled={checked}
                  onClick={() => setPicks((prev) => ({ ...prev, [item.id]: "no" }))}
                >
                  No es
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="play-actions">
        <button type="button" className="btn solid" disabled={!ready || checked} onClick={() => setChecked(true)}>
          Corregir la tanda
        </button>
        {checked ? (
          <button
            type="button"
            className="btn"
            onClick={() => {
              setPicks({});
              setChecked(false);
            }}
          >
            Vaciar
          </button>
        ) : null}
      </div>
    </div>
  );
}

export const widgets = {
  noise: NoiseMeter,
  lux: LuxMeter,
  ergo: ErgoBench,
  climate: ClimateBench,
  accidents: AccidentSort,
};
