import type {MetadataRoute} from 'next';
import {products,cases} from '@/lib/data';
import {siteUrl} from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap():MetadataRoute.Sitemap {
  const fixed = ['', '/porcelain-tile', '/case-studies', '/architects-builders', '/education', '/education/24x24-vs-24x48-porcelain-tile', '/education/48x48-porcelain-tile-layout', '/education/choose-marble-look-porcelain-tile', '/education/grout-color-white-marble-look-tile', '/education/how-much-porcelain-tile-to-order', '/education/pei-rating-commercial-porcelain-tile', '/education/polished-vs-matte-porcelain-tile', '/education/porcelain-tile-florida-condos', '/education/porcelain-tile-pallet-delivery', '/education/what-is-rectified-porcelain-tile', '/delivery', '/about', '/contact', '/request-quote'];
  const publishedCases = cases;

  return [
    ...fixed.map(u => ({url: siteUrl + u + '/', changeFrequency: 'weekly' as const, priority: u === '' ? 1 : 0.7})),
    ...products.map(p => ({url: `${siteUrl}/porcelain-tile/${p.slug}/`, changeFrequency: 'weekly' as const, priority: 0.9})),
    ...publishedCases.map(c => ({url: `${siteUrl}/case-studies/${c.slug}/`, changeFrequency: 'monthly' as const, priority: 0.6})),
  ];
}
