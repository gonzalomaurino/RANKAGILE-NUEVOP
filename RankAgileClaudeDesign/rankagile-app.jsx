const { useState, useEffect, useRef } = React;

// --- Icons ------------------------------------------------
const ArrowUpRight = ({ size = 14 }) =>
<svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>;

const Check = () =>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;

const ChevDown = () =>
<svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;

const Sun = () =>
<svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>;

const Moon = () =>
<svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;


// --- Services data ---------------------------------------
const SERVICES = [
{ slug: 'geo', title: 'SEO para IA (GEO)', desc: 'Aparece en ChatGPT, Gemini, Claude y Perplexity cuando tus clientes preguntan.' },
{ slug: 'tecnico', title: 'SEO Técnico', desc: 'Core Web Vitals, schema, indexación y arquitectura para rendimiento extremo.' },
{ slug: 'contenido', title: 'SEO de Contenidos', desc: 'Estrategia editorial basada en intención real y respuestas optimizadas para LLMs.' },
{ slug: 'local', title: 'SEO Local', desc: 'Domina búsquedas geo-localizadas, Maps y menciones en respuestas generativas.' },
{ slug: 'ecommerce', title: 'SEO eCommerce', desc: 'Ficha de producto, feed optimizado y canibalización controlada.' },
{ slug: 'linkbuilding', title: 'Linkbuilding', desc: 'Enlaces editoriales relevantes, con métricas y reporting transparente.' },
{ slug: 'auditoria', title: 'Auditoría SEO', desc: 'Diagnóstico de 250+ puntos con roadmap priorizado por impacto.' },
{ slug: 'consultoria', title: 'Consultoría SEO', desc: 'Equipo senior embebido con tu in-house. Estrategia y ejecución.' },
{ slug: 'internacional', title: 'SEO Internacional', desc: 'Hreflang, mercados y arquitecturas multi-región sin fricción.' }];


