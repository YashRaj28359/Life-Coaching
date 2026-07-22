import { Leaf } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-bg py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4 text-brand-text-secondary">
            <a href="#" className="hover:text-brand-primary transition-colors">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-brand-text-secondary text-center">
            © {currentYear} Life Coaching. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-brand-text-secondary">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
