# PT_Trainer · Nexus Labs AI

> Herramienta interactiva de português para hispanohablantes. Sin backend, sin dependencias, sin compilador — desplegada directamente en GitHub Pages.

---

## ¿Qué es?

PT_Trainer es una aplicación web diseñada específicamente para hispanohablantes que buscan aprender o mejorar su portugués brasileño. Cubre las áreas donde el español interfiere con más frecuencia: falsos amigos, conjugaciones verbales, preposiciones y ortografía.

Construida con HTML, CSS y Vanilla JS puros. Sin frameworks, sin build steps, sin dependencias externas más allá de Google Fonts.

---

## Módulos

| Módulo | Contenido |
|---|---|
| **Vocabulário** | 120+ palabras organizadas por nivel MCER (A1 → C2) |
| **Falsos Amigos** | 15 trampas críticas para hispanohablantes con comparativa ES ↔ PT |
| **Verbos** | 30 verbos con conjugación completa en 10 tiempos verbales cada uno |
| **Preposições** | Las 6 preposiciones principales con reglas, contracciones y ejemplos |
| **Ortografia** | 8 reglas críticas: ã/ão, lh, nh, x variable, acentos, plurales |
| **Frases** | 20 frases situacionales en 4 grupos: cumprimentos, cotidiano, comunicação y BR |

Cada módulo tiene modo **Referencia** y modo **Quiz** con preguntas generadas aleatoriamente.

---

## Funcionalidades

### Modo Claro / Oscuro
Botón `🌗` en el encabezado. La preferencia se persiste en `localStorage` y se aplica al cargar la página.

### Progreso Histórico
Cada quiz guarda el récord de precisión por módulo en `localStorage`. El resultado al finalizar muestra el récord actual vs. el histórico.

### Repetición Espaciada (SRS)
Las preguntas falladas se registran silenciosamente y se priorizan en las siguientes sesiones del mismo módulo. Un ítem se elimina de la lista de fallos cuando se responde correctamente de forma consecutiva.

### Búsqueda Global
Barra de búsqueda en tiempo real que escanea vocabulario, falsos amigos y verbos simultáneamente. Al hacer clic en un resultado de verbo, redirige directamente a su tabla de conjugación.

---

## Verbos incluidos

`ser` · `estar` · `ter` · `haver` · `ir` · `vir` · `fazer` · `poder` · `querer` · `saber` · `dar` · `ver` · `pôr` · `trazer` · `dizer` · `falar` · `comer` · `partir` · `ficar` · `chegar` · `conhecer` · `pedir` · `dormir` · `sentir` · `ouvir` · `gostar` · `precisar` · `conseguir` · `levar` · `estudar`

---

## Tiempos verbales

Presente · Pretérito Perfeito · Pretérito Imperfeito · Mais-que-Perfeito · Futuro do Presente · Condicional · Subjuntivo Presente · Subjuntivo Imperfeito · Futuro do Subjuntivo · Imperativo

---

## Stack

- HTML5 semántico
- CSS3 con variables nativas (`--cyan`, `--violet`, `--magenta`, paleta dark/light)
- JavaScript ES6+ sin dependencias
- `localStorage` para persistencia de tema, récords y SRS
- Google Fonts: Outfit + JetBrains Mono
- Deploy: GitHub Pages (rama `main`)

---

## Estructura del repositorio

```
pt-trainer/
├── index.html      # Estructura principal
├── styles.css      # Paleta dark/light, variables, componentes
├── main.js         # Datos, lógica de módulos, quiz, SRS, búsqueda
└── README.md       # Este archivo
```

---

## Deploy

El proyecto corre directamente desde GitHub Pages sin pasos de compilación.

```
Settings → Pages → Branch: main → / (root)
```

Para dominio personalizado, añadir archivo `CNAME` con el subdominio deseado.

---

## Créditos

Desarrollado por **Fernando Cortés** bajo [Nexus Labs AI](https://nexuslabsai.dev) como herramienta personal de estudio con proyección pública.

`contact@nexuslabsai.dev`
