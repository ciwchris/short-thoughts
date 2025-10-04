# Data Model

The data model for this feature is defined by the existing blog post collection in Astro.

The `blog` collection is defined in `src/content/config.ts` and has the following schema:

```typescript
const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});
```
