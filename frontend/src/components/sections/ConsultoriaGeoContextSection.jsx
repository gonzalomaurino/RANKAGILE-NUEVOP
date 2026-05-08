const audience = [
    {
        title: 'Equipos con recursos internos',
        body: 'Tienes desarrolladores, marketers o content creators in-house que pueden ejecutar, pero necesitas dirección estratégica experta para priorizar y validar decisiones.',
    },
    {
        title: 'Startups en crecimiento',
        body: 'Fase de tracción donde el SEO puede ser diferencial competitivo, pero no tienes bandwidth para contratar un equipo completo dedicado aún.',
    },
    {
        title: 'Empresas con desafíos complejos',
        body: 'Sitios grandes, migraciones técnicas, internacionalización o industrias altamente competitivas que requieren expertise especializado puntual.',
    },
    {
        title: 'Agencias y consultoras',
        body: 'Necesitan respaldo técnico especializado para proyectos cliente específicos o quieren validar estrategias antes de implementar a escala.',
    },
];

export default function ConsultoriaGeoContextSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">¿Es Para Ti?</span>
            <div className="geo-urgent">
                <div className="geo-urgent-copy">
                    <h2 className="geo-page-h2">Ideal para equipos que buscan dirección experta</h2>
                    <ul className="geo-page-list">
                        <li><strong>Dirección estratégica.</strong> Te guiamos en la toma de decisiones críticas y tu equipo ejecuta las implementaciones.</li>
                        <li><strong>Ideal si tienes:</strong> Equipo técnico interno, pero necesitas expertise especializado para priorizar y validar.</li>
                        <li><strong>Entregamos:</strong> Roadmaps, auditorías, validación técnica, sesiones mensuales y capacitación de equipos.</li>
                        <li><strong>Soporte continuo.</strong> Acceso directo vía Slack/email para consultas urgentes y resolución de dudas técnicas.</li>
                    </ul>
                    <a className="btn-ghost" href="/contacto/">Hablar con un especialista</a>
                </div>
                <div className="geo-urgent-panel">
                    {audience.map((item) => (
                        <div className="geo-urgent-item" key={item.title}>
                            <span className="geo-urgent-name">{item.title}</span>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
