import { MousePointerClick, Calendar, UserPlus, CreditCard } from 'lucide-react';

export const processSteps = [
  {
    id: 1,
    title: 'Book Appointment',
    description: 'Start your journey by clicking the Book an Appointment button.',
    icon: MousePointerClick,
  },
  {
    id: 2,
    title: 'Select Date & Time',
    description: 'Choose a convenient slot from the available calendar.',
    icon: Calendar,
  },
  {
    id: 3,
    title: 'Create Account',
    description: 'Enter your name, email, phone number, and a secure password.',
    icon: UserPlus,
  },
  {
    id: 4,
    title: 'Secure Payment',
    description: 'Complete your booking safely through our secure payment gateway.',
    icon: CreditCard,
  }
];
