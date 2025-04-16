import Link from 'next/link';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

// This is a placeholder. In a real implementation, you'd fetch actual blog posts.
export const DUMMY_POSTS: BlogPost[] = [
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
      <h2 className="text-4xl md:text-5xl font-serif2 font-bold mb-8 mt-16">
        BLOG
      </h2>
      <p className="font-body text-lg mb-12">
        That's what I'm talking about!
      </p>
      
      <div className="space-y-8">
        {DUMMY_POSTS.map((post) => (
          <article 
            key={post.slug} 
            className="group relative border-b border-border pb-4 transition-all duration-300"
          >
            <div className="flex justify-between items-baseline">
              <h4 className="text-xl md:text-2xl font-body py-2">
                <Link href={`/blog/${post.slug}`} className="hover:no-underline block">
                  {post.title}
                </Link>
              </h4>
              <time className="font-sans text-sm uppercase tracking-wide text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {post.date}
              </time>
            </div>
            <p className="font-serif text-base text-muted max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 ease-in-out">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
} 