import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://now-next.nl',
  integrations: [sitemap()],
  output: 'static',
});
