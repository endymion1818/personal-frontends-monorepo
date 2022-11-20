import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  outDir: '../../dist/apps/deliciousreverie',
  site: 'https://deliciousreverie.co.uk',
  integrations: [
    svelte(),
    tailwind()
  ]
});
