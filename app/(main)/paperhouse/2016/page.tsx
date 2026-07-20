import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import { getPosts } from '@/lib/content';
import { layout, page, type as typeStyles } from '../../theme';

export const metadata: Metadata = {
  title: 'PaperHouse 2016 | Haoji Wang',
  description:
    'I wrote a lot in middle school. Even though I spent most of my time doing math olympiads, my dream was to become a writer.',
};

export default function PaperHouse2016Page() {
  const posts = getPosts('paperhouse2016');
  const originals = posts.filter((post) => post.language === 'zh');
  const translations = posts.filter((post) => post.language !== 'zh');

  return (
    <main className={page.shell}>
      <div className={page.container}>
          <SiteHeader active="work" />

          <section className={`${layout.homeFirstSection} reveal`}>
            <h1 className={`${layout.sectionTitle} ${typeStyles.homeSectionTitle}`}>
              PaperHouse 2016
            </h1>
            <div className={`${page.contentMeasure} space-y-4 ${typeStyles.homeLead}`}>
              <p>
                I wrote a lot in middle school. Even though I spent most of my
                time doing math olympiads, my dream was to become a writer.
              </p>
              <p>
                My mom recently dug these out, and thanks to her I got to
                revisit them.
              </p>
              <p className="font-chinese text-lg text-muted">
                推荐中文读者阅读原文。The English versions are auto-translated
                by Gemini.
              </p>
            </div>

            <div className="mt-12">
              <h2 className={`${layout.sectionTitle} ${typeStyles.chineseHomeSectionTitle}`}>
                原文
              </h2>
              <div className={layout.list}>
                {originals.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/paperhouse/2016/${post.slug}`}
                    className={typeStyles.chineseLinkTitle}
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className={layout.section}>
              <h2 className={`${layout.sectionTitle} ${typeStyles.homeSectionTitle}`}>
                English Translations
              </h2>
              <div className={layout.list}>
                {translations.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/paperhouse/2016/${post.slug}`}
                    className={typeStyles.linkTitle}
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
      </div>
    </main>
  );
}
