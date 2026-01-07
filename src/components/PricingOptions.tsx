'use client';

import { useState } from 'react';
import { formatPrice } from '@/lib/utils';

export function PricingOptions({ basePrice }: { basePrice: number }) {
  const tiers = [
    {
      name: 'Budget',
      multiplier: 1,
      details: 'Shared stays, group meals, shared transport'
    },
    {
      name: 'Standard',
      multiplier: 1.25,
      details: 'Comfort stays, curated meals, smaller groups'
    },
    {
      name: 'Premium',
      multiplier: 1.5,
      details: 'Boutique stays, private transfers, flexible pacing'
    }
  ];

  const [active, setActive] = useState(tiers[0]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="font-serif text-2xl text-ink">Pricing Options</h3>
      <p className="mt-2 text-sm text-slate-600">Starting from {formatPrice(basePrice)}/person</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {tiers.map((tier) => (
          <button
            key={tier.name}
            type="button"
            onClick={() => setActive(tier)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
              active.name === tier.name
                ? 'bg-pine text-white'
                : 'border border-slate-200 text-slate-700'
            }`}
          >
            {tier.name}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-mist p-4 text-sm text-slate-700">
        <p className="font-semibold text-ink">{active.name} package</p>
        <p className="mt-1">{active.details}</p>
        <p className="mt-2 text-lg font-semibold text-ink">
          {formatPrice(Math.round(basePrice * active.multiplier))}/person
        </p>
      </div>
    </div>
  );
}
