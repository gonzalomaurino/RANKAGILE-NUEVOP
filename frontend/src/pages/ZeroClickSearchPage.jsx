import useDocumentMeta from '../hooks/useDocumentMeta.js';

const googleReasons = [
  { n: '1', title: 'Velocidad de respuesta', body: 'Los usuarios demandan información instantánea. Mostrar respuestas directamente elimina fricciones y reduce el tiempo de búsqueda exponencialmente.' },
  { n: '2', title: 'Optimización móvil', body: 'El 70% de las búsquedas provienen de dispositivos móviles. Las respuestas directas facilitan la navegación en pantallas reducidas y conexiones inestables.' },
  { n: '3', title: 'Inteligencia artificial avanzada', body: 'Los motores de búsqueda actuales utilizan modelos de procesamiento de lenguaje natural que pueden interpretar consultas complejas y sintetizar respuestas precisas sin intermediarios.' },
];

const compare = [
  ['Objetivo primario', 'Maximizar clics al sitio web', 'Ganar visibilidad en SERP directa'],
  ['Métrica clave', 'CTR (Click-Through Rate)', 'Impresiones + autoridad de marca'],
  ['Formato contenido', 'Artículos extensos optimizados', 'Respuestas concisas + datos estructurados'],
  ['Estrategia técnica', 'Keywords + backlinks', 'Schema Markup + E-E-A-T'],
  ['Horizonte temporal', 'Conversión en página propia', 'Brand awareness + retención mental'],
];

const impacts = [
  { title: 'Erosión del tráfico orgánico', body: 'Los sitios web experimentan reducciones significativas en visitas pese a mantener posiciones de ranking. El usuario obtiene la respuesta sin necesidad de navegación adicional.' },
  { title: 'Hipercompetencia por Featured Snippets', body: 'Los fragmentos destacados y resultados enriquecidos concentran la atención visual. Solo el contenido superlativo logra posicionarse en estos espacios privilegiados.' },
  { title: 'Autoridad como moneda', body: 'Para que Google extraiga y cite información de un sitio, debe percibirlo como fuente confiable y autoritativa en su nicho temático.' },
];

const steps = [
  { n: '01', title: 'Arquitectura de respuestas directas', body: 'Estructurar contenido respondiendo explícitamente preguntas comunes: qué es, cómo funciona, por qué, cuándo, dónde. Usar encabezados H2 y H3 que reflejen queries naturales.' },
  { n: '02', title: 'Formato extractable', body: 'Los fragmentos destacados priorizan listas numeradas, tablas comparativas y definiciones precisas de 40-60 palabras. Formatear contenido para facilitar la extracción algorítmica.' },
  { n: '03', title: 'Implementación de Schema Markup', body: 'Datos estructurados (JSON-LD) comunican a los motores de búsqueda qué tipo de contenido ofreces: artículos, productos, recetas, FAQs, eventos. Aumenta dramáticamente probabilidad de resultados enriquecidos.' },
  { n: '04', title: 'Optimización por intención de búsqueda', body: 'Transcender keywords individuales. Comprender la intención subyacente: informativa (conocer algo), transaccional (comprar algo), navegacional (encontrar sitio específico). Alinear contenido con intención real.' },
  { n: '05', title: 'Construcción de autoridad temática', body: 'Google prioriza sitios que demuestran expertise profunda. Crear ecosistemas de contenido interrelacionado sobre nichos específicos. Enlaces internos estratégicos. Consistencia editorial que evidencia dominio temático.' },
];

