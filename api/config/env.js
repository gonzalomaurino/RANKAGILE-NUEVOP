import 'dotenv/config';

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 8000),

  database: {
    url: process.env.DATABASE_URL || null,
    enabled: Boolean(process.env.DATABASE_URL),
  },

  seo: {
    requestTimeoutMs: Number(process.env.SEO_REQUEST_TIMEOUT_MS || 20_000),
    analysisTimeoutMs: Number(process.env.SEO_ANALYSIS_TIMEOUT_MS || 45_000),
    cacheTtlMs: Number(process.env.SEO_CACHE_TTL_MS || 24 * 60 * 60 * 1000),
    cacheMax: Number(process.env.SEO_CACHE_MAX || 500),
    userAgent:
      process.env.SEO_USER_AGENT ||
      'Mozilla/5.0 (compatible; RankAgileBot/1.0; +https://rankagile.com/bot)',
    maxHtmlBytes: Number(process.env.SEO_MAX_HTML_BYTES || 5_000_000),
  },

  rateLimit: {
    freeDailyAnalyses: Number(process.env.RATE_LIMIT_FREE || 5),
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 24 * 60 * 60 * 1000),
  },

  external: {
    pageSpeedApiKey: process.env.PAGESPEED_API_KEY || null,
    mozApiKey: process.env.MOZ_API_KEY || null,
    dataForSeoKey: process.env.DATAFORSEO_API_KEY || null,
  },

  pdf: {
    enabled: process.env.PDF_ENABLED !== 'false',
  },

  mail: {
    host: process.env.SMTP_HOST || null,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER || null,
    pass: process.env.SMTP_PASS || null,
    from: process.env.MAIL_FROM || 'RankAgile <no-reply@rankagile.com>',
    to: process.env.MAIL_TO || 'growthimbar@gmail.com',
  },
};
