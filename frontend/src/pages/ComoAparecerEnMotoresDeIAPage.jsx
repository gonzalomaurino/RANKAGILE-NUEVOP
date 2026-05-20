import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';

const stats = [
  { value: '72%', label: 'de decisores B2B consultan IA antes del primer contacto con un proveedor' },
  { value: '10M+', label: 'de consultas diarias solo en ChatGPT' },
  { value: '3-5', label: 'marcas citadas en promedio por respuesta generativa' },
  { value: '6-18', label: 'meses de ventaja para quien empieza GEO antes que sus competidores' },
];

const steps = [
  { num: '01', title: 'Auditoría de citabilidad actual', body: 'Antes de optimizar, hay que saber dónde estás. Buscar el nombre de tu empresa, categoría de producto y keywords objetivo en ChatGPT, Gemini y Perplexity. Registrar quién aparece y quién no. Identificar el gap entre tu visibilidad actual y la de tus competidores.' },
  { num: '02', title: 'Optimización de la entidad de marca', body: 'Los LLMs aprenden de entidades, no de keywords. Tu marca debe existir como entidad clara y verificable: Wikipedia o Wikidata, Google Knowledge Panel activo, Schema Organization completo, consistencia de nombre/dirección/teléfono en todos los directorios.' },
  { num: '03', title: 'Content Engineering para LLMs', body: 'Crear contenido con alta densidad informacional: respuestas directas y autocontenidas en los primeros 60 palabras de cada sección, datos verificables y actualizados, estructura de pregunta-respuesta que los modelos pueden extraer y citar directamente.' },
  { num: '04', title: 'Authority Building en fuentes de entrenamiento', body: 'Los LLMs aprenden de lo que leer durante el entrenamiento. Las fuentes con mayor peso: Wikipedia, medios especializados con alta autoridad, directorios de industria (G2, Capterra, Clutch), LinkedIn editorial, podcasts y estudios sectoriales.' },
  { num: '05', title: 'Datos estructurados para IA', body: 'Schema.org Organization, Service y FAQPage son los tipos más críticos para GEO. Permiten que los LLMs extraigan y procesen información estructurada de tu empresa: qué hace, para quién, cuánto cuesta y qué diferencia.' },
  { num: '06', title: 'Tracking y optimización mensual', body: 'Medir el Share of Voice en respuestas de IA: qué porcentaje de las consultas relevantes de tu categoría mencionan tu marca. Herramientas: prompts manuales sistemáticos en los 3 motores principales + registro de variaciones mes a mes.' },
];

const engines = [
  { name: 'ChatGPT (OpenAI)', desc: 'Usa datos de entrenamiento + Bing Search (cuando está activado). Mayor enfoque en recomendaciones de compra y comparativas. Cita 3-5 marcas por respuesta en preguntas de categoría.', priority: 'Máxima' },
  { name: 'Gemini (Google)', desc: 'Integrado con AI Overviews en Google Search. Si aparecés en Gemini, potencialmente aparecés en los AI Overviews que reemplazan resultados orgánicos. Canal de altísima prioridad para mercados hispanohablantes.', priority: 'Máxima' },
  { name: 'Perplexity', desc: 'Preferido por perfiles técnicos y de investigación. Cita fuentes explícitamente. Alta valoración de contenido especializado y publicaciones en medios de nicho. Resultados más rápidos que otros motores.', priority: 'Alta' },
  { name: 'Claude (Anthropic)', desc: 'Uso corporativo y en herramientas profesionales. Entrenado principalmente con libros, artículos académicos y web de alta calidad. Construir presencia en Wikidata y medios especializados tiene especial impacto.', priority: 'Media-alta' },
];

