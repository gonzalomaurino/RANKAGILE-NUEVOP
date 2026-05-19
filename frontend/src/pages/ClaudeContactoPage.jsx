import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import '../styles/claude-system.css';
import '../styles/claude-contacto.css';

export default function ClaudeContactoPage() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: t('contacto.meta.title'),
    description: t('contacto.meta.description'),
  });

  return (
    <>
      <ClaudeNavbar />
      <div className="page">
        <div className="split">
          <aside className="left">
            <div className="aurora-bg" />
            <div className="left-top">
              <span className="eyebrow">{t('contacto.eyebrow')}</span>
              <h1 className="left-title display">{t('contacto.h1')}</h1>
              <p className="left-sub">{t('contacto.lead')}</p>
            </div>
          </aside>

          <section className="right">
            <ContactForm />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
