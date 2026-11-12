/**
 * Turns `siteConfig` into CSS custom properties.
 *
 * Run automatically by the `uknowucook:tokens` integration (astro.config.ts),
 * which writes the result to `src/styles/tokens.css`. Never edit that CSS
 * file by hand — edit `src/config/site.ts` instead.
 */
import { siteConfig } from './site';

/** Both themes must define the same semantic keys (checked by the compiler). */
type ColorSet = Record<keyof (typeof siteConfig.colors)['light'], string>;
type ShadowSet = Record<keyof (typeof siteConfig.layout.shadows)['light'], string>;

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const block = (entries: Record<string, string | number>, prefix: string, indent = '  ') =>
  Object.entries(entries)
    .map(([k, v]) => `${indent}--${prefix}${kebab(k)}: ${v};`)
    .join('\n');

const colorVars = (c: ColorSet, s: ShadowSet, indent = '  ') =>
  [
    `${indent}--color-background: ${c.background};`,
    `${indent}--color-surface: ${c.surface};`,
    `${indent}--color-surface-muted: ${c.surfaceMuted};`,
    `${indent}--color-surface-sunken: ${c.surfaceSunken};`,
    `${indent}--color-text-primary: ${c.textPrimary};`,
    `${indent}--color-text-secondary: ${c.textSecondary};`,
    `${indent}--color-text-inverse: ${c.textInverse};`,
    `${indent}--color-accent: ${c.accent};`,
    `${indent}--color-accent-strong: ${c.accentStrong};`,
    `${indent}--color-accent-contrast: ${c.accentContrast};`,
    `${indent}--color-border: ${c.border};`,
    `${indent}--color-border-strong: ${c.borderStrong};`,
    `${indent}--color-focus: ${c.focus};`,
    `${indent}--color-tip: ${c.tip};`,
    `${indent}--color-tip-surface: ${c.tipSurface};`,
    `${indent}--color-warning: ${c.warning};`,
    `${indent}--color-warning-surface: ${c.warningSurface};`,
    `${indent}--color-info: ${c.info};`,
    `${indent}--color-info-surface: ${c.infoSurface};`,
    `${indent}--color-overlay: ${c.overlay};`,
    `${indent}--color-on-media: ${c.onMedia};`,
    `${indent}--color-media-scrim: ${c.mediaScrim};`,
    block(s, 'shadow-', indent),
  ].join('\n');

