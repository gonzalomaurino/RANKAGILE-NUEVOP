import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import PageSeo from '../seo/PageSeo';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import '../styles/claude-system.css';
import '../styles/claude-contacto.css';

export default function ClaudeContactoPage() {
  const { t, i18n } = useTranslation();

  useDocumentMeta({
    title: t('contacto.meta.title'),
    description: t('contacto.meta.description'),
  });

  return (
    <>
      <PageSeo
        title={t('contacto.meta.title')}
        description={t('contacto.meta.description')}
        image="/og/contacto.png"
        locale={i18n.language === 'en' ? 'en_US' : 'es_ES'}
      />
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
