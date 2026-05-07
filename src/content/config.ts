import { defineCollection, z } from 'astro:content';

// 1. Blog Collection (Local files के लिए, अगर आप MD files यूज़ कर रहे हैं)
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string(),
    image: z.string(),
    author: z.string(),
  }),
});

// 2. Projects Collection (इसे जोड़ना ज़रूरी है क्योंकि आपका कोड इसे ढूंढ रहा है)
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // अगर कोई और फील्ड है तो यहाँ जोड़ें
  }),
});

export const collections = {
  blog: blog,
  projects: projects, // इसे यहाँ एक्सपोर्ट करना ज़रूरी है
};