import useDocumentMeta from '../hooks/useDocumentMeta.js';

const concepts = [
  {
    tag: 'SEO',
    title: 'El pilar que sigue siendo imprescindible',
    body: [
      'SEO lleva más de 25 años definiendo cómo las empresas compiten en los resultados de Google. Su objetivo es claro: aparecer en las primeras posiciones de las SERPs para keywords relevantes. Trabaja con señales de autoridad (backlinks), relevancia técnica (Core Web Vitals) y calidad de contenido.',
      'Las AI Overviews de Google están reduciendo el tráfico orgánico de webs que no están citadas como fuente. Eso significa que SEO + GEO ya no son opcionales por separado.',
    ],
  },
  {
    tag: 'AEO',
    title: 'Optimización para la respuesta directa',
    body: [
      'AEO es una especialización dentro del SEO. Su objetivo es conseguir el featured snippet o responder directamente en voz cuando un usuario hace una pregunta. Trabaja con FAQ Schema, estructura pregunta-respuesta y claridad semántica extrema. Es relevante para búsquedas conversacionales, pero no cubre la visibilidad en ChatGPT, Gemini o Perplexity.',
    ],
  },
  {
    tag: 'GEO',
    title: 'La frontera de la visibilidad en 2026',
    body: [
      'GEO no busca rankings en listas, sino presencia en respuestas generativas. Un LLM no devuelve 10 resultados: devuelve una respuesta y cita entre 3 y 5 marcas.',
    ],
    link: { href: '/geo/', label: 'GEO', trailing: ' trabaja para que tu empresa esté en esa lista. Las palancas de GEO son: autoridad semántica, densidad informacional, datos estructurados para Knowledge Graph y arquitectura de citas digitales.' },
  },
];

const styles = `
  .sga-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 96px 24px 120px;
  }
  .sga-post-container {
    max-width: 940px;
    margin: 0 auto;
  }

  .sga-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .sga-post-eyebrow.is-center {
    display: block;
    text-align: center;
  }

  .sga-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 28px;
  }
  .sga-post-h1 .sga-post-accent { color: #38FEDA; }

  .sga-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .sga-post-h2.is-center { text-align: center; }

  .sga-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 760px;
    margin: 0 auto 72px;
    text-align: center;
  }

  .sga-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .sga-post-p:last-child { margin-bottom: 0; }
  .sga-post-p strong { color: #FFFFFF; font-weight: 600; }
  .sga-post-p a {
    color: #38FEDA;
    text-decoration: none;
    font-weight: 500;
    transition: color 150ms ease;
  }
  .sga-post-p a:hover { color: #5affe3; }

  .sga-post-section { margin: 0 0 64px; }

  /* Concept cards (SEO / AEO / GEO) */
  .sga-post-concepts {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 0 80px;
  }
  .sga-post-concept {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-left: 4px solid #38FEDA;
    border-radius: 12px;
    padding: 36px 40px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .sga-post-concept:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    border-left-color: #38FEDA;
  }
  .sga-post-concept-tag {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: #0A0A0A;
    background: #38FEDA;
    padding: 5px 14px;
    border-radius: 999px;
    margin: 0 0 18px;
  }
  .sga-post-concept-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 18px;
  }
  .sga-post-concept-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 14px;
  }
  .sga-post-concept-body:last-child { margin-bottom: 0; }
  .sga-post-concept-body a {
    color: #38FEDA;
    text-decoration: none;
    font-weight: 500;
    transition: color 150ms ease;
  }
  .sga-post-concept-body a:hover { color: #5affe3; }

  /* Integration block (summary) */
  .sga-post-integration {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 40px 44px;
    margin: 0 0 80px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .sga-post-integration:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }

  /* CTA final card */
  .sga-post-cta-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    text-align: center;
    transition: border-color 200ms ease;
  }
  .sga-post-cta-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }
  .sga-post-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.18);
    border: 0;
    margin: 0 0 48px;
  }
  .sga-post-cta-text {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 640px;
    margin: 0 auto 28px;
  }
  .sga-post-btn {
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
  }
  .sga-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .sga-post-page { padding: 64px 16px 88px; }
    .sga-post-h2 { font-size: 30px; }
    .sga-post-section { margin-bottom: 48px; }
    .sga-post-concept { padding: 28px 24px; }
    .sga-post-concept-title { font-size: 22px; }
    .sga-post-integration { padding: 32px 24px; }
    .sga-post-cta-card { padding: 40px 24px; }
  }
`;

export default function SeoVsGeoVsAeoPage() {
  useDocumentMeta({
    title: 'SEO vs GEO vs AEO: Las Diferencias Reales que Toda Empresa Debe Entender en 2026 | RankAgile',
    description:
      'Tres siglas, tres objetivos distintos. Diferencias reales entre SEO, GEO y AEO, cuándo aplicar cada uno y por qué la estrategia ganadora de 2026 es integrarlos.',
  });

  return (
    <main className="sga-post-page">
      <style>{styles}</style>
      <article className="sga-post-container">
        {/* Hero */}
        <header>
          <p className="sga-post-eyebrow is-center">
            Análisis técnico · SEO · GEO · AEO
          </p>
          <h1 className="sga-post-h1">
            <span className="sga-post-accent">SEO vs GEO vs AEO</span>: Las
            Diferencias Reales que Toda Empresa Debe Entender en 2026
          </h1>
          <p className="sga-post-lead">
            Tres siglas, tres objetivos distintos, una sola misión: que tu
            empresa aparezca donde tus clientes buscan. Acá los desglosamos
            sin tecnicismos innecesarios.
          </p>
        </header>

        {/* Concept cards */}
        <section className="sga-post-concepts" aria-label="Comparativa SEO, AEO y GEO">
          {concepts.map((c) => (
            <div key={c.tag} className="sga-post-concept">
              <span className="sga-post-concept-tag">{c.tag}</span>
              <h2 className="sga-post-concept-title">{c.title}</h2>
              {c.body.map((paragraph, idx) => (
                <p key={idx} className="sga-post-concept-body">{paragraph}</p>
              ))}
              {c.link && (
                <p className="sga-post-concept-body">
                  <a href={c.link.href}>{c.link.label}</a>
                  {c.link.trailing}
                </p>
              )}
            </div>
          ))}
        </section>

        {/* Integration */}
        <section className="sga-post-section">
          <h2 className="sga-post-h2">La estrategia correcta: las tres capas integradas</h2>
          <div className="sga-post-integration">
            <p className="sga-post-p">
              La pregunta correcta no es <strong>cuál elijo</strong> sino{' '}
              <strong>cómo las integro</strong>. SEO construye la base de
              autoridad. AEO captura búsquedas de respuesta directa. GEO
              posiciona en la capa de IA generativa.
            </p>
            <p className="sga-post-p">
              En RankAgile diseñamos estrategias integradas que trabajan las
              tres capas con recursos coordinados. Visitá nuestra página de{' '}
              <a href="/">SEO para IA</a> para ver la metodología.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="sga-post-cta-card" aria-label="CTA final">
          <hr className="sga-post-divider" />
          <h2 className="sga-post-h2 is-center">
            Construí visibilidad en las tres capas con RankAgile
          </h2>
          <p className="sga-post-cta-text">
            Auditamos tu presencia en Google, AI Overviews, ChatGPT, Gemini y
            Perplexity, y diseñamos un plan integrado que trabaja las tres
            capas simultáneamente. Sin compromiso.
          </p>
          <a className="sga-post-btn" href="/contacto/">
            Hablar con un especialista
          </a>
        </section>
      </article>
    </main>
  );
}
