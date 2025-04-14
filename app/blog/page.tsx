import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// This is a placeholder. In a real implementation, you'd fetch actual blog posts.
const DUMMY_POSTS: BlogPost[] = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    date: 'JAN 1, 2023',
    description: 'An introduction to my blog and what to expect.',
  },
  {
    slug: 'second-post',
    title: 'Reflections on Web Development',
    date: 'FEB 15, 2023',
    description: 'Thoughts on modern web development practices and tools.',
  },
  {
    slug: 'third-post',
    title: 'Design Systems and Their Importance',
    date: 'MAR 30, 2023',
    description: 'Why every project should use a design system and how to create one.',
  },
];

export default function BlogPage() {
  return (
    <div className="py-16">
      <SectionTitle>BLOG</SectionTitle>
      <p className="font-body text-lg mb-12">
        That's what I'm talking about!
      </p>
      
      <div className="space-y-12">
        {DUMMY_POSTS.map((post) => (
          <article key={post.slug} className="border-b border-border pb-12">
            <time className="block font-sans text-sm uppercase tracking-wide mb-2">
              {post.date}
            </time>
            <h2 className="text-3xl md:text-4xl font-serif mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="font-serif text-lg">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
} 