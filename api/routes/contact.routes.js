import { Router } from 'express';
import { createLead } from '../services/contact.service.js';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const { nombre, email, empresa, url } = req.body ?? {};
    if (!nombre || !email) {
      return res.status(400).json({ error: 'nombre y email son requeridos' });
    }
    const lead = await createLead({ nombre, email, empresa, url });
    res.status(201).json(lead);
  } catch (err) {
    next(err);
  }
});

export default router;
