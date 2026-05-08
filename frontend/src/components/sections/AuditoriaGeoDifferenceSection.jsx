const automatic = [
    'Listas genericas de errores sin contexto de negocio',
    'Sin priorizacion; todo parece igualmente urgente',
    'No detectan problemas especificos de tu stack tecnologico',
    'Falsos positivos que generan ruido',
    'Sin roadmap de implementacion ni seguimiento',
];

const professional = [
    'Analisis humano con contexto de industria y objetivos de negocio',
    'Priorizacion por impacto real en rankings y revenue',
    'Expertise en React, Next.js, WordPress, Shopify, custom stacks',
    'Validacion manual para eliminar ruido de falsos positivos',
    'Roadmap tecnico implementable + sesion de Q&A con tu equipo',
];

export default function AuditoriaGeoDifferenceSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Nuestra diferencia</span>
            <h2 className="geo-page-h2">Que nos diferencia de auditorias automaticas</h2>
            <div className="geo-diff">
                <article className="geo-diff-card geo-diff-card--muted">
                    <h3>Auditorias Automaticas</h3>
                    <ul>
                        {automatic.map((item) => (
                            <li key={item}><span className="geo-diff-icon">✗</span>{item}</li>
                        ))}
                    </ul>
                </article>
                <article className="geo-diff-card geo-diff-card--glow">
                    <h3>Nuestra Auditoria Profesional</h3>
                    <ul>
                        {professional.map((item) => (
                            <li key={item}><span className="geo-diff-icon">✓</span>{item}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
}
