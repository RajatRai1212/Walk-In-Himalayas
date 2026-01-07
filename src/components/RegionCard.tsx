import Link from 'next/link';
import type { Region } from '@/data/regions';

export function RegionCard({ region }: { region: Region }) {
  return (
    <Link
      href={`/destinations/${region.slug}`}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-moss">Region</p>
      <h3 className="mt-2 font-serif text-2xl text-ink">{region.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{region.shortDescription}</p>
      <p className="mt-4 text-xs text-slate-500">Best season: {region.bestSeason}</p>
    </Link>
  );
}
