import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = site ? `\nSitemap: ${site.href.replace(/\/$/, '')}${base}/sitemap-index.xml` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
