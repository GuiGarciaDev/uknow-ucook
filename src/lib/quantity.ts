/**
 * Ingredient quantity scaling & formatting.
 * Shared by the server render and the client-side servings adjuster, so the
 * initial HTML and the scaled text always look identical.
 */
import type { Locale } from '../i18n/config';
import type { UnitId } from '../data/types';

interface UnitLabel {
  one: string;
  other: string;
  /** Render without a space between number and unit (e.g. "200g"). */
  attached?: boolean;
  /** Quantities in this unit read better as kitchen fractions. */
  fractional?: boolean;
}

export const unitLabels: Record<Locale, Record<UnitId, UnitLabel>> = {
  'en-US': {
    g: { one: 'g', other: 'g' },
    kg: { one: 'kg', other: 'kg' },
    ml: { one: 'ml', other: 'ml' },
    l: { one: 'L', other: 'L' },
    tsp: { one: 'tsp', other: 'tsp', fractional: true },
    tbsp: { one: 'tbsp', other: 'tbsp', fractional: true },
    cup: { one: 'cup', other: 'cups', fractional: true },
    pinch: { one: 'pinch', other: 'pinches', fractional: true },
    clove: { one: 'clove', other: 'cloves', fractional: true },
    slice: { one: 'slice', other: 'slices', fractional: true },
    sprig: { one: 'sprig', other: 'sprigs', fractional: true },
    can: { one: 'can', other: 'cans', fractional: true },
    handful: { one: 'handful', other: 'handfuls', fractional: true },
  },
  'pt-BR': {
    g: { one: 'g', other: 'g' },
    kg: { one: 'kg', other: 'kg' },
    ml: { one: 'ml', other: 'ml' },
    l: { one: 'L', other: 'L' },
    tsp: { one: 'colher (chá)', other: 'colheres (chá)', fractional: true },
    tbsp: { one: 'colher (sopa)', other: 'colheres (sopa)', fractional: true },
    cup: { one: 'xícara', other: 'xícaras', fractional: true },
    pinch: { one: 'pitada', other: 'pitadas', fractional: true },
    clove: { one: 'dente', other: 'dentes', fractional: true },
    slice: { one: 'fatia', other: 'fatias', fractional: true },
    sprig: { one: 'ramo', other: 'ramos', fractional: true },
    can: { one: 'lata', other: 'latas', fractional: true },
    handful: { one: 'punhado', other: 'punhados', fractional: true },
  },
};

const FRACTIONS: [number, string][] = [
  [0, ''],
  [1 / 8, '⅛'],
  [1 / 4, '¼'],
  [1 / 3, '⅓'],
  [1 / 2, '½'],
  [2 / 3, '⅔'],
  [3 / 4, '¾'],
  [1, ''],
];

function toKitchenFraction(value: number): string {
  let whole = Math.floor(value);
  const rest = value - whole;
  let best = FRACTIONS[0]!;
  for (const f of FRACTIONS) if (Math.abs(f[0] - rest) < Math.abs(best[0] - rest)) best = f;
  if (best[0] === 1) {
    whole += 1;
    best = FRACTIONS[0]!;
  }
  if (whole === 0 && best[1] === '') return '⅛';
  return whole === 0 ? best[1] : `${whole}${best[1] ? ` ${best[1]}` : ''}`;
}

function roundMetric(value: number): number {
  if (value >= 100) return Math.round(value / 5) * 5;
  if (value >= 10) return Math.round(value);
  return Math.round(value * 10) / 10;
}

/** Formats a scaled amount, e.g. `1 ½ cups`, `250 g`, `2 dentes`. */
export function formatQuantity(amount: number, unit: UnitId | undefined, locale: Locale): string {
  const label = unit ? unitLabels[locale][unit] : undefined;
  const fractional = !unit || label?.fractional;

  // Promote large gram/ml values to kg/L for readability.
  if ((unit === 'g' || unit === 'ml') && amount >= 1000) {
    return formatQuantity(amount / 1000, unit === 'g' ? 'kg' : 'l', locale);
  }

  const number = fractional
    ? toKitchenFraction(amount)
    : new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(roundMetric(amount));

  if (!label) return number;
  const plural = fractional ? amount > 1.0001 : amount !== 1;
  return `${number} ${plural ? label.other : label.one}`;
}

export function scaleAmount(amount: number, baseServings: number, servings: number): number {
  return (amount * servings) / baseServings;
}
