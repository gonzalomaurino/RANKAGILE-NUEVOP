import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';

const pillars = [
  { letter: 'E', name: 'Experience (Experiencia)', body: 'Evidencia de experiencia directa con el tema. Contenido escrito por alguien que ha usado el producto, visitado el lugar o vivido la situación. Google premia el contenido de primera mano frente al contenido sintetizado o teórico. Señales: casos reales, datos propios, capturas de pantalla, testimonios.' },
  { letter: 'E', name: 'Expertise (Especialización)', body: 'Nivel de conocimiento especializado en el tema. Para contenido YMYL (salud, finanzas, legal, seguridad), se requiere expertise demostrable con credenciales reconocibles. Para otros temas, la profundidad técnica y la exhaustividad del contenido son los indicadores.' },
  { letter: 'A', name: 'Authoritativeness (Autoridad)', body: 'Reconocimiento externo de la autoridad en el tema. Se mide principalmente por backlinks de sitios de autoridad del mismo sector, menciones en medios especializados, citas en Wikipedia y presencia en fuentes de referencia de la industria.' },
  { letter: 'T', name: 'Trustworthiness (Confianza)', body: 'La T es el elemento más crítico según las Quality Rater Guidelines de 2024. Incluye: HTTPS, transparencia sobre quién publica el contenido, política de privacidad clara, información de contacto visible, ausencia de claims engañosos y UX sin dark patterns.' },
];

const signals = [
  { category: 'Contenido', items: ['Autor identificado con nombre real y bio', 'Fecha de publicación y actualización visible', 'Fuentes citadas y verificables', 'Datos originales (estadísticas propias, estudios)', 'Profundidad temática superior al contenido competidor'] },
  { category: 'Técnico', items: ['HTTPS activo y certificado válido', 'Tiempo de carga rápido (LCP < 2.5s)', 'Sin contenido engañoso ni dark patterns', 'Schema Author, Organization y Article implementados', 'Knowledge Panel de Google activo y completo'] },
  { category: 'Autoridad externa', items: ['Backlinks de medios especializados del sector', 'Menciones en Wikipedia o Wikidata', 'Perfil en G2, Capterra o directorios de industria', 'Citas en investigaciones o estudios del sector', 'Presencia editorial en LinkedIn y podcasts de autoridad'] },
];

export default function EEATPage() {
  useDocumentMeta({
    title: 'Qué es E-E-A-T en Google: Experiencia, Expertise, Autoridad y Confianza | RankAgile',
    description:
      'E-E-A-T son los 4 criterios de calidad que Google usa para evaluar contenido. Te explicamos cómo construir señales E-E-A-T sólidas para tu sitio.',
  });

  return (
    <BlogPostLayout
      tag="E-E-A-T"
      date="May 2026"
      title="Qué es E-E-A-T en Google y cómo construir señales de calidad"
      lead="E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) son los cuatro criterios que los Quality Raters de Google usan para evaluar la calidad de una página. En 2026, sin señales E-E-A-T claras, el contenido pierde posiciones progresivamente en sectores de alta competencia."
    >
      {/* TODO: contenido real */}
      <h2>Qué es E-E-A-T: definición directa</h2>
      <p>
        E-E-A-T es el acrónimo de Experience (Experiencia), Expertise (Especialización), Authoritativeness (Autoridad) y Trustworthiness (Confianza). Es el marco conceptual que Google usa en sus Quality Rater Guidelines para evaluar si una página ofrece contenido de alta calidad. No es un algoritmo directo con una puntuación numérica, sino un conjunto de señales que el algoritmo interpreta para determinar qué sitios merecen posicionar bien para búsquedas importantes.
      </p>
      <p>
        La "E" de Experience se añadió en diciembre de 2022, elevando el framework de E-A-T a E-E-A-T. Este cambio reflejó la prioridad de Google por el contenido generado desde la experiencia real, en respuesta a la proliferación de contenido generado por IA sin verificación.
      </p>
      <p>
        Si querés entender E-E-A-T en el contexto del SEO completo, la{' '}
        <Link to="/blog/seo-que-es-y-para-que-sirve">guía completa de SEO de RankAgile</Link> explica cómo se relaciona con los tres pilares del posicionamiento.
      </p>

      <h2>Los 4 pilares del E-E-A-T explicados</h2>
      {pillars.map((p, i) => (
        <div key={i} className="blogpost-card">
          <h4 className="blogpost-card-title">
            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{p.letter}</span> — {p.name}
          </h4>
          <p className="blogpost-card-body">{p.body}</p>
        </div>
      ))}

      <h2>E-E-A-T y las páginas YMYL</h2>
      <p>
        YMYL (Your Money or Your Life) es la categoría de contenido donde el E-E-A-T tiene mayor impacto. Son páginas cuyo contenido puede afectar directamente la salud, el dinero, la seguridad o el bienestar del usuario: médicos, finanzas, legal, seguridad, información de emergencias.
      </p>
      <p>
        En estas categorías, Google aplica un estándar de calidad más alto. Publicar contenido médico o financiero sin autor identificado con credenciales verificables es una de las señales negativas más fuertes para el posicionamiento.
      </p>
      <p className="blogpost-pullquote">
        La Trustworthiness es la T de E-E-A-T y es el pilar más crítico. Un sitio que no genera confianza no puede rankear bien, independientemente del contenido.
      </p>

      <h2>Cómo construir señales E-E-A-T: checklist práctico</h2>
      {signals.map((s) => (
        <div key={s.category} className="blogpost-card">
          <h4 className="blogpost-card-title">{s.category}</h4>
          <ul style={{ margin: '8px 0 0', paddingLeft: 20 }}>
            {s.items.map((item) => (
              <li key={item} style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-dim)', marginBottom: 4 }}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>E-E-A-T y la visibilidad en LLMs</h2>
      <p>
        Las mismas señales que construyen E-E-A-T para Google también construyen autoridad en los modelos de lenguaje. Wikipedia, Wikidata, Google Knowledge Panel y backlinks de medios especializados son fuentes que tanto Google como ChatGPT, Gemini y Perplexity usan para evaluar si una marca es una referencia legítima en su categoría.
      </p>
      <p>
        Esto es parte de lo que trabaja el{' '}
        <Link to="/servicios/geo">GEO (Generative Engine Optimization)</Link>: construir la capa de autoridad que hace que los modelos de IA citen tu marca como referente.
      </p>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-que-es-y-para-que-sirve">SEO: Guía completa del posicionamiento</Link>
        </h4>
        <p className="blogpost-card-body">E-E-A-T en el contexto de los tres pilares del SEO y cómo construir autoridad de dominio.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/que-es-link-building">Qué es Link Building y cómo conseguir backlinks</Link>
        </h4>
        <p className="blogpost-card-body">Los backlinks de autoridad son la señal externa más fuerte para construir E-E-A-T.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/wikipedia-wikidata-marcas">Wikipedia y Wikidata para marcas</Link>
        </h4>
        <p className="blogpost-card-body">Cómo construir presencia en las fuentes que Google y los LLMs usan para verificar autoridad de marca.</p>
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
