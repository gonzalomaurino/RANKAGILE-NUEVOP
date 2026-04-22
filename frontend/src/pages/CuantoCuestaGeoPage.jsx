import useDocumentMeta from '../hooks/useDocumentMeta.js';

const inclusions = [
  { title: 'Auditoría de visibilidad inicial', body: 'Análisis de citaciones actuales en ChatGPT, Gemini y Perplexity para tus keywords objetivo.' },
  { title: 'Análisis de competidores en IA', body: 'Benchmark de Share of Voice vs. tus principales rivales.' },
  { title: 'Estrategia de contenido GEO', body: 'Plan de topics, formatos y densidad informacional orientado a LLMs.' },
  { title: 'Producción de contenido optimizado', body: 'Artículos, páginas pilar y Q&A diseñados para ser citados por IA.' },
  { title: 'Authority building', body: 'Publicaciones en medios de industria, directorios y fuentes de referencia.' },
  { title: 'Datos estructurados avanzados', body: 'Schema.org, Knowledge Graph y markup técnico.' },
  { title: 'Reporting mensual de citaciones', body: 'Tracking de menciones en motores de IA con variación mes a mes.' },
];

const tiers = [
  {
    name: 'Nivel Entrada',
    range: '800 – 1.500 USD/mes',
    body: 'Auditoría básica + estrategia de contenido + implementación de Schema. Ideal para empresas con presupuesto limitado que quieren empezar. Resultados en 3-6 meses.',
  },
  {
    name: 'Nivel Profesional',
    range: '1.500 – 3.500 USD/mes',
    body: 'Estrategia completa + producción de contenido mensual + authority building en medios especializados + reporting avanzado. El nivel óptimo para empresas B2B en mercados medianos.',
    featured: true,
  },
  {
    name: 'Nivel Premium',
    range: '3.500 – 8.000+ USD/mes',
    body: 'Estrategia GEO + SEO integrada, equipo dedicado, producción intensiva, campañas en múltiples idiomas y mercados, reportes ejecutivos semanales.',
  },
];

const styles = `
  .ccg-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 96px 24px 120px;
  }
  .ccg-post-container {
    max-width: 940px;
    margin: 0 auto;
  }

  .ccg-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .ccg-post-eyebrow.is-center {
    display: block;
    text-align: center;
  }

  .ccg-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 28px;
  }

  .ccg-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .ccg-post-h2.is-center { text-align: center; }

  .ccg-post-accent { color: #38FEDA; }

  .ccg-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 760px;
    margin: 0 auto 72px;
    text-align: center;
  }

  .ccg-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .ccg-post-p:last-child { margin-bottom: 0; }
  .ccg-post-p strong { color: #FFFFFF; font-weight: 600; }
  .ccg-post-p a {
    color: #38FEDA;
    text-decoration: none;
    font-weight: 500;
    transition: color 150ms ease;
  }
  .ccg-post-p a:hover { color: #5affe3; }

  .ccg-post-section { margin: 0 0 80px; }

  /* Inclusions list (7 items) */
  .ccg-post-inclusions {
    list-style: none;
    padding: 0;
    margin: 32px 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .ccg-post-inclusion {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 22px 24px;
    display: grid;
    grid-template-columns: 22px 1fr;
    gap: 14px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .ccg-post-inclusion:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .ccg-post-inclusion-check {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    background: rgba(56, 254, 218, 0.14);
    border: 1px solid rgba(56, 254, 218, 0.4);
    color: #38FEDA;
    font-size: 13px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    flex: 0 0 auto;
    margin-top: 2px;
  }
  .ccg-post-inclusion-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15.5px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 6px;
  }
  .ccg-post-inclusion-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14.5px;
    font-weight: 300;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* Pricing tiers */
  .ccg-post-tiers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 36px;
  }
  .ccg-post-tier {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 28px 30px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: border-color 200ms ease, background 200ms ease, transform 200ms ease;
  }
  .ccg-post-tier:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    transform: translateY(-2px);
  }
  .ccg-post-tier.is-featured {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    position: relative;
  }
  .ccg-post-tier-badge {
    position: absolute;
    top: -10px;
    left: 28px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #0A0A0A;
    background: #38FEDA;
    padding: 5px 12px;
    border-radius: 999px;
  }
  .ccg-post-tier-name {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0;
  }
  .ccg-post-tier-range {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0;
  }
  .ccg-post-tier-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* CTA final card */
  .ccg-post-cta-card {
    margin-top: 40px;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    text-align: center;
    transition: border-color 200ms ease;
  }
  .ccg-post-cta-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }
  .ccg-post-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.18);
    border: 0;
    margin: 0 0 48px;
  }
  .ccg-post-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #0A0A0A;
    background: #38FEDA;
    border: 0;
    border-radius: 999px;
    padding: 14px 28px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 150ms ease, background 150ms ease;
    margin-top: 12px;
  }
  .ccg-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 960px) {
    .ccg-post-inclusions { grid-template-columns: 1fr; }
    .ccg-post-tiers { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .ccg-post-page { padding: 64px 16px 88px; }
    .ccg-post-h2 { font-size: 30px; }
    .ccg-post-section { margin-bottom: 56px; }
    .ccg-post-cta-card { padding: 40px 24px; }
  }
`;

