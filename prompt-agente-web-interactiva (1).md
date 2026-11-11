# Especificación y Prompt Maestro para Agente LLM: Generador de Página Web Interactiva y Cuestionarios de Salud Laboral

Este documento constituye una guía de instrucciones técnicas y de contenido diseñada para ser entregada a un agente LLM (como Gemini, Claude o GPT-4). Su objetivo es dirigir al agente en la construcción completa de un sitio web educativo e interactivo sobre la **Unidad Didáctica 2: Salud Laboral (IPE I Informática)**, equipado con módulos interactivos, recursos multimedia y un sistema de autoevaluación (cuestionarios tipo test, simulador de examen y supuestos prácticos).

---

## 1. Directiva del Sistema y Rol del Agente LLM

```markdown
[ROL DEL SISTEMA]
Eres un Desarrollador Full-Stack Frontend Senior y Diseñador Instruccional de Contenidos Educativos. Tu misión es generar el código completo de una Aplicación Web Educativa e Interactiva (SPA - Single Page Application) en HTML5, CSS3 (Tailwind CSS o Bootstrap 5) y JavaScript ES6+, basada en la Unidad Didáctica 2 de Salud Laboral para estudiantes del sector de Informática y Comunicaciones.
```

---

## 2. Requisitos Técnicos de la Web Interactiva

1. **Arquitectura:** Página única (SPA) con menú lateral navegable por temas, diseño 100% *responsive* (adaptado a móviles, tablets y ordenadores).
2. **Estilo Visual:** Interfaz moderna y limpia, paleta de colores profesional con temas contrastados para accesibilidad (azul institucional, verde éxito, amarillo advertencia, rojo peligro).
3. **Recursos Multimedia e Imágenes Requeridas:**
   * **Esquema Ergonómico PVD:** Integrar la imagen `ergonomia_pvd_informatica.png` en el apartado de Iluminación y Pantallas PVD.
   * **Tabla de Señalización de PRL:** Integrar la imagen `senalizacion_prevencion_prl.png` en el módulo de Señalización de Seguridad.
   * **Widgets Interactivos SVG/JS:** 
     * *Calculador/Medidor de Luxes interactivo:* Slider para ajustar luxes (0-1000 lux) que indica en tiempo real si el nivel es adecuado para oficina/programación (500 lux), pasillos (50 lux) o microelectrónica (1000 lux).
     * *Semáforo de Ruido e Hipoacusia vs Confort:* Medidor de decibelios que simula el entorno del CPD (80-88 dBA) alertando de la obligación de EPI a partir de 85 dBA, y el entorno de Open Space/Oficina comparando con la NTP 503 (40-45 dBA recomendado, >50 dBA disconfort/bugs).
     * *Simulador Ergonómico PVD:* Diagrama interactivo que comprueba la distancia del monitor (>40 cm), el ángulo de inclinación (60°), reposapiés (0-15°) y posición del teclado.
4. **Motor de Cuestionarios y Autoevaluación:**
   * **Cuestionario por Módulos:** Preguntas tipo test al final de cada tema con retroalimentación inmediata y justificación técnica basándose en los Reales Decretos y las NTP del INSST.
   * **Simulador Global de Examen (Modo Test / Kahoot):** Test final de 15 preguntas aleatorias con temporizador y puntuación final.
   * **Clasificador Interactivo de Casos Prácticos de AT:** Actividad drag-and-drop donde el usuario clasifica supuestos reales en "Accidente de Trabajo" o "No es Accidente de Trabajo" (*in itinere*, *in misión*, imprudencia profesional vs temeraria).

---

## 3. Contenido Curricular Completo a Estructurar en la Web

### Módulo 1: Concepto de Salud, Marco Legal y Cobertura FP (FFEOE)
* **Definición de Salud (OMS):** Estado de completo bienestar físico, psíquico y social, y no solo la ausencia de enfermedades.
* **El trabajo como factor de riesgo y bienestar:** Equilibrio entre desarrollo personal y protección de la salud.
* **Marco Normativo:** Constitución Española (art. 40.2), LPRL 31/1995 y reforma 54/2003, Directiva Marco 89/391/CEE.
* **Alumnado de Formación Profesional en Prácticas (FFEOE):** Alta obligatoria en Seguridad Social y cobertura por la Mutua de Accidentes de Trabajo.

