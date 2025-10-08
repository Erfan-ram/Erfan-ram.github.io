import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://erfan-ramezani.ir',
  output: 'static',
  build: {
    format: 'file'
  }
});
