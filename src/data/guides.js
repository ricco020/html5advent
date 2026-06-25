// Single source of truth for published guides (home grid, hub, listings all derive from this).
// Add an entry ONLY when the matching page exists under src/pages/{en|fr|es}/guides/<slug>.
//   day     : Web Platform Advent door number (1–24)
//   cat     : 'apis' | 'css' | 'js' | 'html' | 'hosting'
//   cluster : CTA cluster ('hosting' | 'deploy') or null for pure-reference (no CTA)
//   title/desc: per-locale (en/fr/es)
export const GUIDES = [
  // e.g. { slug:'web-storage-api', day:1, cat:'apis', cluster:null,
  //        title:{en:'…',fr:'…',es:'…'}, desc:{en:'…',fr:'…',es:'…'} },
];

export const guidesByDay = () => {
  const m = {};
  for (const g of GUIDES) m[g.day] = g;
  return m;
};
export const guidesInCat = (cat) => GUIDES.filter((g) => g.cat === cat);
