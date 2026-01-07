import Link from 'next/link';
import { Section } from '@/components/Section';
import { buildMetadata } from '@/lib/metadata';
import { getAllPosts } from '@/lib/mdx';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Trekking Guides & Blog',
  description: 'Local trekking guides, safety tips, and itineraries across Himachal.',
  path: '/blog'
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Section title="Blog & Trekking Guides" subtitle="Local insights for Chamba, Dalhousie, Dharamshala, and Manali.">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} includeSchema />
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-moss">{post.region || 'Himachal'}</p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{post.description}</p>
              <p className="mt-4 text-xs text-slate-500">
                {post.date} · {post.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
