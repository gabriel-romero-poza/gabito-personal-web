/**
 * Sitemap estático. Usa la URL de astro.config → site (inyectada como import.meta.env.SITE).
 */
const SITE = import.meta.env.SITE?.replace(/\/$/, '') || 'https://example.com';

export const prerender = true;

export function GET() {
  const urls = ['', '/en'].map(
    (path) => `<url><loc>${SITE}${path || '/'}${path ? '/' : ''}</loc></url>`
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n  ')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
