const bullets = [
  {
    title: 'Monitoreo de Posiciones',
    body: 'Seguimiento continuo de rankings en diferentes mercados para entender la evolución y detectar oportunidades de mejora.',
  },
  {
    title: 'Análisis de Competencia',
    body: 'Estudiamos a los principales competidores para identificar qué estrategias están funcionando y cómo superarlas.',
  },
  {
    title: 'Optimización de Contenidos',
    body: 'Mejoramos contenidos existentes y desarrollamos nuevas piezas enfocadas en intención de búsqueda y keywords relevantes.',
  },
];

const styles = `
  .seo-int-tech {
    padding: 72px 24px;
  }
  .seo-int-tech-inner {
    max-width: 980px;
    margin: 0 auto;
  }
  .seo-int-tech-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .seo-int-tech-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin: 0 0 32px;
  }
  .seo-int-tech-lead a {
    color: #38FEDA;
    font-weight: 600;
    text-decoration: none;
    transition: color 150ms ease;
  }
  .seo-int-tech-lead a:hover {
    color: #5affe3;
  }

  .seo-int-tech-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .seo-int-tech-item {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 22px 24px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px;
    align-items: baseline;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .seo-int-tech-item:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .seo-int-tech-dot {
    color: #38FEDA;
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
  }
  .seo-int-tech-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #38FEDA;
    margin: 0 0 6px;
  }
  .seo-int-tech-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  @media (max-width: 640px) {
    .seo-int-tech { padding: 56px 16px; }
    .seo-int-tech-h2 { font-size: 32px; }
  }
`;

export default function SeoIntTechnologySection() {
  return (
    <section className="seo-int-tech">
      <style>{styles}</style>
      <div className="seo-int-tech-inner">
        <h2 className="seo-int-tech-h2">Tecnología y Metodología SEO</h2>
        <p className="seo-int-tech-lead">
          <a href="/">RankAgile</a> combina herramientas líderes del sector con una
          metodología estratégica enfocada en resultados. Utilizamos tecnología SEO
          avanzada para tomar decisiones basadas en datos y optimizar cada proyecto
          de forma eficiente.
        </p>
        <ul className="seo-int-tech-list">
          {bullets.map((b) => (
            <li key={b.title} className="seo-int-tech-item">
              <span className="seo-int-tech-dot" aria-hidden="true">•</span>
              <div>
                <h3 className="seo-int-tech-title">{b.title}</h3>
                <p className="seo-int-tech-body">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
