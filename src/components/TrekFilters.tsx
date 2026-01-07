'use client';

import { useMemo, useState } from 'react';
import type { Trek } from '@/data/treks';
import { TrekCard } from '@/components/TrekCard';

export function TrekFilters({ treks }: { treks: Trek[] }) {
  const [difficulty, setDifficulty] = useState('All');
  const [duration, setDuration] = useState('All');
  const [season, setSeason] = useState('All');
  const [region, setRegion] = useState('All');
  const [style, setStyle] = useState('All');

  const filtered = useMemo(() => {
    return treks.filter((trek) => {
      if (difficulty !== 'All' && trek.difficulty !== difficulty) return false;
      if (duration !== 'All') {
        const days = trek.durationDays;
        if (duration === '1-2 days' && days > 2) return false;
        if (duration === '3-4 days' && (days < 3 || days > 4)) return false;
        if (duration === '5+ days' && days < 5) return false;
      }
      if (season !== 'All' && !trek.bestSeason.toLowerCase().includes(season.toLowerCase())) {
        return false;
      }
      if (region !== 'All' && trek.region !== region) return false;
      if (style !== 'All' && !trek.tags.includes(style.toLowerCase())) return false;
      return true;
    });
  }, [treks, difficulty, duration, season, region, style]);

  const regions = Array.from(new Set(treks.map((t) => t.region)));

  return (
    <div>
      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-5">
        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          className="rounded-2xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option>All</option>
          <option>Easy</option>
          <option>Moderate</option>
          <option>Challenging</option>
          <option>Advanced</option>
        </select>
        <select
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          className="rounded-2xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option>All</option>
          <option>1-2 days</option>
          <option>3-4 days</option>
          <option>5+ days</option>
        </select>
        <select
          value={season}
          onChange={(event) => setSeason(event.target.value)}
          className="rounded-2xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option>All</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
        <select
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          className="rounded-2xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option>All</option>
          {regions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          value={style}
          onChange={(event) => setStyle(event.target.value)}
          className="rounded-2xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option>All</option>
          <option value="family">Family</option>
          <option value="women-only">Women-only</option>
          <option value="offbeat">Offbeat</option>
          <option value="budget">Budget</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {filtered.map((trek) => (
          <TrekCard key={trek.slug} trek={trek} />
        ))}
      </div>
    </div>
  );
}
