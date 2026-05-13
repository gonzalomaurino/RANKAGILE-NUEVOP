import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';

const modules = [
  { title: 'Conector GSC Automatizado', body: 'Conecta Search Console vía API REST y actualiza el modelo diariamente sin intervención manual. Elimina la exportación manual de CSV y reduce errores de consolidación.' },
  { title: 'Panel de Keywords y CTR', body: 'Clasifica keywords por intención, monitorea posición media con tendencia histórica y detecta caídas de CTR que indican oportunidades de optimización de snippet.' },
  { title: 'Tracking de Tráfico Orgánico', body: 'Segmenta sesiones orgánicas por marca vs. no-marca, por dispositivo y por país. Identifica canibalizaciones y páginas con alto potencial de mejora en tiempo real.' },
  { title: 'Scorecard Ejecutivo', body: 'Vista de página única con KPIs principales: visibilidad, tráfico, conversiones y ROI estimado. Diseñada para presentaciones a clientes que no requieren profundidad técnica.' },
];

const dataSources = [
  { source: 'Google Search Console', metrics: 'Impresiones, Clics, CTR, Posición Media' },
  { source: 'Google Analytics 4', metrics: 'Sesiones orgánicas, Conversiones, Tasa de rebote' },
  { source: 'Herramientas de Ranking', metrics: 'Salud del sitio, Backlinks, Rankings de keywords' },
  { source: 'Google Business Profile', metrics: 'SEO Local, Visibilidad, Interacciones' },
];

const daxMetrics = [
  'Total de clics orgánicos',
  'Total de impresiones',
  'CTR promedio',
  'Posición media global',
  'Variación semana a semana',
  'Share of Voice por categoría',
];

export default function DashboardPowerBiPage() {
  useDocumentMeta({
    title: 'Dashboard SEO en Power BI para Agencias | RankAgile',
    description:
      'Dashboard SEO en Power BI: visualizá tráfico orgánico, rankings, conversiones y KPIs clave en un solo panel. Guía completa para agencias.',
  });

  return (
    <BlogPostLayout
      tag="SEO Analytics"
      date="Mar 2026"
      title="Dashboard SEO en Power BI para Agencias"
      lead="Un dashboard SEO centralizado en Power BI permite a las agencias consolidar datos de GSC, GA4 y herramientas de ranking en un único entorno visual. El resultado: decisiones más rápidas, reportes más claros y clientes mejor informados."
    >
      <h2>Cómo crear un Dashboard SEO en Power BI</h2>
      <p>
        Construir un dashboard SEO en <strong>Power BI</strong> implica trabajar con datos estructurados y convertirlos en visualizaciones que permitan analizar el rendimiento de un sitio web de forma clara. Esta herramienta es especialmente potente cuando se necesita integrar información de múltiples fuentes y realizar análisis avanzados.
      </p>

      <h2>01. Preparación de los datos</h2>
      <p>
        El primer paso consiste en <strong>obtener y preparar los datos que alimentarán el panel</strong>. Un dashboard solo es tan útil como la calidad de la información que lo compone.
      </p>
      <p>
        La herramienta más utilizada como fuente principal es <strong>Google Search Console</strong>, que proporciona información detallada sobre el rendimiento de un sitio en Google: consultas, clics, impresiones, CTR y posición promedio. Los datos se exportan en <strong>Excel o CSV</strong>, formatos que Power BI importa fácilmente.
      </p>

      <h2>02. Visualizaciones recomendadas</h2>
      <p>Un dashboard SEO efectivo en Power BI suele incluir:</p>
      <ul>
        <li>Gráficos de tendencia de tráfico orgánico</li>
        <li>Mapas de calor de keywords por posición e impresiones</li>
        <li>Comparativas temporales (semana a semana, mes a mes, año a año)</li>
        <li>Scorecards ejecutivos con KPIs clave</li>
        <li>Segmentación brand vs. non-brand</li>
      </ul>

      <h2>03. Importar datos en Power BI</h2>
      <p>
        Una vez exportados los datos, se cargan en Power BI mediante la función <strong>Get Data</strong>. Durante la carga, Power BI permite abrir <strong>Power Query</strong>, donde se pueden realizar ajustes sin modificar el archivo original.
      </p>
      <p>En esta etapa es recomendable:</p>
      <ul>
        <li>Eliminar columnas innecesarias</li>
        <li>Corregir formatos de datos (fechas, números)</li>
        <li>Filtrar palabras clave irrelevantes o branded en análisis non-brand</li>
        <li>Eliminar valores nulos que distorsionen promedios</li>
      </ul>

      <h2>04. Crear métricas SEO con DAX</h2>
      <p>
        Las métricas en Power BI se crean con <strong>DAX</strong> (Data Analysis Expressions), un lenguaje de fórmulas que permite calcular indicadores analíticos. Las medidas creadas con DAX se reutilizan en diferentes visualizaciones del mismo dashboard.
      </p>
      <p>Métricas DAX comunes en un dashboard SEO:</p>
      <div className="blogpost-stats">
        {daxMetrics.map((m) => (
          <div key={m} className="blogpost-stat">
            <p className="blogpost-stat-label">{m}</p>
          </div>
        ))}
      </div>

      <h2>Módulos clave del dashboard</h2>
      {modules.map((m) => (
        <div key={m.title} className="blogpost-card">
          <h4 className="blogpost-card-title">{m.title}</h4>
          <p className="blogpost-card-body">{m.body}</p>
        </div>
      ))}

      <h2>Arquitectura de datos del dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Fuente</th>
            <th>Métricas principales</th>
          </tr>
        </thead>
        <tbody>
          {dataSources.map((row) => (
            <tr key={row.source}>
              <td><strong>{row.source}</strong></td>
              <td>{row.metrics}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Quién usa un dashboard SEO y para qué</h2>
      <p>
        Un <strong>especialista en posicionamiento web</strong> usa el dashboard para analizar cómo se posicionan las páginas y detectar posibles mejoras. El <strong>responsable de contenidos</strong> lo usa para entender qué tipo de contenido funciona mejor. El <strong>director o cliente</strong> usa el scorecard ejecutivo para entender el valor del SEO sin profundidad técnica.
      </p>
      <p className="blogpost-pullquote">
        Un dashboard SEO funciona como una herramienta de análisis que permite transformar datos en decisiones estratégicas.
      </p>

      <h2>Soluciones SEO Analytics de RankAgile</h2>
      <p>
        Si te interesa optimizar tu estrategia de análisis de datos SEO, dashboards personalizados, automatización de reportes y herramientas de inteligencia empresarial, en RankAgile desarrollamos soluciones integrales para agencias y equipos de marketing.
      </p>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/seo-analytics">SEO Analytics — Ver servicio</Link>
        </h4>
        <p className="blogpost-card-body">Datos claros, dashboards y decisiones basadas en performance real. El servicio de analytics de RankAgile.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-que-es-y-para-que-sirve">SEO: Qué es y para qué sirve</Link>
        </h4>
        <p className="blogpost-card-body">La base conceptual del SEO: pilares, algoritmo de Google y estrategia de largo plazo.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/seo-completo">SEO Completo — Ver servicio</Link>
        </h4>
        <p className="blogpost-card-body">Estrategia integral de SEO técnico, contenido y autoridad para escalar visibilidad.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/contacto"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Solicitar dashboard SEO personalizado
        </Link>
      </p>
    </BlogPostLayout>
  );
}
