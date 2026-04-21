export default function GeoHeroSection() {
  return (
    <section className="geo-section" style={{ paddingTop: 24, borderTop: 'none' }}>
      <span className="geo-eyebrow">GEO · RankAgile</span>
      <h1 className="geo-h1">
        GEO: La Nueva Disciplina que Decide si tu Empresa Existe en la IA
      </h1>
      <p className="geo-lead">
        ChatGPT responde 10 millones de consultas por día. Gemini recomienda
        marcas, servicios y soluciones. Perplexity sustituye a Google para
        millones de compradores B2B.
      </p>
      <p className="geo-lead">
        <strong>¿Tu empresa aparece en esas respuestas? ¿O simplemente no existe?</strong>
      </p>
      <p className="geo-p">
        GEO — Generative Engine Optimization — es el conjunto de estrategias
        técnicas y de contenido que posiciona tu marca dentro de las
        respuestas generadas por motores de IA. No es el futuro del SEO.{' '}
        <span className="accent">Es el presente.</span>
      </p>
      <div style={{ marginTop: 24 }}>
        <a className="geo-btn" href="/contacto/">Quiero posicionar en la IA</a>
      </div>
    </section>
  );
}
