import type { Tour } from '@/data/tours';
import { formatPrice } from '@/lib/utils';

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-xs uppercase tracking-[0.2em] text-moss">{tour.region}</p>
      <h3 className="mt-2 font-serif text-xl text-ink">{tour.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{tour.overview}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>{tour.durationDays} days</span>
        <span>{tour.style}</span>
        <span>From {formatPrice(tour.priceFrom)}</span>
      </div>
    </div>
  );
}
