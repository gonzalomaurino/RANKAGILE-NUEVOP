import { ok, warn, err, info, scoreFor, PRIORITY } from '../findings.js';
import { config } from '../../../config/env.js';

const MODERN_FORMATS = /\.(webp|avif)(\?|$)/i;
const RASTER_FORMATS = /\.(jpg|jpeg|png|gif)(\?|$)/i;

async function pageSpeedInsights(url) {
  const key = config.external.pageSpeedApiKey;
  if (!key) return null;
  try {
    const api = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    api.searchParams.set('url', url);
    api.searchParams.set('key', key);
    for (const cat of ['performance', 'seo', 'accessibility']) api.searchParams.append('category', cat);
    api.searchParams.set('strategy', 'mobile');
    const res = await fetch(api, { headers: { Accept: 'application/json' } });
    if (!res.ok) return null;
    const data = await res.json();
    const lr = data.lighthouseResult || {};
    const audits = lr.audits || {};
    return {
      performanceScore: Math.round((lr.categories?.performance?.score ?? 0) * 100),
      lcpMs: audits['largest-contentful-paint']?.numericValue,
      cls: audits['cumulative-layout-shift']?.numericValue,
      inpMs: audits['interaction-to-next-paint']?.numericValue,
      ttfbMs: audits['server-response-time']?.numericValue,
      fcpMs: audits['first-contentful-paint']?.numericValue,
    };
  } catch {
    return null;
  }
}

