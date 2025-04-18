import Link from 'next/link';
import { BLOGPOSTS } from '../../lib/blogposts';

// Format date as MMM DD, YYYY
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  });
}

export default function BlogPage() {
  return (
    <div className="py-10 md:py-16">
      <h2 className="text-4xl md:text-5xl text-accent font-serif2 font-bold mb-8 mt-16">
        BLOG
      </h2>
      <p className="font-body text-lg mb-12">
        I write
      </p>
      
      <div className="space-y-8">
        {BLOGPOSTS.map((post) => (
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
                {/* Mobile: MM/DD */}
                <span className="block md:hidden">{new Date(post.date).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" })}</span>
                {/* Desktop: MMM DD, YYYY */}
                <span className="hidden md:block">{formatDate(post.date)}</span>
              </time>
            </div>
            <p className="font-body text-muted max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 ease-in-out">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
} 
