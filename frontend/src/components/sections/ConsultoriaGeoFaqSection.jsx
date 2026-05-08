const faqs = [
    { q: '¿Con qué frecuencia nos reunimos?', a: 'Sesiones mensuales de 90 minutos como estándar. En proyectos de alta complejidad o migraciones técnicas, podemos aumentar la frecuencia temporalmente.' },
    { q: '¿Cuál es la duración mínima?', a: 'Recomendamos mínimo 3 meses para proyectos puntuales, 6-12 meses para transformaciones estratégicas. No hay permanencia forzada — puedes cancelar con 30 días de aviso.' },
    { q: '¿Necesito conocimientos técnicos previos?', a: 'No. Adaptamos el lenguaje según tu perfil (CEO, CMO, Product Manager, CTO). Explicamos conceptos técnicos de forma accesible sin perder rigurosidad.' },
    { q: '¿Qué pasa si necesitamos soporte urgente?', a: 'Incluimos acceso directo vía Slack/email para consultas entre sesiones. Respondemos en <24h hábiles para validaciones técnicas urgentes (migraciones, caídas de tráfico).' },
    { q: '¿Hacen la implementación ustedes?', a: 'No ejecutamos directamente. Nuestro rol es estratégico: diseñamos el plan, priorizamos acciones y validamos que tu equipo implemente correctamente.' },
    { q: '¿Pueden capacitar a nuestro equipo?', a: 'Sí. Incluimos workshops y sesiones de formación para marketing, producto y desarrollo. Transferimos conocimiento para construir capacidad interna sostenible.' },
];

export default function ConsultoriaGeoFaqSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Preguntas frecuentes</span>
            <h2 className="geo-page-h2">Lo que suelen preguntarnos</h2>
            <div className="geo-page-faq">
                {faqs.map((faq, index) => (
                    <details key={index}>
                        <summary>{faq.q}</summary>
                        <p className="geo-page-faq-body">{faq.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
