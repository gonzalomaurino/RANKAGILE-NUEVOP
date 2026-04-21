import useDocumentMeta from '../hooks/useDocumentMeta.js';

const compareRows = [
  ['Velocidad de resultados', '3–12 meses', 'Inmediato (24–48h)'],
  ['Costo por clic', 'Marginal a largo plazo', 'Variable (CPC de subasta)'],
  ['Durabilidad del tráfico', 'Permanente (activo digital)', 'Solo mientras hay presupuesto'],
  ['Control y targeting', 'Limitado a intención', 'Alto (audiencias, horarios, geo)'],
  ['Ideal para', 'Keywords informacionales y cola larga', 'Keywords transaccionales de alto valor'],
  ['ROI a largo plazo', 'Muy alto (efecto compuesto)', 'Medio-alto (depende del CPA)'],
  ['Dependencia del algoritmo', 'Alta (Core Updates)', 'Baja (reglas de subasta estables)'],
  ['Datos obtenidos', 'GSC, GA4, rank trackers', 'Google Ads, conversiones directas'],
];

const semStrategies = [
  'Segmentación por Intención de Búsqueda',
  'Optimización Continua del Quality Score',
  'Listas de Palabras Clave Negativas',
];

const faqs = [
  { q: '¿Debo invertir primero en SEO o en Google Ads?', a: 'Depende del momento de tu negocio. Si necesitás leads en los próximos 30-60 días, Google Ads es la respuesta: genera tráfico predecible desde el día 1. Si pensás a 12-24 meses, construir SEO paralelo reduce tu dependencia del gasto pagado y baja el CPA general. La estrategia óptima para la mayoría de empresas es: Ads para capturar demanda actual + SEO para construir el activo digital que garantice visibilidad a largo plazo.' },
  { q: '¿Pagar por publicidad afecta mi posicionamiento orgánico?', a: 'No directamente: Google confirma que no existe ninguna ventaja de ranking orgánico por invertir en Google Ads. Sin embargo, la sinergia existe de forma indirecta: los anuncios generan tráfico que mejora las métricas de usuario (dwell time, CTR de marca) y permite construir audiencias de remarketing. También revelan qué keywords transaccionales convierten, lo que informa la estrategia de contenido SEO.' },
  { q: '¿Cuál es un presupuesto mínimo realista para Google Ads?', a: 'Depende del CPC promedio de tu nicho y tu tasa de conversión objetivo. Fórmula general: (CPA objetivo) ÷ (tasa de conversión estimada) = CPC máximo. Para obtener datos estadísticamente significativos, necesitás al menos 100 clics por grupo de anuncios. En nichos con CPC de 2-5 USD, un presupuesto mínimo de 500-1000 USD/mes permite hacer pruebas reales. En sectores con CPC de 20-50 USD (legal, finanzas, salud), necesitás más para aprender.' },
  { q: '¿Qué es el ROAS y cómo se calcula?', a: 'ROAS (Return on Ad Spend) = Ingresos generados por anuncios ÷ Gasto en anuncios. Un ROAS de 4x significa que por cada dólar gastado en Ads, obtenés 4 dólares en ingresos. El ROAS mínimo viable varía según tu margen bruto: si tu margen es del 40%, necesitás un ROAS mínimo de 2.5x solo para cubrir el costo de los anuncios. A diferencia del ROI, el ROAS no considera otros costos operativos.' },
  { q: '¿Performance Max reemplaza las campañas de búsqueda clásicas?', a: 'Performance Max no reemplaza Search en todos los contextos: es complementario. Search ofrece control granular sobre keywords y mensajes, ideal para capturar demanda existente de alta intención. PMax expande el alcance a todos los inventarios de Google (Display, YouTube, Shopping, Discover) con optimización automática. La estrategia más efectiva actualmente combina campañas Search para brand y keywords core + PMax para crecimiento y audiencias nuevas.' },
];

