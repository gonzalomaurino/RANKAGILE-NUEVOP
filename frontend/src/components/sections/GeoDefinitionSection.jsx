export default function GeoDefinitionSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Definición operativa</span>
      <h2 className="geo-page-h2">¿Qué es el GEO (Generative Engine Optimization)?</h2>
      <p className="geo-page-p">
        GEO es la disciplina que optimiza la presencia de una marca dentro
        de las respuestas generadas por motores de IA como ChatGPT, Gemini,
        Perplexity, Claude y Bing Copilot. A diferencia del SEO tradicional,
        el objetivo no es aparecer en una lista de resultados, sino ser{' '}
        <span className="accent">citado, recomendado o referenciado</span>{' '}
        dentro de la respuesta directa que el modelo entrega al usuario.
      </p>
      <p className="geo-page-p">
        Los LLMs (Large Language Models) no indexan como Google. Aprenden de
        la web, priorizan fuentes con autoridad, coherencia semántica y
        densidad informacional. GEO trabaja exactamente sobre esos vectores.
      </p>
      <h3 className="geo-page-h3">¿Cómo decide una IA qué marca mencionar?</h3>
      <p className="geo-page-p">Los modelos generativos priorizan marcas que:</p>
      <ul className="geo-page-list">
        <li>Aparecen frecuentemente citadas en contenido de alta autoridad</li>
        <li>Tienen datos estructurados claros (Schema.org, Knowledge Graph)</li>
        <li>Generan contenido que responde preguntas con precisión y profundidad</li>
        <li>Son mencionadas en medios, directorios y fuentes que los LLMs usan como training data</li>
      </ul>
      <p className="geo-page-p">
        Como <a href="/agencia-geo/">agencia GEO</a> especializada, en
        RankAgile construimos exactamente esa arquitectura de visibilidad
        para nuestros clientes.
      </p>
    </section>
  );
}
