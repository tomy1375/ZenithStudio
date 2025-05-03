import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Esto asegura que se generen archivos estáticos
  integrations: [
    tailwind({
      // Asegurarse de que Tailwind use el archivo de configuración correcto
      config: { path: './tailwind.config.ts' },
    })
  ]
});
