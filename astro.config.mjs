import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


const isProduction = process.env.NODE_ENV === 'production';
const deployedDomain = 'https://short-thoughts.christopherlopes.com/';

// https://astro.build/config
export default defineConfig({
  site: isProduction ? deployedDomain : 'http://localhost:4321',
  integrations: [tailwind({
    config: {
      applyBase: false,
    }
  })],
});
