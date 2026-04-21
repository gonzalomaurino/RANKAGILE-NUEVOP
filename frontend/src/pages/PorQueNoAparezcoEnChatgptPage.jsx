import useDocumentMeta from '../hooks/useDocumentMeta.js';

const reasons = [
  {
    n: '01',
    title: 'Tu contenido no tiene densidad informacional suficiente',
    body: 'Los LLMs aprenden de contenido que responde preguntas con precisión y profundidad. Si tus páginas tienen textos genéricos de 300 palabras, el modelo no te aprende.',
  },
  {
    n: '02',
    title: 'Tenés poca presencia en fuentes de autoridad',
    body: 'Wikipedia, medios especializados, directorios de industria, G2, Capterra, LinkedIn editorial. Si tu marca no aparece citada en estos contextos, el modelo no te conoce como referente.',
  },
  {
    n: '03',
    title: 'Tus datos estructurados son incompletos',
    body: 'Sin Schema.org Organization, Service, FAQPage implementados correctamente, sos invisible a nivel semántico para los crawlers de entrenamiento.',
  },
  {
    n: '04',
    title: 'No tenés un Knowledge Panel o está incompleto',
    body: 'El Google Knowledge Graph es una de las fuentes que los LLMs priorizan. Sin entidad consolidada, tu autoridad como marca real es cuestionable para los modelos.',
  },
  {
    n: '05',
    title: 'Tu competencia lleva meses ejecutando GEO',
    body: 'La visibilidad en IA se construye con tiempo y consistencia. Cada mes que pasa sin actuar amplía esa brecha.',
  },
];

const styles = `
  .chatgpt-post-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 96px 24px 120px;
  }
  .chatgpt-post-container {
    max-width: 940px;
    margin: 0 auto;
  }

  .chatgpt-post-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .chatgpt-post-eyebrow.is-center {
    display: block;
    text-align: center;
  }

  .chatgpt-post-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 28px;
  }

  .chatgpt-post-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .chatgpt-post-h2.is-center { text-align: center; }

  .chatgpt-post-accent { color: #38FEDA; }

  .chatgpt-post-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 760px;
    margin: 0 auto 72px;
    text-align: center;
  }

  .chatgpt-post-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .chatgpt-post-p:last-child { margin-bottom: 0; }
  .chatgpt-post-p strong { color: #FFFFFF; font-weight: 600; }
  .chatgpt-post-p a {
    color: #38FEDA;
    text-decoration: none;
    font-weight: 500;
    transition: color 150ms ease;
  }
  .chatgpt-post-p a:hover { color: #5affe3; }

  .chatgpt-post-section { margin: 0 0 80px; }

  /* Reasons list (5 numbered cards) */
  .chatgpt-post-reasons {
    list-style: none;
    padding: 0;
    margin: 32px 0 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .chatgpt-post-reason {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 28px 30px;
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 22px;
    align-items: start;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .chatgpt-post-reason:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .chatgpt-post-reason-num {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 1;
    color: #38FEDA;
    margin: 0;
  }
  .chatgpt-post-reason-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 0 0 10px;
  }
  .chatgpt-post-reason-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15.5px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* CTA final card */
  .chatgpt-post-cta-card {
    margin-top: 40px;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    text-align: center;
    transition: border-color 200ms ease;
  }
  .chatgpt-post-cta-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }
  .chatgpt-post-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.18);
    border: 0;
    margin: 0 0 48px;
  }
  .chatgpt-post-cta-text {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    max-width: 620px;
    margin: 0 auto 28px;
  }
  .chatgpt-post-btn {
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
  .chatgpt-post-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .chatgpt-post-page { padding: 64px 16px 88px; }
    .chatgpt-post-h2 { font-size: 30px; }
    .chatgpt-post-section { margin-bottom: 56px; }
    .chatgpt-post-reason {
      grid-template-columns: 1fr;
      padding: 24px 22px;
      gap: 12px;
    }
    .chatgpt-post-cta-card { padding: 40px 24px; }
  }
`;

