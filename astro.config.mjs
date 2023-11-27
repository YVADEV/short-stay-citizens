// astro.config.mjs
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// astro.config.mjs

// https://astro.build/config
export default defineConfig({
 integrations: [tailwind()],
 devOptions: {
    port: 3003,
 },
});