import Link from 'next/link';
import { getPosts } from '@/lib/content';
import { page, type as typeStyles } from '../theme';

export default function WenPage() {
  const posts = getPosts('wen');

  return (
    <main className={page.shell}>
      <div className={page.container}>
        <header>
          <h1 className={typeStyles.homeTitle}>
            <Link href="/" className="no-underline hover:no-underline">
              haoji.wang
            </Link>
          </h1>
        </header>

        <section className="mt-20">
          <h1 className={`mb-5 ${typeStyles.chineseHomeSectionTitle}`}>
            写作
          </h1>
          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/wen/${post.slug}`}
                  className={typeStyles.chineseLinkTitle}
                >
                  {post.title}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