### Módulo 2: Factores Físicos - El Ruido (RD 286/2006) y Confort Acústico (NTP 503)
* **Concepto:** Sonido no deseado medido en decibelios (dB). Evaluado para jornada laboral de 8 horas ($L_{Aeq,8h}$).
* **Equipos de Medición:** Sonómetro (ruido continuo), Dosímetro (dosis promedio personal), Analizador de impacto (picos de ruido bruscos).
* **Doble Vertiente del Riesgo:**
  * *Riesgo Higiénico (CPD / Servidores):* Hipoacusia/sordera profesional y acúfenos (RD 286/2006).
  * *Riesgo Ergonómico (Oficina Open Space):* Disconfort acústico, estrés, falta de concentración y aparición de "bugs" en código (NTP 503).
* **Valores Límite Obligatorios (RD 286/2006):**
  * **80 dBA / 135 dBC:** Valor inferior de acción (entrega de EPI, uso voluntario).
  * **85 dBA / 137 dBC:** Valor superior de acción (entrega y **USO OBLIGATORIO DE EPI**, señalización, evaluación anual).
  * **87 dBA / 140 dBC:** **Valor límite máximo infranqueable**.
* **Criterios de Confort Acústico (NTP 503 del INSST):**
  * Nivel recomendado en oficinas: **40-45 dBA**. Umbral de quejas: **> 50 dBA**. Climatización: **< 35 dBA** (o < 30 dBA en alta concentración).
  * Priorización de medidas correctoras: 1º En la fuente (teclados silenciosos, extractores aislados), 2º En el medio (paneles absorción, falsos techos), 3º En el receptor (distribución espacial).

### Módulo 3: Factores Físicos - Vibraciones (RD 1311/2005)
* **Clasificación por frecuencias:**
  * *Muy baja frecuencia (< 2 Hz):* Barcos, trenes (causa mareos y vértigo).
  * *Baja frecuencia (2-20 Hz):* Camiones, grúas (causa lumbalgias y hernias).
  * *Alta frecuencia (> 20 Hz):* Martillos neumáticos, pulidoras (causa lesiones articulares).
* **Tipos de transmisión:** Mano-brazo (enfermedad de Raynaud) vs. Cuerpo entero (discopatías, ciática).

### Módulo 4: Iluminación y Ergonomía PVD (RD 486/1997 & Guía INSST)
* **Prioridad:** Iluminación natural > Artificial general > Localizada.
* **Efecto Estroboscópico:** Parpadeo de luces que causa fatiga visual e ilusiones ópticas sobre elementos giratorios (ventiladores del CPD).
* **Alumbrado de Emergencia:** Obligatorio para evacuación y apagado seguro de servidores.
* **Niveles Mínimos de Luxes:**
  * 100 lux (bajas exigencias), 200 lux (exigencias moderadas).
  * **500 lux (exigencias altas: oficinas, programación e informática)**.
  * 1.000 lux (exigencias muy altas / microelectrónica).
* **Ergonomía del Puesto con PVD (Guía INSST / ERGA FP):**
  * Distancia ojo-pantalla $> 40$ cm. Borde superior a la altura de los ojos. Ángulo de visión hasta 60° hacia abajo.
  * Pantalla perpendicular a ventanas (luz lateral) con acabado mate.
  * Uso de **atril regulable** (evita la fatiga de acomodación) y **reposapiés** (inclinación de 0° a 15° antideslizante).
  * Teclado independiente e inclinable, ratón ergonómico cercano, silla de 5 apoyos con ruedas y ajuste lumbar. Pausas de 10-15 min cada 1-2h.

### Módulo 5: Condiciones Termohigrométricas (RD 486/1997)
* **Temperatura:** 17 ºC a 27 ºC (trabajos sedentarios/oficinas); 14 ºC a 25 ºC (trabajos ligeros).
* **Humedad Relativa:** 30% a 70%. **Mínimo del 50% en Salas de Servidores / CPD por riesgo de electricidad estática**.