export async function analyzePerformance({ $, finalUrl, html, headers, ttfbMs, contentLength }) {
  const findings = [];
  const meta = { source: 'heuristics', ttfbMs, htmlBytes: contentLength };

  // TTFB
  if (ttfbMs != null) {
    if (ttfbMs < 200) {
      findings.push(ok('ttfb', 'TTFB (Time To First Byte)', { value: `${ttfbMs}ms`, weight: 2 }));
    } else if (ttfbMs < 600) {
      findings.push(warn('ttfb', 'TTFB (Time To First Byte)', {
        message: `TTFB de ${ttfbMs}ms (idealmente < 200ms)`,
        recommendation: 'Revisar caché de servidor, CDN y tiempos de respuesta del backend.',
        weight: 2, priority: PRIORITY.high,
      }));
    } else {
      findings.push(err('ttfb', 'TTFB (Time To First Byte)', {
        message: `TTFB alto: ${ttfbMs}ms`,
        recommendation: 'Implementar CDN y cachear respuestas del servidor.',
        weight: 2, priority: PRIORITY.high,
      }));
    }
  }

  // Page weight
  const sizeKB = Math.round((contentLength || Buffer.byteLength(html || '', 'utf8')) / 1024);
  meta.htmlKB = sizeKB;
  if (sizeKB > 1024) {
    findings.push(warn('page_weight', 'Peso de la página (HTML)', {
      message: `HTML pesa ${sizeKB}KB (ideal < 500KB)`,
      recommendation: 'Reducir el HTML inline, mover CSS/JS a archivos externos con cache.',
      weight: 1,
    }));
  } else {
    findings.push(ok('page_weight', 'Peso de la página (HTML)', { value: `${sizeKB}KB`, weight: 1 }));
  }

  // Render-blocking resources
  const blockingCss = $('head link[rel="stylesheet"]:not([media="print"])').length;
  const blockingJs = $('head script[src]:not([async]):not([defer])').length;
  meta.renderBlocking = { css: blockingCss, js: blockingJs };
  if (blockingCss + blockingJs > 6) {
    findings.push(warn('render_blocking', 'Recursos bloqueantes', {
      message: `${blockingCss} CSS y ${blockingJs} JS bloqueantes en <head>`,
      recommendation: 'Diferir JS con async/defer y cargar CSS crítico inline.',
      weight: 2, priority: PRIORITY.medium,
    }));
  } else {
    findings.push(ok('render_blocking', 'Recursos bloqueantes', {
      value: `${blockingCss} CSS, ${blockingJs} JS`,
      weight: 1,
    }));
  }

  // Imágenes sin optimizar
  const imgs = $('img[src]').toArray();
  const modern = imgs.filter((el) => MODERN_FORMATS.test($(el).attr('src') || '')).length;
  const raster = imgs.filter((el) => RASTER_FORMATS.test($(el).attr('src') || '')).length;
  const lazy = imgs.filter((el) => ($(el).attr('loading') || '').toLowerCase() === 'lazy').length;
  meta.images = { total: imgs.length, modern, raster, lazy };
  if (imgs.length === 0) {
    findings.push(info('image_formats', 'Optimización de imágenes', { message: 'Sin imágenes', weight: 0 }));
  } else {
    if (raster > modern && raster > 2) {
      findings.push(warn('image_formats', 'Formatos de imagen modernos', {
        message: `${raster} imágenes en JPG/PNG vs ${modern} en WebP/AVIF`,
        recommendation: 'Convertir las imágenes a WebP/AVIF para reducir peso hasta 50%.',
        weight: 2,
      }));
    } else {
      findings.push(ok('image_formats', 'Formatos de imagen modernos', {
        value: `${modern} modernas / ${imgs.length} totales`,
        weight: 1,
      }));
    }
    if (imgs.length > 4 && lazy / imgs.length < 0.3) {
      findings.push(warn('image_lazyload', 'Lazy-loading de imágenes', {
        message: `Solo ${lazy}/${imgs.length} imágenes usan loading="lazy"`,
        recommendation: 'Agregar loading="lazy" a imágenes below-the-fold.',
        weight: 1,
      }));
    }
  }

  // Cache headers
  const cacheControl = headers['cache-control'] || '';
  if (cacheControl.includes('no-store') || cacheControl === '') {
    findings.push(warn('cache_headers', 'Headers de caché', {
      message: cacheControl ? `Cache-Control: ${cacheControl}` : 'Sin Cache-Control',
      recommendation: 'Configurar Cache-Control con max-age en recursos estáticos.',
      weight: 1, priority: PRIORITY.low,
    }));
  } else {
    findings.push(ok('cache_headers', 'Headers de caché', { value: cacheControl, weight: 1 }));
  }

  // PageSpeed Insights (si hay key)
  const psi = await pageSpeedInsights(finalUrl);
  if (psi) {
    meta.source = 'pagespeed';
    meta.pageSpeed = psi;
    if (psi.lcpMs != null) {
      findings.push(psi.lcpMs < 2500
        ? ok('lcp', 'LCP (Largest Contentful Paint)', { value: `${Math.round(psi.lcpMs)}ms`, weight: 2 })
        : psi.lcpMs < 4000
          ? warn('lcp', 'LCP', {
              message: `LCP alto: ${Math.round(psi.lcpMs)}ms`,
              recommendation: 'Optimizar imagen principal y TTFB.',
              weight: 2, priority: PRIORITY.high,
            })
          : err('lcp', 'LCP', {
              message: `LCP muy alto: ${Math.round(psi.lcpMs)}ms`,
              recommendation: 'Priorizar mejora del LCP (es Core Web Vital).',
              weight: 2, priority: PRIORITY.high,
            }));
    }
    if (psi.cls != null) {
      findings.push(psi.cls < 0.1
        ? ok('cls', 'CLS (Cumulative Layout Shift)', { value: psi.cls.toFixed(3), weight: 2 })
        : warn('cls', 'CLS', {
            message: `CLS alto: ${psi.cls.toFixed(3)}`,
            recommendation: 'Fijar dimensiones de imágenes/ads y evitar inserciones dinámicas.',
            weight: 2, priority: PRIORITY.high,
          }));
    }
    if (psi.inpMs != null) {
      findings.push(psi.inpMs < 200
        ? ok('inp', 'INP / FID', { value: `${Math.round(psi.inpMs)}ms`, weight: 2 })
        : warn('inp', 'INP / FID', {
            message: `INP alto: ${Math.round(psi.inpMs)}ms`,
            recommendation: 'Reducir JS principal del thread y diferir tareas largas.',
            weight: 2, priority: PRIORITY.high,
          }));
    }
  } else {
    findings.push(info('cwv_fallback', 'Core Web Vitals', {
      message: 'LCP/CLS/INP estimados sólo con PageSpeed Insights (configurar PAGESPEED_API_KEY).',
      weight: 0,
    }));
  }

  return {
    key: 'performance',
    label: 'Rendimiento y Velocidad',
    score: scoreFor(findings),
    weight: 0.20,
    findings,
    meta,
  };
}
