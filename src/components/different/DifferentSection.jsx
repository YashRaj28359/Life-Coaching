import SectionTitle from '../common/SectionTitle';
import DifferentCard from './DifferentCard';
import { differentFeatures } from '../../data/different';

export default function DifferentSection() {
  return (
    <section className="bg-brand-bg py-16 lg:py-20" id="different">
      <div className="w-full px-6 lg:px-12">
        <SectionTitle 
          label="What Makes This Different" 
        />
        
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentFeatures.map((feature, index) => (
            <DifferentCard 
              key={feature.id}
              index={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
