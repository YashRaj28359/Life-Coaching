import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import CoachingCard from './CoachingCard';
import { coachingServices } from '../../data/coaching';

export default function CoachingSection() {
  return (
    <section className="bg-brand-bg pt-32 pb-16" id="about">
      <div className="w-full px-6 lg:px-12">
        <SectionTitle 
          label="How I Can Help You" 
          title={
            <>
              Coaching for Every <br /> Area of Your Life
            </>
          } 
        />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coachingServices.map((service, index) => (
            <CoachingCard 
              key={service.id} 
              index={index} 
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
