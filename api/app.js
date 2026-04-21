import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { connect } from './db.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';
import contactRouter from './routes/contact.routes.js';
import healthRouter from './routes/health.routes.js';

// Resolver __dirname en módulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FRONTEND_DIST = path.join(__dirname, '..', 'frontend', 'dist');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// ==================== RUTAS DE API ====================
app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);

// ==================== SERVIR FRONTEND ESTÁTICO ====================
// Archivos estáticos: JS, CSS, imágenes, HTMLs legacy, etc.
if (fs.existsSync(FRONTEND_DIST)) {
  app.use(express.static(FRONTEND_DIST, {
    maxAge: '1d',      // Cache: 1 día
    etag: false,       // Optimizar rendimiento
    index: false,      // NO servir index.html automáticamente
  }));
  console.log(`[api] Sirviendo frontend estático desde: ${FRONTEND_DIST}`);
} else {
  console.warn(`[WARN] No se encontró carpeta dist en: ${FRONTEND_DIST}`);
  console.warn('[WARN] Ejecuta: cd frontend && npm run build');
}

// ==================== SPA FALLBACK ====================
// Cualquier ruta que no coincida con archivo físico -> index.html
app.get('*', (req, res) => {
  const indexPath = path.join(FRONTEND_DIST, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({
      error: 'Frontend no construido',
      message: 'Ejecuta: npm run build:frontend',
      missingFile: indexPath,
    });
  }
});

// ==================== MANEJADORES DE ERROR ====================
app.use(notFound);
app.use(errorHandler);

// ==================== INICIAR SERVIDOR ====================
connect().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔════════════════════════════════════════════════════════╗
║     🚀 RANKAGILE - API + FRONTEND (RAILWAY READY)      ║
╠════════════════════════════════════════════════════════╣
║ Puerto:                ${PORT}
║ Modo:                  ${process.env.NODE_ENV || 'development'}
║ API:                   http://localhost:${PORT}/api
║ Frontend:              http://localhost:${PORT}
║ Frontend Dist:         ${FRONTEND_DIST}
╚════════════════════════════════════════════════════════╝
    `);
  });
});
