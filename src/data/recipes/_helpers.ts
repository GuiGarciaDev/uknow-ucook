import type { Localized } from '../../i18n/config';
import type { RecipeAuthor } from '../types';

/** Bilingual string literal: `t('Boil the water', 'Ferva a água')`. */
export const t = (en: string, pt: string): Localized => ({ 'en-US': en, 'pt-BR': pt });

/** Bilingual list literal. */
export const tl = (en: string[], pt: string[]): Localized<string[]> => ({ 'en-US': en, 'pt-BR': pt });

/** The (fictional) UKnowUCook masthead. */
export const authors = {
  marina: { name: 'Marina Costa', role: t('Senior Recipe Editor', 'Editora sênior de receitas') },
  theo: { name: 'Theo Bennett', role: t('Test Kitchen Lead', 'Chefe da cozinha de testes') },
  lucas: { name: 'Lucas Almeida', role: t('Contributing Editor', 'Editor colaborador') },
  june: { name: 'June Park', role: t('Pastry Editor', 'Editora de confeitaria') },
} satisfies Record<string, RecipeAuthor>;
