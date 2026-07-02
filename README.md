# Portafolio — Francisco Javier Martínez Oliveros

Sitio web personal tipo portafolio para presentar el perfil profesional de
**Francisco Javier Martínez Oliveros**: Full Stack Developer, QA Engineer y DevOps Jr.

Es un sitio **100% estático** construido solo con **HTML5, CSS3 y JavaScript vanilla**,
sin backend, sin base de datos y sin dependencias que requieran proceso de build.
Está listo para publicarse directamente en **GitHub Pages**.

## Estructura del proyecto

```text
portfolio/
├── index.html          # Contenido y estructura de todas las secciones
├── styles.css           # Estilos, tema oscuro y animaciones
├── script.js             # Menú móvil, año dinámico y animaciones al hacer scroll
├── assets/
│   ├── img/               # Favicon e imagen Open Graph
│   └── docs/
│       └── CV_FranciscoJavierMartinezOliveros.pdf   # CV descargable
└── README.md
```

## Notas técnicas

- El sitio no incluye formulario de contacto: todas las vías de contacto son
  enlaces directos (`mailto:`, LinkedIn, GitHub).
- No se usan frameworks ni herramientas de build (sin React, Vue, Angular, npm, etc.).
- El diseño es *mobile first*, con navegación accesible por teclado y soporte
  para `prefers-reduced-motion`.
- Las animaciones al hacer scroll usan `IntersectionObserver`, con una
  alternativa simple si el navegador no lo soporta.
