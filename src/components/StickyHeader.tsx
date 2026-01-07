'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { waLink } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent bg-white/80 backdrop-blur transition-shadow ${
        isScrolled ? 'shadow-soft border-slate-200' : ''
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="font-serif text-xl text-ink">
          Walk in Himalayas
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <Link href="/treks">Treks</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/tours">Tours</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="hidden rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink md:inline-flex"
          >
            Call
          </a>
          <a
            href={waLink(siteConfig.contact.whatsapp)}
            className="rounded-full bg-pine px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
          >
            WhatsApp
          </a>
          <Link
            href="/contact#enquiry"
            className="hidden rounded-full border border-moss/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-moss md:inline-flex"
          >
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}
