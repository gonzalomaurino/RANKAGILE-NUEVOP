const audience = [
  { title: 'Equipos con recursos internos', body: 'Tienes desarrolladores, marketers o content creators in-house que pueden ejecutar, pero necesitas dirección estratégica experta para priorizar y validar decisiones.' },
  { title: 'Startups en crecimiento', body: 'Fase de tracción donde el SEO puede ser diferencial competitivo, pero no tienes bandwidth para contratar un equipo completo dedicado aún.' },
  { title: 'Empresas con desafíos complejos', body: 'Sitios grandes, migraciones técnicas, internacionalización o industrias altamente competitivas que requieren expertise especializado puntual.' },
  { title: 'Agencias y consultoras', body: 'Necesitan respaldo técnico especializado para proyectos cliente específicos o quieren validar estrategias antes de implementar a escala.' },
];

export default function ConsultoriaAudienceSection() {
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">¿Es Para Ti?</span>
        <h2 className="ra-cons-h2">Ideal para equipos que buscan dirección experta</h2>
        <div className="ra-cons-audience">
          {audience.map((a) => (
            <div key={a.title} className="ra-cons-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