### Módulo 6: Agentes Químicos y Vías de Entrada
* **Vías:** Inhalatoria (respiratoria - principal), Digestiva, Cutánea, Parenteral.
* **Intoxicaciones:** Aguda (inmediata/puntual) vs. Crónica (largo plazo / Enfermedad Profesional).

### Módulo 7: Accidente de Trabajo (AT) y Daños a la Salud
* **Concepto de AT:** Toda lesión corporal que el trabajador sufra con ocasión o a consecuencia del trabajo por cuenta ajena.
* **Requisitos:** Lesión corporal + relación causa-efecto.
* **Casos SÍ considerados AT:** *In itinere* (sin interrupción personal), *in misión* (trayectos de trabajo), actos de salvamento, imprudencia profesional (rutina/confianza).
* **Casos NO considerados AT:** Fuerza mayor extraña, dolo, imprudencia temeraria (desobediencia grave).

### Módulo 8: Factores Organizativos y Psicosociales
* **Fatiga Mental:** Disminución temporal de la capacidad cognitiva por sobrecarga.
* **Estrés Laboral:** Tensión continuada por desequilibrio entre exigencias y recursos.
* **Burnout:** Síndrome del quemado por estrés prolongado no resuelto.
* **Mobbing:** Acoso psicológico continuado.

### Módulo 9: Disciplinas Preventivas
* **Seguridad en el Trabajo:** Evita Accidentes de Trabajo.
* **Higiene Industrial:** Evita Enfermedades Profesionales (agentes contaminantes).
* **Ergonomía y Psicosociología:** Previene fatiga, estrés e insatisfacción.
* **Medicina del Trabajo:** Vigilancia de la salud y reconocimientos médicos.

### Módulo 10: Medidas de Prevención y Protección (RD 486/1997 & Guía INSST)
* **Prevención:** Elimina el riesgo en el origen.
* **Protección Colectiva (Prioritaria):** Barandillas, redes, extracciones, aislantes, diferenciales.
* **Protección Individual (EPI - Secundaria):** Cascos, gafas, tapones auditivos.
* **Categorías de EPIs:** Categoría I (riesgos mínimos), Categoría II (complejidad media/cascos), Categoría III (riesgos mortales o de daños irreversibles/caídas a altura, gases).

### Módulo 11: Lugares de Trabajo y Equipos (RD 486/1997)
* **Dimensiones:** Altura 3m (2,5m en oficinas); 2 $m^2$ superficie libre/trabajador; 10 $m^3$ volumen/trabajador.
* **Pasos:** Puertas exteriores $\ge 80$ cm; Pasillos $\ge 1$ m.
* **Marcado CE:** Obligatorio en máquinas (RD 1215/1997 para adecuación de máquinas pre-1995).

### Módulo 12: Señalización de Seguridad (RD 485/1997)
* **Prohibición:** Redonda, borde rojo, fondo blanco, pictograma negro.
* **Obligación:** Redonda, fondo azul, pictograma blanco.
* **Advertencia:** Triangular, fondo amarillo, pictograma negro.
* **Salvamento / Evacuación:** Cuadrada/rectangular, fondo verde, pictograma blanco.
* **Incendios:** Cuadrada/rectangular, fondo rojo, pictograma blanco.

---

## 4. Banco de Cuestionarios y Banco de Preguntas Interactivas

El agente LLM debe incorporar el siguiente banco de datos JSON ampliado dentro del script de la aplicación:

