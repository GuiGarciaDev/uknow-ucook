/**
 * Strongly typed recipe model.
 *
 * Authoring format: language-neutral facts (times, quantities, tags, images)
 * are written once; every human-readable string is a `Localized<string>`,
 * so TypeScript refuses to compile a recipe that is missing a translation.
 *
 * Components never touch the bilingual shape directly — they receive a
 * flattened `RecipeTranslation` from `getRecipe()` in `./recipes/index.ts`.
 */
import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/config';

export type CategoryId = 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'snack';
export type CuisineId =
  | 'italian'
  | 'american'
  | 'brazilian'
  | 'mexican'
  | 'asian'
  | 'french'
  | 'indian'
  | 'mediterranean';
export type DietId = 'vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type MainIngredientId =
  | 'pasta'
  | 'chicken'
  | 'beef'
  | 'pork'
  | 'eggs'
  | 'cheese'
  | 'chocolate'
  | 'rice'
  | 'mushrooms'
  | 'vegetables'
  | 'seafood'
  | 'beans';
export type UnitId =
  | 'g'
  | 'kg'
  | 'ml'
  | 'l'
  | 'tsp'
  | 'tbsp'
  | 'cup'
  | 'pinch'
  | 'clove'
  | 'slice'
  | 'sprig'
  | 'can'
  | 'handful';
export type PrepBucket = 'under-15' | '15-30' | '30-60' | 'over-60';
export type ImageSlot = 'hero' | 'ingredients' | 'finalDish';
export type CalloutType = 'chef' | 'mistake' | 'substitution' | 'storage' | 'warning';

export interface ImageCredit {
  author: string;
  license: string;
  source: string;
}

export interface RecipeImage {
  src: ImageMetadata;
  credit: ImageCredit;
  alt: Localized;
  caption: Localized;
}

export interface Ingredient {
  /** Base quantity for `Recipe.servings`. Omit for "to taste" items. */
  amount?: number;
  unit?: UnitId;
  name: Localized;
  note?: Localized;
}

export interface IngredientGroup {
  title: Localized;
  items: Ingredient[];
}

export interface RecipeStep {
  title: Localized;
  body: Localized;
  /** Active/passive time for this step, in minutes. */
  minutes?: number;
  tip?: Localized;
  image?: ImageSlot;
}

export interface Callout {
  type: CalloutType;
  text: Localized;
}

export interface Substitution {
  original: Localized;
  swap: Localized;
  note: Localized;
}

export interface FaqItem {
  question: Localized;
  answer: Localized;
}

export interface NutritionInformation {
  /** kcal per serving */
  calories: number;
  /** grams per serving */
  protein: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
  /** milligrams per serving */
  sodium: number;
}

export interface RecipeAuthor {
  name: string;
  role: Localized;
}

export interface RecipeRating {
  /** Average, 1–5. */
  value: number;
  count: number;
}

/** Authoring shape — one object per recipe file. */
export interface RecipeSource {
  slug: string;
  categories: CategoryId[];
  cuisines: CuisineId[];
  diets: DietId[];
  mainIngredients: MainIngredientId[];
  difficulty: Difficulty;
  prepMinutes: number;
  cookMinutes: number;
  /** Resting / chilling / rising time included in the total. */
  restMinutes?: number;
  servings: number;
  rating: RecipeRating;
  /** Mock "views this month" — used for the Most popular sort. */
  popularity: number;
  datePublished: string;
  dateModified: string;
  author: RecipeAuthor;
  images: Record<ImageSlot, RecipeImage>;

  title: Localized;
  description: Localized;
  headnote: Localized;
  yieldNote?: Localized;
  ingredientGroups: IngredientGroup[];
  steps: RecipeStep[];
  callouts: Callout[];
  substitutions: Substitution[];
  faq: FaqItem[];
  nutrition: NutritionInformation;
  keywords: Localized<string[]>;
}

/* ------------------------------------------------------------------ */
/* Flattened, single-locale view consumed by components                */
/* ------------------------------------------------------------------ */

export interface LocalizedImage {
  src: ImageMetadata;
  credit: ImageCredit;
  alt: string;
  caption: string;
}

export interface LocalizedIngredient {
  amount?: number;
  unit?: UnitId;
  name: string;
  note?: string;
}

export interface RecipeTranslation {
  title: string;
  description: string;
  headnote: string;
  yieldNote?: string;
  author: { name: string; role: string };
  images: Record<ImageSlot, LocalizedImage>;
  ingredientGroups: { title: string; items: LocalizedIngredient[] }[];
  steps: { title: string; body: string; minutes?: number; tip?: string; image?: ImageSlot }[];
  callouts: { type: CalloutType; text: string }[];
  substitutions: { original: string; swap: string; note: string }[];
  faq: { question: string; answer: string }[];
  keywords: string[];
}

export interface Recipe
  extends Pick<
    RecipeSource,
    | 'slug'
    | 'categories'
    | 'cuisines'
    | 'diets'
    | 'mainIngredients'
    | 'difficulty'
    | 'prepMinutes'
    | 'cookMinutes'
    | 'servings'
    | 'rating'
    | 'popularity'
    | 'datePublished'
    | 'dateModified'
    | 'nutrition'
  > {
  restMinutes: number;
  totalMinutes: number;
  prepBucket: PrepBucket;
  /** Estimated reading time of the full recipe page, in minutes. */
  readingMinutes: number;
  t: RecipeTranslation;
}
