# Gabriel Romero Poza — Portfolio

Portfolio personal construido con **Astro + Tailwind CSS**.

## Setup

```bash
npm install
npm run dev
```

Abrí `http://localhost:4321` en el browser.

## Deploy en Vercel

1. Subí el proyecto a GitHub
2. Entrá a [vercel.com](https://vercel.com) → New Project → importá el repo
3. Vercel detecta Astro automáticamente → Deploy

¡Listo! Tu sitio queda en `tuusuario.vercel.app` gratis.

## Estructura

```
src/
  i18n/
    es.ts        ← Textos en español
    en.ts        ← Textos en inglés
    index.ts     ← Helper de i18n
  layouts/
    Layout.astro ← HTML base, fuentes, estilos globales
  pages/
    index.astro  ← Página en español (ruta /)
    en/
      index.astro ← Página en inglés (ruta /en)
```

## Personalización

- **Foto**: Reemplazá el placeholder en `index.astro` y `en/index.astro` con un `<img>` apuntando a tu foto
- **GitHub/LinkedIn**: Buscá `https://github.com` y `https://linkedin.com` y reemplazá con tus URLs reales
- **Nuevo proyecto**: Agregá una card nueva en la sección de proyectos copiando la estructura de Escolaris
- **Textos**: Editá `src/i18n/es.ts` y `src/i18n/en.ts`
