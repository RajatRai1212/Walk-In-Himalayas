import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    return NextResponse.json(
      { ok: false, message: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(rate.retryAfter) } }
    );
  }

  const data = await request.json();
  const parsed = enquirySchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Placeholder: integrate SMTP or email provider later.
  console.log('Enquiry received', parsed.data);

  return NextResponse.json({ ok: true });
}
