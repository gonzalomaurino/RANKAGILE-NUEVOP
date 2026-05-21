import useDocumentMeta from '../hooks/useDocumentMeta.js';
import PageSeo from '../seo/PageSeo';
import LegalPageLayout from '../components/LegalPageLayout.jsx';

export default function CookiesPolicyPage() {
  useDocumentMeta({
    title: 'Política de Cookies | RankAgile',
    description:
      'Política de Cookies de RankAgile: qué cookies usamos, para qué, y cómo podés gestionarlas desde tu navegador.',
  });

  return (
    <>
      <PageSeo
        title="Política de Cookies | RankAgile"
        description="Política de Cookies de RankAgile: qué cookies usamos, para qué, y cómo podés gestionarlas desde tu navegador."
      />
      <LegalPageLayout
      title="Política de Cookies"
      lastUpdated="10 de marzo de 2026"
      lead={<>En <strong>RankAgile</strong> utilizamos cookies y tecnologías similares para mejorar la experiencia de los usuarios, analizar el tráfico del sitio web y ofrecer contenido personalizado. Esta Política de Cookies explica qué son las cookies, cómo las utilizamos y cómo podés gestionarlas.</>}
    >
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitás un sitio web. Estas permiten que el sitio recuerde información sobre tu visita, como tu idioma preferido o configuraciones, lo que puede facilitar tu próxima visita y hacer que el sitio sea más útil para vos.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>
      <h3>Cookies necesarias</h3>
      <p>
        Son esenciales para el funcionamiento del sitio web y no pueden desactivarse en nuestros sistemas. Permiten funciones básicas como la navegación o el acceso a áreas seguras del sitio.
      </p>

      <h3>Cookies de análisis o rendimiento</h3>
      <p>Nos permiten analizar el comportamiento de los usuarios en el sitio para mejorar su funcionamiento y experiencia.</p>
      <p>Ejemplo de herramientas utilizadas:</p>
      <ul>
        <li>Google Analytics</li>
      </ul>

      <h3>Cookies funcionales</h3>
      <p>Permiten recordar tus preferencias (como idioma o región) para ofrecer una experiencia más personalizada.</p>

      <h3>Cookies de marketing</h3>
      <p>Se utilizan para mostrar publicidad relevante para los usuarios y medir la efectividad de las campañas de marketing.</p>

      <h2>3. ¿Cómo podés gestionar las cookies?</h2>
      <p>Cuando visitás nuestro sitio por primera vez, se muestra un banner que te permite:</p>
      <ul>
        <li>Aceptar todas las cookies</li>
        <li>Rechazar cookies no esenciales</li>
      </ul>
      <p>También podés gestionar o eliminar cookies desde la configuración de tu navegador.</p>
      <p>Guías de los navegadores más utilizados:</p>
      <ul>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Safari</li>
        <li>Microsoft Edge</li>
      </ul>
      <p>Tené en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del sitio.</p>

      <h2>4. Cookies de terceros</h2>
      <p>
        Algunas cookies pueden ser instaladas por servicios de terceros que aparecen en nuestras páginas. Estas cookies permiten analizar el tráfico o integrar funcionalidades externas.
      </p>
      <p>Ejemplos de servicios que pueden utilizar cookies:</p>
      <ul>
        <li>Google</li>
        <li>HubSpot</li>
      </ul>
      <p>Cada proveedor tiene su propia política de privacidad y cookies.</p>

      <h2>5. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios legales o mejoras en nuestros servicios. Te recomendamos revisar esta página periódicamente para estar informado.
      </p>

      <h2>6. Contacto</h2>
      <p>Si tenés preguntas sobre esta Política de Cookies o sobre cómo utilizamos tus datos, podés contactarnos en:</p>
      <a className="legal-contact-link" href="mailto:contacto@rankagile.com">contacto@rankagile.com</a>
    </LegalPageLayout>
    </>
  );
}
