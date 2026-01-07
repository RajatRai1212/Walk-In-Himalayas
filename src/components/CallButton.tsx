import { siteConfig } from '@/config/site';

export function CallButton() {
  return (
    <a
      href={`tel:${siteConfig.contact.phone}`}
      className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink"
    >
      Call
    </a>
  );
}
