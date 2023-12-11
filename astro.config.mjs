import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // ... other configurations

  site: 'https://emfs-eksamen.netlify.app/',
  integrations: [sitemap()],
});
