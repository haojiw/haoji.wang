import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteHeader, { type NavPage } from './SiteHeader';
import { layout, page, type as typeStyles } from '../theme';

type ArticleLayoutProps = {
  title: string;
  date: string;
  dateDisplay?: string;
  language?: 'en' | 'zh';
  active?: NavPage;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
};

function formatDate(date: string, language: 'en' | 'zh') {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  if (language === 'zh') {
    const year = parsed.getUTCFullYear();
    const month = String(parsed.getUTCMonth() + 1).padStart(2, '0');
    const day = String(parsed.getUTCDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function ArticleLayout({
  title,
  date,
  dateDisplay,
  language = 'en',
  active = 'blog',
  backHref,
  backLabel,
  children,
}: ArticleLayoutProps) {
  const isChinese = language === 'zh';

  return (
    <main className={page.shell}>
      <div className={page.container}>
        <div className={layout.articleHeader}>
          <SiteHeader active={active} />
        </div>

        <article className="reveal">
          {backHref && (
            <Link
              href={backHref}
              className="mb-4 inline-block font-body text-base text-muted no-underline transition hover:text-brand hover:no-underline"
            >
              ← {backLabel ?? 'back'}
            </Link>
          )}
          <h1 className={isChinese ? typeStyles.chineseArticleTitle : typeStyles.articleTitle}>
            {title}
          </h1>
          <time className={`mt-3 block ${typeStyles.meta}`}>
            {dateDisplay || formatDate(date, language)}
          </time>
          {children}
        </article>
      </div>
    </main>
  );
}
