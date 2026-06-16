import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ContentSection = 'writing' | 'wen';

export type PostMeta = {
  slug: string;
  section: ContentSection;
  title: string;
  date: string;
  description: string;
};

export type Post = PostMeta & {
  content: string;
};

const contentDirs: Record<ContentSection, string> = {
  writing: 'content/writing',
  wen: 'content/wen',
};

function getSectionDir(section: ContentSection) {
  return path.join(process.cwd(), contentDirs[section]);
}

function normalizeDate(date: unknown) {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }

  return String(date ?? '');
}

function parsePostFile(section: ContentSection, filePath: string, slug: string): Post {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);

  return {
    slug,
    section,
    title: String(data.title ?? slug),
    date: normalizeDate(data.date),
    description: String(data.description ?? ''),
    content,
  };
}

export function getPostSlugs(section: ContentSection): string[] {
  const dir = getSectionDir(section);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPost(section: ContentSection, slug: string): Post | null {
  const postPath = path.join(getSectionDir(section), `${slug}.mdx`);

  if (!fs.existsSync(postPath)) {
    return null;
  }

  return parsePostFile(section, postPath, slug);
}

export function getPosts(section: ContentSection): PostMeta[] {
  return getPostSlugs(section)
    .map((slug) => getPost(section, slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content, ...meta }) => meta);
}
