import { getPool } from '../db.js';

const memoryStore = new Map();

export const seoAnalysisRepository = {
  async save(result) {
    const pool = getPool();
    if (pool) {
      await pool.query(
        `INSERT INTO seo_analyses (id, url, score, payload)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (id) DO UPDATE SET score = EXCLUDED.score, payload = EXCLUDED.payload`,
        [result.id, result.url, result.score, JSON.stringify(result)],
      );
      return result;
    }
    memoryStore.set(result.id, result);
    return result;
  },

  async findById(id) {
    const pool = getPool();
    if (pool) {
      const { rows } = await pool.query(
        'SELECT payload FROM seo_analyses WHERE id = $1',
        [id],
      );
      if (!rows.length) return null;
      return typeof rows[0].payload === 'string'
        ? JSON.parse(rows[0].payload)
        : rows[0].payload;
    }
    return memoryStore.get(id) || null;
  },

  async attachLead(id, leadId) {
    const pool = getPool();
    if (pool) {
      await pool.query('UPDATE seo_analyses SET lead_id = $1 WHERE id = $2', [leadId, id]);
    }
  },
};
