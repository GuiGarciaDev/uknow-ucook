/**
 * Recipe registry. The only module pages import recipe data from.
 */
import { siteConfig } from '../../config/site';
import type { Locale } from '../../i18n/config';
import { prepBucketFor } from '../categories';
import type { Recipe, RecipeSource, RecipeTranslation } from '../types';
import { americanPancakes } from './american-pancakes';
import { brigadeiro } from './brigadeiro';
import { chickenAlfredo } from './chicken-alfredo';
import { chickenTikkaMasala } from './chicken-tikka-masala';
import { chocolateLavaCake } from './chocolate-lava-cake';
import { mediterraneanChickenSalad } from './mediterranean-chicken-salad';
import { mushroomRisotto } from './mushroom-risotto';
import { paoDeQueijo } from './pao-de-queijo';
import { smashBurger } from './smash-burger';
import { spaghettiCarbonara } from './spaghetti-carbonara';
import { acaiNaTigela } from './acai-na-tigela';
import { baiaoDeDois } from './baiao-de-dois';
import { boloDeCenoura } from './bolo-de-cenoura';
import { chickenTacos } from './chicken-tacos';
import { chocolateChipCookies } from './chocolate-chip-cookies';
import { coxinha } from './coxinha';
import { cuscuzNordestino } from './cuscuz-nordestino';
import { escondidinhoDeCarneSeca } from './escondidinho-de-carne-seca';
import { feijoada } from './feijoada';
import { frenchOnionSoup } from './french-onion-soup';
import { galinhada } from './galinhada';
import { moquecaBaiana } from './moqueca-baiana';
import { padThai } from './pad-thai';
import { pastelDeFeira } from './pastel-de-feira';
import { picanha } from './picanha';
import { pizzaMargherita } from './pizza-margherita';
import { pudimDeLeite } from './pudim-de-leite';
import { shakshuka } from './shakshuka';
import { strogonoffDeFrango } from './strogonoff-de-frango';
import { tapioca } from './tapioca';

export const recipeSources: readonly RecipeSource[] = [
  spaghettiCarbonara,
  paoDeQueijo,
  chickenAlfredo,
  chocolateLavaCake,
  smashBurger,
  americanPancakes,
  chickenTikkaMasala,
  mushroomRisotto,
  brigadeiro,
  mediterraneanChickenSalad,
  feijoada,
  coxinha,
  moquecaBaiana,
  pizzaMargherita,
  picanha,
  padThai,
  pastelDeFeira,
  boloDeCenoura,
  chickenTacos,
  strogonoffDeFrango,
  shakshuka,
  pudimDeLeite,
  frenchOnionSoup,
  tapioca,
  acaiNaTigela,
  chocolateChipCookies,
  baiaoDeDois,
  escondidinhoDeCarneSeca,
  galinhada,
  cuscuzNordestino,
];

// Guard rails: catch authoring mistakes at build time.
{
  const slugs = new Set<string>();
  for (const r of recipeSources) {
    if (slugs.has(r.slug)) throw new Error(`Duplicate recipe slug: ${r.slug}`);
    slugs.add(r.slug);
    const srcs = new Set([r.images.hero.src.src, r.images.ingredients.src.src, r.images.finalDish.src.src]);
    if (srcs.size !== 3) throw new Error(`Recipe "${r.slug}" must use three distinct images.`);
  }
  if (recipeSources.length !== siteConfig.recipes.initialCount) {
    console.warn(`[recipes] expected ${siteConfig.recipes.initialCount} recipes, found ${recipeSources.length}`);
  }
}

