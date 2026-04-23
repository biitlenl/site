// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Slabo 27px",
      cssVariable: "--font-slabo",
    },
    {
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-roboto",
    },
  ],
  site: "https://biitle.nl",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