// --- Navbar ----------------------------------------------
const Navbar = ({ theme, onToggleTheme }) => {
  const [megaOpen, setMegaOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMegaOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-inner">
        <a className="nav-logo" href="#top">
          <img src="assets/rankagile-logo.png" alt="RankAgile" />
        </a>

        {/* Desktop */}
        <div className="nav-links">
          <a className="nav-link" href="#metodologia">Metodología</a>
          <button
            className="nav-link"
            aria-expanded={megaOpen}
            onClick={(e) => {e.stopPropagation();setMegaOpen((v) => !v);}}>
            
            Servicios <ChevDown />
          </button>
          <a className="nav-link" href="#casos">Casos</a>
          <a className="nav-link" href="#recursos">Recursos</a>
          <a className="nav-link" href="#agencia">Agencia</a>
          <a className="nav-link" href="RankAgile - Contacto.html">Contacto</a>
        </div>

        {/* Mobile horizontal-scroll */}
        <div className="nav-scroll">
          <div className="nav-scroll-inner">
            <button className="nav-scroll-item active">Inicio</button>
            {SERVICES.map((s) =>
            <button key={s.slug} className="nav-scroll-item">{s.title}</button>
            )}
            <button className="nav-scroll-item">Casos</button>
            <button className="nav-scroll-item">Agencia</button>
            <button className="nav-scroll-item">Contacto</button>
          </div>
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Cambiar tema">
            <Sun /><Moon />
          </button>
          <a className="btn-pill" href="RankAgile - Analisis SEO.html">
            Análisis SEO Gratuito <ArrowUpRight />
          </a>
        </div>
      </div>

      {/* Mega panel */}
      <div className="mega" data-open={megaOpen}>
        <div className="mega-inner">
          <div className="mega-aside">
            <div className="mega-aside-title">Servicios</div>
            <p className="mega-aside-text">Nueve servicios especializados, un enfoque: ganar visibilidad donde tus clientes ya están buscando — en motores tradicionales y en IA generativa.</p>
            <a className="btn-ghost" href="#servicios">Ver todos <ArrowUpRight size={12} /></a>
          </div>
          <div className="mega-grid">
            {SERVICES.map((s) =>
            <button key={s.slug} className="mega-item" onClick={() => setMegaOpen(false)}>
                <span className="mega-item-title"><span className="dot"></span>{s.title}</span>
                <span className="mega-item-desc">{s.desc}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>);

};

// --- Hero -------------------------------------------------
const Hero = () =>
<header className="hero" id="top" style={{ height: '610px' }}>
    <div className="aurora"></div>
    <div className="hero-grid"></div>
    <div className="hero-inner">
      <span className="eyebrow centered">posicionamiento generativo</span>
      <h1 className="display" style={{ marginTop: 18, fontFamily: "Inter" }}>
        Agencia SEO internacional experta en <span className="grad">SEO para IA (GEO)</span> y motores generativos.
      </h1>
      <p className="hero-sub">
        Optimizamos tu marca para aparecer como respuesta en ChatGPT, Gemini, Claude y Perplexity — sin perder el tráfico orgánico que ya tienes en Google.
      </p>
      <div className="hero-cta">
        <a className="btn-pill" href="RankAgile - Analisis SEO.html">Análisis SEO Gratuito <ArrowUpRight /></a>
        <a className="btn-ghost" href="#metodologia">Ver metodología <ArrowUpRight size={12} /></a>
      </div>
      <div className="hero-meta">
        <span><span className="sq"></span></span>
        <span><span className="sq"></span></span>
        <span><span className="sq"></span></span>
      </div>
    </div>
  </header>;


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
      <a className="btn-ghost" href="RankAgile - Contacto.html">Solicitar propuesta <ArrowUpRight size={12} /></a>
    </div>
    <div className="vignette-right" style={reverse ? { order: 1 } : {}}>
      {children}
    </div>
  </article>;


// --- Services grid --------------------------------------
const ServicesGrid = () =>
<div className="services-grid">
    {SERVICES.map((s, i) =>
  <a href="#" className="svc-card" key={s.slug}>
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
<div className="stats">
    {[
  { n: '240', u: '+', l: 'Marcas con visibilidad en LLMs' },
  { n: '148', u: '%', l: 'Crecimiento orgánico medio a 12 meses' },
  { n: '4.9', u: '/5', l: 'Satisfacción en 72 reviews verificadas' },
  { n: '12', u: '', l: 'Especialistas senior full-time' }].
  map((s, i) =>
  <div className="stat" key={i}>
        <div className="stat-num">{s.n}<span className="unit">{s.u}</span></div>
        <div className="stat-label">{s.l}</div>
      </div>
  )}
  </div>;


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


// --- Footer ---------------------------------------------
const Footer = () =>
<footer className="foot" id="contacto">
    <div className="foot-inner">
      <div className="foot-brand">
        <img src="assets/rankagile-logo.png" alt="RankAgile" style={{ height: 28, filter: 'var(--logo-filter)' }} />
        <p>Agencia SEO internacional especializada en posicionamiento para IA generativa. Madrid · Ciudad de México · Lisboa.</p>
      </div>
      <div>
        <h6>Servicios</h6>
        <ul>
          {SERVICES.slice(0, 5).map((s) => <li key={s.slug}><a href="#">{s.title}</a></li>)}
        </ul>
      </div>
      <div>
        <h6>Agencia</h6>
        <ul>
          <li><a href="#">Metodología</a></li>
          <li><a href="#">Casos de éxito</a></li>
          <li><a href="#">Equipo</a></li>
          <li><a href="#">Carreras</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <h6>Contacto</h6>
        <ul>
          <li><a href="mailto:hola@rankagile.com">hola@rankagile.com</a></li>
          <li><a href="#">+34 910 000 000</a></li>
          <li><a href="#">Calle Serrano 41, Madrid</a></li>
        </ul>
      </div>
    </div>
    <div className="foot-base">
      <span>© 2026 RANKAGILE · TODOS LOS DERECHOS RESERVADOS</span>
      <span>GEO · SEO · LLMO — V2026.04</span>
    </div>
  </footer>;


// --- App --------------------------------------------------
const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('ra-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ra-theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />

      <Hero />
      <Ticker />

      {/* SECTION: Por qué GEO */}
      <section className="block" id="metodologia">
        <SectionHead
          eyebrow="por qué geo"
          title="El SEO cambió. Tus clientes ya preguntan a la IA."
          lead="El 64% de las búsquedas informativas ya se resuelven dentro de un LLM. Si tu marca no es citada en esas respuestas, simplemente no existes para quien decide." />
        
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

      {/* SECTION: Servicios */}
      <section className="block" id="servicios" style={{ paddingTop: 40 }}>
        <SectionHead
          eyebrow="nueve verticales"
          title="Un equipo senior por cada pieza de tu SEO."
          lead="Nada de generalistas. Cada servicio lo lidera un especialista con 7+ años en su área." />
        
        <ServicesGrid />
      </section>

      {/* SECTION: Stats */}
      <section className="block" style={{ paddingTop: 0 }}>
        <SectionHead
          eyebrow="resultados medibles"
          title="Números que explican la confianza." />
        
        <Stats />
      </section>

      {/* SECTION: Process */}
      <section className="block" id="proceso" style={{ paddingTop: 40 }}>
        <SectionHead
          eyebrow="cómo trabajamos"
          title="Cuatro fases. Cero fricción. Foco total en negocio." />
        
        <Process />
      </section>

      {/* SECTION: Quote */}
      <section className="block" id="casos" style={{ paddingTop: 40 }}>
        <SectionHead
          eyebrow="clientes"
          title="Lo que dicen quienes ya trabajan con RankAgile." />
        
        <Quote />
      </section>

      {/* CTA Band */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="cta-band">
          <div className="aurora"></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="eyebrow centered">empieza hoy</span>
            <h2 className="display" style={{ marginTop: 18, maxWidth: 720, marginInline: 'auto' }}>
              Te enviamos un análisis GEO de tu marca en 72h.
            </h2>
            <p style={{ color: 'var(--fg-dim)', fontSize: 17, maxWidth: 560, margin: '22px auto 0' }}>
              Sin compromiso, sin letra pequeña. Si lo que ves te convence, hablamos.
            </p>
            <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn-pill" href="RankAgile - Analisis SEO.html">Análisis SEO Gratuito <ArrowUpRight /></a>
              <a className="btn-ghost" href="RankAgile - Contacto.html">Ver casos de éxito <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>);

};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);