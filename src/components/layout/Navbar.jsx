import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Leaf, User } from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import Container from './Container';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 py-4 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-6'
      )}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-12 items-center justify-center rounded-xl bg-brand-beige">
              <Leaf className="h-6 w-6 text-brand-primary" />
            </div>
            <div>
              <div className="text-xl font-serif text-brand-text-primary">Life Coaching</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-text-secondary">
                Transform. Grow. Thrive.
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-primary',
                  index === 0 ? 'text-brand-primary border-b-2 border-brand-primary pb-1' : 'text-brand-text-primary'
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-brand-text-primary transition-colors hover:text-brand-primary">
              <User className="h-4 w-4" />
              Login
            </a>
            <button className="flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-primary-hover">
              Book an Appointment
              <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
