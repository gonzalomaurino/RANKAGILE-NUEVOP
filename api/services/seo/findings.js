/**
 * Helpers para normalizar hallazgos. Cada finding tiene el mismo shape así el
 * frontend puede renderizar una tabla única por módulo.
 */
export const SEVERITY = { ok: 'ok', warning: 'warning', error: 'error', info: 'info' };
export const PRIORITY = { high: 'high', medium: 'medium', low: 'low', info: 'info' };

export function finding({
  id,
  label,
  type,
  message,
  value,
  priority = PRIORITY.medium,
  recommendation,
  weight = 1,
}) {
  return { id, label, type, message, value, priority, recommendation, weight };
}

export function ok(id, label, { message, value, priority, weight } = {}) {
  return finding({
    id, label, type: SEVERITY.ok,
    message: message || 'Cumple con buenas prácticas',
    value, priority, weight,
  });
}

export function warn(id, label, { message, value, priority, recommendation, weight } = {}) {
  return finding({
    id, label, type: SEVERITY.warning,
    message, value, priority: priority || PRIORITY.medium,
    recommendation, weight,
  });
}

export function err(id, label, { message, value, priority, recommendation, weight } = {}) {
  return finding({
    id, label, type: SEVERITY.error,
    message, value, priority: priority || PRIORITY.high,
    recommendation, weight,
  });
}

export function info(id, label, { message, value, weight } = {}) {
  return finding({
    id, label, type: SEVERITY.info,
    message, value, priority: PRIORITY.info, weight: weight ?? 0,
  });
}

/**
 * Puntaje por módulo: 100 si todo OK; penaliza por cada warning/error según
 * weight. Clamped 0..100.
 */
export function scoreFor(findings) {
  const scored = findings.filter((f) => f.type !== SEVERITY.info && (f.weight ?? 1) > 0);
  if (!scored.length) return 100;
  const totalWeight = scored.reduce((s, f) => s + (f.weight ?? 1), 0);
  const lost = scored.reduce((s, f) => {
    const w = f.weight ?? 1;
    if (f.type === SEVERITY.error) return s + w * 1;
    if (f.type === SEVERITY.warning) return s + w * 0.4;
    return s;
  }, 0);
  const pct = Math.max(0, Math.min(1, 1 - lost / totalWeight));
  return Math.round(pct * 100);
}
