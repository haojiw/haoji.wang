import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';

// Define the type for metadata in MDX files
type Frontmatter = {
  title: string;
  date: string;
  description: string;
};

// Format date as MMM DD, YYYY
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Component for the blog post layout
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Read the MDX file from the content directory
  const postPath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  
  // Check if the file exists
  if (!fs.existsSync(postPath)) {
    notFound();
  }

  // Read the file content
  const rawContent = fs.readFileSync(postPath, 'utf8');
  const matterResult = matter(rawContent);
  const { content } = matterResult;
  const data = matterResult.data as Frontmatter;
  
  // Custom components for MDX
  const components = {
    h1: (props: any) => (
      <h1 className="text-4xl text-bold md:text-5xl font-serif mt-10 mb-6" {...props} />
    ),
    h2: (props: any) => (
      <h2 className="text-3xl text-bold md:text-4xl font-serif mt-10 mb-6" {...props} />
    ),
    h3: (props: any) => (
      <h3 className="text-2xl md:text-3xl font-serif mt-8 mb-6" {...props} />
    ),
    h4: (props: any) => (
      <h4 className="text-xl md:text-2xl font-serif mt-6 mb-4" {...props} />
    ),
    p: (props: any) => (
      <p className="font-body mb-6 leading-relaxed" {...props} />
    ),
    a: (props: any) => (
      <a className="font-body underline hover:text-accent/70 transition-colors" {...props} />
    ),
    ul: (props: any) => (
      <ul className="list-disc pl-5 mb-6 font-body" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal pl-5 mb-6 font-body" {...props} />
    ),
    li: (props: any) => (
      <li className="mb-2" {...props} />
    ),
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-text pl-4 font-body italic my-6" {...props} />
    ),
    code: (props: any) => (
      <code className="font-mono text-sm bg-[#F0EDE5] px-1 py-0.5 rounded" {...props} />
    ),
    pre: (props: any) => (
      <pre className="font-mono text-sm bg-[#F0EDE5] p-4 rounded-md overflow-auto my-6" {...props} />
    ),
  };

  return (
    <article className="max-w-3xl mx-auto pt-16 pb-24">
      <div className="mb-8 pb-8">
        <time className="block font-sans text-sm uppercase tracking-wide text-muted mb-4">
          {formatDate(data.date)}
        </time>
        <h1 className="text-4xl md:text-5xl font-serif text-accent mb-6">
          {data.title}
        </h1>
      </div>
      <div className="prose prose-lg">
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
} 