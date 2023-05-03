import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: '../../dist/apps/freebabylon5',
  site: 'https://freebabylon5.com',
  integrations: [sitemap(), tailwind()],
});
