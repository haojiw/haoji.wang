// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-bg">
      <div className="px-6 text-center">
        <h1 className="mb-4 font-serif text-4xl text-accent md:text-5xl">404</h1>
        <p className="mb-4 font-serif text-xl text-text">Not Here</p>
        <p className="mx-auto mb-8 max-w-md font-body text-base text-muted">
          maybe you're lost, maybe you're just early. 
        </p>
        <Link
          href="/"
          className="inline-block rounded-full border border-text px-5 py-2 font-sans text-sm uppercase tracking-wide transition-colors hover:bg-accent hover:text-bg"
        >
          Let's Go Home
        </Link>
      </div>
    </main>
  );
}
