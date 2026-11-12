import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/bolo-de-cenoura/hero.jpg';
import ingredients from '../../assets/recipes/bolo-de-cenoura/ingredients.jpg';
import finalDish from '../../assets/recipes/bolo-de-cenoura/final.jpg';

export const boloDeCenoura: RecipeSource = {
  slug: 'bolo-de-cenoura',
  categories: ['dessert', 'breakfast'],
  cuisines: ['brazilian'],
  diets: ['vegetarian'],
  mainIngredients: ['vegetables', 'chocolate'],
  difficulty: 'easy',
  prepMinutes: 15,
  cookMinutes: 45,
  restMinutes: 20,
  servings: 12,
  rating: { value: 4.9, count: 3312 },
  popularity: 14310,
  datePublished: '2026-01-17',
  dateModified: '2026-09-26',
  author: authors.june,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Pedro Toniazzo Terres', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Bolo_de_Cenoura_(diagonal),_08-12-2020.jpg' },
      alt: t('Bright orange carrot cake with chocolate glaze, a slice cut out', 'Bolo de cenoura laranja com cobertura de chocolate, com uma fatia cortada'),
      caption: t('Orange crumb, chocolate top.', 'Miolo laranja e cobertura de chocolate.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'domdomegg', license: 'CC BY 4.0', source: 'https://commons.wikimedia.org/wiki/File:Carrots_at_Ljubljana_Central_Market.JPG' },
      alt: t('A bunch of fresh carrots', 'Maço de cenouras frescas'),
      caption: t('Raw carrots go straight into the blender.', 'A cenoura crua vai direto ao liquidificador.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Liliana Roxana', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Bolo_de_cenoura.jpg' },
      alt: t('A ring-shaped carrot cake covered in chocolate glaze', 'Bolo de cenoura em forma de anel coberto com calda de chocolate'),
      caption: t('Baked in a ring tin and glazed while warm.', 'Assado em forma de furo e coberto ainda morno.'),
    },
  },

  title: t('Brazilian Carrot Cake with Chocolate Glaze', 'Bolo de Cenoura com Cobertura de Chocolate'),
  description: t(
    'A fluffy, bright-orange blender cake topped with a crackly chocolate glaze — Brazil’s most beloved afternoon cake.',
    'O bolo de liquidificador mais amado do Brasil: fofinho, laranjinha e coberto com aquela calda de chocolate que vira casquinha.',
  ),
  headnote: t(
    'Forget everything you know about carrot cake. The Brazilian version has no spices, no nuts and no cream cheese: raw carrots are blitzed with eggs and oil until silky, then folded into flour for a cake that is impossibly light and sunshine-orange inside. The chocolate glaze is poured on hot so it soaks in and sets with a thin, crackly top. Afternoon coffee was invented for this.',
    'Esqueça o carrot cake. A versão brasileira não leva especiarias, nozes nem cream cheese: a cenoura crua é batida no liquidificador com ovos e óleo até virar um creme liso e depois misturada à farinha, para um bolo levíssimo e laranjinha por dentro. A calda de chocolate vai quente, penetra no bolo e forma uma casquinha fina. O café da tarde foi inventado para ele.',
  ),
  yieldNote: t('One 20 × 30 cm cake, 12 squares.', 'Uma forma de 20 × 30 cm, 12 pedaços.'),
  ingredientGroups: [
    {
      title: t('For the cake', 'Para o bolo'),
      items: [
        { amount: 3, name: t('medium carrots (about 300 g)', 'cenouras médias (cerca de 300 g)'), note: t('peeled and roughly chopped', 'descascadas e picadas') },
        { amount: 3, name: t('eggs', 'ovos') },
        { amount: 200, unit: 'ml', name: t('neutral oil', 'óleo') },
        { amount: 300, unit: 'g', name: t('sugar', 'açúcar') },
        { amount: 280, unit: 'g', name: t('plain flour', 'farinha de trigo') },
        { amount: 1, unit: 'tbsp', name: t('baking powder', 'fermento químico em pó') },
        { amount: 1, unit: 'pinch', name: t('fine salt', 'sal') },
      ],
    },
    {
      title: t('For the chocolate glaze', 'Para a cobertura'),
      items: [
        { amount: 60, unit: 'g', name: t('cocoa powder', 'chocolate em pó'), note: t('or 100 g 50% chocolate powder', 'ou 100 g de chocolate em pó 50%') },
        { amount: 150, unit: 'g', name: t('sugar', 'açúcar') },
        { amount: 100, unit: 'ml', name: t('whole milk', 'leite') },
        { amount: 30, unit: 'g', name: t('butter', 'manteiga') },
      ],
    },
  ],
  steps: [
    {
      title: t('Blend the wet ingredients', 'Bata no liquidificador'),
      body: t(
        'Heat the oven to 180 °C and grease a 20 × 30 cm tin. Blend the carrots, eggs and oil for 2–3 minutes until completely smooth, then add the sugar and blend for 30 seconds more.',
        'Preaqueça o forno a 180 °C e unte uma forma de 20 × 30 cm. Bata no liquidificador a cenoura, os ovos e o óleo por 2–3 minutos até ficar totalmente liso, junte o açúcar e bata por mais 30 segundos.',
      ),
      minutes: 5,
      tip: t('Blend longer than you think. Any carrot specks left will sink to the bottom.', 'Bata mais do que parece necessário. Pedacinhos de cenoura afundam no bolo.'),
    },
    {
      title: t('Fold in the flour', 'Misture a farinha'),
      body: t(
        'Pour into a bowl and whisk in the flour and salt by hand until just smooth. Fold in the baking powder last.',
        'Despeje em uma tigela e misture a farinha e o sal à mão até ficar homogêneo. Por último, incorpore o fermento delicadamente.',
      ),
      minutes: 4,
    },
    {
      title: t('Bake', 'Asse'),
      body: t(
        'Pour into the tin and bake for 40–45 minutes, until golden and a skewer comes out clean.',
        'Despeje na forma e asse por 40–45 minutos, até dourar e um palito sair limpo.',
      ),
      minutes: 45,
    },
    {
      title: t('Make the glaze', 'Faça a cobertura'),
      body: t(
        'In a small pan, bring the cocoa, sugar, milk and butter to a boil, stirring, and cook for 2–3 minutes until it thickens slightly and coats a spoon.',
        'Em uma panelinha, leve o chocolate, o açúcar, o leite e a manteiga ao fogo, mexendo, e cozinhe por 2–3 minutos depois de ferver, até engrossar um pouco e cobrir a colher.',
      ),
      minutes: 6,
    },
    {
      title: t('Glaze while hot', 'Cubra ainda quente'),
      body: t(
        'Prick the warm cake all over with a fork and pour the hot glaze on top. Let it set for 20 minutes before cutting into squares.',
        'Fure o bolo ainda morno com um garfo e despeje a calda quente por cima. Deixe firmar por 20 minutos antes de cortar em quadrados.',
      ),
      minutes: 20,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'For the famous “casquinha”, cook the glaze a minute longer — it sets into a thin, crackly layer.',
        'Para a famosa casquinha, cozinhe a calda um minuto a mais — ela endurece em uma camada fininha e crocante.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Opening the oven in the first 30 minutes. The cake can sink in the middle.',
        'Abrir o forno nos primeiros 30 minutos. O bolo pode afundar no meio.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Keeps 3 days covered at room temperature, or 5 days in the fridge.',
        'Dura 3 dias coberto em temperatura ambiente, ou 5 dias na geladeira.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Plain flour', 'Farinha de trigo'),
      swap: t('gluten-free flour blend', 'mix de farinha sem glúten'),
      note: t('Add ½ tsp xanthan gum if your blend does not include it.', 'Acrescente ½ colher (chá) de goma xantana se o mix não tiver.'),
    },
    {
      original: t('Chocolate glaze', 'Cobertura de chocolate'),
      swap: t('brigadeiro frosting', 'cobertura de brigadeiro'),
      note: t('Make a soft brigadeiro and spread it on — the luxury version.', 'Faça um brigadeiro mole e espalhe por cima — a versão luxo.'),
    },
  ],
  faq: [
    {
      question: t('Why is my cake dense?', 'Por que meu bolo ficou pesado?'),
      answer: t(
        'Usually overmixing after the flour, or old baking powder. Mix the flour by hand, just until combined.',
        'Geralmente por bater demais depois da farinha ou por fermento velho. Misture a farinha à mão, só até incorporar.',
      ),
    },
    {
      question: t('Can I make it in a bundt tin?', 'Posso fazer em forma de furo no meio?'),
      answer: t(
        'Yes — grease and flour it well and bake for about 50 minutes.',
        'Pode — unte e enfarinhe bem e asse por cerca de 50 minutos.',
      ),
    },
  ],
  nutrition: { calories: 410, protein: 5, carbohydrates: 58, fat: 18, fiber: 2, sodium: 160 },
  keywords: tl(
    ['Brazilian carrot cake', 'chocolate glaze', 'blender cake', 'afternoon coffee'],
    ['bolo de cenoura', 'cobertura de chocolate', 'bolo de liquidificador', 'café da tarde'],
  ),
};
