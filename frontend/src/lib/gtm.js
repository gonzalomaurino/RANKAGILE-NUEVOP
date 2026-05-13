/**
 * GTM + GA4 Utility Module — RankAgile
 *
 * Este módulo es el único punto de contacto entre la app y GTM.
 * Centralizar aquí todas las llamadas facilita agregar Meta Pixel, Hotjar, etc.
 * sin tocar los componentes.
 *
 * Flujo de datos:
 *   Componente React → gtmPush() → window.dataLayer → GTM → GA4 / otros tags
 */

/** ID de Google Tag Manager — cambiar si se migra de cuenta */
export const GTM_ID = 'GTM-KDNLXPDP';

/** ID de medición GA4 (referencia documental; GA4 vive dentro de GTM) */
export const GA4_ID = 'G-MRVWKYZBLG';

/**
 * Envía cualquier objeto al dataLayer de GTM.
 * Es seguro llamarlo aunque el script de GTM no haya cargado aún:
 * el array ya está inicializado en index.html.
 *
 * @param {object} payload - Objeto a empujar al dataLayer
 */
export function gtmPush(payload) {
  if (typeof window === 'undefined') return; // SSR-safe
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 * Envía un evento page_view para una ruta SPA.
 * Llamar en cada cambio de ruta luego de la carga inicial.
 *
 * En GTM, configurar un trigger "Custom Event" con nombre "page_view"
 * y asociarlo al tag de GA4 Configuration o GA4 Event.
 *
 * @param {string} path  - Ruta actual, ej: '/contacto' o '/preview/geo'
 * @param {string} [title] - Título de la página; por defecto document.title
 */
export function trackPageView(path, title) {
  gtmPush({
    event: 'page_view',
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.origin + path,
    page_referrer: document.referrer || '',
  });
}

/**
 * Envía un evento personalizado de GA4 a través de GTM.
 * Útil para clicks en CTAs, envíos de formularios, descargas, etc.
 *
 * Ejemplo de uso:
 *   trackEvent('form_submit', { form_name: 'contacto', method: 'email' });
 *   trackEvent('cta_click',   { cta_text: 'Solicitar Auditoría', page: '/contacto' });
 *
 * @param {string} eventName - Nombre del evento GA4 (snake_case recomendado)
 * @param {object} [params]  - Parámetros adicionales del evento
 */
export function trackEvent(eventName, params = {}) {
  gtmPush({
    event: eventName,
    ...params,
  });
}
