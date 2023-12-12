import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // ... other configurations

  site: 'https://emfs-eksamen.netlify.app/',
  integrations: [sitemap()]
});