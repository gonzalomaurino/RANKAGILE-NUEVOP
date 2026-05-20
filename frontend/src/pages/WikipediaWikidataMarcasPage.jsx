import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';

const wiki_steps = [
  { num: '01', title: 'Verificar los criterios de notabilidad', body: 'Wikipedia exige "notabilidad verificable": tu empresa debe haber sido cubierta por fuentes independientes y fiables (medios de prensa, publicaciones del sector, estudios académicos). Sin esto, el artículo será eliminado. Antes de crear, documentar la cobertura mediática existente.' },
  { num: '02', title: 'Crear el artículo en Wikipedia', body: 'Usar el Asistente de Artículo para nuevos artículos (Articles for Creation). El artículo debe estar en tono enciclopédico, no publicitario. Incluir: fundación, fundadores, actividad, mercados, reconocimientos. Cada afirmación debe estar referenciada con fuente externa.' },
  { num: '03', title: 'Crear o actualizar en Wikidata', body: 'Wikidata no requiere notabilidad estricta como Wikipedia. Crear la entidad con: nombre oficial, país, industria, fecha de fundación, página web, presencia en redes sociales. Enlazar con la entrada de Wikipedia si existe.' },
  { num: '04', title: 'Vincular el Schema Organization', body: 'En el Schema.org/Organization de tu homepage, incluir sameAs con el URL de Wikidata y Wikipedia. Esto cierra el círculo: Google lee el Schema, lo verifica con Wikidata, y consolida la entidad en el Knowledge Graph.' },
  { num: '05', title: 'Mantener actualizado', body: 'Wikidata y Wikipedia son dinámicas. Actualizar cuando cambien datos relevantes: nombre de CEO, nuevos mercados, premios del sector, financiación recibida. La consistencia de datos entre tu sitio, Schema, Wikidata y Wikipedia refuerza la confiabilidad de la entidad.' },
];

const llm_sources = [
  { source: 'Wikipedia', weight: 'Muy alto', why: 'Forma parte directa del corpus de entrenamiento de la mayoría de LLMs (GPT, Claude, Gemini). Es la fuente más citada en respuestas de IA cuando existe un artículo relevante.' },
  { source: 'Wikidata', weight: 'Alto', why: 'Base de datos estructurada que Google Knowledge Graph usa como fuente principal. Los LLMs aprenden de las relaciones entre entidades que Wikidata define.' },
  { source: 'Medios especializados', weight: 'Alto', why: 'Publicaciones del sector con alta autoridad son fuentes de entrenamiento preferidas. Un artículo en TechCrunch, Forbes o un medio de tu industria tiene alto impacto.' },
  { source: 'G2 / Capterra / Clutch', weight: 'Medio-alto', why: 'Directorios de software y servicios profesionales que los LLMs usan para comparativas. Perfil completo con reseñas reales mejora la citabilidad en consultas de evaluación de proveedores.' },
  { source: 'LinkedIn editorial', weight: 'Medio', why: 'Artículos publicados en LinkedIn Pulse y perfiles de empresa completos contribuyen a la visibilidad de marca en LLMs entrenados con datos web amplios.' },
];

