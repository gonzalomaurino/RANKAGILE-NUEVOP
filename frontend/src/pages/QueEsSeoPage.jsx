import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const pillars = [
  {
    name: 'SEO Técnico',
    body: 'Rastreabilidad, indexabilidad, Core Web Vitals, estructura de URLs, datos estructurados y seguridad HTTPS. Es la base: sin ella, el contenido no existe para los motores de búsqueda.',
  },
  {
    name: 'SEO de Contenido',
    body: 'Investigación de intención de búsqueda, arquitectura de información, clústeres temáticos y optimización semántica. Define de qué temas sos referente.',
  },
  {
    name: 'SEO de Autoridad',
    body: 'Construcción de enlaces, menciones de marca, señales E-E-A-T (Experiencia, Expertise, Autoridad, Confianza). Determina cuánto confía Google en tu dominio.',
  },
];

const mistakes = [
  { title: 'Optimizar sin analizar la intención de búsqueda', body: 'Una keyword de 10.000 búsquedas mensuales con intención informacional no traerá ventas si tu página es una landing comercial. La intención manda sobre el volumen.' },
  { title: 'Canibalizaciones de keywords no detectadas', body: 'Cuando dos páginas compiten por la misma keyword, Google no sabe cuál posicionar y reduce la visibilidad de ambas. Detectar y consolidar es una de las acciones de mayor impacto.' },
  { title: 'Core Web Vitals por debajo del umbral', body: 'LCP superior a 2.5s, INP superior a 200ms o CLS superior a 0.1 penalizan el posicionamiento. La mayoría de sitios sin optimización de imágenes y CDN no superan estos umbrales en móvil.' },
  { title: 'Estructura de enlazado interno deficiente', body: 'El enlazado interno distribuye autoridad entre páginas. Páginas huérfanas (sin enlaces entrantes internos) no reciben PageRank interno y raramente rankean, independientemente de la calidad de su contenido.' },
  { title: 'Ignorar las señales de Google Search Console', body: 'GSC reporta errores de cobertura, páginas excluidas y caídas de impresiones en tiempo real. Ignorar estas alertas permite que problemas menores se conviertan en caídas de tráfico significativas.' },
  { title: 'Contenido sin autoridad temática (E-E-A-T)', body: 'Google prioriza contenido que demuestra experiencia real. Páginas sin autor identificable, sin datos originales y sin profundidad temática pierden visibilidad progresivamente en sectores YMYL.' },
];

const faqs = [
  { q: '¿Cuánto tiempo tarda en posicionar una página nueva?', a: 'En dominios nuevos, el "sandbox" de Google puede demorar resultados 3-6 meses. En dominios con autoridad establecida, una página bien optimizada puede rankear en 4-8 semanas. Las keywords de cola larga posicionan más rápido y con menos recursos.' },
  { q: '¿Cuál es la diferencia entre SEO On-Page, Off-Page y Técnico?', a: 'On-Page: optimización del contenido y metadatos (títulos, H1-H6, schema). Off-Page: construcción de autoridad mediante backlinks de calidad. Técnico: rastreabilidad, velocidad, estructura de datos, hreflang y Core Web Vitals. Los tres deben operar en paralelo.' },
  { q: '¿Cómo afectan las actualizaciones de Google a mi posicionamiento?', a: 'Google lanza Core Updates 3-4 veces al año. Los sitios que pierden posiciones típicamente tienen problemas de E-E-A-T, thin content o señales de UX negativas. La recuperación puede tardar hasta el siguiente update (3 meses).' },
  { q: '¿Vale la pena el SEO para empresas pequeñas frente a Google Ads?', a: 'Google Ads genera tráfico inmediato pero su costo puede superar los 5-20 USD por clic en sectores competitivos. El SEO tiene costo inicial más alto pero el costo marginal decrece con el tiempo. La estrategia óptima combina ambos.' },
];

