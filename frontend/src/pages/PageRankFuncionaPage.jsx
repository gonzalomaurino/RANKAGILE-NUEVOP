import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';

const stats = [
  { value: '1998', label: 'El año en que Page y Brin diseñaron el algoritmo que redefinió cómo la web distribuye autoridad entre páginas.' },
  { value: '200+', label: 'Señales que procesa Google hoy. PageRank sigue siendo el cimiento estructural de todas ellas.' },
  { value: '91%', label: 'De las páginas web no reciben tráfico orgánico. La autoridad de dominio es el factor diferencial entre existir y posicionar.' },
];

const variables = [
  { title: 'Autoridad del dominio de origen', body: 'A mayor autoridad del dominio que enlaza, mayor es la fracción de PageRank transferida hacia el destino.' },
  { title: 'Relevancia temática del contexto', body: 'Google evalúa la coherencia semántica entre el sitio de origen y el destino. La relevancia amplifica el valor real del enlace.' },
  { title: 'Links salientes en la página de origen', body: 'La autoridad se divide entre todos los links de salida de esa página. A más links salientes, menor es la fracción que recibe cada destino.' },
];

const compare = [
  { type: 'Medio especializado con alta autoridad de dominio y relevancia temática directa', transfer: 'Muy alto', risk: 'Ninguno', impact: 'Alto' },
  { type: 'Blog de nicho con autoridad media y relevancia parcial al sector', transfer: 'Medio', risk: 'Bajo', impact: 'Medio' },
  { type: 'Directorio genérico sin tráfico ni relevancia temática', transfer: 'Casi nulo', risk: 'Medio-alto', impact: 'Negativo' },
  { type: 'Red de PBN o compra masiva de enlaces sin criterio editorial', transfer: 'Nulo', risk: 'Muy alto', impact: 'Penalización' },
];

const pillars = [
  { n: '01', title: 'Digital PR orientado a autoridad', body: 'No se trata de publicar por publicar. Se trata de identificar los dominios con mayor autoridad temática en el vertical objetivo, construir relaciones editoriales genuinas y asegurar que el ancla text sea semánticamente preciso. Un único placement en un medio de referencia supera en valor a veinte notas de prensa genéricas.' },
  { n: '02', title: 'Link building basado en análisis de competidores', body: 'Mapear el perfil de enlaces de los dominios que ya rankean en las keywords objetivo. Identificar sus fuentes de autoridad más valiosas. No para replicarlos, sino para construir una arquitectura superior. El gap de autoridad es siempre medible y atacable con la estrategia correcta.' },
  { n: '03', title: 'Arquitectura interna de PageRank', body: 'El link building externo sin una estructura de enlazado interno sólida es un desperdicio parcial de autoridad. El PageRank que entra a tu sitio necesita fluir hacia las páginas que querés posicionar. Esto requiere un mapa de enlaces internos diseñado con criterio estratégico: identificar páginas ancla, distribuir autoridad por clusters temáticos y evitar los silos que concentran PageRank en páginas irrelevantes.' },
  { n: '04', title: 'Monitoreo activo de pérdida de autoridad (Link Decay)', body: 'Los backlinks mueren. Dominios que te enlazaban caducan, páginas que te citaban desaparecen o cambian su estructura. Un porcentaje significativo del PageRank acumulado se erosiona sin gestión activa. Monitorear y recuperar links perdidos mediante outreach de recuperación, actualización de URLs y análisis periódico del perfil es parte fundamental de cualquier estrategia de autoridad sostenida en el tiempo.' },
];

