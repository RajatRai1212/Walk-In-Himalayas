'use client';

import { useState } from 'react';
import { EnquiryForm } from '@/components/EnquiryForm';

export function EnquiryDrawer({
  triggerLabel,
  preselectedTrek
}: {
  triggerLabel: string;
  preselectedTrek?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-pine px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white"
      >
        {triggerLabel}
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40" role="dialog" aria-modal>
          <div className="h-full w-full max-w-xl overflow-y-auto bg-snow p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="font-serif text-2xl text-ink">Quick Enquiry</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase"
              >
                Close
              </button>
            </div>
            <div className="mt-6">
              <EnquiryForm preselectedTrek={preselectedTrek} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
