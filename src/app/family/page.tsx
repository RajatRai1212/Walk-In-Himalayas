import { Section } from '@/components/Section';
import { TrekCard } from '@/components/TrekCard';
import { treks } from '@/data/treks';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EnquiryForm } from '@/components/EnquiryForm';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqSchema } from '@/lib/schema';

const faqs = [
  {
    question: 'What is the minimum age for family treks?',
    answer: 'Most family treks are suitable for kids above 6-7 years with parental supervision.'
  },
  {
    question: 'Do you provide child-friendly meals?',
    answer: 'Yes, we can arrange simple and nutritious meals for children.'
  },
  {
    question: 'Can we include village homestays?',
    answer: 'Yes, homestays are available on request and are a great cultural experience.'
  }
];

export const metadata = buildMetadata({
  title: 'Family Treks & Village Walks',
  description: 'Family-friendly treks and cultural village walks across Himachal.',
  path: '/family'
});

export default function FamilyPage() {
  const familyTreks = treks.filter((trek) => trek.tags.includes('family') || trek.tags.includes('offbeat'));

  return (
    <main>
      <Section
        title="Family Treks & Village Walks"
        subtitle="Gentle hikes, cultural stays, and flexible pacing for families."
      >
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Family Treks', href: '/family' }]}
          includeSchema
        />
        <p className="max-w-3xl text-sm text-slate-600">
          Our family treks focus on safety, short daily hikes, and authentic village experiences. We
          recommend Dalhousie, Chamba, and Dharamshala for comfortable family adventures.
        </p>
      </Section>

      <Section title="Family-friendly Treks" subtitle="Easy and moderate trails for kids and seniors.">
        <div className="grid gap-6 md:grid-cols-3">
          {familyTreks.slice(0, 6).map((trek) => (
            <TrekCard key={trek.slug} trek={trek} />
          ))}
        </div>
      </Section>

      <Section title="Packing Guidance" subtitle="Keep it light, comfortable, and weather-ready.">
        <div className="section-grid">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Layered clothing, rain jackets, and comfortable shoes.</li>
              <li>Child-friendly snacks, water bottles, and a small day pack.</li>
              <li>Basic medicines and personal comfort items.</li>
              <li>Sun protection and hats for daytime hikes.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="font-serif text-xl text-ink">Trust & Safety</h3>
            <p className="mt-2 text-sm text-slate-600">
              We keep small groups, flexible pacing, and clear safety briefings for families. Our guide
              team shares regular check-ins and weather updates.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Plan a Family Trek" subtitle="Tell us the ages, dates, and comfort needs.">
        <EnquiryForm preselectedTrek="Family trek" />
      </Section>

      <Section title="FAQs" subtitle="Family trek planning guidance.">
        <FAQAccordion faqs={faqs} />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
    </main>
  );
}
