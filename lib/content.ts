import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ContentSection = 'writing' | 'wen' | 'paperhouse' | 'paperhouse2016';

export type PostLanguage = 'en' | 'zh';

export type PostMeta = {
  slug: string;
  section: ContentSection;
  title: string;
  date: string;
  dateDisplay: string;
  description: string;
  readingMinutes: number;
  language: PostLanguage;
  pair: string;
  order: number;
  unlisted: boolean;
};

export type Post = PostMeta & {
  content: string;
};

const contentDirs: Record<ContentSection, string> = {
  writing: 'content/writing',
  wen: 'content/wen',
  paperhouse: 'content/paperhouse',
  paperhouse2016: 'content/paperhouse/2016',
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
    dateDisplay: String(data.dateDisplay ?? ''),
    description: String(data.description ?? ''),
    readingMinutes: Number(data.readingMinutes ?? 0),
    language: data.language === 'zh' ? 'zh' : 'en',
    pair: String(data.pair ?? ''),
    order: Number(data.order ?? 0),
    unlisted: data.unlisted === true,
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
  const posts = getPostSlugs(section)
    .map((slug) => getPost(section, slug))
    .filter((post): post is Post => post !== null && !post.unlisted);

  const hasOrder = posts.some((post) => post.order !== 0);

  posts.sort((a, b) =>
    hasOrder
      ? a.order - b.order
      : new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return posts.map(({ content, ...meta }) => meta);
}
