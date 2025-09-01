import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


const isProduction = process.env.NODE_ENV === 'production';
const deployedDomain = 'https://ciwchris.github.io';
const baseSubdirectory = '/short-thoughts/';

// https://astro.build/config
export default defineConfig({
  site: isProduction ? deployedDomain : 'http://localhost:4321',
  base: baseSubdirectory,
  integrations: [tailwind({
    config: {
      applyBase: false,
    }
  })],
});
