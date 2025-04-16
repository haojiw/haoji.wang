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