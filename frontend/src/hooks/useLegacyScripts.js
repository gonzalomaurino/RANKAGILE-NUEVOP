import { useEffect } from 'react';
import bodyScriptsHtml from '../raw/body-scripts.html?raw';

/**
 * Loads the original Divi/WordPress body-end scripts sequentially AFTER React has
 * mounted, so jQuery-based plugins bind to the rendered DOM. Preserves script
 * execution order (inline config vars must run before their dependent externals).
 */
export default function useLegacyScripts() {
  useEffect(() => {
    if (window.__rankagileLegacyLoaded) return;
    window.__rankagileLegacyLoaded = true;

    const parser = new DOMParser();
    const doc = parser.parseFromString(bodyScriptsHtml, 'text/html');
    const nodes = Array.from(doc.body.childNodes);
    let idx = 0;

    const loadNext = () => {
      while (idx < nodes.length) {
        const node = nodes[idx++];
        if (node.nodeType === 1 && node.tagName === 'SCRIPT') {
          const s = document.createElement('script');
          for (const attr of node.attributes) s.setAttribute(attr.name, attr.value);
          if (node.src) {
            s.onload = loadNext;
            s.onerror = loadNext;
            document.body.appendChild(s);
            return;
          }
          s.textContent = node.textContent;
          document.body.appendChild(s);
        } else if (node.nodeType === 1 && node.tagName === 'STYLE') {
          const s = document.createElement('style');
          for (const attr of node.attributes) s.setAttribute(attr.name, attr.value);
          s.textContent = node.textContent;
          document.head.appendChild(s);
        }
      }
    };

    loadNext();
  }, []);
}
