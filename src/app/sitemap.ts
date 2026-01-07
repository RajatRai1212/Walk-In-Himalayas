import { siteConfig } from '@/config/site';
import { treks } from '@/data/treks';
import { regions } from '@/data/regions';
import { getBlogSlugs } from '@/lib/mdx';

export default function sitemap() {
  const base = siteConfig.baseUrl;
  const staticRoutes = [
    '',
    '/about',
    '/treks',
    '/destinations',
    '/camping',
    '/women-only',
    '/family',
    '/tours',
    '/gallery',
    '/reviews',
    '/blog',
    '/contact',
    '/faqs',
    '/privacy',
    '/terms',
    '/cancellation-policy'
  ];

  const trekRoutes = treks.map((trek) => `/treks/${trek.slug}`);
  const regionRoutes = regions.map((region) => `/destinations/${region.slug}`);
  const blogRoutes = getBlogSlugs().map((slug) => `/blog/${slug}`);

  const allRoutes = [...staticRoutes, ...trekRoutes, ...regionRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
