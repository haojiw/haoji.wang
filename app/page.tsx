import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

// Importing the blog post data
import { BLOGPOSTS, type BlogPost } from '../lib/blogposts';
// Import projects from work page
import { PROJECTS, type Project } from '../lib/projects';

// Format date as MMM DD, YYYY
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  });
}

export default function Home() {
  // Get the 3 most recent blog posts (they're already sorted in the data.ts file)
  const recentPosts = BLOGPOSTS.slice(0, 3);
  // Get the first 3 projects
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <PageTransition>
      <section className="flex flex-col md:flex-row items-end justify-between py-16 border-b border-border">
        <div className="w-full md:w-3/5 flex flex-col justify-end h-full">
          <h1 className="text-6xl md:text-7xl font-body font-normal mb-8 text-accent">
            <span className="block mt-6">Haoji Wang</span>
          </h1>
          <div className="w-fit">
            <p className="text-xl md:text-2xl font-serif tracking-wide mb-10">
              This site is a bit like me: <br />
              Still in progress, but you'll want to check back later.
            </p>
            <div className="flex md:justify-end justify-start mb-8 md:mb-0">
              <Link 
                href="/about" 
                className="bg-accent text-bg py-3 px-6 font-sans text-sm uppercase tracking-wide no-underline hover:bg-accent/85 transition-colors duration-300 hover:translate-y-[-2px] transform"
              >
                Who's this?
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden">
            <Image
              src="/profile.webp"
              alt="Haoji Wang"
              fill
              sizes="(max-width: 768px) 50vw, 320px"
              className="rounded-full object-cover"
              quality={100}
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border py-6">
        <h2 className="text-4xl md:text-5xl text-accent font-serif font-normal mb-8 mt-16">
          <Link href="/blog" className="no-underline hover:no-underline">
            BLOG
          </Link>
        </h2>
        
        <div className="space-y-4 my-8">
          {recentPosts.map((post: BlogPost) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="block hover:bg-bg/60 transition-all duration-200 p-3 -mx-3 rounded-md hover:translate-x-1 transform"
            >
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-body">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        <Link 
          href="/blog" 
          className="inline-block mt-4 text-accent font-sans text-sm uppercase tracking-wide hover:underline hover:translate-x-1 transition-transform duration-200 transform"
        >
          VIEW ALL POSTS →
        </Link>
      </section>

      <section className="py-6">
        <h2 className="text-4xl md:text-5xl text-accent font-serif font-normal mb-8 mt-16">
          <Link href="/work" className="no-underline hover:no-underline">
            WORK
          </Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-6">
          {featuredProjects.map((project: Project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              slug={project.slug}
              github={project.github}
            />
          ))}
        </div>
        
        <Link 
          href="/work" 
          className="inline-block mt-4 text-accent font-sans text-sm uppercase tracking-wide hover:underline hover:translate-x-1 transition-transform duration-200 transform"
        >
          VIEW ALL PROJECTS →
        </Link>
      </section>
    </PageTransition>
  );
} 