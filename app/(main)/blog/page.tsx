import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { getPosts } from '@/lib/content';
import { layout, page, type as typeStyles } from '../theme';

export const metadata: Metadata = {
  title: 'Blog | Haoji Wang',
  description: 'Writing by Haoji Wang.',
};

function formatYear(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? '' : String(parsed.getUTCFullYear());
}

export default function BlogPage() {
  const writing = getPosts('writing');
  const wen = getPosts('wen');

  return (
    <main className={page.shell}>
      <div className={page.container}>
        <SiteHeader active="blog" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_260px] md:gap-12">
          <div>
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
                    <span className="shrink-0 font-body text-base text-muted">
                      {formatYear(post.date)}
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
                    <span className="shrink-0 font-body text-base text-muted">
                      {formatYear(post.date)}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <figure className={`${layout.homeFirstSection} mx-auto w-64 max-w-full reveal reveal-2 md:mx-0 md:mt-20 md:w-auto`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/work/paperhouse-cover.jpg"
              alt="Hand-drawn PaperHouse cover"
              className="w-full rounded-[3px] border border-border bg-white p-2 shadow-[0_18px_40px_-18px_rgba(37,34,31,0.45)]"
            />
          </figure>
        </div>
      </div>
    </main>
  );
}
