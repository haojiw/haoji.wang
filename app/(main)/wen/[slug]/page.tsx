import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout from '../../components/ArticleLayout';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { getPost, getPostSlugs } from '@/lib/content';

type WenPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getPostSlugs('wen').map((slug) => ({ slug }));
}

export function generateMetadata({ params }: WenPostParams): Metadata {
  const post = getPost('wen', params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} | Haoji Wang`,
    description: post.description,
  };
}

export default function WenPost({ params }: WenPostParams) {
  const post = getPost('wen', params.slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticleLayout
      title={post.title}
      date={post.date}
      language="zh"
    >
      <MarkdownRenderer source={post.content} language="zh" />
    </ArticleLayout>
  );
}
