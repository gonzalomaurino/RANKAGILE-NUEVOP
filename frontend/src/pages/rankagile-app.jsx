import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import { Link } from 'react-router-dom';
import { DashPrompts, DashTraffic, DashVisibility } from '../components/rankagile-dashboards.jsx';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';

const ArrowUpRight = ({ size = 14 }) =>
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>;

const Check = () =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;

const Hero = () => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  return (
    <header className="hero" id="top">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <span className="eyebrow centered">{t('home.hero.eyebrow')}</span>
        <h1 className="display" style={{ marginTop: 18 }}>
          {(() => {
            const m = t('home.hero.h1').match(/^(.*)<grad>(.*)<\/grad>(.*)$/s);
            if (!m) return t('home.hero.h1');
            return <>{m[1]}<span className="grad">{m[2]}</span>{m[3]}</>;
          })()}
        </h1>
        <p className="hero-sub">{t('home.hero.sub')}</p>
        <div className="hero-cta">
          <Link className="btn-pill" to={`${prefix}/contacto`}>{t('home.hero.cta')} <ArrowUpRight /></Link>
        </div>
      </div>
    </header>
  );
};

const SeoInternacional = () => {
  const { t } = useTranslation();
  const cards = t('home.international.cards', { returnObjects: true });
  return (
    <section className="block" id="seo-internacional">
      <div className="section-head">
        <span className="eyebrow">{t('home.international.eyebrow')}</span>
        <h2 className="display">{t('home.international.title')}</h2>
        <p className="lead" style={{ marginTop: 16 }}>{t('home.international.lead')}</p>
      </div>
      <div className="cards-grid-4">
        {cards.map((card, i) => (
          <div className="svc-card" key={i}>
            <div>
              <div className="svc-card-num">{card.num}</div>
              <h4>{card.h4}</h4>
              <p>{card.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Ticker = () => {
  const { t } = useTranslation();
  const items = ['ChatGPT', 'Gemini', 'Grok', 'Perplexity', 'Google'];
  const loop = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {loop.map((x, i) => <span className="ticker-item" key={i}>{t('home.ticker')} {x}</span>)}
      </div>
    </div>
  );
};

const SectionHead = ({ eyebrow, title, lead, centered = false, full = false }) =>
  <div className={`section-head ${full ? 'full' : ''}`} style={centered ? { textAlign: 'center', marginInline: 'auto' } : {}}>
    <span className={`eyebrow ${centered ? 'centered' : ''}`}>{eyebrow}</span>
    <h2 className="display" style={{ marginTop: 14 }}>{title}</h2>
    {lead && <p className="lead" style={centered ? { marginInline: 'auto' } : {}}>{lead}</p>}
  </div>;

const Vignette = ({ eyebrow, title, body, bullets, children, reverse = false }) => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  return (
    <article className="vignette" style={reverse ? { gridTemplateColumns: '1fr 1.05fr' } : {}}>
      <div className="vignette-left" style={reverse ? { order: 2 } : {}}>
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{body}</p>
        <ul className="vignette-bullets">
          {bullets.map((b, i) => <li key={i}><Check />{b}</li>)}
        </ul>
        <a className="btn-ghost" href={`${prefix}/contacto`}>{t('home.whyGeo.proposalLink')} <ArrowUpRight size={12} /></a>
      </div>
      <div className="vignette-right" style={reverse ? { order: 1 } : {}}>
        {children}
      </div>
    </article>
  );
};

const ServicesGrid = () => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const label = t('home.services.ctaLabel');
  const services = [
    { key: 'geo',               href: `${prefix}/servicios/geo` },
    { key: 'seoCompleto',       href: `${prefix}/seo-completo` },
    { key: 'auditoriaTecnica',  href: `${prefix}/auditoria-tecnica` },
    { key: 'seoHibrido',        href: `${prefix}/seo-hibrido` },
    { key: 'seoConsultoria',    href: `${prefix}/seo-consultoria` },
    { key: 'seoAnalytics',      href: `${prefix}/seo-analytics` },
    { key: 'analisisSeoGratuito', href: `${prefix}/analisis-seo-gratuito` },
  ];
  return (
    <div className="services-grid">
      {services.map((s, i) =>
        <a href={s.href} className="svc-card" key={s.key}>
          <div>
            <div className="svc-card-num">0{i + 1} {t('home.services.cardLabel')}</div>
            <h4>{t(`home.serviceItems.${s.key}.title`)}</h4>
            <p>{t(`home.serviceItems.${s.key}.desc`)}</p>
          </div>
          <span className="svc-card-arrow">{label} <ArrowUpRight size={12} /></span>
        </a>
      )}
    </div>
  );
};

const Stats = () => {
  const { t } = useTranslation();
  const items = t('home.stats.items', { returnObjects: true });
  return (
    <>
      <div className="stats">
        {items.map((s, i) =>
          <div className="stat" key={i}>
            <div className="stat-num">{s.n}<span className="unit">{s.u}</span></div>
            <div className="stat-label">{s.l}</div>
          </div>
        )}
      </div>
      <p className="stats-footnote" dangerouslySetInnerHTML={{ __html: t('home.stats.footnote') }} />
    </>
  );
};

const Process = () => {
  const { t } = useTranslation();
  const steps = t('home.process.steps', { returnObjects: true });
  const phaseLabel = t('home.process.phaseLabel');
  return (
    <div className="process-grid">
      {steps.map((step) =>
        <div className="process-step" key={step.n}>
          <span className="process-step-num">{step.n} {phaseLabel}</span>
          <h5>{step.t}</h5>
          <p>{step.d}</p>
        </div>
      )}
    </div>
  );
};

const Quote = () => {
  const { t } = useTranslation();
  return (
    <div className="quote-card">
      <blockquote>{t('home.testimonial.quote')}</blockquote>
      <div className="quote-meta">
        <div className="quote-avatar">NR</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>{t('home.testimonial.author')}</div>
          <div style={{ fontSize: 13, color: 'var(--fg-dim)' }}>{t('home.testimonial.role')}</div>
        </div>
      </div>
    </div>
  );
};

const LOGOS = [
  { src: '/assets/logo1.png', light: '/assets/logo1-light.png', alt: 'VL' },
  { src: '/assets/logo2.png', light: '/assets/logo2-light.png', alt: 'Cliente' },
  { src: '/assets/logo3.png', light: '/assets/logo3-light.png', alt: 'Ocean Dream' },
  { src: '/assets/logo4.png', light: '/assets/logo4-light.png', alt: 'Cliente' },
  { src: '/assets/logo5.png', light: '/assets/logo5-light.png', alt: 'Interreal Capital' },
  { src: '/assets/logo6.png', light: '/assets/logo6-light.png', alt: 'Cliente' },
  { src: '/assets/logo7-light.png', light: '/assets/logo7-light.png', alt: 'HabiSite' },
];

const ClientsCarousel = () => {
  const { t } = useTranslation();
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section className="block" id="clientes" style={{ paddingTop: 40 }}>
      <SectionHead
        eyebrow={t('home.clients.eyebrow')}
        title={t('home.clients.title')}
        centered />
      <div className="clients-carousel">
        <div className="clients-track">
          {loop.map((logo, i) => (
            <div className="clients-logo-item" key={i}>
              <img className="logo-dark" src={logo.src} alt={logo.alt} loading="lazy" />
              <img className="logo-light" src={logo.light} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(prev => prev === i ? null : i);
  const items = t('home.faq.items', { returnObjects: true });

  return (
    <section className="block" id="faq" style={{ paddingTop: 40 }}>
      <SectionHead
        eyebrow={t('home.faq.eyebrow')}
        title={t('home.faq.title')}
        centered />
      <div className="faq-list">
        {items.map((item, i) => (
          <div className="faq-item" key={i} data-open={open === i ? 'true' : 'false'}>
            <button className="faq-trigger" onClick={() => toggle(i)} aria-expanded={open === i}>
              {item.q}
              <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="faq-answer"><p>{item.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
};

const WaButton = () =>
  <a className="wa-float" href="https://wa.me/3513167306" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  </a>;

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const [form, setForm] = useState({ name: '', email: '', web: '' });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const onChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: form.name, email: form.email, web: form.web, source: 'home' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
      setSent(true);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = t('home.contact.benefits', { returnObjects: true });
  const trust = t('home.contact.form.trust', { returnObjects: true });

  return (
    <section className="block" id="contacto" style={{ paddingTop: 40 }}>
      <div className="contact-grid">
        <div className="contact-copy">
          <SectionHead eyebrow={t('home.contact.eyebrow')} title={t('home.contact.title')} />
          <p className="lead" style={{ marginBottom: 32 }}>{t('home.contact.lead')}</p>
          <ul className="contact-benefits">
            {benefits.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>

        <div className="contact-card">
          <div className="aurora-bg" />
          <div className="contact-card-inner">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4>{t('home.contact.success.title')}</h4>
                <p>{t('home.contact.success.body')}</p>
              </div>
            ) : (
              <>
                <div className="contact-card-head">
                  <h3>{t('home.contact.form.title')}</h3>
                  <p>{t('home.contact.form.subtitle')}</p>
                </div>
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div>
                    <label className="field-label" htmlFor="cf-name">{t('home.contact.form.name.label')}</label>
                    <input className="input" id="cf-name" type="text" placeholder={t('home.contact.form.name.placeholder')} value={form.name} onChange={onChange('name')} required />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cf-email">{t('home.contact.form.email.label')}</label>
                    <input className="input" id="cf-email" type="email" placeholder={t('home.contact.form.email.placeholder')} value={form.email} onChange={onChange('email')} required />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cf-web">{t('home.contact.form.web.label')}</label>
                    <input className="input" id="cf-web" type="text" placeholder={t('home.contact.form.web.placeholder')} value={form.web} onChange={onChange('web')} required />
                  </div>
                  <button type="submit" className="contact-submit" disabled={submitting}>
                    {submitting ? t('home.contact.form.submitting') : t('home.contact.form.submit')} <ArrowUpRight size={14} />
                  </button>
                  <p className="contact-trust-row">
                    {trust.map((item, i) => (
                      <span key={i}>{item}{i < trust.length - 1 ? <>&nbsp;·&nbsp;</> : null}</span>
                    ))}
                  </p>
                  <p className="contact-privacy">
                    {t('home.contact.form.privacy')}{' '}
                    <a href={`${prefix}/privacidad`}>{t('home.contact.form.privacyLink')}</a>.
                  </p>
                  {errorMsg && <p className="contact-error">{errorMsg}</p>}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ClaudeHomePage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';

  useDocumentMeta({
    title: t('home.meta.title'),
    description: t('home.meta.description'),
  });

  const vignettes = t('home.whyGeo.vignettes', { returnObjects: true });

  return (
    <>
      <Ticker />
      <ClaudeNavbar isHome />

      <Hero />

      <section className="block" id="servicios" style={{ paddingTop: 40 }}>
        <SectionHead
          eyebrow={t('home.services.eyebrow')}
          title={t('home.services.title')}
          lead={t('home.services.lead')} />
        <ServicesGrid />
      </section>

      <ClientsCarousel />

      <SeoInternacional />

      <section className="block" id="metodologia">
        <SectionHead
          eyebrow={t('home.whyGeo.eyebrow')}
          title={t('home.whyGeo.title')}
          lead={
            <>
              {t('home.whyGeo.lead')}{' '}
              <Link to={`${prefix}/servicios/geo`}>{t('home.whyGeo.geoLink')}</Link>.
            </>
          } />

        <div className="vignette-stack">
          {vignettes.map((v, i) => (
            <Vignette
              key={i}
              eyebrow={v.eyebrow}
              title={v.title}
              body={v.body}
              bullets={v.bullets}
              reverse={i % 2 === 1}>
              {i === 0 ? <DashVisibility /> : i === 1 ? <DashTraffic /> : <DashPrompts />}
            </Vignette>
          ))}
        </div>
      </section>

      <div className="band-full">
        <section className="block">
          <SectionHead
            eyebrow={t('home.stats.eyebrow')}
            title={t('home.stats.title')} />
          <Stats />
        </section>
      </div>

      <div className="band-full band-alt">
        <section className="block" id="proceso">
          <SectionHead
            eyebrow={t('home.process.eyebrow')}
            title={t('home.process.title')} />
          <Process />
        </section>
      </div>

      <section className="block" id="casos" style={{ paddingTop: 40 }}>
        <SectionHead
          eyebrow={t('home.testimonial.eyebrow')}
          title={t('home.testimonial.title')} />
        <Quote />
      </section>

      <FAQ />

      <ContactSection />

      <Footer />

      <WaButton />
    </>
  );
}
