import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PrimaryButton = forwardRef(({ className, children, withArrow = false, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </motion.button>
  );
});

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
