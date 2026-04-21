import useDocumentMeta from '../hooks/useDocumentMeta.js';
import HeroSection from '../components/sections/HeroSection.jsx';
import ServicesGridSection from '../components/sections/ServicesGridSection.jsx';
import ClientsSection from '../components/sections/ClientsSection.jsx';
import InternationalSection from '../components/sections/InternationalSection.jsx';
import AIIntroSection from '../components/sections/AIIntroSection.jsx';
import PilarsSection from '../components/sections/PilarsSection.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';
import FaqSection from '../components/sections/FaqSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

export default function HomePage() {
  useDocumentMeta({
    title: 'RankAgile: Agencia SEO Internacional experta en IA para empresas',
    description:
      'Aumentamos tu tráfico orgánico con SEO técnico + GEO (optimización para IA). Auditoría SEO gratis las 24 hs. ¡Hablemos!',
  });

  return (
    <>
      <HeroSection />
      <ServicesGridSection />
      <ClientsSection />
      <InternationalSection />
      <AIIntroSection />
      <PilarsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
