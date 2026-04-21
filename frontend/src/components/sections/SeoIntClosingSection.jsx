const styles = `
  .seo-int-closing {
    padding: 72px 24px;
    text-align: center;
  }
  .seo-int-closing-inner {
    max-width: 900px;
    margin: 0 auto;
  }
  .seo-int-closing-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .seo-int-closing-h2 .seo-int-accent {
    color: #38FEDA;
  }
  .seo-int-closing-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin: 0;
  }

  @media (max-width: 640px) {
    .seo-int-closing { padding: 56px 16px; }
    .seo-int-closing-h2 { font-size: 32px; }
  }
`;

export default function SeoIntClosingSection() {
  return (
    <section className="seo-int-closing">
      <style>{styles}</style>
      <div className="seo-int-closing-inner">
        <h2 className="seo-int-closing-h2">
          Construyendo Visibilidad{' '}
          <span className="seo-int-accent">Sin Fronteras</span>
        </h2>
        <p className="seo-int-closing-p">
          Las agencias SEO internacionales del futuro no son proveedores de servicios,
          son socios estratégicos en la arquitectura de la presencia digital global.
          RankAgile no solo optimiza para Google, sino para un ecosistema en constante
          evolución donde la visibilidad orgánica es la moneda de cambio del
          conocimiento.
        </p>
      </div>
    </section>
  );
}
