import useDocumentMeta from '../hooks/useDocumentMeta.js';

const algorithmSteps = [
  {
    n: '1',
    title: 'Rastreo e Indexación',
    body: 'Googlebot rastrea tu sitio siguiendo enlaces. Una arquitectura técnica correcta (sitemap XML, robots.txt, estructura de URLs canónicas, velocidad de carga) determina qué páginas se indexan y con qué frecuencia se actualizan. Sin indexación, el contenido no existe en los resultados de búsqueda independientemente de su calidad.',
  },
  {
    n: '2',
    title: 'Evaluación de Relevancia',
    body: 'Una vez indexada la página, Google evalúa su relevancia semántica: analiza el contenido, las entidades mencionadas, la intención de búsqueda que satisface y su relación con el resto del sitio. Aquí opera el modelo de lenguaje interno de Google (MUM/Gemini) para entender el significado real del contenido más allá de las palabras clave exactas.',
  },
  {
    n: '3',
    title: 'Cálculo del Ranking',
    body: 'El ranking final combina relevancia con autoridad: PageRank (calidad y cantidad de backlinks), señales de experiencia de usuario (CTR, dwell time, Core Web Vitals) y factores E-E-A-T. El resultado es una posición en el SERP que puede cambiar con cada Core Update, por lo que el monitoreo continuo con GSC y herramientas de rank tracking es indispensable.',
  },
];

const mistakes = [
  { title: 'Optimizar sin Analizar la Intención de Búsqueda', body: 'Optimizar para el volumen de búsqueda sin considerar la intención (informacional, navegacional, transaccional) genera tráfico que no convierte. Una keyword de 10.000 búsquedas mensuales con intención informacional no traerá ventas si tu página es una landing comercial.' },
  { title: 'Canibalizaciones de Keywords No Detectadas', body: 'Cuando dos o más páginas de tu sitio compiten por la misma keyword, Google no sabe cuál posicionar y reduce la visibilidad de ambas. Detectar canibalizaciones con GSC (misma query, múltiples URLs) y consolidar contenido es una de las acciones de mayor impacto en SEO técnico.' },
  { title: 'Core Web Vitals por Debajo del Umbral', body: 'Desde 2021, Google usa Core Web Vitals como factor de ranking. LCP superior a 2.5s, INP superior a 200ms o CLS superior a 0.1 penalizan el posicionamiento. La mayoría de los sitios WordPress sin optimización de imágenes y sin CDN no superan estos umbrales en móvil.' },
  { title: 'Estructura de Enlazado Interno Deficiente', body: 'El enlazado interno distribuye autoridad entre páginas y le comunica a Google la jerarquía del sitio. Páginas huérfanas (sin enlaces entrantes internos) no reciben PageRank interno y raramente rankean bien, independientemente de la calidad de su contenido.' },
  { title: 'Ignorar las Señales de Google Search Console', body: 'GSC reporta errores de cobertura, páginas excluidas, problemas de usabilidad móvil y caídas de impresiones en tiempo real. Ignorar estas alertas permite que problemas técnicos menores se conviertan en caídas de tráfico significativas después de un Core Update.' },
  { title: 'Contenido sin Autoridad Temática (E-E-A-T)', body: 'Tras las actualizaciones de Helpful Content (2022-2024), Google prioriza contenido que demuestra experiencia real y conocimiento de primera mano. Las páginas sin autor identificable, sin datos originales y sin profundidad temática pierden visibilidad progresivamente en sectores YMYL (salud, finanzas, legal).' },
  { title: 'No Medir el Impacto Real en el Negocio', body: 'El tráfico orgánico sin atribución de conversiones es ruido. Configurar correctamente GA4 con eventos de conversión, conectarlo a GSC y cruzar datos con el CRM permite entender el valor real del SEO: no solo impresiones y clics, sino leads, ventas y LTV por canal.' },
  { title: 'Descuidar la Frescura y Actualización del Contenido', body: 'Google QDF (Query Deserves Freshness) favorece contenido actualizado para búsquedas sensibles al tiempo. Auditar el catálogo de contenido cada 6 meses e identificar páginas con caída de impresiones permite priorizar actualizaciones antes de que el tráfico se pierda definitivamente.' },
];

