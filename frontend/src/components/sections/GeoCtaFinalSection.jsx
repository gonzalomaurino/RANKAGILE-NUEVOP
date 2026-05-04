export default function GeoCtaFinalSection() {
  return (
    <section className="geo-page-final">
      <div className="aurora"></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow centered">empecemos</span>
        <h2 className="display" style={{ marginTop: 18, maxWidth: 720, marginInline: 'auto' }}>
          Tu competencia ya optimiza para <span className="grad">GEO</span>.
        </h2>
        <p className="geo-cta-copy">
          Analizamos tu visibilidad en motores de IA, identificamos el gap y
          definimos un plan de accion concreto. Sin compromiso.
        </p>
        <div className="geo-cta-actions">
          <a className="btn-pill" href="/contacto/">Hablar con un especialista</a>
          <a className="btn-ghost" href="/analisis-seo-gratuito">Analisis SEO Gratuito</a>
        </div>
      </div>
    </section>
  );
}
