/* tools/stamp.mjs - cache busting for Cap Côtier (no build step).
 *
 * GitHub Pages serves assets with aggressive caching, so returning visitors
 * can run stale JavaScript or CSS against this week's index.html.
 * Every internal asset URL gets ?v=<hash of all sources>, so one changed byte
 * changes every URL that could have been cached, and nothing changes when
 * nothing changed.
 *
 *   node tools/stamp.mjs          stamp
 *   node tools/stamp.mjs --check  exit 1 if stamping would change anything
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const check = process.argv.includes('--check');

function walk(dir, out = []) {
  const fullDir = join(ROOT, dir);
  for (const name of readdirSync(fullDir)) {
    const rel = `${dir}/${name}`;
    if (statSync(join(ROOT, rel)).isDirectory()) walk(rel, out);
    else if (/\.(js|mjs|css|svg)$/.test(name)) out.push(rel);
  }
  return out;
}

const sources = [
  ...walk('app/js'),
  ...walk('app/css'),
  ...walk('app/data'),
  ...walk('app/assets').filter((f) => f.endsWith('.svg'))
];

// The hash is over the UNSTAMPED text, so re-running is idempotent, and over
// LF line endings, so a checkout with autocrlf on Windows stamps the same
// value as the Linux box.
const strip = (t) => t.replace(/\r\n/g, '\n').replace(/(\.(?:js|mjs|css|svg))\?v=[0-9a-f]+/g, '$1');
const eol = (t) => (t.includes('\r\n') ? '\r\n' : '\n');

const h = createHash('sha256');
for (const f of sources.slice().sort()) {
  h.update(strip(readFileSync(join(ROOT, f), 'utf8')));
}
const V = h.digest('hex').slice(0, 10);

let changed = [];
const put = (rel, text) => {
  const cur = readFileSync(join(ROOT, rel), 'utf8');
  text = text.replace(/\n/g, eol(cur));
  if (cur === text) return;
  changed.push(rel);
  if (!check) writeFileSync(join(ROOT, rel), text);
};

// Update app/index.html asset references
let html = strip(readFileSync(join(ROOT, 'app/index.html'), 'utf8'));

// 1. Icônes SVG (favicon, logo)
html = html.replace(/((?:href|src)=")(assets\/[^"]+?\.svg)"/g, `$1$2?v=${V}"`);

// 2. CSS Stylesheet
html = html.replace(/(href=")(css\/style\.css)"/g, `$1$2?v=${V}"`);

// 3. Local JS Scripts (js/*.js and data/*.js)
html = html.replace(/(src=")(data\/courseData\.js)"/g, `$1$2?v=${V}"`);
html = html.replace(/(src=")(js\/[a-zA-Z0-9_\-]+\.js)"/g, `$1$2?v=${V}"`);

put('app/index.html', html);

if (check && changed.length) {
  console.error('stamp out of date:', changed.join(', '));
  process.exit(1);
}
console.log(check ? `stamp ok (v=${V})` : `stamped v=${V} (${changed.length} file(s) updated)`);
