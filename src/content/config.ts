import { defineCollection, z } from 'astro:content';

const boxSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string().url(),
  imgLink: z.string().url(),
  altDesc: z.string(),
  date: z.date().optional(),
});

export const collections = {
  developer: defineCollection({
    type: 'content',
    schema: boxSchema,
  }),
  musician: defineCollection({
    type: 'content',
    schema: boxSchema,
  }),
  content: defineCollection({
    type: 'content',
    schema: boxSchema,
  }),
  blog: defineCollection({
    type: 'content',
    schema: boxSchema,
  }),
};