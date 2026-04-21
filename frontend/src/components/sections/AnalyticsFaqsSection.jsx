const faqs = [
  { q: '¿Qué herramientas e integraciones soporta?', a: 'Google Analytics (UA + GA4), Search Console, Ahrefs, SEMrush, Moz, Screaming Frog y CRMs como HubSpot y Salesforce. Centraliza todo sin exportar manualmente.' },
  { q: '¿Con qué frecuencia se actualizan los datos?', a: 'Rankings diariamente, tráfico y conversiones en tiempo real vía GA4, backlinks semanalmente, datos de competencia semanalmente.' },
  { q: '¿Se puede personalizar el dashboard?', a: 'Sí, es totalmente personalizable con widgets drag & drop, filtros a medida y vistas guardadas por rol. Cada usuario ve lo que necesita.' },
  { q: '¿Se puede usar de forma independiente o solo con otro servicio?', a: 'Puede usarse de forma standalone o combinado con el Servicio SEO Completo o la Consultoría para mayor potencia analítica.' },
  { q: '¿Cuántos usuarios puede tener el dashboard?', a: 'Usuarios ilimitados con permisos granulares. Cada equipo o stakeholder ve solo las métricas relevantes para su rol.' },
  { q: '¿Funciona en móvil?', a: 'Sí. Dashboard responsive optimizado para todos los dispositivos, más apps nativas para iOS y Android para monitoreo en movimiento.' },
];

export default function AnalyticsFaqsSection() {
  return (
    <section className="ra-ana-section">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">Preguntas Frecuentes</span>
        <h2 className="ra-ana-h2">Lo que suelen preguntarnos</h2>
        <div className="ra-ana-faqs">
          {faqs.map((f) => (
            <div key={f.q} className="ra-ana-faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
