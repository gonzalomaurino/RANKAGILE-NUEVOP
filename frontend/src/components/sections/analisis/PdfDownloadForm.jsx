import { useState } from 'react';
import { requestReportPdf } from '../../../services/seoClient.js';

export default function PdfDownloadForm({ analysisId, analysisUrl }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | ok | error
  const [error, setError] = useState('');

  if (!analysisId) return null;

  async function submit(e) {
    e.preventDefault();
    if (!form.nombre || !form.email) {
      setError('Completá nombre e email para descargar el informe');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setError('');
    try {
      const blob = await requestReportPdf(analysisId, form);
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `rankagile-seo-${analysisId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
      setStatus('ok');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'No se pudo generar el PDF');
    }
  }

  if (!open) {
    return (
      <div className="ra-ana-gratis-pdf-trigger">
        <button
          type="button"
          className="ra-ana-gratis-btn"
          onClick={() => setOpen(true)}
        >
          Descargar informe en PDF
        </button>
        <p className="ra-ana-gratis-pdf-note">
          Te pedimos un email para enviarte alertas sobre el SEO de {analysisUrl}. Sin spam.
        </p>
      </div>
    );
  }

  return (
    <div className="ra-ana-gratis-pdf-form">
      <h4>Descargá el informe completo en PDF</h4>
      <form onSubmit={submit} noValidate>
        <input
          className="ra-ana-gratis-input"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          disabled={status === 'loading'}
          required
        />
        <input
          className="ra-ana-gratis-input"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          disabled={status === 'loading'}
          required
        />
        <input
          className="ra-ana-gratis-input"
          placeholder="Empresa (opcional)"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="ra-ana-gratis-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Generando PDF…' : 'Recibir informe PDF'}
        </button>
      </form>
      {status === 'ok' && <p className="ra-ana-gratis-pdf-ok">¡Listo! La descarga debería haberse iniciado.</p>}
      {status === 'error' && <p className="ra-ana-gratis-error">{error}</p>}
    </div>
  );
}
