import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  site: "https://aiplx.github.io",
  base: "/personal_web2026",
});
