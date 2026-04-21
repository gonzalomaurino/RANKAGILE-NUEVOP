// One-shot script: splits original-index.html into fragments for each component.
const fs = require('fs');
const path = require('path');

const RAW_DIR = __dirname;
const html = fs.readFileSync(path.join(RAW_DIR, 'original-index.html'), 'utf8');

function extract(re, msg) {
  const m = html.match(re);
  if (!m) throw new Error('No match: ' + msg);
  return m;
}

// --- head content (between <head> and </head>) ---
const head = extract(/<head>([\s\S]*?)<\/head>/, 'head')[1];
fs.writeFileSync(path.join(RAW_DIR, 'head.html'), head.trim());

// --- body tag attributes ---
const bodyAttrs = extract(/<body([^>]*)>/, 'body')[1].trim();
fs.writeFileSync(path.join(RAW_DIR, 'body-attrs.txt'), bodyAttrs);

// --- header inner content ---
const header = extract(/<header class="et-l et-l--header">\s*([\s\S]*?)\s*<\/header>/, 'header')[1];
fs.writeFileSync(path.join(RAW_DIR, 'header.html'), header.trim());

// --- article (main page content) ---
const article = extract(/<article[^>]*id="post-406"[^>]*>([\s\S]*?)<\/article>/, 'article')[1];
fs.writeFileSync(path.join(RAW_DIR, 'main.html'), article.trim());

// --- footer inner content ---
const footer = extract(/<footer class="et-l et-l--footer">\s*([\s\S]*?)\s*<\/footer>/, 'footer')[1];
fs.writeFileSync(path.join(RAW_DIR, 'footer.html'), footer.trim());

// --- body-end scripts (after </footer>) ---
const afterFooter = html.split('</footer>')[1];
const bodyEnd = afterFooter.split('</body>')[0];
fs.writeFileSync(path.join(RAW_DIR, 'body-scripts.html'), bodyEnd.trim());

// --- split article into per-section fragments (et_pb_section_N) ---
// Find top-level sections inside <div class="et_builder_inner_content"><div class="et_pb_section_0">...</div>...
// Use a regex to match each section_N opening tag and balanced content using a simpler approach:
// Since Divi formats sections as sibling <div class="et_pb_section_N ...">...</div>, we can split.

const sections = [];
const sectionRe = /<div class="(et_pb_section_\d+[^"]*)"[^>]*>/g;
const starts = [];
let m;
while ((m = sectionRe.exec(article)) !== null) {
  starts.push({ index: m.index, cls: m[1], tag: m[0] });
}

// To find the end of each section, we track brace-depth via counting <div/</div on the full range to next section start (or end of article)
function findSectionEnd(src, startIdx) {
  // startIdx points at '<div class="et_pb_section_...">
  let depth = 0;
  let i = startIdx;
  const openRe = /<div\b/g;
  const closeRe = /<\/div>/g;
  // scan char-by-char using two regexes advancing together
  let nextOpen = src.indexOf('<div', i);
  let nextClose = src.indexOf('</div>', i);
  while (i < src.length) {
    if (nextOpen !== -1 && (nextClose === -1 || nextOpen < nextClose)) {
      depth++;
      i = nextOpen + 4;
      nextOpen = src.indexOf('<div', i);
    } else if (nextClose !== -1) {
      depth--;
      i = nextClose + 6;
      nextClose = src.indexOf('</div>', i);
      if (depth === 0) return i;
    } else {
      break;
    }
  }
  return src.length;
}

for (const s of starts) {
  const end = findSectionEnd(article, s.index);
  const html = article.slice(s.index, end);
  sections.push({ cls: s.cls, html });
}

// Save each section
for (let i = 0; i < sections.length; i++) {
  fs.writeFileSync(path.join(RAW_DIR, `section-${i}.html`), sections[i].html);
}

console.log(JSON.stringify({
  head: head.length,
  header: header.length,
  article: article.length,
  footer: footer.length,
  bodyEnd: bodyEnd.length,
  bodyAttrs,
  sections: sections.map(s => ({ cls: s.cls, size: s.html.length })),
}, null, 2));
