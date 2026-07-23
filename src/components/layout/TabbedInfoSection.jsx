import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, HelpCircle } from 'lucide-react';
import DifferentSection from '../different/DifferentSection';
import TestimonialSection from '../testimonials/TestimonialSection';
import FAQSection from '../faq/FAQSection';

const tabs = [
  {
    id: 'different',
    label: 'What Makes This Different',
    icon: Sparkles,
    preview: (
      <div className="text-left">
        <span className="font-semibold text-brand-primary">Includes:</span>
        <ul className="mt-2 space-y-1.5 text-xs text-brand-text-secondary">
          <li>• Personalized actionable plans</li>
          <li>• Compassionate active listening</li>
          <li>• Evidence-based strategies</li>
        </ul>
      </div>
    ),
    component: DifferentSection
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    icon: MessageCircle,
    preview: (
      <div className="text-left">
        <span className="font-semibold text-brand-primary">Hear from:</span>
        <ul className="mt-2 space-y-1.5 text-xs text-brand-text-secondary italic">
          <li>"A truly transformative experience!"</li>
          <li>"Helped me find my true calling."</li>
        </ul>
      </div>
    ),
    component: TestimonialSection
  },
  {
    id: 'faq',
    label: 'FAQ',
    icon: HelpCircle,
    preview: (
      <div className="text-left">
        <span className="font-semibold text-brand-primary">Common Questions:</span>
        <ul className="mt-2 space-y-1.5 text-xs text-brand-text-secondary">
          <li>• What exactly is life coaching?</li>
          <li>• How many sessions will I need?</li>
          <li>• Do you offer virtual coaching?</li>
        </ul>
      </div>
    ),
    component: FAQSection
  }
];

export default function TabbedInfoSection() {
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const displayedTabId = hoveredTab || activeTab;
  const displayedTabData = tabs.find(t => t.id === displayedTabId);
  const DisplayedComponent = displayedTabData?.component;
  const isPreview = hoveredTab !== null && hoveredTab !== activeTab;

  return (
    <section className="bg-brand-bg py-16 lg:py-24 border-t border-brand-border" id="more-info">
      <div className="w-full px-6 lg:px-12">
        
        {/* Slim Horizontal Tabs Row */}
        <div className="flex h-16 lg:h-20 gap-3 md:gap-4 w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;

            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(isActive ? null : tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative flex-1 cursor-pointer rounded-full border transition-colors duration-300 flex items-center justify-center px-4 ${
                  isActive 
                    ? 'border-brand-primary bg-brand-primary text-white shadow-lg' 
                    : 'border-brand-border bg-white hover:border-brand-primary/50 text-brand-text-primary'
                }`}
              >
                {/* Content of the Tab */}
                <span className="font-serif text-sm md:text-lg lg:text-xl whitespace-nowrap text-center">
                  {tab.label}
                </span>

              </div>
            );
          })}
        </div>

        {/* Expanded Content Area */}
        <AnimatePresence>
          {DisplayedComponent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: isPreview ? 300 : 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-8 lg:mt-12 overflow-hidden relative rounded-3xl"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-brand-border h-full">
                <DisplayedComponent isTabContent={true} />
              </div>
              
              {/* Fade out gradient for preview mode */}
              <AnimatePresence>
                {isPreview && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
