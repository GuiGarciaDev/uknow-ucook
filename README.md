# UKnowUCook

> Good food. Bad puns. Great recipes.

UKnowUCook is a bilingual (English / Brazilian Portuguese) recipe website built as a fully **static site** with Astro, TypeScript, Tailwind CSS v4 and a little vanilla JavaScript. There is no backend, database, CMS, authentication or external API: every recipe lives in typed TypeScript files inside the repo, and every interactive feature is a progressive enhancement on top of plain HTML.

The catalogue has **30 recipes** — with a strong Brazilian accent (feijoada, moqueca, coxinha, pão de queijo, brigadeiro, pudim…) alongside international classics.

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Configuration and design tokens](#configuration-and-design-tokens)
- [Internationalisation](#internationalisation)
- [Recipe data](#recipe-data)
- [Adding a recipe](#adding-a-recipe)
- [Recipes page: filters and URL parameters](#recipes-page-filters-and-url-parameters)
- [Data stored in the browser](#data-stored-in-the-browser)
- [SEO](#seo)
- [Accessibility and motion](#accessibility-and-motion)
- [Deployment (Vercel)](#deployment-vercel)
- [Image credits](#image-credits)
- [Troubleshooting](#troubleshooting)

---

## Features

**Home page**
- Hero with a live recipe count, featured and trending recipes, category tiles, tips and a pull-quote.
- Scroll-driven animations: staggered reveals, hero parallax, a horizontal snap strip of categories on mobile, and a pull-quote whose words light up as you scroll.
- Newsletter section (intentionally disabled — there is no backend).

**Recipes page** (`/<locale>/recipes`)
- Full-text search, multi-select filters (category, cuisine, prep time, difficulty, diet, main ingredient), minimum rating, maximum cook time, and a "Saved only" switch.
- Five sort orders: newest, most popular, best rated, fastest, A–Z.
- Every filter is reflected in the URL, so any view can be bookmarked or shared.
- Active-filter chips, "show more" pagination, and empty states.

**Recipe page** (`/<locale>/recipes/<slug>`)
- Servings adjuster that rescales every ingredient quantity.
- Ingredient checklist with progress, remembered per recipe.
- Save recipe, copy ingredient list, print-friendly layout.
- Step-by-step instructions with timings and tips, chef notes, common mistakes, storage advice, substitutions, FAQ (animated open/close) and nutrition facts.
- Sticky table of contents with scroll spy.
- Photo credits and licences under every image.

**Site-wide**
- Light / dark / system theme with no flash of the wrong theme.
- Language switcher that keeps you on the same page; your choice is remembered.
- Localized 404 pages.
- Responsive down to 320 px wide.

---

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | [Astro 7](https://astro.build) — static output (`dist/`) |
| Language | TypeScript (`astro/tsconfigs/strictest`) |
| Styling | Tailwind CSS v4 (CSS-first config) + design tokens generated from TypeScript |
| Client JS | Vanilla TypeScript modules in `src/scripts/` — no UI framework |
| Images | `astro:assets` (`<Picture>`, AVIF / WebP / JPEG, responsive widths) |
| Fonts | Playfair Display + DM Sans via Astro's Fonts API (downloaded and self-hosted at build time) |
| SEO | `@astrojs/sitemap`, JSON-LD (`Recipe`, `BreadcrumbList`, …), hreflang |
| Hosting | Vercel (any static host that serves from the domain root works) |

---

## Getting started

### Requirements

- **Node.js ≥ 22.23.4** (required by Astro 7; Node 24 recommended)
- npm ≥ 9.6.5

### Install and run

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at <http://localhost:4321>. Visiting `/` redirects you to `/en-US` or `/pt-BR` based on your saved choice or your browser's language.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload on port 4321 |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Type-check `.astro` and `.ts` files (`astro check`) |
| `npm run astro -- <cmd>` | Run any Astro CLI command |

Run `npm run check` and `npm run build` before pushing — both should finish with 0 errors.

---

## Project structure

```text
.
├── astro.config.ts           # Astro config: site URL resolution, sitemap, fonts, token generator
├── vercel.json               # Vercel routing for localized 404 pages
├── public/                   # Copied as-is: favicon, Open Graph image, flag icons
└── src/
    ├── assets/recipes/<slug>/  # hero.jpg, ingredients.jpg, final.jpg per recipe
    ├── components/
    │   ├── home/               # Home page sections (Hero, CategoryGrid, Trending…)
    │   ├── layout/             # Header, Footer, SEO head, theme toggle, language switcher
    │   ├── recipe-detail/      # Ingredients, Instructions, FAQ, Nutrition, TOC…
    │   ├── recipes/            # Filter groups for the recipes page
    │   ├── ui/                 # Icon, Rating, RecipeCard
    │   └── NotFound.astro      # Shared 404 body
    ├── config/
    │   ├── site.ts             # Single source of truth: brand, colours, type, layout, behaviour
    │   └── tokens.ts           # Turns site.ts into CSS custom properties
    ├── data/
    │   ├── types.ts            # Recipe model (RecipeSource, Recipe, ids)
    │   ├── categories.ts       # Filter vocabularies and their labels
    │   └── recipes/            # One file per recipe + index.ts registry + _helpers.ts
    ├── i18n/
    │   ├── config.ts           # Locales and their metadata (flag, html lang…)
    │   ├── dictionaries/       # en-US.ts, pt-BR.ts — all UI strings
    │   ├── routing.ts          # localizePath, switchLocalePath, absoluteUrl, hreflang
    │   └── translations.ts     # useTranslations(locale), fmt() interpolation
    ├── layouts/                # BaseLayout, RecipeLayout
    ├── lib/                    # Quantity formatting/scaling, JSON-LD builders
    ├── pages/
    │   ├── index.astro         # `/` → language redirect
    │   ├── 404.astro           # Default-language 404
    │   ├── robots.txt.ts
    │   └── [locale]/
    │       ├── index.astro     # Home
    │       ├── 404.astro       # Localized 404s
    │       └── recipes/
    │           ├── index.astro # Discovery page
    │           └── [slug].astro# Recipe page
    ├── scripts/                # Client-side enhancements (filters, recipe page, theme, locale)
    └── styles/
        ├── global.css          # Tailwind entry, base styles, utilities, animations
        └── tokens.css          # GENERATED — do not edit by hand
```

---

## Configuration and design tokens

[`src/config/site.ts`](src/config/site.ts) is the single source of truth for the site:

| Section | Controls |
| --- | --- |
| `brand` | Name, taglines, description, logo wordmark, social icons |
| `i18n` | Default locale, locale list, storage key |
| `typography` | Web fonts, type scale, weights |
| `colors` | Light and dark palettes |
| `layout`, `breakpoints`, `components` | Widths, spacing, radii, shadows, component sizes |
| `images` | Responsive widths and aspect ratios |
| `recipes` | Expected recipe count, page size, featured slugs, servings range, storage keys |
| `animation` | Durations, easings, reveal distance |
| `theme` | Default theme and storage key |
| `seo` | Title template, Twitter handle, theme colours, robots directive |

**How tokens work:** on every `dev` / `build` run, the `uknowucook:tokens` integration in `astro.config.ts` turns `site.ts` into CSS custom properties and writes them to `src/styles/tokens.css`. Tailwind reads them through `@theme`, so a colour change in `site.ts` updates both utility classes and component styles. **Never edit `tokens.css` directly** — your changes will be overwritten.

> `site.ts` is also bundled into client scripts, so keep secrets and Node-only code (`process.env`, `fs`…) out of it.

---

## Internationalisation

- Locales: **`en-US`** (default) and **`pt-BR`**.
- Every page lives under a locale prefix: `/en-US/recipes/feijoada` ↔ `/pt-BR/recipes/feijoada`. Slugs are shared between languages, so switching language keeps you on the same page.
- `/` is a tiny redirect page: saved choice → browser languages → `en-US`. Without JavaScript it shows links to both languages.
- UI strings live in [`src/i18n/dictionaries/`](src/i18n/dictionaries). The pt-BR dictionary is typed against en-US, so a missing key is a compile error.
- Recipe content uses `Localized<T>` (`Record<Locale, T>`), so a recipe missing a translation also fails to compile.

**Adding a locale** means: adding it to `siteConfig.i18n.locales`, adding its metadata in `src/i18n/config.ts` (flag, `html lang`, matching browser language prefixes), creating a dictionary, adding labels in `src/data/categories.ts` and `src/lib/quantity.ts`, extending the `t()` / `tl()` helpers, translating every recipe, and adding a 404 route for it in `vercel.json`.

---

## Recipe data

Recipes are plain TypeScript objects typed as `RecipeSource` ([`src/data/types.ts`](src/data/types.ts)). Language-neutral facts (times, quantities, tags, images) are written once; every human-readable string is bilingual via the helpers in [`_helpers.ts`](src/data/recipes/_helpers.ts):

```ts
t('Boil the water', 'Ferva a água')           // Localized<string>
tl(['pasta', 'dinner'], ['massa', 'jantar'])  // Localized<string[]>
authors.marina                                // fictional masthead: marina, theo, lucas, june
```

Main fields:

| Field | Notes |
| --- | --- |
| `slug` | URL segment, unique, kebab-case |
| `categories` | `breakfast` · `lunch` · `dinner` · `dessert` · `snack` |
| `cuisines` | `italian` · `american` · `brazilian` · `mexican` · `asian` · `french` · `indian` · `mediterranean` |
| `diets` | `vegetarian` · `vegan` · `gluten-free` · `dairy-free` |
| `mainIngredients` | `pasta` · `chicken` · `beef` · `pork` · `eggs` · `cheese` · `chocolate` · `rice` · `mushrooms` · `vegetables` · `seafood` · `beans` |
| `difficulty` | `easy` · `medium` · `hard` |
| `prepMinutes`, `cookMinutes`, `restMinutes?` | Total time and the prep-time filter bucket are derived from these |
| `servings` | Base servings; ingredient `amount`s are written for this number |
| `rating`, `popularity` | Mock values used for sorting and stars |
| `datePublished`, `dateModified` | ISO dates (`YYYY-MM-DD`) |
| `images` | `hero`, `ingredients`, `finalDish` — each with `src`, `credit`, `alt`, `caption` |
| `title`, `description`, `headnote`, `yieldNote?` | Bilingual copy |
| `ingredientGroups` | Groups of `{ amount?, unit?, name, note? }` |
| `steps` | `{ title, body, minutes?, tip?, image? }` — put `image: 'finalDish'` on the last step |
| `callouts` | `chef` · `mistake` · `substitution` · `storage` · `warning` |
| `substitutions`, `faq`, `nutrition`, `keywords` | As named; nutrition is per serving |

[`src/data/recipes/index.ts`](src/data/recipes/index.ts) is the registry and the **only** module pages import recipe data from. It flattens each recipe into a single-locale `Recipe` object, computes total time and reading time, and validates the data at build time:
- a duplicate slug **fails the build**;
- a recipe whose three images are not distinct **fails the build**;
- a recipe count different from `siteConfig.recipes.initialCount` logs a warning.

---

## Adding a recipe

1. **Add three photos** to `src/assets/recipes/<slug>/`: `hero.jpg`, `ingredients.jpg` and `final.jpg`. Landscape, about 1600 px wide is plenty — Astro generates every size and format. Use images you own or that are openly licensed, and note the author, licence and source URL.
2. **Create `src/data/recipes/<slug>.ts`**, copying an existing recipe as a template:

   ```ts
   import type { RecipeSource } from '../types';
   import { authors, t, tl } from './_helpers';
   import hero from '../../assets/recipes/my-recipe/hero.jpg';
   import ingredients from '../../assets/recipes/my-recipe/ingredients.jpg';
   import finalDish from '../../assets/recipes/my-recipe/final.jpg';

   export const myRecipe: RecipeSource = {
     slug: 'my-recipe',
     // …facts…
     author: authors.marina,
     images: {
       hero: {
         src: hero,
         credit: { author: 'Jane Doe', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:…' },
         alt: t('What the photo shows', 'O que a foto mostra'),
         caption: t('Short caption.', 'Legenda curta.'),
       },
       ingredients: { /* … */ },
       finalDish: { /* … */ },
     },
     // …bilingual copy, ingredients, steps…
   };
   ```

3. **Register it** in `src/data/recipes/index.ts`: import it and add it to `recipeSources`.
4. **Update the count**: set `recipes.initialCount` in `src/config/site.ts`. The hero's recipe count updates automatically.
5. *(Optional)* Feature it on the home page via `recipes.featuredSlugs`.
6. **New tag value?** Add the id to the matching union in `types.ts` and its bilingual label in `categories.ts`; it then appears as a filter automatically.
7. Run `npm run check` and `npm run build`.

---

## Recipes page: filters and URL parameters

The filter form works without JavaScript (it submits as a GET form); with JavaScript it filters instantly and keeps the URL in sync. Supported parameters:

| Parameter | Values | Multiple |
| --- | --- | --- |
| `q` | Free-text search | – |
| `category` | Category ids | ✓ |
| `cuisine` | Cuisine ids | ✓ |
| `prep` | `under-15` · `15-30` · `30-60` · `over-60` | ✓ |
| `difficulty` | `easy` · `medium` · `hard` | ✓ |
| `diet` | Diet ids | ✓ |
| `ingredient` | Main-ingredient ids | ✓ |
| `rating` | Minimum rating: `4.5` · `4` · `3` | – |
| `maxCook` | Maximum cook time: `15` · `30` · `45` · `60` | – |
| `maxTotal` | Maximum total time in minutes | – |
| `saved` | `1` = only recipes saved on this device | – |
| `sort` | `newest` · `popular` · `rating` · `fastest` · `alpha` | – |

Multiple values can be repeated (`?cuisine=brazilian&cuisine=italian`) or comma-separated (`?cuisine=brazilian,italian`).

Example: `/pt-BR/recipes?cuisine=brazilian&category=dessert&sort=rating`

---

## Data stored in the browser

Everything personal stays in the visitor's browser (`localStorage`); nothing is sent anywhere.

| Key | Contents |
| --- | --- |
| `uknowucook:theme` | `light` / `dark` (absent = follow the system) |
| `uknowucook:locale` | Last language chosen in the switcher |
| `uknowucook:saved` | JSON array of saved recipe slugs |
| `uknowucook:checklist:<slug>` | Ticked ingredients for one recipe |

Keys are configured in `site.ts`. The site keeps working if storage is unavailable (private mode, blocked cookies).

---

## SEO

- Canonical URL, hreflang alternates (+ `x-default`), Open Graph and Twitter cards on every page.
- JSON-LD: `Recipe` (with times, yield, nutrition, rating, ingredients and steps) and breadcrumbs on recipe pages.
- `sitemap-index.xml` with i18n alternates (404 pages and the redirect page are excluded) and a generated `robots.txt`.
- 404 pages are `noindex`.

**Site URL** — absolute URLs are built from the site origin, resolved at build time in `astro.config.ts` (first match wins):

1. `SITE_URL` — set this if you add a custom domain;
2. `VERCEL_PROJECT_PRODUCTION_URL` — the project's production domain, provided by Vercel on every build (previews included, so previews point their canonical URLs at production);
3. `VERCEL_URL` — the deployment's own URL;
4. `http://localhost:4321` — local builds.

In code, read it with `import.meta.env.SITE` or `absoluteUrl()` from `src/i18n/routing.ts`.

---

## Accessibility and motion

- Semantic landmarks, skip link, one `h1` per page, labelled navigation regions, visible focus rings.
- Language switcher links carry `hreflang` / `lang`; the active one has `aria-current`.
- Status messages (copy, save, filter results) are announced through live regions; buttons keep stable accessible names while their visual label animates.
- All decorative and scroll-driven animation is wrapped in `prefers-reduced-motion: no-preference`, and scroll-linked effects only run in browsers that support `animation-timeline` (`@supports`) — elsewhere the content is simply shown.
- Print styles hide navigation and interactive controls.

---

## Deployment (Vercel)

The site is a static build with no server code, so no adapter is needed.

1. Push the repository to GitHub (or GitLab / Bitbucket).
2. In Vercel: **Add New → Project** and import the repo. The **Astro** preset is detected automatically:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
3. **Node.js version:** Settings → Build and Deployment → Node.js Version → **24.x** (or 22.x).
4. Deploy.

### Environment variables

**None are required.** The production domain comes from `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel provides automatically (Settings → Environment Variables → "Automatically expose System Environment Variables" must stay enabled, which is the default).

| Variable | Required | Purpose |
| --- | --- | --- |
| `SITE_URL` | No | Override the public origin, e.g. `https://uknowucook.com` after adding a custom domain. Redeploy after changing it. |

### 404 routing

[`vercel.json`](vercel.json) serves a localized 404 page with a real `404` status:

| Missing URL | Page served |
| --- | --- |
| `/pt-BR/…` | `/pt-BR/404` (Portuguese) |
| `/en-US/…` | `/en-US/404` (English) |
| anything else, browser's main language Portuguese | `/pt-BR/404` |
| anything else | `/404` (English) |

On a 404 page, the language switcher points at the same missing URL in the other language, so switching shows the page translated.

### After deploying, check

- `/` redirects to `/en-US` or `/pt-BR`.
- `/pt-BR/qualquer-coisa` shows the Portuguese 404.
- A recipe page's `<link rel="canonical">` uses your `*.vercel.app` (or custom) domain.
- `/robots.txt` and `/sitemap-index.xml` use the same domain.

### Other hosts

Any static host works as long as the site is served from the **domain root** (all links are root-absolute, e.g. `/en-US/recipes`). Set `SITE_URL` at build time, publish `dist/`, and recreate the 404 rules from `vercel.json` in the host's own format. A GitHub Pages *project* site (`user.github.io/repo/`) will not work without a custom domain.

---

## Image credits

All recipe photos come from [Wikimedia Commons](https://commons.wikimedia.org) under CC0, public-domain, CC BY or CC BY-SA licences. The author, licence and a link to the source are stored next to each image in its recipe file and shown under every photo on the site, as those licences require. Author names in recipe bylines (Marina Costa, Theo Bennett, Lucas Almeida, June Park) are fictional.

Flag icons are in `public/flags/`.

---

## Troubleshooting

**`npm : File …\npm.ps1 cannot be loaded because running scripts is disabled on this system` (Windows PowerShell)**
Either run `npm.cmd run dev`, or allow locally created scripts for your user once:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

**Port 4321 is already in use** — another dev server is running. Stop it with `Ctrl+C` in its terminal, or run `npm run dev -- --port 4322`.

**`tokens.css` changes keep disappearing** — it is generated; edit `src/config/site.ts` instead.

**Build warns `[recipes] expected N recipes, found M`** — update `recipes.initialCount` in `site.ts` after adding or removing recipes.

**The first build is slow** — Astro generates ~1,400 image variants (several widths × AVIF/WebP/JPEG). Later builds reuse the cache in `node_modules/.astro`.

**Canonical URLs show `localhost` in production** — the build didn't see `VERCEL_PROJECT_PRODUCTION_URL` or `SITE_URL`. Make sure system environment variables are exposed in Vercel, or set `SITE_URL`, then redeploy.
