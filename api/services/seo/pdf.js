import { config } from '../../config/env.js';

function escape(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function color(status) {
  return { good: '#17a673', excellent: '#0b8b5c', warning: '#d99a0b', poor: '#c53030' }[status] || '#555';
}

export function renderReportHtml(result) {
  const modulesHtml = result.modules.map((m) => `
    <section class="mod">
      <header>
        <h2>${escape(m.label)}</h2>
        <span class="pill" style="background:${color(m.score >= 75 ? 'good' : m.score >= 50 ? 'warning' : 'poor')}">${m.score}%</span>
      </header>
      <ul>
        ${m.findings.map((f) => `
          <li class="f f-${f.type}">
            <span class="icon">${f.type === 'ok' ? '✓' : f.type === 'warning' ? '!' : f.type === 'error' ? '✕' : 'i'}</span>
            <div>
              <strong>${escape(f.label)}</strong>
              <div>${escape(f.message || '')}</div>
              ${f.value ? `<div class="value">${escape(f.value)}</div>` : ''}
              ${f.recommendation ? `<div class="rec"><em>Recomendación:</em> ${escape(f.recommendation)}</div>` : ''}
            </div>
          </li>
        `).join('')}
      </ul>
    </section>
  `).join('');

  const priorities = result.priorities.slice(0, 15).map((p, i) => `
    <li>
      <span class="rank">${i + 1}</span>
      <div>
        <strong>${escape(p.label)}</strong> — ${escape(p.moduleLabel)}
        <div>${escape(p.message || '')}</div>
        ${p.recommendation ? `<div class="rec">${escape(p.recommendation)}</div>` : ''}
      </div>
    </li>
  `).join('');

  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Informe SEO ${escape(result.url)}</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, Segoe UI, Poppins, Arial, sans-serif; color: #111; margin: 0; padding: 32px; }
  .header { border-bottom: 2px solid #38FEDA; padding-bottom: 16px; margin-bottom: 24px; }
  .brand { color: #0a0a0a; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; font-size: 12px; }
  h1 { margin: 8px 0; font-size: 24px; }
  .summary { display: flex; gap: 24px; margin: 24px 0; }
  .score { background:#0a0a0a; color: #fff; padding: 16px 24px; border-radius: 12px; min-width: 160px; }
  .score strong { font-size: 48px; display:block; }
  .meta { flex:1; font-size: 13px; color: #444; }
  .mod { margin-top: 24px; border: 1px solid #eee; border-radius: 8px; padding: 16px; page-break-inside: avoid; }
  .mod header { display: flex; justify-content: space-between; align-items: center; }
  .mod h2 { margin: 0; font-size: 18px; }
  .pill { color: #fff; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; }
  .mod ul { list-style: none; padding: 0; margin: 12px 0 0; }
  .f { display: grid; grid-template-columns: 28px 1fr; gap: 10px; padding: 8px 0; border-bottom: 1px solid #f5f5f5; font-size: 13px; }
  .f:last-child { border: 0; }
  .icon { width: 24px; height: 24px; border-radius: 999px; text-align: center; line-height: 24px; font-weight: 700; color: #fff; }
  .f-ok .icon { background: #17a673; }
  .f-warning .icon { background: #d99a0b; }
  .f-error .icon { background: #c53030; }
  .f-info .icon { background: #555; }
  .value { color: #666; margin-top: 2px; font-size: 12px; word-break: break-word; }
  .rec { color: #333; margin-top: 4px; font-size: 12px; }
  .priorities { margin-top: 32px; page-break-before: always; }
  .priorities ol { list-style: none; padding: 0; counter-reset: rank; }
  .priorities li { display: grid; grid-template-columns: 32px 1fr; gap: 10px; padding: 10px 0; border-bottom: 1px solid #eee; }
  .rank { background: #38FEDA; color: #0a0a0a; font-weight: 700; border-radius: 999px; width: 24px; height: 24px; text-align: center; line-height: 24px; font-size: 12px; }
  footer { margin-top: 40px; font-size: 11px; color: #888; text-align: center; }
</style></head>
<body>
  <div class="header">
    <div class="brand">RankAgile · Informe SEO</div>
    <h1>${escape(result.url)}</h1>
    <div class="meta">Analizado el ${escape(new Date(result.analyzedAt).toLocaleString('es-AR'))}</div>
  </div>
  <div class="summary">
    <div class="score"><span>Puntaje global</span><strong>${result.score}</strong>/100</div>
    <div class="meta">
      <div>✕ ${result.summary.errors} errores</div>
      <div>! ${result.summary.warnings} advertencias</div>
      <div>✓ ${result.summary.oks} checks OK</div>
      <div>TTFB: ${result.ttfbMs ?? '—'}ms</div>
    </div>
  </div>
  ${modulesHtml}
  <section class="priorities">
    <h2>Por dónde empezar</h2>
    <ol>${priorities}</ol>
  </section>
  <footer>Generado por RankAgile · https://rankagile.com</footer>
</body></html>`;
}

let puppeteerLoader = null;

export async function generateAnalysisPdf(result) {
  if (!config.pdf.enabled) return null;
  try {
    puppeteerLoader = puppeteerLoader || import('puppeteer').then((m) => m.default || m).catch(() => null);
    const puppeteer = await puppeteerLoader;
    if (!puppeteer) return null;

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    try {
      const page = await browser.newPage();
      await page.setContent(renderReportHtml(result), { waitUntil: 'networkidle0' });
      const buffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '16mm', bottom: '16mm', left: '14mm', right: '14mm' },
      });
      return buffer;
    } finally {
      await browser.close();
    }
  } catch (err) {
    console.warn('[seo:pdf] puppeteer no disponible:', err.message);
    return null;
  }
}
