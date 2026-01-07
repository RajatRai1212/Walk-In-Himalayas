import { Section } from '@/components/Section';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Meet Ankit, a local BMC-certified Himalayan guide and the founder of Walk in Himalayas.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <main>
      <Section title="About Walk in Himalayas" subtitle="Local expertise, safety-first planning, and authentic village connections.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]}
          includeSchema
        />
        <div className="section-grid">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-ink">Founder Story</h2>
            <p className="mt-3 text-sm text-slate-600">
              {siteConfig.founder.name} was born and raised in the Himalayas, leading treks for families,
              students, and adventure seekers across Chamba, Dalhousie, Dharamshala, and Manali. With a
              {` ${siteConfig.founder.certification}`} certification from{' '}
              {siteConfig.founder.institute || 'a recognized mountaineering institute'} ({siteConfig.founder.year || 'year TBD'}),
              he blends safety-first planning with authentic village experiences.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Mission: create meaningful Himalayan adventures that respect local communities, nature, and
              traveler comfort.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-ink">Values</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Safety and acclimatization for every guest.</li>
              <li>Sustainability and Leave No Trace trekking ethics.</li>
              <li>Local community support through homestays and village guides.</li>
              <li>Respect for Himalayan culture, heritage, and sacred sites.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Why trek with a local guide?"
        subtitle="Local knowledge means better trails, safer pacing, and deeper cultural connections."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Real-time trail decisions',
              text: 'We adjust routes based on weather, trail conditions, and your group’s pace.'
            },
            {
              title: 'Authentic village access',
              text: 'Local networks open doors to homestays, food, and community stories.'
            },
            {
              title: 'Trusted safety planning',
              text: 'Experienced guides build in buffers, first-aid readiness, and clear briefings.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
