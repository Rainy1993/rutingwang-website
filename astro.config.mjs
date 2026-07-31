// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// No production domain has been supplied yet. SITE_URL and BASE_PATH are set
// automatically by the GitHub Pages workflow, and can also be provided by a
// future Cloudflare deployment without changing source files.
const SITE = process.env.SITE_URL;
const BASE = process.env.BASE_PATH ?? '/';

export default defineConfig({
  ...(SITE ? { site: SITE } : {}),
  base: BASE,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: SITE ? [sitemap()] : [],
});