function translate(r: RecipeSource, locale: Locale): RecipeTranslation {
  const L = <T>(v: Record<Locale, T>) => v[locale];
  const img = (slot: keyof RecipeSource['images']) => ({
    src: r.images[slot].src,
    credit: r.images[slot].credit,
    alt: L(r.images[slot].alt),
    caption: L(r.images[slot].caption),
  });
  return {
    title: L(r.title),
    description: L(r.description),
    headnote: L(r.headnote),
    ...(r.yieldNote ? { yieldNote: L(r.yieldNote) } : {}),
    author: { name: r.author.name, role: L(r.author.role) },
    images: { hero: img('hero'), ingredients: img('ingredients'), finalDish: img('finalDish') },
    ingredientGroups: r.ingredientGroups.map((g) => ({
      title: L(g.title),
      items: g.items.map((i) => ({
        ...(i.amount !== undefined ? { amount: i.amount } : {}),
        ...(i.unit ? { unit: i.unit } : {}),
        name: L(i.name),
        ...(i.note ? { note: L(i.note) } : {}),
      })),
    })),
    steps: r.steps.map((s) => ({
      title: L(s.title),
      body: L(s.body),
      ...(s.minutes !== undefined ? { minutes: s.minutes } : {}),
      ...(s.tip ? { tip: L(s.tip) } : {}),
      ...(s.image ? { image: s.image } : {}),
    })),
    callouts: r.callouts.map((c) => ({ type: c.type, text: L(c.text) })),
    substitutions: r.substitutions.map((s) => ({ original: L(s.original), swap: L(s.swap), note: L(s.note) })),
    faq: r.faq.map((f) => ({ question: L(f.question), answer: L(f.answer) })),
    keywords: L(r.keywords),
  };
}

function readingMinutes(tr: RecipeTranslation): number {
  const text = [
    tr.description,
    tr.headnote,
    ...tr.ingredientGroups.flatMap((g) => g.items.map((i) => `${i.name} ${i.note ?? ''}`)),
    ...tr.steps.map((s) => `${s.title} ${s.body} ${s.tip ?? ''}`),
    ...tr.callouts.map((c) => c.text),
    ...tr.substitutions.map((s) => `${s.original} ${s.swap} ${s.note}`),
    ...tr.faq.map((f) => `${f.question} ${f.answer}`),
  ].join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / siteConfig.recipes.wordsPerMinute));
}

function build(r: RecipeSource, locale: Locale): Recipe {
  const t = translate(r, locale);
  const restMinutes = r.restMinutes ?? 0;
  return {
    slug: r.slug,
    categories: r.categories,
    cuisines: r.cuisines,
    diets: r.diets,
    mainIngredients: r.mainIngredients,
    difficulty: r.difficulty,
    prepMinutes: r.prepMinutes,
    cookMinutes: r.cookMinutes,
    restMinutes,
    totalMinutes: r.prepMinutes + r.cookMinutes + restMinutes,
    prepBucket: prepBucketFor(r.prepMinutes),
    servings: r.servings,
    rating: r.rating,
    popularity: r.popularity,
    datePublished: r.datePublished,
    dateModified: r.dateModified,
    nutrition: r.nutrition,
    readingMinutes: readingMinutes(t),
    t,
  };
}

const cache = new Map<Locale, Recipe[]>();

/** All recipes for a locale, newest first. */
export function getRecipes(locale: Locale): Recipe[] {
  let list = cache.get(locale);
  if (!list) {
    list = recipeSources
      .map((r) => build(r, locale))
      .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
    cache.set(locale, list);
  }
  return list;
}

export function getRecipe(slug: string, locale: Locale): Recipe | undefined {
  return getRecipes(locale).find((r) => r.slug === slug);
}

export function getRecipeSlugs(): string[] {
  return recipeSources.map((r) => r.slug);
}

/** Simple similarity: shared categories, cuisines and main ingredients. */
export function getRelatedRecipes(recipe: Recipe, locale: Locale, limit = 3): Recipe[] {
  const score = (o: Recipe) =>
    o.categories.filter((c) => recipe.categories.includes(c)).length * 2 +
    o.cuisines.filter((c) => recipe.cuisines.includes(c)).length * 3 +
    o.mainIngredients.filter((m) => recipe.mainIngredients.includes(m)).length;
  return getRecipes(locale)
    .filter((o) => o.slug !== recipe.slug)
    .map((o) => ({ o, s: score(o) }))
    .sort((a, b) => b.s - a.s || b.o.rating.value - a.o.rating.value)
    .slice(0, limit)
    .map(({ o }) => o);
}

export function getFeaturedRecipes(locale: Locale): Recipe[] {
  const all = getRecipes(locale);
  return siteConfig.recipes.featuredSlugs
    .map((slug) => all.find((r) => r.slug === slug))
    .filter((r): r is Recipe => Boolean(r));
}

export function getTrendingRecipes(locale: Locale, limit = 5): Recipe[] {
  return [...getRecipes(locale)].sort((a, b) => b.popularity - a.popularity).slice(0, limit);
}
