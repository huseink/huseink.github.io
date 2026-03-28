import { defineConfig } from 'astro/config'

// https://astro.build/config
import partytown from '@astrojs/partytown'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://huseink.dev',
  markdown: {
    syntaxHighlight: 'prism',
  },
})
