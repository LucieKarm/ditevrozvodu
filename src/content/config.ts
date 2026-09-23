import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        image: z.string().optional(),
        pubDate: z.string().optional(),
        published: z.boolean().default(false),
        ctaText: z.string().optional(),
    }),
});

const courseLessons = defineCollection({
    schema: z.object({
        title: z.string(),
        order: z.number(),
    }),
});

export const collections = { blog, courseLessons };
