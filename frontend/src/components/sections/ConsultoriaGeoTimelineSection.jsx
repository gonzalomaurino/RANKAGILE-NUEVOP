const timeline = [
    { tag: 'Mes 1', title: 'Diagnóstico', body: 'Auditoría completa + roadmap estratégico priorizado. Definimos KPIs y el plan de acción con impacto real desde el día uno.' },
    { tag: 'Mes 2-3', title: 'Primeras Sesiones', body: 'Alineación estratégica recurrente. Validamos las primeras implementaciones de tu equipo y corregimos el rumbo si es necesario.' },
    { tag: 'Mes 3-6', title: 'Capacitación', body: 'Workshops internos y transferencia de conocimiento. Tu equipo gana autonomía estratégica con criterio experto.' },
    { tag: 'Mes 6+', title: 'Resultados', body: 'Rankings crecientes, tráfico orgánico consolidado y capacidad interna construida. ROI medible y sostenible a largo plazo.' },
];

export default function ConsultoriaGeoTimelineSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Expectativas Realistas</span>
            <h2 className="geo-page-h2">Qué podés esperar (y cuándo)</h2>
            <div className="geo-phases-panel geo-phases-4">
                {timeline.map((item, idx) => (
                    <div className="geo-phase-card" key={item.tag}>
                        <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} / fase</span>
                        <h3 className="geo-phase-title">{item.title}</h3>
                        <p className="geo-phase-body">{item.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
