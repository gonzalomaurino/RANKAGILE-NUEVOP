import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const metrics = [
  { num: '01', title: 'Share of Voice en IA (SoV-AI)', body: 'Porcentaje de consultas de tu categoría donde tu marca aparece frente al total de menciones. Si en 100 prompts relevantes tu marca aparece en 12, tu SoV-AI es del 12%. Es la métrica maestra del GEO.' },
  { num: '02', title: 'Tasa de citación por motor', body: 'Desglosar el SoV-AI por motor: qué % en ChatGPT, qué % en Gemini, qué % en Perplexity. El perfil de citación varía por motor según el tipo de consulta y las fuentes que cada modelo prioriza.' },
  { num: '03', title: 'Posición en la respuesta', body: 'No es igual ser mencionado en primer lugar que en quinto. Los LLMs siguen patrones de énfasis: la primera marca citada recibe más atención del usuario. Trackear posición promedio, no solo presencia.' },
  { num: '04', title: 'Sentiment de la mención', body: 'El modelo puede mencionar tu marca positivamente, neutralmente o negativamente. Registrar cómo describe el modelo tu empresa, tus servicios y tus diferenciadores. Señales negativas o incompletas requieren acción editorial.' },
  { num: '05', title: 'Tráfico referido desde IA', body: 'Perplexity incluye links a las fuentes. ChatGPT (con Bing) también. Monitorizar en Google Analytics las sesiones con referrer de estos dominios como proxy de visibilidad. No es completo, pero es medible hoy.' },
];

const prompt_types = [
  { type: 'Categoría genérica', example: '"¿Cuál es la mejor agencia de SEO para empresas B2B?"', why: 'Testea visibilidad en búsquedas de discovery, donde el usuario no conoce proveedores específicos.' },
  { type: 'Comparativa', example: '"¿Qué diferencias hay entre RankAgile y otras agencias SEO?"', why: 'Testea si el modelo tiene información específica sobre tu empresa versus competidores.' },
  { type: 'Problema específico', example: '"¿Qué agencia me recomendás para aparecer en ChatGPT?"', why: 'Testea visibilidad para la intención exacta que tiene tu cliente ideal.' },
  { type: 'Validación de proveedor', example: '"¿Es RankAgile una buena agencia SEO?"', why: 'Testea el knowledge del modelo sobre tu empresa específica: qué sabe, qué dice.' },
];

