const timeline = [
    { tag: 'Mes 1–2', title: 'Fundamentos', body: 'Resolución de errores técnicos críticos. Primeras optimizaciones on-page. Indexación correcta.' },
    { tag: 'Mes 3–4', title: 'Tracción', body: 'Primeras mejoras en rankings. Incremento en impresiones. Contenido nuevo indexándose.' },
    { tag: 'Mes 5–6', title: 'Crecimiento', body: 'Aumento sostenido de tráfico orgánico. Rankings en primera página. ROI medible.' },
    { tag: 'Mes 7+', title: 'Consolidación', body: 'Autoridad de dominio sólida. Visibilidad estable. Escalabilidad comprobada.' },
];

export default function SeoCompletoGeoTimelineSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Expectativas realistas</span>
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
