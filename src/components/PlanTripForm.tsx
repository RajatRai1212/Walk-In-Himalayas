'use client';

import { useState, type FormEvent } from 'react';
import { planTripSchema } from '@/lib/validation';

export function PlanTripForm() {
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
      destination: String(formData.get('destination') || ''),
      dates: String(formData.get('dates') || ''),
      groupSize: String(formData.get('groupSize') || ''),
      interests: String(formData.get('interests') || ''),
      budget: String(formData.get('budget') || 'Budget'),
      message: String(formData.get('message') || ''),
      honeypot: String(formData.get('website') || '')
    };

    const parsed = planTripSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus('error');
      setError('Please complete the required fields.');
      return;
    }

    try {
      const res = await fetch('/api/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError('Unable to submit right now. Please WhatsApp us instead.');
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="font-serif text-2xl text-ink">Plan My Trip</h3>
      <p className="mt-2 text-sm text-slate-600">
        Tell us where you want to go and how you want to travel.
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
            name="destination"
            placeholder="Preferred destination"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <input
            name="dates"
            placeholder="Travel dates"
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
        <input
          name="interests"
          placeholder="Interests (trekking, camping, culture, wellness)"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Tell us about pace, stay preferences, or special needs"
          className="min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          required
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-pine px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
        >
          {status === 'sending' ? 'Sending...' : 'Submit trip request'}
        </button>
        {status === 'error' ? <p className="text-sm text-red-600">{error}</p> : null}
        {status === 'success' ? (
          <div className="rounded-2xl border border-moss/30 bg-mist p-4 text-sm text-slate-700">
            <p className="font-semibold text-ink">What happens next?</p>
            <ul className="mt-2 list-disc pl-5">
              <li>We curate an itinerary with best-season recommendations.</li>
              <li>You receive a draft plan and pricing options within 24 hours.</li>
              <li>Adjustments are easy — we finalize only after your confirmation.</li>
            </ul>
          </div>
        ) : null}
      </form>
    </div>
  );
}
