import { cn } from '../../utils/cn';

export default function SectionTitle({ label, title, className }) {
  return (
    <div className={cn('mb-16 text-center', className)}>
      {label && (
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="font-serif text-4xl text-brand-text-primary md:text-5xl lg:text-6xl">
            {label}
          </span>
        </div>
      )}
      <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-text-secondary">{title}</h2>
    </div>
  );
}
