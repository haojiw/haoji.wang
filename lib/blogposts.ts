export type BlogPost = {
  slug: string;
  title: string;
  date: Date;
  description: string;
};

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Load blog posts from the content/blog directory
export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      // Parse the date string to a Date object
      const dateStr = data.date as string;
      const date = new Date(dateStr);
      
      return {
        slug,
        title: data.title as string,
        date,
        description: data.description as string,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort by date, newest first
  
  return posts;
}

// Get all blog posts
export const BLOGPOSTS: BlogPost[] = getBlogPosts(); 