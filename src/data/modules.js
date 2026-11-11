export const modules = [
  {
    id: "salud",
    num: "01",
    title: "Salud, marco legal y FFEOE",
    lead: "Qué cuenta como salud, qué normas la protegen en el trabajo y cómo queda cubierto el alumnado en la empresa.",
    blocks: [
      {
        type: "quote",
        text: "La salud es el estado de completo bienestar físico, psíquico y social, y no solo la ausencia de afecciones o enfermedades.",
        cite: "Organización Mundial de la Salud",
      },
      { type: "h", text: "El trabajo corta en los dos sentidos" },
      {
        type: "p",
        text: "El trabajo y la salud se mueven juntos. Cuando el puesto está bien resuelto, cubre necesidades, permite desarrollarse e integra. Cuando las condiciones fallan, ese mismo trabajo rompe el equilibrio y deja accidentes, enfermedades profesionales, fatiga o insatisfacción.",
      },
      { type: "h", text: "De dónde sale la obligación" },
      {
        type: "table",
        headers: ["Norma", "Qué aporta"],
        rows: [
          ["Constitución, art. 40.2", "Los poderes públicos velan por la seguridad e higiene en el trabajo."],
          ["Estatuto de los Trabajadores, art. 19", "Derecho a la seguridad y a la integridad física."],
          ["Ley 31/1995, reformada por la 54/2003", "Norma marco. Principios: prevención, eficacia, coordinación, participación y responsabilidad."],
          ["Directiva 89/391/CEE", "Base europea del sistema de prevención."],
        ],
      },
      { type: "h", text: "Alumnado en la empresa" },
      {
        type: "p",
        text: "Quien cursa Formación en Empresa (FFEOE) está de alta en la Seguridad Social y cotiza por contingencias comunes y profesionales. Cubre, por tanto, el accidente de trabajo y la enfermedad profesional.",
      },
      {
        type: "note",
        text: "La mutua de accidentes de trabajo de la empresa colaboradora presta la asistencia y gestiona las prestaciones. No queda en manos del centro educativo.",
      },
    ],
  },
  {
    id: "ruido",
    num: "02",
    title: "Ruido y confort acústico",
    lead: "El mismo decibelio no significa lo mismo en un CPD y en una oficina abierta.",
    blocks: [
      {
        type: "p",
        text: "El ruido es un sonido no deseado. Se mide en decibelios y no basta el volumen: importa cuánto dura. La referencia de jornada es el nivel continuo equivalente de ocho horas, LAeq,8h.",
      },
      { type: "h", text: "Tres aparatos, tres preguntas" },
      {
        type: "ul",
        items: [
          "Sonómetro: ruido continuo en un punto o en un recinto.",
          "Dosímetro: dosis que acumula una persona mientras se mueve.",
          "Analizador de impacto: picos de un ruido impulsivo.",
        ],
      },
      { type: "h", text: "Dos riesgos distintos" },
      {
        type: "table",
        headers: ["", "CPD y entorno industrial", "Oficina y open space"],
        rows: [
          ["Tipo", "Higiénico: puede ser enfermedad profesional", "Ergonómico y psicosocial: se pierde el confort"],
          ["Daño", "Hipoacusia, acúfenos, células ciliadas dañadas", "Fatiga, estrés, falta de concentración, errores en el código"],
          ["Norma", "RD 286/2006", "NTP 503 del INSST"],
          ["Señal de aviso", "Hay que gritar a corta distancia", "El tecleo, las llamadas o la música rompen la atención"],
        ],
      },
      { type: "h", text: "RD 286/2006" },
      {
        type: "table",
        headers: ["Umbral", "Diario", "Pico", "Qué obliga"],
        rows: [
          ["Valor inferior de acción", "80 dBA", "135 dBC", "EPI de uso voluntario. Evaluación cada 3 años. Audiometría cada 5 años. Formación."],
          ["Valor superior de acción", "85 dBA", "137 dBC", "EPI de uso obligatorio. Evaluación anual. Audiometría cada 3 años. Señalización y plan de reducción."],
          ["Valor límite", "87 dBA", "140 dBC", "Tope en el oído, ya contada la atenuación del EPI. Si se cruza, corrección inmediata."],
        ],
      },
      { type: "h", text: "NTP 503 en la oficina" },
      {
        type: "ul",
        items: [
          "Nivel recomendado: 40–45 dBA.",
          "Quejas y disconfort: a partir de 50 dBA.",
          "Climatización en zona de concentración: por debajo de 35 dBA, e idealmente de 30 dBA.",
          "Orden de actuación: primero la fuente, después el medio, al final el receptor.",
        ],
      },
      {
        type: "note",
        text: "Fuente: teclados silenciosos, extractores aislados, servidores apartados. Medio: paneles, mamparas, falso techo. Receptor: separar el soporte telefónico de las zonas de silencio.",
      },
      { type: "widget", id: "noise" },
    ],
  },
  {
    id: "vibracion",
    num: "03",
    title: "Vibraciones",
    lead: "RD 1311/2005. La frecuencia y el camino hasta el cuerpo cambian la lesión.",
    blocks: [
      {
        type: "table",
        headers: ["Frecuencia", "Dónde aparece", "Qué suele producir"],
        rows: [
          ["Muy baja, por debajo de 2 Hz", "Barcos, trenes, aviones", "Mareos y vértigo"],
          ["Baja, de 2 a 20 Hz", "Camiones, grúas, transporte", "Lumbalgias y hernias discales"],
          ["Alta, por encima de 20 Hz", "Martillos neumáticos, pulidoras", "Lesiones de articulaciones y huesos"],
        ],
      },
      { type: "h", text: "Por dónde entra" },
      {
        type: "ul",
        items: [
          "Mano-brazo: herramientas manuales. Enfermedad de Raynaud (dedo blanco), osteonecrosis del escafoides, artrosis de codo. Valor de acción: 2,5 m/s².",
          "Cuerpo entero: asiento o plataforma. Discopatías, ciática y trastornos digestivos. Valor de acción: 0,5 m/s².",
        ],
      },
    ],
  },
  {
    id: "luz",
    num: "04",
    title: "Iluminación y puesto con pantalla",
    lead: "RD 486/1997 y guía del INSST. Primero la luz del día; la pantalla, de lado.",
    blocks: [
      {
        type: "p",
        text: "El orden es iluminación natural, después artificial general y, solo si la tarea lo pide, localizada. El alumbrado de emergencia es obligatorio cuando un apagón impida evacuar o apagar servidores y cuadros con seguridad.",
      },
      {
        type: "note",
        text: "El efecto estroboscópico —el parpadeo de una luminaria defectuosa— fatiga la vista y puede hacer creer que un ventilador del CPD está parado. Ahí nace el riesgo de atrapamiento o de corte.",
      },
      { type: "h", text: "Lux mínimos" },
      {
        type: "table",
        headers: ["Exigencia", "Mínimo", "En informática"],
        rows: [
          ["Baja", "100 lux", "Almacén de hardware, cuarto de mantenimiento"],
          ["Moderada", "200 lux", "Montaje sencillo, recepción"],
          ["Alta", "500 lux", "Oficina, programación, PVD, lectura"],
          ["Muy alta", "1.000 lux", "Microelectrónica, soldadura de placas"],
          ["Precisión", "5.000 lux", "Inspección de circuitos ópticos o microchip"],
          ["Circulación habitual", "50 lux", "Pasillos y zonas de paso"],
        ],
      },
      {
        type: "p",
        text: "Esos mínimos se duplican si una caída es plausible, si un error visual crea un peligro grave o si el contraste entre el objeto y el fondo es muy débil. Un exceso de luz también falla: mata el contraste del monitor, crea reflejos y termina en fatiga visual y cefalea.",
      },
      { type: "widget", id: "lux" },
      { type: "h", text: "El puesto con pantalla" },
      {
        type: "image",
        src: "/img/ergonomia_pvd_informatica.png",
        alt: "Esquema de una persona ante el ordenador: borde del monitor a la altura de los ojos, codos y rodillas en ángulo recto, luz natural lateral y reposapiés.",
      },
      {
        type: "ul",
        items: [
          "Distancia ojo-pantalla: más de 40 cm. Lo habitual, entre 50 y 70 cm.",
          "El borde superior queda a la altura de los ojos o un poco por debajo. La mirada puede bajar hasta 60°.",
          "Pantalla perpendicular a la ventana, luz lateral, acabado mate.",
          "Atril regulable, a la misma altura y distancia que la pantalla, para no forzar la acomodación ni girar el cuello.",
          "Reposapiés antideslizante, entre 0° y 15°.",
          "Teclado independiente e inclinable, con sitio delante para muñecas y antebrazos. Ratón cerca del teclado, adaptado a la mano.",
          "Silla estable, cinco apoyos con ruedas, altura y profundidad regulables, apoyo lumbar y bordes redondeados.",
          "Pausas de 10 a 15 minutos cada 1 o 2 horas, y reconocimientos oftalmológicos.",
        ],
      },
      { type: "widget", id: "ergo" },
    ],
  },
  {
    id: "clima",
    num: "05",
    title: "Temperatura y humedad",
    lead: "Anexo III del RD 486/1997. El CPD no se trata como una oficina.",
    blocks: [
      {
        type: "table",
        headers: ["Condición", "Intervalo"],
        rows: [
          ["Trabajo sedentario: oficina e informática", "De 17 ºC a 27 ºC"],
          ["Trabajo ligero", "De 14 ºC a 25 ºC"],
          ["Humedad relativa general", "Del 30 % al 70 %"],
          ["Salas con electricidad estática, como un CPD", "La humedad no baja del 50 %"],
        ],
      },
      { type: "widget", id: "climate" },
    ],
  },
  {
    id: "quimicos",
    num: "06",
    title: "Agentes químicos",
    lead: "Por dónde entra un contaminante y qué diferencia una intoxicación de una enfermedad profesional.",
    blocks: [
      { type: "h", text: "Vías de entrada" },
      {
        type: "ul",
        items: [
          "Respiratoria, por inhalación. Es la vía principal: polvos, humos, gases y vapores.",
          "Digestiva, por ingestión. Aparece al comer, beber o fumar en el puesto.",
          "Cutánea. Absorción a través de la piel.",
          "Parenteral. Entrada directa por corte, punción o herida abierta.",
        ],
      },
      { type: "h", text: "Aguda o crónica" },
      {
        type: "ul",
        items: [
          "Intoxicación aguda: efecto inmediato tras una exposición intensa o accidental a una dosis alta.",
          "Intoxicación crónica: deterioro largo por dosis bajas y repetidas. Puede llegar a ser enfermedad profesional.",
        ],
      },
    ],
  },
  {
    id: "accidente",
    num: "07",
    title: "Accidente de trabajo",
    lead: "Hace falta una lesión y un nexo con el trabajo. No todo lo que ocurre en el día laboral entra.",
    blocks: [
      {
        type: "p",
        text: "Es accidente de trabajo toda lesión corporal que la persona trabajadora sufra con ocasión o como consecuencia del trabajo por cuenta ajena. La lesión puede ser física o psíquica. Lo ocurrido en tiempo y lugar de trabajo se presume accidente, salvo prueba en contrario.",
      },
      { type: "h", text: "Sí entra" },
      {
        type: "ul",
        items: [
          "In itinere: ida o vuelta, con motivo laboral, en tiempo habitual, por un trayecto lógico y sin paradas personales, en un medio adecuado.",
          "In misión: desplazamiento ordenado por la empresa para un encargo, por ejemplo reparar un servidor en otra sede.",
          "Imprudencia profesional: exceso de confianza o rutina.",
          "Tareas distintas de las habituales, si las ordena la empresa.",
          "Actos de salvamento ligados al trabajo.",
        ],
      },
      { type: "h", text: "No entra" },
      {
        type: "ul",
        items: [
          "Fuerza mayor extraña al trabajo, como un rayo que no guarda relación con la tarea.",
          "Dolo: el daño buscado a propósito.",
          "Imprudencia temeraria: desprecio del riesgo y desobediencia grave, como quitar una protección prohibida.",
        ],
      },
      { type: "widget", id: "accidents" },
    ],
  },
  {
    id: "psico",
    num: "08",
    title: "Organización y factores psicosociales",
    lead: "No todo el daño se ve en una radiografía. Estos cinco nombres no son intercambiables.",
    blocks: [
      {
        type: "table",
        headers: ["Nombre", "Qué lo distingue"],
        rows: [
          ["Fatiga mental", "Bajada temporal de la capacidad cognitiva por sobrecarga de datos. Cede cuando cesa la carga."],
          ["Estrés laboral", "Tensión mantenida porque las exigencias superan los recursos de la persona."],
          ["Burnout", "Agotamiento profundo tras un estrés crónico que no se resuelve. No remite con un descanso corto."],
          ["Mobbing", "Violencia psicológica sistemática y prolongada."],
          ["Insatisfacción", "Respuesta afectiva negativa: lo que la persona esperaba del trabajo no es lo que hace."],
        ],
      },
    ],
  },
  {
    id: "disciplinas",
    num: "09",
    title: "Disciplinas preventivas",
    lead: "Cuatro oficios. Cada uno evita un daño distinto.",
    blocks: [
      {
        type: "table",
        headers: ["Disciplina", "Dónde mira", "Qué evita"],
        rows: [
          ["Seguridad en el trabajo", "Instalaciones, máquinas, herramientas", "El accidente de trabajo"],
          ["Higiene industrial", "Contaminantes físicos, químicos y biológicos", "La enfermedad profesional"],
          ["Ergonomía y psicosociología", "El puesto, la carga, la interfaz", "Fatiga, estrés e insatisfacción"],
          ["Medicina del trabajo", "Vigilancia de la salud y reconocimientos", "Diagnostica pronto y trata"],
        ],
      },
    ],
  },
  {
    id: "proteccion",
    num: "10",
    title: "Prevención, protección y EPI",
    lead: "Primero se elimina el riesgo. El equipo individual llega cuando eso no ha bastado.",
    blocks: [
      {
        type: "p",
        text: "La prevención actúa en el origen, antes del daño. La protección actúa cuando el riesgo sigue ahí y trata de limitar las consecuencias. Dentro de la protección, la colectiva es prioritaria: barandillas, redes, extracción, aislamiento, interruptores diferenciales. El EPI es secundario y personal: casco, gafas, tapones.",
      },
      { type: "h", text: "Categorías de EPI" },
      {
        type: "table",
        headers: ["Categoría", "Qué riesgo cubre", "Ejemplo"],
        rows: [
          ["I", "Riesgos mínimos. Diseño sencillo.", "Guantes de limpieza o de jardinería"],
          ["II", "Riesgo intermedio. Diseño de complejidad media.", "Casco, calzado de protección"],
          ["III", "Riesgo mortal o daño irreversible.", "Arnés anticaída, equipo frente a gases o alta tensión"],
        ],
      },
    ],
  },
  {
    id: "lugares",
    num: "11",
    title: "Lugares de trabajo y equipos",
    lead: "RD 486/1997 para el local. RD 1215/1997 para la máquina que llegó sin marcado.",
    blocks: [
      {
        type: "table",
        headers: ["Elemento", "Mínimo"],
        rows: [
          ["Altura libre", "3 m, o 2,5 m en oficinas, comercios y despachos"],
          ["Superficie libre por persona", "2 m²"],
          ["Volumen libre por persona", "10 m³"],
          ["Puertas exteriores", "80 cm de anchura"],
          ["Pasillos", "1 m de anchura"],
        ],
      },
      {
        type: "note",
        text: "El equipo nuevo lleva marcado CE. Una máquina anterior a 1995 sin ese marcado se pone en conformidad según el RD 1215/1997 y se revisa de forma periódica.",
      },
    ],
  },
  {
    id: "senales",
    num: "12",
    title: "Señalización",
    lead: "RD 485/1997. La señal avisa o manda. No quita el riesgo.",
    blocks: [
      {
        type: "p",
        text: "La señalización es una técnica complementaria. Si el riesgo se puede eliminar, la señal no sirve de coartada para dejarlo donde está.",
      },
      {
        type: "image",
        src: "/img/senalizacion_prevencion_prl.png",
        alt: "Cinco señales de prevención: prohibición de fumar, obligación de protección ocular, advertencia de riesgo eléctrico, salida de emergencia y extintor.",
      },
      {
        type: "table",
        headers: ["Tipo", "Forma", "Color", "Pictograma"],
        rows: [
          ["Prohibición", "Redonda", "Borde y banda rojos, fondo blanco", "Negro"],
          ["Obligación", "Redonda", "Fondo azul", "Blanco"],
          ["Advertencia", "Triangular", "Fondo amarillo, borde negro", "Negro"],
          ["Salvamento y evacuación", "Cuadrada o rectangular", "Fondo verde", "Blanco"],
          ["Incendios", "Cuadrada o rectangular", "Fondo rojo", "Blanco"],
        ],
      },
    ],
  },
  {
    id: "gestion",
    num: "13",
    title: "Organización de la prevención",
    lead: "Quién puede asumir la prevención en la empresa, y quién necesita una medida hecha a medida.",
    blocks: [
      { type: "h", text: "Cuatro modos" },
      {
        type: "ul",
        items: [
          "Asunción por el empresario: hasta 10 trabajadores, o hasta 25 si hay un solo centro, cuando trabaja de forma habitual en ese centro y la actividad no es de especial riesgo.",
          "Trabajadores designados: personas de la plantilla con formación, nombradas por la empresa.",
          "Servicio de prevención propio: obligatorio por encima de 500 trabajadores, y también entre 250 y 500 si la actividad es de alto riesgo.",
          "Servicio de prevención ajeno: una entidad acreditada, contratada.",
        ],
      },
      { type: "h", text: "Colectivos especialmente sensibles" },
      {
        type: "p",
        text: "La LPRL pide medidas específicas para personas con discapacidad o patología previa, trabajadoras embarazadas o en lactancia, menores de 18 años, y personal temporal o de empresas de trabajo temporal.",
      },
    ],
  },
];

export function getModule(id) {
  return modules.find((item) => item.id === id) ?? null;
}
