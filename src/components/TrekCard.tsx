import Link from 'next/link';
import Image from 'next/image';
import type { Trek } from '@/data/treks';

export function TrekCard({ trek }: { trek: Trek }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="relative h-40">
        <Image src={trek.gallery[0]} alt={trek.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-moss">{trek.region}</p>
        <h3 className="mt-2 font-serif text-xl text-ink">{trek.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{trek.overview}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>{trek.durationDays} day(s)</span>
          <span>{trek.difficulty}</span>
          <span>{trek.bestSeason}</span>
        </div>
        <Link
          href={`/treks/${trek.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-pine"
        >
          View trek →
        </Link>
      </div>
    </div>
  );
}
