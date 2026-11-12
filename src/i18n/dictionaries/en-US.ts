/**
 * English (US) UI dictionary. This object defines the shape every other
 * dictionary must satisfy (`Dictionary` type) — a missing key in pt-BR is a
 * type error, not a runtime surprise.
 *
 * Templates use `{name}` placeholders; fill them with `fmt()` from
 * `src/i18n/translations.ts`.
 */
const enUS = {
  meta: {
    homeTitle: 'UKnowUCook — Good food. Bad puns. Great recipes.',
    homeDescription:
      'A playful recipe magazine with tested, step-by-step recipes: carbonara, pão de queijo, lava cake, tikka masala and more. You know you want to cook.',
    recipesTitle: 'All recipes',
    recipesDescription:
      'Browse every UKnowUCook recipe. Filter by category, cuisine, time, difficulty, diet and main ingredient — then go make something delicious.',
    notFoundTitle: 'Page not found',
  },
  a11y: {
    skipToContent: 'Skip to content',
    mainNav: 'Main',
    footerNav: 'Footer',
    languageNav: 'Language',
    breadcrumb: 'Breadcrumb',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
    switchToDark: 'Switch to dark theme',
    switchToLight: 'Switch to light theme',
    darkMode: 'Dark theme',
    readingProgress: 'Reading progress',
    socialNav: 'Social media',
    opensInNewTab: '(opens in a new tab)',
  },
  nav: {
    home: 'Home',
    recipes: 'Recipes',
    about: 'About',
    search: 'Search',
  },
  search: {
    label: 'Search recipes',
    placeholder: 'Carbonara, chocolate, 20 minutes…',
    submit: 'Search',
  },
  language: {
    label: 'Language',
    current: 'Current language',
  },
  home: {
    hero: {
      kicker: 'Issue Nº 01 · The Comfort Food Edition',
      titleStart: 'You know',
      titleEmphasis: 'you want',
      titleEnd: 'to cook.',
      intro:
        'Tested recipes, honest timings and the occasional pun nobody asked for. Ten dishes to start with — from a five-ingredient carbonara to brigadeiros you will not share.',
      ctaExplore: 'Explore recipes',
      ctaSurprise: 'Surprise me',
      surpriseHint: 'Picks a random recipe',
      sticker: 'Zero kitchen drama*',
      stickerNote: '*Some drama. Mostly cheese.',
      stats: [
        { value: '{recipes}', label: 'kitchen-tested recipes' },
        { value: '2', label: 'languages, same puns' },
        { value: '0', label: 'life stories before the recipe' },
      ],
    },
    featured: {
      kicker: 'Editor’s picks',
      title: 'Start with these. Thank us later.',
      intro: 'Three recipes we make on repeat — each one a crowd-pleaser with a trick worth learning.',
      viewAll: 'See all recipes',
    },
    categories: {
      kicker: 'Browse the pantry',
      title: 'What are you in the mood for?',
      intro: 'Every craving has a shelf. Pick one.',
      count: '{count} recipes',
      countOne: '1 recipe',
      countZero: 'Coming soon',
    },
    trending: {
      kicker: 'On everyone’s stove',
      title: 'Trending this week',
      intro: 'The recipes our readers keep coming back to (and printing, and spilling sauce on).',
    },
    inspiration: {
      kicker: 'Kitchen wisdom',
      title: 'Cook smarter, not harder',
      intro: 'Small habits that make every recipe on this site taste better.',
      tips: [
        {
          title: 'Salt your pasta water like you mean it',
          body: 'About 10 g of salt per litre. It is the only chance to season the pasta itself — and the starchy water becomes your sauce’s best friend.',
        },
        {
          title: 'Mise en place is self-care',
          body: 'Measure everything before the pan gets hot. Five calm minutes now saves a smoky kitchen later.',
        },
        {
          title: 'Taste, then taste again',
          body: 'Recipes are maps, not laws. Adjust salt, acid and heat at the end — your tongue is the final editor.',
        },
      ],
      seasonalTitle: 'In season right now',
      seasonal: [
        { name: 'Wild mushrooms', note: 'Earthy and perfect for risotto.' },
        { name: 'Pumpkin & squash', note: 'Roast, mash, or sneak into pancakes.' },
        { name: 'Pears', note: 'Poached, they are a five-star dessert.' },
        { name: 'Kale', note: 'Massage it with lemon. Yes, really.' },
      ],
      quoteText: 'If it has cheese, it’s comfort food. If it has two cheeses, it’s therapy.',
      quoteAuthor: 'The UKnowUCook test kitchen',
    },
    about: {
      kicker: 'About us',
      title: 'Who’s cooking?',
      body: [
        'UKnowUCook is a tiny, independent recipe magazine. We test every recipe at least three times, write timings for real home kitchens, and translate everything — ingredients, steps and jokes — into English and Brazilian Portuguese.',
        'No pop-ups, no 2,000-word life story before the ingredients. Just the recipe, a few good tips, and a pun or two to keep you company while the onions sweat.',
      ],
    },
    newsletter: {
      kicker: 'The Sunday Spoon',
      title: 'One recipe a week. Zero spam.',
      intro: 'A short email every Sunday with a new recipe, a seasonal ingredient and one questionable joke.',
      emailLabel: 'Email address',
      placeholder: 'you@kitchen.com',
      submit: 'Subscribe',
      unavailable: 'Subscriptions are closed — this site is a demo, so there’s no mailing list (yet).',
    },
  },
  card: {
    minutes: '{n} min',
    hoursMinutes: '{h} h {m} min',
    hours: '{h} h',
    rating: 'Rated {rating} out of 5',
    ratingLabel: 'Rating',
    ratingCount: '{n} ratings',
    totalTime: 'Total time',
    difficulty: 'Difficulty',
    category: 'Category',
  },
  recipes: {
    kicker: 'The recipe index',
    title: 'Every recipe, one page.',
    intro:
      'Filter by craving, cuisine, time or diet. Everything below has been cooked, eaten and argued about in our test kitchen.',
    total: '{n} recipes in the pantry',
    filters: {
      title: 'Filters',
      saved: 'Your kitchen',
      savedOnly: 'Saved recipes only',
      open: 'Filters',
      close: 'Close filters',
      apply: 'Show results',
      category: 'Category',
      cuisine: 'Cuisine',
      prepTime: 'Preparation time',
      difficulty: 'Difficulty',
      diet: 'Dietary preferences',
      ingredient: 'Main ingredient',
      rating: 'Minimum rating',
      ratingAny: 'Any rating',
      ratingAtLeast: '{n}+ stars',
      cookTime: 'Cooking time',
      cookTimeAny: 'Any',
      cookTimeUpTo: 'Up to {n} min',
      prepBuckets: {
        'under-15': 'Under 15 minutes',
        '15-30': '15–30 minutes',
        '30-60': '30–60 minutes',
        'over-60': 'Over 60 minutes',
      },
    },
    sort: {
      label: 'Sort by',
      newest: 'Newest',
      popular: 'Most popular',
      rating: 'Highest rated',
      fastest: 'Fastest preparation',
      alpha: 'Alphabetical',
    },
    clearAll: 'Clear all filters',
    activeFilters: 'Active filters',
    removeFilter: 'Remove filter: {label}',
    searchChip: 'Search: “{q}”',
    matching: 'Showing {shown} of {count} matching recipes',
    matchingAll: 'Showing {shown} of {count} recipes',
    empty: {
      title: 'Nothing in the pot.',
      body: 'No recipe matches all of those filters. Try removing one — or embrace chaos and clear them all.',
      reset: 'Clear all filters',
    },
    emptySaved: {
      title: 'No saved recipes yet.',
      body: 'Tap “Save recipe” on any recipe and it will be waiting for you here — saved on this device only.',
      reset: 'Browse all recipes',
    },
    savedChip: 'Saved recipes',
    loadMore: 'Load more recipes',
    noscript: 'Filters need JavaScript, but every recipe is listed below.',
  },
  recipe: {
    breadcrumbHome: 'Home',
    breadcrumbRecipes: 'Recipes',
    by: 'By',
    published: 'Published',
    updated: 'Updated',
    readingTimeLabel: 'Reading time',
    readingTime: '{n} min read',
    metaFile: 'recipe.meta',
    meta: {
      prep: 'Prep time',
      cook: 'Cook time',
      total: 'Total time',
      difficulty: 'Difficulty',
      servings: 'Servings',
      calories: 'Calories',
      caloriesValue: '{n} kcal / serving',
      cuisine: 'Cuisine',
      diet: 'Diet',
    },
    toc: 'On this page',
    sections: {
      ingredients: 'Ingredients',
      instructions: 'Instructions',
      tips: 'Cooking tips',
      substitutions: 'Substitutions',
      nutrition: 'Nutrition',
      faq: 'FAQ',
      related: 'You might also like',
    },
    servings: {
      label: 'Servings',
      decrease: 'Decrease servings',
      increase: 'Increase servings',
      reset: 'Reset',
      scaledNote: 'Quantities scaled for {n} servings.',
    },
    actions: {
      title: 'Recipe actions',
      print: 'Print',
      copy: 'Copy ingredients',
      copied: 'Ingredients copied to clipboard.',
      copiedShort: 'Copied!',
      copyFailed: 'Could not copy — your browser said no.',
      copyFailedShort: 'Couldn’t copy',
      save: 'Save recipe',
      saved: 'Saved',
      savedAnnounce: 'Recipe saved on this device.',
      unsavedAnnounce: 'Recipe removed from saved recipes.',
      clearChecks: 'Uncheck all',
    },
    ingredientsHint: 'Check things off as you gather them. We’ll remember.',
    ingredientsProgress: '{done} of {total} ready',
    step: 'Step {n}',
    stepTime: 'About {t}',
    stepTip: 'Tip',
    payoff: 'The payoff',
    nutrition: {
      caption: 'Nutrition per serving',
      nutrient: 'Nutrient',
      amount: 'Amount',
      calories: 'Calories',
      protein: 'Protein',
      carbohydrates: 'Carbohydrates',
      fat: 'Fat',
      fiber: 'Fiber',
      sodium: 'Sodium',
      disclaimer: 'Estimates calculated from standard ingredient data. Your pan, your brands and your generosity with cheese may vary.',
    },
    callouts: {
      chef: 'Chef’s tip',
      mistake: 'Common mistake',
      substitution: 'Substitution',
      storage: 'Storage',
      warning: 'Heads up',
    },
    substitution: {
      instead: 'Instead of',
      use: 'use',
    },
    photoCredit: 'Photo: {author}, {license}, via Wikimedia Commons',
    related: 'More recipes to try',
  },
  footer: {
    blurb: 'An independent recipe magazine for people who like to eat well and laugh at their own jokes.',
    explore: 'Explore',
    categories: 'Categories',
    language: 'Language',
    social: 'Follow along',
    copyright: '© {year} UKnowUCook. All puns reserved.',
    credits: 'Food photography by Wikimedia Commons contributors, used under their respective Creative Commons and public-domain licenses.',
    backToTop: 'Back to top',
  },
  notFound: {
    kicker: 'Error 404',
    title: 'This page got eaten.',
    body: 'We looked in the fridge, the oven and behind the toaster. Nothing. Maybe one of these will hit the spot instead?',
    cta: 'Back to the homepage',
  },
  root: {
    title: 'Choose your language',
    redirecting: 'Taking you to the kitchen…',
  },
  units: {
    minutesShort: 'min',
  },
};

/** Deep-string shape that every locale dictionary must match. */
type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepStringify<U>[]
    : { readonly [K in keyof T]: DeepStringify<T[K]> };

export type Dictionary = DeepStringify<typeof enUS>;

export default enUS satisfies Dictionary;
