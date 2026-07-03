export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    external?: boolean;
};

export type Hero = {
    eyebrow?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type ContentAction = {
    label: string;
    href: string;
    external?: boolean;
    type?: 'primary' | 'secondary';
};

export type CallToAction = {
    title?: string;
    text?: string;
    action?: ContentAction;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    author?: string;
    subtitle?: string;
    description: string;
    location?: string;
    contactEmail?: string;
    keywords?: string[];
    socialHandle?: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    googleAnalyticsId?: string;
};

const siteConfig: SiteConfig = {
    title: 'Rıdvan Topal',
    author: 'Rıdvan Topal',
    subtitle: 'Flutter Developer • Product-minded builder',
    description:
        'Portfolio, projects, and writing from Rıdvan Topal — a Flutter developer building thoughtful mobile and web experiences.',
    location: 'Bilecik, Turkey',
    contactEmail: 'rdvn.tpl@gmail.com',
    keywords: ['Rıdvan Topal', 'Flutter developer', 'mobile developer', 'portfolio', 'Astro blog', 'web projects'],
    socialHandle: '@rdvntpl',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Preview of ridvan.topal.dev portfolio site'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        } 
    ],
    footerNavLinks: [
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Privacy',
            href: '/privacy'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/rdvntpl',
            external: true
        },
        {
            text: 'Linkedin',
            href: 'https://linkedin.com/in/rdvntpl',
            external: true
        },
        {
            text: 'Email',
            href: 'mailto:rdvn.tpl@gmail.com'
        }
    ],
    hero: {
        eyebrow: 'Flutter developer based in Turkey',
        title: 'I build practical products with strong UX and clear technical foundations.',
        text: "I'm **Rıdvan Topal**, a Flutter developer focused on mobile apps, internal tools, and product experiences that feel fast, polished, and easy to trust. Here you'll find selected projects, notes on what I'm learning, and the context behind how I approach shipping software.",
        image: {
            src: '/hero.jpeg',
            alt: 'Rıdvan Topal working at a desk'
        },
        actions: [
            {
                text: 'View Projects',
                href: '/projects'
            },
            {
                text: 'Get in Touch',
                href: '/contact'
            },
            {
                text: 'Read the Blog',
                href: '/blog'
            }
        ]
    },
    postsPerPage: 6,
    projectsPerPage: 6,
    // Optional: Add your Google Analytics 4 (GA4) Measurement ID here
    // Format: 'G-XXXXXXXXXX' (must start with 'G-')
    // googleAnalyticsId: 'G-XXXXXXXXXX',
};

export default siteConfig;
