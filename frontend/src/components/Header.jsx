import { useEffect, useRef, useState } from 'react';
import rawHtml from '../raw/header.html?raw';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const setSpacer = () => {
      const h = headerRef.current?.offsetHeight || 0;
      document.body.style.paddingTop = `${h}px`;
    };
    setSpacer();
    window.addEventListener('resize', setSpacer);

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 10) setVisible(true);
      else if (delta > 5) setVisible(false);
      else if (delta < -5) setVisible(true);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', setSpacer);
      document.body.style.paddingTop = '';
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="et-l et-l--header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
        backgroundColor: '#020209',
      }}
      dangerouslySetInnerHTML={{ __html: rawHtml }}
    />
  );
}
