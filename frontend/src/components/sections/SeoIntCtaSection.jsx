const styles = `
  .seo-int-cta {
    padding: 72px 24px 120px;
  }
  .seo-int-cta-inner {
    max-width: 1080px;
    margin: 0 auto;
  }
  .seo-int-cta-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    text-align: center;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .seo-int-cta-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }

  .seo-int-cta-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 16px;
  }
  .seo-int-cta-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    max-width: 720px;
    margin: 0 auto 20px;
  }
  .seo-int-cta-arrow {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 14.5px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 36px;
  }

  .seo-int-cta-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.22);
    margin: 36px auto;
    max-width: 420px;
  }

  .seo-int-cta-h3 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 0 0 28px;
  }

  .seo-int-cta-btn {
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
    cursor: pointer;
    text-decoration: none;
    transition: transform 150ms ease, background 150ms ease;
  }
  .seo-int-cta-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    .seo-int-cta { padding: 56px 16px 88px; }
    .seo-int-cta-card { padding: 40px 24px; }
    .seo-int-cta-h2 { font-size: 30px; }
    .seo-int-cta-h3 { font-size: 22px; }
  }
`;

export default function SeoIntCtaSection() {
  return (
    <section className="seo-int-cta">
      <style>{styles}</style>
      <div className="seo-int-cta-inner">
        <div className="seo-int-cta-card">
          <h2 className="seo-int-cta-h2">Comienza con un análisis sin compromiso</h2>
          <p className="seo-int-cta-lead">
            Te entregamos un diagnóstico instantáneo de tu sitio para detectar errores
            y oportunidades.
            <br />
            Evaluamos tu web y te ofrecemos una hoja de ruta clara para potenciar tu
            posicionamiento.
          </p>
          <p className="seo-int-cta-arrow">→ Solicita tu análisis SEO gratuito</p>

          <div className="seo-int-cta-divider" aria-hidden="true" />

          <h3 className="seo-int-cta-h3">
            ¿Listo para escalar tu ranking en Google e IA?
          </h3>
          <a className="seo-int-cta-btn" href="/contacto/">
            Hablar con un especialista
          </a>
        </div>
      </div>
    </section>
  );
}
