import { defineConfig, fontProviders } from 'astro/config';
import type { AstroIntegration } from 'astro';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { siteConfig } from './src/config/site';
import { buildTokensCss } from './src/config/tokens';

/**
 * Generates src/styles/tokens.css from src/config/site.ts so the TypeScript
 * config stays the single source of truth for every design token.
 */
function designTokens(): AstroIntegration {
  const out = fileURLToPath(new URL('./src/styles/tokens.css', import.meta.url));
  const src = fileURLToPath(new URL('./src/config/site.ts', import.meta.url));
  return {
    name: 'uknowucook:tokens',
    hooks: {
      'astro:config:setup': ({ addWatchFile, logger }) => {
        addWatchFile(src);
        const css = buildTokensCss();
        if (!existsSync(out) || readFileSync(out, 'utf8') !== css) {
          writeFileSync(out, css);
          logger.info('design tokens regenerated from src/config/site.ts');
        }
      },
    },
  };
}

const { locales, defaultLocale } = siteConfig.i18n;

export default defineConfig({
  site: siteConfig.seo.siteUrl,
  trailingSlash: 'never',
  build: { format: 'directory' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: {
    breakpoints: [...siteConfig.images.widths],
  },
  fonts: siteConfig.typography.webFonts.map((f) => ({
    provider: fontProviders.google(),
    name: f.name,
    cssVariable: f.cssVariable,
    weights: [...f.weights] as [string, ...string[]],
    styles: [...f.styles] as ['normal', 'italic'],
    subsets: ['latin', 'latin-ext'],
    fallbacks: [...f.fallbacks],
  })),
  integrations: [
    designTokens(),
    sitemap({
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
      filter: (page) => !/\/404\/?$/.test(page) && page !== `${siteConfig.seo.siteUrl}/`,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
