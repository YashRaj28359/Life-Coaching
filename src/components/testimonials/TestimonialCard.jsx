import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ index, name, role, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md lg:p-10"
    >
      <div>
        <Quote className="mb-6 h-8 w-8 text-brand-primary/30" />
        <p className="text-lg leading-relaxed text-brand-text-secondary md:text-xl">
          "{text}"
        </p>
      </div>
      
      <div className="mt-10">
        <div className="font-serif text-xl font-medium text-brand-text-primary">
          {name}
        </div>
        <div className="mt-1 text-sm text-brand-text-secondary">
          {role}
        </div>
      </div>
    </motion.div>
  );
}
