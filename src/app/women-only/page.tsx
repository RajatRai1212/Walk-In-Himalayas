import { Section } from '@/components/Section';
import { WomenOnlyForm } from '@/components/WomenOnlyForm';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { treks } from '@/data/treks';
import { TrekCard } from '@/components/TrekCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'Are women-led treks available?',
    answer: 'Women-led options are available on request based on guide availability.'
  },
  {
    question: 'Is the pacing suitable for beginners?',
    answer: 'Yes, we design gentle itineraries and allow more breaks as needed.'
  },
  {
    question: 'Can we request private stays?',
    answer: 'Yes, private rooms or homestay options can be arranged based on availability.'
  }
];

export const metadata = buildMetadata({
  title: 'Women-only Treks in Himachal',
  description: 'Comfort-first women-only trek options in Chamba, Dalhousie, Dharamshala, and Manali.',
  path: '/women-only'
});

export default function WomenOnlyPage() {
  const womenFriendly = treks.filter((trek) => trek.tags.includes('family') || trek.tags.includes('offbeat'));

  return (
    <main>
      <Section
        title="Women-only Treks"
        subtitle="Comfortable pacing, safety-first planning, and supportive environments."
      >
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Women-only Treks', href: '/women-only' }]}
          includeSchema
        />
        <p className="max-w-3xl text-sm text-slate-600">
          We offer women-only trek options for families, friends, and solo travelers seeking supportive
          group experiences. Women-led guide options can be arranged on request.
        </p>
      </Section>

      <Section title="Recommended Treks" subtitle="Gentle hikes, village walks, and flexible itineraries.">
        <div className="grid gap-6 md:grid-cols-3">
          {womenFriendly.slice(0, 6).map((trek) => (
            <TrekCard key={trek.slug} trek={trek} />
          ))}
        </div>
      </Section>

      <Section title="Women-only Enquiry" subtitle="Share dates and comfort needs for a tailored plan.">
        <WomenOnlyForm />
      </Section>

      <Section title="FAQs" subtitle="Common questions about women-only treks.">
        <FAQAccordion faqs={faqs} />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
    </main>
  );
}
