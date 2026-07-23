import SectionTitle from '../common/SectionTitle';
import DifferentCard from './DifferentCard';
import { differentFeatures } from '../../data/different';

export default function DifferentSection({ isTabContent = false }) {
  const content = (
    <div className={`${isTabContent ? 'py-8 px-6 lg:px-12' : 'w-full px-6 lg:px-12'}`}>
      {!isTabContent && (
        <SectionTitle 
          label="What Makes This Different" 
        />
      )}
      
      <div className={`${isTabContent ? 'mt-4' : 'mt-20'} grid gap-6 md:grid-cols-2 lg:grid-cols-3`}>
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
  );

  if (isTabContent) return content;

  return (
    <section className="bg-brand-bg py-16 lg:py-20" id="different">
      {content}
    </section>
  );
}
