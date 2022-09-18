import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  outDir: '../../dist/apps/deliciousreverie',
  integrations: [svelte()],
});
