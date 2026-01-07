import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  region?: string;
  tags?: string[];
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getBlogSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getAllPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => Boolean(post));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(raw);
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    readingTime: data.readingTime || '5 min read',
    region: data.region,
    tags: data.tags || []
  };
}

export function getPostContent(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return { content: '', data: {} };
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(raw);
  return { content, data };
}
