import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false, // Desactiva la toolbar correctamente
  },
  output: 'static',
  integrations: [
    tailwind({
      config: { path: './tailwind.config.ts' },
    })
  ]
});
