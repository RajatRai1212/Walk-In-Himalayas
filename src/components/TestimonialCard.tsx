export function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-sm text-slate-600">“{text}”</p>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-moss">{name}</p>
    </div>
  );
}
