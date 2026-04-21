const audience = [
  { title: 'Caídas de tráfico inexplicables', body: 'Tu tráfico orgánico cayó sin razón aparente. Probablemente hay errores técnicos silenciosos que están bloqueando el crawl o desindexando páginas.' },
  { title: 'Pre/post migración de sitio', body: 'Migraciones de dominio, HTTPS, plataforma o redesign son de alto riesgo. Auditoría pre-migración previene desastres. Post-migración valida que todo funcionó.' },
  { title: 'Sitios grandes o complejos', body: 'E-commerce con miles de SKUs, marketplaces, sitios multi-idioma, plataformas JavaScript pesadas. La complejidad técnica requiere expertise especializado.' },
  { title: 'Baseline antes de invertir en SEO', body: 'Antes de invertir en contenido o link building, asegurate de que la base técnica sea sólida. No tiene sentido construir sobre cimientos rotos.' },
];

export default function AuditoriaAudienceSection() {
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">¿Es Para Ti?</span>
        <h2 className="ra-aud-h2">Cuándo necesitás una auditoría técnica</h2>
        <div className="ra-aud-audience">
          {audience.map((a) => (
            <div key={a.title} className="ra-aud-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
