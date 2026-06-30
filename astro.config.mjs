import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// html5advent.com - modern web platform resource (HTML/CSS/JS, Web APIs) + "Web Platform Advent".
// Recovered expired domain (DR51). Legacy backlinks point at the ROOT "/" → must return 200.
// EN at root, /fr and /es localized (Eric rule: min trilingual). Affiliate /go redirects excluded from sitemap.
export default defineConfig({
  site: 'https://html5advent.com',
  trailingSlash: 'ignore',
  output: 'static',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/go/') }),
  ],
});
