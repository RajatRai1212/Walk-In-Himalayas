import { Section } from '@/components/Section';
import { tours } from '@/data/tours';
import { TourCard } from '@/components/TourCard';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PlanTripForm } from '@/components/PlanTripForm';

export const metadata = buildMetadata({
  title: 'Himachal Tours & Travel',
  description: 'Custom tours across Dalhousie, Dharamshala, Manali, and more.',
  path: '/tours'
});

export default function ToursPage() {
  return (
    <main>
      <Section title="Tours & Travel" subtitle="Custom itineraries for Himachal escapes and multi-day journeys.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Tours', href: '/tours' }]}
          includeSchema
        />
        <p className="max-w-3xl text-sm text-slate-600">
          Choose a ready-made tour or request a custom plan. We design journeys from budget to premium,
          focusing on Dalhousie-Chamba escapes, Dharamshala wellness, Manali adventure, and more.
        </p>
      </Section>

      <Section title="Sample Tours" subtitle="Start here, then customize with our local team.">
        <div className="grid gap-6 md:grid-cols-2">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </Section>

      <Section title="Plan My Trip" subtitle="Share your dates, budget, and interests.">
        <PlanTripForm />
      </Section>
    </main>
  );
}
