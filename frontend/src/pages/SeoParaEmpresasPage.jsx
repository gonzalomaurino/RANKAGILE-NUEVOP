import useDocumentMeta from '../hooks/useDocumentMeta.js';

const heroBlurbs = [
  { title: 'Optimización Avanzada', body: 'Implementamos estrategias de SEO personalizadas para maximizar tu alcance en línea.' },
  { title: 'Análisis de Competencia', body: 'Conocé a tus competidores y superá su posicionamiento con tácticas efectivas.' },
];

const features = [
  { title: 'Investigación de Palabras Clave', body: 'Identificamos las palabras clave más relevantes para tu industria y optimizamos tu contenido en torno a ellas.' },
  { title: 'Optimización On-Page', body: 'Aseguramos que cada página de tu sitio esté optimizada para los motores de búsqueda, desde los títulos hasta las meta descripciones.' },
  { title: 'SEO Técnico', body: 'Mejoramos la estructura de tu sitio web para facilitar la indexación por parte de los motores de búsqueda, asegurando una experiencia de usuario óptima.' },
];

const steps = [
  { n: '01', title: 'Análisis de Palabras Clave', body: 'Identificamos las palabras clave más relevantes para tu negocio, asegurando que estén alineadas con las búsquedas de tus clientes potenciales.' },
  { n: '02', title: 'Optimización On-Page', body: 'Mejoramos el contenido y la estructura de tu sitio web para que sea más atractivo tanto para los usuarios como para los motores de búsqueda.' },
  { n: '03', title: 'Construcción de Enlaces', body: 'Desarrollamos una estrategia de enlaces de calidad para aumentar la autoridad de tu sitio y mejorar su posicionamiento en los resultados de búsqueda.' },
];

const faqs = [
  { q: '¿Qué es el SEO y por qué es importante para mi negocio?', a: 'El SEO, u optimización para motores de búsqueda, es crucial para mejorar la visibilidad de tu negocio en línea, atrayendo más tráfico y potenciales clientes.' },
  { q: '¿Cuánto tiempo tarda en ver resultados con SEO?', a: 'Los resultados del SEO pueden variar, pero generalmente se empiezan a notar mejoras significativas entre 3 a 6 meses de implementación constante.' },
  { q: '¿Es el SEO adecuado para cualquier tipo de negocio?', a: 'Sí, el SEO es adaptable a cualquier industria y puede ser personalizado para satisfacer las necesidades específicas de cada negocio.' },
  { q: '¿Necesito contratar a un experto en SEO?', a: 'Contar con un experto en SEO puede acelerar el proceso y asegurar que se sigan las mejores prácticas, maximizando los resultados.' },
  { q: '¿Cómo puedo medir el éxito de mi estrategia de SEO?', a: 'El éxito del SEO se mide a través de métricas como el aumento en el tráfico orgánico, la mejora en el ranking de palabras clave y el incremento en conversiones.' },
];

