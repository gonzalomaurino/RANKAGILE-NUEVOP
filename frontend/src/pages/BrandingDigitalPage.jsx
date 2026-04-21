import useDocumentMeta from '../hooks/useDocumentMeta.js';

const stats = [
  { value: '67%', label: 'de las marcas no son interpretables para sistemas de IA' },
  { value: '3-6', label: 'meses para ver impacto en tráfico orgánico calificado' },
  { value: '2026', label: 'año del SEO híbrido: Google + Ecosistema IA' },
  { value: '100%', label: 'de las marcas líderes usan arquitectura semántica' },
];

const steps = [
  { n: '01', title: 'Auditoría de Autoridad', body: 'Analiza cómo te ven actualmente los buscadores y las IAs. ¿Eres una autoridad en tu tema o solo un proveedor más? Evalúa tu posicionamiento semántico, la calidad de tus datos estructurados y tu presencia en fragmentos destacados.' },
  { n: '02', title: 'Definición de Territorios Semánticos', body: 'Identifica las palabras clave e intenciones de búsqueda donde tu marca debe ser la respuesta definitiva. No se trata de ranking genérico, sino de dominar nichos específicos donde tu expertise es incuestionable.' },
  { n: '03', title: 'Optimización de la Salud del Sitio', body: 'Elimina errores técnicos que frenan la indexación. Una marca profesional no puede permitirse un sitio lento, roto o con problemas de rastreo. La arquitectura técnica es el fundamento invisible de tu autoridad digital.' },
  { n: '04', title: 'Generación de Contenido con Visión de Negocio', body: 'No escribas por escribir. Cada pieza de contenido debe reforzar un ángulo de tu autoridad de marca y responder a intenciones específicas de búsqueda que generan valor comercial real.' },
  { n: '05', title: 'Monitoreo y Escalado Predictivo', body: 'Usa dashboards y análisis predictivos para medir el impacto real de tu branding en el tráfico calificado. El branding digital es una disciplina de mejora continua basada en datos, no en intuición.' },
];

const pillars = [
  { title: 'Identidad Visionaria y Técnica', body: 'Tu marca debe proyectar liderazgo y dominio tecnológico, actuando como un referente en su sector. La personalidad de marca no es solo estética: es la combinación de expertise técnico y visión estratégica.' },
  { title: 'Adaptabilidad Algorítmica', body: 'El entorno digital cambia semanalmente. Una marca fuerte es aquella que evoluciona con el algoritmo, manteniendo su esencia pero optimizando continuamente su entrega y relevancia.' },
];

const compare = [
  ['Enfoque Principal', 'Reconocimiento visual', 'Autoridad y relevancia temática'],
  ['Canal Clave', 'Medios masivos / Redes Sociales', 'Ecosistema híbrido (Google + IA)'],
  ['Interacción', 'Unidireccional', 'Conversacional y predictiva'],
  ['Medición de Éxito', 'Recordación de marca', 'Citas en LLMs y ranking orgánico'],
  ['Activos Clave', 'Logotipo, paleta de colores, slogan', 'Schema, arquitectura semántica, contenido estructurado'],
];

const vectors = [
  { n: '01', title: 'Intención de Búsqueda', body: '¿Qué problema real está intentando resolver el usuario? Tu contenido debe responder con precisión quirúrgica a intenciones específicas.' },
  { n: '02', title: 'Relevancia Semántica', body: '¿Cómo se conecta tu contenido con otros conceptos de autoridad en tu nicho? La IA evalúa relaciones entre entidades.' },
  { n: '03', title: 'Visibilidad Sostenible', body: 'Crear activos digitales que mantengan su valor a pesar de las actualizaciones de algoritmo. La autoridad verdadera es resiliente.' },
];

