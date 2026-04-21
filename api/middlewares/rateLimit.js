import rateLimit from 'express-rate-limit';
import { config } from '../config/env.js';

export const seoAnalyzeLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.freeDailyAnalyses,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Límite diario de análisis alcanzado para tu IP',
    detail: `Máximo ${config.rateLimit.freeDailyAnalyses} análisis cada 24 horas en la versión gratuita. Registrate para aumentar el límite.`,
  },
  keyGenerator: (req) =>
    (req.headers['x-forwarded-for']?.split(',')[0] || req.ip || '').trim(),
});