const faqs = [
  { q: '¿Cuánto tiempo tarda realmente en posicionar una página nueva?', a: 'Depende de tres factores: autoridad del dominio, competencia de la keyword y profundidad del contenido. En dominios nuevos, el "sandbox" de Google puede demorar resultados 3-6 meses. En dominios con autoridad establecida, una página bien optimizada puede rankear en 4-8 semanas. Las keywords de cola larga (3+ palabras) posicionan más rápido y con menos recursos.' },
  { q: '¿Cuál es la diferencia entre SEO On-Page, Off-Page y Técnico?', a: 'On-Page: optimización del contenido y metadatos de cada URL (títulos, H1-H6, densidad semántica, schema markup). Off-Page: construcción de autoridad externa mediante backlinks de calidad y menciones de marca. Técnico: rastreabilidad, velocidad, estructura de datos, hreflang para sitios multiidioma y Core Web Vitals. Los tres pilares deben operar en paralelo para resultados sostenibles.' },
  { q: '¿Cómo afectan las actualizaciones de Google a mi posicionamiento?', a: 'Google lanza Core Updates 3-4 veces al año que redistribuyen rankings a gran escala. Los sitios que pierden posiciones típicamente tienen problemas de E-E-A-T, thin content o señales de UX negativas. La recuperación tras un Core Update puede tardar hasta el siguiente update (3 meses), por lo que la prevención con auditorías regulares es más eficiente que la recuperación reactiva.' },
  { q: '¿Qué métricas realmente importan para medir el éxito del SEO?', a: 'Más allá del ranking, las métricas que reflejan el impacto real son: tráfico orgánico segmentado (marca vs. no-marca), CTR por query en GSC, conversiones atribuidas a canal orgánico en GA4, Share of Voice por clúster temático y velocidad de indexación de contenido nuevo. El ranking de una keyword específica es una métrica de vanidad si no se correlaciona con tráfico y conversiones.' },
  { q: '¿Vale la pena el SEO para empresas pequeñas frente a Google Ads?', a: 'Google Ads genera tráfico inmediato pero su costo por clic en sectores competitivos puede superar los 5-20 USD. El SEO tiene un costo inicial más alto (producción de contenido, técnica) pero el costo marginal por visita decrece con el tiempo. Para empresas con presupuesto limitado, la estrategia óptima es SEO para keywords informacionales y de cola larga + Ads solo para keywords transaccionales de alto valor.' },
];