export default function PageRankFuncionaPage() {
  useDocumentMeta({
    title: '¿Cómo funciona el Algoritmo PageRank de Google? | RankAgile',
    description:
      'Descubrí cómo funciona el algoritmo PageRank de Google: el sistema de autoridad distribuida que determina qué páginas merecen posicionar.',
  });

  return (
    <BlogPostLayout
      tag="SEO Técnico"
      date="31 Mar 2026"
      title="¿Cómo funciona el Algoritmo PageRank de Google?"
      lead="No es un mito ni una métrica obsoleta. Es la arquitectura de confianza sobre la que Google construyó su hegemonía. Entenderlo es la diferencia entre optimizar contenido y verdaderamente construir autoridad en mercados competitivos."
    >
      {/* Stats */}
      <div className="blogpost-stats">
        {stats.map((s) => (
          <div key={s.value} className="blogpost-stat">
            <p className="blogpost-stat-num">{s.value}</p>
            <p className="blogpost-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Qué es PageRank */}
      <h2>Qué es PageRank realmente</h2>
      <p>
        En 1998, Larry Page y Sergey Brin diseñaron un algoritmo para ordenar la web con una premisa conceptualmente elegante:{' '}
        <strong>una página es importante si otras páginas importantes apuntan a ella.</strong>
      </p>
      <p>
        No era un sistema de palabras clave. Era un sistema de reputación distribuida. Un grafo de confianza donde cada enlace funcionaba como un voto, y el peso de ese voto dependía de quién lo emitía.
      </p>
      <p>
        Ese principio, refinado durante casi tres décadas, sigue siendo el núcleo del posicionamiento competitivo moderno. Ignorarlo es construir sobre arena.
      </p>

      <blockquote>
        <p><strong>"Una página es importante si otras páginas importantes apuntan a ella."</strong></p>
        <p>— Larry Page &amp; Sergey Brin · The PageRank Citation Ranking, 1998</p>
      </blockquote>

      {/* Cómo fluye la autoridad */}
      <h2>Cómo fluye la autoridad en la web</h2>
      <p>
        Cada enlace entrante transfiere una fracción de PageRank. Pero esa fracción no es fija: está determinada por tres variables que definen su peso real dentro del grafo.
      </p>
      <p>
        La mayoría de las estrategias de link building ignoran estas variables y optimizan solo por cantidad. El resultado es un perfil con volumen pero sin densidad de autoridad real.
      </p>
      <p className="blogpost-pullquote">
        No se trata de acumular links. Se trata de conectar nodos de alta autoridad hacia tu dominio.
      </p>

      <h3>Tres variables que determinan el flujo</h3>
      {variables.map((v) => (
        <div key={v.title} className="blogpost-card">
          <h4 className="blogpost-card-title">{v.title}</h4>
          <p className="blogpost-card-body">{v.body}</p>
        </div>
      ))}

      {/* Más links ≠ mejor */}
      <h2>Más links no significa mejor posicionamiento</h2>
      <p>
        Eso era el SEO de 2005. Hoy, un perfil de enlaces construido sobre volumen sin criterio es una señal de manipulación, no de autoridad. Google lo detecta mediante sus sistemas de calidad de links y lo penaliza algorítmicamente.
      </p>
      <p>
        Un perfil de mil enlaces de directorios genéricos y foros sin tráfico puede posicionar peor que uno de veinte enlaces provenientes de medios especializados con autoridad real en el nicho.
      </p>
      <p className="blogpost-pullquote">
        El peso no está en la cantidad. Está en la calidad del nodo que te enlaza.
      </p>

      {/* Tabla Calidad vs Cantidad */}
      <h2>Calidad vs. Cantidad</h2>
      <p>El mismo error, replicado en miles de estrategias SEO cada año.</p>
      <table>
        <thead>
          <tr>
            <th>Tipo de enlace</th>
            <th>Autoridad transferida</th>
            <th>Riesgo algorítmico</th>
            <th>Impacto en rankings</th>
          </tr>
        </thead>
        <tbody>
          {compare.map((row) => (
            <tr key={row.type}>
              <td>{row.type}</td>
              <td>{row.transfer}</td>
              <td>{row.risk}</td>
              <td>{row.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cómo construir autoridad real */}
      <h2>Cómo construir autoridad real</h2>
      <p>
        Principios operativos aplicados en campañas SEO internacionales donde la competencia ya lleva años de ventaja acumulada.
      </p>
      {pillars.map((p) => (
        <div key={p.n} className="blogpost-card">
          <h4 className="blogpost-card-title">{p.n} · {p.title}</h4>
          <p className="blogpost-card-body">{p.body}</p>
        </div>
      ))}

      <blockquote>
        <p><strong>Dato operativo</strong></p>
        <p>El 30% de los backlinks activos de un dominio promedio se pierden o degradan en el transcurso de un año sin gestión sistemática.</p>
      </blockquote>

      {/* Conclusión */}
      <h2>Conclusión</h2>
      <p>
        <strong>"Google no posiciona páginas. Posiciona nodos de confianza dentro de un grafo de autoridad global."</strong>
      </p>
      <p>
        PageRank evolucionó. Se volvió más sofisticado, más contextual, más difícil de manipular. Pero su lógica central no cambió: la autoridad se construye desde afuera hacia adentro, con criterio, con datos y con una visión de largo plazo sobre el grafo de la web.
      </p>
    </BlogPostLayout>
  );
}
