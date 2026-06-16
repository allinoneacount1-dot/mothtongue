import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mothtongue.vercel.app';

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/world`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bestiary`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/play`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/chronicle`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/summon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
