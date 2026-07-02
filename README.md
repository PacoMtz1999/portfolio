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

## Cómo ejecutarlo localmente

No requiere instalación ni dependencias. Basta con abrir el archivo directamente
o servirlo con un servidor estático simple:

**Opción 1 — Abrir directamente**
Haz doble clic en `index.html` y se abrirá en tu navegador.

**Opción 2 — Servidor local (recomendado para probar rutas y fuentes correctamente)**

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (paquete http-server)
npx http-server .
```

Luego visita `http://localhost:8000` en tu navegador.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `portfolio`).
2. Sube el contenido de esta carpeta a la raíz del repositorio:

   ```bash
   git init
   git add .
   git commit -m "Publicar portafolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portfolio.git
   git push -u origin main
   ```

3. En GitHub, entra a **Settings → Pages**.
4. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda los cambios. En unos minutos tu sitio estará disponible en:

   ```text
   https://TU-USUARIO.github.io/portfolio/
   ```

No se requiere ningún paso de build ni configuración adicional.

## Qué personalizar antes de publicar

Busca y reemplaza lo siguiente en `index.html`:

| Elemento | Dónde está | Qué hacer |
|---|---|---|
| Enlace de LinkedIn | Sección **Hero** y **Contacto** (actualmente `#`) | Agrega la URL real de tu perfil de LinkedIn |
| Enlace de GitHub | Sección **Hero** y **Contacto** (actualmente `#`) | Agrega la URL real de tu perfil de GitHub |
| URL del portafolio | Meta etiquetas `og:url`, `canonical` (`https://tuusuario.github.io/portfolio/`) | Reemplaza por la URL final de tu GitHub Pages |
| Experiencia en Caja Morelia Valladolid | Sección **Experiencia profesional**, primer bloque | El texto actual es genérico (marcado con un comentario `TODO` en el HTML); agrega tus responsabilidades y logros específicos en ese puesto |
| Foto de perfil | No incluida en esta versión | Si quieres agregar tu fotografía, puedo integrarla al hero en un frame circular; solo súbela y dime dónde colocarla |

### Reemplazar el CV

Sustituye el archivo `assets/cv/Francisco-Martinez-CV.pdf` por tu CV real,
manteniendo el mismo nombre de archivo (o actualiza la ruta en el botón
"Descargar CV" dentro de `index.html` si usas otro nombre).

### Reemplazar imágenes

- `assets/img/favicon.png`: ícono que aparece en la pestaña del navegador (recomendado 32×32 o 64×64 px).
- `assets/img/og-cover.jpg`: imagen que se muestra al compartir el sitio en redes sociales (recomendado 1200×630 px).

Ambas rutas ya están referenciadas en el `<head>` de `index.html`; solo
reemplaza los archivos dentro de `assets/img/` manteniendo esos nombres,
o actualiza las rutas si usas nombres distintos.

## Notas técnicas

- El sitio no incluye formulario de contacto: todas las vías de contacto son
  enlaces directos (`mailto:`, LinkedIn, GitHub).
- No se usan frameworks ni herramientas de build (sin React, Vue, Angular, npm, etc.).
- El diseño es *mobile first*, con navegación accesible por teclado y soporte
  para `prefers-reduced-motion`.
- Las animaciones al hacer scroll usan `IntersectionObserver`, con una
  alternativa simple si el navegador no lo soporta.
