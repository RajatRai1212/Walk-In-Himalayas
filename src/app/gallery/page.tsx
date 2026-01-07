import { Section } from '@/components/Section';
import { GalleryGrid } from '@/components/GalleryGrid';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = buildMetadata({
  title: 'Gallery',
  description: 'Himalayan trekking and camping moments from Chamba, Dalhousie, Dharamshala, and Manali.',
  path: '/gallery'
});

export default function GalleryPage() {
  return (
    <main>
      <Section title="Gallery" subtitle="Placeholder imagery ready for real expedition photos.">
        <Breadcrumbs
          items={[{ name: 'Home', href: '/' }, { name: 'Gallery', href: '/gallery' }]}
          includeSchema
        />
        <GalleryGrid />
      </Section>
    </main>
  );
}
