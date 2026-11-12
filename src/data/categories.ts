/**
 * Taxonomy: every filterable dimension with localized labels.
 * Order here is the order shown in the UI.
 */
import type { Localized } from '../i18n/config';
import type {
  CategoryId,
  CuisineId,
  DietId,
  Difficulty,
  MainIngredientId,
  PrepBucket,
} from './types';

interface Term<Id extends string> {
  id: Id;
  label: Localized;
}

export const categories: Term<CategoryId>[] = [
  { id: 'breakfast', label: { 'en-US': 'Breakfast', 'pt-BR': 'Café da manhã' } },
  { id: 'lunch', label: { 'en-US': 'Lunch', 'pt-BR': 'Almoço' } },
  { id: 'dinner', label: { 'en-US': 'Dinner', 'pt-BR': 'Jantar' } },
  { id: 'dessert', label: { 'en-US': 'Dessert', 'pt-BR': 'Sobremesa' } },
  { id: 'snack', label: { 'en-US': 'Snacks', 'pt-BR': 'Lanches' } },
];

export const cuisines: Term<CuisineId>[] = [
  { id: 'italian', label: { 'en-US': 'Italian', 'pt-BR': 'Italiana' } },
  { id: 'american', label: { 'en-US': 'American', 'pt-BR': 'Americana' } },
  { id: 'brazilian', label: { 'en-US': 'Brazilian', 'pt-BR': 'Brasileira' } },
  { id: 'mexican', label: { 'en-US': 'Mexican', 'pt-BR': 'Mexicana' } },
  { id: 'asian', label: { 'en-US': 'Asian', 'pt-BR': 'Asiática' } },
  { id: 'french', label: { 'en-US': 'French', 'pt-BR': 'Francesa' } },
  { id: 'indian', label: { 'en-US': 'Indian', 'pt-BR': 'Indiana' } },
  { id: 'mediterranean', label: { 'en-US': 'Mediterranean', 'pt-BR': 'Mediterrânea' } },
];

export const diets: Term<DietId>[] = [
  { id: 'vegetarian', label: { 'en-US': 'Vegetarian', 'pt-BR': 'Vegetariana' } },
  { id: 'vegan', label: { 'en-US': 'Vegan', 'pt-BR': 'Vegana' } },
  { id: 'gluten-free', label: { 'en-US': 'Gluten-Free', 'pt-BR': 'Sem glúten' } },
  { id: 'dairy-free', label: { 'en-US': 'Dairy-Free', 'pt-BR': 'Sem lactose' } },
];

export const difficulties: Term<Difficulty>[] = [
  { id: 'easy', label: { 'en-US': 'Easy', 'pt-BR': 'Fácil' } },
  { id: 'medium', label: { 'en-US': 'Medium', 'pt-BR': 'Média' } },
  { id: 'hard', label: { 'en-US': 'Hard', 'pt-BR': 'Difícil' } },
];

export const mainIngredients: Term<MainIngredientId>[] = [
  { id: 'pasta', label: { 'en-US': 'Pasta', 'pt-BR': 'Massa' } },
  { id: 'chicken', label: { 'en-US': 'Chicken', 'pt-BR': 'Frango' } },
  { id: 'beef', label: { 'en-US': 'Beef', 'pt-BR': 'Carne bovina' } },
  { id: 'pork', label: { 'en-US': 'Pork', 'pt-BR': 'Carne suína' } },
  { id: 'eggs', label: { 'en-US': 'Eggs', 'pt-BR': 'Ovos' } },
  { id: 'cheese', label: { 'en-US': 'Cheese', 'pt-BR': 'Queijo' } },
  { id: 'chocolate', label: { 'en-US': 'Chocolate', 'pt-BR': 'Chocolate' } },
  { id: 'rice', label: { 'en-US': 'Rice', 'pt-BR': 'Arroz' } },
  { id: 'mushrooms', label: { 'en-US': 'Mushrooms', 'pt-BR': 'Cogumelos' } },
  { id: 'vegetables', label: { 'en-US': 'Vegetables', 'pt-BR': 'Legumes e verduras' } },
];

