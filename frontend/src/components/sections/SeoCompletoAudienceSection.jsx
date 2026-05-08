const audience = [
  {
    title: 'E-commerce & Marketplaces',
    body: 'Catálogos extensos que necesitan visibilidad orgánica escalable. Optimizamos arquitectura de categorías, fichas de producto y contenido transaccional para captar intención de compra.',
  },
  {
    title: 'SaaS & Tecnología',
    body: 'Plataformas que compiten en mercados saturados. Creamos contenido técnico de valor que atrae usuarios cualificados y reduce el CAC (costo de adquisición de cliente).',
  },
  {
    title: 'Servicios Profesionales',
    body: 'Despachos, consultoras y firmas que requieren autoridad digital. Posicionamos tu expertise en búsquedas comerciales e informativas para atraer clientes de alto valor.',
  },
  {
    title: 'Medios & Contenido',
    body: 'Sitios editoriales y blogs que monetizan tráfico. Maximizamos alcance orgánico con estrategias de keywords long-tail, actualización de contenido y clusterización temática.',
  },
];

export default function SeoCompletoAudienceSection() {
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="eyebrow ra-comp-eyebrow">¿Es Para Ti?</span>
        <h2 className="ra-comp-h2">Ideal para negocios que buscan resultados a largo plazo</h2>
        <div className="ra-comp-audience">
          {audience.map((a) => (
            <div key={a.title} className="ra-comp-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
