import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/gtm';

/**
 * Hook para trackear automáticamente los cambios de ruta en una SPA.
 *
 * Por qué saltamos el primer render:
 *   Cuando GTM carga (via script en index.html) dispara el evento 'gtm.js'
 *   que a su vez activa el trigger "All Pages" en GTM y envía el primer
 *   page_view a GA4. Si también lo enviáramos aquí, se contaría doble.
 *
 * Por qué usamos setTimeout(100ms):
 *   useDocumentMeta (el hook SEO del proyecto) actualiza document.title
 *   en el mismo ciclo de render. El pequeño delay garantiza que el título
 *   ya refleja la página nueva antes de enviarlo a GA4.
 *
 * Debe usarse dentro del contexto de React Router (dentro de BrowserRouter).
 */
export function useGTMPageTracking() {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const prevPath = useRef(null);

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    // Primera carga: GTM ya disparó el page_view vía gtm.js → saltamos
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPath.current = currentPath;
      return;
    }

    // Misma ruta (ej: cambio de hash puro) → no duplicar
    if (prevPath.current === currentPath) return;
    prevPath.current = currentPath;

    // Leve delay para capturar el document.title actualizado
    const timer = setTimeout(() => {
      trackPageView(currentPath, document.title);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);
}
