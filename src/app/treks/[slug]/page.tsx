import { notFound } from 'next/navigation';
import { treks } from '@/data/treks';
import { regions } from '@/data/regions';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Section } from '@/components/Section';
import { EnquiryForm } from '@/components/EnquiryForm';
import { FAQAccordion } from '@/components/FAQAccordion';
import { PricingOptions } from '@/components/PricingOptions';
import Image from 'next/image';
import { faqSchema, serviceSchema } from '@/lib/schema';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function generateStaticParams() {
  return treks.map((trek) => ({ slug: trek.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const trek = treks.find((item) => item.slug === params.slug);
  if (!trek) return {};
  return buildMetadata({
    title: `${trek.name} Trek`,
    description: trek.overview,
    path: `/treks/${trek.slug}`
  });
}

export default function TrekPage({ params }: { params: { slug: string } }) {
  const trek = treks.find((item) => item.slug === params.slug);
  if (!trek) return notFound();
  const region = regions.find((item) => item.name.includes(trek.region));

  return (
    <main>
      <Section title={trek.name} subtitle={trek.overview}>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Treks', href: '/treks' },
            { name: trek.name, href: `/treks/${trek.slug}` }
          ]}
          includeSchema
        />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
              {trek.gallery.map((image) => (
                <div key={image} className="relative h-48 overflow-hidden rounded-3xl">
                  <Image src={image} alt={trek.name} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">Quick Facts</h2>
              <div className="mt-4 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-ink">Altitude</p>
                  <p>{trek.altitude}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Duration</p>
                  <p>{trek.durationDays} day(s)</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Difficulty</p>
                  <p>{trek.difficulty}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Best Season</p>
                  <p>{trek.bestSeason}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Starting Point</p>
                  <p>{trek.startingPoint}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Nearest Town</p>
                  <p>{trek.nearestTown}</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">Highlights</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {trek.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">Day-wise Itinerary</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {trek.itinerary.map((day) => (
                  <div key={day.day} className="rounded-2xl bg-mist p-4">
                    <p className="font-semibold text-ink">{day.day}</p>
                    <p className="mt-1">{day.plan}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="section-grid">
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h2 className="font-serif text-2xl text-ink">Inclusions</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {trek.inclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h2 className="font-serif text-2xl text-ink">Exclusions</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {trek.exclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">What to Pack</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {trek.packingList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">Safety Notes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {trek.safetyNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                Women-only option available on request. Guide ratio depends on group size and trail
                difficulty.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">How to Reach</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {trek.howToReach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">FAQs</h2>
              <div className="mt-4">
                <FAQAccordion faqs={trek.faqs} />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">Related reads</h2>
              <p className="mt-2 text-sm text-slate-600">
                Explore trekking guides and safety tips for {trek.region}.
              </p>
              <Link href="/blog" className="mt-4 inline-flex text-sm font-semibold text-pine">
                Go to blog →
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-serif text-2xl text-ink">More in {trek.region}</h2>
              <p className="mt-2 text-sm text-slate-600">
                Discover other treks and regional highlights in {trek.region}.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {treks
                  .filter((item) => item.region === trek.region && item.slug !== trek.slug)
                  .slice(0, 3)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      href={`/treks/${item.slug}`}
                      className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink"
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
              {region ? (
                <Link
                  href={`/destinations/${region.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-pine"
                >
                  View {region.name} destination →
                </Link>
              ) : null}
            </div>
          </div>
          <div className="space-y-6">
            <PricingOptions basePrice={trek.priceFrom} />
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Primary CTA</p>
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href={`https://wa.me/91${siteConfig.contact.whatsapp}?text=Hi! I'd like to book the ${trek.name} trek.`}
                  className="rounded-full bg-pine px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
                >
                  WhatsApp now
                </a>
                <Link
                  href="#enquiry"
                  className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-ink"
                >
                  Enquire
                </Link>
              </div>
            </div>
            <div id="enquiry">
              <EnquiryForm preselectedTrek={trek.name} />
            </div>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(trek)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(trek.faqs)) }}
      />
    </main>
  );
}
