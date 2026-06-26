import { GUIDES } from '../data/guides.js';
import { localePath } from '../i18n/ui.js';

const SITE = 'https://html5advent.com';

const HEADER = `# HTML5 Advent

> Independent resource on the modern web platform — HTML, CSS, JavaScript and browser Web APIs —
> plus "Web Platform Advent", a yearly calendar of practical front-end demos and tips.
> First-hand, example-driven, vendor-neutral. Continues the original 2010 HTML5 advent calendar.

## What you'll find here
- Practical guides to Web APIs (Canvas, Web Storage, Geolocation, WebSocket, View Transitions, Intersection Observer…)
- Modern HTML/CSS/JS features and how they ship across browsers
- "Web Platform Advent": 24 short, runnable demos and tips
- Hands-on hosting & deployment guides for web projects (static sites, Node/PHP apps)

## Editorial principles
- Original, tested examples — no fabricated benchmarks or claims.
- Vendor-neutral; affiliate links (hosting) are disclosed and limited to genuinely relevant pages.

## Languages
English (/), Français (/fr), Español (/es), Deutsch (/de), Italiano (/it), Português (/pt).

## Full content
- /llms-full.txt — every guide with its description, in all six languages.
`;

const CAT_LABELS: Record<string, string> = {
  apis: 'Web APIs',
  js: 'JavaScript',
  css: 'CSS',
  html: 'HTML & Web Components',
  hosting: 'Hosting & deployment',
};
const CAT_ORDER = ['apis', 'js', 'css', 'html', 'hosting'];

type Guide = {
  slug: string;
  cat: string;
  locales: string[];
  title: Record<string, string>;
  desc: Record<string, string>;
};

export async function GET() {
  const guides = GUIDES as Guide[];
  const cats = [...new Set(guides.map((g) => g.cat))].sort(
    (a, b) => (CAT_ORDER.indexOf(a) + 1 || 99) - (CAT_ORDER.indexOf(b) + 1 || 99)
  );

  const sections = cats.map((cat) => {
    const items = guides
      .filter((g) => g.cat === cat)
      .map((g) => `- [${g.title.en}](${SITE}${localePath('en', `guides/${g.slug}`)}): ${g.desc.en}`)
      .join('\n');
    return `## ${CAT_LABELS[cat] || cat}\n${items}`;
  });

  const text = `${HEADER}\n${sections.join('\n\n')}\n`;
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