const styles = `
  .zc-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 96px 24px 120px;
  }
  .zc-post-container {
    max-width: 980px;
    margin: 0 auto;
  }

  .zc-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .zc-post-eyebrow.is-center {
    display: block;
    text-align: center;
  }

  .zc-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 28px;
  }

  .zc-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .zc-post-h2.is-center { text-align: center; }

  .zc-post-accent { color: #38FEDA; }

  .zc-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 720px;
    margin: 0 auto 72px;
    text-align: center;
  }

  .zc-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .zc-post-p:last-child { margin-bottom: 0; }
  .zc-post-p strong { color: #FFFFFF; font-weight: 600; }
  .zc-post-p strong.is-accent { color: #38FEDA; font-weight: 600; }

  .zc-post-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.18);
    border: 0;
    margin: 56px auto;
    max-width: 320px;
  }

  .zc-post-section { margin: 0 0 80px; }

  /* Figure / images */
  .zc-post-figure {
    margin: 0 0 40px;
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
    background: rgba(56, 254, 218, 0.04);
    transition: border-color 200ms ease;
  }
  .zc-post-figure:hover { border-color: rgba(56, 254, 218, 0.45); }
  .zc-post-figure img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* Google reasons - 3 cards */
  .zc-post-reasons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 36px;
  }
  .zc-post-reason {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 28px 24px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .zc-post-reason:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .zc-post-reason-num {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #38FEDA;
    line-height: 1;
    margin: 0 0 14px;
  }
  .zc-post-reason-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 12px;
  }
  .zc-post-reason-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  /* Compare table */
  .zc-post-table-wrap {
    margin-top: 40px;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
  }
  .zc-post-table {
    width: 100%;
    border-collapse: collapse;
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }
  .zc-post-table th {
    text-align: left;
    padding: 18px 22px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #38FEDA;
    background: rgba(56, 254, 218, 0.08);
    border-bottom: 1px solid rgba(56, 254, 218, 0.18);
  }
  .zc-post-table td {
    padding: 18px 22px;
    font-size: 15px;
    line-height: 1.6;
    border-bottom: 1px solid rgba(56, 254, 218, 0.1);
  }
  .zc-post-table tr:last-child td { border-bottom: 0; }
  .zc-post-table td.is-key { font-weight: 500; color: rgba(255, 255, 255, 0.92); }
  .zc-post-table td.is-val { font-weight: 300; color: rgba(255, 255, 255, 0.72); }

  /* Impact list */
  .zc-post-impacts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 36px;
  }
  .zc-post-impact {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    border-left: 3px solid #38FEDA;
    padding: 24px 26px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .zc-post-impact:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    border-left-color: #38FEDA;
  }
  .zc-post-impact-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 10px;
  }
  .zc-post-impact-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15.5px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  /* Steps */
  .zc-post-steps {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 40px;
  }
  .zc-post-step {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 28px 32px;
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: 20px;
    align-items: start;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .zc-post-step:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .zc-post-step-num {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #38FEDA;
    line-height: 1;
    margin: 0;
  }
  .zc-post-step-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 10px;
  }
  .zc-post-step-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  /* Conclusion */
  .zc-post-conclusion {
    margin-top: 40px;
  }
  .zc-post-conclusion .zc-post-p {
    text-align: center;
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
  }

  /* CTA */
  .zc-post-cta {
    margin-top: 64px;
    text-align: center;
  }
  .zc-post-btn {
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
  .zc-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 960px) {
    .zc-post-reasons { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .zc-post-page { padding: 64px 16px 88px; }
    .zc-post-h2 { font-size: 30px; }
    .zc-post-section { margin-bottom: 56px; }
    .zc-post-step { grid-template-columns: 1fr; padding: 24px; }
    .zc-post-table th,
    .zc-post-table td { padding: 14px 16px; font-size: 13px; }
  }
  @media (max-width: 540px) {
    .zc-post-table-wrap { overflow-x: auto; }
  }
`;

