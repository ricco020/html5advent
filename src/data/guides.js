// Single source of truth for published guides (home grid, hub, listings all derive from this).
// Add an entry ONLY when the matching page exists under src/pages/{en|fr|es}/guides/<slug>.
//   day     : Web Platform Advent door number (1–24)
//   cat     : 'apis' | 'css' | 'js' | 'html' | 'hosting'
//   cluster : CTA cluster ('hosting' | 'deploy') or null for pure-reference (no CTA)
//   title/desc: per-locale (en/fr/es)
export const GUIDES = [
  {
    slug: 'fetch-api-javascript', day: 1, cat: 'apis', cluster: null, locales: ['en'],
    title: {
      en: 'The Fetch API in JavaScript', fr: 'L’API Fetch en JavaScript', es: 'La API Fetch en JavaScript',
    },
    desc: {
      en: 'Make HTTP requests in the browser: GET, JSON, POST, error handling and aborting.',
      fr: 'Faire des requêtes HTTP dans le navigateur : GET, JSON, POST, erreurs et annulation.',
      es: 'Haz peticiones HTTP en el navegador: GET, JSON, POST, errores y cancelación.',
    },
  },
];

export const guidesByDay = () => {
  const m = {};
  for (const g of GUIDES) m[g.day] = g;
  return m;
};
export const guidesInCat = (cat) => GUIDES.filter((g) => g.cat === cat);
