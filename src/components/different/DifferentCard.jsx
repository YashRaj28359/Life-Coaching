import { motion } from 'framer-motion';

export default function DifferentCard({ index, title, description, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-3xl border border-brand-border bg-white p-8 transition-all hover:border-brand-primary/30 hover:shadow-lg lg:p-10"
    >
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary-light text-brand-primary transition-transform group-hover:scale-110">
        <Icon className="h-8 w-8" />
      </div>
      
      <h3 className="mb-4 text-2xl font-medium text-brand-text-primary">
        {title}
      </h3>
      
      <p className="leading-relaxed text-brand-text-secondary">
        {description}
      </p>
    </motion.div>
  );
}
