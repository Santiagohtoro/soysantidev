# soysanti.dev — Portafolio de Santiago Hernández Toro

Portafolio / CV interactivo construido con **React 18 + Vite + React Router**, bilingüe (ES/EN), con tema claro/oscuro y descarga de CV en PDF. Código organizado en componentes y páginas, con contenido separado en módulos de datos para facilitar su mantenimiento.

## Stack técnico

- [Vite](https://vitejs.dev/) — build tool y dev server
- [React 18](https://react.dev/)
- [React Router v6](https://reactrouter.com/) — enrutamiento (`BrowserRouter`)
- CSS puro con variables (design tokens), sin frameworks de UI

## Estructura del proyecto

```
src/
  assets/          Imágenes bundleadas (avatar.webp)
  components/      Piezas de UI reutilizables (Nav, Footer, Hero, Icon, BrandLogo...)
  data/             Contenido del sitio como datos planos (proyectos, servicios, stack, contacto)
  i18n/             Diccionario de traducciones (ES/EN) + LocaleContext
  pages/            Vistas de nivel de ruta (Home, ProjectDetail)
  styles/           CSS global con tokens de diseño
  utils/            Funciones auxiliares puras (WhatsApp links, contraste de color)
  App.jsx           Enrutamiento raíz
  main.jsx          Punto de entrada
public/
  cv/CV-Santiago-Hernandez.pdf   Archivo estático servido tal cual, usado por el botón de descarga
  favicon.svg
  _redirects        Fallback SPA para Netlify
vercel.json         Fallback SPA para Vercel
```

## Requisitos

- Node.js 18+
- npm 9+

## Puesta en marcha

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build de producción

```bash
npm run build     # genera /dist
npm run preview   # sirve /dist localmente para verificar el build
```

## Editar contenido

Todo el contenido (proyectos, servicios, stack, línea de tiempo, textos ES/EN, datos de contacto) vive en `src/data/` y `src/i18n/translations.js` — no es necesario tocar los componentes para actualizar textos, agregar un proyecto nuevo o cambiar el número de WhatsApp/email.

- **Nuevo proyecto**: agrega un objeto al array en `src/data/projects.js` (con sus versiones `es` y `en`).
- **Reemplazar el CV**: sustituye el archivo en `public/cv/CV-Santiago-Hernandez.pdf` (mismo nombre) o cambia la ruta en `src/data/contact.js` (`CV_FILE`).
- **Cambiar avatar**: reemplaza `src/assets/avatar.webp`.

## Despliegue

Este proyecto usa `BrowserRouter`, por lo que las rutas como `/proyecto/aquareport` requieren que el hosting redirija cualquier ruta desconocida a `index.html` (fallback SPA), para que al recargar la página o entrar por un link directo, React Router pueda tomar el control.

- **Vercel**: ya incluye `vercel.json` con la regla de rewrite necesaria — solo importa el repo o corre `vercel`.
- **Netlify**: ya incluye `public/_redirects` — solo conecta el repo o arrastra la carpeta `dist` tras el build.
- **GitHub Pages**: no soporta fallback SPA nativamente. Opciones: usar el truco del `404.html` que redirige a `index.html`, o cambiar a un hosting con soporte nativo de rewrites (Vercel/Netlify/Cloudflare Pages), que es lo recomendado.

## Licencia

Uso personal — Santiago Hernández Toro.
