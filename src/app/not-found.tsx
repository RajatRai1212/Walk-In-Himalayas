import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-moss">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Trail not found</h1>
      <p className="mt-4 text-sm text-slate-600">
        The page you are looking for has moved or does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-pine px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
      >
        Back to home
      </Link>
    </main>
  );
}
