import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { getBlogSlugs, getPostBySlug, getPostContent } from '@/lib/mdx';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Section } from '@/components/Section';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx';

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const { content } = getPostContent(params.slug);

  return (
    <main>
      <Section title={post.title} subtitle={post.description}>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: post.title, href: `/blog/${post.slug}` }
          ]}
          includeSchema
        />
        <p className="text-xs text-slate-500">{post.date} · {post.readingTime}</p>
        <article className="prose-himalaya mt-8">
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </Section>
    </main>
  );
}