const styles = `
  .spe-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 32px 24px 120px;
  }
  .spe-post-container {
    max-width: 1080px;
    margin: 0 auto;
  }

  .spe-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .spe-post-eyebrow.is-center {
    display: block;
    text-align: center;
  }

  .spe-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }

  .spe-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .spe-post-h2.is-center { text-align: center; }

  .spe-post-h3 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.25;
    color: #FFFFFF;
    margin: 0 0 24px;
  }

  .spe-post-accent { color: #38FEDA; }

  .spe-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0 0 28px;
  }

  .spe-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .spe-post-p:last-child { margin-bottom: 0; }
  .spe-post-p.is-center { text-align: center; }

  .spe-post-btn {
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
  .spe-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  .spe-post-section { margin: 0 0 80px; }

  /* Hero grid (texto + imagen) */
  .spe-post-hero {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 48px;
    align-items: center;
    padding: 48px 0 56px;
  }
  .spe-post-hero-blurbs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 32px 0 0;
  }
  .spe-post-blurb {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 20px 22px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .spe-post-blurb:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .spe-post-blurb-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 8px;
  }
  .spe-post-blurb-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }
  .spe-post-figure {
    margin: 0;
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 16px;
    overflow: hidden;
    background: rgba(56, 254, 218, 0.04);
    transition: border-color 200ms ease;
  }
  .spe-post-figure:hover { border-color: rgba(56, 254, 218, 0.45); }
  .spe-post-figure img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* Intro centered */
  .spe-post-intro {
    text-align: center;
    max-width: 820px;
    margin: 0 auto;
  }

  /* Features 3 cols */
  .spe-post-features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 40px;
  }
  .spe-post-feature {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 28px 26px;
    text-align: center;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .spe-post-feature:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .spe-post-feature-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #38FEDA;
    margin: 0 0 12px;
  }
  .spe-post-feature-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* Steps (3 numbered) */
  .spe-post-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    margin-top: 40px;
  }
  .spe-post-step {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 30px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .spe-post-step:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .spe-post-step-num {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 44px;
    font-weight: 800;
    line-height: 1;
    color: #38FEDA;
    margin: 0 0 18px;
    opacity: 0.85;
  }
  .spe-post-step-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 10px;
  }
  .spe-post-step-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* FAQ layout */
  .spe-post-faq-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    align-items: start;
    margin-top: 40px;
  }
  .spe-post-faq {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .spe-post-faq-item {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .spe-post-faq-item[open],
  .spe-post-faq-item:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .spe-post-faq-summary {
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
  .spe-post-faq-summary::-webkit-details-marker { display: none; }
  .spe-post-faq-summary::after {
    content: "+";
    color: #38FEDA;
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    flex: 0 0 auto;
  }
  .spe-post-faq-item[open] .spe-post-faq-summary::after { content: "–"; }
  .spe-post-faq-body {
    padding: 0 24px 22px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }
  .spe-post-faq-aside {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 16px;
    padding: 32px 28px;
    text-align: center;
    position: sticky;
    top: 100px;
  }

  /* Success grid (img + text) */
  .spe-post-success {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    align-items: center;
    margin-top: 40px;
  }

  /* CTA final card */
  .spe-post-cta-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    text-align: center;
    transition: border-color 200ms ease;
  }
  .spe-post-cta-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }
  .spe-post-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.18);
    border: 0;
    margin: 0 0 40px;
  }
  .spe-post-cta-text {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 620px;
    margin: 0 auto 28px;
  }

  @media (max-width: 960px) {
    .spe-post-hero { grid-template-columns: 1fr; gap: 32px; }
    .spe-post-features-grid { grid-template-columns: 1fr; }
    .spe-post-steps { grid-template-columns: 1fr; }
    .spe-post-faq-grid { grid-template-columns: 1fr; gap: 24px; }
    .spe-post-faq-aside { position: static; }
    .spe-post-success { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .spe-post-page { padding: 16px 16px 88px; }
    .spe-post-h2 { font-size: 30px; }
    .spe-post-section { margin-bottom: 56px; }
    .spe-post-hero-blurbs { grid-template-columns: 1fr; }
    .spe-post-cta-card { padding: 40px 24px; }
  }
`;

