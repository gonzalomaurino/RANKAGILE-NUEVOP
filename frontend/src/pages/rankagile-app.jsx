import { useState } from 'react';
import useDocumentMeta from '../hooks/useDocumentMeta.js'; import { Link } from 'react-router-dom'; import { DashPrompts, DashTraffic, DashVisibility } from '../components/rankagile-dashboards.jsx';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';

// --- Icons ------------------------------------------------
const ArrowUpRight = ({ size = 14 }) =>
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>;

const Check = () =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;

// --- Services data ---------------------------------------
const SERVICES = [
  { slug: 'geo', title: 'GEO', desc: 'Posiciona tu marca en motores generativos con estrategia GEO.', href: '/servicios/geo' },
  { slug: 'seo-completo', title: 'SEO Completo', desc: 'Estrategia integral para escalar visibilidad, autoridad y resultados orgánicos.', href: '/seo-completo' },
  { slug: 'auditoria-tecnica', title: 'Auditoria Tecnica', desc: 'Diagnostico tecnico y roadmap priorizado para corregir los cuellos de botella.', href: '/auditoria-tecnica' },
  { slug: 'seo-hibrido', title: 'SEO Hibrido', desc: 'Ejecucion combinada de SEO tecnico, contenido y performance.', href: '/seo-hibrido' },
  { slug: 'seo-consultoria', title: 'SEO Consultoria', desc: 'Equipo senior embebido con tu in-house para estrategia y ejecucion.', href: '/seo-consultoria' },
  { slug: 'seo-analytics', title: 'SEO Analytics', desc: 'Datos claros, dashboards y decisiones basadas en performance real.', href: '/seo-analytics' },
  { slug: 'analisis-seo-gratuito', title: 'Analisis SEO Gratuito', desc: 'Diagnostico inicial para detectar errores y oportunidades.', href: '/analisis-seo-gratuito' },
];

// --- Hero -------------------------------------------------
const Hero = () =>
  <header className="hero" id="top">
    <div className="hero-bg"></div>
    <div className="hero-overlay"></div>
    <div className="hero-inner">
      <span className="eyebrow centered">posicionamiento generativo</span>
      <h1 className="display" style={{ marginTop: 18 }}>
        Agencia SEO internacional experta en <span className="grad">SEO para IA (GEO)</span>.
      </h1>
      <p className="hero-sub">
        Optimizamos tu marca para aparecer como respuesta en ChatGPT, Gemini, Claude y Perplexity — sin perder el tráfico orgánico que ya tienes en Google.
      </p>
      <div className="hero-cta">
        <Link className="btn-pill" to="/contacto">Recibir propuesta <ArrowUpRight /></Link>
      </div>
    </div>
  </header>;

const SeoInternacional = () =>
  <section className="block" id="seo-internacional">
    <div className="section-head">
      <span className="eyebrow">enfoque global</span>
      <h2 className="display">Agencia SEO Internacional: Estrategia SEO sin fronteras</h2>
      <p className="lead" style={{ marginTop: 16 }}>
        Descubrí cómo una <Link to="/blog/agencia-seo-internacional-rankagile">estrategia de SEO internacional</Link> permite posicionar marcas en múltiples países y motores de búsqueda globales — desde la arquitectura técnica multilingüe hasta el contenido adaptado a cada mercado y audiencia.
      </p>
    </div>

    <div className="cards-grid-4">
      <div className="svc-card">
        <div>
          <div className="svc-card-num">01 / internacional</div>
          <h4>Expansión Global</h4>
          <p>Expande tu negocio a nuevos mercados con una estrategia de posicionamiento diseñada para escalar.</p>
        </div>
      </div>
      <div className="svc-card">
        <div>
          <div className="svc-card-num">02 / internacional</div>
          <h4>Audiencias Calificadas</h4>
          <p>En RankAgile ayudamos a empresas a ganar visibilidad en múltiples países, conectando con clientes en todo el mundo.</p>
        </div>
      </div>
      <div className="svc-card">
        <div>
          <div className="svc-card-num">03 / internacional</div>
          <h4>Más que traducciones</h4>
          <p>No se trata solo de traducir contenido, sino de entender cómo buscan los usuarios y adaptar la estrategia a su intención.</p>
        </div>
      </div>
      <div className="svc-card">
        <div>
          <div className="svc-card-num">04 / internacional</div>
          <h4>Enfoque Integral</h4>
          <p>Combinamos análisis de mercado, optimización técnica y contenido localizado para posicionarte desde el primer día.</p>
        </div>
      </div>
    </div>
  </section>;