export default function PorQueNoAparezcoEnChatgptPage() {
  useDocumentMeta({
    title: 'Por Qué tu Empresa No Aparece en ChatGPT (y Cómo Solucionarlo) | RankAgile',
    description:
      'Lo buscaste y no saliste: es una arquitectura de autoridad. Las 5 razones reales por las que tu empresa no aparece en ChatGPT y el plan GEO para revertirlo.',
  });

  return (
    <main className="chatgpt-post-page">
      <style>{styles}</style>
      <article className="chatgpt-post-container">
        {/* Hero */}
        <header>
          <p className="chatgpt-post-eyebrow is-center">
            Diagnóstico · Visibilidad en IA
          </p>
          <h1 className="chatgpt-post-h1">
            Por Qué tu Empresa{' '}
            <span className="chatgpt-post-accent">No Aparece en ChatGPT</span>{' '}
            (y Cómo Solucionarlo)
          </h1>
          <p className="chatgpt-post-lead">
            Lo buscaste. Tu nombre no salió. Salió el de tu competidor. No es
            casualidad ni mala suerte: es el resultado de una arquitectura de
            autoridad que ellos tienen y vos no has construido todavía.
          </p>
        </header>

        {/* Cómo decide ChatGPT */}
        <section className="chatgpt-post-section">
          <h2 className="chatgpt-post-h2">
            Cómo decide ChatGPT qué marcas recomendar
          </h2>
          <p className="chatgpt-post-p">
            ChatGPT no busca en tiempo real. Sus respuestas se basan en
            patrones aprendidos durante el entrenamiento. Menciona marcas que
            aparecían frecuentemente en textos de alta calidad: artículos
            especializados, comparativas, reseñas en medios, foros de industria
            y documentación técnica que formó parte de su corpus de
            entrenamiento.
          </p>
          <p className="chatgpt-post-p">
            Si tu empresa nunca fue mencionada en esos contextos, el modelo
            simplemente no tiene información sobre ti. No es un algoritmo que
            puedas hackear con meta tags:{' '}
            <strong>
              es un problema de presencia en el ecosistema digital de autoridad.
            </strong>
          </p>
        </section>

        {/* 5 razones */}
        <section className="chatgpt-post-section">
          <h2 className="chatgpt-post-h2">
            Las 5 razones más comunes por las que no aparecés
          </h2>
          <ul className="chatgpt-post-reasons">
            {reasons.map((r) => (
              <li key={r.n} className="chatgpt-post-reason">
                <span className="chatgpt-post-reason-num" aria-hidden="true">
                  {r.n}
                </span>
                <div>
                  <h3 className="chatgpt-post-reason-title">{r.title}</h3>
                  <p className="chatgpt-post-reason-body">{r.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Plan de acción */}
        <section className="chatgpt-post-section">
          <h2 className="chatgpt-post-h2">
            El plan de acción: cómo empezar a aparecer en ChatGPT
          </h2>
          <p className="chatgpt-post-p">
            La solución es el{' '}
            <a href="/geo/">GEO (Generative Engine Optimization)</a>: una
            combinación de content engineering, authority building y
            optimización de datos estructurados diseñada para construir
            presencia en motores de IA.
          </p>
          <p className="chatgpt-post-p">
            En RankAgile auditamos tu visibilidad actual en ChatGPT, Gemini y
            Perplexity e identificamos exactamente dónde está el gap.
            Consultá nuestro servicio de{' '}
            <a href="/posicionamiento-en-chatgpt/">
              posicionamiento en ChatGPT
            </a>{' '}
            para ver el proceso detallado.
          </p>
        </section>

        {/* CTA final */}
        <section className="chatgpt-post-cta-card" aria-label="CTA final">
          <hr className="chatgpt-post-divider" />
          <h2 className="chatgpt-post-h2 is-center">
            Descubrí por qué no aparecés y cómo cambiar eso
          </h2>
          <p className="chatgpt-post-cta-text">
            Te damos un diagnóstico concreto de tu visibilidad actual en
            ChatGPT, Gemini y Perplexity, más un plan de acción priorizado
            para revertirlo. Sin compromiso.
          </p>
          <a className="chatgpt-post-btn" href="/contacto/">
            Hablar con un especialista
          </a>
        </section>
      </article>
    </main>
  );
}
