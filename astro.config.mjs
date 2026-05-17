import { defineConfig, fontProviders } from "astro/config"

import tailwindcss from "@tailwindcss/vite"
import vercel from "@astrojs/vercel"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  site: "https://kewinbarboza.com",

  adapter: vercel({
    analytics: true
  }),

  integrations: [react(), sitemap()],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
      package: "@fontsource/geist"
    }
  ]
})
