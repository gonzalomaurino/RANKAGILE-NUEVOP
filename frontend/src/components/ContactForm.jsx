import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/claude-contact-form.css';

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
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';

  const SERVICES = t('contactForm.step2.servicesList', { returnObjects: true });
  const GOALS    = t('contactForm.step2.goalsList',    { returnObjects: true });
  const BUDGETS  = t('contactForm.step3.budgetList',   { returnObjects: true });
  const URGENCY  = t('contactForm.step3.urgencyList',  { returnObjects: true });
  const ROLES    = t('contactForm.step1.roles',        { returnObjects: true });

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
      if (!form.name.trim()) e.name = t('contactForm.errors.required');
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = t('contactForm.errors.email');
      if (!form.company.trim()) e.company = t('contactForm.errors.required');
      if (!form.role) e.role = t('contactForm.errors.selectOption');
    }
    if (step === 2) {
      if (form.services.length === 0) e.services = t('contactForm.errors.selectService');
      if (!form.goal) e.goal = t('contactForm.errors.selectOption');
    }
    if (step === 3) {
      if (!form.budget) e.budget = t('contactForm.errors.selectOption');
      if (!form.urgency) e.urgency = t('contactForm.errors.selectOption');
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
      else setSubmitError(t('contactForm.error'));
    } catch {
      setSubmitError(t('contactForm.error'));
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
        <h3>{t('contactForm.success.title')}</h3>
        <p>{t('contactForm.success.body')}</p>
      </div>
    );
  }

  return (
    <div className="cform">
      <div className="cform-badge">
        <span className="cform-badge-dot" />
        {t('contactForm.badge')}
      </div>
      <h2 className="cform-title">{t('contactForm.title')}</h2>
      <p className="cform-subtitle">{t('contactForm.subtitle')}</p>

      <div className="cform-trust">
        <span className="cform-trust-item">{t('contactForm.trust.spam')}</span>
        <span className="cform-trust-item">{t('contactForm.trust.time')}</span>
        <span className="cform-trust-item">{t('contactForm.trust.secure')}</span>
      </div>

      <div className="cform-progress" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
        <div className={segClass(1)} />
        <div className={segClass(2)} />
        <div className={segClass(3)} />
      </div>

      <div key={step} className="cform-step">

        {step === 1 && (
          <>
            <p className="cform-step-label">{t('contactForm.step1.label')}</p>

            <div className="cform-row-2">
              <div className="cform-field">
                <label className="field-label" htmlFor="cf-name">{t('contactForm.step1.name')}</label>
                <input
                  className={`input${errors.name ? ' input-error' : ''}`}
                  id="cf-name" type="text" placeholder={t('contactForm.step1.namePlaceholder')}
                  value={form.name} onChange={set('name')} autoComplete="name"
                />
                {errors.name && <p className="cform-error">{errors.name}</p>}
              </div>
              <div className="cform-field">
                <label className="field-label" htmlFor="cf-email">{t('contactForm.step1.email')}</label>
                <input
                  className={`input${errors.email ? ' input-error' : ''}`}
                  id="cf-email" type="email" placeholder={t('contactForm.step1.emailPlaceholder')}
                  value={form.email} onChange={set('email')} autoComplete="email"
                />
                {errors.email && <p className="cform-error">{errors.email}</p>}
              </div>
            </div>

            <div className="cform-row-2">
              <div className="cform-field">
                <label className="field-label" htmlFor="cf-company">{t('contactForm.step1.company')}</label>
                <input
                  className={`input${errors.company ? ' input-error' : ''}`}
                  id="cf-company" type="text" placeholder={t('contactForm.step1.companyPlaceholder')}
                  value={form.company} onChange={set('company')} autoComplete="organization"
                />
                {errors.company && <p className="cform-error">{errors.company}</p>}
              </div>
              <div className="cform-field">
                <label className="field-label" htmlFor="cf-website">
                  {t('contactForm.step1.website')}{' '}
                  <span style={{ color: 'var(--fg-faint)', fontWeight: 400 }}>{t('contactForm.step1.optional')}</span>
                </label>
                <input
                  className="input"
                  id="cf-website" type="url" placeholder={t('contactForm.step1.websitePlaceholder')}
                  value={form.website} onChange={set('website')} autoComplete="url"
                />
              </div>
            </div>

            <div className="cform-field">
              <label className="field-label" htmlFor="cf-role">{t('contactForm.step1.role')}</label>
              <select
                className={`input${errors.role ? ' input-error' : ''}`}
                id="cf-role" value={form.role} onChange={set('role')}
              >
                <option value="">{t('contactForm.step1.rolePlaceholder')}</option>
                {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              {errors.role && <p className="cform-error">{errors.role}</p>}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="cform-step-label">{t('contactForm.step2.label')}</p>

            <div className="cform-field">
              <label className="field-label">{t('contactForm.step2.services')}</label>
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
              <label className="field-label">{t('contactForm.step2.goal')}</label>
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
                {t('contactForm.step2.message')}{' '}
                <span style={{ color: 'var(--fg-faint)', fontWeight: 400 }}>{t('contactForm.step1.optional')}</span>
              </label>
              <textarea
                className="input textarea"
                id="cf-message"
                placeholder={t('contactForm.step2.messagePlaceholder')}
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

        {step === 3 && (
          <>
            <p className="cform-step-label">{t('contactForm.step3.label')}</p>

            <div className="cform-field">
              <label className="field-label">{t('contactForm.step3.budget')}</label>
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
              <label className="field-label">{t('contactForm.step3.urgency')}</label>
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
                {t('contactForm.step3.phone')}{' '}
                <span style={{ color: 'var(--fg-faint)', fontWeight: 400 }}>{t('contactForm.step1.optional')}</span>
              </label>
              <input
                className="input"
                id="cf-phone" type="tel" placeholder="+54 9 11 1234 5678"
                value={form.phone} onChange={set('phone')} autoComplete="tel"
              />
            </div>
          </>
        )}

        <div className="cform-nav">
          {step > 1 && (
            <button type="button" className="cform-btn-back" onClick={handleBack}>
              <ArrowLeft /> {t('contactForm.nav.back')}
            </button>
          )}
          <button
            type="button" className="cform-btn-next"
            onClick={handleNext} disabled={submitting}
          >
            {step === 3
              ? (submitting ? t('contactForm.nav.submitting') : t('contactForm.nav.submit'))
              : t('contactForm.nav.next')}
            {!submitting && <ArrowRight />}
          </button>
        </div>

        {step === 3 && (
          <p className="cform-privacy">
            {t('contactForm.privacy')}{' '}
            <a href={`${prefix}/privacidad`}>{t('contactForm.privacyLink')}</a>.
          </p>
        )}

        {submitError && <p className="cform-submit-error">{submitError}</p>}
      </div>
    </div>
  );
}
