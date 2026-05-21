import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const comparisonRows = [
  { variable: 'Velocidad de resultados', seo: '3–12 meses', sem: 'Inmediato (24–48h)' },
  { variable: 'Costo por clic', seo: 'Marginal a largo plazo', sem: 'Variable (CPC de subasta)' },
  { variable: 'Durabilidad del tráfico', seo: 'Permanente (activo digital)', sem: 'Solo mientras hay presupuesto' },
  { variable: 'Control y targeting', seo: 'Limitado a intención', sem: 'Alto (audiencias, horarios, geo)' },
  { variable: 'Ideal para', seo: 'Keywords informacionales y cola larga', sem: 'Keywords transaccionales de alto valor' },
  { variable: 'ROI a largo plazo', seo: 'Muy alto (efecto compuesto)', sem: 'Medio-alto (depende del CPA)' },
  { variable: 'Dependencia del algoritmo', seo: 'Alta (Core Updates)', sem: 'Baja (reglas de subasta estables)' },
];

const semStrategies = [
  { title: 'Segmentación por intención de búsqueda', body: 'Clasificá keywords por intención (informacional, navegacional, transaccional) y destiná presupuesto diferenciado según potencial de conversión de cada grupo.' },
  { title: 'Optimización continua del Quality Score', body: 'Mejorá la relevancia del anuncio, aumentá el CTR esperado y optimizá la experiencia en la página de destino para reducir CPC y posicionar más alto.' },
  { title: 'Listas de palabras clave negativas', body: 'Excluí búsquedas que no generan conversiones y liberá presupuesto para keywords de mayor valor. Es la acción con mayor impacto inmediato en ROAS.' },
];

const faqs = [
  { q: '¿Debo invertir primero en SEO o en Google Ads?', a: 'Depende del momento de tu negocio. Si necesitás leads en los próximos 30-60 días, Google Ads es la respuesta. Si pensás a 12-24 meses, construir SEO paralelo reduce tu dependencia del gasto pagado. La estrategia óptima combina ambos.' },
  { q: '¿Pagar por publicidad afecta mi posicionamiento orgánico?', a: 'No directamente. Google confirma que no existe ventaja de ranking orgánico por invertir en Ads. Sin embargo la sinergia existe de forma indirecta: los anuncios generan tráfico que mejora las métricas de usuario y revelan qué keywords transaccionales convierten.' },
  { q: '¿Cuál es un presupuesto mínimo realista para Google Ads?', a: 'Para obtener datos estadísticamente significativos, necesitás al menos 100 clics por grupo de anuncios. En nichos con CPC de 2-5 USD, un presupuesto mínimo de 500-1000 USD/mes permite hacer pruebas reales.' },
  { q: '¿Qué es el ROAS y cómo se calcula?', a: 'ROAS = Ingresos generados por anuncios ÷ Gasto en anuncios. Un ROAS de 4x significa que por cada dólar gastado obtenés 4 dólares en ingresos. El ROAS mínimo viable varía según tu margen bruto.' },
  { q: '¿Performance Max reemplaza las campañas de búsqueda clásicas?', a: 'No: es complementario. Search ofrece control granular ideal para capturar demanda existente. PMax expande el alcance a todos los inventarios de Google con optimización automática. La estrategia más efectiva combina ambos.' },
];