// --- Ticker -----------------------------------------------
const Ticker = () => {
  const items = ['ChatGPT', 'Gemini 2.5', 'Claude Sonnet', 'Perplexity', 'Copilot', 'Grok', 'Meta AI', 'You.com', 'DuckAssist', 'Arc Search'];
  const loop = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {loop.map((x, i) => <span className="ticker-item" key={i}>Optimizamos para {x}</span>)}
      </div>
    </div>);

};

// --- Section header -------------------------------------
const SectionHead = ({ eyebrow, title, lead, centered = false, full = false }) =>
  <div className={`section-head ${full ? 'full' : ''}`} style={centered ? { textAlign: 'center', marginInline: 'auto' } : {}}>
    <span className={`eyebrow ${centered ? 'centered' : ''}`}>{eyebrow}</span>
    <h2 className="display" style={{ marginTop: 14 }}>{title}</h2>
    {lead && <p className="lead" style={centered ? { marginInline: 'auto' } : {}}>{lead}</p>}
  </div>;


// --- Vignette ------------------------------------------
const Vignette = ({ eyebrow, title, body, bullets, children, reverse = false }) =>
  <article className="vignette" style={reverse ? { gridTemplateColumns: '1fr 1.05fr' } : {}}>
    <div className="vignette-left" style={reverse ? { order: 2 } : {}}>
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      <ul className="vignette-bullets">
        {bullets.map((b, i) => <li key={i}><Check />{b}</li>)}
      </ul>
      <a className="btn-ghost" href="/contacto">Solicitar propuesta <ArrowUpRight size={12} /></a>
    </div>
    <div className="vignette-right" style={reverse ? { order: 1 } : {}}>
      {children}
    </div>
  </article>;


// --- Services grid --------------------------------------
const ServicesGrid = () =>
  <div className="services-grid">
    {SERVICES.map((s, i) =>
      <a href={s.href} className="svc-card" key={s.slug}>
        <div>
          <div className="svc-card-num">0{i + 1} / servicio</div>
          <h4>{s.title}</h4>
          <p>{s.desc}</p>
        </div>
        <span className="svc-card-arrow">VER SERVICIO <ArrowUpRight size={12} /></span>
      </a>
    )}
  </div>;


// --- Stats ------------------------------------------------
const Stats = () =>
  <>
    <div className="stats">
      {[
        { n: '15',  u: '+', l: 'Mercados activos en América, Europa y Asia Pacífico' },
        { n: '3',   u: '+', l: 'Años especializados en SEO técnico y posicionamiento en IA' },
        { n: '4',   u: '',  l: 'Especialistas asignados por proyecto: técnico SEO, contenido, link building y GEO' },
        { n: '100', u: '%', l: 'Proyectos con acceso a métricas y reporting en tiempo real' },
      ].map((s, i) =>
        <div className="stat" key={i}>
          <div className="stat-num">{s.n}<span className="unit">{s.u}</span></div>
          <div className="stat-label">{s.l}</div>
        </div>
      )}
    </div>
    <p style={{ textAlign: 'center', color: 'var(--fg-dim)', fontSize: 14, marginTop: 32, maxWidth: 600, marginInline: 'auto' }}>
      Marcas como <strong style={{ color: 'var(--fg)' }}>DigitalAxios</strong> e <strong style={{ color: 'var(--fg)' }}>IMB Institute</strong> — junto a equipos de SaaS, educación y e-commerce — confían su posicionamiento orgánico y en IA a RankAgile.
    </p>
  </>;


