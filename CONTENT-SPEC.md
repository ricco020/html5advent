# CONTENT-SPEC — rédaction des articles html5advent (à suivre À LA LETTRE)

Tu écris des articles Astro pour html5advent.com (ressource web moderne, EN/FR/ES). LECTURE OBLIGATOIRE
AVANT : le fichier gold-standard `src/pages/guides/fetch-api-javascript.astro` (copie sa structure exacte)
+ `src/layouts/Article.astro` (les props) + `src/data/cta.js` (clusters).

## RÈGLES DE BUILD ASTRO (CRITIQUE — sinon le build casse)
- Le contenu va dans le `<slot>` de `<Article>`. Utilise des balises HTML (`<p> <h2> <h3> <ul> <li> <table> <pre> <code> <figure>`).
- **CODE** : toujours `<pre><code>{`...code multi-ligne...`}</code></pre>` — le code DANS un template literal JS entre accolades. JAMAIS de code brut (les `{` `}` `<` casseraient le JSX).
- Dans le TEXTE en prose, une accolade littérale `{` ou `}` doit être écrite `&#123;` / `&#125;`. Un `<` littéral → `&lt;`.
- JAMAIS de commentaire HTML `<!-- -->`.
- Inline code court : `<code>response.ok</code>`.

## PROPS <Article> (frontmatter)
```
<Article lang="en|fr|es" slug="<slug>" title="…" description="…"
  cat="apis|css|js|html|hosting" day={N}
  hero="/img/<slug>-hero.jpg" heroAlt="…(décrit vraiment l'image)…"
  cluster={null} >   // null pour référence ; "hosting" ou "deploy" pour les pages hosting
```
- Import selon la locale :
  - EN : fichier `src/pages/guides/<slug>.astro` → `import Article from '../../layouts/Article.astro';`
  - FR : `src/pages/fr/guides/<slug>.astro` → `import Article from '../../../layouts/Article.astro';`
  - ES : `src/pages/es/guides/<slug>.astro` → `import Article from '../../../layouts/Article.astro';`

## IMAGES (2 par article, RÈGLE IMPÉRATIVE)
- 1 hero (prop `hero`) + **au moins 1 image in-body dans un `<figure>` avec `<figcaption>` qui décrit VRAIMENT la photo**.
- Source via : `python3 /mnt/c/Users/lerer/Desktop/NDD/scripts/find-images.py "<requête thème>" 3 landscape`
  (Pexels renvoie 403 → utiliser **Pixabay**). Télécharge dans `public/img/` :
  `curl -sL "<url_pixabay>" -o public/img/<slug>-hero.jpg` et `-inbody.jpg`.
- Vérifie que le fichier est un vrai JPEG non vide (`file public/img/<slug>-*.jpg`). Légende = ce que montre VRAIMENT l'image.
- **Hero unique par article** (jamais 2 articles avec le même hero).

## QUALITÉ
- Honnêteté stricte : 0 chiffre/étude/benchmark inventé. Exemples de code testés/corrects. Ton concret, utile, original.
- 800-1400 mots, exemples de code réels, 1 tableau récap quand pertinent.
- Les MÊMES 3 locales doivent couvrir le même contenu (traduction native, pas mot-à-mot).

## CTA (pages hosting uniquement)
- Articles `cat="hosting"` → `cluster="hosting"` (CTA O2switch) SAUF `static-website-hosting` → `cluster="deploy"` (Infomaniak).
- Articles référence (apis/css/js/html) → `cluster={null}` (PAS de CTA).
- Le CTA est rendu automatiquement par <Article> ; n'ajoute PAS de lien affilié manuel dans le corps.

## LISTE DES 15 ARTICLES (slug · day · cat · cluster · kw validé · sujet)
1. fetch-api-javascript · 1 · apis · null · (EN FAIT, écrire FR+ES) · Fetch API
2. javascript-promises · 2 · js · null · 2400 · Promesses JS (création, then/catch, Promise.all/race)
3. async-await-javascript · 3 · js · null · 1600 · async/await (vs promesses, try/catch, pièges)
4. service-worker · 4 · apis · null · 2900 · Service Workers (cache, offline, lifecycle, register)
5. web-components · 5 · html · null · 1600 · Web Components (Custom Elements, Shadow DOM, templates)
6. localstorage-vs-sessionstorage · 6 · apis · null · 720 · Web Storage (localStorage vs sessionStorage, limites, JSON)
7. css-nesting · 7 · css · null · 720 · Imbrication CSS native (&, support, vs Sass)
8. css-container-queries · 8 · css · null · 320 · Container queries (@container, container-type)
9. view-transitions-api · 9 · css · null · 320 · View Transitions API (transitions de page douces)
10. intersection-observer-api · 10 · apis · null · 260 · IntersectionObserver (lazy-load, scroll, reveal)
11. best-vps-for-web-hosting · 11 · hosting · hosting · 2400 · Meilleur VPS pour héberger un projet web
12. static-website-hosting · 12 · hosting · deploy · 880 · Héberger un site statique (Astro/Vite/JAMstack)
13. web-hosting-for-developers · 13 · hosting · hosting · 260 · Hébergement web pour développeurs (critères)
14. nodejs-hosting · 14 · hosting · hosting · 480 · Héberger une app Node.js (options, déploiement)
15. php-hosting · 15 · hosting · hosting · 480 · Hébergement PHP (mutualisé vs VPS, versions)

## LIVRABLE de chaque agent
- Écrire les fichiers .astro (EN+FR+ES) de SES articles + télécharger leurs images.
- Vérifier visuellement la cohérence (pas d'accolade nue dans la prose).
- RETOURNER en fin de message un bloc JSON `entries` pour guides.js, ex :
```json
{"entries":[{"slug":"javascript-promises","day":2,"cat":"js","cluster":null,"locales":["en","fr","es"],
 "title":{"en":"…","fr":"…","es":"…"},"desc":{"en":"…","fr":"…","es":"…"}}]}
```
