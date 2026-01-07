type RateRecord = { count: number; start: number };

const RATE_LIMIT = {
  windowMs: 60_000,
  max: 5
};

const store = new Map<string, RateRecord>();

export function checkRateLimit(key: string) {
  const now = Date.now();
  const existing = store.get(key);
  if (!existing) {
    store.set(key, { count: 1, start: now });
    return { allowed: true, retryAfter: 0 };
  }

  if (now - existing.start > RATE_LIMIT.windowMs) {
    store.set(key, { count: 1, start: now });
    return { allowed: true, retryAfter: 0 };
  }

  if (existing.count >= RATE_LIMIT.max) {
    const retryAfter = Math.ceil((RATE_LIMIT.windowMs - (now - existing.start)) / 1000);
    return { allowed: false, retryAfter };
  }

  existing.count += 1;
  store.set(key, existing);
  return { allowed: true, retryAfter: 0 };
}
