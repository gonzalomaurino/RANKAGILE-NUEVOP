import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import GeoCtaFinalSection from '../components/sections/GeoCtaFinalSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-about.css';

export default function QuienesSomosPage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const card1 = t('about.mission.card1', { returnObjects: true });
  const card2 = t('about.mission.card2', { returnObjects: true });

  useDocumentMeta({
    title: t('about.meta.title'),
    description: t('about.meta.description'),
  });

  return (
    <>
      <ClaudeNavbar />

      <header className="hero" id="top">
        <div className="aurora"></div>
        <div className="hero-grid"></div>
        <div className="hero-inner">
          <span className="eyebrow centered">{t('about.hero.eyebrow')}</span>
          <h1 className="display about-display">
            {t('about.hero.h1')}
          </h1>
          <p className="hero-sub">{t('about.hero.body')}</p>
          <div className="hero-cta">
            <a className="btn-pill" href={`${prefix}/contacto/`}>{t('about.hero.btn')}</a>
          </div>
        </div>
      </header>

      <section className="block about-block">
        <div className="section-head">
          <span className="eyebrow">{t('about.mission.eyebrow')}</span>
          <h2 className="display about-display-tight">{t('about.mission.h2')}</h2>
          <p className="lead">{t('about.mission.lead')}</p>
        </div>

        <div className="services-grid">
          <div className="svc-card">
            <div>
              <div className="svc-card-num">{card1.n}</div>
              <h4>{card1.title}</h4>
              <p>{card1.body}</p>
            </div>
            <span className="svc-card-arrow">{card1.tag}</span>
          </div>
          <div className="svc-card">
            <div>
              <div className="svc-card-num">{card2.n}</div>
              <h4>{card2.title}</h4>
              <p>{card2.body}</p>
            </div>
            <span className="svc-card-arrow">{card2.tag}</span>
          </div>
        </div>
      </section>

      <section className="block about-block">
        <div className="section-head">
          <span className="eyebrow">{t('about.presentation.eyebrow')}</span>
          <h2 className="display about-display-tight">{t('about.presentation.h2')}</h2>
          <p className="lead">{t('about.presentation.lead')}</p>
        </div>

        <div className="vignette">
          <div className="vignette-left">
            <span className="eyebrow">{t('about.video.eyebrow')}</span>
            <h3>{t('about.video.h3')}</h3>
            <p>{t('about.video.body')}</p>
            <a className="btn-ghost" href={`${prefix}/contacto/`}>{t('about.video.btn')}</a>
          </div>
          <div className="vignette-right about-vignette-media">
            <iframe
              className="about-video-frame"
              src="https://www.youtube.com/embed/x0ct7avdZwM"
              title="Video de Presentacion RankAgile"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <GeoCtaFinalSection />

      <Footer />
    </>
  );
}
