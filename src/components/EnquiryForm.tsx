'use client';

import { useState, type FormEvent } from 'react';
import { enquirySchema } from '@/lib/validation';

export function EnquiryForm({ preselectedTrek }: { preselectedTrek?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus('sending');
    setError(null);
    const payload = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      trek: String(formData.get('trek') || ''),
      dates: String(formData.get('dates') || ''),
      groupSize: String(formData.get('groupSize') || ''),
      budget: String(formData.get('budget') || 'Budget'),
      womenOnly: formData.get('womenOnly') === 'on',
      familyWithKids: formData.get('familyWithKids') === 'on',
      message: String(formData.get('message') || ''),
      honeypot: String(formData.get('website') || '')
    };

    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      setStatus('error');
      setError('Please fill all required fields.');
      return;
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data)
      });
      if (!res.ok) {
        throw new Error('Request failed');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again or WhatsApp us.');
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="font-serif text-2xl text-ink">Enquiry / Book a Trek</h3>
      <p className="mt-2 text-sm text-slate-600">
        Share your preferred dates and group size. We respond within a few hours.
      </p>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="name"
            placeholder="Full name"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            required
          />
          <input
            name="phone"
            placeholder="Phone / WhatsApp"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="email"
            placeholder="Email (optional)"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          />
          <input
            name="trek"
            defaultValue={preselectedTrek}
            placeholder="Trek name"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <input
            name="dates"
            placeholder="Preferred dates"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            required
          />
          <input
            name="groupSize"
            placeholder="Group size"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            required
          />
          <select
            name="budget"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            defaultValue="Budget"
          >
            <option>Budget</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="womenOnly" className="h-4 w-4" />
            Women-only group
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="familyWithKids" className="h-4 w-4" />
            Family with kids
          </label>
        </div>
        <textarea
          name="message"
          placeholder="Tell us about your expectations, pace, or special needs"
          className="min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          required
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-pine px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
        >
          {status === 'sending' ? 'Sending...' : 'Submit enquiry'}
        </button>
        {status === 'error' ? <p className="text-sm text-red-600">{error}</p> : null}
        {status === 'success' ? (
          <div className="rounded-2xl border border-moss/30 bg-mist p-4 text-sm text-slate-700">
            <p className="font-semibold text-ink">What happens next?</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Our local guide team reviews your dates and trail conditions.</li>
              <li>We confirm availability and send a detailed itinerary + quote.</li>
              <li>Booking is request-based — no payments until you confirm.</li>
            </ul>
          </div>
        ) : null}
      </form>
    </div>
  );
}
