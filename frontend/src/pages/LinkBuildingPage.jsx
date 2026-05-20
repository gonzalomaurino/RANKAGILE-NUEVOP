import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';

const strategies = [
  { num: '01', title: 'Digital PR y contenido linkable', body: 'Crear estudios originales, estadísticas propias o recursos únicos que medios especializados quieran citar. Es el método de mayor impacto: un artículo en un medio de autoridad puede generar decenas de backlinks secundarios.' },
  { num: '02', title: 'Guest posting en medios de industria', body: 'Publicar artículos de autor en portales especializados de tu sector. La clave es la relevancia temática: un backlink de un medio de tu industria vale 5 veces más que uno de un sitio generalista con mayor DA.' },
  { num: '03', title: 'Link building de recursos (Resource Page Link Building)', body: 'Identificar páginas de recursos de tu industria (directorios, herramientas, guías) y solicitar inclusión. Baja competencia y alta tasa de conversión cuando el contenido realmente aporta valor.' },
  { num: '04', title: 'Recuperación de menciones sin enlace', body: 'Buscar menciones de tu marca en la web que no tienen enlace hacia tu sitio y contactar para solicitar la adición del link. Alta tasa de éxito porque el contenido ya fue aprobado por el publicador.' },
  { num: '05', title: 'Broken link building', body: 'Identificar páginas con enlaces rotos (404) en sitios de autoridad de tu nicho y ofrecer tu contenido como reemplazo. Propuesta de valor clara para el webmaster: estás ayudando a arreglar su sitio.' },
  { num: '06', title: 'HARO y consultas de periodistas', body: 'Responder solicitudes de periodistas y bloggers que buscan fuentes expertas. Un backlink en TechCrunch, Forbes o un medio especializado de tu sector puede impactar el ranking en semanas.' },
];

const metrics = [
  { metric: 'Domain Rating (DR) / Domain Authority (DA)', desc: 'Métrica agregada de Ahrefs y Moz que estima la autoridad del dominio. Cuanto más alto, más impacto tiene el backlink. Priorizar sitios DR > 40.' },
  { metric: 'Relevancia temática', desc: 'Un backlink de un sitio del mismo sector vale más que uno con mayor DA pero temáticamente irrelevante. La relevancia semántica es el factor cualitativo más importante.' },
  { metric: 'Anchor text', desc: 'El texto del enlace envía señal de relevancia. Mezcla natural: 40% branded (nombre de marca), 30% naked URL, 20% generic, 10% exact match keyword.' },
  { metric: 'Posición en la página', desc: 'Un enlace en el cuerpo editorial del artículo vale más que uno en el footer o sidebar. Los LLMs también priorizan citaciones en contexto de contenido relevante.' },
  { metric: 'Dofollow vs. Nofollow', desc: 'Los backlinks dofollow transfieren PageRank directamente. Los nofollow no, pero generan tráfico y señales de diversificación de perfil que Google valora.' },
];

export default function LinkBuildingPage() {
  useDocumentMeta({
    title: 'Qué es Link Building: Estrategias y Mejores Prácticas | RankAgile',
    description:
      'Link building es el proceso de conseguir enlaces de calidad desde otros sitios hacia el tuyo. Te explicamos estrategias éticas y efectivas en 2026.',
  });

  return (
    <BlogPostLayout
      tag="Link Building"
      date="May 2026"
      title="Qué es el Link Building y cómo conseguir backlinks de calidad en 2026"
      lead="El link building es el proceso de obtener enlaces desde otros sitios hacia el tuyo. Es la señal de autoridad más potente del algoritmo de Google: cada backlink de calidad es un voto de confianza que eleva el ranking de las páginas enlazadas."
    >
      {/* TODO: contenido real */}
      <h2>Qué es el link building: definición</h2>
      <p>
        El link building (construcción de enlaces) es la práctica de conseguir hipervínculos desde sitios externos hacia páginas de tu propio dominio. Desde que Google introdujo PageRank en 1998, los backlinks son la señal de autoridad más influyente en el algoritmo de posicionamiento. Un sitio con pocos pero buenos backlinks puede superar en ranking a sitios con más contenido si la autoridad de los dominios enlazantes es significativamente mayor.
      </p>
      <p>
        Sin embargo, el link building de calidad requiere estrategia, tiempo y recursos. Google penaliza activamente los esquemas de links artificiales (compra de enlaces, redes de blogs privados, intercambios masivos). La única estrategia sostenible es la que gana links por mérito: creando contenido que merece ser citado.
      </p>
      <p>
        Para entender cómo el link building se integra con el SEO técnico y el on-page, consultá la{' '}
        <Link to="/blog/seo-que-es-y-para-que-sirve">guía completa de SEO</Link>.
      </p>

      <h2>6 estrategias de link building éticas y efectivas</h2>
      {strategies.map((s) => (
        <div key={s.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{s.num} · {s.title}</h4>
          <p className="blogpost-card-body">{s.body}</p>
        </div>
      ))}

      <h2>Cómo evaluar la calidad de un backlink</h2>
      <p>No todos los backlinks son iguales. Estas son las métricas que determinan el valor de un enlace:</p>
      <table>
        <thead>
          <tr>
            <th>Métrica</th>
            <th>Qué indica</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((row) => (
            <tr key={row.metric}>
              <td><strong>{row.metric}</strong></td>
              <td>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>El perfil de enlaces natural: cómo debe verse</h2>
      <p>
        Google analiza el perfil de enlaces en su conjunto, no solo link por link. Un perfil natural tiene diversidad: diferentes dominios referentes, variedad de anchor texts, mix de dofollow/nofollow, y crecimiento gradual con el tiempo (no spikes artificiales).
      </p>
      <p className="blogpost-pullquote">
        100 backlinks de alta calidad de 100 dominios distintos valen más que 1.000 backlinks del mismo dominio.
      </p>

      <h2>Link building y autoridad para LLMs</h2>
      <p>
        Las menciones de marca en medios especializados, Wikipedia y fuentes de autoridad de la industria también son las mismas fuentes que usan los modelos de lenguaje (ChatGPT, Gemini, Perplexity) para decidir qué marcas recomendar. El link building de alta calidad tiene un segundo efecto: construye presencia en el corpus de entrenamiento de los LLMs. Esto es exactamente lo que trabaja la disciplina del{' '}
        <Link to="/servicios/geo">GEO (Generative Engine Optimization)</Link>.
      </p>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-que-es-y-para-que-sirve">SEO: Guía completa del posicionamiento web</Link>
        </h4>
        <p className="blogpost-card-body">Los tres pilares del SEO: técnico, on-page y autoridad (link building).</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/que-es-eeat-google">E-E-A-T: Experiencia, Expertise, Autoridad y Confianza</Link>
        </h4>
        <p className="blogpost-card-body">Cómo los backlinks construyen señales E-E-A-T que Google usa para evaluar la calidad de tu contenido.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/como-aparecer-en-motores-de-ia">Cómo aparecer en motores de IA: guía completa</Link>
        </h4>
        <p className="blogpost-card-body">El link building en medios de autoridad también construye presencia en los LLMs.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/seo-completo"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Ver servicio de SEO Completo
        </Link>
      </p>
    </BlogPostLayout>
  );
}
