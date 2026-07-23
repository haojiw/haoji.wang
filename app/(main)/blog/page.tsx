import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { getPost, getPosts } from '@/lib/content';
import { layout, page, type as typeStyles } from '../theme';

export const metadata: Metadata = {
  title: 'Blog | Haoji Wang',
  description: 'Writing by Haoji Wang.',
};

function readingTime(content: string) {
  const plainText = content
    .replace(/<[^>]*>/g, ' ')
    .replace(/[`*_#>[\]()-]/g, ' ');
  const chineseCharacterCount = (plainText.match(/[\u3400-\u9fff]/g) ?? []).length;
  const wordCount = plainText
    .replace(/[\u3400-\u9fff]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 200 + chineseCharacterCount / 350));
}

export default function BlogPage() {
  const writing = getPosts('writing');
  const wen = getPosts('wen');

  return (
    <main className={page.shell}>
      <div className={page.container}>
        <SiteHeader active="blog" />

        <section className={`${layout.homeFirstSection} reveal reveal-1`}>
          <h1 className={`${layout.sectionTitle} ${typeStyles.homeSectionTitle}`}>
            Writing
          </h1>
          <div className={layout.list}>
            {writing.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-baseline justify-between gap-4 no-underline hover:no-underline"
              >
                <span className="font-body text-xl leading-relaxed transition group-hover:text-brand">
                  {post.title}
                </span>
                  <span className="flex shrink-0 items-baseline gap-4 font-body text-base text-muted">
                    <span>
                    {post.readingMinutes ||
                      readingTime(getPost('writing', post.slug)?.content ?? '')}{' '}
                    min read
                    </span>
                  </span>
              </Link>
            ))}
          </div>
        </section>

        <section className={`${layout.section} reveal reveal-2`}>
          <h2 className={`${layout.sectionTitle} ${typeStyles.chineseHomeSectionTitle}`}>
            中文作品
          </h2>
          <div className={layout.list}>
            {wen.map((post) => (
              <Link
                key={post.slug}
                href={`/wen/${post.slug}`}
                className="group flex items-baseline justify-between gap-4 no-underline hover:no-underline"
              >
                <span className="font-chinese text-lg leading-relaxed transition group-hover:text-brand">
                  {post.title}
                </span>
                <span className="flex shrink-0 items-baseline gap-4 font-chinese text-base text-muted">
                  <span>
                    {post.readingMinutes ||
                      readingTime(getPost('wen', post.slug)?.content ?? '')}{' '}
                    分钟阅读
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <figure className="mt-24 w-96 max-w-full reveal reveal-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work/paperhouse-cover.jpg"
            alt="Hand-drawn PaperHouse cover"
            className="w-full"
          />
        </figure>
      </div>
    </main>
  );
}
