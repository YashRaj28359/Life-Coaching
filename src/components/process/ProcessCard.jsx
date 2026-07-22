import { motion } from 'framer-motion';

export default function ProcessCard({ title, description, icon: Icon, index, isLast }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-brand-card shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-bg font-serif font-bold text-brand-text-primary shadow-sm">
          {index + 1}
        </div>
        <Icon className="h-10 w-10 text-brand-primary" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
      >
        <h4 className="mb-3 text-lg font-semibold">{title}</h4>
        <p className="text-sm text-brand-text-secondary leading-relaxed">{description}</p>
      </motion.div>

      {/* Horizontal Connector Line (Hidden on Mobile) */}
      {!isLast && (
        <div className="absolute left-[60%] top-12 hidden w-full border-t-2 border-dashed border-brand-border lg:block"></div>
      )}
    </div>
  );
}
