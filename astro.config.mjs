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
    sitemap({
      filter: (page) => !page.includes('/go/'),
      // Le host (Vercel) 308-redirige chaque /path/ vers /path (canonical sans slash).
      // build.format 'directory' faisait pourtant emettre au sitemap des URLs AVEC slash
      // => Google voyait "Page avec redirection" sur les 224 URLs (drag d'indexation, DR51).
      // On aligne les URLs du sitemap sur le canonical (sans slash), sauf la racine.
      serialize(item) {
        if (item.url !== 'https://html5advent.com/') {
          item.url = item.url.replace(/\/$/, '');
        }
        return item;
      },
    }),
  ],
});
