import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { waLink } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-pattern">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(/images/grain.svg)' }} />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:gap-14 md:px-6 md:py-24">
        <div className="relative z-10 flex-1 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-moss">
            Himalayan adventure company
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
            Treks, camping & expeditions across Himachal
          </h1>
          <p className="mt-5 text-lg text-slate-700 md:text-xl">
            {siteConfig.tagline}. From family-friendly hikes to high-altitude expeditions, we design
            safe, well-paced adventures in Chamba Valley, Dalhousie, Dharamshala, and Manali.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={waLink(siteConfig.contact.whatsapp, 'Hi! I want to book a trek with Walk in Himalayas.')}
              className="rounded-full bg-pine px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-soft"
            >
              WhatsApp to Book
            </Link>
            <Link
              href="/treks"
              className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink"
            >
              Explore Treks
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/70 p-4">
              <p className="font-semibold text-ink">Custom treks & tours</p>
              <p>Choose budget to premium with flexible pacing and local insights.</p>
            </div>
            <div className="rounded-2xl bg-white/70 p-4">
              <p className="font-semibold text-ink">Family to expedition-ready</p>
              <p>Short hikes, village walks, and challenging high-altitude routes.</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex-1 animate-fade-up">
          <div className="relative h-[360px] overflow-hidden rounded-[32px] border border-white/60 bg-mist shadow-soft md:h-[420px]">
            <Image
              src="/images/hero.png"
              alt="Himalayan trek illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full bg-sunrise opacity-60 md:block" />
        </div>
      </div>
    </section>
  );
}
