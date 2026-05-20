import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { config } from './config/env.js';
import { connect } from './db.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';
import { seoAnalyzeLimiter } from './middlewares/rateLimit.js';
import contactRouter from './routes/contact.routes.js';
import healthRouter from './routes/health.routes.js';
import seoRouter from './routes/seo.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FRONTEND_DIST = path.join(__dirname, '..', 'frontend', 'dist');

const app = express();
app.set('trust proxy', 1);

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// ==================== API ====================
app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);
app.use('/api/seo/analyze', seoAnalyzeLimiter);
app.use('/api/seo', seoRouter);

// ==================== 301 REDIRECTS ====================
const REDIRECTS_301 = {
  '/cuanto-cuesta-geo': '/blog/cuanto-cuesta-geo',
  '/por-que-no-aparezco-en-chatgpt': '/blog/por-que-no-aparezco-en-chatgpt',
  '/seo-vs-geo-vs-aeo': '/blog/seo-vs-geo-vs-aeo',
};

app.use((req, res, next) => {
  const dest = REDIRECTS_301[req.path];
  if (dest) return res.redirect(301, dest);
  next();
});

// ==================== FRONTEND ESTÁTICO ====================
if (fs.existsSync(FRONTEND_DIST)) {
  app.use(express.static(FRONTEND_DIST, {
    maxAge: '1d',
    etag: false,
    index: false,
  }));
  console.log(`[api] Sirviendo frontend estático desde: ${FRONTEND_DIST}`);
} else {
  console.warn(`[WARN] No se encontró carpeta dist en: ${FRONTEND_DIST}`);
  console.warn('[WARN] Ejecuta: cd frontend && npm run build');
}

// ==================== SPA FALLBACK ====================
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'Not Found' });
  const indexPath = path.join(FRONTEND_DIST, 'index.html');
  if (fs.existsSync(indexPath)) return res.sendFile(indexPath);
  res.status(404).json({
    error: 'Frontend no construido',
    message: 'Ejecuta: npm run build:frontend',
    missingFile: indexPath,
  });
});

app.use(notFound);
app.use(errorHandler);

connect().then(() => {
  app.listen(config.port, '0.0.0.0', () => {
    console.log(`
╔════════════════════════════════════════════════════════╗
║     🚀 RANKAGILE - API + FRONTEND (RAILWAY READY)      ║
╠════════════════════════════════════════════════════════╣
║ Puerto:                ${config.port}
║ Modo:                  ${config.env}
║ API:                   http://localhost:${config.port}/api
║ SEO Analyzer:          http://localhost:${config.port}/api/seo/analyze?url=...
║ Frontend:              http://localhost:${config.port}
║ DB:                    ${config.database.enabled ? 'PostgreSQL' : 'in-memory (fallback)'}
║ PageSpeed API key:     ${config.external.pageSpeedApiKey ? 'configurada' : 'no (fallback)'}
╚════════════════════════════════════════════════════════╝
    `);
  });
});