export default function SeoYSemPage() {
  useDocumentMeta({
    title: 'SEO y SEM en Marketing Digital: Diferencias y Estrategia 2026 | RankAgile',
    description:
      '¿Qué es SEO y SEM? Entendé cómo funcionan, en qué se diferencian y cuándo usar cada estrategia para mejorar tu visibilidad digital y maximizar el ROI.',
  });

  return (
    <>
      <PageSeo
        title="SEO y SEM en Marketing Digital: Diferencias y Estrategia 2026 | RankAgile"
        description="¿Qué es SEO y SEM? Entendé cómo funcionan, en qué se diferencian y cuándo usar cada estrategia para mejorar tu visibilidad digital y maximizar el ROI."
        image="/og/blog/seo-y-sem-en-marketing-digital.png"
        type="article"
      />
      <BlogPostLayout
      tag="SEO · SEM"
      date="Feb 2026"
      title="Orgánico y Pagado: Dos Fuerzas que Trabajan Juntas"
      lead="El debate SEO vs SEM es una trampa. Las empresas que dominan los resultados de búsqueda no eligen uno: operan ambos canales de forma sincronizada, usando datos de Google Ads para acelerar decisiones de SEO y el tráfico orgánico para reducir el CPA de sus campañas pagadas."
    >
      <h2>SEM: Visibilidad inmediata con precisión quirúrgica</h2>
      <p>
        El SEM (Search Engine Marketing) engloba las estrategias de publicidad de pago en motores de búsqueda. Su núcleo es <strong>Google Ads</strong>, un sistema de subasta en tiempo real donde las marcas compiten por mostrarse ante usuarios con intención de compra activa.
      </p>
      <p>
        El sistema opera bajo el modelo <strong>PPC</strong> (pago por clic). El <strong>Quality Score</strong> —combinación de relevancia del anuncio, CTR esperado y experiencia en la página de destino— determina tanto la posición del anuncio como el costo real por clic. Un Quality Score de 10 puede reducir el CPC hasta un 50% respecto a competidores con peor relevancia.
      </p>

      <h2>SEO vs SEM: Variables clave</h2>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>SEO</th>
            <th>SEM / Google Ads</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.variable}>
              <td><strong>{row.variable}</strong></td>
              <td>{row.seo}</td>
              <td>{row.sem}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Estrategias SEM para maximizar el ROAS</h2>
      {semStrategies.map((s) => (
        <div key={s.title} className="blogpost-card">
          <h4 className="blogpost-card-title">{s.title}</h4>
          <p className="blogpost-card-body">{s.body}</p>
        </div>
      ))}

      <h2>Cómo el SEO y el SEM se retroalimentan</h2>
      <p>La sinergia entre SEO y SEM es más potente que ambos canales por separado:</p>
      <ul>
        <li><strong>SEO alimenta SEM:</strong> keywords con tráfico orgánico validado son candidatos prioritarios para presupuesto en Ads.</li>
        <li><strong>SEM informa SEO:</strong> datos de Quality Score, CTR y conversión revelan qué keywords realmente importan.</li>
        <li><strong>Tráfico combinado mejora UX:</strong> más clics totales generan más señales positivas al algoritmo de Google.</li>
      </ul>
      <p className="blogpost-pullquote">
        El canal más eficiente a largo plazo siempre es el que combina ambos: Ads para capturar demanda actual, SEO para construir el activo que garantice visibilidad sostenible.
      </p>

      <h2>Más allá de SEO y SEM: la visibilidad en IA</h2>
      <p>
        En 2026, SEO y SEM cubren Google. Pero tus clientes también buscan en ChatGPT, Gemini y Perplexity. Esos canales requieren una estrategia diferente:{' '}
        <Link to="/blog/seo-vs-geo-vs-aeo">entendé las diferencias entre SEO, GEO y AEO</Link> para construir una arquitectura de visibilidad completa.
      </p>

      <h2>Preguntas frecuentes sobre SEO y SEM</h2>
      {faqs.map((f) => (
        <div key={f.q} className="blogpost-card">
          <h4 className="blogpost-card-title">{f.q}</h4>
          <p className="blogpost-card-body">{f.a}</p>
        </div>
      ))}

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-que-es-y-para-que-sirve">SEO: Qué es y para qué sirve</Link>
        </h4>
        <p className="blogpost-card-body">Todo lo que necesitás saber sobre el posicionamiento orgánico en Google: pilares, errores y estrategia.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/seo-completo">SEO Completo — Ver servicio</Link>
        </h4>
        <p className="blogpost-card-body">Estrategia integral de SEO técnico, contenido y autoridad de RankAgile.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/seo-analytics">SEO Analytics — Ver servicio</Link>
        </h4>
        <p className="blogpost-card-body">Datos claros, dashboards y decisiones basadas en performance real.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/contacto"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Diseñar mi estrategia SEO + SEM
        </Link>
      </p>
    </BlogPostLayout>
    </>
  );
}
