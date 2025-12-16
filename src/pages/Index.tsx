import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ProfessionalsSection } from '@/components/ProfessionalsSection';
import { ProblemSection } from '@/components/ProblemSection';
import { ApproachSection } from '@/components/ApproachSection';
import { ServicesSection } from '@/components/ServicesSection';
import { DifferentialsSection } from '@/components/DifferentialsSection';
import { CTASection } from '@/components/CTASection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProfessionalsSection />
        <ProblemSection />
        <ApproachSection />
        <ServicesSection />
        <DifferentialsSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
