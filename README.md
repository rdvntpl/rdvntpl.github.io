# Rıdvan Topal Portfolio

https://rdvntpl.github.io/

An Astro 5 + Tailwind portfolio site for showcasing projects, writing, and professional context.

## Features

- Shared SEO and social metadata through a central layout and head component
- Collection-driven pages for blog posts, projects, and static content pages
- Homepage sections for featured work and recent writing
- Tag discovery pages for blog topics
- Optional Google Analytics 4 support

## Getting started

Install dependencies:

```bash
npm ci
```

Start the local dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Core configuration

Main site settings live in `/home/runner/work/rdvntpl.github.io/rdvntpl.github.io/src/data/site-config.ts`.
Use this file to update:

- site title and description
- hero copy and navigation
- social links and contact email
- page counts for blog and project archives
- optional Google Analytics measurement ID

## Content model

Content collections are defined in `/home/runner/work/rdvntpl.github.io/rdvntpl.github.io/src/content.config.ts`.

### Blog entries

Files live in `/home/runner/work/rdvntpl.github.io/rdvntpl.github.io/src/content/blog/`.
Supported frontmatter fields include:

- `title`
- `excerpt`
- `summary`
- `publishDate`
- `updatedDate`
- `isFeatured`
- `tags`
- `technologies`
- `cta`
- `seo`

### Project entries

Files live in `/home/runner/work/rdvntpl.github.io/rdvntpl.github.io/src/content/projects/`.
Supported frontmatter fields include:

- `title`
- `description`
- `summary`
- `publishDate`
- `isFeatured`
- `status`
- `technologies`
- `links`
- `cta`
- `seo`

### Static pages

Files live in `/home/runner/work/rdvntpl.github.io/rdvntpl.github.io/src/content/pages/`.
Supported frontmatter fields include:

- `title`
- `summary`
- `cta`
- `seo`

## Analytics

To enable Google Analytics 4 tracking, add your measurement ID in `/home/runner/work/rdvntpl.github.io/rdvntpl.github.io/src/data/site-config.ts`:

```ts
googleAnalyticsId: 'G-XXXXXXXXXX'
```

The value is validated before being injected into the page.
