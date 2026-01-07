'use client';

import { useState } from 'react';
import Image from 'next/image';

const items = [
  { id: 1, category: 'Trekking', src: '/images/placeholder-1.svg' },
  { id: 2, category: 'Camping', src: '/images/placeholder-2.svg' },
  { id: 3, category: 'Village', src: '/images/placeholder-3.svg' },
  { id: 4, category: 'Dharamshala', src: '/images/placeholder-4.svg' },
  { id: 5, category: 'Manali', src: '/images/placeholder-5.svg' },
  { id: 6, category: 'Chamba', src: '/images/placeholder-6.svg' },
  { id: 7, category: 'Dalhousie', src: '/images/placeholder-7.svg' },
  { id: 8, category: 'Camping', src: '/images/placeholder-8.svg' },
  { id: 9, category: 'Trekking', src: '/images/placeholder-9.svg' },
  { id: 10, category: 'Village', src: '/images/placeholder-10.svg' }
];

const categories = ['All', 'Trekking', 'Camping', 'Village', 'Chamba', 'Dalhousie', 'Dharamshala', 'Manali'];

export function GalleryGrid() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
              active === category ? 'bg-pine text-white' : 'border border-slate-200 text-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <div key={item.id} className="mb-4 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <Image src={item.src} alt={item.category} width={600} height={400} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
