import { Section } from '@/components/Section';
import { TestimonialCard } from '@/components/TestimonialCard';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/config/site';
import { reviewSchema } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Guest Reviews',
  description: 'Guest experiences and testimonials for Walk in Himalayas.',
  path: '/reviews'
});

export default function ReviewsPage() {
  return (
    <main>
      <Section title="Guest Reviews" subtitle="Replace placeholders with verified guest feedback.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Reviews', href: '/reviews' }]}
          includeSchema
        />
        <div className="grid gap-6 md:grid-cols-3">
          <TestimonialCard name="Guest A" text="A safe, local, and memorable trek in Chamba." />
          <TestimonialCard name="Guest B" text="Triund was beautiful and well organized." />
          <TestimonialCard name="Guest C" text="Great family trek experience in Dalhousie." />
        </div>
        <a
          href={siteConfig.social.googleBusinessProfile}
          className="mt-6 inline-flex text-sm font-semibold text-pine"
        >
          Review us on Google →
        </a>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema()) }}
      />
    </main>
  );
}
