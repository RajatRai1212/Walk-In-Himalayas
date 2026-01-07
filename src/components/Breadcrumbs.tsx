import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/config/site';

export function Breadcrumbs({
  items,
  includeSchema = false
}: {
  items: { name: string; href: string }[];
  includeSchema?: boolean;
}) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: `${siteConfig.baseUrl}${item.href}`
  }));
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
        <ol className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link href={item.href} className="hover:text-ink">
                {item.name}
              </Link>
              {index < items.length - 1 ? <span>/</span> : null}
            </li>
          ))}
        </ol>
      </nav>
      {includeSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(schemaItems)) }}
        />
      ) : null}
    </>
  );
}
