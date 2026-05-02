// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(), // 'publishedAt' ही रखें क्योंकि एरर इसी नाम को ढूंढ रही है
    category: z.string(),
    image: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};