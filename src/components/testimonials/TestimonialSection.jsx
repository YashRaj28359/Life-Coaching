import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

export default function TestimonialSection({ isTabContent = false }) {
  const content = (
    <div className={`${isTabContent ? 'py-8 px-6 lg:px-12 bg-brand-beige rounded-2xl' : 'w-full px-6 lg:px-12'}`}>
      {!isTabContent && (
        <SectionTitle 
          label="Testimonials" 
          title="What My Clients Say" 
        />
      )}
      
      <div className={`${isTabContent ? 'mt-4' : 'mt-20'} grid gap-6 md:grid-cols-2 lg:grid-cols-3`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              index={index}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
            />
          ))}
        </div>
    </div>
  );

  if (isTabContent) return content;

  return (
    <section className="bg-brand-beige py-16 lg:py-20" id="testimonials">
      {content}
    </section>
  );
}
