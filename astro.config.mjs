// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.ryantmoore.ca',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // ~9 KiB gzipped total — cheaper inlined than as a render-blocking request
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['moore.tailc24dca.ts.net'],
    },
  },
});
