// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-7xl md:text-9xl font-serif text-accent mb-4">404</h1>
        <p className="text-3xl font-serif text-text mb-6">Not Here</p>
        <p className="text-muted text-lg font-body mb-10 max-w-md mx-auto">
          maybe you're lost, maybe you're just early. 
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-text rounded-lg font-sans text-sm uppercase tracking-wide hover:bg-text hover:text-background transition-colors"
        >
          Let's Go Home
        </Link>
      </div>
    </main>
  );
}
