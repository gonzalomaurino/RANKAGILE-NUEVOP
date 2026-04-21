import { useEffect } from 'react';

export default function useDocumentMeta({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title;

    if (title) document.title = title;

    let metaEl = null;
    let prevDescription = null;
    let createdMeta = false;

    if (description) {
      metaEl = document.querySelector('meta[name="description"]');
      if (!metaEl) {
        metaEl = document.createElement('meta');
        metaEl.setAttribute('name', 'description');
        document.head.appendChild(metaEl);
        createdMeta = true;
      } else {
        prevDescription = metaEl.getAttribute('content');
      }
      metaEl.setAttribute('content', description);
    }

    return () => {
      document.title = prevTitle;
      if (metaEl) {
        if (createdMeta) {
          metaEl.remove();
        } else if (prevDescription !== null) {
          metaEl.setAttribute('content', prevDescription);
        }
      }
    };
  }, [title, description]);
}
