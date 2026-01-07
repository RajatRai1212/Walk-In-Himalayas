import { NextResponse } from 'next/server';
import { womenOnlySchema } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const rate = checkRateLimit(`${ip}-women`);
  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, message: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(rate.retryAfter) } }
    );
  }

  const data = await request.json();
  const parsed = womenOnlySchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  console.log('Women-only enquiry', parsed.data);

  return NextResponse.json({ ok: true });
}
