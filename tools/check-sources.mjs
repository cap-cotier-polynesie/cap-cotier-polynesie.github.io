/* tools/check-sources.mjs - every Polynesia-specific rule must cite its source.
 *
 * Added 2026-11-04 after a review found course rules imported from métropole
 * (5 knots in the 300 m band, CRR only for a fixed VHF, 2019 safety list)
 * that no stored source backed. Two checks:
 *  1. Each "callout pf" in the course either carries a <p class="src"> line,
 *     or is marked data-advice (practical advice, not a rule) or
 *     data-unsourced (a known gap: reported as a warning, to fix).
 *  2. content/sources.json: every concept it lists exists, and every source
 *     has a url and a verbatim quote.
 *
 *   node tools/check-sources.mjs   exit 1 on any failure
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const raw = readFileSync(join(ROOT, 'app/data/courseData.js'), 'utf8');
const body = raw.slice(raw.indexOf('window.PERMIS_DATA = ') + 'window.PERMIS_DATA = '.length, raw.lastIndexOf('}') + 1);
const data = JSON.parse(body);
const sources = JSON.parse(readFileSync(join(ROOT, 'content/sources.json'), 'utf8'));

const errors = [], warnings = [];
for (const s of data.sections) {
  const re = /<div class="callout pf"([^>]*)><strong>([^<]*)<\/strong>([\s\S]*?)<\/div>/g;
  let m;
  while ((m = re.exec(s.html))) {
    const [, attrs, title, inner] = m;
    if (/data-advice/.test(attrs)) continue;
    if (/data-unsourced/.test(attrs)) { warnings.push(`${s.id} « ${title} » : règle sans source (à sourcer)`); continue; }
    if (!/<p class="src">/.test(inner)) errors.push(`${s.id} « ${title} » : encadré Polynésie sans ligne Source`);
  }
}
for (const [concept, list] of Object.entries(sources.concepts)) {
  if (!data.concepts[concept]) errors.push(`sources.json : notion inconnue ${concept}`);
  for (const x of list) if (!x.url || !x.quote) errors.push(`sources.json : ${concept} : source sans url ou sans citation`);
}
for (const w of warnings) console.warn('warn  ' + w);
for (const e of errors) console.error('ERROR ' + e);
console.log(`${errors.length} erreur(s), ${warnings.length} avertissement(s)`);
process.exit(errors.length ? 1 : 0);
