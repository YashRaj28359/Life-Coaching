import Navbar from '../components/layout/Navbar';
import Hero from '../components/hero/Hero';
import CoachingSection from '../components/coaching/CoachingSection';
import ProcessSection from '../components/process/ProcessSection';
import AboutSection from '../components/about/AboutSection';
import DifferentSection from '../components/different/DifferentSection';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import FAQSection from '../components/faq/FAQSection';
import CTASection from '../components/cta/CTASection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <CoachingSection />
        <ProcessSection />
        <AboutSection />
        <DifferentSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
