// scripts/generate-og-images.js
// Genera todas las OG images definidas en data/og-images.js
//
// Uso:  node scripts/generate-og-images.js
//       node scripts/generate-og-images.js --only=geo,home
//       node scripts/generate-og-images.js --out=./public/og

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

import { OG_IMAGES } from '../data/og-images.js';
import { ogTemplate } from '../template/og-template.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── CLI args ────────────────────────────────────────────────────
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);
const OUT_DIR = args.out
  ? path.resolve(process.cwd(), args.out)
  : path.join(ROOT, 'output');
const ONLY = args.only ? new Set(args.only.split(',')) : null;

// ── Cargar fuentes ──────────────────────────────────────────────
// Las fuentes tienen que estar en /fonts. Ver README.
async function loadFonts() {
  const fontsDir = path.join(ROOT, 'fonts');
  const [interRegular, interSemibold, jetBrainsMono] = await Promise.all([
    fs.readFile(path.join(fontsDir, 'Inter-Regular.ttf')),
    fs.readFile(path.join(fontsDir, 'Inter-SemiBold.ttf')),
    fs.readFile(path.join(fontsDir, 'JetBrainsMono-Regular.ttf')),
  ]);
  return [
    { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
    { name: 'Inter', data: interSemibold, weight: 600, style: 'normal' },
    { name: 'JetBrainsMono', data: jetBrainsMono, weight: 400, style: 'normal' },
  ];
}

// ── Generar una imagen ──────────────────────────────────────────
async function generateOne(entry, fonts) {
  const element = ogTemplate(entry);

  // SVG con Satori
  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts,
  });

  // SVG → PNG con resvg
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  const pngBuffer = resvg.render().asPng();

  // Asegurar subcarpeta si filename contiene /
  const outPath = path.join(OUT_DIR, `${entry.filename}.jpg`);
  await fs.mkdir(path.dirname(outPath), { recursive: true });

  // Resvg solo produce PNG; si querés JPG real, agregá sharp.
  // Para SEO un PNG renombrado .png funciona igual de bien.
  // Te dejo PNG para no agregar otra dependencia.
  const finalPath = outPath.replace(/\.jpg$/, '.png');
  await fs.writeFile(finalPath, pngBuffer);

  return finalPath;
}

// ── Main ────────────────────────────────────────────────────────
async function main() {
  console.log(`\nGenerando OG images en: ${OUT_DIR}`);

  const fonts = await loadFonts();
  const targets = ONLY
    ? OG_IMAGES.filter((e) => ONLY.has(e.filename) || ONLY.has(path.basename(e.filename)))
    : OG_IMAGES;

  if (targets.length === 0) {
    console.log('⚠  Ningún archivo coincide con --only');
    return;
  }

  let ok = 0;
  let fail = 0;

  for (const entry of targets) {
    try {
      const out = await generateOne(entry, fonts);
      const rel = path.relative(process.cwd(), out);
      console.log(`  ✓ ${rel}`);
      ok += 1;
    } catch (err) {
      console.error(`  ✗ ${entry.filename}: ${err.message}`);
      fail += 1;
    }
  }

  console.log(`\nListo. ${ok} generadas, ${fail} fallidas.\n`);
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error('Error fatal:', err);
  process.exit(1);
});
