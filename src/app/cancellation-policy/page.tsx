import { Section } from '@/components/Section';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Cancellation Policy',
  description: 'Cancellation terms for treks and tours with Walk in Himalayas.',
  path: '/cancellation-policy'
});

export default function CancellationPage() {
  return (
    <main>
      <Section title="Cancellation Policy" subtitle="Clear, safety-first cancellation terms.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Cancellation Policy', href: '/cancellation-policy' }]}
          includeSchema
        />
        <div className="prose-himalaya">
          <p>
            Cancellations must be requested in writing via email or WhatsApp. Refunds are processed based
            on the days remaining before the trek start date.
          </p>
          <ul>
            <li>30+ days before: 80% refund (after operational costs).</li>
            <li>15-29 days before: 50% refund.</li>
            <li>7-14 days before: 25% refund.</li>
            <li>Less than 7 days: No refund (date changes may be offered).</li>
          </ul>
          <p>
            In case of route closures or unsafe weather, we offer date changes, alternate itineraries, or
            partial refunds based on non-recoverable costs.
          </p>
        </div>
      </Section>
    </main>
  );
}