export default function CuantoCuestaGeoPage() {
  useDocumentMeta({
    title: '¿Cuánto Cuesta el GEO y Qué Incluye? Guía Transparente de Precios 2026 | RankAgile',
    description:
      'Sin rodeos: qué incluye un servicio GEO real, qué exigir por tu inversión y los rangos de precio justos en el mercado 2026. Guía transparente de RankAgile.',
  });

  return (
    <main className="ccg-post-page">
      <style>{styles}</style>
      <article className="ccg-post-container">
        {/* Hero */}
        <header>
          <p className="ccg-post-eyebrow is-center">Precios y servicios · GEO</p>
          <h1 className="ccg-post-h1">
            ¿Cuánto Cuesta el GEO y Qué Incluye?{' '}
            <span className="ccg-post-accent">
              Guía Transparente de Precios 2026
            </span>
          </h1>
          <p className="ccg-post-lead">
            Sin rodeos. Te explicamos qué incluye un servicio GEO real, qué
            debés exigir por tu inversión y cuál es el rango de precios justo
            en el mercado actual.
          </p>
        </header>

        {/* Por qué el precio varía */}
        <section className="ccg-post-section">
          <h2 className="ccg-post-h2">Por qué el precio del GEO varía tanto</h2>
          <p className="ccg-post-p">
            El mercado GEO es joven y sin estándares establecidos. Esto genera
            una brecha enorme entre agencias: desde servicios de{' '}
            <strong>300 USD/mes</strong> que son consultoría genérica, hasta
            retainers de <strong>8.000 USD/mes</strong> con equipos
            especializados en LLM optimization. El precio refleja la
            profundidad técnica, la velocidad de ejecución y el nivel de
            especialización del equipo.
          </p>
        </section>

        {/* Qué debe incluir */}
        <section className="ccg-post-section">
          <h2 className="ccg-post-h2">Qué debe incluir un servicio GEO completo</h2>
          <ul className="ccg-post-inclusions">
            {inclusions.map((i) => (
              <li key={i.title} className="ccg-post-inclusion">
                <span className="ccg-post-inclusion-check" aria-hidden="true">✓</span>
                <div>
                  <h3 className="ccg-post-inclusion-title">{i.title}</h3>
                  <p className="ccg-post-inclusion-body">{i.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Rangos de precio */}
        <section className="ccg-post-section">
          <h2 className="ccg-post-h2">
            Rangos de precio orientativos por nivel de servicio
          </h2>
          <div className="ccg-post-tiers">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`ccg-post-tier${t.featured ? ' is-featured' : ''}`}
              >
                {t.featured && (
                  <span className="ccg-post-tier-badge">Más elegido</span>
                )}
                <p className="ccg-post-tier-name">{t.name}</p>
                <p className="ccg-post-tier-range">{t.range}</p>
                <p className="ccg-post-tier-body">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ¿Vale la pena? */}
        <section className="ccg-post-section">
          <h2 className="ccg-post-h2">¿Vale la pena la inversión en GEO?</h2>
          <p className="ccg-post-p">
            El ROI del GEO es acumulativo: cada citación en ChatGPT es un
            activo que trabaja 24/7 sin coste marginal. Clientes de RankAgile
            en nivel Profesional recuperan la inversión en{' '}
            <strong>4-9 meses</strong> cuando el pipeline está bien
            instrumentado. Si tus clientes potenciales usan IA para decidir, la
            pregunta no es si podés permitirte hacer GEO. Es si podés
            permitirte no hacerlo. Visitá nuestra{' '}
            <a href="/geo/">página GEO</a> o{' '}
            <a href="/">RankAgile.com</a> para más información.
          </p>
        </section>

        {/* CTA final */}
        <section className="ccg-post-cta-card" aria-label="CTA final">
          <hr className="ccg-post-divider" />
          <h2 className="ccg-post-h2 is-center">
            Obtené un presupuesto GEO a medida para tu empresa
          </h2>
          <a className="ccg-post-btn" href="/contacto/">
            Hablar con un especialista
          </a>
        </section>
      </article>
    </main>
  );
}
