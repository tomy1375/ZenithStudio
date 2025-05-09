import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://zenithstudio.site', // Importante: añade tu URL
  devToolbar: {
    enabled: false, // Desactiva la toolbar correctamente
  },
  output: 'static',
  integrations: [
    tailwind({
      config: { path: './tailwind.config.ts' },
    }),
    sitemap(), // Genera automáticamente el sitemap.xml
    robotsTxt() // Genera automáticamente el robots.txt
  ]
});