export default function CitabilidadLLMsPage() {
  useDocumentMeta({
    title: 'Citabilidad en LLMs: Cómo Medir la Visibilidad de tu Marca en IA | RankAgile',
    description:
      'Cómo medir si tu marca aparece en ChatGPT, Gemini y Perplexity. Métricas, herramientas y metodología para trackear citabilidad en LLMs.',
  });

  return (
    <>
      <PageSeo
        title="Citabilidad en LLMs: Cómo Medir la Visibilidad de tu Marca en IA | RankAgile"
        description="Cómo medir si tu marca aparece en ChatGPT, Gemini y Perplexity. Métricas, herramientas y metodología para trackear citabilidad en LLMs."
        image="/og/blog/citabilidad-llms-como-medirla.png"
        type="article"
      />
      <BlogPostLayout
      tag="GEO · Métricas"
      date="May 2026"
      title="Citabilidad en LLMs: Cómo Medir si tu Marca Aparece en los Motores de IA"
      lead="La citabilidad en LLMs es la métrica que indica con qué frecuencia y en qué contexto los modelos de lenguaje mencionan tu marca en sus respuestas. Medir esto sistemáticamente es el primer paso para cualquier estrategia GEO basada en datos."
    >
      {/* TODO: contenido real */}
      <h2>Qué es la citabilidad en LLMs</h2>
      <p>
        La citabilidad en LLMs (Large Language Models) mide la frecuencia y la calidad con la que los modelos de IA generativa mencionan tu marca en respuestas relevantes para tu negocio. Es el equivalente al ranking en SEO tradicional, pero aplicado al ecosistema de motores de IA: en lugar de medir en qué posición aparecés en Google, medís en qué porcentaje de conversaciones relevantes los modelos te citan.
      </p>
      <p>
        No existe una herramienta que automatice completamente este proceso (en 2026 el mercado está aún madurando), pero la metodología manual sistemática ya permite obtener datos accionables para optimizar tu estrategia{' '}
        <Link to="/blog/como-aparecer-en-motores-de-ia">de visibilidad en motores de IA</Link>.
      </p>

      <h2>Las 5 métricas de citabilidad en LLMs</h2>
      {metrics.map((m) => (
        <div key={m.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{m.num} · {m.title}</h4>
          <p className="blogpost-card-body">{m.body}</p>
        </div>
      ))}

      <h2>Metodología para medir el Share of Voice en IA</h2>
      <p>El proceso en 4 pasos para medir citabilidad de forma sistemática:</p>
      <ol>
        <li style={{ marginBottom: 12 }}><strong>Construir el prompt bank:</strong> definir 30-60 consultas representativas que tu cliente potencial haría en IA sobre tu categoría. Incluir prompts de categoría genérica, comparativos, de problema específico y de validación de proveedor.</li>
        <li style={{ marginBottom: 12 }}><strong>Testear mensualmente:</strong> ejecutar todos los prompts en ChatGPT, Gemini y Perplexity. Registrar las marcas mencionadas en cada respuesta y la posición en la que aparecen.</li>
        <li style={{ marginBottom: 12 }}><strong>Calcular SoV-AI:</strong> número de menciones de tu marca / total de menciones de todas las marcas en el conjunto de prompts × 100.</li>
        <li style={{ marginBottom: 12 }}><strong>Identificar gaps:</strong> prompts donde no aparecés pero tus competidores sí. Esos son los gaps de contenido y autoridad que la estrategia GEO debe cerrar.</li>
      </ol>

      <h2>Tipos de prompts para el banco de pruebas</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo de prompt</th>
            <th>Ejemplo</th>
            <th>Por qué incluirlo</th>
          </tr>
        </thead>
        <tbody>
          {prompt_types.map((row) => (
            <tr key={row.type}>
              <td><strong>{row.type}</strong></td>
              <td style={{ fontStyle: 'italic', fontSize: 13 }}>{row.example}</td>
              <td>{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Herramientas disponibles en 2026 para trackear citabilidad</h2>
      <p>El mercado de herramientas GEO está emergiendo. Las opciones actuales:</p>
      <ul>
        <li><strong>Prompts manuales:</strong> método básico pero completamente gratuito. Suficiente para la mayoría de empresas medianas. 2-3 horas/mes.</li>
        <li><strong>Mention + Brand24:</strong> monitoreo de menciones en la web, incluyendo foros donde se discuten respuestas de LLMs. Proxy imperfecto pero útil.</li>
        <li><strong>Herramientas GEO emergentes:</strong> plataformas como Profound, Peec AI y similares están construyendo tracking nativo de Share of Voice en IA. Evaluar en 2026 cuáles están maduras para tu caso de uso.</li>
      </ul>
      <p className="blogpost-pullquote">
        La herramienta más importante hoy es la consistencia: testear los mismos prompts, en los mismos motores, el mismo día cada mes.
      </p>

      <h2>Cómo actuar sobre los datos de citabilidad</h2>
      <p>
        La citabilidad no es una métrica de vanidad — es un diagnóstico que indica dónde actuar. Si un prompt de categoría clave no te menciona, las acciones son:
      </p>
      <ul>
        <li>Crear o mejorar contenido que responda exactamente a esa pregunta.</li>
        <li>Conseguir menciones en medios que el modelo usa como fuente.</li>
        <li>Reforzar los datos estructurados que ayudan al modelo a entender tu oferta.</li>
      </ul>
      <p>
        Para ejecutar este proceso de forma sistemática con metodología probada,{' '}
        <Link to="/servicios/geo">conocé el servicio de GEO de RankAgile</Link>, que incluye tracking mensual de citabilidad como parte del proceso.
      </p>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/como-aparecer-en-motores-de-ia">Cómo aparecer en motores de IA: guía completa</Link>
        </h4>
        <p className="blogpost-card-body">El proceso completo de 6 pasos para construir visibilidad en ChatGPT, Gemini y Perplexity.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/por-que-no-aparezco-en-chatgpt">Por qué tu empresa no aparece en ChatGPT</Link>
        </h4>
        <p className="blogpost-card-body">Las 5 razones concretas de baja citabilidad y el plan de acción para revertirlo.</p>
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
    </>
  );
}