export const prepBuckets: PrepBucket[] = ['under-15', '15-30', '30-60', 'over-60'];

export function prepBucketFor(minutes: number): PrepBucket {
  if (minutes < 15) return 'under-15';
  if (minutes <= 30) return '15-30';
  if (minutes <= 60) return '30-60';
  return 'over-60';
}

export const ratingSteps = [4.5, 4, 3] as const;
export const cookTimeSteps = [15, 30, 45, 60] as const;

/**
 * Homepage "Explore categories" tiles. Each one deep-links into the
 * discovery page with the matching filter pre-applied via query string.
 */
export interface CategoryTile {
  id: string;
  label: Localized;
  blurb: Localized;
  /** Query string appended to /recipes. */
  query: string;
  /** Recipe whose hero photo illustrates the tile. */
  imageFrom: string;
  emoji: string;
}

export const categoryTiles: CategoryTile[] = [
  {
    id: 'breakfast',
    label: { 'en-US': 'Breakfast', 'pt-BR': 'Café da manhã' },
    blurb: { 'en-US': 'Rise and dine.', 'pt-BR': 'Acordou, comeu.' },
    query: 'category=breakfast',
    imageFrom: 'american-pancakes',
    emoji: '🥞',
  },
  {
    id: 'lunch',
    label: { 'en-US': 'Lunch', 'pt-BR': 'Almoço' },
    blurb: { 'en-US': 'Midday, maximum flavor.', 'pt-BR': 'Meio-dia, sabor inteiro.' },
    query: 'category=lunch',
    imageFrom: 'mediterranean-chicken-salad',
    emoji: '🥗',
  },
  {
    id: 'dinner',
    label: { 'en-US': 'Dinner', 'pt-BR': 'Jantar' },
    blurb: { 'en-US': 'The main event.', 'pt-BR': 'O evento principal.' },
    query: 'category=dinner',
    imageFrom: 'chicken-alfredo',
    emoji: '🍝',
  },
  {
    id: 'desserts',
    label: { 'en-US': 'Desserts', 'pt-BR': 'Sobremesas' },
    blurb: { 'en-US': 'Life is short.', 'pt-BR': 'A vida é curta.' },
    query: 'category=dessert',
    imageFrom: 'chocolate-lava-cake',
    emoji: '🍫',
  },
  {
    id: 'vegetarian',
    label: { 'en-US': 'Vegetarian', 'pt-BR': 'Vegetariano' },
    blurb: { 'en-US': 'Plants, but make it cozy.', 'pt-BR': 'Vegetal, mas aconchegante.' },
    query: 'diet=vegetarian',
    imageFrom: 'mushroom-risotto',
    emoji: '🍄',
  },
  {
    id: 'italian',
    label: { 'en-US': 'Italian', 'pt-BR': 'Italiana' },
    blurb: { 'en-US': 'Mamma would approve.', 'pt-BR': 'A nonna aprovaria.' },
    query: 'cuisine=italian',
    imageFrom: 'spaghetti-carbonara',
    emoji: '🇮🇹',
  },
  {
    id: 'asian',
    label: { 'en-US': 'Asian', 'pt-BR': 'Asiática' },
    blurb: { 'en-US': 'Spice cabinet, unlocked.', 'pt-BR': 'Armário de temperos liberado.' },
    query: 'cuisine=asian',
    imageFrom: 'chicken-tikka-masala',
    emoji: '🌶️',
  },
  {
    id: 'quick',
    label: { 'en-US': 'Quick Meals', 'pt-BR': 'Refeições rápidas' },
    blurb: { 'en-US': 'On the table in 30.', 'pt-BR': 'Na mesa em 30 minutos.' },
    query: 'maxTotal=30',
    imageFrom: 'smash-burger',
    emoji: '⚡',
  },
];
