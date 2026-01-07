import { Section } from '@/components/Section';
import { EnquiryForm } from '@/components/EnquiryForm';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Camping in Himachal Pradesh',
  description: 'Riverside, forest, alpine, and snow camping experiences across Himachal.',
  path: '/camping'
});

export default function CampingPage() {
  return (
    <main>
      <Section title="Camping in Himachal" subtitle="Riverside, forest, alpine, and snow camping options.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Camping', href: '/camping' }]}
          includeSchema
        />
        <div className="section-grid">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-ink">Camping styles</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Riverside camps with bonfire and warm meals.</li>
              <li>Forest camps close to wildlife sanctuaries.</li>
              <li>Alpine meadow camps with sunrise views.</li>
              <li>Seasonal snow camping for winter adventures.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-ink">Safety & inclusions</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Quality tents, sleeping bags, and mats.</li>
              <li>Trained guides, first-aid kits, and weather monitoring.</li>
              <li>Meals and hot beverages as per itinerary.</li>
              <li>Family-friendly setups available on request.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Book a Camping Experience" subtitle="Tell us the region, dates, and group size.">
        <EnquiryForm preselectedTrek="Camping experience" />
      </Section>
    </main>
  );
}