const styles = `
  .ques-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 32px 24px 120px;
  }
  .ques-post-container { max-width: 1080px; margin: 0 auto; }

  .ques-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .ques-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .ques-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .ques-post-h2.is-center { text-align: center; }
  .ques-post-h3 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.3;
    color: #38FEDA;
    margin: 0;
  }
  .ques-post-accent { color: #38FEDA; }
  .ques-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }
  .ques-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .ques-post-p:last-child { margin-bottom: 0; }
  .ques-post-p.is-center { text-align: center; }
  .ques-post-p strong { color: #FFFFFF; font-weight: 600; }

  .ques-post-section { margin: 0 0 80px; }

  /* Hero */
  .ques-post-hero {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    align-items: center;
    margin: 16px 0 64px;
  }
  .ques-post-figure {
    margin: 0;
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 16px;
    overflow: hidden;
    background: rgba(56, 254, 218, 0.04);
    transition: border-color 200ms ease;
  }
  .ques-post-figure:hover { border-color: rgba(56, 254, 218, 0.45); }
  .ques-post-figure img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  /* Section headings */
  .ques-post-header {
    text-align: center;
    margin: 0 0 40px;
  }

  /* Two col */
  .ques-post-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 32px;
  }

  /* Pilares (3 col: img, texto, texto) */
  .ques-post-pilares {
    display: grid;
    grid-template-columns: 1fr 1.3fr 1.3fr;
    gap: 32px;
    align-items: center;
    margin-top: 32px;
  }
  .ques-post-pilar-img {
    border-radius: 16px;
    background: rgba(56, 254, 218, 0.06);
    border: 1px solid rgba(56, 254, 218, 0.2);
    padding: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 200ms ease;
  }
  .ques-post-pilar-img:hover { border-color: rgba(56, 254, 218, 0.45); }
  .ques-post-pilar-img img {
    display: block;
    width: 100%;
    max-width: 240px;
    height: auto;
  }

  /* Algorithm steps (3 numbered columns) */
  .ques-post-algo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
  }
  .ques-post-algo-step {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 28px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .ques-post-algo-step:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .ques-post-algo-num {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 44px;
    font-weight: 800;
    line-height: 1;
    color: #38FEDA;
    margin: 0 0 18px;
    opacity: 0.85;
  }
  .ques-post-algo-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 12px;
  }
  .ques-post-algo-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* Mistakes grid */
  .ques-post-mistakes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 40px;
  }
  .ques-post-mistake {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-left: 3px solid #38FEDA;
    border-radius: 12px;
    padding: 24px 26px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .ques-post-mistake:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .ques-post-mistake-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #38FEDA;
    margin: 0 0 10px;
  }
  .ques-post-mistake-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  /* FAQ + aside */
  .ques-post-faq-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    align-items: start;
    margin-top: 32px;
  }
  .ques-post-faq {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .ques-post-faq-item {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .ques-post-faq-item[open],
  .ques-post-faq-item:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .ques-post-faq-summary {
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
  .ques-post-faq-summary::-webkit-details-marker { display: none; }
  .ques-post-faq-summary::after {
    content: "+";
    color: #38FEDA;
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    flex: 0 0 auto;
  }
  .ques-post-faq-item[open] .ques-post-faq-summary::after { content: "–"; }
  .ques-post-faq-body {
    padding: 0 24px 22px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }
  .ques-post-faq-aside {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-left: 4px solid #38FEDA;
    border-radius: 16px;
    padding: 32px 28px;
    position: sticky;
    top: 100px;
  }

  /* Closing grid */
  .ques-post-closing {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 40px;
    align-items: center;
  }

  /* CTA final */
  .ques-post-cta-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    text-align: center;
    transition: border-color 200ms ease;
  }
  .ques-post-cta-card:hover { border-color: rgba(56, 254, 218, 0.45); }
  .ques-post-btn {
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
  .ques-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 960px) {
    .ques-post-hero { grid-template-columns: 1fr; gap: 32px; }
    .ques-post-two-col { grid-template-columns: 1fr; gap: 24px; }
    .ques-post-pilares { grid-template-columns: 1fr; gap: 24px; }
    .ques-post-algo { grid-template-columns: 1fr; }
    .ques-post-mistakes { grid-template-columns: 1fr; }
    .ques-post-faq-grid { grid-template-columns: 1fr; gap: 24px; }
    .ques-post-faq-aside { position: static; }
    .ques-post-closing { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .ques-post-page { padding: 16px 16px 88px; }
    .ques-post-h2 { font-size: 30px; }
    .ques-post-section { margin-bottom: 56px; }
    .ques-post-cta-card { padding: 40px 24px; }
  }
`;

