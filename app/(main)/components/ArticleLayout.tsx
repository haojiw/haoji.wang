import Link from 'next/link';
import type { ReactNode } from 'react';
import { layout, page, type as typeStyles } from '../theme';

type ArticleLayoutProps = {
  title: string;
  date: string;
  language?: 'en' | 'zh';
  children: ReactNode;
};

function formatDate(date: string, language: 'en' | 'zh') {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  if (language === 'zh') {
    const year = parsed.getFullYear();
    const month = String(parsed.getMonth() + 1).padStart(2, '0');
    const day = String(parsed.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function ArticleLayout({
  title,
  date,
  language = 'en',
  children,
}: ArticleLayoutProps) {
  const isChinese = language === 'zh';

  return (
    <main className={page.shell}>
      <div className={page.container}>
        <header className={layout.articleHeader}>
          <h1 className={typeStyles.homeTitle}>
            <Link href="/" className="no-underline hover:no-underline">
              haoji.wang
            </Link>
          </h1>
        </header>

        <article>
          <h1 className={isChinese ? typeStyles.chineseArticleTitle : typeStyles.articleTitle}>
            {title}
          </h1>
          <time className={`mt-3 block ${typeStyles.meta}`}>{formatDate(date, language)}</time>
          {children}
        </article>
      </div>
    </main>
  );
}
