import { motion } from 'framer-motion';
import Container from '../layout/Container';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { Play } from 'lucide-react';
import FloatingQuoteCard from './FloatingQuoteCard';
import NextSessionCard from './NextSessionCard';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg pt-28 pb-20 lg:h-screen lg:min-h-[750px] lg:flex lg:items-center lg:pt-12 lg:pb-0">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/4 translate-x-1/4 rounded-full bg-brand-primary-light/50 blur-[120px]" />
      <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-brand-beige/60 blur-[80px]" />

      {/* Full-bleed background image for desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-0 top-19 z-0 hidden h-[calc(100%-4rem)] w-[55vw] bg-brand-beige lg:block"
        style={{ 
          maskImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' preserveAspectRatio=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20,0 C60,40 0,60 20,100 L100,100 L100,0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' preserveAspectRatio=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20,0 C60,40 0,60 20,100 L100,100 L100,0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Life Coach"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-text-secondary">
                Life Coaching For A Better You
              </span>
            </div>

            <h1 className="mb-6 text-5xl leading-[1.1] md:text-6xl lg:text-7xl">
              Transform Your <br />
              Mindset. <br />
              Transform Your <span className="text-brand-primary italic pr-2">Life.</span>
            </h1>

            <p className="mb-10 max-w-md text-lg text-brand-text-secondary">
              Personalized coaching to help you gain clarity, build confidence and create a life you love.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton withArrow>Book an Appointment</PrimaryButton>
            
            </div>
          </motion.div>

          {/* Right Content - Cards (Image moved to full-bleed background on desktop) */}
          <div className="relative h-[500px] w-full lg:h-[600px] xl:h-[700px]">
            {/* Main Portrait Image (Mobile Only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute right-0 top-1/2 w-[90%] -translate-y-1/2 sm:w-[80%] lg:hidden"
            >
              <div 
                className="relative aspect-[4/5] w-full overflow-hidden bg-brand-beige"
                style={{ 
                  maskImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' preserveAspectRatio=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20,0 C60,40 0,60 20,100 L100,100 L100,0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
                  maskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' preserveAspectRatio=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20,0 C60,40 0,60 20,100 L100,100 L100,0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
                  WebkitMaskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Life Coach"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <FloatingQuoteCard className="bottom-20 right-4 lg:bottom-10 lg:-right-8" />
            
            {/* Dots Pattern Decoration */}
            <div className="absolute right-8 top-1/4 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-brand-text-primary" />
              ))}
            </div>
            
            {/* Leaf Illustration Decoration */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute left-10 top-1/3 text-brand-border/60"
            >
              <svg width="120" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 100C50 100 20 80 20 50C20 20 50 0 50 0C50 0 80 20 80 50C80 80 50 100 50 100Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 100V0" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 50C35 40 25 50 25 50" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 70C65 60 75 70 75 70" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
