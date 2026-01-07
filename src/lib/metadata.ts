import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function buildMetadata({
  title,
  description,
  path
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = path ? new URL(path, siteConfig.baseUrl) : siteConfig.baseUrl;
  return {
    title: { absolute: title },
    description: description || siteConfig.description,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: url.toString()
    },
    openGraph: {
      title,
      description: description || siteConfig.description,
      url: url.toString(),
      siteName: siteConfig.name,
      images: ['/og-default.svg'],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description || siteConfig.description,
      images: ['/og-default.svg']
    }
  };
}