export default function ZeroClickSearchPage() {
  useDocumentMeta({
    title: 'Zero-Click Search: Tendencia SEO',
    description:
      '¿Búsquedas sin clic? En RankAgile adaptamos tu SEO a la era de la IA y el Zero-Click Search para maximizar visibilidad sin depender del clic.',
  });

  return (
    <main className="zc-post-page">
      <style>{styles}</style>
      <article className="zc-post-container">
        {/* Hero */}
        <header>
          <p className="zc-post-eyebrow is-center">Tendencias SEO · 2026</p>
          <h1 className="zc-post-h1">
            Zero-Click Search:{' '}
            <span className="zc-post-accent">La Revolución Silenciosa</span>{' '}
            que Redefine el SEO
          </h1>
          <p className="zc-post-lead">
            El paradigma de la búsqueda está mutando. Los usuarios obtienen
            respuestas sin abandonar Google, los clics orgánicos se evaporan y
            el SEO tradicional enfrenta su mayor disrupción. Bienvenidos a la
            era del Zero-Click Search.
          </p>
        </header>

        {/* ¿Qué es? */}
        <section className="zc-post-section">
          <span className="zc-post-eyebrow">Anatomía del cambio</span>
          <h2 className="zc-post-h2">¿Qué es la Búsqueda Sin Clic?</h2>
          <p className="zc-post-p">
            La búsqueda sin clic (Zero-Click Search) representa un cambio
            fundamental en cómo los usuarios interactúan con los motores de
            búsqueda. Ocurre cuando un usuario realiza una consulta y obtiene
            la respuesta directamente en la página de resultados (SERP), sin
            necesidad de hacer clic en ningún enlace externo.
          </p>
          <p className="zc-post-p">
            Este fenómeno se materializa a través de múltiples formatos
            enriquecidos que Google despliega estratégicamente: respuestas
            rápidas, fragmentos destacados (Featured Snippets), paneles de
            conocimiento, calculadoras integradas, resultados deportivos en
            tiempo real, información meteorológica, conversores de unidades y
            una creciente variedad de widgets especializados.
          </p>
        </section>

        {/* Estrategia de Google + imagen */}
        <section className="zc-post-section">
          <figure className="zc-post-figure">
            <img
              src="/wp-content/uploads/2026/03/Gemini_Generated_Image_jsskfcjsskfcjssk-1.png"
              alt="Ilustración conceptual de una interfaz de inteligencia artificial resolviendo consultas de usuario, representando el fenómeno de Zero-Click Search y la estrategia GEO de RankAgile."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <span className="zc-post-eyebrow">La estrategia de Google</span>
          <h2 className="zc-post-h2">
            ¿Por Qué Google Impulsa las Búsquedas Sin Clic?
          </h2>
          <div className="zc-post-reasons">
            {googleReasons.map((r) => (
              <div key={r.n} className="zc-post-reason">
                <p className="zc-post-reason-num">{r.n}</p>
                <h3 className="zc-post-reason-title">{r.title}</h3>
                <p className="zc-post-reason-body">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparativa */}
        <section className="zc-post-section">
          <span className="zc-post-eyebrow">Análisis comparativo</span>
          <h2 className="zc-post-h2">SEO Tradicional vs. Era Zero-Click</h2>
          <div className="zc-post-table-wrap">
            <table className="zc-post-table">
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>SEO Tradicional</th>
                  <th>Era Zero-Click</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([aspect, trad, zc]) => (
                  <tr key={aspect}>
                    <td className="is-key">{aspect}</td>
                    <td className="is-val">{trad}</td>
                    <td className="is-val">{zc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Impacto */}
        <section className="zc-post-section">
          <span className="zc-post-eyebrow">Consecuencias medibles</span>
          <h2 className="zc-post-h2">Impacto en el Ecosistema SEO</h2>
          <div className="zc-post-impacts">
            {impacts.map((i) => (
              <div key={i.title} className="zc-post-impact">
                <h3 className="zc-post-impact-title">{i.title}</h3>
                <p className="zc-post-impact-body">{i.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Estrategias / 5 pasos */}
        <section className="zc-post-section">
          <span className="zc-post-eyebrow">Estrategias de adaptación</span>
          <h2 className="zc-post-h2">Cómo Optimizar Para la Era Zero-Click</h2>
          <div className="zc-post-steps">
            {steps.map((s) => (
              <div key={s.n} className="zc-post-step">
                <p className="zc-post-step-num" aria-hidden="true">{s.n}</p>
                <div>
                  <h3 className="zc-post-step-title">{s.title}</h3>
                  <p className="zc-post-step-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* El Futuro del SEO */}
        <section className="zc-post-section">
          <span className="zc-post-eyebrow">Horizonte próximo</span>
          <h2 className="zc-post-h2">
            El Futuro del SEO: IA y Búsquedas Generativas
          </h2>
          <p className="zc-post-p">
            La tendencia de respuestas directas no solo persistirá sino que se
            intensificará exponencialmente. Google integra Search Generative
            Experience (SGE), Microsoft potencia Bing con GPT-4, y OpenAI
            posiciona ChatGPT Search como alternativa disruptiva.
          </p>
          <p className="zc-post-p">
            Los motores de inteligencia artificial no se limitan a indexar:
            sintetizan, analizan y generan respuestas completas sin requerir
            navegación externa. El SEO evoluciona hacia un paradigma nuevo
            donde la visibilidad se mide en autoridad citada, no en tráfico
            capturado.
          </p>
          <figure className="zc-post-figure" style={{ marginTop: 40, marginBottom: 0 }}>
            <img
              src="/wp-content/uploads/2026/03/Gemini_Generated_Image_xsg6kfxsg6kfxsg6.png"
              alt="Interfaz de búsqueda impulsada por IA sintetizando respuestas generativas, representando el futuro del SEO."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        {/* Conclusión */}
        <section className="zc-post-section zc-post-conclusion">
          <p className="zc-post-eyebrow is-center">Síntesis final</p>
          <h2 className="zc-post-h2 is-center">La Evolución, No El Fin</h2>
          <hr className="zc-post-divider" />
          <p className="zc-post-p">
            La búsqueda sin clic no representa el apocalipsis del SEO, sino su
            metamorfosis inevitable. En este nuevo paradigma, el éxito no se
            mide exclusivamente en clics capturados sino en autoridad
            reconocida, visibilidad ganada y confianza construida.
          </p>
          <p className="zc-post-p">
            Los sitios que prosperen serán aquellos capaces de ofrecer
            respuestas cristalinas, estructuradas con precisión técnica y
            respaldadas por autoridad demostrable.{' '}
            <strong className="is-accent">
              El objetivo ya no es solo conseguir clics, sino convertirse en la
              fuente que los motores de búsqueda citan cuando responden al
              mundo.
            </strong>
          </p>
        </section>

        {/* CTA */}
        <div className="zc-post-cta">
          <a className="zc-post-btn" href="/contacto/">Hablar con un especialista</a>
        </div>
      </article>
    </main>
  );
}
