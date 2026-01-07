import { Section } from '@/components/Section';
import { FAQAccordion } from '@/components/FAQAccordion';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { faqSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'How do I book a trek?',
    answer: 'Send an enquiry form or WhatsApp us. We confirm availability and send an itinerary before booking.'
  },
  {
    question: 'Do you arrange permits?',
    answer: 'We assist with local permits when required; availability depends on the route and season.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Please see the cancellation policy page for detailed terms and flexible options.'
  },
  {
    question: 'Are treks safe for beginners?',
    answer: 'Yes, we offer beginner-friendly treks with gradual pacing and safety briefings.'
  },
  {
    question: 'Can kids join?',
    answer: 'Family treks are suitable for children above 6-7 years depending on the route.'
  },
  {
    question: 'Do you offer women-only groups?',
    answer: 'Yes, women-only options are available on request.'
  },
  {
    question: 'Do I need my own gear?',
    answer: 'We can arrange rentals for essential gear. Personal layers are recommended.'
  },
  {
    question: 'What about altitude sickness?',
    answer: 'We plan acclimatization and monitor health. Follow guide instructions and hydrate well.'
  },
  {
    question: 'Do you offer private groups?',
    answer: 'Yes, private groups and custom itineraries are available.'
  }
];

export const metadata = buildMetadata({
  title: 'FAQs',
  description: 'Frequently asked questions about trekking and tours in Himachal.',
  path: '/faqs'
});

export default function FaqsPage() {
  return (
    <main>
      <Section title="FAQs" subtitle="Everything you need to know before booking.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'FAQs', href: '/faqs' }]}
          includeSchema
        />
        <FAQAccordion faqs={faqs} />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
    </main>
  );
}
