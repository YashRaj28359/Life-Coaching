import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const SecondaryButton = forwardRef(({ className, children, icon: Icon, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border border-brand-border bg-white px-6 py-3.5 text-sm font-medium text-brand-text-primary transition-colors hover:bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4 text-brand-primary" />}
      {children}
    </motion.button>
  );
});

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
