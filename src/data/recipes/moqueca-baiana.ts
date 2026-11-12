import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/moqueca-baiana/hero.jpg';
import ingredients from '../../assets/recipes/moqueca-baiana/ingredients.jpg';
import finalDish from '../../assets/recipes/moqueca-baiana/final.jpg';

export const moquecaBaiana: RecipeSource = {
  slug: 'moqueca-baiana',
  categories: ['lunch', 'dinner'],
  cuisines: ['brazilian'],
  diets: ['gluten-free', 'dairy-free'],
  mainIngredients: ['seafood'],
  difficulty: 'medium',
  prepMinutes: 25,
  cookMinutes: 30,
  restMinutes: 30,
  servings: 4,
  rating: { value: 4.8, count: 1532 },
  popularity: 9840,
  datePublished: '2026-07-18',
  dateModified: '2026-10-21',
  author: authors.marina,
  images: {
    hero: {
      src: hero,
      credit: { author: 'BR', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Moqueca.jpg' },
      alt: t('A pan of orange shrimp moqueca topped with fresh coriander', 'Panela de moqueca de camarão alaranjada coberta de coentro fresco'),
      caption: t('Moqueca baiana, bright with dendê.', 'Moqueca baiana, colorida pelo dendê.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Kulttuurinavigaattori', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Palm_oil_in_a_bowl.jpg' },
      alt: t('A bowl of deep-red dendê palm oil with a ladle', 'Tigela de azeite de dendê vermelho com uma concha'),
      caption: t('Dendê: the soul of Bahian cooking.', 'Dendê: a alma da cozinha baiana.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Adrian Michael', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Moqueca_S%C3%A3o_Paulo.jpg' },
      alt: t('Moqueca bubbling in a pot on the stove', 'Moqueca borbulhando na panela sobre o fogão'),
      caption: t('Simmer gently so the fish stays whole.', 'Cozinhe em fogo baixo para o peixe não desmanchar.'),
    },
  },

  title: t('Bahian Fish Moqueca', 'Moqueca Baiana de Peixe'),
  description: t(
    'A vibrant Bahian fish stew with coconut milk, dendê palm oil, peppers and tomatoes — sunshine in a clay pot.',
    'O ensopado mais solar da Bahia: peixe, leite de coco, azeite de dendê, pimentões e tomate. Um pôr do sol na panela de barro.',
  ),
  headnote: t(
    'Moqueca is proof that a great stew does not need hours. In Bahia, firm white fish is layered with onions, tomatoes and peppers, bathed in coconut milk and finished with dendê — a deep orange palm oil with a flavour like nothing else. Twenty minutes on the stove, a handful of coriander, and the kitchen smells like the beach in Salvador.',
    'A moqueca prova que um ensopado incrível não precisa de horas. Na Bahia, o peixe firme é arrumado em camadas com cebola, tomate e pimentão, banhado no leite de coco e finalizado com dendê — um azeite alaranjado de sabor inconfundível. Vinte minutos no fogo, um punhado de coentro e a cozinha fica com cheiro de praia em Salvador.',
  ),
  ingredientGroups: [
    {
      title: t('For the marinated fish', 'Para o peixe marinado'),
      items: [
        { amount: 800, unit: 'g', name: t('firm white fish steaks (sea bass, snapper or hake)', 'postas de peixe firme (robalo, badejo ou cação)') },
        { amount: 2, name: t('limes', 'limões'), note: t('juiced', 'espremidos') },
        { amount: 3, unit: 'clove', name: t('garlic', 'alho'), note: t('crushed', 'amassado') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal') },
      ],
    },
    {
      title: t('For the stew', 'Para o ensopado'),
      items: [
        { amount: 2, unit: 'tbsp', name: t('olive oil', 'azeite') },
        { amount: 2, name: t('onions', 'cebolas'), note: t('sliced into rings', 'em rodelas') },
        { amount: 1, name: t('red bell pepper', 'pimentão vermelho'), note: t('sliced into rings', 'em rodelas') },
        { amount: 1, name: t('yellow bell pepper', 'pimentão amarelo'), note: t('sliced into rings', 'em rodelas') },
        { amount: 3, name: t('ripe tomatoes', 'tomates maduros'), note: t('sliced', 'em rodelas') },
        { amount: 400, unit: 'ml', name: t('coconut milk', 'leite de coco') },
        { amount: 3, unit: 'tbsp', name: t('dendê (red palm oil)', 'azeite de dendê') },
        { amount: 1, name: t('malagueta or other small chilli', 'pimenta-malagueta'), note: t('optional', 'opcional') },
        { amount: 1, unit: 'handful', name: t('fresh coriander', 'coentro fresco'), note: t('chopped', 'picado') },
      ],
    },
  ],
  steps: [
    {
      title: t('Marinate the fish', 'Tempere o peixe'),
      body: t(
        'Rub the fish with the lime juice, garlic and salt. Cover and refrigerate for 30 minutes — no longer, or the lime starts to “cook” the fish.',
        'Tempere o peixe com o suco de limão, o alho e o sal. Cubra e leve à geladeira por 30 minutos — não mais, ou o limão começa a “cozinhar” o peixe.',
      ),
      minutes: 30,
    },
    {
      title: t('Build the layers', 'Monte as camadas'),
      body: t(
        'Drizzle the olive oil into a wide, heavy pot (a clay pot is traditional). Lay down half the onions, peppers and tomatoes, place the fish on top in a single layer, then cover with the remaining vegetables.',
        'Regue o azeite em uma panela larga e pesada (a de barro é a tradicional). Faça uma camada com metade da cebola, dos pimentões e do tomate, arrume o peixe por cima em uma só camada e cubra com o restante dos legumes.',
      ),
      minutes: 8,
      tip: t('Layering means you never need to stir — stirring breaks the fish apart.', 'As camadas fazem com que você nunca precise mexer — mexer desmancha o peixe.'),
    },
    {
      title: t('Pour and simmer', 'Regue e cozinhe'),
      body: t(
        'Pour the coconut milk over everything, add the chilli, cover and cook over medium-low heat for 15 minutes, gently shaking the pot now and then.',
        'Despeje o leite de coco por cima de tudo, junte a pimenta, tampe e cozinhe em fogo médio-baixo por 15 minutos, chacoalhando a panela de leve de vez em quando.',
      ),
      minutes: 15,
    },
    {
      title: t('Finish with dendê', 'Finalize com dendê'),
      body: t(
        'Uncover, drizzle the dendê over the surface and simmer for 5 more minutes until the sauce turns a glowing orange. Taste and adjust the salt.',
        'Destampe, regue o dendê sobre a superfície e cozinhe por mais 5 minutos, até o molho ficar laranja e brilhante. Prove e acerte o sal.',
      ),
      minutes: 5,
    },
    {
      title: t('Serve in the pot', 'Sirva na panela'),
      body: t(
        'Scatter with coriander and bring the pot straight to the table with white rice, pirão and farofa on the side.',
        'Salpique coentro e leve a panela direto à mesa, com arroz branco, pirão e farofa para acompanhar.',
      ),
      minutes: 2,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Make a quick pirão: whisk a ladle of the hot broth with 3 tablespoons of cassava flour until it forms a silky porridge.',
        'Faça um pirão rápido: misture uma concha do caldo quente com 3 colheres (sopa) de farinha de mandioca até virar um creme liso.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'Dendê is strong and can be heavy on sensitive stomachs. If it is new to you, start with 1 tablespoon.',
        'O dendê é intenso e pode pesar para estômagos sensíveis. Se for sua primeira vez, comece com 1 colher (sopa).',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Best eaten fresh. Leftovers keep for 1 day in the fridge; reheat gently without boiling.',
        'Fica melhor na hora. A sobra dura 1 dia na geladeira; requente com cuidado, sem ferver.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Fish', 'Peixe'),
      swap: t('large peeled prawns', 'camarões grandes limpos'),
      note: t('Add them in the last 5 minutes so they stay tender.', 'Junte nos últimos 5 minutos para não endurecerem.'),
    },
    {
      original: t('Dendê palm oil', 'Azeite de dendê'),
      swap: t('olive oil plus 1 tsp sweet paprika', 'azeite de oliva com 1 colher (chá) de páprica doce'),
      note: t('This makes it closer to the Espírito Santo style — still delicious.', 'Fica mais próxima da moqueca capixaba — e continua deliciosa.'),
    },
  ],
  faq: [
    {
      question: t('What is the difference between Bahian and capixaba moqueca?', 'Qual a diferença entre a moqueca baiana e a capixaba?'),
      answer: t(
        'Bahian moqueca uses coconut milk and dendê; the Espírito Santo (capixaba) version uses olive oil and annatto and no coconut. Both are cooked in clay pots.',
        'A baiana leva leite de coco e dendê; a capixaba usa azeite de oliva e urucum, sem leite de coco. As duas são feitas em panela de barro.',
      ),
    },
    {
      question: t('Which fish works best?', 'Qual peixe é melhor?'),
      answer: t(
        'Firm, white, meaty fish that holds together: sea bass, snapper, grouper, hake or even monkfish. Avoid delicate fish like sole.',
        'Peixes firmes, brancos e carnudos, que não desmancham: robalo, badejo, garoupa, cação ou tamboril. Evite peixes delicados como linguado.',
      ),
    },
  ],
  nutrition: { calories: 520, protein: 40, carbohydrates: 14, fat: 34, fiber: 4, sodium: 780 },
  keywords: tl(
    ['moqueca', 'Brazilian fish stew', 'coconut fish curry', 'Bahia'],
    ['moqueca', 'moqueca baiana', 'peixe com leite de coco', 'dendê'],
  ),
};
