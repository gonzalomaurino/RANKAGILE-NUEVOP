import { ok, warn, err, scoreFor, PRIORITY } from '../findings.js';

export function analyzeMobile({ $, html }) {
  const findings = [];
  const meta = {};

  // Viewport
  const viewport = ($('meta[name="viewport"]').attr('content') || '').toLowerCase();
  meta.viewport = viewport || null;
  if (!viewport) {
    findings.push(err('viewport', 'Meta viewport', {
      message: 'No hay <meta name="viewport">',
      recommendation: 'Agregar <meta name="viewport" content="width=device-width, initial-scale=1">.',
      weight: 3, priority: PRIORITY.high,
    }));
  } else if (!viewport.includes('width=device-width')) {
    findings.push(warn('viewport', 'Meta viewport', {
      message: 'viewport no usa width=device-width',
      value: viewport,
      recommendation: 'Usar width=device-width para diseño responsive.',
      weight: 2, priority: PRIORITY.high,
    }));
  } else if (viewport.includes('user-scalable=no') || viewport.includes('maximum-scale=1')) {
    findings.push(warn('viewport', 'Meta viewport', {
      message: 'viewport bloquea el zoom del usuario',
      value: viewport,
      recommendation: 'Permitir zoom (remover user-scalable=no) por accesibilidad.',
      weight: 1,
    }));
  } else {
    findings.push(ok('viewport', 'Meta viewport', { value: viewport, weight: 3 }));
  }

  // Responsive heuristics — media queries en CSS inline o linkeado
  const inlineCss = $('style').text();
  const hasMediaQueries = /@media\s*\([^)]*\)/i.test(inlineCss)
    || $('link[rel="stylesheet"][media]').length > 0;
  if (hasMediaQueries) {
    findings.push(ok('responsive', 'Diseño responsive', {
      value: 'Se detectan media queries',
      weight: 2,
    }));
  } else {
    findings.push(warn('responsive', 'Diseño responsive', {
      message: 'No se detectan media queries en CSS inline/linkeado',
      recommendation: 'Implementar breakpoints CSS para dispositivos móviles.',
      weight: 2, priority: PRIORITY.high,
    }));
  }

  // Fuentes inline con px chicos
  const smallFontMatches = inlineCss.match(/font-size\s*:\s*(\d{1,2})px/gi) || [];
  const smallCount = smallFontMatches
    .map((m) => Number(m.match(/(\d{1,2})px/)[1]))
    .filter((n) => n < 14).length;
  if (smallCount > 0) {
    findings.push(warn('font_size', 'Tamaño de fuente', {
      message: `${smallCount} reglas CSS con fuente < 14px`,
      recommendation: 'Usar fuente base de al menos 14-16px para legibilidad móvil.',
      weight: 1,
    }));
  }

  // Elementos potencialmente overflow (width fijos grandes inline)
  const fixedWidths = $('[style*="width:"]').toArray().filter((el) => {
    const m = ($(el).attr('style') || '').match(/width\s*:\s*(\d{3,5})px/i);
    return m && Number(m[1]) > 420;
  });
  if (fixedWidths.length > 0) {
    findings.push(warn('overflow', 'Contenido más ancho que pantalla', {
      message: `${fixedWidths.length} elemento(s) con width fijo mayor a 420px inline`,
      recommendation: 'Reemplazar widths fijos por max-width y unidades relativas.',
      weight: 1, priority: PRIORITY.high,
    }));
  } else {
    findings.push(ok('overflow', 'Contenido más ancho que pantalla', {
      value: 'Sin widths fijos excesivos inline',
      weight: 1,
    }));
  }

  // Tap targets (links en listas densas muy juntos por heurística grosera)
  const tapTargets = $('a, button').length;
  meta.tapTargets = tapTargets;

  return {
    key: 'mobile',
    label: 'Usabilidad Móvil',
    score: scoreFor(findings),
    weight: 0.10,
    findings,
    meta,
  };
}