```json
[
  {
    "id": 1,
    "pregunta": "¿Cuál es el valor diario de exposición al ruido a partir del cual el uso de protectores auditivos (EPI) es de carácter OBLIGATORIO para el trabajador según el RD 286/2006?",
    "opciones": ["80 dBA", "85 dBA", "87 dBA", "90 dBA"],
    "respuesta_correcta": 1,
    "explicacion": "Según el RD 286/2006, a partir de 85 dBA (Valor Superior de Acción) la entrega y el uso de protectores auditivos son obligatorios."
  },
  {
    "id": 2,
    "pregunta": "¿Qué nivel mínimo de iluminación exige el RD 486/1997 para puestos de oficina, programación y trabajo continuado con PVD?",
    "opciones": ["100 lux", "200 lux", "500 lux", "1000 lux"],
    "respuesta_correcta": 2,
    "explicacion": "Para tareas con exigencias visuales altas (como trabajos de oficina e informática frente a pantalla), el mínimo legal es de 500 luxes."
  },
  {
    "id": 3,
    "pregunta": "Un trabajador sufre un accidente de tráfico por exceso de confianza al realizar una maniobra habitual durante su jornada. ¿Cómo se califica este suceso?",
    "opciones": ["Imprudencia temeraria (No es AT)", "Imprudencia profesional (Sí es AT)", "Dolo (No es AT)", "Fuerza mayor extraña (No es AT)"],
    "respuesta_correcta": 1,
    "explicacion": "La imprudencia profesional se deriva de la rutina y la confianza acumulada en el trabajo y SÍ se considera Accidente de Trabajo."
  },
  {
    "id": 4,
    "pregunta": "¿Cuál es el valor mínimo obligatorio de humedad relativa en una sala de servidores (CPD) para prevenir la electricidad estática?",
    "opciones": ["30%", "40%", "50%", "70%"],
    "respuesta_correcta": 2,
    "explicacion": "El Anexo III del RD 486/1997 establece un límite inferior del 50% de humedad relativa en recintos con riesgo de electricidad estática."
  },
  {
    "id": 5,
    "pregunta": "¿Qué forma y color caracterizan a las señales de OBLIGACIÓN en prevención de riesgos laborales?",
    "opciones": [
      "Triangular con fondo amarillo",
      "Redonda con fondo azul y pictograma blanco",
      "Redonda con borde rojo y fondo blanco",
      "Cuadrada con fondo verde"
    ],
    "respuesta_correcta": 1,
    "explicacion": "Las señales de obligación son redondas, con fondo azul y pictograma blanco (Anexo II del RD 485/1997)."
  },
  {
    "id": 6,
    "pregunta": "Según la NTP 503 del INSST, ¿cuál es el nivel sonoro recomendado en oficinas para evitar el disconfort y la aparición de bugs en código?",
    "opciones": ["30-35 dBA", "40-45 dBA", "55-60 dBA", "70-75 dBA"],
    "respuesta_correcta": 1,
    "explicacion": "La NTP 503 establece que el nivel general recomendado en oficinas para garantizar el confort acústico y la concentración debe estar entre 40 y 45 dBA."
  },
  {
    "id": 7,
    "pregunta": "Un arnés de seguridad destinado a proteger frente a caídas desde grandes alturas se clasifica legalmente como un EPI de:",
    "opciones": ["Categoría I", "Categoría II", "Categoría III", "Protección Colectiva"],
    "respuesta_correcta": 2,
    "explicacion": "Los EPIs que protegen frente a riesgos mortales o de daños irreversibles (como caídas en altura) pertenecen a la Categoría III."
  },
  {
    "id": 8,
    "pregunta": "En un puesto con pantalla PVD, ¿cuál debe ser la inclinación recomendada del reposapiés antideslizante según la guía ergonómica del INSST?",
    "opciones": ["Entre 0° y 15°", "Entre 15° y 30°", "Entre 30° y 45°", "Fijo a 90°"],
    "respuesta_correcta": 0,
    "explicacion": "La guía de PVD del INSST/ERGA FP recomienda un reposapiés con superficie antideslizante e inclinación ajustable entre 0° y 15° sobre el plano horizontal."
  }
]
```

---

## 5. Prompt Final de Ejecución para el Agente LLM

```markdown
Por favor, genera un archivo HTML completo e independiente (index.html) que contenga todo el código HTML, CSS en línea/Bootstrap 5 CDN y JavaScript en un solo archivo. 
Incluye:
1. Una barra lateral de navegación interactiva para los 13 módulos educativos.
2. Formato enriquecido con tablas, tarjetas informativas y renderizado de las imágenes 'ergonomia_pvd_informatica.png' y 'senalizacion_prevencion_prl.png'.
3. Un simulador interactivo de test con puntuación final, explicación de fallos y medidor de rendimiento para el examen de Salud Laboral.
