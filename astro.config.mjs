import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://elitelawncaresa.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