const styles = `
  .seosem-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 32px 24px 120px;
  }
  .seosem-post-container { max-width: 1080px; margin: 0 auto; }

  .seosem-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .seosem-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .seosem-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .seosem-post-h2.is-center { text-align: center; }
  .seosem-post-h3 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.3;
    color: #38FEDA;
    margin: 0;
  }
  .seosem-post-accent { color: #38FEDA; }
  .seosem-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }
  .seosem-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .seosem-post-p:last-child { margin-bottom: 0; }
  .seosem-post-p strong { color: #FFFFFF; font-weight: 600; }

  .seosem-post-section { margin: 0 0 80px; }

  /* Hero */
  .seosem-post-hero {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    align-items: center;
    margin: 16px 0 64px;
  }
  .seosem-post-figure {
    margin: 0;
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 16px;
    overflow: hidden;
    background: rgba(56, 254, 218, 0.04);
    transition: border-color 200ms ease;
  }
  .seosem-post-figure:hover { border-color: rgba(56, 254, 218, 0.45); }
  .seosem-post-figure img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }

  /* Two col */
  .seosem-post-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 32px;
  }

  /* Table */
  .seosem-post-table-wrap {
    margin-top: 32px;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
  }
  .seosem-post-table {
    width: 100%;
    border-collapse: collapse;
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }
  .seosem-post-table th {
    text-align: left;
    padding: 16px 20px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    background: rgba(56, 254, 218, 0.12);
    color: #38FEDA;
    border-bottom: 1px solid rgba(56, 254, 218, 0.22);
  }
  .seosem-post-table td {
    padding: 16px 20px;
    font-size: 15px;
    line-height: 1.55;
    border-bottom: 1px solid rgba(56, 254, 218, 0.08);
    vertical-align: top;
  }
  .seosem-post-table tr:last-child td { border-bottom: 0; }
  .seosem-post-table td.is-var {
    font-weight: 500;
    color: #FFFFFF;
  }
  .seosem-post-tag {
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 999px;
  }
  .seosem-post-tag.is-seo {
    background: rgba(56, 254, 218, 0.15);
    color: #38FEDA;
  }
  .seosem-post-tag.is-sem {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.85);
  }

  /* Strategies 3 col */
  .seosem-post-strategies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 32px;
  }
  .seosem-post-strategy {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 28px 26px;
    text-align: center;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .seosem-post-strategy:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .seosem-post-strategy h3 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0;
  }

  /* Sinergia grid */
  .seosem-post-sinergia {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 40px;
    align-items: center;
    margin-top: 32px;
  }

  /* FAQ */
  .seosem-post-faq-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    align-items: start;
    margin-top: 32px;
  }
  .seosem-post-faq-aside {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-left: 4px solid #38FEDA;
    border-radius: 16px;
    padding: 32px 28px;
    position: sticky;
    top: 100px;
  }
  .seosem-post-faq {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .seosem-post-faq-item {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .seosem-post-faq-item[open],
  .seosem-post-faq-item:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .seosem-post-faq-summary {
    list-style: none;
    cursor: pointer;
    padding: 20px 24px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .seosem-post-faq-summary::-webkit-details-marker { display: none; }
  .seosem-post-faq-summary::after {
    content: "+";
    color: #38FEDA;
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    flex: 0 0 auto;
  }
  .seosem-post-faq-item[open] .seosem-post-faq-summary::after { content: "–"; }
  .seosem-post-faq-body {
    padding: 0 24px 22px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  /* CTA */
  .seosem-post-cta-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    text-align: center;
    transition: border-color 200ms ease;
  }
  .seosem-post-cta-card:hover { border-color: rgba(56, 254, 218, 0.45); }
  .seosem-post-btn {
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
  .seosem-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 960px) {
    .seosem-post-hero { grid-template-columns: 1fr; }
    .seosem-post-two-col { grid-template-columns: 1fr; gap: 24px; }
    .seosem-post-strategies { grid-template-columns: 1fr; }
    .seosem-post-sinergia { grid-template-columns: 1fr; gap: 24px; }
    .seosem-post-faq-grid { grid-template-columns: 1fr; gap: 24px; }
    .seosem-post-faq-aside { position: static; }
  }
  @media (max-width: 768px) {
    .seosem-post-page { padding: 16px 16px 88px; }
    .seosem-post-h2 { font-size: 30px; }
    .seosem-post-section { margin-bottom: 56px; }
    .seosem-post-table th,
    .seosem-post-table td { padding: 12px 14px; font-size: 13px; }
    .seosem-post-cta-card { padding: 40px 24px; }
  }
  @media (max-width: 540px) {
    .seosem-post-table-wrap { overflow-x: auto; }
  }
`;

