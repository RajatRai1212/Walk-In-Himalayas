import { notFound } from 'next/navigation';
import { regions } from '@/data/regions';
import { treks } from '@/data/treks';
import { Section } from '@/components/Section';
import { TrekCard } from '@/components/TrekCard';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqSchema } from '@/lib/schema';
import Link from 'next/link';

const regionFaqs = [
  {
    question: 'Which season is best for trekking here?',
    answer: 'Spring and autumn are generally best, with summer for higher altitude trails.'
  },
  {
    question: 'Do you offer family-friendly treks?',
    answer: 'Yes. We curate easy hikes and village walks suitable for families.'
  },
  {
    question: 'Can we customize the itinerary?',
    answer: 'Absolutely. We adjust routes, stays, and pacing based on your group.'
  }
];

export function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const region = regions.find((item) => item.slug === params.slug);
  if (!region) return {};
  return buildMetadata({
    title: `Treks & Tours in ${region.name}`,
    description: `Treks, camping & tours in ${region.name} with local guides.`,
    path: `/destinations/${region.slug}`
  });
}

export default function RegionPage({ params }: { params: { slug: string } }) {
  const region = regions.find((item) => item.slug === params.slug);
  if (!region) return notFound();

  const regionTreks = treks.filter((trek) => trek.region === region.name || trek.region === region.name.split(' ')[0]);
  return (
    <main>
      <Section title={region.name} subtitle={`Treks, camping & tours in ${region.name}.`}>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Destinations', href: '/destinations' },
            { name: region.name, href: `/destinations/${region.slug}` }
          ]}
          includeSchema
        />
        <p className="max-w-3xl text-sm text-slate-600">
          Plan your {region.name} adventure with a local Himalayan guide. We design itineraries that
          balance safety, cultural immersion, and offbeat village experiences.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-ink">Best Season</h2>
            <p className="mt-3 text-sm text-slate-600">{region.bestSeason}</p>
            <h3 className="mt-6 font-serif text-xl text-ink">Suggested Itineraries</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {region.sampleItineraries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-ink">Highlights</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {region.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={`Featured Treks in ${region.name}`} subtitle="Curated options from our local guide network.">
        <div className="grid gap-6 md:grid-cols-3">
          {regionTreks.map((trek) => (
            <TrekCard key={trek.slug} trek={trek} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/treks" className="text-sm font-semibold text-pine">
            Explore all treks →
          </Link>
        </div>
      </Section>

      <Section title="Plan a regional trip" subtitle={`Combine treks, camping, and tours in ${region.name}.`}>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-pine">
          <Link href="/tours">View tour packages →</Link>
          <Link href="/blog">Read trekking guides →</Link>
          <Link href="/contact">Talk to a local expert →</Link>
        </div>
      </Section>

      <Section title="FAQs" subtitle="Quick answers for planning your trek.">
        <FAQAccordion faqs={regionFaqs} />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(regionFaqs)) }}
      />
    </main>
  );
}
