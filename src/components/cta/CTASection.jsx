import { motion } from 'framer-motion';

import PrimaryButton from '../common/PrimaryButton';

export default function CTASection() {
  return (
    <section className="pb-24 pt-8 lg:pt-12">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] bg-brand-primary-light px-8 py-20 text-center md:px-16 lg:py-24"
        >
          {/* Decorative Illustrations */}
          <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4 opacity-20">
             <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 100C50 100 20 80 20 50C20 20 50 0 50 0C50 0 80 20 80 50C80 80 50 100 50 100Z" stroke="#458B73" strokeWidth="2"/>
              <path d="M50 100V0" stroke="#458B73" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-20 transform rotate-180">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 100C50 100 20 80 20 50C20 20 50 0 50 0C50 0 80 20 80 50C80 80 50 100 50 100Z" stroke="#458B73" strokeWidth="2"/>
              <path d="M50 100V0" stroke="#458B73" strokeWidth="2"/>
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 5 18 5 12C5 6 12 2 12 2C12 2 19 6 19 12C19 18 12 22 12 22Z" stroke="#458B73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
              Ready to Take the First Step Towards a Better You?
            </h2>
            
            <p className="mb-10 text-lg text-brand-text-secondary">
              Let's work together to unlock your potential and create the life you deserve.
            </p>
            
            <PrimaryButton withArrow className="px-8 py-4 text-base">
              Book an Appointment
            </PrimaryButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
