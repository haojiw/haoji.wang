import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout from '../../components/ArticleLayout';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { getPost } from '@/lib/content';

export const metadata: Metadata = {
  title: 'PaperHouse 2009 | Haoji Wang',
  description:
    'First grade. My mom bought me a diary and said I could write anything I wanted in it.',
};

export default function PaperHouse2009Page() {
  const post = getPost('paperhouse', '2009');

  if (!post) {
    notFound();
  }

  return (
    <ArticleLayout
      title={post.title}
      date={post.date}
      dateDisplay={post.dateDisplay}
      active="work"
      backHref="/work"
      backLabel="work"
    >
      <MarkdownRenderer source={post.content} />
    </ArticleLayout>
  );
}
