import { Lead } from '../models/Lead.js';
import { getPool } from '../db.js';

const memoryStore = [];

export const contactRepository = {
  async save(data) {
    const pool = getPool();
    if (pool) {
      const { rows } = await pool.query(
        `INSERT INTO leads (nombre, email, empresa, url)
         VALUES ($1, $2, $3, $4)
         RETURNING id, nombre, email, empresa, url, created_at`,
        [data.nombre, data.email, data.empresa ?? null, data.url ?? null],
      );
      const r = rows[0];
      return new Lead({
        id: r.id,
        nombre: r.nombre,
        email: r.email,
        empresa: r.empresa,
        url: r.url,
        createdAt: r.created_at.toISOString(),
      });
    }
    const lead = new Lead({
      id: memoryStore.length + 1,
      ...data,
      createdAt: data.createdAt || new Date().toISOString(),
    });
    memoryStore.push(lead);
    return lead;
  },

  async findById(id) {
    const pool = getPool();
    if (pool) {
      const { rows } = await pool.query(
        'SELECT id, nombre, email, empresa, url, created_at FROM leads WHERE id = $1',
        [id],
      );
      if (!rows.length) return null;
      const r = rows[0];
      return new Lead({
        id: r.id,
        nombre: r.nombre,
        email: r.email,
        empresa: r.empresa,
        url: r.url,
        createdAt: r.created_at.toISOString(),
      });
    }
    return memoryStore.find((l) => l.id === Number(id)) || null;
  },

  async list() {
    const pool = getPool();
    if (pool) {
      const { rows } = await pool.query(
        'SELECT id, nombre, email, empresa, url, created_at FROM leads ORDER BY created_at DESC LIMIT 500',
      );
      return rows.map(
        (r) =>
          new Lead({
            id: r.id,
            nombre: r.nombre,
            email: r.email,
            empresa: r.empresa,
            url: r.url,
            createdAt: r.created_at.toISOString(),
          }),
      );
    }
    return [...memoryStore];
  },
};
