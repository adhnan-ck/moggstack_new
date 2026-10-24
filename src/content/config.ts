import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Moggstack Team'),
    category: z.enum([
      'Web Development',
      'Mobile Apps',
      'AI & Automation',
      'SEO & Marketing',
      'Business',
      'Case Studies',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string(),
    description: z.string(),
    summary: z.string(),
    deliverables: z.array(z.string()),
    techStack: z.array(z.string()),
    duration: z.string(),
    year: z.number(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    results: z
      .array(
        z.object({
          metric: z.string(),
          value: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  work: workCollection,
};
