import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleLayout from '../../../components/ArticleLayout';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import { getPost, getPostSlugs } from '@/lib/content';

type PaperHouse2016Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getPostSlugs('paperhouse2016').map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PaperHouse2016Params): Metadata {
  const post = getPost('paperhouse2016', params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} | Haoji Wang`,
    description: post.description,
  };
}

export default function PaperHouse2016Post({ params }: PaperHouse2016Params) {
  const post = getPost('paperhouse2016', params.slug);

  if (!post) {
    notFound();
  }

  const pair = post.pair ? getPost('paperhouse2016', post.pair) : null;

  return (
    <ArticleLayout
      title={post.title}
      date={post.date}
      dateDisplay={post.dateDisplay}
      language={post.language}
      active="work"
      backHref="/paperhouse/2016"
      backLabel="2016"
    >
      {pair && (
        <p className="mt-4 font-body text-base text-muted">
          {post.language === 'zh' ? (
            <>
              English translation:{' '}
              <Link
                href={`/paperhouse/2016/${pair.slug}`}
                className="text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
              >
                {pair.title}
              </Link>
            </>
          ) : (
            <>
              中文原文：
              <Link
                href={`/paperhouse/2016/${pair.slug}`}
                className="font-chinese text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
              >
                {pair.title}
              </Link>
            </>
          )}
        </p>
      )}
      <MarkdownRenderer source={post.content} language={post.language} />
    </ArticleLayout>
  );
}
