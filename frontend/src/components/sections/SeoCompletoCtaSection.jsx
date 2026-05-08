const ArrowUpRight = ({ size = 14 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function SeoCompletoCtaSection() {
  return (
    <section className="ra-comp-cta">
      <div className="cta-band">
        <div className="aurora"></div>
        <div className="ra-comp-cta-inner">
          <span className="eyebrow centered">empieza hoy</span>
          <h2 className="display">¿Listo para escalar tu ranking en Google e IA?</h2>
          <p className="ra-comp-cta-text">
            Comenzá con un análisis sin compromiso. Te entregamos un diagnóstico
            de tu sitio para detectar errores y oportunidades, y una hoja de
            ruta clara para potenciar tu posicionamiento.
          </p>
          <div className="ra-comp-cta-buttons">
            <a className="btn-pill" href="/contacto/">Hablar con un especialista <ArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
