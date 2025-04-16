import Link from 'next/link';
import { DUMMY_POSTS } from './data';

export default function BlogPage() {
  return (
    <div className="py-16">
      <h2 className="text-4xl md:text-5xl text-accent font-serif2 font-bold mb-8 mt-16">
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
              <time className="font-sans uppercase tracking-wide text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {post.date}
              </time>
            </div>
            <p className="font-serif text-lg text-muted max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 ease-in-out">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
} 