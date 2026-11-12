/**
 * Schema.org `Recipe` JSON-LD, built from exactly what the page shows, in
 * the page's language.
 */
import { siteConfig } from '../config/site';
import { categories, cuisines } from '../data/categories';
import type { Recipe } from '../data/types';
import type { Locale } from '../i18n/config';
import { absoluteUrl, localizePath } from '../i18n/routing';
import { isoDuration, useTranslations } from '../i18n/translations';
import { formatQuantity } from './quantity';

const dietSchema: Record<string, string> = {
  vegetarian: 'https://schema.org/VegetarianDiet',
  vegan: 'https://schema.org/VeganDiet',
  'gluten-free': 'https://schema.org/GlutenFreeDiet',
};

export function recipeJsonLd(recipe: Recipe, locale: Locale, imageUrls: string[]): Record<string, unknown>[] {
  const url = absoluteUrl(localizePath(locale, `/recipes/${recipe.slug}`));
  const t = recipe.t;
  const ingredients = t.ingredientGroups.flatMap((g) =>
    g.items.map((i) =>
      [i.amount !== undefined ? formatQuantity(i.amount, i.unit, locale) : '', i.name, i.note ? `(${i.note})` : '']
        .filter(Boolean)
        .join(' '),
    ),
  );

  const recipeLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    '@id': `${url}#recipe`,
    name: t.title,
    description: t.description,
    inLanguage: locale,
    url,
    image: imageUrls,
    author: { '@type': 'Person', name: t.author.name, jobTitle: t.author.role },
    publisher: { '@type': 'Organization', name: siteConfig.brand.name, url: absoluteUrl('/') },
    datePublished: recipe.datePublished,
    dateModified: recipe.dateModified,
    prepTime: isoDuration(recipe.prepMinutes),
    cookTime: isoDuration(recipe.cookMinutes),
    totalTime: isoDuration(recipe.totalMinutes),
    recipeYield: [String(recipe.servings), ...(t.yieldNote ? [t.yieldNote] : [])],
    recipeCategory: recipe.categories.map((c) => categories.find((x) => x.id === c)?.label[locale]).join(', '),
    recipeCuisine: recipe.cuisines.map((c) => cuisines.find((x) => x.id === c)?.label[locale]).join(', '),
    keywords: t.keywords.join(', '),
    recipeIngredient: ingredients,
    recipeInstructions: t.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
      url: `${url}#step-${i + 1}`,
    })),
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '1',
      calories: `${recipe.nutrition.calories} kcal`,
      proteinContent: `${recipe.nutrition.protein} g`,
      carbohydrateContent: `${recipe.nutrition.carbohydrates} g`,
      fatContent: `${recipe.nutrition.fat} g`,
      fiberContent: `${recipe.nutrition.fiber} g`,
      sodiumContent: `${recipe.nutrition.sodium} mg`,
    },
  };

  const suitable = recipe.diets.map((d) => dietSchema[d]).filter(Boolean);
  if (suitable.length) recipeLd.suitableForDiet = suitable;

  // Only emit a rating when there is real rating data behind it.
  if (recipe.rating.count > 0) {
    recipeLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: recipe.rating.value,
      ratingCount: recipe.rating.count,
      bestRating: 5,
      worstRating: 1,
    };
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: useTranslations(locale).recipe.breadcrumbHome, item: absoluteUrl(localizePath(locale, '/')) },
      { '@type': 'ListItem', position: 2, name: useTranslations(locale).recipe.breadcrumbRecipes, item: absoluteUrl(localizePath(locale, '/recipes')) },
      { '@type': 'ListItem', position: 3, name: t.title, item: url },
    ],
  };

  return [recipeLd, breadcrumbs];
}
