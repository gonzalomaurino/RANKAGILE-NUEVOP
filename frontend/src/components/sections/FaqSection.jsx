const faqs = [
  {
    q: '¿El SEO ayuda al posicionamiento de mi página web en Google?',
    a: 'Sí. Una estrategia SEO bien ejecutada mejora la visibilidad en búsquedas relevantes, atrae usuarios con intención y aumenta el Ranking SEO.',
  },
  {
    q: '¿Qué nos diferencia de otras agencias SEO?',
    a: 'Nuestro enfoque combina el servicio de posicionamiento en Google y optimización para sistemas de inteligencia artificial, utilizando datos y análisis algorítmico para diseñar estrategias personalizadas orientadas a posicionamiento orgánico.',
  },
  {
    q: '¿Con qué tipo de empresas trabajamos?',
    a: 'Trabajamos con empresas de servicios, ecommerce y proyectos digitales que buscan aumentar su visibilidad y generar oportunidades reales de negocio mediante SEO estratégico, adaptado a su mercado y nivel.',
  },
  {
    q: '¿En cuánto tiempo se empiezan a ver resultados?',
    a: 'El SEO es una estrategia de mediano y largo plazo. Generalmente se observan mejoras iniciales en los primeros 2 a 3 meses, con resultados más sólidos y sostenibles a partir del cuarto mes.',
  },
  {
    q: '¿Qué es RankAgile y en qué se especializa?',
    a: 'RankAgile es una agencia SEO internacional de vanguardia que se especializa en posicionamiento híbrido, optimizando la visibilidad de las marcas tanto en buscadores tradicionales (Google) como en motores impulsados por inteligencia artificial. Su enfoque combina el análisis de datos, tecnología avanzada y una ejecución ágil para escalar negocios en mercados globales altamente competitivos.',
  },
  {
    q: '¿Cuáles son los servicios principales que ofrece RankAgile?',
    a: (
      <>
        <p><strong>SEO Pack (Servicio Completo):</strong> Estrategia integral desde la ingeniería de datos hasta la optimización para buscadores de IA.</p>
        <p><strong>Consultoría SEO Internacional:</strong> Dirección estratégica para empresas con equipos de ejecución propios que buscan escalar globalmente.</p>
        <p><strong>Análisis SEO Gratuito:</strong> Un diagnóstico tecnológico instantáneo para detectar errores técnicos y oportunidades de mejora estratégica.</p>
        <p><strong>SEO Híbrido:</strong> Optimización avanzada para dominar Google y motores de IA.</p>
        <p><strong>SEO Analytics:</strong> Visualización de métricas clave en tiempo real transformando datos en decisiones.</p>
        <p><strong>Auditoría Técnica:</strong> Análisis profundo de arquitectura, indexación y optimización de base técnica.</p>
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className="home-section">
      <div className="home-container home-narrow">
        <h2 className="home-h2 is-center">Preguntas frecuentes SEO</h2>
        <div className="home-faq">
          {faqs.map((f, i) => (
            <details key={f.q} className="home-faq-item" open={i === 0}>
              <summary className="home-faq-summary">{f.q}</summary>
              <div className="home-faq-body">
                {typeof f.a === 'string' ? <p>{f.a}</p> : f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
