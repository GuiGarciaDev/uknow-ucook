import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/escondidinho-de-carne-seca/hero.jpg';
import ingredients from '../../assets/recipes/escondidinho-de-carne-seca/ingredients.jpg';
import finalDish from '../../assets/recipes/escondidinho-de-carne-seca/final.jpg';

export const escondidinhoDeCarneSeca: RecipeSource = {
  slug: 'escondidinho-de-carne-seca',
  categories: ['lunch', 'dinner'],
  cuisines: ['brazilian'],
  diets: ['gluten-free'],
  mainIngredients: ['beef', 'cheese'],
  difficulty: 'medium',
  prepMinutes: 30,
  cookMinutes: 60,
  restMinutes: 720,
  servings: 6,
  rating: { value: 4.8, count: 1046 },
  popularity: 7910,
  datePublished: '2026-05-23',
  dateModified: '2026-09-12',
  author: authors.marina,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Ezalvarenga', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Escondidinho_de_camar%C3%A3o.jpg' },
      alt: t('A bowl of escondidinho with a golden cheesy crust on a bar table in warm light', 'Cumbuca de escondidinho com crosta dourada de queijo em mesa de bar, sob luz quente'),
      caption: t('Escondidinho, the boteco favourite.', 'Escondidinho, o queridinho do boteco.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'OnyekeEjike', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Cassava_Processing_Machine_3.jpg' },
      alt: t('Peeled cassava roots', 'Raízes de mandioca descascadas'),
      caption: t('Cassava becomes the creamy purée.', 'A mandioca vira o purê cremoso.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Jrobal0', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Calulu_de_carne_seca.JPG' },
      alt: t('Cassava purée with shredded carne seca on a clay plate beside a glass of beer', 'Purê de mandioca com carne-seca desfiada em prato de barro ao lado de um copo de cerveja'),
      caption: t('Carne seca and cassava, a north-eastern pairing.', 'Carne-seca e mandioca, dupla nordestina.'),
    },
  },

  title: t('Cassava and Dried Beef Bake', 'Escondidinho de Carne-Seca'),
  description: t(
    'Shredded Brazilian dried beef “hidden” under a silky cassava purée and a blanket of golden, bubbling cheese.',
    'Carne-seca desfiada “escondida” sob um purê sedoso de mandioca e uma camada de queijo dourado e borbulhante.',
  ),
  headnote: t(
    'Think of escondidinho as Brazil’s answer to shepherd’s pie — only the potatoes are replaced by cassava, which makes a purée that is somehow creamier and more comforting. The name means “little hidden one”, because the savoury filling hides under the top. It is a north-eastern classic that has become a favourite in bars across the whole country.',
    'Pense no escondidinho como a resposta brasileira ao escondidinho inglês — só que a batata dá lugar à mandioca, que vira um purê ainda mais cremoso e reconfortante. O nome vem do recheio que fica escondido embaixo da cobertura. É um clássico nordestino que virou queridinho de botecos do país inteiro.',
  ),
  ingredientGroups: [
    {
      title: t('For the filling', 'Para o recheio'),
      items: [
        { amount: 600, unit: 'g', name: t('carne seca (dried beef)', 'carne-seca'), note: t('soaked overnight, water changed 3 times', 'dessalgada de véspera, trocando a água 3 vezes') },
        { amount: 2, unit: 'tbsp', name: t('butter', 'manteiga de garrafa ou manteiga') },
        { amount: 1, name: t('large onion', 'cebola grande'), note: t('sliced', 'fatiada') },
        { amount: 3, unit: 'clove', name: t('garlic', 'alho'), note: t('minced', 'picado') },
        { amount: 2, name: t('tomatoes', 'tomates'), note: t('diced', 'em cubos') },
        { amount: 1, unit: 'handful', name: t('coriander or parsley', 'coentro ou salsinha'), note: t('chopped', 'picado') },
      ],
    },
    {
      title: t('For the cassava purée', 'Para o purê de mandioca'),
      items: [
        { amount: 1.2, unit: 'kg', name: t('cassava (fresh or frozen)', 'mandioca (fresca ou congelada)'), note: t('peeled, woody core removed', 'descascada, sem o fio central') },
        { amount: 250, unit: 'ml', name: t('whole milk', 'leite integral'), note: t('warm', 'morno') },
        { amount: 40, unit: 'g', name: t('butter', 'manteiga') },
        { amount: 150, unit: 'g', name: t('requeijão or cream cheese', 'requeijão cremoso') },
        { amount: 1, unit: 'pinch', name: t('nutmeg', 'noz-moscada') },
      ],
    },
    {
      title: t('For the topping', 'Para a cobertura'),
      items: [
        { amount: 150, unit: 'g', name: t('mozzarella or queijo coalho', 'mussarela ou queijo coalho'), note: t('grated', 'ralado') },
        { amount: 30, unit: 'g', name: t('Parmesan', 'parmesão'), note: t('grated', 'ralado') },
      ],
    },
  ],
  steps: [
    {
      title: t('Cook and shred the beef', 'Cozinhe e desfie a carne'),
      body: t(
        'Pressure-cook the soaked carne seca in fresh water for 30 minutes (or simmer for 1½ hours) until it falls apart. Drain and shred finely with two forks.',
        'Cozinhe a carne-seca dessalgada em água limpa na pressão por 30 minutos (ou 1h30 em panela comum) até desmanchar. Escorra e desfie bem com dois garfos.',
      ),
      minutes: 35,
    },
    {
      title: t('Sauté the filling', 'Refogue o recheio'),
      body: t(
        'Melt the butter, cook the onion until soft and golden, add the garlic, then the beef and tomatoes. Cook for 8 minutes until juicy but not wet. Stir in the herbs.',
        'Derreta a manteiga, refogue a cebola até dourar, junte o alho, depois a carne e o tomate. Cozinhe por 8 minutos, até ficar suculento mas não molhado. Misture as ervas.',
      ),
      minutes: 12,
    },
    {
      title: t('Make the purée', 'Faça o purê'),
      body: t(
        'Boil the cassava in salted water for 20–25 minutes until very tender. Drain, remove any fibrous cores and mash with the warm milk, butter, requeijão and nutmeg until silky.',
        'Cozinhe a mandioca em água com sal por 20–25 minutos, até ficar bem macia. Escorra, tire os fiapos e amasse com o leite morno, a manteiga, o requeijão e a noz-moscada até ficar sedoso.',
      ),
      minutes: 30,
      tip: t('Mash cassava while it is hot — it turns gluey as it cools.', 'Amasse a mandioca ainda quente — ela fica puxa-puxa quando esfria.'),
    },
    {
      title: t('Layer it up', 'Monte as camadas'),
      body: t(
        'Spread the beef in a 20 × 30 cm baking dish, cover with the purée, and scatter the mozzarella and Parmesan on top.',
        'Espalhe a carne em um refratário de 20 × 30 cm, cubra com o purê e espalhe a mussarela e o parmesão por cima.',
      ),
      minutes: 5,
    },
    {
      title: t('Bake until golden', 'Gratine'),
      body: t(
        'Bake at 200 °C for 20 minutes, until the cheese is bubbling and spotted brown. Rest for 5 minutes before serving.',
        'Asse a 200 °C por 20 minutos, até o queijo borbulhar e dourar. Deixe descansar 5 minutos antes de servir.',
      ),
      minutes: 25,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Use manteiga de garrafa (clarified “bottle butter” from the north-east) in the filling for an authentic nutty flavour.',
        'Use manteiga de garrafa no refogado para o sabor autêntico do sertão.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'Never eat cassava raw. Always boil it until completely tender.',
        'Nunca coma mandioca crua. Sempre cozinhe até ficar completamente macia.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Assemble up to a day ahead and refrigerate unbaked. Leftovers keep for 3 days.',
        'Dá para montar na véspera e guardar cru na geladeira. A sobra dura 3 dias.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Carne seca', 'Carne-seca'),
      swap: t('shredded chicken or leftover pot roast', 'frango desfiado ou sobra de carne de panela'),
      note: t('Escondidinho de frango is equally popular.', 'Escondidinho de frango é tão popular quanto.'),
    },
    {
      original: t('Cassava', 'Mandioca'),
      swap: t('potato or sweet potato', 'batata ou batata-doce'),
      note: t('Reduce the milk a little, as potatoes absorb less.', 'Use um pouco menos de leite, porque a batata absorve menos.'),
    },
  ],
  faq: [
    {
      question: t('Can I use frozen cassava?', 'Posso usar mandioca congelada?'),
      answer: t(
        'Yes, it is already peeled and works perfectly. Boil straight from frozen.',
        'Pode, ela já vem descascada e funciona perfeitamente. Cozinhe direto do congelador.',
      ),
    },
    {
      question: t('My purée is stringy. What happened?', 'Meu purê ficou com fiapos. O que houve?'),
      answer: t(
        'Cassava has a woody central cord. Remove it after boiling, and push the purée through a sieve if needed.',
        'A mandioca tem um fio central lenhoso. Retire depois de cozinhar e, se precisar, passe o purê na peneira.',
      ),
    },
  ],
  nutrition: { calories: 610, protein: 38, carbohydrates: 56, fat: 25, fiber: 4, sodium: 1080 },
  keywords: tl(
    ['escondidinho', 'cassava bake', 'Brazilian comfort food', 'dried beef'],
    ['escondidinho', 'carne-seca', 'purê de mandioca', 'comida de boteco'],
  ),
};
