const timeline = [
  { tag: 'Mes 1–2', title: 'Fundamentos', body: 'Resolución de errores técnicos críticos. Primeras optimizaciones on-page. Indexación correcta.' },
  { tag: 'Mes 3–4', title: 'Tracción', body: 'Primeras mejoras en rankings. Incremento en impresiones. Contenido nuevo indexándose.' },
  { tag: 'Mes 5–6', title: 'Crecimiento', body: 'Aumento sostenido de tráfico orgánico. Rankings en primera página. ROI medible.' },
  { tag: 'Mes 7+', title: 'Consolidación', body: 'Autoridad de dominio sólida. Visibilidad estable. Escalabilidad comprobada.' },
];

export default function SeoCompletoTimelineSection() {
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="eyebrow ra-comp-eyebrow">Expectativas Realistas</span>
        <h2 className="ra-comp-h2">Qué podés esperar (y cuándo)</h2>
        <div className="ra-comp-timeline">
          {timeline.map((t) => (
            <div key={t.tag} className="ra-comp-tl-card">
              <div className="ra-comp-tl-tag">{t.tag}</div>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
