/**
 * robots.txt generado en build. Usa la URL de astro.config → site.
 */
export const prerender = true;

export function GET() {
  const site = (import.meta.env.SITE || 'https://gabito.vercel.app').replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
