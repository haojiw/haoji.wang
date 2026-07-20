import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import { layout, page } from '../../../theme';

export const metadata: Metadata = {
  title: 'First Draft | Haoji Wang',
  description: 'The first draft of Thoughts, Word, and Truth.',
};

const drafts = [
  '/images/thoughts/draft-8437.jpg',
  '/images/thoughts/draft-8438.jpg',
  '/images/thoughts/draft-8439.jpg',
];

export default function FirstDraftPage() {
  return (
    <main className={page.shell}>
      <div className={page.container}>
        <div className={layout.articleHeader}>
          <SiteHeader active="blog" />
        </div>

        <article className="reveal">
          <Link
            href="/blog/thoughts-word-and-truth"
            className="mb-8 inline-block font-body text-base text-muted no-underline transition hover:text-brand hover:no-underline"
          >
            ← Thoughts, Word, and Truth
          </Link>

          <div className="max-w-2xl space-y-8">
            {drafts.map((src, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={`First draft, page ${index + 1}`}
                loading="lazy"
                className="w-full rounded-[3px] border border-border bg-white p-2 shadow-[0_18px_40px_-18px_rgba(37,34,31,0.4)] sm:p-3"
              />
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