export default function SeoYSemPage() {
  useDocumentMeta({
    title: 'SEO y SEM en Marketing Digital | RankAgile',
    description:
      '¿Qué es SEO y SEM? Entendé cómo funcionan, en qué se diferencian y cuándo usar cada estrategia para mejorar tu visibilidad digital.',
  });

  return (
    <main className="seosem-post-page">
      <style>{styles}</style>
      <article className="seosem-post-container">
        {/* Hero */}
        <header className="seosem-post-hero">
          <figure className="seosem-post-figure">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Analista digital comparando estrategias SEO y SEM"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div>
            <span className="seosem-post-eyebrow">SEO + SEM: La Ecuación Completa del Tráfico Digital</span>
            <h1 className="seosem-post-h1">
              <span className="seosem-post-accent">Orgánico y Pagado:</span>{' '}
              Dos Fuerzas que Trabajan Juntas
            </h1>
            <p className="seosem-post-lead">
              El debate SEO vs SEM es una trampa. Las empresas que dominan
              los resultados de búsqueda no eligen uno: operan ambos
              canales de forma sincronizada, usando datos de Google Ads
              para acelerar decisiones de SEO y usando el tráfico orgánico
              para reducir el CPA de sus campañas pagadas.
            </p>
          </div>
        </header>

        {/* SEM */}
        <section className="seosem-post-section">
          <span className="seosem-post-eyebrow">Search Engine Marketing</span>
          <h2 className="seosem-post-h2">
            SEM:{' '}
            <span className="seosem-post-accent">
              Visibilidad Inmediata con Precisión Quirúrgica
            </span>
          </h2>
          <div className="seosem-post-two-col">
            <p className="seosem-post-p">
              El SEM (Search Engine Marketing) engloba las estrategias de
              publicidad de pago en motores de búsqueda. Su núcleo es{' '}
              <strong>Google Ads</strong>, un sistema de subasta en tiempo
              real donde las marcas compiten por mostrarse ante usuarios
              con intención de compra activa. A diferencia del SEO, el SEM
              genera visibilidad desde el primer día de activación: ideal
              para lanzamientos, testeo de mercado y captura de demanda
              transaccional con volumen predecible.
            </p>
            <p className="seosem-post-p">
              El sistema Google Ads opera bajo el modelo <strong>PPC</strong>{' '}
              (pago por clic). El <strong>Quality Score</strong> —combinación
              de relevancia del anuncio, CTR esperado y experiencia en la
              página de destino— determina tanto la posición del anuncio
              como el costo real por clic. Un Quality Score de 10 puede
              reducir el CPC hasta un 50% respecto a competidores con peor
              relevancia. Por eso el SEM no es solo presupuesto: es
              optimización continua de la cadena anuncio → landing →
              conversión.
            </p>
          </div>
        </section>

        {/* Tabla comparativa */}
        <section className="seosem-post-section">
          <span className="seosem-post-eyebrow">Análisis Comparativo</span>
          <h2 className="seosem-post-h2">SEO vs SEM: Variables Clave</h2>
          <div className="seosem-post-table-wrap">
            <table className="seosem-post-table">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>SEO</th>
                  <th>SEM / Google Ads</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([variable, seo, sem]) => (
                  <tr key={variable}>
                    <td className="is-var">{variable}</td>
                    <td><span className="seosem-post-tag is-seo">{seo}</span></td>
                    <td><span className="seosem-post-tag is-sem">{sem}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Estrategias SEM */}
        <section className="seosem-post-section">
          <h2 className="seosem-post-h2 is-center">Estrategias SEM para Maximizar el ROAS</h2>
          <div className="seosem-post-strategies">
            {semStrategies.map((s) => (
              <article key={s} className="seosem-post-strategy">
                <h3>{s}</h3>
              </article>
            ))}
          </div>
        </section>

        {/* Sinergia */}
        <section className="seosem-post-section">
          <div className="seosem-post-sinergia">
            <div>
              <span className="seosem-post-eyebrow">Sinergia Orgánico + Pagado</span>
              <h2 className="seosem-post-h2">
                Cómo el SEO y el SEM se Retroalimentan
              </h2>
            </div>
            <figure className="seosem-post-figure">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
                alt="Dashboard de analítica digital cruzando datos SEO y SEM"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* FAQs */}
        <section className="seosem-post-section">
          <h2 className="seosem-post-h2">Preguntas Frecuentes sobre SEO y SEM</h2>
          <div className="seosem-post-faq-grid">
            <aside className="seosem-post-faq-aside">
              <h3 className="seosem-post-h3">
                Invertir en búsqueda hoy es construir la ventaja competitiva
                de mañana
              </h3>
            </aside>
            <div className="seosem-post-faq">
              {faqs.map((f, i) => (
                <details key={f.q} className="seosem-post-faq-item" open={i === 0}>
                  <summary className="seosem-post-faq-summary">{f.q}</summary>
                  <p className="seosem-post-faq-body">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="seosem-post-cta-card" aria-label="CTA final">
          <h2 className="seosem-post-h2 is-center">
            ¿Operás SEO y SEM como unidades separadas?
          </h2>
          <p className="seosem-post-p" style={{ maxWidth: 640, margin: '0 auto 28px', textAlign: 'center' }}>
            Auditamos tu estrategia actual de búsqueda y diseñamos un plan
            integrado que usa datos de Ads para acelerar SEO y tráfico
            orgánico para reducir CPA. Sin compromiso.
          </p>
          <a className="seosem-post-btn" href="/contacto/">
            Hablar con un especialista
          </a>
        </section>
      </article>
    </main>
  );
}
