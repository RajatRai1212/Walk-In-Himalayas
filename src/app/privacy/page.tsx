import { Section } from '@/components/Section';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Walk in Himalayas.',
  path: '/privacy'
});

export default function PrivacyPage() {
  return (
    <main>
      <Section title="Privacy Policy" subtitle="How we handle your data.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Privacy', href: '/privacy' }]}
          includeSchema
        />
        <div className="prose-himalaya">
          <p>
            We collect only the information needed to respond to your enquiry or booking request. Your
            contact details are used to communicate itineraries, pricing, and safety updates.
          </p>
          <p>
            We do not sell or share your data with third parties. You can request deletion of your data
            by contacting us directly.
          </p>
        </div>
      </Section>
    </main>
  );
}
