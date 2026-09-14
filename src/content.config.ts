import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title:       z.string(),
    type:        z.enum(['engineering', 'design']),
    featured:    z.boolean().default(false),
    placeholder: z.boolean().default(false),
    summary:     z.string(),
    year:        z.string(),
    role:        z.string().optional(),
    tags:        z.array(z.string()),
    github:      z.string().url().optional(),
    live:        z.string().url().optional(),
    image:       z.string().optional(),
    order:       z.number().default(99),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    url:         z.string().url().optional(),
    date:        z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD format'),
    type:        z.enum(['experiment', 'talk']).default('experiment'),
  }),
});

export const collections = { projects, experiments };
