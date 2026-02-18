import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        image: z.string().optional(),
        pubDate: z.string().optional(),
        published: z.boolean().default(false),
    }),
});

export const collections = { blog };
