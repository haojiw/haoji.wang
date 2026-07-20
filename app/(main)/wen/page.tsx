import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { getPosts } from '@/lib/content';
import { layout, page, type as typeStyles } from '../theme';

export const metadata: Metadata = {
  title: '中文作品 | Haoji Wang',
  description: '王浩骥的中文作品。',
};

export default function WenPage() {
  const posts = getPosts('wen');

  return (
    <main className={page.shell}>
      <div className={page.container}>
          <SiteHeader active="blog" />

          <section className={`${layout.homeFirstSection} reveal`}>
            <h1 className={`${layout.sectionTitle} ${typeStyles.chineseHomeSectionTitle}`}>
              中文作品
            </h1>
            <div className={layout.list}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/wen/${post.slug}`}
                  className={typeStyles.chineseLinkTitle}
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </section>
      </div>
    </main>
  );
}
