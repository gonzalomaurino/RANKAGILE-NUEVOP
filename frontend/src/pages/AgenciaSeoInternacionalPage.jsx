import SeoIntHeroSection from '../components/sections/SeoIntHeroSection.jsx';
import SeoIntEvolutionSection from '../components/sections/SeoIntEvolutionSection.jsx';
import SeoIntStrategiesSection from '../components/sections/SeoIntStrategiesSection.jsx';
import SeoIntTechnologySection from '../components/sections/SeoIntTechnologySection.jsx';
import SeoIntMultimodalFaqSection from '../components/sections/SeoIntMultimodalFaqSection.jsx';
import SeoIntClosingSection from '../components/sections/SeoIntClosingSection.jsx';
import SeoIntCtaSection from '../components/sections/SeoIntCtaSection.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const pageStyles = `
  .seo-int-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }
`;

export default function AgenciaSeoInternacionalPage() {
  useDocumentMeta({
    title: 'RankAgile: Agencia SEO Internacional experta en IA para empresas',
    description:
      'Aumentamos tu tráfico orgánico con SEO técnico + GEO (optimización para IA). Auditoría SEO gratis las 24 hs. ¡Hablemos!',
  });

  return (
    <main className="seo-int-page">
      <style>{pageStyles}</style>
      <SeoIntHeroSection />
      <SeoIntEvolutionSection />
      <SeoIntStrategiesSection />
      <SeoIntTechnologySection />
      <SeoIntMultimodalFaqSection />
      <SeoIntClosingSection />
      <SeoIntCtaSection />
    </main>
  );
}
