import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import ProcessCard from './ProcessCard';
import { processSteps } from '../../data/process';

export default function ProcessSection() {
  return (
    <section className="bg-brand-bg pb-10 pt-8 lg:pt-12" id="process">
      <Container>
        <SectionTitle 
          label="How Life Coaching Works" 
          title={
            <>
              Your Journey to a <br /> Better You
            </>
          } 
        />
        
        <div className="mt-20 grid gap-12 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              index={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