export function buildTokensCss(): string {
  const { typography: t, layout: l, components: c, colors, breakpoints, images, animation } = siteConfig;

  const root = [
    '  color-scheme: light;',
    colorVars(colors.light, l.shadows.light),
    '',
    '  /* Typography */',
    block(t.families, 'font-'),
    block(t.weights, 'weight-'),
    block(t.sizes, 'text-'),
    block(t.fluid, 'text-fluid-'),
    block(t.lineHeights, 'leading-'),
    block(t.letterSpacing, 'tracking-'),
    '',
    '  /* Layout */',
    `  --layout-max-width: ${l.maxWidth};`,
    `  --layout-content-width: ${l.contentWidth};`,
    `  --layout-article-width: ${l.articleWidth};`,
    `  --layout-sidebar-width: ${l.sidebarWidth};`,
    `  --layout-toc-width: ${l.tocWidth};`,
    `  --layout-header-height: ${l.headerHeight};`,
    `  --layout-gutter: ${l.gutter};`,
    block(l.gridGap, 'gap-'),
    block(l.spacing, 'space-'),
    block(l.radius, 'radius-'),
    '',
    '  /* Components */',
    `  --radius-card: ${c.card.radius};`,
    `  --radius-card-image: ${c.card.imageRadius};`,
    `  --radius-button: ${c.button.radius};`,
    `  --radius-input: ${c.input.radius};`,
    `  --radius-chip: ${c.chip.radius};`,
    `  --button-height-sm: ${c.button.heightSm};`,
    `  --button-height-md: ${c.button.heightMd};`,
    `  --button-height-lg: ${c.button.heightLg};`,
    `  --input-height: ${c.input.height};`,
    `  --focus-ring-width: ${c.focusRing.width};`,
    `  --focus-ring-offset: ${c.focusRing.offset};`,
    block(c.transition, 'transition-'),
    '',
    '  /* Images & motion */',
    block(images.aspectRatios, 'aspect-'),
    `  --motion-hover-scale: ${animation.enabled ? animation.cardHoverScale : '1'};`,
    `  --motion-reveal-distance: ${animation.enabled ? animation.revealDistance : '0px'};`,
  ].join('\n');

  const dark = colorVars(colors.dark, l.shadows.dark, '    ');
  const darkExplicit = colorVars(colors.dark, l.shadows.dark);

  // Tailwind v4 `@theme`: breakpoints must be literal values; everything else
  // references the runtime tokens above (`inline` keeps the var() reference).
  // Tailwind v4 `@theme`. Breakpoints must be literal values. Utility names
  // below deliberately differ from the runtime token names so no variable
  // ever references itself. Tailwind's own defaults that share a name with a
  // runtime token (--text-sm, --radius-md, --shadow-sm, --font-mono …) are
  // simply overridden by the unlayered :root above.
  const theme = `@theme {
${block(breakpoints, 'breakpoint-')}
}

@theme inline {
  --color-*: initial;
  --color-canvas: var(--color-background);
  --color-card: var(--color-surface);
  --color-card-muted: var(--color-surface-muted);
  --color-sunken: var(--color-surface-sunken);
  --color-ink: var(--color-text-primary);
  --color-ink-muted: var(--color-text-secondary);
  --color-ink-inverse: var(--color-text-inverse);
  --color-gold: var(--color-accent);
  --color-gold-strong: var(--color-accent-strong);
  --color-gold-contrast: var(--color-accent-contrast);
  --color-line: var(--color-border);
  --color-line-strong: var(--color-border-strong);
  --color-herb: var(--color-tip);
  --color-herb-soft: var(--color-tip-surface);
  --color-chili: var(--color-warning);
  --color-chili-soft: var(--color-warning-surface);
  --color-sky: var(--color-info);
  --color-sky-soft: var(--color-info-surface);
  --color-scrim: var(--color-overlay);
  --color-on-media: var(--color-on-media);
  --color-transparent: transparent;
  --color-current: currentColor;

  --font-serif: var(--font-display);
  --font-sans: var(--font-body);
  --font-head: var(--font-heading);

  --text-hero: var(--text-fluid-hero);
  --text-page: var(--text-fluid-page);
  --text-section: var(--text-fluid-section);
  --text-recipe: var(--text-fluid-recipe);
  --text-lead: var(--text-fluid-lead);

  --radius-tile: var(--radius-card);
  --radius-tile-image: var(--radius-card-image);
  --radius-btn: var(--radius-button);
  --radius-field: var(--radius-input);
  --radius-pill: var(--radius-chip);

  --shadow-tile: var(--shadow-card);
  --shadow-float: var(--shadow-lifted);

  --container-site: var(--layout-max-width);
  --container-content: var(--layout-content-width);
  --container-article: var(--layout-article-width);

  --aspect-portrait: var(--aspect-hero);
  --aspect-photo: var(--aspect-card);
  --aspect-cinema: var(--aspect-wide);
}`;

  return `/*
 * AUTO-GENERATED from src/config/site.ts — do not edit by hand.
 * Regenerated on every \`astro dev\` / \`astro build\`.
 */

:root {
${root}
}

/* Dark theme: follows the OS unless the visitor picked a theme explicitly. */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    color-scheme: dark;
${dark}
  }
}

:root[data-theme='dark'] {
  color-scheme: dark;
${darkExplicit}
}

${theme}
`;
}
