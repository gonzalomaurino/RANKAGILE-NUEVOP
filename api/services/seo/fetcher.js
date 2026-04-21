import { config } from '../../config/env.js';

const MAX_REDIRECTS = 8;

/**
 * Fetch con seguimiento manual de redirects para poder reportar la cadena,
 * medir TTFB y detectar loops / cross-origin.
 */
export async function fetchUrl(rawUrl, { method = 'GET', timeoutMs } = {}) {
  const redirects = [];
  let current = rawUrl;
  const started = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    timeoutMs || config.seo.requestTimeoutMs,
  );

  try {
    for (let i = 0; i <= MAX_REDIRECTS; i += 1) {
      const t0 = Date.now();
      const res = await fetch(current, {
        method,
        redirect: 'manual',
        signal: controller.signal,
        headers: {
          'User-Agent': config.seo.userAgent,
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br',
        },
      });
      const ttfb = Date.now() - t0;

      if ([301, 302, 303, 307, 308].includes(res.status)) {
        const location = res.headers.get('location');
        if (!location) {
          return {
            url: current,
            finalUrl: current,
            status: res.status,
            headers: Object.fromEntries(res.headers.entries()),
            ttfbMs: ttfb,
            redirects,
            body: '',
            contentLength: 0,
            timings: { totalMs: Date.now() - started },
          };
        }
        const next = new URL(location, current).toString();
        redirects.push({ from: current, to: next, status: res.status });
        current = next;
        continue;
      }

      let body = '';
      let contentLength = 0;
      if (method === 'GET') {
        const reader = res.body?.getReader?.();
        if (reader) {
          const chunks = [];
          let received = 0;
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            received += value.byteLength;
            if (received > config.seo.maxHtmlBytes) {
              try { await reader.cancel(); } catch {}
              break;
            }
            chunks.push(value);
          }
          const buf = new Uint8Array(received);
          let off = 0;
          for (const c of chunks) {
            buf.set(c, off);
            off += c.byteLength;
          }
          contentLength = received;
          body = new TextDecoder('utf-8', { fatal: false }).decode(buf);
        } else {
          body = await res.text();
          contentLength = body.length;
        }
      }

      return {
        url: rawUrl,
        finalUrl: current,
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
        ttfbMs: ttfb,
        redirects,
        body,
        contentLength,
        timings: { totalMs: Date.now() - started },
      };
    }
    throw new Error('Demasiados redirects (posible loop)');
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * HEAD simple (o GET con body descartado si el server no soporta HEAD).
 * Útil para probar endpoints alternos (robots.txt, sitemap, variantes WWW).
 */
export async function probeUrl(url, { timeoutMs = 8000 } = {}) {
  try {
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'User-Agent': config.seo.userAgent },
      });
      return {
        ok: res.ok,
        status: res.status,
        finalUrl: res.url || url,
        headers: Object.fromEntries(res.headers.entries()),
      };
    } finally {
      clearTimeout(to);
    }
  } catch (err) {
    return { ok: false, status: 0, error: err.message };
  }
}

export async function fetchText(url, options = {}) {
  try {
    const r = await fetchUrl(url, options);
    if (r.status >= 200 && r.status < 300) return { ok: true, body: r.body, status: r.status };
    return { ok: false, status: r.status, body: '' };
  } catch (err) {
    return { ok: false, status: 0, error: err.message, body: '' };
  }
}