const styles = `
  .bd-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 96px 24px 120px;
  }
  .bd-post-container {
    max-width: 980px;
    margin: 0 auto;
  }

  .bd-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .bd-post-eyebrow.is-center {
    display: block;
    text-align: center;
  }

  .bd-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 28px;
  }

  .bd-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .bd-post-h2.is-center { text-align: center; }

  .bd-post-h3 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 0 0 14px;
  }

  .bd-post-accent { color: #38FEDA; }

  .bd-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 760px;
    margin: 0 auto 56px;
    text-align: center;
  }

  .bd-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .bd-post-p:last-child { margin-bottom: 0; }
  .bd-post-p strong { color: #FFFFFF; font-weight: 600; }
  .bd-post-p strong.is-accent { color: #38FEDA; font-weight: 700; }
  .bd-post-p.is-center { text-align: center; }

  .bd-post-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.18);
    border: 0;
    margin: 56px auto;
    max-width: 320px;
  }

  /* Stats grid */
  .bd-post-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 0 80px;
  }
  .bd-post-stat {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 20px;
    text-align: center;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .bd-post-stat:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .bd-post-stat-num {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 1;
    color: #38FEDA;
    margin: 0 0 10px;
  }
  .bd-post-stat-label {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* Sections */
  .bd-post-section {
    margin: 0 0 80px;
  }

  /* Steps */
  .bd-post-steps {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 40px;
  }
  .bd-post-step {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 36px;
    position: relative;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .bd-post-step:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .bd-post-step-num {
    position: absolute;
    top: 18px;
    right: 28px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 64px;
    font-weight: 800;
    line-height: 1;
    color: rgba(56, 254, 218, 0.18);
    margin: 0;
    pointer-events: none;
  }
  .bd-post-step-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 12px;
    padding-right: 60px;
  }
  .bd-post-step-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  /* Pillars */
  .bd-post-pillars {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 40px;
  }
  .bd-post-pillar {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 36px 32px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .bd-post-pillar:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .bd-post-pillar-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 16px;
  }
  .bd-post-pillar-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  /* Compare table */
  .bd-post-table-wrap {
    margin-top: 40px;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
  }
  .bd-post-table {
    width: 100%;
    border-collapse: collapse;
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }
  .bd-post-table th {
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
  .bd-post-table td {
    padding: 18px 22px;
    font-size: 15px;
    line-height: 1.6;
    border-bottom: 1px solid rgba(56, 254, 218, 0.1);
  }
  .bd-post-table tr:last-child td { border-bottom: 0; }
  .bd-post-table td.is-key { font-weight: 500; color: rgba(255, 255, 255, 0.92); }
  .bd-post-table td.is-val { font-weight: 300; color: rgba(255, 255, 255, 0.72); }

  /* Vectors (3 col with circle numbers) */
  .bd-post-vectors {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
  }
  .bd-post-vector {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 28px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .bd-post-vector:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .bd-post-vector-num {
    width: 56px;
    height: 56px;
    border-radius: 999px;
    background: rgba(56, 254, 218, 0.12);
    border: 1px solid rgba(56, 254, 218, 0.35);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #38FEDA;
    margin: 0 0 22px;
  }
  .bd-post-vector-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 12px;
  }
  .bd-post-vector-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  /* Conclusion */
  .bd-post-conclusion {
    margin-top: 40px;
  }

  /* CTA final */
  .bd-post-cta {
    margin-top: 64px;
    text-align: center;
  }
  .bd-post-btn {
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
  .bd-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 960px) {
    .bd-post-stats { grid-template-columns: repeat(2, 1fr); }
    .bd-post-vectors { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .bd-post-page { padding: 64px 16px 88px; }
    .bd-post-h2 { font-size: 30px; }
    .bd-post-pillars { grid-template-columns: 1fr; }
    .bd-post-section { margin-bottom: 56px; }
    .bd-post-step-num { font-size: 48px; top: 16px; right: 22px; }
    .bd-post-step-title { padding-right: 50px; }
    .bd-post-table th,
    .bd-post-table td { padding: 14px 16px; font-size: 13px; }
  }
  @media (max-width: 540px) {
    .bd-post-stats { grid-template-columns: 1fr; }
    .bd-post-table-wrap { overflow-x: auto; }
  }
`;

