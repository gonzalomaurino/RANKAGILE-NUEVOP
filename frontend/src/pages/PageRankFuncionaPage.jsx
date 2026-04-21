import useDocumentMeta from '../hooks/useDocumentMeta.js';

const stats = [
  { value: '1998', label: 'El año en que Page y Brin diseñaron el algoritmo que redefinió cómo la web distribuye autoridad entre páginas.' },
  { value: '200+', label: 'Señales que procesa Google hoy. PageRank sigue siendo el cimiento estructural de todas ellas.' },
  { value: '91%', label: 'De las páginas web no reciben tráfico orgánico. La autoridad de dominio es el factor diferencial entre existir y posicionar.' },
];

const variables = [
  { title: 'Autoridad del dominio de origen', body: 'A mayor autoridad del dominio que enlaza, mayor es la fracción de PageRank transferida hacia el destino.' },
  { title: 'Relevancia temática del contexto', body: 'Google evalúa la coherencia semántica entre el sitio de origen y el destino. La relevancia amplifica el valor real del enlace.' },
  { title: 'Links salientes en la página de origen', body: 'La autoridad se divide entre todos los links de salida de esa página. A más links salientes, menor es la fracción que recibe cada destino.' },
];

const compare = [
  {
    type: 'Medio especializado con alta autoridad de dominio y relevancia temática directa',
    transfer: { label: 'Muy alto', tone: 'good' },
    risk: { label: 'Ninguno', tone: 'neutral' },
    impact: { label: 'Alto', tone: 'good' },
  },
  {
    type: 'Blog de nicho con autoridad media y relevancia parcial al sector',
    transfer: { label: 'Medio', tone: 'neutral' },
    risk: { label: 'Bajo', tone: 'neutral' },
    impact: { label: 'Medio', tone: 'neutral' },
  },
  {
    type: 'Directorio genérico sin tráfico ni relevancia temática',
    transfer: { label: 'Casi nulo', tone: 'muted' },
    risk: { label: 'Medio-alto', tone: 'bad' },
    impact: { label: 'Negativo', tone: 'bad' },
  },
  {
    type: 'Red de PBN o compra masiva de enlaces sin criterio editorial',
    transfer: { label: 'Nulo', tone: 'muted' },
    risk: { label: 'Muy alto', tone: 'bad' },
    impact: { label: 'Penalización', tone: 'bad' },
  },
];

const pillars = [
  { n: '01', title: 'Digital PR orientado a autoridad', body: 'No se trata de publicar por publicar. Se trata de identificar los dominios con mayor autoridad temática en el vertical objetivo, construir relaciones editoriales genuinas y asegurar que el ancla text sea semánticamente preciso. Un único placement en un medio de referencia supera en valor a veinte notas de prensa genéricas.' },
  { n: '02', title: 'Link building basado en análisis de competidores', body: 'Mapear el perfil de enlaces de los dominios que ya rankean en las keywords objetivo. Identificar sus fuentes de autoridad más valiosas. No para replicarlos, sino para construir una arquitectura superior. El gap de autoridad es siempre medible y atacable con la estrategia correcta.' },
  { n: '03', title: 'Arquitectura interna de PageRank', body: 'El link building externo sin una estructura de enlazado interno sólida es un desperdicio parcial de autoridad. El PageRank que entra a tu sitio necesita fluir hacia las páginas que querés posicionar. Esto requiere un mapa de enlaces internos diseñado con criterio estratégico: identificar páginas ancla, distribuir autoridad por clusters temáticos y evitar los silos que concentran PageRank en páginas irrelevantes.' },
  { n: '04', title: 'Monitoreo activo de pérdida de autoridad (Link Decay)', body: 'Los backlinks mueren. Dominios que te enlazaban caducan, páginas que te citaban desaparecen o cambian su estructura. Un porcentaje significativo del PageRank acumulado se erosiona sin gestión activa. Monitorear y recuperar links perdidos mediante outreach de recuperación, actualización de URLs y análisis periódico del perfil es parte fundamental de cualquier estrategia de autoridad sostenida en el tiempo.' },
];