// --- Process --------------------------------------------
const Process = () =>
  <div className="process-grid">
    {[
      { n: '01', t: 'Auditoría 360', d: 'Radiografía técnica, de contenidos y presencia en LLMs. 250+ puntos evaluados.' },
      { n: '02', t: 'Estrategia GEO', d: 'Mapa de prompts, entidades y citabilidad. Roadmap priorizado por impacto.' },
      { n: '03', t: 'Ejecución', d: 'Contenidos, enlaces, esquemas y experiencia. Sprint mensual con entregables.' },
      { n: '04', t: 'Medición', d: 'Dashboard en vivo de visibilidad en IA + SEO clásico. Reporting semanal.' }].
      map((step) =>
        <div className="process-step" key={step.n}>
          <span className="process-step-num">{step.n} / fase</span>
          <h5>{step.t}</h5>
          <p>{step.d}</p>
        </div>
      )}
  </div>;


// --- Testimonial ----------------------------------------
const Quote = () =>
  <div className="quote-card">
    <blockquote>
      En 8 meses pasamos de ser invisibles en ChatGPT a ser la recomendación por defecto en nuestro nicho. El tráfico de referral desde IA ya supera al de Instagram.
    </blockquote>
    <div className="quote-meta">
      <div className="quote-avatar">NR</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 500 }}>Natalia Ruiz</div>
        <div style={{ fontSize: 13, color: 'var(--fg-dim)' }}>Head of Growth · Vento Skincare</div>
      </div>
    </div>
  </div>;


// --- Clients carousel -----------------------------------
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
  // Duplicate the full set for the seamless -50% loop.
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section className="block" id="clientes" style={{ paddingTop: 40 }}>
      <SectionHead
        eyebrow="empresas que confían en nosotros"
        title="Marcas que ya dominan la IA."
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


