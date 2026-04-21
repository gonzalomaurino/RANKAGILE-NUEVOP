const styles = `
  .seo-int-evolution {
    padding: 72px 24px;
  }
  .seo-int-evolution-inner {
    max-width: 980px;
    margin: 0 auto;
  }
  .seo-int-evolution-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 28px;
  }
  .seo-int-evolution-h2 .seo-int-accent {
    color: #38FEDA;
  }
  .seo-int-evolution-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin: 0 0 18px;
  }
  .seo-int-evolution-p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 640px) {
    .seo-int-evolution { padding: 56px 16px; }
    .seo-int-evolution-h2 { font-size: 32px; }
  }
`;

export default function SeoIntEvolutionSection() {
  return (
    <section className="seo-int-evolution">
      <style>{styles}</style>
      <div className="seo-int-evolution-inner">
        <h2 className="seo-int-evolution-h2">
          La Evolución del <span className="seo-int-accent">SEO Internacional</span>
        </h2>
        <p className="seo-int-evolution-p">
          El ecosistema digital global exige una arquitectura SEO que trascienda las
          fronteras geográficas. Las agencias SEO internacionales no solo traducen
          contenido, sino que reconfiguran la semántica para resonar con cada cultura
          digital.
        </p>
        <p className="seo-int-evolution-p">
          RankAgile implementa sistemas de inteligencia artificial que mapean patrones
          de búsqueda en 124 mercados simultáneamente, identificando oportunidades de
          keyword clusters que las herramientas tradicionales no pueden detectar.
        </p>
        <p className="seo-int-evolution-p">
          Nuestra metodología combina análisis predictivo, NLP multilingüe y
          optimización técnica distribuida para construir presencias digitales
          verdaderamente globales.
        </p>
      </div>
    </section>
  );
}
