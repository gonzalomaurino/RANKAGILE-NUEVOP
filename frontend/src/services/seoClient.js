const BASE_URL = import.meta.env.VITE_API_URL || '/api';
const EXTERNAL_URL = import.meta.env.VITE_EXTERNAL_SEO_API
  || 'https://seo-test-delta.vercel.app/api/analyze';

async function fetchJson(url, init) {
  const res = await fetch(url, init);
  const payload = await res.json().catch(() => null);
  if (!res.ok) {
    const message = payload?.error || `Error ${res.status}`;
    throw Object.assign(new Error(message), { status: res.status, payload });
  }
  return payload;
}

export async function analyzeExternal(url) {
  return fetchJson(`${EXTERNAL_URL}?url=${encodeURIComponent(url)}`);
}

export async function analyzeInternal(url) {
  return fetchJson(`${BASE_URL}/seo/analyze?url=${encodeURIComponent(url)}`);
}

export async function requestReportPdf(id, lead) {
  const res = await fetch(`${BASE_URL}/seo/report/${id}/pdf`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw Object.assign(new Error(payload.error || `Error ${res.status}`), { status: res.status });
  }
  return res.blob();
}

/**
 * Ejecuta ambos análisis en paralelo y fusiona los resultados. El externo
 * aporta las 6 categorías visuales actuales; el interno aporta los 7 módulos
 * detallados del requerimientos.md + la lista priorizada + GEO.
 */
export async function analyzeSeo(url) {
  const [externalResult, internalResult] = await Promise.allSettled([
    analyzeExternal(url),
    analyzeInternal(url),
  ]);

  const external = externalResult.status === 'fulfilled' ? externalResult.value : null;
  const internal = internalResult.status === 'fulfilled' ? internalResult.value : null;

  if (!external && !internal) {
    throw externalResult.reason || internalResult.reason || new Error('Fallaron ambos análisis');
  }

  // Score global: priorizamos el score del interno (ponderado por módulos).
  // Si no hay interno, usamos el externo.
  const score = internal?.score ?? external?.score ?? 0;

  return {
    id: internal?.id || null,
    url,
    analyzedAt: internal?.analyzedAt || new Date().toISOString(),
    score,
    status: internal?.status || (score >= 75 ? 'good' : score >= 50 ? 'warning' : 'poor'),
    external, // { score, categories, issues, details, issuesCount }
    internal, // { modules, priorities, summary, ... }
  };
}
