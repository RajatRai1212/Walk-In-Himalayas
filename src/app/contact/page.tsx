import { Section } from '@/components/Section';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EnquiryForm } from '@/components/EnquiryForm';
import { siteConfig } from '@/config/site';

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch with Walk in Himalayas for trekking and tour enquiries.',
  path: '/contact'
});

export default function ContactPage() {
  return (
    <main>
      <Section title="Contact" subtitle="Reach our local team in Dalhousie for immediate help.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]}
          includeSchema
        />
        <div className="section-grid">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-ink">Call or WhatsApp</h2>
            <p className="mt-3 text-sm text-slate-600">Phone: {siteConfig.contact.phone}</p>
            <p className="mt-1 text-sm text-slate-600">WhatsApp: {siteConfig.contact.whatsapp}</p>
            <p className="mt-4 text-sm text-slate-600">Email: {siteConfig.contact.email}</p>
            <p className="mt-4 text-sm text-slate-600">Base town: {siteConfig.location.baseTown}</p>
            <p className="mt-2 text-sm text-slate-600">Business hours: {siteConfig.contact.businessHours}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-ink">Map</h2>
            <div className="mt-4 h-56 rounded-2xl border border-dashed border-slate-300 bg-mist p-4 text-sm text-slate-500">
              Map embed placeholder. Replace with Google Maps embed code.
            </div>
          </div>
        </div>
      </Section>

      <Section title="Send an Enquiry" subtitle="We respond within a few hours.">
        <div id="enquiry">
          <EnquiryForm />
        </div>
      </Section>
    </main>
  );
}
