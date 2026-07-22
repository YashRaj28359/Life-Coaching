import { motion } from 'framer-motion';

import { cn } from '../../utils/cn';

export default function FloatingQuoteCard({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className={cn(
        'absolute z-20 overflow-hidden rounded-[24px] max-w-[280px] p-8',
        'bg-[#8BA088]/90 backdrop-blur-md shadow-2xl border border-white/20',
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-2 text-5xl text-white font-serif leading-none">“</div>
        <p className="text-white font-medium leading-relaxed text-lg">
          The best project <br/>you will ever work <br/>on is you.
        </p>
        <div className="mt-6 h-[3px] w-12 bg-brand-primary rounded-full"></div>
      </div>
    </motion.div>
  );
}
