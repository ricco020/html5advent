// Minimal i18n for html5advent.com. EN at root, /fr, /es (Eric rule: min trilingual).
export const LOCALES = ['en', 'fr', 'es'];
export const DEFAULT_LOCALE = 'en';

export const UI = {
  en: {
    tagline: 'The modern web platform, one demo at a time.',
    intro: 'Practical, tested guides to HTML, CSS, JavaScript and browser Web APIs — plus the Web Platform Advent calendar of 24 front-end demos.',
    advent: 'Web Platform Advent',
    guides: 'Guides',
    apis: 'Web APIs',
    hosting: 'Hosting & deploy',
    readMore: 'Read the guide',
    disclosure: 'Some hosting links are affiliate links. They never change what we recommend, and we only add them to genuinely relevant pages.',
    home: 'Home',
    skip: 'Skip to content',
  },
  fr: {
    tagline: 'La plateforme web moderne, une démo à la fois.',
    intro: 'Des guides concrets et testés sur HTML, CSS, JavaScript et les Web APIs du navigateur — plus le calendrier Web Platform Advent de 24 démos front-end.',
    advent: 'Web Platform Advent',
    guides: 'Guides',
    apis: 'Web APIs',
    hosting: 'Hébergement & déploiement',
    readMore: 'Lire le guide',
    disclosure: 'Certains liens d’hébergement sont des liens affiliés. Ils ne changent jamais nos recommandations et ne figurent que sur les pages réellement pertinentes.',
    home: 'Accueil',
    skip: 'Aller au contenu',
  },
  es: {
    tagline: 'La plataforma web moderna, una demo a la vez.',
    intro: 'Guías prácticas y probadas sobre HTML, CSS, JavaScript y las Web APIs del navegador — además del calendario Web Platform Advent de 24 demos front-end.',
    advent: 'Web Platform Advent',
    guides: 'Guías',
    apis: 'Web APIs',
    hosting: 'Alojamiento y despliegue',
    readMore: 'Leer la guía',
    disclosure: 'Algunos enlaces de alojamiento son de afiliados. Nunca cambian lo que recomendamos y solo los añadimos a páginas realmente relevantes.',
    home: 'Inicio',
    skip: 'Ir al contenido',
  },
};

export const t = (locale, key) => (UI[locale] || UI.en)[key] || UI.en[key] || key;
export const localePath = (locale, path = '') => (locale === 'en' ? `/${path}` : `/${locale}/${path}`).replace(/\/+$/, '') || '/';
