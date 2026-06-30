// Minimal i18n for html5advent.com. EN at root, /fr, /es (Eric rule: min trilingual).
export const LOCALES = ['en', 'fr', 'es', 'de', 'it', 'pt'];
export const DEFAULT_LOCALE = 'en';

export const UI = {
  en: {
    tagline: 'The modern web platform, one demo at a time.',
    intro: 'Practical, tested guides to HTML, CSS, JavaScript and browser Web APIs - plus the Web Platform Advent calendar of 24 front-end demos.',
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
    intro: 'Des guides concrets et testés sur HTML, CSS, JavaScript et les Web APIs du navigateur - plus le calendrier Web Platform Advent de 24 démos front-end.',
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
    intro: 'Guías prácticas y probadas sobre HTML, CSS, JavaScript y las Web APIs del navegador - además del calendario Web Platform Advent de 24 demos front-end.',
    advent: 'Web Platform Advent',
    guides: 'Guías',
    apis: 'Web APIs',
    hosting: 'Alojamiento y despliegue',
    readMore: 'Leer la guía',
    disclosure: 'Algunos enlaces de alojamiento son de afiliados. Nunca cambian lo que recomendamos y solo los añadimos a páginas realmente relevantes.',
    home: 'Inicio',
    skip: 'Ir al contenido',
  },
  de: {
    tagline: 'Die moderne Web-Plattform, eine Demo nach der anderen.',
    intro: 'Praktische, getestete Anleitungen zu HTML, CSS, JavaScript und Browser-Web-APIs - plus der Web-Platform-Advent-Kalender mit 24 Frontend-Demos.',
    advent: 'Web Platform Advent', guides: 'Anleitungen', apis: 'Web-APIs', hosting: 'Hosting & Deployment',
    readMore: 'Anleitung lesen',
    disclosure: 'Einige Hosting-Links sind Affiliate-Links. Sie ändern nie unsere Empfehlungen und stehen nur auf wirklich relevanten Seiten.',
    home: 'Start', skip: 'Zum Inhalt springen',
  },
  it: {
    tagline: 'La piattaforma web moderna, una demo alla volta.',
    intro: 'Guide pratiche e testate su HTML, CSS, JavaScript e le Web API del browser - più il calendario Web Platform Advent di 24 demo front-end.',
    advent: 'Web Platform Advent', guides: 'Guide', apis: 'Web API', hosting: 'Hosting e deploy',
    readMore: 'Leggi la guida',
    disclosure: 'Alcuni link di hosting sono link di affiliazione. Non cambiano mai ciò che consigliamo e li aggiungiamo solo a pagine davvero pertinenti.',
    home: 'Home', skip: 'Vai al contenuto',
  },
  pt: {
    tagline: 'A plataforma web moderna, uma demo de cada vez.',
    intro: 'Guias práticos e testados sobre HTML, CSS, JavaScript e as Web APIs do navegador - além do calendário Web Platform Advent com 24 demos front-end.',
    advent: 'Web Platform Advent', guides: 'Guias', apis: 'Web APIs', hosting: 'Hospedagem e deploy',
    readMore: 'Ler o guia',
    disclosure: 'Alguns links de hospedagem são links de afiliado. Nunca mudam o que recomendamos e só os adicionamos a páginas realmente relevantes.',
    home: 'Início', skip: 'Ir para o conteúdo',
  },
};

export const t = (locale, key) => (UI[locale] || UI.en)[key] || UI.en[key] || key;
export const localePath = (locale, path = '') => (locale === 'en' ? `/${path}` : `/${locale}/${path}`).replace(/\/+$/, '') || '/';
