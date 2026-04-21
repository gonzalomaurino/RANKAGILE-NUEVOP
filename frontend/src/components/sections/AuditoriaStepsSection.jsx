const steps = [
  { n: '01', title: 'Crawl Completo', body: 'Rastreamos tu sitio completo con herramientas enterprise: Screaming Frog, Sitebulb, crawlers propietarios.' },
  { n: '02', title: 'Análisis Profundo', body: 'Identificamos errores críticos, warnings y oportunidades. Cruzamos con GSC, GA4, PageSpeed Insights.' },
  { n: '03', title: 'Priorización', body: 'Clasificamos issues por impacto vs esfuerzo. Foco en quick wins y errores que sangran autoridad.' },
  { n: '04', title: 'Roadmap Entregable', body: 'Informe detallado + roadmap técnico accionable con pasos específicos y validación post-fix.' },
];

export default function AuditoriaStepsSection() {
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">Nuestro Proceso</span>
        <h2 className="ra-aud-h2">Cómo trabajamos la auditoría</h2>
        <div className="ra-aud-steps">
          {steps.map((s) => (
            <div key={s.n} className="ra-aud-step">
              <div className="ra-aud-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
