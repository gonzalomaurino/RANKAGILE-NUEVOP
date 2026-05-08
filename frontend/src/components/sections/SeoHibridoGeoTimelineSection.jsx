const timeline = [
    { tag: 'Mes 1-2', title: 'Implementación', body: 'Auditoría técnica, schema markup avanzado y entity SEO. Bases para dominar Google e IA generativa.' },
    { tag: 'Mes 2-4', title: 'Citaciones en IA', body: 'Los LLMs actualizan su comprensión más rápido que el crawl tradicional de Google. Primeras citaciones.' },
    { tag: 'Mes 3-6', title: 'Rankings en Google', body: 'Resultados en Google: 3-6 meses. Primeras mejoras de posicionamiento orgánico y tráfico creciente.' },
    { tag: 'Mes 7+', title: 'Consolidación', body: 'Autoridad consolidada en Google e IA. Share of voice creciente en motores generativos. ROI medible.' },
];

export default function SeoHibridoGeoTimelineSection() {
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
