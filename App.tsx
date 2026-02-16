
import React, { useState, useEffect } from 'react';
import { 
  Navigation, 
  Hero, 
  AboutSRM,
  ParentEmotionalSection,
  Eligibility, 
  Cutoffs,
  ComparisonSection,
  FeesSection, 
  Placements,
  FAQ, 
  LeadCapture, 
  Footer,
  LeadModal,
  MarqueeBanner
} from './components/LandingSections';
import { AICounselor } from './components/AICounselor';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative antialiased selection:bg-neon-blue selection:text-black">
      <Navigation onCTA={openModal} />
      <MarqueeBanner />
      
      <main>
        <Hero onPrimaryCTA={openModal} />
        
        <div id="about" className="scroll-mt-32">
          <AboutSRM />
        </div>

        <div id="criteria" className="scroll-mt-32">
          <Eligibility />
        </div>

        <ParentEmotionalSection />

        <div id="cutoffs" className="scroll-mt-32">
          <Cutoffs />
        </div>

        <ComparisonSection />

        <div id="fees" className="scroll-mt-32">
          <FeesSection />
        </div>

        <div id="placements" className="scroll-mt-32">
          <Placements />
        </div>

        <div id="faq" className="scroll-mt-32">
          <FAQ />
        </div>

        <div id="contact" className="scroll-mt-32">
          <LeadCapture onCTA={openModal} />
        </div>
      </main>

      <Footer />

      {/* Persistent Floating AI Counselor */}
      <AICounselor />

      {/* Primary Floating WhatsApp CTA - Updated Number */}
      <div className="fixed bottom-6 left-6 z-40">
        <a 
          href="https://wa.me/919382082728?text=Hi!%20I'm%20interested%20in%20SRM%202026%20admissions.%20Help%20me%20secure%20a%20seat!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-16 h-16 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center justify-center hover:scale-110 transition-all border-4 border-black neo-brutalism"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
      </div>

      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 bg-white text-black w-14 h-14 rounded-2xl shadow-2xl z-40 transition-all hover:scale-110 flex items-center justify-center border-4 border-black"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {isModalOpen && <LeadModal onClose={closeModal} />}
    </div>
  );
};

export default App;
