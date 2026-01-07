'use client';

import { useState } from 'react';

export function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left text-sm font-semibold text-ink"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{faq.question}</span>
            <span className="text-slate-400">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index ? <p className="mt-3 text-sm text-slate-600">{faq.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
