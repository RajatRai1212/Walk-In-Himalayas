import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Section({
  title,
  subtitle,
  children,
  className
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('py-14 md:py-20', className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {title ? (
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-clay">Walk in Himalayas</p>
            <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">{title}</h2>
            {subtitle ? <p className="mt-3 text-slate-600 md:text-lg">{subtitle}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
