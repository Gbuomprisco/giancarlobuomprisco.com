import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().default(''),
    collection: z.string(),
    live: z.boolean().default(true),
    visibleInListings: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    coverImage: z.string().optional(),
    ogImage: z.union([z.string(), z.object({ url: z.string() })]).optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = { articles };
