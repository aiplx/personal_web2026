import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    summary: z.string(),
    summaryEn: z.string(),
    status: z.enum(["planned", "building", "ready"]),
    priority: z.number(),
    date: z.coerce.date(),
    track: z.string(),
    tools: z.array(z.string()),
    targetRoles: z.array(z.string()),
    cities: z.array(z.string()),
    outcomes: z.array(z.string()),
    featured: z.boolean().default(false),
    public: z.boolean().default(true),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    summary: z.string(),
    summaryEn: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tools: z.array(z.string()),
    tags: z.array(z.string()),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    resultEn: z.string().optional(),
    featured: z.boolean().default(false),
    public: z.boolean().default(true),
  }),
});

export const collections = { projects, notes };