const styles = `
  .pr-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 96px 24px 120px;
  }
  .pr-post-container {
    max-width: 980px;
    margin: 0 auto;
  }

  .pr-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .pr-post-eyebrow.is-center { display: block; text-align: center; }

  .pr-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 28px;
  }

  .pr-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }

  .pr-post-accent { color: #38FEDA; }
  .pr-post-accent-strong { color: #38FEDA; font-weight: 700; }

  .pr-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 760px;
    margin: 0 auto 64px;
    text-align: center;
  }

  .pr-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .pr-post-p:last-child { margin-bottom: 0; }
  .pr-post-p strong { color: #FFFFFF; font-weight: 600; }
  .pr-post-p-accent {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    color: #38FEDA;
    margin: 8px 0 0;
  }

  .pr-post-section { margin: 0 0 80px; }

  /* Stats */
  .pr-post-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0 0 80px;
  }
  .pr-post-stat {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 24px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .pr-post-stat:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .pr-post-stat-num {
    font-size: 42px;
    font-weight: 700;
    line-height: 1;
    color: #38FEDA;
    margin: 0 0 12px;
  }
  .pr-post-stat-label {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* Two-col layouts */
  .pr-post-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
    margin-top: 40px;
  }

  /* Quote card */
  .pr-post-quote {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-left: 4px solid #38FEDA;
    border-radius: 12px;
    padding: 36px 32px;
  }
  .pr-post-quote-kicker {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 20px;
  }
  .pr-post-quote-text {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.4;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .pr-post-quote-attr {
    font-size: 13px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  /* Variables list (3 items with left border) */
  .pr-post-variables {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 24px;
  }
  .pr-post-variable {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-left: 3px solid #38FEDA;
    border-radius: 12px;
    padding: 22px 26px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .pr-post-variable:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    border-left-color: #38FEDA;
  }
  .pr-post-variable-title {
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 8px;
  }
  .pr-post-variable-body {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* Pull-quote full width */
  .pr-post-pullquote {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    color: #38FEDA;
    margin: 24px 0 0;
  }

  /* Compare table */
  .pr-post-table-intro {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 0 32px;
  }
  .pr-post-table-wrap {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
  }
  .pr-post-table {
    width: 100%;
    border-collapse: collapse;
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }
  .pr-post-table th {
    text-align: center;
    padding: 16px 18px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #38FEDA;
    background: rgba(56, 254, 218, 0.08);
    border-bottom: 1px solid rgba(56, 254, 218, 0.18);
  }
  .pr-post-table th:first-child { text-align: left; }
  .pr-post-table td {
    padding: 18px 20px;
    font-size: 14.5px;
    line-height: 1.55;
    border-bottom: 1px solid rgba(56, 254, 218, 0.08);
    text-align: center;
    color: rgba(255, 255, 255, 0.78);
  }
  .pr-post-table tr:last-child td { border-bottom: 0; }
  .pr-post-table td.is-type {
    text-align: left;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.88);
  }
  .pr-post-tag {
    font-weight: 600;
  }
  .pr-post-tag.is-good { color: #38FEDA; font-weight: 700; }
  .pr-post-tag.is-neutral { color: rgba(255, 255, 255, 0.72); }
  .pr-post-tag.is-muted { color: rgba(255, 255, 255, 0.4); }
  .pr-post-tag.is-bad { color: #FF6B6B; font-weight: 600; }

  /* Pillars (4 cards with huge number) */
  .pr-post-pillars {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 40px;
  }
  .pr-post-pillar {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 32px 30px;
    position: relative;
    overflow: hidden;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .pr-post-pillar:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .pr-post-pillar-num {
    font-size: 72px;
    font-weight: 800;
    line-height: 1;
    color: rgba(56, 254, 218, 0.14);
    margin: 0 0 -18px;
  }
  .pr-post-pillar-title {
    position: relative;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 14px;
  }
  .pr-post-pillar-body {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* Callout card (Link Decay data) */
  .pr-post-callout {
    margin-top: 24px;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 28px 30px;
  }
  .pr-post-callout-kicker {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 14px;
  }
  .pr-post-callout-body {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* Conclusion */
  .pr-post-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.25);
    border: 0;
    margin: 0 0 40px;
  }
  .pr-post-conclusion-quote {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    font-weight: 700;
    line-height: 1.25;
    color: #FFFFFF;
    margin: 0;
    letter-spacing: -0.01em;
  }
  .pr-post-conclusion-quote .pr-post-accent { color: #38FEDA; }
  .pr-post-conclusion-attr {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin: 28px 0 0;
  }
  .pr-post-conclusion-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.72);
    max-width: 720px;
    margin: 28px 0 0;
  }
  .pr-post-conclusion-footer {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.3);
    margin: 48px 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 20px;
  }

  /* CTA */
  .pr-post-cta {
    margin-top: 64px;
    text-align: center;
  }
  .pr-post-btn {
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
  .pr-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 960px) {
    .pr-post-stats { grid-template-columns: 1fr; }
    .pr-post-two-col { grid-template-columns: 1fr; }
    .pr-post-pillars { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .pr-post-page { padding: 64px 16px 88px; }
    .pr-post-h2 { font-size: 30px; }
    .pr-post-section { margin-bottom: 56px; }
    .pr-post-quote { padding: 28px 24px; }
    .pr-post-quote-text { font-size: 18px; }
    .pr-post-table th,
    .pr-post-table td { padding: 12px 12px; font-size: 13px; }
  }
  @media (max-width: 540px) {
    .pr-post-table-wrap { overflow-x: auto; }
  }
`;

