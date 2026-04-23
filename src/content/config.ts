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

export const collections = { blog };
