import { ok, warn, info, scoreFor } from '../findings.js';
import { config } from '../../../config/env.js';

const SOCIAL_PATTERNS = {
  facebook: /facebook\.com\/[^\/"']+/i,
  twitter: /(twitter|x)\.com\/[^\/"']+/i,
  linkedin: /linkedin\.com\/(company|in)\/[^\/"']+/i,
  instagram: /instagram\.com\/[^\/"']+/i,
  youtube: /youtube\.com\/(@|channel|user|c)\/[^\/"']+/i,
  tiktok: /tiktok\.com\/@[^\/"']+/i,
};

function detectSocial($) {
  const detected = {};
  const hrefs = $('a[href]').map((_, el) => $(el).attr('href')).get();
  for (const [key, pattern] of Object.entries(SOCIAL_PATTERNS)) {
    const match = hrefs.find((h) => pattern.test(h || ''));
    if (match) detected[key] = match;
  }
  return detected;
}

async function fetchMozBacklinks(/* finalUrl */) {
  // Stub: los free tiers de Moz/DataForSEO requieren OAuth o POST con auth.
  // El conector queda listo; retornar null fuerza a usar fallbacks.
  if (!config.external.mozApiKey && !config.external.dataForSeoKey) return null;
  return null;
}

export async function analyzeOffPage({ $, finalUrl }) {
  const findings = [];
  const meta = {};

  // Señales sociales detectables del HTML
  const social = detectSocial($);
  meta.socialProfiles = social;
  const socialCount = Object.keys(social).length;
  if (socialCount === 0) {
    findings.push(warn('social_presence', 'Presencia en redes sociales', {
      message: 'No se detectaron enlaces a redes sociales',
      recommendation: 'Agregar links a tus perfiles oficiales en el footer y datos estructurados sameAs.',
      weight: 1,
    }));
  } else {
    findings.push(ok('social_presence', 'Presencia en redes sociales', {
      value: `${socialCount} red(es): ${Object.keys(social).join(', ')}`,
      weight: 1,
    }));
  }

  // sameAs en JSON-LD (señal estructurada de identidad)
  const sameAsCount = $('script[type="application/ld+json"]').toArray().reduce((acc, el) => {
    try {
      const parsed = JSON.parse($(el).contents().text());
      const nodes = Array.isArray(parsed) ? parsed : [parsed];
      for (const n of nodes) {
        if (n?.sameAs) {
          const arr = Array.isArray(n.sameAs) ? n.sameAs : [n.sameAs];
          acc += arr.length;
        }
      }
    } catch { /* ignore */ }
    return acc;
  }, 0);
  if (sameAsCount > 0) {
    findings.push(ok('same_as', 'Identidad estructurada (sameAs)', {
      value: `${sameAsCount} perfiles declarados en JSON-LD`,
      weight: 1,
    }));
  }

  // Backlinks externos reales (Moz/DataForSEO)
  const bl = await fetchMozBacklinks(finalUrl);
  if (bl) {
    meta.backlinks = bl;
    // Si se conecta una API real, se convierten a findings acá.
  } else {
    findings.push(info('backlinks_stub', 'Backlinks', {
      message: 'Conectá Moz API o DataForSEO para medir backlinks y Domain Authority.',
      weight: 0,
    }));
  }

  return {
    key: 'offPage',
    label: 'Backlinks y Off-Page',
    score: scoreFor(findings),
    weight: 0.10,
    findings,
    meta,
  };
}
