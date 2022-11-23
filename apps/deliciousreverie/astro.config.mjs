import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  outDir: '../../dist/apps/deliciousreverie',
  site: process.env.URL || 'http://localhost:3000',
  integrations: [
    svelte(),
    tailwind(),
    sitemap()
  ]
});
