import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import ReelsCarousel from './ReelsCarousel';
export default function AboutSection() {
  return (
    <section className="bg-brand-bg border-t border-brand-border pt-12 pb-24 lg:pt-16 lg:pb-32 lg:min-h-screen overflow-x-hidden" id="about-me">
      <div className="w-full px-6 lg:px-12">
        <SectionTitle 
          label="About Me" 
          title={
            <>
              Get to Know <br /> Your Coach
            </>
          } 
        />
        <div className="mt-12 grid items-stretch gap-16 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-20">
          
          {/* Left Content - Image */}
          <div className="flex justify-center lg:justify-start h-full">
            <motion.div 
              className="relative w-full max-w-[400px] overflow-hidden rounded-3xl aspect-[3/4] lg:aspect-auto lg:h-full shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                alt="Coach Portrait" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
               <div className="mb-2 flex items-center gap-4">
                 <span className="font-serif text-4xl text-brand-text-primary md:text-5xl lg:text-6xl">
                   Meet Your Coach
                 </span>
               </div>
               <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-text-secondary">
                 Guiding You Toward Your Best Self
               </h2>
            </div>
            
            <div className="mb-6 w-full">
              <ReelsCarousel />
            </div>
            
            <div className="space-y-4 text-base lg:text-lg text-brand-text-secondary">
              <p>
                I believe that everyone has the potential to live a life of purpose, joy, and fulfillment. For over a decade, I’ve dedicated myself to helping individuals uncover their true passions, overcome limiting beliefs, and create actionable paths toward their dreams.
              </p>
              <p>
                My approach is rooted in compassion, active listening, and evidence-based coaching techniques. Whether you are facing a major life transition, seeking career advancement, or simply wanting to improve your daily well-being, I am here to provide the support and accountability you need to succeed.
              </p>
            </div>
            
            <button className="mt-6 flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover">
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
