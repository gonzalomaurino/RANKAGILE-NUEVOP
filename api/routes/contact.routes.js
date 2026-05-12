import { Router } from 'express';
import { createLead } from '../services/contact.service.js';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const body = req.body ?? {};
    const nombre = (body.nombre || body.firstName || '').toString().trim();
    const apellido = (body.apellido || body.lastName || '').toString().trim();
    const email = (body.email || '').toString().trim();
    const empresa = (body.empresa || body.web || '').toString().trim() || null;
    const url = (body.url || '').toString().trim() || null;
    const source = (body.source || '').toString().trim() || null;

    if (!nombre || !email) {
      return res.status(400).json({ error: 'nombre y email son requeridos' });
    }
    const lead = await createLead({ nombre, apellido, email, empresa, url, source });
    res.status(201).json(lead);
  } catch (err) {
    next(err);
  }
});

export default router;
