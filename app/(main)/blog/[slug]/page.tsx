import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout from '../../components/ArticleLayout';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { getPost, getPostSlugs } from '@/lib/content';

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getPostSlugs('writing').map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostParams): Metadata {
  const post = getPost('writing', params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} | Haoji Wang`,
    description: post.description,
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPost('writing', params.slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticleLayout
      title={post.title}
      date={post.date}
    >
      <MarkdownRenderer source={post.content} />
    </ArticleLayout>
  );
}
