// Affiliate offers for html5advent.com — REAL, trackable Awin links only (no untracked fallback).
// Hosting niche = the only on-theme monetizable angle for a web-platform dev site.
// EPC used to prioritise. Contabo (CJ, EPC ~46€) to be added once its deeplink is verified live.
export const OFFERS = {
  o2switch: {
    url: 'https://www.awin1.com/cread.php?awinmid=13324&awinaffid=979469',
    label: 'O2switch',
    epc: 3.84,
  },
  infomaniak: {
    url: 'https://www.awin1.com/cread.php?awinmid=19231&awinaffid=979469',
    label: 'Infomaniak',
    epc: 0.06,
  },
};

// Per-page cluster -> aligned offer + honest angle (sub-label) by locale.
// Only assign a CTA when the page genuinely has hosting/deploy intent (bottom-funnel).
// Reference/API pages get NO cta (info intent) — never force one.
export const CTA_BY_CLUSTER = {
  'hosting': {
    slug: 'o2switch',
    angle: {
      en: { title: 'Need to host your web project?', sub: 'O2switch — all-inclusive hosting, one flat price.' },
      fr: { title: 'Besoin d’héberger votre projet web ?', sub: 'O2switch — hébergement tout compris, un prix unique.' },
      es: { title: '¿Necesitas alojar tu proyecto web?', sub: 'O2switch — alojamiento todo incluido, precio único.' },
    },
  },
  'deploy': {
    slug: 'infomaniak',
    angle: {
      en: { title: 'Deploy on European infrastructure', sub: 'Infomaniak — eco-friendly Swiss hosting & cloud.' },
      fr: { title: 'Déployez sur une infra européenne', sub: 'Infomaniak — hébergement et cloud suisses écoresponsables.' },
      es: { title: 'Despliega en infraestructura europea', sub: 'Infomaniak — alojamiento y nube suizos ecológicos.' },
    },
  },
};

export function offerForCluster(cluster) {
  const c = CTA_BY_CLUSTER[cluster];
  if (!c) return null;
  const o = OFFERS[c.slug];
  if (!o) return null;
  return { slug: c.slug, angle: c.angle, ...o };
}
