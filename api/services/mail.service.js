import nodemailer from 'nodemailer';
import { config } from '../config/env.js';

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  if (!config.mail.host || !config.mail.user || !config.mail.pass) return null;
  transporter = nodemailer.createTransport({
    host: config.mail.host,
    port: config.mail.port,
    secure: config.mail.secure,
    auth: { user: config.mail.user, pass: config.mail.pass },
  });
  return transporter;
}

function escape(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function leadHtml(lead, sourceLabel) {
  const rows = [
    ['Nombre', `${lead.nombre ?? ''} ${lead.apellido ?? ''}`.trim()],
    ['Email', lead.email],
    ['Sitio web / Marca', lead.empresa || lead.url || '—'],
    ['Origen', sourceLabel],
    ['Fecha', new Date().toLocaleString('es-AR')],
  ];
  const trs = rows.map(([k, v]) => `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555;font-size:13px;font-weight:600;width:160px;">${escape(k)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;font-size:14px;">${escape(v)}</td>
    </tr>
  `).join('');
  return `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Poppins,Arial,sans-serif;background:#f6f7fb;margin:0;padding:24px;">
    <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:#0a0a0a;color:#38FEDA;padding:20px 24px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;font-size:12px;">
        RankAgile · Nuevo lead
      </div>
      <div style="padding:24px;">
        <h2 style="margin:0 0 16px;font-size:18px;color:#111;">Llegó un nuevo contacto</h2>
        <table style="width:100%;border-collapse:collapse;">${trs}</table>
      </div>
      <div style="padding:16px 24px;background:#fafafa;border-top:1px solid #eee;font-size:11px;color:#888;text-align:center;">
        Enviado automáticamente desde rankagile.com
      </div>
    </div>
  </body></html>`;
}

export async function sendLeadNotification(lead, { source } = {}) {
  const tx = getTransporter();
  const sourceLabel = source === 'home' ? 'Formulario Home'
    : source === 'contacto' ? 'Pagina de Contacto'
    : (source || 'Web');

  if (!tx) {
    console.warn('[mail] SMTP no configurado — lead recibido pero sin notificación:', lead.email);
    return { sent: false, reason: 'smtp_not_configured' };
  }

  try {
    const info = await tx.sendMail({
      from: config.mail.from,
      to: config.mail.to,
      replyTo: lead.email,
      subject: `Nuevo lead RankAgile — ${lead.nombre ?? ''} ${lead.apellido ?? ''}`.trim(),
      html: leadHtml(lead, sourceLabel),
    });
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error('[mail] error enviando notificación:', err.message);
    return { sent: false, reason: err.message };
  }
}
