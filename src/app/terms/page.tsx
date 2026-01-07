import { Section } from '@/components/Section';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for Walk in Himalayas.',
  path: '/terms'
});

export default function TermsPage() {
  return (
    <main>
      <Section title="Terms & Conditions" subtitle="Please review before booking.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Terms', href: '/terms' }]}
          includeSchema
        />
        <div className="prose-himalaya">
          <p>
            All itineraries are subject to weather, trail, and permit conditions. Walk in Himalayas
            reserves the right to modify routes for safety.
          </p>
          <p>
            Guests are expected to follow guide instructions, respect local communities, and carry
            personal identification as required.
          </p>
          <p>
            Pricing is seasonal and based on group size, stay category, and transportation preferences.
          </p>
        </div>
      </Section>
    </main>
  );
}
