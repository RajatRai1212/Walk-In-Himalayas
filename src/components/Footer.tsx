import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-ink">Walk in Himalayas</p>
            <p className="mt-2 text-sm text-slate-600">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-slate-600">Base town: {siteConfig.location.baseTown}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quick links</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <Link href="/treks">Treks</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/tours">Tours</Link>
              <Link href="/camping">Camping</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <a href={`tel:${siteConfig.contact.phone}`}>Call: {siteConfig.contact.phone}</a>
              <a href={`https://wa.me/91${siteConfig.contact.whatsapp}`}>WhatsApp: {siteConfig.contact.whatsapp}</a>
              <span>Email: {siteConfig.contact.email}</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Walk in Himalayas. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cancellation-policy">Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
