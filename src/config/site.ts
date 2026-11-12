/**
 * UKnowUCook — global configuration.
 *
 * This file is the single source of truth for the site's identity and
 * visual system. `src/styles/tokens.css` is GENERATED from this file
 * (see `src/config/tokens.ts` and the `uknowucook:tokens` integration in
 * `astro.config.ts`), and Tailwind consumes those tokens through `@theme`.
 *
 * Change a value here → tokens.css is rewritten on the next dev/build run →
 * every component picks it up. Components never hard-code colors, fonts,
 * radii or shadows.
 */

export const siteConfig = {
  /* ------------------------------------------------------------------ */
  /* Brand                                                               */
  /* ------------------------------------------------------------------ */
  brand: {
    name: 'UKnowUCook',
    shortName: 'UKUC',
    tagline: {
      'en-US': 'Good food. Bad puns. Great recipes.',
      'pt-BR': 'Comida boa. Trocadilhos ruins. Receitas incríveis.',
    },
    altTagline: {
      'en-US': 'You know you want to cook.',
      'pt-BR': 'Você sabe que quer cozinhar.',
    },
    description: {
      'en-US': 'Recipes worth getting your hands dirty for — tested, translated and served with a side of terrible puns.',
      'pt-BR': 'Receitas que valem a sujeira na cozinha — testadas, traduzidas e servidas com uma porção de trocadilhos duvidosos.',
    },
    logo: {
      /** The wordmark is split so the middle "U" can be styled as an accent. */
      wordmark: ['UKnow', 'U', 'Cook'] as const,
      mark: '/favicon.svg',
      width: 32,
      height: 32,
    },
    foundedYear: 2026,
    /** Mock profiles: the brand has no real accounts, so these are icons only (no links). */
    social: [
      { id: 'instagram', label: 'Instagram' },
      { id: 'tiktok', label: 'TikTok' },
      { id: 'youtube', label: 'YouTube' },
      { id: 'pinterest', label: 'Pinterest' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Internationalisation (see src/i18n for dictionaries & helpers)      */
  /* ------------------------------------------------------------------ */
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'pt-BR'],
    storageKey: 'uknowucook:locale',
  },

  /* ------------------------------------------------------------------ */
  /* Typography                                                          */
  /* ------------------------------------------------------------------ */
  typography: {
    /**
     * Web fonts are self-hosted at build time through Astro's Fonts API.
     * `cssVariable` is what Astro exposes; the semantic font tokens below
     * point at those variables.
     */
    webFonts: [
      {
        name: 'Playfair Display',
        cssVariable: '--font-source-playfair',
        weights: ['400 900'],
        styles: ['normal', 'italic'],
        fallbacks: ['Georgia', 'serif'],
      },
      {
        name: 'DM Sans',
        cssVariable: '--font-source-dm-sans',
        weights: ['300 800'],
        styles: ['normal', 'italic'],
        fallbacks: ['system-ui', 'sans-serif'],
      },
    ],
    families: {
      display: 'var(--font-source-playfair), Georgia, serif',
      heading: 'var(--font-source-dm-sans), system-ui, sans-serif',
      body: 'var(--font-source-dm-sans), system-ui, sans-serif',
      mono: "ui-monospace, 'SFMono-Regular', 'Cascadia Code', Menlo, Consolas, monospace",
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    /** Static scale — used for UI text. */
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    /** Fluid scale — used for editorial headings. */
    fluid: {
      hero: 'clamp(2.75rem, 1.6rem + 5.2vw, 6.25rem)',
      page: 'clamp(2.25rem, 1.6rem + 3vw, 4.25rem)',
      section: 'clamp(1.75rem, 1.4rem + 1.6vw, 2.75rem)',
      recipe: 'clamp(2.25rem, 1.5rem + 3.4vw, 4.5rem)',
      lead: 'clamp(1.125rem, 1.05rem + 0.35vw, 1.375rem)',
    },
    lineHeights: {
      tight: '1.05',
      snug: '1.25',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tighter: '-0.03em',
      tight: '-0.015em',
      normal: '0',
      wide: '0.04em',
      widest: '0.16em',
    },
  },

  /* ------------------------------------------------------------------ */
  /* Colour — semantic tokens for both themes                            */
  /* ------------------------------------------------------------------ */
  colors: {
    light: {
      background: '#FFFFF0', // Antique Ivory
      surface: '#FFFFFF',
      surfaceMuted: '#F5E6BF', // Soft Gold
      surfaceSunken: '#FAF5E4',
      textPrimary: '#342B1F', // Warm Brown
      textSecondary: '#756B5B', // Muted Brown
      textInverse: '#FFFFF0',
      accent: '#D4AF37', // Polished Gold — decorative / fills only
      accentStrong: '#856C2B', // Burnished Gold — accessible accent text
      accentContrast: '#342B1F', // text on top of `accent`
      border: '#E8DDC0',
      borderStrong: '#CDBE95',
      focus: '#856C2B',
      tip: '#3F6B4A',
      tipSurface: '#EEF3E6',
      warning: '#9A3B26',
      warningSurface: '#F8E7DE',
      info: '#36557A',
      infoSurface: '#E8EEF4',
      overlay: 'rgb(52 43 31 / 0.55)',
      onMedia: '#FFFDF5',
      mediaScrim: 'rgb(24 19 14 / 0.88)',
    },
    dark: {
      background: '#1F1B16', // Deep Espresso
      surface: '#2B261F', // Warm Charcoal
      surfaceMuted: '#352E24',
      surfaceSunken: '#181511',
      textPrimary: '#F5EBDD', // Warm Ivory
      textSecondary: '#BEB3A0', // Muted Cream
      textInverse: '#1F1B16',
      accent: '#B99A4B', // Muted Gold
      accentStrong: '#D2B565',
      accentContrast: '#1F1B16',
      border: '#3A3228',
      borderStrong: '#5A4D3A',
      focus: '#D2B565',
      tip: '#9CC4A2',
      tipSurface: '#24302A',
      warning: '#E89B84',
      warningSurface: '#3A2520',
      info: '#9DB8DA',
      infoSurface: '#232B36',
      overlay: 'rgb(0 0 0 / 0.6)',
      onMedia: '#FFFDF5',
      mediaScrim: 'rgb(12 10 8 / 0.9)',
    },
  },

  /* ------------------------------------------------------------------ */
  /* Layout                                                              */
  /* ------------------------------------------------------------------ */
  layout: {
    maxWidth: '1440px',
    contentWidth: '1240px',
    articleWidth: '780px',
    sidebarWidth: '280px',
    tocWidth: '220px',
    headerHeight: '72px',
    gutter: 'clamp(1rem, 0.5rem + 2.5vw, 2.5rem)',
    gridGap: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2.5rem',
    },
    spacing: {
      '3xs': '0.25rem',
      '2xs': '0.5rem',
      xs: '0.75rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4.5rem',
      '3xl': 'clamp(4.5rem, 3rem + 6vw, 8rem)',
    },
    radius: {
      sm: '0.375rem',
      md: '0.75rem',
      lg: '1.25rem',
      xl: '2rem',
      pill: '999px',
    },
    shadows: {
      light: {
        sm: '0 1px 2px rgb(52 43 31 / 0.06)',
        card: '0 1px 2px rgb(52 43 31 / 0.05), 0 12px 32px -16px rgb(52 43 31 / 0.22)',
        lifted: '0 2px 4px rgb(52 43 31 / 0.06), 0 24px 48px -20px rgb(52 43 31 / 0.35)',
      },
      dark: {
        sm: '0 1px 2px rgb(0 0 0 / 0.4)',
        card: '0 1px 2px rgb(0 0 0 / 0.35), 0 12px 32px -16px rgb(0 0 0 / 0.7)',
        lifted: '0 2px 4px rgb(0 0 0 / 0.4), 0 24px 48px -20px rgb(0 0 0 / 0.85)',
      },
    },
  },

  /** Responsive breakpoints — emitted into Tailwind's `@theme` too. */
  breakpoints: {
    sm: '40rem', // 640px
    md: '48rem', // 768px
    lg: '64rem', // 1024px
    xl: '80rem', // 1280px
    '2xl': '96rem', // 1536px
  },

  /* ------------------------------------------------------------------ */
  /* Component tokens                                                    */
  /* ------------------------------------------------------------------ */
  components: {
    card: { radius: '1.25rem', imageRadius: '1rem' },
    button: { radius: '999px', heightSm: '2.25rem', heightMd: '2.75rem', heightLg: '3.25rem' },
    input: { radius: '0.75rem', height: '2.75rem' },
    chip: { radius: '999px' },
    focusRing: { width: '3px', offset: '3px' },
    transition: {
      fast: '150ms cubic-bezier(0.2, 0, 0, 1)',
      base: '250ms cubic-bezier(0.2, 0, 0, 1)',
      slow: '600ms cubic-bezier(0.2, 0, 0, 1)',
    },
  },

  /* ------------------------------------------------------------------ */
  /* Images                                                              */
  /* ------------------------------------------------------------------ */
  images: {
    aspectRatios: {
      hero: '4 / 5',
      card: '4 / 3',
      wide: '16 / 9',
      square: '1 / 1',
      og: '1200 / 630',
    },
    /** Widths generated for responsive `srcset`s. */
    widths: [400, 640, 960, 1280, 1600],
    quality: 72,
    og: { width: 1200, height: 630 },
  },

  /* ------------------------------------------------------------------ */
  /* Recipes                                                             */
  /* ------------------------------------------------------------------ */
  recipes: {
    initialCount: 30,
    defaultPageSize: 6,
    featuredSlugs: ['spaghetti-carbonara', 'pao-de-queijo', 'chocolate-lava-cake'],
    card: {
      descriptionLines: 2,
      showRating: true,
      showCategory: true,
    },
    servings: { min: 1, max: 24 },
    wordsPerMinute: 220,
    storageKeys: {
      saved: 'uknowucook:saved',
      checklist: 'uknowucook:checklist:',
    },
  },

  /* ------------------------------------------------------------------ */
  /* Motion                                                              */
  /* ------------------------------------------------------------------ */
  animation: {
    /** Global kill-switch; `prefers-reduced-motion` is always honoured too. */
    enabled: true,
    cardHoverScale: '1.04',
    revealDistance: '12px',
  },

  /* ------------------------------------------------------------------ */
  /* Theme                                                               */
  /* ------------------------------------------------------------------ */
  theme: {
    storageKey: 'uknowucook:theme',
    default: 'system' as 'light' | 'dark' | 'system',
  },

  /* ------------------------------------------------------------------ */
  /* SEO                                                                 */
  /* ------------------------------------------------------------------ */
  seo: {
    titleTemplate: '%s · UKnowUCook',
    twitterHandle: '@uknowucook',
    themeColor: { light: '#FFFFF0', dark: '#1F1B16' },
    robots: 'index, follow, max-image-preview:large',
  },
} as const;

export type SiteConfig = typeof siteConfig;