export default function SeoParaEmpresasPage() {
  useDocumentMeta({
    title: 'SEO Para Empresas | RankAgile',
    description:
      'Descubrí cómo aplicar SEO Para Empresas con estrategias prácticas, ejemplos y consejos accionables para mejorar tu posicionamiento en Google.',
  });

  return (
    <main className="spe-post-page">
      <style>{styles}</style>
      <article className="spe-post-container">
        {/* Hero */}
        <header className="spe-post-hero">
          <div>
            <span className="spe-post-eyebrow">SEO para Empresas</span>
            <h1 className="spe-post-h1">
              SEO para Empresas:{' '}
              <span className="spe-post-accent">Potencia tu Visibilidad Online</span>
            </h1>
            <p className="spe-post-lead">
              Descubrí cómo el SEO para empresas puede transformar tu negocio,
              mejorando tu presencia digital y atrayendo más clientes
              potenciales.
            </p>
            <a className="spe-post-btn" href="/contacto/">Descubrí más</a>
            <div className="spe-post-hero-blurbs">
              {heroBlurbs.map((b) => (
                <div key={b.title} className="spe-post-blurb">
                  <p className="spe-post-blurb-title">{b.title}</p>
                  <p className="spe-post-blurb-body">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="spe-post-figure">
            <img
              src="https://images.unsplash.com/photo-1656523216861-bebcf8dcb0c9?ixlib=rb-4.1.0&fm=webp&fit=crop&crop=entropy&w=800&h=1080&q=60&dpr=2"
              alt="Equipo de negocios analizando estrategia SEO"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </header>

        {/* Intro: La Clave del Éxito Digital */}
        <section className="spe-post-section">
          <div className="spe-post-intro">
            <span className="spe-post-eyebrow is-center">La importancia del SEO para empresas</span>
            <h2 className="spe-post-h2 is-center">SEO: La Clave del Éxito Digital</h2>
            <p className="spe-post-p is-center">
              En el mundo digital actual, el SEO para empresas es esencial
              para destacar entre la competencia. No solo mejora la
              visibilidad de tu sitio web, sino que también incrementa la
              credibilidad de tu marca. Al optimizar para motores de búsqueda,
              las empresas pueden atraer tráfico cualificado, lo que se
              traduce en mayores oportunidades de conversión y crecimiento.
              Con el enfoque adecuado, el SEO se convierte en una herramienta
              poderosa para alcanzar el éxito empresarial.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="spe-post-section">
          <h2 className="spe-post-h2">Características Clave de Estrategias SEO Efectivas</h2>
          <div className="spe-post-features-grid">
            {features.map((f) => (
              <article key={f.title} className="spe-post-feature">
                <h3 className="spe-post-feature-title">{f.title}</h3>
                <p className="spe-post-feature-body">{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="spe-post-section">
          <span className="spe-post-eyebrow">Implementación de SEO para empresas</span>
          <h2 className="spe-post-h2">Guía Paso a Paso para Optimizar tu Negocio</h2>
          <div className="spe-post-steps">
            {steps.map((s) => (
              <article key={s.n} className="spe-post-step">
                <p className="spe-post-step-num" aria-hidden="true">{s.n}</p>
                <h3 className="spe-post-step-title">{s.title}</h3>
                <p className="spe-post-step-body">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ + aside */}
        <section className="spe-post-section">
          <h2 className="spe-post-h2">Preguntas Frecuentes sobre SEO para Empresas</h2>
          <p className="spe-post-p">
            Resolvemos tus dudas más comunes sobre cómo el SEO puede
            beneficiar a tu empresa y mejorar su visibilidad en línea.
          </p>
          <div className="spe-post-faq-grid">
            <div className="spe-post-faq">
              {faqs.map((f, i) => (
                <details key={f.q} className="spe-post-faq-item" open={i === 0}>
                  <summary className="spe-post-faq-summary">{f.q}</summary>
                  <p className="spe-post-faq-body">{f.a}</p>
                </details>
              ))}
            </div>
            <aside className="spe-post-faq-aside">
              <h3 className="spe-post-h3">Optimizá tu estrategia de SEO hoy</h3>
              <a className="spe-post-btn" href="/contacto/">Contactanos</a>
            </aside>
          </div>
        </section>

        {/* Success stories */}
        <section className="spe-post-section">
          <div className="spe-post-success">
            <figure className="spe-post-figure">
              <img
                src="https://images.unsplash.com/photo-1656523216864-10de75770277?ixlib=rb-4.1.0&fm=webp&fit=crop&crop=entropy&w=800&h=1066&q=60&dpr=2"
                alt="Reunión de equipo revisando resultados de implementación SEO"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div>
              <span className="spe-post-eyebrow">Casos de éxito en SEO empresarial</span>
              <h2 className="spe-post-h2">Resultados Reales de Implementaciones de SEO</h2>
              <p className="spe-post-p">
                En RankAgile ayudamos a las empresas a alcanzar sus objetivos
                de visibilidad en línea mediante estrategias SEO diseñadas a
                medida y orientadas a resultados reales. Analizamos cada
                proyecto en profundidad para detectar oportunidades de
                crecimiento, optimizar su presencia en buscadores y
                fortalecer su posicionamiento frente a la competencia.
              </p>
              <p className="spe-post-p">
                Creemos en el poder del SEO bien ejecutado para transformar
                la presencia digital de un negocio, atraer tráfico
                cualificado y convertir esa visibilidad en oportunidades
                concretas de crecimiento sostenible.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="spe-post-cta-card" aria-label="CTA final">
          <hr className="spe-post-divider" />
          <h2 className="spe-post-h2 is-center">
            Impulsá tu estrategia SEO con RankAgile
          </h2>
          <p className="spe-post-cta-text">
            Analizamos tu sitio, detectamos oportunidades y diseñamos un plan
            SEO a medida para tu empresa. Sin compromiso.
          </p>
          <a className="spe-post-btn" href="/contacto/">
            Hablar con un especialista
          </a>
        </section>
      </article>
    </main>
  );
}
