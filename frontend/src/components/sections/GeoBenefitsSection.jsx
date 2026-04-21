const beneficios = [
  {
    n: '01',
    title: 'Visibilidad donde compran tus clientes',
    body: 'Los decisores B2B usan IA para shortlistear proveedores antes de contactar a nadie. GEO te posiciona en esa conversación invisible que determina quién llega a la demo.',
  },
  {
    n: '02',
    title: 'Autoridad de marca en IA',
    body: 'Ser citado repetidamente por ChatGPT o Gemini construye percepción de liderazgo. Los modelos aprenden que tu marca es la referencia en tu categoría.',
  },
  {
    n: '03',
    title: 'Pipeline de ventas ampliado',
    body: 'Nuevos canales de entrada sin depender exclusivamente de Google Ads o SEO orgánico. Diversificación real de fuentes de tráfico cualificado.',
  },
  {
    n: '04',
    title: 'Ventaja competitiva duradera',
    body: 'Tus competidores aún no lo están haciendo. La autoridad en IA se acumula con el tiempo, igual que el DA en SEO. Quien empieza primero construye una ventaja compuesta.',
  },
  {
    n: '05',
    title: 'Datos estructurados como activo',
    body: 'GEO genera un ecosistema de datos, citas y referencias digitales que beneficia simultáneamente al SEO tradicional, al AEO y a la búsqueda de voz.',
  },
  {
    n: '06',
    title: 'Protección frente a AI Overviews',
    body: 'Google AI Overviews está destruyendo el tráfico orgánico de webs que no están citadas como fuente. GEO es la respuesta defensiva y ofensiva a esa amenaza.',
  },
];

export default function GeoBenefitsSection() {
  return (
    <section className="geo-section">
      <span className="geo-eyebrow">Beneficios concretos</span>
      <h2 className="geo-h2">Qué obtiene tu empresa al implementar GEO</h2>
      <div className="geo-grid-3">
        {beneficios.map((b) => (
          <article className="geo-card" key={b.n}>
            <p className="geo-card-eyebrow">{b.n}</p>
            <p className="geo-card-title">{b.title}</p>
            <p className="geo-card-body">{b.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
