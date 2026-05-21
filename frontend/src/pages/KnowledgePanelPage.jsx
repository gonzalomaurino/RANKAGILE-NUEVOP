import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const steps = [
  { num: '01', title: 'Crear o reclamar la entidad en Google', body: 'Si tu empresa ya tiene un Knowledge Panel, reclamarlo a través de Google Search Console. Si no tiene, el proceso comienza construyendo señales de entidad: consistencia de NAP (nombre, dirección, teléfono) en todos los directorios, página de Wikipedia o Wikidata, y Schema Organization completo.' },
  { num: '02', title: 'Implementar Schema Organization completo', body: 'El markup Schema.org/Organization en tu homepage debe incluir: name, url, logo, description, foundingDate, numberOfEmployees (rango), address, telephone, email, sameAs (links a todos tus perfiles sociales y directorios). Este markup es la primera fuente que Google consulta para construir el Knowledge Panel.' },
  { num: '03', title: 'Construir presencia en Wikidata', body: 'Wikidata es la base de datos estructurada de Wikipedia. Es una de las fuentes más importantes para el Knowledge Graph de Google y para los LLMs. Crear o reclamar la entrada de tu empresa con información verificable y actualizada.' },
  { num: '04', title: 'Perfiles sociales verificados y completos', body: 'Google toma datos del Knowledge Panel de perfiles sociales oficiales: LinkedIn (empresa), Twitter/X, YouTube, Instagram. El atributo sameAs en tu Schema debe incluir las URLs de todos estos perfiles. Perfiles verificados (con badge) tienen más peso.' },
  { num: '05', title: 'Presencia en medios de autoridad', body: 'Menciones editoriales (no publicitarias) en medios de autoridad del sector refuerzan el Knowledge Graph. Google aprende que tu empresa es un referente legítimo cuando medios de confianza la mencionan en contexto editorial.' },
];

const benefits = [
  { title: 'Visibilidad en búsquedas de marca', body: 'Cuando alguien busca el nombre de tu empresa, el Knowledge Panel aparece a la derecha y ocupa el 30% visible de la pantalla. Es la primera impresión digital de tu empresa para cualquier usuario que investiga tu nombre.' },
  { title: 'Señal de entidad para LLMs', body: 'El Google Knowledge Graph es una de las principales fuentes de datos que los LLMs usan para aprender sobre empresas. Una empresa con Knowledge Panel activo y completo es más probable que sea citada por ChatGPT y Gemini.' },
  { title: 'Reducción del costo de E-E-A-T', body: 'Un Knowledge Panel activo es una señal implícita de Trustworthiness para Google. Páginas de un dominio con Knowledge Panel consolidado reciben beneficio de autoridad de entidad que mejora el posicionamiento general.' },
  { title: 'Protección de marca en búsquedas', body: 'El Knowledge Panel permite controlar la información que Google muestra sobre tu empresa: descripción, logo, datos de contacto, noticias recientes. Sin él, Google toma esa información de cualquier fuente disponible.' },
];

