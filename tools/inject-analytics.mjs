/* tools/inject-analytics.mjs - inject Tidesight tracker if configured via repository variable.
 *
 * Runs during CI deployment on GitHub Pages when TIDESIGHT_SITE_ID is set.
 * Forks without the repository variable keep clean, tracker-free builds.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const siteId = process.env.TIDESIGHT_SITE_ID;
const url = process.env.TIDESIGHT_URL;

if (siteId && url) {
  const ROOT = fileURLToPath(new URL('..', import.meta.url));
  const file = join(ROOT, 'app/index.html');
  const html = readFileSync(file, 'utf8');

  if (html.includes(url)) {
    console.log('Analytics tracker already present in index.html, skipping.');
  } else {
    const tag = `  <script async src="${url}" data-site="${siteId}"></script>\n`;
    const updated = html.replace('</head>', `${tag}</head>`);
    writeFileSync(file, updated, 'utf8');
    console.log(`Injected analytics tracker (site: ${siteId})`);
  }
} else {
  console.log('Analytics variables not provided, skipping injection.');
}

