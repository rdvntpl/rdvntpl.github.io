import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    keywords: z.array(z.string()).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website'),
    structuredData: z.any().optional()
});

const linkSchema = z.object({
    label: z.string(),
    href: z.string().min(1),
    external: z.boolean().optional(),
    type: z.enum(['primary', 'secondary']).default('secondary')
});

const ctaSchema = z.object({
    title: z.string().optional(),
    text: z.string().optional(),
    action: linkSchema.optional()
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        summary: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        technologies: z.array(z.string()).default([]),
        cta: ctaSchema.optional(),
        seo: seoSchema.optional()
    })
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
    schema: z.object({
        title: z.string(),
        summary: z.string().optional(),
        cta: ctaSchema.optional(),
        seo: seoSchema.optional()
    })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        summary: z.string().optional(),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().default(false),
        status: z.enum(['live', 'in-progress', 'archived', 'concept']).optional(),
        technologies: z.array(z.string()).default([]),
        links: z.array(linkSchema).default([]),
        cta: ctaSchema.optional(),
        seo: seoSchema.optional()
    })
});

export const collections = { blog, pages, projects };