export default function KnowledgePanelPage() {
  useDocumentMeta({
    title: 'Cómo Conseguir un Knowledge Panel en Google: Guía 2026 | RankAgile',
    description:
      'El Knowledge Panel es la tarjeta lateral en Google que consolida tu entidad. Te explicamos cómo conseguirlo paso a paso para marcas y empresas.',
  });

  return (
    <>
      <PageSeo
        title="Cómo Conseguir un Knowledge Panel en Google: Guía 2026 | RankAgile"
        description="El Knowledge Panel es la tarjeta lateral en Google que consolida tu entidad. Te explicamos cómo conseguirlo paso a paso para marcas y empresas."
        image="/og/blog/knowledge-panel-google-como-conseguirlo.png"
        type="article"
      />
      <BlogPostLayout
      tag="GEO · Knowledge Graph"
      date="May 2026"
      title="Cómo Conseguir un Knowledge Panel en Google: Guía para Marcas y Empresas"
      lead="El Knowledge Panel es la tarjeta de información que aparece en el lateral derecho de Google cuando alguien busca el nombre de tu empresa. Es la señal más visible de que Google reconoce tu marca como una entidad real y verificable, y una de las bases del GEO."
    >
      {/* TODO: contenido real */}
      <h2>Qué es el Knowledge Panel de Google</h2>
      <p>
        El Knowledge Panel es un bloque de información estructurada que Google muestra en los resultados de búsqueda cuando el usuario busca el nombre de una entidad reconocida: empresa, persona, lugar, organización o producto. La información proviene del Google Knowledge Graph, la base de datos de entidades que Google construye combinando múltiples fuentes: Wikidata, sitios web oficiales, directorios de industria, Schema markup y datos de rastreo web.
      </p>
      <p>
        Tener un Knowledge Panel activo y completo es una señal crítica para el{' '}
        <Link to="/blog/como-aparecer-en-motores-de-ia">proceso de visibilidad en motores de IA</Link>: el Google Knowledge Graph es una de las fuentes primarias que los LLMs usan para aprender sobre empresas y organizaciones.
      </p>

      <h2>Por qué el Knowledge Panel importa para el GEO</h2>
      {benefits.map((b) => (
        <div key={b.title} className="blogpost-card">
          <h4 className="blogpost-card-title">{b.title}</h4>
          <p className="blogpost-card-body">{b.body}</p>
        </div>
      ))}

      <h2>Cómo conseguir un Knowledge Panel en 5 pasos</h2>
      {steps.map((s) => (
        <div key={s.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{s.num} · {s.title}</h4>
          <p className="blogpost-card-body">{s.body}</p>
        </div>
      ))}

      <h2>Knowledge Panel vs. Business Profile</h2>
      <p>
        Es importante no confundir el Knowledge Panel (que aparece para búsquedas de marca en Google web) con el Google Business Profile (que aparece en Google Maps para negocios locales). Son sistemas distintos con señales distintas:
      </p>
      <ul>
        <li><strong>Knowledge Panel:</strong> para entidades reconocidas (empresas, personas públicas, marcas). Se construye con Wikidata, Schema, backlinks de autoridad y presencia editorial.</li>
        <li><strong>Business Profile:</strong> para negocios locales. Se gestiona directamente en Google Business.</li>
      </ul>
      <p>
        Una empresa B2B con operación internacional necesita ambos, pero el Knowledge Panel es el que impacta el GEO.
      </p>
      <p className="blogpost-pullquote">
        El Knowledge Panel no se solicita a Google: se gana. Y se gana construyendo la base de señales de entidad que el Knowledge Graph necesita para reconocer tu marca.
      </p>

      <h2>Wikidata: la base del Knowledge Graph</h2>
      <p>
        Wikidata es la base de datos estructurada de la Fundación Wikimedia. Es abierta, editable y es una de las fuentes más pesadas para el Google Knowledge Graph. Crear o actualizar la entrada de tu empresa en Wikidata con datos verificables y enlazados correctamente es uno de los pasos de mayor impacto para conseguir y consolidar el Knowledge Panel.
      </p>
      <p>
        Para profundizar en cómo usar Wikidata y Wikipedia para construir autoridad de marca,{' '}
        <Link to="/blog/wikipedia-wikidata-marcas">consultá nuestra guía de Wikipedia y Wikidata para marcas</Link>.
      </p>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/como-aparecer-en-motores-de-ia">Cómo aparecer en motores de IA: guía completa</Link>
        </h4>
        <p className="blogpost-card-body">El Knowledge Panel es uno de los 6 pasos del proceso de visibilidad en LLMs.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/wikipedia-wikidata-marcas">Wikipedia y Wikidata para marcas</Link>
        </h4>
        <p className="blogpost-card-body">La base de datos que alimenta el Knowledge Graph de Google y los LLMs.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/schema-markup-para-geo">Schema Markup para GEO</Link>
        </h4>
        <p className="blogpost-card-body">El Schema Organization que alimenta directamente el Knowledge Panel.</p>
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