export default function BrandingDigitalPage() {
  useDocumentMeta({
    title: 'Branding Digital: Relevancia en la Era de la Inteligencia Artificial',
    description:
      'Escala tu marca con lo último en branding digital. Implementamos estrategias basadas en datos e IA para que tu negocio sea encontrado.',
  });

  return (
    <main className="bd-post-page">
      <style>{styles}</style>
      <article className="bd-post-container">
        {/* Hero */}
        <header>
          <p className="bd-post-eyebrow is-center">BRANDING · IA · AUTORIDAD DIGITAL</p>
          <h1 className="bd-post-h1">
            Branding Digital:{' '}
            <span className="bd-post-accent">El Arte de Ser Relevante</span> en
            la Era de la Inteligencia Artificial
          </h1>
          <p className="bd-post-lead">
            En un ecosistema digital saturado, el branding ha dejado de ser una
            cuestión estética. Hoy, el éxito depende de ser encontrada,
            comprendida y recomendada tanto por humanos como por algoritmos de
            inteligencia artificial.
          </p>
        </header>

        {/* Stats */}
        <section className="bd-post-stats" aria-label="Métricas clave">
          {stats.map((s) => (
            <div key={s.value} className="bd-post-stat">
              <p className="bd-post-stat-num">{s.value}</p>
              <p className="bd-post-stat-label">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Evolución */}
        <section className="bd-post-section">
          <span className="bd-post-eyebrow">La Evolución</span>
          <h2 className="bd-post-h2">De la Imagen a la Autoridad Cognitiva</h2>
          <h3 className="bd-post-h3">El Cambio de Paradigma: SEO Híbrido</h3>
          <p className="bd-post-p">
            RankAgile define este nuevo escenario como un enfoque híbrido:{' '}
            <strong>
              visibilidad orgánica en Google sumada a la relevancia en motores
              de respuesta de IA
            </strong>
            . Para lograr esto, el branding digital debe apoyarse en una
            estructura de datos impecable y una narrativa coherente que los
            algoritmos puedan procesar como una fuente de verdad confiable.
          </p>
        </section>

        {/* 5 Pasos */}
        <section className="bd-post-section">
          <span className="bd-post-eyebrow">Metodología</span>
          <h2 className="bd-post-h2">
            Construye tu Presencia Digital en{' '}
            <span className="bd-post-accent">5 Pasos</span>
          </h2>
          <div className="bd-post-steps">
            {steps.map((s) => (
              <div key={s.n} className="bd-post-step">
                <span className="bd-post-step-num" aria-hidden="true">{s.n}</span>
                <h3 className="bd-post-step-title">{s.title}</h3>
                <p className="bd-post-step-body">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2 Pilares */}
        <section className="bd-post-section">
          <span className="bd-post-eyebrow">Pilares Estratégicos</span>
          <h2 className="bd-post-h2">
            Los 2 Pilares de una Estrategia{' '}
            <span className="bd-post-accent">Exitosa</span>
          </h2>
          <div className="bd-post-pillars">
            {pillars.map((p) => (
              <div key={p.title} className="bd-post-pillar">
                <h3 className="bd-post-pillar-title">{p.title}</h3>
                <p className="bd-post-pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparativa */}
        <section className="bd-post-section">
          <span className="bd-post-eyebrow">Comparativa</span>
          <h2 className="bd-post-h2">
            Branding Tradicional vs{' '}
            <span className="bd-post-accent">Branding Digital con IA</span>
          </h2>
          <div className="bd-post-table-wrap">
            <table className="bd-post-table">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Branding Tradicional</th>
                  <th>Branding Digital con IA</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([key, trad, ia]) => (
                  <tr key={key}>
                    <td className="is-key">{key}</td>
                    <td className="is-val">{trad}</td>
                    <td className="is-val">{ia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Vectores IA */}
        <section className="bd-post-section">
          <span className="bd-post-eyebrow">El Rol de la IA</span>
          <h2 className="bd-post-h2">
            Inteligencia Artificial: Un Nuevo{' '}
            <span className="bd-post-accent">Entorno de Descubrimiento</span>
          </h2>
          <p className="bd-post-p">
            La inteligencia artificial no es solo una herramienta de creación;
            es un nuevo entorno de descubrimiento donde las marcas deben estar
            presentes. Los usuarios ya no solo googlan, ahora{' '}
            <strong>preguntan a ChatGPT, Perplexity y Gemini</strong>.
          </p>
          <p className="bd-post-p">
            El branding digital moderno debe optimizarse para tres vectores
            fundamentales:
          </p>
          <div className="bd-post-vectors">
            {vectors.map((v) => (
              <div key={v.n} className="bd-post-vector">
                <div className="bd-post-vector-num" aria-hidden="true">{v.n}</div>
                <h3 className="bd-post-vector-title">{v.title}</h3>
                <p className="bd-post-vector-body">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusión */}
        <section className="bd-post-section bd-post-conclusion">
          <p className="bd-post-eyebrow is-center">CONCLUSIÓN</p>
          <h2 className="bd-post-h2 is-center">
            El Futuro del Posicionamiento es{' '}
            <span className="bd-post-accent">Híbrido</span>
          </h2>
          <hr className="bd-post-divider" />
          <p className="bd-post-p is-center">
            El branding digital en la actualidad es una disciplina de alta
            precisión que combina la creatividad humana con el rigor de la
            ingeniería de datos. Para liderar tu industria, tu marca debe ser
            capaz de evolucionar a la misma velocidad que los algoritmos, sin
            perder la transparencia y la excelencia técnica que generan
            confianza en el usuario final.
          </p>
          <p className="bd-post-p is-center">
            En RankAgile, entendemos que{' '}
            <strong className="is-accent">
              el futuro del posicionamiento es híbrido
            </strong>
            . No se trata solo de aparecer en los resultados; se trata de ser la
            opción recomendada por la inteligencia que mueve el mundo digital.
          </p>
          <p className="bd-post-p is-center">
            Si tu estrategia actual se siente fragmentada o carece de visión de
            negocio, es momento de transformar tu presencia digital en un activo
            que escale y lidere de manera sostenible.{' '}
            <strong>El SEO ha evolucionado, y tu marca debe hacerlo con él.</strong>
          </p>
        </section>

        {/* CTA */}
        <div className="bd-post-cta">
          <a className="bd-post-btn" href="/contacto/">Hablar con un especialista</a>
        </div>
      </article>
    </main>
  );
}
