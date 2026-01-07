import { Section } from '@/components/Section';
import { EnquiryDrawer } from '@/components/EnquiryDrawer';
import { TrekFilters } from '@/components/TrekFilters';
import { treks } from '@/data/treks';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Treks in Himachal Pradesh',
  description:
    'Guided treks in Chamba Valley, Dalhousie, Dharamshala, and Manali with local Himalayan guides.',
  path: '/treks'
});

export default function TreksPage() {
  return (
    <main>
      <Section
        title="Treks Hub"
        subtitle="Filter by difficulty, season, region, or style. Perfect for trekking in Chamba, Dalhousie, Dharamshala, and Manali."
      >
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Treks', href: '/treks' }]}
          includeSchema
        />
        <p className="max-w-3xl text-sm text-slate-600">
          Discover guided treks across Himachal Pradesh with a local BMC-certified guide. From family-friendly
          hikes in Dalhousie to challenging high passes near Dharamshala and Manali, each trek is planned
          with safety and authentic village experiences.
        </p>
        <div className="mt-6">
          <EnquiryDrawer triggerLabel="Quick Enquiry" />
        </div>
        <div className="mt-8">
          <TrekFilters treks={treks} />
        </div>
      </Section>
    </main>
  );
}
