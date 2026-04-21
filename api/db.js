import { config } from './config/env.js';

let pool = null;
let driver = 'memory';

async function tryLoadPg() {
  if (!config.database.enabled) return null;
  try {
    const { default: pg } = await import('pg');
    const { Pool } = pg;
    const p = new Pool({
      connectionString: config.database.url,
      ssl: config.database.url?.includes('sslmode=require')
        ? { rejectUnauthorized: false }
        : undefined,
    });
    await p.query('SELECT 1');
    return p;
  } catch (err) {
    console.warn('[db] PostgreSQL no disponible, usando fallback in-memory:', err.message);
    return null;
  }
}

async function runMigrations(p) {
  await p.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      nombre TEXT NOT NULL,
      email TEXT NOT NULL,
      empresa TEXT,
      url TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await p.query(`
    CREATE TABLE IF NOT EXISTS seo_analyses (
      id TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      score INTEGER NOT NULL,
      payload JSONB NOT NULL,
      lead_id INTEGER REFERENCES leads(id) ON DELETE SET NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await p.query('CREATE INDEX IF NOT EXISTS seo_analyses_url_idx ON seo_analyses (url);');
  await p.query('CREATE INDEX IF NOT EXISTS seo_analyses_created_idx ON seo_analyses (created_at DESC);');
}

export async function connect() {
  pool = await tryLoadPg();
  if (pool) {
    driver = 'postgres';
    await runMigrations(pool);
    console.log('[db] PostgreSQL conectado y migraciones aplicadas');
  } else {
    driver = 'memory';
    console.log('[db] usando storage in-memory (fallback)');
  }
  return { driver };
}

export function getPool() {
  return pool;
}

export function getDriver() {
  return driver;
}