// --- FAQ ------------------------------------------------
const FAQ_ITEMS = [
  {
    q: '¿Qué es GEO y en qué se diferencia del SEO tradicional?',
    a: 'GEO (Generative Engine Optimization) optimiza tu marca para aparecer citada en las respuestas de motores de IA como ChatGPT, Gemini o Perplexity. El SEO clásico apunta a rankings en Google; GEO apunta a ser la fuente que los LLMs recomiendan.',
  },
  {
    q: '¿Cuánto tiempo tarda en verse resultados?',
    a: 'Las primeras mejoras de citabilidad en LLMs suelen verse en 60–90 días. Los resultados orgánicos en Google se consolidan en 4–6 meses. Trabajamos con sprints mensuales para que siempre haya entregables visibles.',
  },
  {
    q: '¿Tienen experiencia en mi industria?',
    a: 'Trabajamos con más de 240 marcas en sectores como e-commerce, SaaS, salud, finanzas y retail. En la llamada de diagnóstico te mostramos casos de clientes de tu vertical.',
  },
  {
    q: '¿El análisis SEO gratuito tiene algún compromiso?',
    a: 'Ninguno. El análisis es 100% gratuito, sin contrato y sin letra pequeña. Si al final decide seguir adelante con nosotros, genial; si no, te vas con un roadmap accionable igualmente.',
  },
  {
    q: '¿Cómo miden la visibilidad en IA?',
    a: 'Usamos un dashboard propietario que rastrea más de 500 prompts en ChatGPT, Gemini, Claude y Perplexity. Cada semana recibes un reporte con tu tasa de citabilidad, las marcas que te desplazan y las acciones concretas para mejorar.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(prev => prev === i ? null : i);

  return (
    <section className="block" id="faq" style={{ paddingTop: 40 }}>
      <SectionHead
        eyebrow="preguntas frecuentes"
        title="Todo lo que necesitás saber."
        centered />
      <div className="faq-list">
        {FAQ_ITEMS.map((item, i) => (
          <div className="faq-item" key={i} data-open={open === i ? 'true' : 'false'}>
            <button className="faq-trigger" onClick={() => toggle(i)} aria-expanded={open === i}>
              {item.q}
              <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


// --- WhatsApp float button ------------------------------
const WaButton = () =>
  <a
    className="wa-float"
    href="https://wa.me/3513167306"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  </a>;


// --- Contact section ------------------------------------
const ContactSection = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', web: '' });
  const [submitting, setSubmitting] = useState(false);
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
        body: JSON.stringify({ ...form, source: 'home' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
      alert('Gracias, te contactamos en menos de 24h.');
      setForm({ firstName: '', lastName: '', email: '', web: '' });
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="block" id="contacto" style={{ paddingTop: 40 }}>
      <div className="contact-grid">

        {/* Left: copy */}
        <div className="contact-copy">
          <SectionHead
            eyebrow="hablemos"
            title="Hablemos sobre tu proyecto." />
          <p className="lead" style={{ marginBottom: 32 }}>
            Completá el formulario y coordinamos una llamada para entender tus objetivos, tu situación actual y qué estrategia tiene más sentido para tu negocio. Sin plantillas genéricas, sin compromiso.
          </p>
          <ul className="contact-benefits">
            <li>Análisis de tu presencia orgánica y en IA</li>
            <li>Oportunidades reales para tu industria y mercado</li>
            <li>Estrategia personalizada con foco en resultados</li>
            <li>Sin costo, sin contrato</li>
          </ul>
        </div>

        {/* Right: form card */}
        <div className="contact-card">
          <div className="aurora-bg" />
          <div className="contact-card-inner">
            <div className="contact-card-head">
              <h3>Contanos sobre tu proyecto</h3>
              <p>Dejá tus datos y coordinamos una llamada para conocer tu negocio y tus objetivos.</p>
            </div>

            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="contact-row-2">
                <div>
                  <label className="field-label" htmlFor="hs-fn">Nombre</label>
                  <input className="input" id="hs-fn" type="text" placeholder="Tu nombre" value={form.firstName} onChange={onChange('firstName')} required />
                </div>
                <div>
                  <label className="field-label" htmlFor="hs-ln">Apellido</label>
                  <input className="input" id="hs-ln" type="text" placeholder="Tu apellido" value={form.lastName} onChange={onChange('lastName')} required />
                </div>
              </div>

              <div>
                <label className="field-label" htmlFor="hs-em">Email de trabajo</label>
                <input className="input" id="hs-em" type="email" placeholder="correo@gmail.com" value={form.email} onChange={onChange('email')} required />
              </div>

              <div>
                <label className="field-label" htmlFor="hs-web">Sitio web</label>
                <input className="input" id="hs-web" type="text" placeholder="Marca" value={form.web} onChange={onChange('web')} required />
              </div>

              <button type="submit" className="contact-submit" disabled={submitting}>
                {submitting ? 'Enviando…' : 'Enviar'} <ArrowUpRight size={14} />
              </button>
              {errorMsg && <p style={{ color: '#ef4444', fontSize: 13, margin: '4px 0 0' }}>{errorMsg}</p>}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- App --------------------------------------------------
export default function ClaudeHomePage() {
  useDocumentMeta({
    title: 'RankAgile | Agencia SEO Internacional & GEO para IA',
    description:
      'Posicionamos tu marca en Google y en motores de IA (ChatGPT, Gemini, Perplexity) con estrategia SEO internacional y GEO. Pedí tu análisis gratuito.',
  });

  return (
    <>
      <ClaudeNavbar isHome />

      <Hero />
      <Ticker />

      {/* 1. Servicios */}
      <section className="block" id="servicios" style={{ paddingTop: 40 }}>
        <SectionHead
          eyebrow="cómo trabajamos"
          title="Cada área del SEO, trabajada por quien la domina."
          lead="Técnico, contenido, autoridad y GEO son disciplinas distintas que requieren criterios distintos. Distribuimos el trabajo por expertise para que cada decisión esté respaldada por quien realmente entiende esa parte del proyecto." />

        <ServicesGrid />
      </section>

      {/* 2. Clientes */}
      <ClientsCarousel />

      {/* 3. Agencia SEO Internacional */}
      <SeoInternacional />

      {/* 4. Por qué GEO + Metodología */}
      <section className="block" id="metodologia">
        <SectionHead
          eyebrow="por qué geo"
          title="El SEO cambió. Tus clientes ya preguntan a la IA."
          lead={<>El 64% de las búsquedas informativas ya se resuelven dentro de un LLM. Si tu marca no es citada en esas respuestas, simplemente no existes para quien decide. Conocé nuestra <Link to="/servicios/geo">estrategia GEO para IA</Link> y empezá a posicionarte donde tus clientes ya buscan.</>} />

        <div className="vignette-stack">
          <Vignette
            eyebrow="visibilidad generativa"
            title="Aparece como respuesta — no como enlace."
            body="Medimos y optimizamos tu tasa de citabilidad en los principales LLMs. Cada semana, un dashboard en vivo te muestra dónde estás presente, dónde no, y qué marca te está sustituyendo."
            bullets={[
              'Tracking de 500+ prompts relevantes a tu negocio',
              'Monitor cruzado en ChatGPT, Gemini, Claude, Perplexity',
              'Alertas cuando una entidad competidora nos desplaza']
            }>

            <DashVisibility />
          </Vignette>
          <Vignette
            eyebrow="seo orgánico"
            title="Crecimiento compuesto en Google — sin depender de él."
            body="Mientras ganas presencia en IA, reforzamos la base orgánica: arquitectura, intent-mapping y contenidos que tu competencia no puede replicar."
            bullets={[
              'Core Web Vitals en verde en 90 días o menos',
              'Schema específico por intent + entidad',
              'Contenido estructurado para ser citado']
            }
            reverse>

            <DashTraffic />
          </Vignette>
          <Vignette
            eyebrow="prompt tracking"
            title="Sabrás exactamente qué preguntas te están trayendo negocio."
            body="Hacemos reverse-engineering de los prompts que tus clientes usan. Los priorizamos por intención comercial y los conectamos a un plan editorial accionable, no a un PDF de 80 páginas."
            bullets={[
              '248 prompts analizados en la auditoría inicial',
              'Conectamos cada prompt a URL + CTA',
              'Reporting semanal con evolución y próximos pasos']
            }>

            <DashPrompts />
          </Vignette>
        </div>
      </section>

      {/* Stats + Process — banda full-width con fondo alternado */}
      <div className="band-full">
        <section className="block">
          <SectionHead
            eyebrow="experiencia real"
            title="Lo que respalda nuestro trabajo." />

          <Stats />
        </section>

        <section className="block" id="proceso" style={{ paddingTop: 40 }}>
          <SectionHead
            eyebrow="cómo trabajamos"
            title="Cuatro fases. Cero fricción. Foco total en negocio." />

          <Process />
        </section>
      </div>

      {/* Quote */}
      <section className="block" id="casos" style={{ paddingTop: 40 }}>
        <SectionHead
          eyebrow="clientes"
          title="Lo que dicen quienes ya trabajan con RankAgile." />

        <Quote />
      </section>

      {/* 5. FAQ */}
      <FAQ />

      {/* 6. Formulario de contacto */}
      <ContactSection />

      <Footer />

      {/* WhatsApp flotante */}
      <WaButton />
    </>);

}