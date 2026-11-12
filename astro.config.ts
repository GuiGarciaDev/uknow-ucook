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

/**
 * Public origin used for canonical, hreflang, Open Graph, sitemap and
 * robots.txt URLs. Resolved at build time, first match wins:
 *   1. SITE_URL — set it in Vercel once you have a custom domain.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — the project's production domain
 *      (e.g. uknow-ucook.vercel.app); Vercel sets it on every build,
 *      previews included, so previews never claim to be canonical.
 *   3. VERCEL_URL — this deployment's own URL, as a last resort on Vercel.
 *   4. localhost for local dev and builds.
 * Pages read the result through `import.meta.env.SITE`.
 */
function resolveSiteUrl(): string {
  const env = process.env;
  const host = env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL;
  const raw = env.SITE_URL || (host ? `https://${host}` : 'http://localhost:4321');
  return new URL(raw).origin;
}
const siteUrl = resolveSiteUrl();

export default defineConfig({
  site: siteUrl,
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
      filter: (page) => !/\/404\/?$/.test(page) && page !== `${siteUrl}/`,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
