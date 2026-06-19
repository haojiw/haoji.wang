import Link from 'next/link';
import { getPosts } from '@/lib/content';
import { layout, page, type as typeStyles } from './theme';

function Section({
  label,
  labelClassName = typeStyles.homeSectionTitle,
  className = layout.section,
  children,
}: {
  label: string;
  labelClassName?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={className}>
      <h2 className={`${layout.sectionTitle} ${labelClassName}`}>
        {label}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  const writing = getPosts('writing');
  const wen = getPosts('wen');

  return (
    <main className={page.shell}>
      <div className={page.container}>
        <header className={layout.headerRow}>
          <h1 className={typeStyles.homeTitle}>
            <Link href="/" className="no-underline hover:no-underline">
              haoji.wang
            </Link>
          </h1>
          <Link
            href="/about"
            className={`${typeStyles.headerLink} no-underline hover:text-brand hover:no-underline`}
          >
            About
          </Link>
        </header>

        <Section label="Work" className={layout.homeFirstSection}>
          <p className={`${page.contentMeasure} ${typeStyles.homeLead}`}>
            I&apos;m building{' '}
            <a
              href="https://paperhouse.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand no-underline hover:underline"
            >
              PaperHouse
            </a>
            , a notebook from the future.
          </p>
        </Section>

        <Section label="Writing">
          <div className={layout.list}>
            {writing.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={typeStyles.linkTitle}
              >
                {post.title}
              </Link>
            ))}
          </div>
        </Section>

        <Section label="写作" labelClassName={typeStyles.chineseHomeSectionTitle}>
          <div className={layout.list}>
            {wen.map((post) => (
              <Link
                key={post.slug}
                href={`/wen/${post.slug}`}
                className={typeStyles.chineseLinkTitle}
              >
                {post.title}
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
