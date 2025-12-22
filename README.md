# Hi! I'm Rıdvan Topal

https://rdvntpl.github.io/

## Features

This portfolio website is built with Astro and includes:

- 📊 **Web Analytics Support**: Google Analytics 4 (GA4) integration for tracking website visitors and understanding user behavior
- 🎨 Modern, responsive design
- 📝 Blog and project showcases
- 🌙 Dark mode support

## Configuration

### Setting up Google Analytics

To enable web analytics tracking:

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `src/data/site-config.ts`
4. Uncomment and add your Measurement ID:
   ```typescript
   googleAnalyticsId: 'G-XXXXXXXXXX',
   ```

Once configured, the analytics tracking code will be automatically included on all pages.
