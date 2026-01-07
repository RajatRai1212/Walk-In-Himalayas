import { Section } from '@/components/Section';
import { RegionCard } from '@/components/RegionCard';
import { regions } from '@/data/regions';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Destinations in Himachal Pradesh',
  description:
    'Explore trekking, camping, and tour destinations across Chamba Valley, Dalhousie, Dharamshala, and Manali.',
  path: '/destinations'
});

export default function DestinationsPage() {
  return (
    <main>
      <Section title="Destinations" subtitle="Treks, camping & tours in Himachal’s most scenic regions.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Destinations', href: '/destinations' }]}
          includeSchema
        />
        <div className="grid gap-6 md:grid-cols-2">
          {regions.map((region) => (
            <RegionCard key={region.slug} region={region} />
          ))}
        </div>
      </Section>
    </main>
  );
}
