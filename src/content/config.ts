import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      syndication: z.array(z.object({
        name: z.string(),
        url: z.string().url()
      })).optional()
    })
});

export const collections = { blog };
