const styles = `
  .seo-int-hero {
    padding: 96px 24px 48px;
    text-align: center;
  }
  .seo-int-hero-inner {
    max-width: 1080px;
    margin: 0 auto;
  }
  .seo-int-hero-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #38FEDA;
    margin: 0 0 24px;
  }
  .seo-int-hero-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    color: #FFFFFF;
    margin: 0 0 28px;
    letter-spacing: -0.01em;
  }
  .seo-int-hero-h1 .seo-int-accent {
    color: #38FEDA;
  }
  .seo-int-hero-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    max-width: 820px;
    margin: 0 auto;
  }
  .seo-int-hero-lead a {
    color: #38FEDA;
    font-weight: 600;
    text-decoration: none;
    transition: color 150ms ease;
  }
  .seo-int-hero-lead a:hover {
    color: #5affe3;
  }

  @media (max-width: 640px) {
    .seo-int-hero { padding: 72px 16px 32px; }
  }
`;

export default function SeoIntHeroSection() {
  return (
    <section className="seo-int-hero">
      <style>{styles}</style>
      <div className="seo-int-hero-inner">
        <span className="seo-int-hero-eyebrow">Agencia SEO Internacional</span>
        <h1 className="seo-int-hero-h1">
          Agencia SEO Internacional: <span className="seo-int-accent">RankAgile</span>
        </h1>
        <p className="seo-int-hero-lead">
          En la era de la hiperconectividad digital, las agencias SEO internacionales
          están redefiniendo la arquitectura de la visibilidad online.{' '}
          <a href="/">RankAgile</a> lidera esta transformación con estrategias
          multilingües y tecnología de vanguardia.
        </p>
      </div>
    </section>
  );
}
