import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://kewinbarboza.github.io/',
  adapter:vercel({
    analytics:true
  })
});
