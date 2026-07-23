import Container from '../layout/Container';
import SectionTitle from '../common/SectionTitle';
import FAQItem from './FAQItem';
import { faqs } from '../../data/faq';

export default function FAQSection({ isTabContent = false }) {
  const content = (
    <div className={`${isTabContent ? 'py-8 px-6 lg:px-12' : 'w-full px-6 lg:px-12'}`}>
      {!isTabContent && (
        <SectionTitle 
          label="FAQ" 
          title="Common Questions" 
        />
      )}
      
      <div className={`${isTabContent ? 'mt-4' : 'mt-20'} w-full`}>
          {faqs.map((faq) => (
            <FAQItem 
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
    </div>
  );

  if (isTabContent) return content;

  return (
    <section className="bg-brand-bg pt-16 pb-16 lg:pt-20 lg:pb-16" id="faq">
      {content}
    </section>
  );
}
