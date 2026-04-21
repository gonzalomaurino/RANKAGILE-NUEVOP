import { Router } from 'express';
import { runSeoAnalysis } from '../services/seo/analyzer.js';
import { seoAnalysisRepository } from '../repositories/seoAnalysis.repository.js';
import { generateAnalysisPdf } from '../services/seo/pdf.js';
import { contactRepository } from '../repositories/contact.repository.js';

const router = Router();

router.get('/analyze', async (req, res, next) => {
  try {
    const url = (req.query.url || '').toString();
    if (!url) return res.status(400).json({ error: 'Parametro url requerido' });
    const result = await runSeoAnalysis(url);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.get('/report/:id', async (req, res, next) => {
  try {
    const result = await seoAnalysisRepository.findById(req.params.id);
    if (!result) return res.status(404).json({ error: 'Informe no encontrado' });
    res.json(result);
  } catch (err) { next(err); }
});

router.post('/report/:id/pdf', async (req, res, next) => {
  try {
    const { nombre, email, empresa } = req.body || {};
    if (!nombre || !email) {
      return res.status(400).json({ error: 'nombre y email requeridos para descargar el PDF' });
    }
    const result = await seoAnalysisRepository.findById(req.params.id);
    if (!result) return res.status(404).json({ error: 'Informe no encontrado' });

    const lead = await contactRepository.save({
      nombre, email, empresa, url: result.url,
      createdAt: new Date().toISOString(),
    });
    await seoAnalysisRepository.attachLead(result.id, lead.id);

    const pdf = await generateAnalysisPdf(result);
    if (!pdf) {
      return res.status(503).json({
        error: 'PDF no disponible en este entorno (Puppeteer no instalado).',
      });
    }
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="rankagile-seo-${result.id}.pdf"`,
    );
    res.send(pdf);
  } catch (err) { next(err); }
});

export default router;
