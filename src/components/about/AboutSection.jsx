import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import ReelsCarousel from './ReelsCarousel';

export default function AboutSection() {
  return (
    <section className="bg-brand-bg border-t border-brand-border pb-32 pt-8 lg:h-screen lg:min-h-[700px] lg:flex lg:items-center lg:py-0" id="about-me">
      <div className="w-full px-6 lg:px-12">
        <SectionTitle 
          label="About Me" 
          title={
            <>
              Get to Know <br /> Your Coach
            </>
          } 
        />
        <div className="mt-12 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Content - Reels Carousel */}
          <div className="w-full overflow-hidden">
            <ReelsCarousel />
          </div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
               <div className="mb-4 flex items-center gap-4">
                 <span className="font-serif text-4xl text-brand-text-primary md:text-5xl lg:text-6xl">
                   Meet Your Coach
                 </span>
               </div>
               <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-text-secondary">
                 Guiding You Toward Your Best Self
               </h2>
            </div>
            
            <div className="mt-8 space-y-6 text-lg text-brand-text-secondary">
              <p>
                I believe that everyone has the potential to live a life of purpose, joy, and fulfillment. For over a decade, I’ve dedicated myself to helping individuals uncover their true passions, overcome limiting beliefs, and create actionable paths toward their dreams.
              </p>
              <p>
                My approach is rooted in compassion, active listening, and evidence-based coaching techniques. Whether you are facing a major life transition, seeking career advancement, or simply wanting to improve your daily well-being, I am here to provide the support and accountability you need to succeed.
              </p>
            </div>
            
            <button className="mt-10 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover">
              Learn More About Me
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
