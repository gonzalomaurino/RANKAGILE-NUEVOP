import { load } from 'cheerio';
import crypto from 'node:crypto';
import { fetchUrl } from './fetcher.js';
import { seoCache } from './cache.js';
import { config } from '../../config/env.js';
import { analyzeOnPage } from './analyzers/onPage.js';
import { analyzeTechnical } from './analyzers/technical.js';
import { analyzePerformance } from './analyzers/performance.js';
import { analyzeMobile } from './analyzers/mobile.js';
import { analyzeOffPage } from './analyzers/offPage.js';
import { analyzeServer } from './analyzers/server.js';
import { analyzeGeo } from './analyzers/geo.js';
import { seoAnalysisRepository } from '../../repositories/seoAnalysis.repository.js';

function statusFromScore(score) {
  if (score >= 90) return 'excellent';
  if (score >= 75) return 'good';
  if (score >= 50) return 'warning';
  return 'poor';
}

function buildPriorityList(modules) {
  const entries = [];
  for (const m of modules) {
    for (const f of m.findings) {
      if (f.type === 'ok' || f.type === 'info') continue;
      entries.push({
        moduleKey: m.key,
        moduleLabel: m.label,
        ...f,
      });
    }
  }
  const rank = { high: 0, medium: 1, low: 2, info: 3 };
  const typeRank = { error: 0, warning: 1 };
  entries.sort((a, b) => {
    const pr = (rank[a.priority] ?? 9) - (rank[b.priority] ?? 9);
    if (pr !== 0) return pr;
    return (typeRank[a.type] ?? 9) - (typeRank[b.type] ?? 9);
  });
  return entries;
}

function weightedGlobalScore(modules) {
  const scoring = modules.filter((m) => m.weight > 0);
  const totalWeight = scoring.reduce((s, m) => s + m.weight, 0);
  if (!totalWeight) return 0;
  const weighted = scoring.reduce((s, m) => s + m.score * m.weight, 0);
  return Math.round(weighted / totalWeight);
}

function normalizeUrl(raw) {
  try {
    const u = new URL(raw);
    if (!/^https?:$/.test(u.protocol)) throw new Error('protocol');
    u.hash = '';
    return u.toString();
  } catch {
    throw Object.assign(new Error('URL inválida. Usá https://dominio.com'), { status: 400 });
  }
}

export async function runSeoAnalysis(rawUrl, { persist = true } = {}) {
  const url = normalizeUrl(rawUrl);

  const cached = seoCache.get(url);
  if (cached) return { ...cached, cached: true };

  const deadline = Date.now() + config.seo.analysisTimeoutMs;
  const fetched = await fetchUrl(url);

  if (fetched.status >= 400 || !fetched.body) {
    const err = new Error(`No se pudo obtener la página (HTTP ${fetched.status})`);
    err.status = 502;
    throw err;
  }

  const $ = load(fetched.body);
  const ctx = {
    $,
    html: fetched.body,
    url,
    finalUrl: fetched.finalUrl,
    status: fetched.status,
    headers: fetched.headers,
    redirects: fetched.redirects,
    ttfbMs: fetched.ttfbMs,
    contentLength: fetched.contentLength,
  };

  // Analizadores: algunos sincrónicos, otros async (technical/offPage/server hacen fetch extra)
  const withTimeout = (p) => Promise.race([
    Promise.resolve(p),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout analizador')), Math.max(1000, deadline - Date.now()))),
  ]).catch((err) => ({ __error: err.message }));

  const [onPage, technical, performance, mobile, offPage, server, geo] = await Promise.all([
    withTimeout(analyzeOnPage(ctx)),
    withTimeout(analyzeTechnical(ctx)),
    withTimeout(analyzePerformance(ctx)),
    withTimeout(analyzeMobile(ctx)),
    withTimeout(analyzeOffPage(ctx)),
    withTimeout(analyzeServer(ctx)),
    withTimeout(analyzeGeo(ctx)),
  ]);

  const modules = [onPage, technical, performance, mobile, offPage, server, geo]
    .filter((m) => m && !m.__error);

  const score = weightedGlobalScore(modules);
  const priorities = buildPriorityList(modules);

  const result = {
    id: crypto.randomBytes(8).toString('hex'),
    url,
    finalUrl: fetched.finalUrl,
    analyzedAt: new Date().toISOString(),
    ttfbMs: fetched.ttfbMs,
    status: statusFromScore(score),
    score,
    modules,
    priorities,
    summary: {
      errors: modules.reduce((s, m) => s + m.findings.filter((f) => f.type === 'error').length, 0),
      warnings: modules.reduce((s, m) => s + m.findings.filter((f) => f.type === 'warning').length, 0),
      oks: modules.reduce((s, m) => s + m.findings.filter((f) => f.type === 'ok').length, 0),
    },
    cached: false,
  };

  seoCache.set(url, result);
  if (persist) {
    try { await seoAnalysisRepository.save(result); } catch (err) {
      console.warn('[seo] no se pudo persistir análisis:', err.message);
    }
  }

  return result;
}
