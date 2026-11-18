/**
 * Sitemap estático con alternates hreflang. Usa astro.config → site.
 */
const SITE = import.meta.env.SITE?.replace(/\/$/, '') || 'https://gabito.vercel.app';

export const prerender = true;

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SITE}/</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/" />
  </url>
  <url>
    <loc>${SITE}/en/</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/" />
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
