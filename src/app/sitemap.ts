import { MetadataRoute } from 'next'
import { url } from '@/lib/seo'

export const dynamic = 'force-static'

/**
 * Real routes only. The previous version listed `#anchor` URLs, which search
 * engines fold back into the page they belong to; they never index separately.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: url('/'), lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: url('/about'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: url('/research'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/research/x-algorithm'), lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: url('/blog'), lastModified, changeFrequency: 'weekly', priority: 0.7 },
  ]
}
