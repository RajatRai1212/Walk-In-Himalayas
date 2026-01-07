'use client';

import { useState, type FormEvent } from 'react';
import { womenOnlySchema } from '@/lib/validation';

export function WomenOnlyForm() {
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
      comfortNeeds: String(formData.get('comfortNeeds') || ''),
      message: String(formData.get('message') || ''),
      honeypot: String(formData.get('website') || '')
    };

    const parsed = womenOnlySchema.safeParse(payload);
    if (!parsed.success) {
      setStatus('error');
      setError('Please complete the required fields.');
      return;
    }

    try {
      const res = await fetch('/api/women-only', {
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
      <h3 className="font-serif text-2xl text-ink">Women-only Trek Enquiry</h3>
      <p className="mt-2 text-sm text-slate-600">
        Share your comfort needs and preferred trek. Women-led options available on request.
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
            placeholder="Preferred trek"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
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
        </div>
        <input
          name="comfortNeeds"
          placeholder="Comfort needs (stay, pacing, privacy)"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Anything else you'd like us to know"
          className="min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          required
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-pine px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
        >
          {status === 'sending' ? 'Sending...' : 'Submit request'}
        </button>
        {status === 'error' ? <p className="text-sm text-red-600">{error}</p> : null}
        {status === 'success' ? (
          <div className="rounded-2xl border border-moss/30 bg-mist p-4 text-sm text-slate-700">
            <p className="font-semibold text-ink">What happens next?</p>
            <ul className="mt-2 list-disc pl-5">
              <li>We review comfort requirements and recommend suitable treks.</li>
              <li>Our team shares safety notes, stay options, and pricing.</li>
              <li>Final confirmation happens only after you approve the plan.</li>
            </ul>
          </div>
        ) : null}
      </form>
    </div>
  );
}