export default function QueEsSeoPage() {
  useDocumentMeta({
    title: 'SEO: ¿Qué es y para qué sirve? | RankAgile',
    description:
      '¿Qué es el SEO y para qué sirve? Descubrí cómo funciona el posicionamiento en Google, sus beneficios y cómo aplicarlo para atraer más clientes.',
  });

  return (
    <main className="ques-post-page">
      <style>{styles}</style>
      <article className="ques-post-container">
        {/* Hero */}
        <header className="ques-post-hero">
          <div>
            <span className="ques-post-eyebrow">Fundamentos del Posicionamiento Orgánico</span>
            <h1 className="ques-post-h1">
              SEO:{' '}
              <span className="ques-post-accent">El Sistema que Decide</span>{' '}
              tu Visibilidad en Internet
            </h1>
            <p className="ques-post-lead">
              El SEO no es una táctica de marketing: es la infraestructura
              que determina si tu sitio existe para Google o no. Entender
              cómo funcionan los algoritmos de búsqueda es el primer paso
              para construir visibilidad orgánica sostenible.
            </p>
          </div>
          <figure className="ques-post-figure">
            <img
              src="/wp-content/uploads/2026/02/0-2d3268fc-bd94-4ab3-914e-ba6f2afdf488-512x512.jpg"
              alt="Representación visual del posicionamiento orgánico y el algoritmo de Google"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </header>

        {/* Por qué es infraestructura */}
        <section className="ques-post-section">
          <div className="ques-post-header">
            <span className="ques-post-eyebrow">Por qué el SEO es infraestructura, no marketing</span>
            <h2 className="ques-post-h2">Cómo Google Decide qué Mostrar Primero</h2>
          </div>
          <div className="ques-post-two-col">
            <p className="ques-post-p">
              Google procesa más de 8.500 millones de búsquedas diarias. Su
              algoritmo evalúa más de 200 factores para decidir qué páginas
              aparecen primero: <strong>relevancia semántica, autoridad del
              dominio, experiencia de usuario y señales técnicas</strong>. El
              SEO es el proceso sistemático de optimizar cada uno de esos
              factores para que tu sitio sea la respuesta más relevante a
              las consultas de tu audiencia objetivo.
            </p>
            <p className="ques-post-p">
              A diferencia de los anuncios pagados que desaparecen cuando se
              acaba el presupuesto, el <strong>tráfico orgánico generado
              por SEO es compuesto</strong>: cada pieza de contenido
              optimizado sigue atrayendo visitas meses o años después de su
              publicación. Las empresas con estrategias SEO maduras generan
              entre el 40% y el 70% de su tráfico total de forma orgánica.
            </p>
          </div>
        </section>

        {/* 3 Pilares */}
        <section className="ques-post-section">
          <div className="ques-post-header">
            <span className="ques-post-eyebrow">Los Tres Pilares del SEO</span>
            <h2 className="ques-post-h2">SEO Técnico, de Contenido y de Autoridad</h2>
            <p className="ques-post-p is-center">
              Los tres pilares que determinan tu ranking operan en paralelo
              y se refuerzan entre sí.
            </p>
          </div>
          <div className="ques-post-pilares">
            <div className="ques-post-pilar-img">
              <img
                src="/wp-content/uploads/2026/01/rank-agile-engro-03.svg"
                alt="Logo engranaje RankAgile"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="ques-post-p">
              <strong>SEO Técnico:</strong> rastreabilidad, indexabilidad,
              Core Web Vitals, estructura de URLs, datos estructurados y
              seguridad HTTPS. Es la base: sin ella, el contenido no existe
              para los motores de búsqueda.{' '}
              <strong>SEO de Contenido:</strong> investigación de intención
              de búsqueda, arquitectura de información, clústeres temáticos
              y optimización semántica. Define de qué temas sos referente.{' '}
              <strong>SEO de Autoridad:</strong> construcción de enlaces,
              menciones de marca, señales E-E-A-T (Experiencia, Expertise,
              Autoridad, Confianza). Determina cuánto confía Google en tu
              dominio.
            </p>
            <p className="ques-post-p">
              En 2024, Google introdujo cambios significativos con las
              actualizaciones de <strong>Helpful Content</strong> y los{' '}
              <strong>Core Updates</strong>: los sitios que priorizan la
              profundidad temática y la experiencia real del autor sobre la
              densidad de keywords ganan posiciones. El SEO moderno se
              aleja del juego de palabras clave y se orienta hacia la
              construcción de autoridad semántica genuina en nichos
              específicos.
            </p>
          </div>
        </section>

        {/* Algoritmo */}
        <section className="ques-post-section">
          <div className="ques-post-header">
            <h2 className="ques-post-h2 is-center">Cómo Funciona el Algoritmo de Google</h2>
            <p className="ques-post-p is-center">
              El algoritmo de Google opera en tres fases secuenciales:
              rastreo, indexación y ranking. Comprender cada etapa permite
              identificar exactamente dónde optimizar para obtener
              resultados.
            </p>
          </div>
          <div className="ques-post-algo">
            {algorithmSteps.map((s) => (
              <article key={s.n} className="ques-post-algo-step">
                <p className="ques-post-algo-num" aria-hidden="true">{s.n}</p>
                <h3 className="ques-post-algo-title">{s.title}</h3>
                <p className="ques-post-algo-body">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Errores */}
        <section className="ques-post-section">
          <h2 className="ques-post-h2 is-center">
            Errores Técnicos y Estratégicos que Frenan el Ranking
          </h2>
          <div className="ques-post-mistakes">
            {mistakes.map((m) => (
              <article key={m.title} className="ques-post-mistake">
                <h3 className="ques-post-mistake-title">{m.title}</h3>
                <p className="ques-post-mistake-body">{m.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="ques-post-section">
          <h2 className="ques-post-h2">Preguntas Técnicas sobre SEO</h2>
          <p className="ques-post-p">
            Estas son las preguntas que con mayor frecuencia generan
            confusión entre equipos de marketing y directores de empresa
            cuando empiezan a trabajar con SEO de forma sistemática.
          </p>
          <div className="ques-post-faq-grid">
            <div className="ques-post-faq">
              {faqs.map((f, i) => (
                <details key={f.q} className="ques-post-faq-item" open={i === 0}>
                  <summary className="ques-post-faq-summary">{f.q}</summary>
                  <p className="ques-post-faq-body">{f.a}</p>
                </details>
              ))}
            </div>
            <aside className="ques-post-faq-aside">
              <h3 className="ques-post-h3">
                El SEO es el canal de adquisición con mejor ROI a largo plazo
              </h3>
            </aside>
          </div>
        </section>

        {/* Perspectiva RankAgile */}
        <section className="ques-post-section">
          <div className="ques-post-closing">
            <div>
              <span className="ques-post-eyebrow">Perspectiva RankAgile</span>
              <h2 className="ques-post-h2">SEO como Ventaja Competitiva Compuesta</h2>
            </div>
            <p className="ques-post-p">
              Las empresas que invierten consistentemente en SEO durante 2
              o más años construyen un activo digital que se comporta como{' '}
              <strong>interés compuesto</strong>: cada contenido publicado,
              cada backlink obtenido y cada mejora técnica implementada
              aumenta la autoridad del dominio, lo que a su vez facilita
              posicionar nuevas páginas con menos esfuerzo. A diferencia de
              los canales pagados, este activo no desaparece si se detiene
              la inversión puntualmente. En RankAgile trabajamos SEO con
              una visión de 18-36 meses: construimos la arquitectura
              correcta desde el inicio para que los resultados escalen de
              forma predecible.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="ques-post-cta-card" aria-label="CTA final">
          <h2 className="ques-post-h2 is-center">
            ¿Listo para construir tu ventaja competitiva orgánica?
          </h2>
          <p className="ques-post-p is-center" style={{ maxWidth: 640, margin: '0 auto 28px' }}>
            Auditamos tu sitio, identificamos los gaps técnicos y
            estratégicos, y diseñamos el plan de 18-36 meses que convierte
            tu dominio en activo digital. Sin compromiso.
          </p>
          <a className="ques-post-btn" href="/contacto/">Hablar con un especialista</a>
        </section>
      </article>
    </main>
  );
}
