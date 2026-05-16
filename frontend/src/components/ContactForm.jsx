import { useState } from 'react';
import '../styles/claude-contact-form.css';

const SERVICES = [
  'SEO Técnico', 'SEO Semántico / Contenido', 'GEO / AI Search',
  'Arquitectura Web', 'CRO & Conversión', 'Core Web Vitals',
  'Entity SEO / EEAT', 'Auditoría SEO',
];

const GOALS = [
  'Más tráfico orgánico', 'Generar leads cualificados', 'Mejorar posicionamiento',
  'Migración / Rediseño web', 'Visibilidad en IA y GEO', 'Auditoría estratégica',
];

const BUDGETS = [
  'Hasta USD 500/mes', 'USD 500–1.500/mes',
  'USD 1.500–3.000/mes', 'Más de USD 3.000/mes',
];

const URGENCY = [
  'En menos de 1 mes', 'En 1–3 meses',
  'Sin urgencia definida', 'Solo quiero una consulta',
];

const ROLES = [
  'Founder / CEO', 'Director / Gerente de Marketing',
  'Responsable de E-commerce', 'Product Manager',
  'Coordinador Digital', 'Otro',
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const INITIAL_FORM = {
  name: '', email: '', company: '', website: '', role: '',
  services: [], goal: '', message: '',
  budget: '', urgency: '', phone: '',
};

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(INITIAL_FORM);

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const toggleService = (s) =>
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));

  const validateStep = () => {
    const e = {};
    if (step === 1) {
      if (!form.name.trim()) e.name = 'Este campo es requerido.';
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = 'Ingresá un email válido.';
      if (!form.company.trim()) e.company = 'Este campo es requerido.';
      if (!form.role) e.role = 'Seleccioná una opción.';
    }
    if (step === 2) {
      if (form.services.length === 0) e.services = 'Seleccioná al menos un servicio.';
      if (!form.goal) e.goal = 'Seleccioná una opción.';
    }
    if (step === 3) {
      if (!form.budget) e.budget = 'Seleccioná una opción.';
      if (!form.urgency) e.urgency = 'Seleccioná una opción.';
    }
    return e;
  };

  const handleNext = async () => {
    const e = validateStep();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    if (step < 3) { setStep((s) => s + 1); return; }

    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contacto' }),
      });
      if (res.ok) setSubmitted(true);
      else setSubmitError('Hubo un error. Intentá nuevamente.');
    } catch {
      setSubmitError('Hubo un error. Intentá nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => { setErrors({}); setStep((s) => s - 1); };

  const segClass = (i) => {
    if (i < step) return 'cform-progress-seg done';
    if (i === step) return 'cform-progress-seg active';
    return 'cform-progress-seg';
  };

  if (submitted) {
    return (
      <div className="cform-success">
        <div className="cform-success-icon"><CheckIcon /></div>
        <h3>¡Formulario enviado!</h3>
        <p>
          Tu consulta llegó correctamente. Un estratega de RankAgile revisará
          tu proyecto y te contactará en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <div className="cform">
      {/* Header — visible en todos los pasos */}
      <div className="cform-badge">
        <span className="cform-badge-dot" />
        Diagnóstico gratuito
      </div>
      <h2 className="cform-title">Hablemos de tu proyecto</h2>
      <p className="cform-subtitle">
        Completá el formulario y te respondemos en menos de 24h con un análisis
        inicial personalizado.
      </p>

      <div className="cform-trust">
        <span className="cform-trust-item">🛡 Sin spam</span>
        <span className="cform-trust-item">⏱ &lt; 24h</span>
        <span className="cform-trust-item">🔒 Datos seguros</span>
      </div>

      {/* Progress bar */}
      <div className="cform-progress" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
        <div className={segClass(1)} />
        <div className={segClass(2)} />
        <div className={segClass(3)} />
      </div>

      {/* Step content — key fuerza remount para la animación */}
      <div key={step} className="cform-step">

        {/* ── PASO 1 — Identificación ── */}
        {step === 1 && (
          <>
            <p className="cform-step-label">Paso 1 — Identificación</p>

            <div className="cform-row-2">
              <div className="cform-field">
                <label className="field-label" htmlFor="cf-name">Nombre completo</label>
                <input
                  className={`input${errors.name ? ' input-error' : ''}`}
                  id="cf-name" type="text" placeholder="Tu nombre"
                  value={form.name} onChange={set('name')}
                  autoComplete="name"
                />
                {errors.name && <p className="cform-error">{errors.name}</p>}
              </div>
              <div className="cform-field">
                <label className="field-label" htmlFor="cf-email">Email profesional</label>
                <input
                  className={`input${errors.email ? ' input-error' : ''}`}
                  id="cf-email" type="email" placeholder="correo@tuempresa.com"
                  value={form.email} onChange={set('email')}
                  autoComplete="email"
                />
                {errors.email && <p className="cform-error">{errors.email}</p>}
              </div>
            </div>

            <div className="cform-row-2">
              <div className="cform-field">
                <label className="field-label" htmlFor="cf-company">Empresa / Marca</label>
                <input
                  className={`input${errors.company ? ' input-error' : ''}`}
                  id="cf-company" type="text" placeholder="Nombre de tu empresa"
                  value={form.company} onChange={set('company')}
                  autoComplete="organization"
                />
                {errors.company && <p className="cform-error">{errors.company}</p>}
              </div>
              <div className="cform-field">
                <label className="field-label" htmlFor="cf-website">
                  Sitio web <span style={{ color: 'var(--fg-faint)', fontWeight: 400 }}>(opcional)</span>
                </label>
                <input
                  className="input"
                  id="cf-website" type="url" placeholder="https://tudominio.com"
                  value={form.website} onChange={set('website')}
                  autoComplete="url"
                />
              </div>
            </div>

            <div className="cform-field">
              <label className="field-label" htmlFor="cf-role">Rol en la empresa</label>
              <select
                className={`input${errors.role ? ' input-error' : ''}`}
                id="cf-role" value={form.role} onChange={set('role')}
              >
                <option value="">Seleccioná tu rol</option>
                {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              {errors.role && <p className="cform-error">{errors.role}</p>}
            </div>
          </>
        )}

        {/* ── PASO 2 — Proyecto ── */}
        {step === 2 && (
          <>
            <p className="cform-step-label">Paso 2 — Proyecto</p>

            <div className="cform-field">
              <label className="field-label">Servicios de interés</label>
              <div className="cform-chips">
                {SERVICES.map((s) => (
                  <button
                    key={s} type="button"
                    className={`cform-chip${form.services.includes(s) ? ' selected' : ''}`}
                    onClick={() => toggleService(s)}
                  >{s}</button>
                ))}
              </div>
              {errors.services && <p className="cform-error">{errors.services}</p>}
            </div>

            <div className="cform-field">
              <label className="field-label">Objetivo principal</label>
              <div className="cform-chips">
                {GOALS.map((g) => (
                  <button
                    key={g} type="button"
                    className={`cform-chip${form.goal === g ? ' selected' : ''}`}
                    onClick={() => setForm((prev) => ({ ...prev, goal: g }))}
                  >{g}</button>
                ))}
              </div>
              {errors.goal && <p className="cform-error">{errors.goal}</p>}
            </div>

            <div className="cform-field">
              <label className="field-label" htmlFor="cf-message">
                Contexto adicional{' '}
                <span style={{ color: 'var(--fg-faint)', fontWeight: 400 }}>(opcional)</span>
              </label>
              <textarea
                className="input textarea"
                id="cf-message"
                placeholder="Contanos más sobre tu proyecto, situación actual, desafíos..."
                value={form.message}
                onChange={(e) => {
                  if (e.target.value.length <= 400)
                    setForm((prev) => ({ ...prev, message: e.target.value }));
                }}
                rows={4}
              />
              <p className="cform-char-count">{form.message.length}/400</p>
            </div>
          </>
        )}

        {/* ── PASO 3 — Presupuesto y urgencia ── */}
        {step === 3 && (
          <>
            <p className="cform-step-label">Paso 3 — Presupuesto y urgencia</p>

            <div className="cform-field">
              <label className="field-label">Presupuesto mensual</label>
              <div className="cform-budget-grid">
                {BUDGETS.map((b) => (
                  <button
                    key={b} type="button"
                    className={`cform-budget-card${form.budget === b ? ' selected' : ''}`}
                    onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                  >
                    <span className="cform-budget-amount">{b}</span>
                  </button>
                ))}
              </div>
              {errors.budget && <p className="cform-error">{errors.budget}</p>}
            </div>

            <div className="cform-field">
              <label className="field-label">¿Cuándo querés comenzar?</label>
              <div className="cform-chips">
                {URGENCY.map((u) => (
                  <button
                    key={u} type="button"
                    className={`cform-chip${form.urgency === u ? ' selected' : ''}`}
                    onClick={() => setForm((prev) => ({ ...prev, urgency: u }))}
                  >{u}</button>
                ))}
              </div>
              {errors.urgency && <p className="cform-error">{errors.urgency}</p>}
            </div>

            <div className="cform-field">
              <label className="field-label" htmlFor="cf-phone">
                WhatsApp / Teléfono{' '}
                <span style={{ color: 'var(--fg-faint)', fontWeight: 400 }}>(opcional)</span>
              </label>
              <input
                className="input"
                id="cf-phone" type="tel" placeholder="+54 9 11 1234 5678"
                value={form.phone} onChange={set('phone')}
                autoComplete="tel"
              />
            </div>
          </>
        )}

        {/* Navigation */}
        <div className="cform-nav">
          {step > 1 && (
            <button type="button" className="cform-btn-back" onClick={handleBack}>
              <ArrowLeft /> Anterior
            </button>
          )}
          <button
            type="button" className="cform-btn-next"
            onClick={handleNext} disabled={submitting}
          >
            {step === 3
              ? (submitting ? 'Enviando…' : 'Enviar consulta')
              : 'Continuar'}
            {!submitting && <ArrowRight />}
          </button>
        </div>

        {step === 3 && (
          <p className="cform-privacy">
            Al enviar tus datos, aceptás nuestra{' '}
            <a href="/privacidad">Política de Privacidad</a>.
          </p>
        )}

        {submitError && <p className="cform-submit-error">{submitError}</p>}
      </div>
    </div>
  );
}
