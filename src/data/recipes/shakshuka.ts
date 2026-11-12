import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/shakshuka/hero.jpg';
import ingredients from '../../assets/recipes/shakshuka/ingredients.jpg';
import finalDish from '../../assets/recipes/shakshuka/final.jpg';

export const shakshuka: RecipeSource = {
  slug: 'shakshuka',
  categories: ['breakfast', 'lunch'],
  cuisines: ['mediterranean'],
  diets: ['vegetarian', 'gluten-free'],
  mainIngredients: ['eggs', 'vegetables'],
  difficulty: 'easy',
  prepMinutes: 10,
  cookMinutes: 25,
  servings: 3,
  rating: { value: 4.8, count: 1392 },
  popularity: 8610,
  datePublished: '2026-08-30',
  dateModified: '2026-10-27',
  author: authors.marina,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Calliopejen1', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Shakshuka_by_Calliopejen1.jpg' },
      alt: t('A skillet of shakshuka with eggs nestled in tomato sauce and herbs', 'Frigideira de shakshuka com ovos no molho de tomate e ervas'),
      caption: t('Bring the pan to the table.', 'Leve a frigideira à mesa.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Joe Mahoney', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Shakshuka_sauce_cooking.jpg' },
      alt: t('Tomato and pepper sauce simmering in a skillet before the eggs go in', 'Molho de tomate e pimentão apurando na frigideira antes dos ovos'),
      caption: t('Reduce the sauce before adding the eggs.', 'Apure o molho antes de colocar os ovos.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Luca Nebuloni from Milan, Italy', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Shakshuka_(28310896066).jpg' },
      alt: t('Shakshuka in a clay dish served with bread', 'Shakshuka em travessa de barro servida com pão'),
      caption: t('Plenty of bread for dipping.', 'Bastante pão para molhar.'),
    },
  },

  title: t('Shakshuka', 'Shakshuka'),
  description: t(
    'Eggs gently poached in a smoky, spiced tomato and pepper sauce, finished with feta and herbs — one pan, lots of bread.',
    'Ovos cozidos lentamente em molho de tomate e pimentão defumado e temperado, finalizados com feta e ervas — uma frigideira e muito pão.',
  ),
  headnote: t(
    'Shakshuka came from North Africa and became a breakfast staple across the eastern Mediterranean. The sauce is the star: peppers and onions softened in olive oil, bloomed with cumin and paprika, then simmered with tomatoes until thick enough to hold little wells for the eggs. Bring the pan to the table and tear bread straight into it.',
    'A shakshuka nasceu no norte da África e virou café da manhã em todo o Mediterrâneo oriental. O molho é a estrela: pimentões e cebola murchos no azeite, perfumados com cominho e páprica e cozidos com tomate até ficarem grossos o suficiente para segurar as cavidades dos ovos. Leve a frigideira à mesa e molhe o pão direto nela.',
  ),
  ingredientGroups: [
    {
      title: t('For the sauce', 'Para o molho'),
      items: [
        { amount: 3, unit: 'tbsp', name: t('olive oil', 'azeite') },
        { amount: 1, name: t('onion', 'cebola'), note: t('sliced', 'fatiada') },
        { amount: 2, name: t('red bell peppers', 'pimentões vermelhos'), note: t('sliced', 'fatiados') },
        { amount: 3, unit: 'clove', name: t('garlic', 'alho'), note: t('sliced', 'fatiado') },
        { amount: 1, unit: 'tsp', name: t('ground cumin', 'cominho em pó') },
        { amount: 2, unit: 'tsp', name: t('smoked paprika', 'páprica defumada') },
        { amount: 1, unit: 'pinch', name: t('chilli flakes', 'pimenta calabresa') },
        { amount: 800, unit: 'g', name: t('canned whole tomatoes', 'tomate pelado em lata'), note: t('2 cans, crushed by hand', '2 latas, amassado à mão') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal') },
      ],
    },
    {
      title: t('To finish', 'Para finalizar'),
      items: [
        { amount: 6, name: t('eggs', 'ovos') },
        { amount: 80, unit: 'g', name: t('feta', 'queijo feta'), note: t('crumbled', 'esfarelado') },
        { amount: 1, unit: 'handful', name: t('parsley and coriander', 'salsinha e coentro'), note: t('chopped', 'picados') },
        { name: t('crusty bread or pita', 'pão rústico ou pita'), note: t('to serve', 'para servir') },
      ],
    },
  ],
  steps: [
    {
      title: t('Soften the vegetables', 'Murche os legumes'),
      body: t(
        'Heat the oil in a 28 cm skillet over medium heat and cook the onion and peppers for 8–10 minutes until soft and sweet. Add the garlic for the last minute.',
        'Aqueça o azeite em uma frigideira de 28 cm em fogo médio e refogue a cebola e os pimentões por 8–10 minutos, até ficarem macios e adocicados. Junte o alho no último minuto.',
      ),
      minutes: 10,
    },
    {
      title: t('Bloom the spices and simmer', 'Toste as especiarias e apure'),
      body: t(
        'Stir in the cumin, paprika and chilli for 30 seconds, then add the tomatoes and salt. Simmer for 10 minutes until thick and jammy.',
        'Junte o cominho, a páprica e a pimenta e mexa por 30 segundos; acrescente o tomate e o sal e cozinhe por 10 minutos, até engrossar.',
      ),
      minutes: 11,
      tip: t('Drag a spoon through the sauce: it should leave a trail that closes slowly.', 'Passe uma colher no molho: ela deve deixar um rastro que se fecha devagar.'),
    },
    {
      title: t('Poach the eggs', 'Cozinhe os ovos'),
      body: t(
        'Make six wells in the sauce and crack an egg into each. Cover and cook over low heat for 5–7 minutes, until the whites are set but the yolks still runny.',
        'Abra seis cavidades no molho e quebre um ovo em cada. Tampe e cozinhe em fogo baixo por 5–7 minutos, até as claras firmarem e as gemas continuarem moles.',
      ),
      minutes: 7,
    },
    {
      title: t('Finish and serve', 'Finalize e sirva'),
      body: t(
        'Scatter with feta and herbs and serve straight from the pan with plenty of bread.',
        'Espalhe o feta e as ervas e sirva direto na frigideira, com bastante pão.',
      ),
      minutes: 1,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Season each egg with a pinch of salt and a little paprika before covering — the yolks need it.',
        'Tempere cada ovo com uma pitada de sal e um pouco de páprica antes de tampar — as gemas pedem.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Adding the eggs to a watery sauce. They sink and spread — reduce the sauce first.',
        'Colocar os ovos em molho aguado. Eles afundam e se espalham — apure o molho antes.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'The sauce keeps 4 days in the fridge; reheat and add fresh eggs each time.',
        'O molho dura 4 dias na geladeira; reaqueça e coloque ovos frescos a cada vez.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Feta', 'Feta'),
      swap: t('dollops of thick yogurt or labneh', 'colheradas de iogurte grego ou coalhada seca'),
      note: t('Cool and tangy against the spicy sauce.', 'Fresco e azedinho contra o molho picante.'),
    },
    {
      original: t('Red peppers', 'Pimentões vermelhos'),
      swap: t('spinach and chickpeas', 'espinafre e grão-de-bico'),
      note: t('A “green-ish” shakshuka with more protein.', 'Uma shakshuka mais verde e com mais proteína.'),
    },
  ],
  faq: [
    {
      question: t('Can I make it for a crowd?', 'Dá para fazer para muita gente?'),
      answer: t(
        'Yes — double the sauce in a large roasting tin, add the eggs and bake at 190 °C for 10–12 minutes.',
        'Dá — dobre o molho em uma assadeira grande, coloque os ovos e asse a 190 °C por 10–12 minutos.',
      ),
    },
  ],
  nutrition: { calories: 360, protein: 18, carbohydrates: 20, fat: 24, fiber: 5, sodium: 940 },
  keywords: tl(
    ['shakshuka', 'eggs in tomato sauce', 'one-pan breakfast', 'vegetarian brunch'],
    ['shakshuka', 'ovos no molho de tomate', 'café da manhã', 'brunch vegetariano'],
  ),
};