export default function ComoAparecerEnMotoresDeIAPage() {
  useDocumentMeta({
    title: 'Cómo Aparecer en Motores de IA (ChatGPT, Gemini, Perplexity) | RankAgile',
    description:
      'Guía completa para que tu marca aparezca en respuestas de ChatGPT, Gemini, Perplexity y Claude. Estrategias, métricas y casos reales de visibilidad en LLMs.',
  });

  return (
    <BlogPostLayout
      tag="GEO · IA"
      date="May 2026"
      title="Cómo Aparecer en Motores de IA: Guía Completa de Visibilidad en ChatGPT, Gemini y Perplexity"
      lead="Aparecer en los motores de IA ya no es opcional para empresas B2B. Los modelos de lenguaje están reemplazando a Google en el proceso de investigación previa a la compra. Esta guía explica exactamente qué hace que una marca aparezca —o no— en respuestas de ChatGPT, Gemini y Perplexity."
    >
      {/* TODO: contenido real */}
      <div className="blogpost-stats">
        {stats.map((s) => (
          <div key={s.value} className="blogpost-stat">
            <p className="blogpost-stat-num">{s.value}</p>
            <p className="blogpost-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      <h2>El cambio de paradigma: del SEO al GEO</h2>
      <p>
        Durante 25 años, la visibilidad digital dependió de una sola variable: el posicionamiento en Google. En 2024-2026 ese modelo se rompió. Los motores de IA no devuelven 10 blue links: devuelven una respuesta sintetizada que menciona 3-5 marcas. Si tu empresa no está en esa respuesta, no existe para el usuario que pregunta.
      </p>
      <p>
        El cambio no reemplaza al SEO: lo amplía. El SEO trabaja para posicionar en listas de resultados de búsqueda. El GEO (Generative Engine Optimization) trabaja para aparecer dentro de las respuestas generativas que ya desplazan esos resultados. Si querés entender las diferencias técnicas,{' '}
        <Link to="/blog/seo-vs-geo-vs-aeo">la comparativa entre SEO, GEO y AEO</Link> lo explica en detalle.
      </p>

      <h2>Cómo funcionan los motores de IA: lo que determina qué marcas aparecen</h2>
      <p>
        Los LLMs aprenden de dos fuentes principales: datos de entrenamiento (texto de la web, libros, artículos académicos hasta la fecha de corte) y búsqueda en tiempo real (activada en modelos como ChatGPT con Bing o Perplexity).
      </p>
      <p>
        Para el entrenamiento: tu marca aparece en las respuestas si está bien representada en el corpus de entrenamiento. Esto significa presencia en fuentes de autoridad: Wikipedia, medios especializados, G2, Capterra, Clutch, directorios industriales, LinkedIn editorial y podcasts de nicho.
      </p>
      <p>
        Para la búsqueda en tiempo real: el modelo busca y sintetiza lo que encuentra. Aquí el SEO clásico tiene impacto parcial: páginas bien posicionadas pueden ser fuentes para la síntesis.
      </p>
      <blockquote>
        <p>Los LLMs no rankean sitios web. Sintetizan conocimiento acumulado de millones de fuentes. Tu marca tiene que estar en esas fuentes, no solo en tu propio sitio.</p>
      </blockquote>

      <h2>Por qué tu marca no aparece en ChatGPT</h2>
      <p>
        Si buscaste tu empresa en ChatGPT y no apareció, hay razones concretas. Las explicamos en detalle en el artículo{' '}
        <Link to="/blog/por-que-no-aparezco-en-chatgpt">por qué tu empresa no aparece en ChatGPT</Link>, pero el resumen ejecutivo es:
      </p>
      <ul>
        <li>Poca o ninguna presencia en fuentes de alta autoridad que usan los modelos como referencia.</li>
        <li>Datos estructurados incompletos o ausentes: el modelo no puede "entender" tu empresa como entidad.</li>
        <li>Contenido sin densidad informacional suficiente para ser citado.</li>
        <li>Tus competidores llevan meses construyendo estas señales y el modelo ya los reconoce como referentes.</li>
      </ul>

      <h2>Los 4 motores de IA que necesitás cubrir</h2>
      <table>
        <thead>
          <tr>
            <th>Motor</th>
            <th>Características</th>
            <th>Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {engines.map((e) => (
            <tr key={e.name}>
              <td><strong>{e.name}</strong></td>
              <td>{e.desc}</td>
              <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{e.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>El proceso de 6 pasos para aparecer en motores de IA</h2>
      {steps.map((s) => (
        <div key={s.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{s.num} · {s.title}</h4>
          <p className="blogpost-card-body">{s.body}</p>
        </div>
      ))}

      <h2>Cómo medir tu citabilidad en LLMs</h2>
      <p>
        La métrica principal es el <strong>Share of Voice en IA</strong>: qué porcentaje de las preguntas relevantes de tu categoría mencionan tu marca. La metodología básica:
      </p>
      <ul>
        <li>Definir 20-50 consultas representativas que tu cliente potencial haría en IA.</li>
        <li>Testear esas consultas mensualmente en ChatGPT, Gemini y Perplexity.</li>
        <li>Registrar qué marcas aparecen y con qué frecuencia.</li>
        <li>Calcular tu porcentaje de apariciones sobre el total de menciones del sector.</li>
      </ul>
      <p>
        Para aprender cómo medir esto sistemáticamente, consultá{' '}
        <Link to="/blog/citabilidad-llms-como-medirla">la guía de citabilidad en LLMs</Link>.
      </p>

      <h2>Recursos para profundizar</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/por-que-no-aparezco-en-chatgpt">Por qué tu empresa no aparece en ChatGPT</Link>
        </h4>
        <p className="blogpost-card-body">Las 5 razones específicas por las que los LLMs no mencionan tu marca y cómo revertirlo.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/citabilidad-llms-como-medirla">Citabilidad en LLMs: cómo medir la visibilidad en IA</Link>
        </h4>
        <p className="blogpost-card-body">Metodología, herramientas y métricas para trackear el Share of Voice de tu marca en motores generativos.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/knowledge-panel-google-como-conseguirlo">Cómo conseguir un Knowledge Panel en Google</Link>
        </h4>
        <p className="blogpost-card-body">La tarjeta de entidad que consolida tu marca para Google y los LLMs.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/wikipedia-wikidata-marcas">Wikipedia y Wikidata para marcas</Link>
        </h4>
        <p className="blogpost-card-body">Las fuentes de mayor impacto para construir presencia en los corpus de entrenamiento de LLMs.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/schema-markup-para-geo">Schema Markup para GEO</Link>
        </h4>
        <p className="blogpost-card-body">Datos estructurados que ayudan a los LLMs a procesar y citar correctamente información de tu empresa.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/servicios/geo"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Implementar GEO en tu empresa
        </Link>
      </p>
    </BlogPostLayout>
  );
}