export default function PageRankFuncionaPage() {
  useDocumentMeta({
    title: '¿Cómo funciona el Algoritmo PageRank de Google? | RankAgile',
    description:
      'Descubrí cómo funciona el algoritmo PageRank de Google: el sistema de autoridad distribuida que determina qué páginas merecen posicionar.',
  });

  return (
    <main className="pr-post-page">
      <style>{styles}</style>
      <article className="pr-post-container">
        {/* Hero */}
        <header>
          <p className="pr-post-eyebrow is-center">SEO Estratégico · RankAgile</p>
          <h1 className="pr-post-h1">
            PageRank:{' '}
            <span className="pr-post-accent">
              ¿Cómo funciona el Algoritmo PageRank de Google?
            </span>
          </h1>
          <p className="pr-post-lead">
            No es un mito ni una métrica obsoleta. Es la arquitectura de
            confianza sobre la que Google construyó su hegemonía. Entenderlo es
            la diferencia entre optimizar contenido y verdaderamente construir
            autoridad en mercados competitivos.
          </p>
        </header>

        {/* Stats */}
        <section className="pr-post-stats" aria-label="Datos clave sobre PageRank">
          {stats.map((s) => (
            <div key={s.value} className="pr-post-stat">
              <p className="pr-post-stat-num">{s.value}</p>
              <p className="pr-post-stat-label">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Qué es PageRank */}
        <section className="pr-post-section">
          <div className="pr-post-two-col">
            <div>
              <h2 className="pr-post-h2">Qué es PageRank realmente</h2>
              <p className="pr-post-p">
                En 1998, Larry Page y Sergey Brin diseñaron un algoritmo para
                ordenar la web con una premisa conceptualmente elegante:{' '}
                <strong>
                  una página es importante si otras páginas importantes apuntan
                  a ella.
                </strong>
              </p>
              <p className="pr-post-p">
                No era un sistema de palabras clave. Era un sistema de
                reputación distribuida. Un grafo de confianza donde cada
                enlace funcionaba como un voto, y el peso de ese voto dependía
                de quién lo emitía.
              </p>
              <p className="pr-post-p">
                Ese principio, refinado durante casi tres décadas, sigue siendo
                el núcleo del posicionamiento competitivo moderno. Ignorarlo es
                construir sobre arena.
              </p>
            </div>
            <aside className="pr-post-quote">
              <p className="pr-post-quote-kicker">Concepto fundacional</p>
              <p className="pr-post-quote-text">
                &ldquo;Una página es importante si otras páginas importantes
                apuntan a ella.&rdquo;
              </p>
              <p className="pr-post-quote-attr">
                — Larry Page &amp; Sergey Brin · The PageRank Citation Ranking,
                1998
              </p>
            </aside>
          </div>
        </section>

        {/* Cómo fluye la autoridad */}
        <section className="pr-post-section">
          <div className="pr-post-two-col">
            <div>
              <p className="pr-post-eyebrow">Tres variables que determinan el flujo</p>
              <div className="pr-post-variables">
                {variables.map((v) => (
                  <div key={v.title} className="pr-post-variable">
                    <h3 className="pr-post-variable-title">{v.title}</h3>
                    <p className="pr-post-variable-body">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="pr-post-h2">Cómo fluye la autoridad en la web</h2>
              <p className="pr-post-p">
                Cada enlace entrante transfiere una fracción de PageRank. Pero
                esa fracción no es fija: está determinada por tres variables
                que definen su peso real dentro del grafo.
              </p>
              <p className="pr-post-p">
                La mayoría de las estrategias de link building ignoran estas
                variables y optimizan solo por cantidad. El resultado es un
                perfil con volumen pero sin densidad de autoridad real.
              </p>
              <p className="pr-post-p-accent">
                No se trata de acumular links. Se trata de conectar nodos de
                alta autoridad hacia tu dominio.
              </p>
            </div>
          </div>
        </section>

        {/* Más links ≠ mejor */}
        <section className="pr-post-section">
          <h2 className="pr-post-h2">Más links ≠ mejor posicionamiento.</h2>
          <p className="pr-post-p">
            Eso era el SEO de 2005. Hoy, un perfil de enlaces construido sobre
            volumen sin criterio es una señal de manipulación, no de
            autoridad. Google lo detecta mediante sus sistemas de calidad de
            links y lo penaliza algorítmicamente.
          </p>
          <p className="pr-post-p">
            Un perfil de mil enlaces de directorios genéricos y foros sin
            tráfico puede posicionar peor que uno de veinte enlaces
            provenientes de medios especializados con autoridad real en el
            nicho.
          </p>
          <p className="pr-post-pullquote">
            El peso no está en la cantidad. Está en la calidad del nodo que te
            enlaza.
          </p>
        </section>

        {/* Tabla Calidad vs Cantidad */}
        <section className="pr-post-section">
          <h2 className="pr-post-h2">Calidad vs. Cantidad</h2>
          <p className="pr-post-table-intro">
            El mismo error, replicado en miles de estrategias SEO cada año.
          </p>
          <div className="pr-post-table-wrap">
            <table className="pr-post-table">
              <thead>
                <tr>
                  <th>Tipo de enlace</th>
                  <th>Autoridad transferida</th>
                  <th>Riesgo algorítmico</th>
                  <th>Impacto en rankings</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.type}>
                    <td className="is-type">{row.type}</td>
                    <td>
                      <span className={`pr-post-tag is-${row.transfer.tone}`}>
                        {row.transfer.label}
                      </span>
                    </td>
                    <td>
                      <span className={`pr-post-tag is-${row.risk.tone}`}>
                        {row.risk.label}
                      </span>
                    </td>
                    <td>
                      <span className={`pr-post-tag is-${row.impact.tone}`}>
                        {row.impact.label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cómo construir autoridad real */}
        <section className="pr-post-section">
          <h2 className="pr-post-h2">Cómo construir autoridad real</h2>
          <p className="pr-post-p">
            Principios operativos aplicados en campañas SEO internacionales
            donde la competencia ya lleva años de ventaja acumulada.
          </p>
          <div className="pr-post-pillars">
            {pillars.map((p) => (
              <div key={p.n} className="pr-post-pillar">
                <p className="pr-post-pillar-num" aria-hidden="true">{p.n}</p>
                <h3 className="pr-post-pillar-title">{p.title}</h3>
                <p className="pr-post-pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="pr-post-callout">
            <p className="pr-post-callout-kicker">Dato operativo</p>
            <p className="pr-post-callout-body">
              El 30% de los backlinks activos de un dominio promedio se pierden
              o degradan en el transcurso de un año sin gestión sistemática.
            </p>
          </div>
        </section>

        {/* Conclusión */}
        <section className="pr-post-section">
          <hr className="pr-post-divider" />
          <blockquote className="pr-post-conclusion-quote">
            &ldquo;Google no posiciona páginas. Posiciona{' '}
            <span className="pr-post-accent">nodos de confianza</span> dentro
            de un grafo de autoridad global.&rdquo;
          </blockquote>
          <p className="pr-post-conclusion-attr">— RankAgile</p>
          <p className="pr-post-conclusion-body">
            PageRank evolucionó. Se volvió más sofisticado, más contextual, más
            difícil de manipular. Pero su lógica central no cambió: la
            autoridad se construye desde afuera hacia adentro, con criterio,
            con datos y con una visión de largo plazo sobre el grafo de la web.
          </p>
          <p className="pr-post-conclusion-footer">
            rankagile.com · SEO Estratégico Internacional
          </p>
        </section>

        {/* CTA */}
        <div className="pr-post-cta">
          <a className="pr-post-btn" href="/contacto/">Hablar con un especialista</a>
        </div>
      </article>
    </main>
  );
}
