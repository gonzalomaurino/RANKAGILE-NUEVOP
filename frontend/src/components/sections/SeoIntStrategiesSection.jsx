const strategies = [
  {
    num: '01',
    title: 'Estrategia SEO Internacional Adaptada',
    body: 'Analizamos cada mercado objetivo para definir una estrategia SEO personalizada según idioma, competencia y comportamiento de búsqueda. Priorizamos oportunidades reales de crecimiento en lugar de enfoques genéricos.',
  },
  {
    num: '02',
    title: 'Optimización Multilingüe y Cultural',
    body: 'No solo traducimos contenidos, los adaptamos. Trabajamos con keywords locales y variaciones lingüísticas para asegurar que el contenido conecte con cada audiencia y responda a su intención de búsqueda.',
  },
  {
    num: '03',
    title: 'Optimización Técnica Esencial',
    body: 'Mejoramos los aspectos técnicos clave del sitio: velocidad de carga, indexación, estructura web y experiencia de usuario. Nos enfocamos en los factores que realmente impactan el posicionamiento.',
  },
  {
    num: '04',
    title: 'Link Building Internacional',
    body: 'Desarrollamos enlaces en medios y sitios relevantes para cada país, fortaleciendo la autoridad del dominio de forma progresiva y segura, sin prácticas de riesgo.',
  },
  {
    num: '05',
    title: 'Seguimiento y Reporting Claro',
    body: 'Medimos resultados de forma transparente con reportes periódicos. Analizamos tráfico, rankings y conversiones para ajustar la estrategia continuamente.',
  },
];

const styles = `
  .seo-int-strategies {
    padding: 72px 24px;
  }
  .seo-int-strategies-inner {
    max-width: 1080px;
    margin: 0 auto;
  }
  .seo-int-strategies-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 48px;
  }
  .seo-int-strategies-h2 .seo-int-accent {
    color: #38FEDA;
  }

  .seo-int-strategies-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .seo-int-strategy-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 28px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .seo-int-strategy-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }

  .seo-int-strategy-head {
    display: flex;
    align-items: baseline;
    gap: 14px;
    margin: 0 0 14px;
  }
  .seo-int-strategy-num {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: #FFFFFF;
    letter-spacing: 0.02em;
  }
  .seo-int-strategy-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.3;
    color: #38FEDA;
    margin: 0;
  }
  .seo-int-strategy-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  @media (max-width: 860px) {
    .seo-int-strategies-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .seo-int-strategies { padding: 56px 16px; }
    .seo-int-strategies-h2 { font-size: 32px; }
    .seo-int-strategy-card { padding: 28px 22px; }
  }
`;

export default function SeoIntStrategiesSection() {
  return (
    <section className="seo-int-strategies">
      <style>{styles}</style>
      <div className="seo-int-strategies-inner">
        <h2 className="seo-int-strategies-h2">
          Estrategias <span className="seo-int-accent">Core</span> de SEO Internacional
        </h2>
        <div className="seo-int-strategies-grid">
          {strategies.map((s) => (
            <article key={s.num} className="seo-int-strategy-card">
              <header className="seo-int-strategy-head">
                <span className="seo-int-strategy-num">{s.num}.</span>
                <h3 className="seo-int-strategy-title">{s.title}</h3>
              </header>
              <p className="seo-int-strategy-body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
