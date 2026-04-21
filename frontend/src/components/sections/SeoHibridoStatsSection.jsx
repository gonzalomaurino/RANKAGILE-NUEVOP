const stats = [
  {
    num: '43%',
    title: 'Búsquedas Zero-Click',
    body: 'Casi la mitad de las búsquedas en Google terminan sin click. La respuesta aparece directamente en el SERP o en motores generativos.',
  },
  {
    num: '2B+',
    title: 'Usuarios de ChatGPT',
    body: 'Los modelos de IA generativa están redefiniendo cómo las personas buscan información. Tu marca necesita aparecer allí.',
  },
  {
    num: 'SGE',
    title: 'Search Generative Experience',
    body: 'Google integra IA generativa directamente en los resultados. Optimizar para SGE es optimizar para el futuro de la búsqueda.',
  },
];

export default function SeoHibridoStatsSection() {
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">Cambio de Paradigma</span>
        <h2 className="ra-hib-h2">Por qué el SEO tradicional ya no es suficiente</h2>
        <div className="ra-hib-stats">
          {stats.map((s) => (
            <div key={s.num} className="ra-hib-stat-card">
              <div className="ra-hib-stat-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
