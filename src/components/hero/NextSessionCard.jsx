import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function NextSessionCard({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className={`absolute z-20 flex items-center gap-4 rounded-full bg-white/60 py-3 px-5 pr-8 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] border border-white/50 ${className}`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-beige">
        <Leaf className="h-5 w-5 text-brand-primary" />
      </div>
      <p className="text-sm font-medium text-brand-text-primary leading-tight">
        Coaching that empowers you to <br /> live with purpose and confidence.
      </p>
    </motion.div>
  );
}