export default function WikipediaWikidataMarcasPage() {
  useDocumentMeta({
    title: 'Wikipedia y Wikidata para Marcas: Guía de Posicionamiento | RankAgile',
    description:
      'Wikipedia y Wikidata son fuentes clave para LLMs y Knowledge Graph. Te explicamos cómo construir presencia en estas plataformas para tu marca.',
  });

  return (
    <BlogPostLayout
      tag="GEO · Authority"
      date="May 2026"
      title="Wikipedia y Wikidata para Marcas: Cómo Construir Presencia en las Fuentes que los LLMs Priorizan"
      lead="Wikipedia y Wikidata son las fuentes de mayor impacto para el Google Knowledge Graph y los corpus de entrenamiento de LLMs. Una empresa con presencia verificable en estas plataformas tiene una ventaja significativa en citabilidad frente a competidores que dependen solo de su propio contenido web."
    >
      {/* TODO: contenido real */}
      <h2>Por qué Wikipedia y Wikidata son críticas para el GEO</h2>
      <p>
        Wikipedia forma parte directa del corpus de entrenamiento de los modelos de lenguaje más importantes: GPT (OpenAI), Claude (Anthropic) y los modelos de Google. Cuando un LLM tiene que responder sobre una empresa, la primera fuente que consulta (o en la que basa su respuesta de entrenamiento) es Wikipedia.
      </p>
      <p>
        Wikidata, por su parte, es la base de datos estructurada de la Fundación Wikimedia y la fuente principal del Google Knowledge Graph. Las relaciones entre entidades que Wikidata define (empresa → industria → país → fundadores) son las mismas relaciones que Google usa para construir el Knowledge Panel y que los LLMs usan para entender el contexto de una marca.
      </p>
      <p>
        Para entender cómo estas plataformas forman parte de la estrategia completa de{' '}
        <Link to="/blog/como-aparecer-en-motores-de-ia">visibilidad en motores de IA</Link>, la guía de cómo aparecer en ChatGPT, Gemini y Perplexity tiene el contexto completo.
      </p>

      <h2>Las fuentes que los LLMs priorizan: ranking por impacto</h2>
      <table>
        <thead>
          <tr>
            <th>Fuente</th>
            <th>Peso para LLMs</th>
            <th>Por qué</th>
          </tr>
        </thead>
        <tbody>
          {llm_sources.map((row) => (
            <tr key={row.source}>
              <td><strong>{row.source}</strong></td>
              <td style={{ color: 'var(--accent)', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.weight}</td>
              <td>{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cómo construir presencia en Wikipedia y Wikidata en 5 pasos</h2>
      {wiki_steps.map((s) => (
        <div key={s.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{s.num} · {s.title}</h4>
          <p className="blogpost-card-body">{s.body}</p>
        </div>
      ))}

      <h2>Mi empresa no cumple los criterios de notabilidad de Wikipedia: ¿qué hago?</h2>
      <p>
        Es el caso más frecuente para empresas medianas sin cobertura mediática extensa. Las alternativas:
      </p>
      <ul>
        <li><strong>Wikidata sin Wikipedia:</strong> Wikidata acepta entidades sin artículo de Wikipedia. Crear la entrada en Wikidata ya aporta señal al Knowledge Graph aunque no haya artículo enciclopédico.</li>
        <li><strong>Construir la cobertura mediática primero:</strong> Digital PR, entrevistas en medios del sector, estudios originales que generen cobertura. Una vez con 3-5 fuentes independientes de calidad, Wikipedia se puede solicitar.</li>
        <li><strong>Directorios alternativos:</strong> G2, Capterra, Clutch, Crunchbase. Son fuentes estructuradas que los LLMs también leen. Un perfil completo y actualizado en estos directorios mejora la citabilidad incluso sin Wikipedia.</li>
      </ul>
      <p className="blogpost-pullquote">
        Si tu empresa no tiene artículo en Wikipedia, enfocá el esfuerzo en Wikidata + medios especializados. El efecto en LLMs es significativo aunque tardará más que Wikipedia.
      </p>

      <h2>La consistencia de datos: el error más frecuente</h2>
      <p>
        Los LLMs tienen "confianza" en entidades cuyos datos son consistentes entre fuentes. Si tu nombre aparece de formas distintas en Wikipedia ("RankAgile"), Wikidata ("Rank Agile S.A."), Schema ("RankAgile SRL") y LinkedIn ("RankAgile - Agencia SEO"), el modelo tiene ambigüedad sobre la entidad y reduce la certeza con la que te cita.
      </p>
      <p>
        El Schema Organization correcto, con sameAs apuntando a todos los perfiles verificados, actúa como ancla que consolida la identidad de la entidad. Para entender cómo configurar este markup,{' '}
        <Link to="/blog/schema-markup-para-geo">la guía de Schema Markup para GEO</Link> cubre los tipos más relevantes.
      </p>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/como-aparecer-en-motores-de-ia">Cómo aparecer en motores de IA: guía completa</Link>
        </h4>
        <p className="blogpost-card-body">Wikipedia y Wikidata en el contexto del proceso completo de visibilidad en LLMs.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/knowledge-panel-google-como-conseguirlo">Cómo conseguir un Knowledge Panel en Google</Link>
        </h4>
        <p className="blogpost-card-body">El Knowledge Panel que se construye con los datos de Wikidata y Wikipedia.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/schema-markup-para-geo">Schema Markup para GEO</Link>
        </h4>
        <p className="blogpost-card-body">El sameAs en Schema que conecta tu sitio con Wikipedia, Wikidata y redes sociales.</p>
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
