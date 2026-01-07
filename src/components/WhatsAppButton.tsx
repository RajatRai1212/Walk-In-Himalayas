import { waLink } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function WhatsAppButton() {
  return (
    <a
      href={waLink(siteConfig.contact.whatsapp)}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-pine px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-soft md:hidden"
    >
      WhatsApp
    </a>
  );
}