export default function QueEsSeoPage() {
  useDocumentMeta({
    title: 'SEO: ¿Qué es y para qué sirve? Guía Completa 2026 | RankAgile',
    description:
      '¿Qué es el SEO y para qué sirve? Cómo funciona el posicionamiento en Google, sus tres pilares, errores frecuentes y cómo aplicarlo para atraer más clientes.',
  });

  return (
    <>
      <PageSeo
        title="SEO: ¿Qué es y para qué sirve? Guía Completa 2026 | RankAgile"
        description="¿Qué es el SEO y para qué sirve? Cómo funciona el posicionamiento en Google, sus tres pilares, errores frecuentes y cómo aplicarlo para atraer más clientes."
        image="/og/blog/seo-que-es-y-para-que-sirve.png"
        type="article"
      />
      <BlogPostLayout
      tag="SEO"
      date="Ene 2026"
      title="SEO: El Sistema que Decide tu Visibilidad en Internet"
      lead="El SEO no es una táctica de marketing: es la infraestructura que determina si tu sitio existe para Google o no. Entender cómo funcionan los algoritmos de búsqueda es el primer paso para construir visibilidad orgánica sostenible."
    >
      <h2>Cómo Google decide qué mostrar primero</h2>
      <p>
        Google procesa más de 8.500 millones de búsquedas diarias. Su algoritmo evalúa más de 200 factores para decidir qué páginas aparecen primero: <strong>relevancia semántica, autoridad del dominio, experiencia de usuario y señales técnicas</strong>.
      </p>
      <p>
        A diferencia de los anuncios pagados que desaparecen cuando se acaba el presupuesto, el <strong>tráfico orgánico generado por SEO es compuesto</strong>: cada pieza de contenido optimizado sigue atrayendo visitas meses o años después de su publicación. Las empresas con estrategias SEO maduras generan entre el 40% y el 70% de su tráfico total de forma orgánica.
      </p>

      <h2>Los tres pilares del SEO</h2>
      <p>Los tres pilares que determinan tu ranking operan en paralelo y se refuerzan entre sí.</p>
      {pillars.map((p) => (
        <div key={p.name} className="blogpost-card">
          <h4 className="blogpost-card-title">{p.name}</h4>
          <p className="blogpost-card-body">{p.body}</p>
        </div>
      ))}

      <h2>Cómo funciona el algoritmo de Google</h2>
      <p>El algoritmo opera en tres fases secuenciales. Comprender cada etapa permite identificar exactamente dónde optimizar.</p>

      <h3>1. Rastreo e indexación</h3>
      <p>
        Googlebot rastrea tu sitio siguiendo enlaces. Una arquitectura técnica correcta (sitemap XML, robots.txt, estructura de URLs canónicas, velocidad de carga) determina qué páginas se indexan. Sin indexación, el contenido no existe en los resultados de búsqueda independientemente de su calidad.
      </p>

      <h3>2. Evaluación de relevancia</h3>
      <p>
        Google evalúa la relevancia semántica: analiza el contenido, las entidades mencionadas, la intención de búsqueda que satisface y su relación con el resto del sitio. El modelo de lenguaje interno de Google (MUM/Gemini) entiende el significado real del contenido más allá de las palabras clave exactas.
      </p>

      <h3>3. Cálculo del ranking</h3>
      <p>
        El ranking final combina relevancia con autoridad: PageRank (calidad y cantidad de backlinks), señales de experiencia de usuario (CTR, dwell time, Core Web Vitals) y factores E-E-A-T. El resultado puede cambiar con cada Core Update.
      </p>

      <h2>Errores frecuentes que frenan el ranking</h2>
      {mistakes.map((m) => (
        <div key={m.title} className="blogpost-card">
          <h4 className="blogpost-card-title">{m.title}</h4>
          <p className="blogpost-card-body">{m.body}</p>
        </div>
      ))}

      <h2>Preguntas técnicas sobre SEO</h2>
      {faqs.map((f) => (
        <div key={f.q} className="blogpost-card">
          <h4 className="blogpost-card-title">{f.q}</h4>
          <p className="blogpost-card-body">{f.a}</p>
        </div>
      ))}

      <h2>SEO como ventaja competitiva compuesta</h2>
      <p>
        Las empresas que invierten consistentemente en SEO durante 2 o más años construyen un activo digital que se comporta como <strong>interés compuesto</strong>: cada contenido publicado, cada backlink obtenido y cada mejora técnica implementada aumenta la autoridad del dominio. A diferencia de los canales pagados, este activo no desaparece si se detiene la inversión puntualmente.
      </p>
      <p className="blogpost-pullquote">
        En RankAgile trabajamos SEO con una visión de 18–36 meses: construimos la arquitectura correcta desde el inicio para que los resultados escalen de forma predecible.
      </p>

      <h2>SEO y la nueva capa de visibilidad en IA</h2>
      <p>
        En 2026, el SEO ya no es suficiente por sí solo. Los motores generativos (ChatGPT, Gemini, Perplexity) están desplazando tráfico orgánico hacia respuestas directas. Entendé{' '}
        <Link to="/blog/seo-vs-geo-vs-aeo">las diferencias entre SEO, GEO y AEO</Link> y cómo construir una estrategia que cubra las tres capas de visibilidad. Si querés entender específicamente cómo posicionar tu marca en los motores de IA,{' '}
        <Link to="/blog/como-aparecer-en-motores-de-ia">la guía completa de visibilidad en motores de IA</Link> cubre el proceso paso a paso.
      </p>

      <h2>Recursos para profundizar en SEO</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-tecnico-que-es">Qué es el SEO Técnico y cómo auditarlo</Link>
        </h4>
        <p className="blogpost-card-body">Core Web Vitals, rastreabilidad, indexabilidad, Schema y todos los componentes de la base técnica del SEO.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/que-es-on-page-seo">Qué es el SEO On-Page: guía de optimización</Link>
        </h4>
        <p className="blogpost-card-body">Títulos, H1-H6, meta descriptions, internal linking e imágenes: todo lo que controlás dentro de cada página.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/que-es-link-building">Qué es Link Building y cómo conseguir backlinks</Link>
        </h4>
        <p className="blogpost-card-body">Estrategias éticas de construcción de autoridad externa: digital PR, guest posting, HARO y más.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/que-es-eeat-google">Qué es E-E-A-T en Google</Link>
        </h4>
        <p className="blogpost-card-body">Los 4 criterios de calidad que Google usa para evaluar contenido y cómo construir señales sólidas.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-vs-geo-vs-aeo">SEO vs GEO vs AEO: Las diferencias reales</Link>
        </h4>
        <p className="blogpost-card-body">El mapa completo del ecosistema de visibilidad digital en 2026.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-y-sem-en-marketing-digital">SEO y SEM en Marketing Digital</Link>
        </h4>
        <p className="blogpost-card-body">Orgánico y pagado trabajando juntos: cuándo usar cada uno y cómo se retroalimentan.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/como-funciona-el-algoritmo-pagerank-de-google">Cómo funciona el algoritmo PageRank de Google</Link>
        </h4>
        <p className="blogpost-card-body">El sistema de ranking que asigna autoridad a páginas según sus backlinks.</p>
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
    </>
  );
}
