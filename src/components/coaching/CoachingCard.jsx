import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function CoachingCard({ title, description, icon: Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      whileHover={{ y: -10 }}
      className="group flex cursor-pointer flex-col justify-between rounded-[32px] bg-brand-card p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)]"
    >
      <div>
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary-light transition-colors group-hover:bg-brand-primary">
          <Icon className="h-8 w-8 text-brand-primary transition-colors group-hover:text-white" />
        </div>
        <h3 className="mb-4 text-2xl">{title}</h3>
        <p className="text-brand-text-secondary leading-relaxed">{description}</p>
      </div>
      
      <div className="mt-8 flex justify-end">
        <ArrowRight className="h-6 w-6 text-brand-text-secondary transition-colors group-hover:text-brand-primary" />
      </div>
    </motion.div>
  );
}
