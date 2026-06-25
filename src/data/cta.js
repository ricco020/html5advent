// Affiliate offers — REAL, verified, trackable links only (no untracked fallback).
// Contabo CJ link verified full-chain (vpnsmith 99e1f7a, 2026-06-25): tkqlhce.com/click-101765100-<LINK_ID>.
// EPC drives prioritisation: Contabo (~46€) >> O2switch (3.84€) → Contabo primary on VPS/server pages.
export const OFFERS = {
  contabo: {
    url: 'https://www.tkqlhce.com/click-101765100-12454592', // Contabo VPS textlink EN (verified)
    label: 'Contabo',
    epc: 46,
  },
  infomaniak: {
    url: 'https://www.awin1.com/cread.php?awinmid=19231&awinaffid=979469',
    label: 'Infomaniak',
    epc: 0.06,
  },
};

// Per-page cluster -> aligned offer + honest angle by locale. Only hosting/deploy pages get a CTA.
export const CTA_BY_CLUSTER = {
  // VPS / server / app hosting → Contabo (highest EPC, aligned with "need a server")
  'hosting': {
    slug: 'contabo',
    angle: {
      en: { title: 'Need a server for your project?', sub: 'Contabo — VPS from a few € / month, generous CPU & RAM.' },
      fr: { title: 'Besoin d’un serveur pour votre projet ?', sub: 'Contabo — VPS à quelques € / mois, CPU et RAM généreux.' },
      es: { title: '¿Necesitas un servidor para tu proyecto?', sub: 'Contabo — VPS desde unos € / mes, CPU y RAM generosos.' },
      de: { title: 'Brauchst du einen Server für dein Projekt?', sub: 'Contabo — VPS ab wenigen € / Monat, großzügig CPU & RAM.' },
      it: { title: 'Ti serve un server per il tuo progetto?', sub: 'Contabo — VPS da pochi € / mese, CPU e RAM generosi.' },
      pt: { title: 'Precisa de um servidor para o seu projeto?', sub: 'Contabo — VPS a partir de poucos € / mês, CPU e RAM generosos.' },
    },
  },
  // Static / JAMstack deploy → Infomaniak (European hosting & cloud)
  'deploy': {
    slug: 'infomaniak',
    angle: {
      en: { title: 'Deploy on European infrastructure', sub: 'Infomaniak — eco-friendly Swiss hosting & cloud.' },
      fr: { title: 'Déployez sur une infra européenne', sub: 'Infomaniak — hébergement et cloud suisses écoresponsables.' },
      es: { title: 'Despliega en infraestructura europea', sub: 'Infomaniak — alojamiento y nube suizos ecológicos.' },
      de: { title: 'Auf europäischer Infrastruktur deployen', sub: 'Infomaniak — umweltfreundliches Schweizer Hosting & Cloud.' },
      it: { title: 'Esegui il deploy su infrastruttura europea', sub: 'Infomaniak — hosting e cloud svizzeri ecologici.' },
      pt: { title: 'Faça deploy em infraestrutura europeia', sub: 'Infomaniak — hospedagem e cloud suíços ecológicos.' },
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
