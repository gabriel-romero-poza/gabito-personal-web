# Mejores prácticas: programación y Astro

Resumen basado en documentación oficial de Astro, guías de SEO/rendimiento y principios de diseño de software (búsqueda web, 2024–2025).

---

## 1. Principios de programación

### SOLID

- **S – Single Responsibility (SRP)**  
  Una clase/función/componente = una razón para cambiar. Mejora mantenibilidad y tests.

- **O – Open/Closed (OCP)**  
  Abierto a extensión, cerrado a modificación. Añadir features sin tocar código existente.

- **L – Liskov Substitution (LSP)**  
  Los subtipos deben poder sustituir a sus tipos base sin romper el programa.

- **I – Interface Segregation (ISP)**  
  Los clientes no deben depender de interfaces que no usan. Props mínimas por componente.

- **D – Dependency Inversion (DIP)**  
  Depender de abstracciones, no de implementaciones concretas.

### DRY (Don't Repeat Yourself)

- Una sola fuente de verdad para datos, tipos y patrones repetidos.
- Componentes reutilizables (p. ej. `Section`, `TimelineItem`) en lugar de copiar markup.

### KISS (Keep It Simple, Stupid)

- Soluciones simples primero; evitar sobreingeniería.
- Derivar estado (p. ej. idioma alternativo) en lugar de duplicar configuración.

---

## 2. Astro: arquitectura y componentes

### Cero JavaScript por defecto

- Astro sirve HTML estático; solo se envía JS donde hace falta.
- Usar directivas de hidratación solo cuando haya interactividad:
  - `client:visible` – al entrar en viewport
  - `client:idle` – cuando el navegador está idle
  - `client:media` – en ciertos breakpoints
  - `client:load` – solo si es estrictamente necesario

### Islas (Islands)

- Páginas estáticas con “islas” interactivas que se hidratan por separado.
- Fallos en un componente no tiran abajo toda la página.

### Estructura de componentes

- **Script (---)** arriba: imports, props, datos.
- **Template** abajo: HTML + expresiones.
- Props tipadas con `interface Props` y valores por defecto cuando aplique.
- Slots para contenido variable; named slots cuando haya varios bloques.

### Organización del proyecto

- `src/components/` – componentes reutilizables.
- `src/layouts/` – plantillas de página.
- `src/pages/` – rutas (obligatorio).
- `src/content/` – Markdown/MDX con frontmatter (content collections).
- `src/styles/` – CSS global o por componente (Astro hace scoped por defecto).
- Path aliases en `tsconfig.json` (p. ej. `@/components`) para imports limpios.

### TypeScript

- Usar tipos para props y datos compartidos.
- Tipos compartidos en un solo lugar (p. ej. `src/types/`) para DRY.

---

## 3. Astro: rendimiento

- **Imágenes**: componente `<Image />` de Astro con lazy-loading y optimización.
- **Fuentes**: preload de fuentes críticas y `font-display: swap` para evitar CLS.
- **Datos**: fetch en el frontmatter (build time), no en runtime, cuando sea posible.
- **Scripts**: minimizar terceros; usar `defer` y `type="module"`.
- **CSS**: estilos por componente (scoped) para evitar conflictos.

---

## 4. Astro: SEO

### HTML semántico

- Usar `<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`, `<section>` para accesibilidad y SEO.

### Meta y URLs

- Title, description, viewport, canonical.
- Open Graph y Twitter Cards para redes.
- Opción `site` en `astro.config` para URLs canónicas y sitemap.

### Sitemap y robots

- Integración `@astrojs/sitemap` (requiere `site` en config).
- Genera `sitemap-index.xml` y sitemaps numerados en el build.
- En `robots.txt`: `Sitemap: https://tu-dominio.com/sitemap-index.xml`.

### Core Web Vitals

- LCP, FID, CLS: imágenes con dimensiones fijas, CSS crítico inline si aplica, hidratación solo donde haga falta.

---

## 5. Referencias

- [Astro – Components](https://docs.astro.build/en/basics/astro-components/)
- [Astro – Islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Astro – Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Astro – Content & SEO](https://astrojs.dev/articles/astro-content-seo)
- SOLID: FreeCodeCamp, DigitalOcean, Wikipedia.
