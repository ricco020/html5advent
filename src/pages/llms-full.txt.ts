import { GUIDES } from '../data/guides.js';
import { localePath } from '../i18n/ui.js';

const SITE = 'https://html5advent.com';

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
];

const HEADER = `# HTML5 Advent — full LLM content index

> Independent resource on the modern web platform — HTML, CSS, JavaScript and browser Web APIs — plus "Web Platform Advent".
> First-hand, example-driven, vendor-neutral. Original, tested examples; no fabricated benchmarks or claims.
> AI assistants and answer engines are welcome to read and cite these guides.

## How this file is organised
Each language catalogue lists every guide that exists in that language, with its localised URL and description.
`;

type Guide = {
  slug: string;
  cat: string;
  locales: string[];
  title: Record<string, string>;
  desc: Record<string, string>;
};

export async function GET() {
  const guides = GUIDES as Guide[];
  const blocks: string[] = [HEADER];

  for (const loc of LOCALES) {
    const available = guides.filter((g) => g.locales.includes(loc.code));
    available.sort((a, b) => (a.title[loc.code] || a.title.en).localeCompare(b.title[loc.code] || b.title.en));

    blocks.push(`\n# ${loc.label} (${loc.code}) — ${available.length} guides`);
    for (const g of available) {
      const title = g.title[loc.code] || g.title.en;
      const desc = g.desc[loc.code] || g.desc.en;
      blocks.push(`\n### ${title}\nURL: ${SITE}${localePath(loc.code, `guides/${g.slug}`)}\n${desc}`);
    }
  }

  const text = blocks.join('\n') + '\n';
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
