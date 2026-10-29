import type {MetadataRoute} from 'next';
import {products,cases} from '@/lib/data';
import {siteUrl} from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap():MetadataRoute.Sitemap {
  const fixed = ['', '/porcelain-tile', '/case-studies', '/architects-builders', '/education', '/delivery', '/about', '/contact', '/request-quote'];
  const publishedCases = cases;
  const keywordCollections = ['24x48','24x24','polished','matte','marble-look'];

  return [
    ...fixed.map(u => ({url: siteUrl + u + '/', changeFrequency: 'weekly' as const, priority: u === '' ? 1 : 0.7})),
    ...keywordCollections.map(slug => ({url: `${siteUrl}/porcelain-tile/shop/${slug}/`, changeFrequency: 'weekly' as const, priority: 0.8})),
    ...products.map(p => ({url: `${siteUrl}/porcelain-tile/${p.slug}/`, changeFrequency: 'weekly' as const, priority: 0.9})),
    ...publishedCases.map(c => ({url: `${siteUrl}/case-studies/${c.slug}/`, changeFrequency: 'monthly' as const, priority: 0.6})),
  ];
}
