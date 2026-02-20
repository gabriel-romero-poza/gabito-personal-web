# Superficie de ataque y medidas de seguridad

Análisis del portfolio estático (Astro, sin backend).

---

## Resumen

| Área | Riesgo | Estado |
|------|--------|--------|
| Backend / API | N/A | Sitio estático, sin servidor propio |
| Secretos en cliente | Bajo | Solo datos de contacto (email, redes); intencional |
| Enlaces externos | Bajo | `target="_blank"` con `rel="noopener noreferrer"` ✓ |
| Inyección (XSS) | Bajo | Sin inputs de usuario; contenido desde i18n y datos fijos |
| Dependencias | Medio | Supply chain; mantener actualizado y revisar con `pnpm audit` |
| Recursos externos | Medio | Google Fonts; depende de tercero |
| Cabeceras de seguridad | Depende del host | Configurar en CDN/servidor donde se despliegue |

---

## 1. Lo que está bien

- **Sin backend**: No hay API, base de datos ni sesiones; menos vectores de ataque.
- **Sin formularios**: No hay datos de usuario ni posibilidad de inyección por inputs.
- **Idioma**: `getLangFromUrl` solo acepta claves existentes (`es`/`en`); no hay open redirect ni uso de input crudo en el DOM.
- **Enlaces**: Enlaces que abren en nueva pestaña usan `rel="noopener noreferrer"` (evita tab-nabbing).
- **Selector de idioma**: `otherLangPath` es solo `'/'` o `'/en'`; no se construye desde la URL ni input del usuario.
- **Script del menú**: Solo lógica de toggle del menú; sin `eval`, `innerHTML` ni datos de usuario.

---

## 2. Riesgos y mitigaciones

### Dependencias (supply chain)

- **Riesgo**: Vulnerabilidades en `astro`, `tailwind`, etc.
- **Mitigación**:
  - `pnpm audit` (o `npm audit`) de forma periódica.
  - Mantener dependencias al día; revisar changelogs y avisos de seguridad.

### Recursos de terceros (Google Fonts)

- **Riesgo**: Si el CDN se compromete o hay MITM, podrían inyectar CSS/JS.
- **Mitigación**:
  - Aceptar el riesgo (común en sitios estáticos), o
  - Auto-hospedar las fuentes (descargar woff2 y servirlas desde `/public` o desde el mismo dominio).

### Datos personales en el cliente

- **Riesgo**: Email y enlaces a redes están en el bundle (visibles en el código fuente).
- **Mitigación**: Esperado en un portfolio; no hay secretos. Si quisieras reducir scraping, podrías ofuscar el email (menos útil para accesibilidad y usabilidad).

### Cabeceras de seguridad (en el host)

- **Riesgo**: Sin cabeceras adecuadas, el sitio puede ser más vulnerable a clickjacking, MIME sniffing, etc.
- **Mitigación**: Configurar en el servicio donde se despliegue. Hay un ejemplo en la raíz: **`vercel.json.example`** (renombrar a `vercel.json` si desplegás en Vercel). Incluye:
  - `X-Frame-Options: DENY` — evita que te embeben en iframes (clickjacking).
  - `X-Content-Type-Options: nosniff` — evita MIME sniffing.
  - `Referrer-Policy: strict-origin-when-cross-origin` — limita qué se envía en Referer.
  - `Permissions-Policy` — desactiva cámara/micrófono/geolocalización.
- Para **Netlify**, crear `_headers` en `public/` con sintaxis similar.

---

## 3. Despliegue

- Usar **HTTPS** siempre (el host suele encargarse).
- No exponer `.env` ni archivos de config con secretos; en este proyecto no hay secretos en tiempo de ejecución.
- Revisar que `site` en `astro.config.mjs` sea la URL final (HTTPS) para canonical y sitemap.

---

## 4. Checklist rápido

- [ ] `pnpm audit` sin vulnerabilidades críticas/altas (o mitigadas).
- [ ] Cabeceras de seguridad configuradas en el host.
- [ ] HTTPS en producción.
- [ ] Dominio y DNS controlados; renovación de certificados automática (Let's Encrypt o similar).
