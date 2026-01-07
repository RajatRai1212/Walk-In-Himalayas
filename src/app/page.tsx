import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { RegionCard } from '@/components/RegionCard';
import { TrekCard } from '@/components/TrekCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { EnquiryForm } from '@/components/EnquiryForm';
import { regions } from '@/data/regions';
import { treks } from '@/data/treks';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/metadata';
import Image from 'next/image';

export const metadata = buildMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: '/'
});

export default function HomePage() {
  const featuredTreks = treks.slice(0, 6);

  return (
    <main>
      <Hero />

      <Section
        title="Meet Ankit — founder & mountain guide"
        subtitle="BMC-certified, born and brought up in Himachal Pradesh."
      >
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="relative h-80 overflow-hidden rounded-[32px] border border-slate-200 bg-mist shadow-soft">
            <Image
              src="/images/ankit.png"
              alt="Ankit, founder of Walk in Himalayas"
              fill
              className="object-cover"
            />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="font-serif text-2xl text-ink">A mountain soul through and through</h3>
            <p className="mt-3 text-sm text-slate-600">
              Ankit is a BMC-certified mountaineer with experience guiding treks across Chamba Valley,
              Dalhousie, Dharamshala, and Manali. Growing up in the Himalayas gave him a deep respect
              for mountain culture, safety, and authentic village connections.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Local Himalayan guide with multi-route experience.</li>
              <li>BMC certification (institute and year available on request).</li>
              <li>Safety-first planning with transparent itineraries.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Featured Himalayan Regions" subtitle="Chamba Valley, Dalhousie, Dharamshala, and Manali — curated by locals.">
        <div className="grid gap-6 md:grid-cols-2 stagger-children">
          {regions.map((region) => (
            <RegionCard key={region.slug} region={region} />
          ))}
        </div>
      </Section>

      <Section
        title="Popular Treks & Expeditions"
        subtitle="Handpicked itineraries for beginners, families, and high-altitude adventurers."
      >
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          {featuredTreks.map((trek) => (
            <TrekCard key={trek.slug} trek={trek} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/treks"
            className="rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-ink"
          >
            View all treks
          </Link>
        </div>
      </Section>

      <Section title="Choose Your Style" subtitle="Designed for family groups, women-only treks, or custom offbeat adventures.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Family-friendly treks',
            'Offbeat villages + homestays',
            'Women-only options',
            'Budget to premium',
            'Custom itineraries',
            'Camping experiences'
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why Walk in Himalayas?" subtitle="Trust signals from a local BMC-certified founder.">
        <div className="grid gap-4 md:grid-cols-5">
          {[
            'BMC certified guide',
            'Local Himalayan expert',
            'Small groups only',
            'Safety-first planning',
            'Transparent itineraries'
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-mist px-4 py-5 text-xs uppercase tracking-wide text-ink">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Guest Stories" subtitle="Replace with verified reviews when available.">
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          <TestimonialCard
            name="Guest A"
            text="Our family trek in Dalhousie felt safe, local, and beautifully planned."
          />
          <TestimonialCard
            name="Guest B"
            text="Triund at sunrise was unforgettable. Loved the local insights and pacing."
          />
          <TestimonialCard
            name="Guest C"
            text="We discovered villages in Chamba that we would have never found ourselves."
          />
        </div>
        <div className="mt-6">
          <a
            href={siteConfig.social.googleBusinessProfile}
            className="text-sm font-semibold text-pine"
          >
            Review us on Google →
          </a>
        </div>
      </Section>

      <Section title="Safety & Responsible Trekking" subtitle="Our safety-first promise for families and high-altitude explorers.">
        <div className="section-grid">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="font-serif text-xl text-ink">Safety practices</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Acclimatization-led itineraries with flexible buffers.</li>
              <li>First-aid kit and emergency planning on every trek.</li>
              <li>Guide ratios based on difficulty and group size.</li>
              <li>Weather contingency protocols and honest route briefings.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="font-serif text-xl text-ink">Responsible travel</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Leave No Trace principles and clean-up drives.</li>
              <li>Support local homestays and village economies.</li>
              <li>Respect for cultural sites and community guidelines.</li>
              <li>Reusable bottles and minimal plastic use on trail.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Plan Your Trek" subtitle="Fast response with custom plans for every season.">
        <div id="enquiry">
          <EnquiryForm />
        </div>
      </Section>
    </main>
  );
}
