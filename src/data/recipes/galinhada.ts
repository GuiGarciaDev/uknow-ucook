import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/galinhada/hero.jpg';
import ingredients from '../../assets/recipes/galinhada/ingredients.jpg';
import finalDish from '../../assets/recipes/galinhada/final.jpg';

export const galinhada: RecipeSource = {
  slug: 'galinhada',
  categories: ['lunch', 'dinner'],
  cuisines: ['brazilian'],
  diets: ['gluten-free', 'dairy-free'],
  mainIngredients: ['chicken', 'rice'],
  difficulty: 'easy',
  prepMinutes: 20,
  cookMinutes: 45,
  servings: 6,
  rating: { value: 4.7, count: 846 },
  popularity: 6380,
  datePublished: '2026-04-18',
  dateModified: '2026-09-02',
  author: authors.theo,
  images: {
    hero: {
      src: hero,
      credit: { author: 'iurikothe', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Galinhada_com_pequi.jpg' },
      alt: t('A large pot of golden galinhada, chicken and rice', 'Panela grande de galinhada amarelinha, com frango e arroz'),
      caption: t('One pot, a whole table fed.', 'Uma panela, a mesa inteira servida.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Simon A. Eugster', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Curcuma_longa_roots.jpg' },
      alt: t('Fresh turmeric root beside ground turmeric', 'Raiz de cúrcuma fresca ao lado de cúrcuma em pó'),
      caption: t('Açafrão-da-terra gives the golden colour.', 'O açafrão-da-terra dá a cor dourada.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Márcia Cristina Machado', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Prato_de_galinhada.jpg' },
      alt: t('A plate of yellow rice with pieces of chicken', 'Prato de arroz amarelo com pedaços de frango'),
      caption: t('Serve with chopped herbs.', 'Sirva com cheiro-verde.'),
    },
  },

  title: t('Galinhada: Golden Chicken and Rice', 'Galinhada Goiana'),
  description: t(
    'One-pot chicken and rice from Goiás, stained golden with turmeric and finished with parsley, spring onion and pequi if you can find it.',
    'Frango e arroz cozidos na mesma panela, amarelinhos de açafrão-da-terra, com cheiro-verde — e pequi, se você for de Goiás.',
  ),
  headnote: t(
    'Galinhada is the comfort food of Brazil’s central plateau: bone-in chicken browned hard, then simmered with rice until every grain is soaked in the juices and coloured gold by açafrão-da-terra (turmeric). It is a cousin of paella and arroz con pollo, made in one big pot for a crowd. In Goiás it often carries pequi, a pungent local fruit — but it is wonderful without.',
    'A galinhada é a comida afetiva do Centro-Oeste: frango com osso bem dourado e depois cozido com o arroz até cada grão absorver o caldo e ficar amarelo com açafrão-da-terra. É prima da paella e do arroz con pollo, feita em panelão para muita gente. Em Goiás costuma levar pequi — mas fica maravilhosa sem ele também.',
  ),
  ingredientGroups: [
    {
      title: t('For the chicken', 'Para o frango'),
      items: [
        { amount: 1.2, unit: 'kg', name: t('chicken thighs and drumsticks', 'coxas e sobrecoxas de frango'), note: t('bone-in', 'com osso') },
        { amount: 1, name: t('lime', 'limão'), note: t('juiced', 'o suco') },
        { amount: 3, unit: 'clove', name: t('garlic', 'alho'), note: t('crushed', 'amassado') },
        { amount: 2, unit: 'tsp', name: t('fine salt', 'sal') },
        { amount: 2, unit: 'tbsp', name: t('vegetable oil', 'óleo') },
      ],
    },
    {
      title: t('For the rice', 'Para o arroz'),
      items: [
        { amount: 1, name: t('onion', 'cebola'), note: t('chopped', 'picada') },
        { amount: 1, name: t('tomato', 'tomate'), note: t('chopped', 'picado') },
        { amount: 1, name: t('green bell pepper', 'pimentão verde'), note: t('diced', 'em cubos') },
        { amount: 2, unit: 'tsp', name: t('ground turmeric (açafrão-da-terra)', 'açafrão-da-terra (cúrcuma)') },
        { amount: 400, unit: 'g', name: t('long-grain white rice', 'arroz agulhinha') },
        { amount: 1, unit: 'l', name: t('hot water or chicken stock', 'água quente ou caldo de frango') },
        { amount: 1, unit: 'cup', name: t('corn kernels', 'milho verde'), note: t('optional', 'opcional') },
        { amount: 1, unit: 'handful', name: t('parsley and spring onion', 'cheiro-verde'), note: t('chopped', 'picado') },
      ],
    },
  ],
  steps: [
    {
      title: t('Marinate the chicken', 'Tempere o frango'),
      body: t(
        'Rub the chicken with lime juice, garlic and salt and leave for 15 minutes (or overnight in the fridge).',
        'Tempere o frango com o suco de limão, o alho e o sal e deixe por 15 minutos (ou de um dia para o outro na geladeira).',
      ),
      minutes: 15,
    },
    {
      title: t('Brown it deeply', 'Doure bem'),
      body: t(
        'Heat the oil in a large heavy pot and brown the chicken well on all sides, 10–12 minutes, adding splashes of water to lift the brown bits when they stick.',
        'Aqueça o óleo em uma panela grande e pesada e doure bem o frango por todos os lados, 10–12 minutos, pingando água para soltar o fundinho quando grudar.',
      ),
      minutes: 12,
      tip: t('Those brown bits on the bottom are the flavour of the whole dish. Take your time here.', 'Esse fundinho dourado é o sabor do prato inteiro. Não tenha pressa aqui.'),
    },
    {
      title: t('Add the vegetables and rice', 'Junte os legumes e o arroz'),
      body: t(
        'Add the onion, tomato, pepper and turmeric and cook for 3 minutes. Stir in the rice and toast for 2 minutes until coated and golden.',
        'Junte a cebola, o tomate, o pimentão e o açafrão e refogue por 3 minutos. Acrescente o arroz e frite por 2 minutos, até envolver e ficar amarelo.',
      ),
      minutes: 5,
    },
    {
      title: t('Simmer', 'Cozinhe'),
      body: t(
        'Pour in the hot water and corn, bring to a boil, then cover and cook over low heat for 18–20 minutes until the rice is tender and just a little moist.',
        'Despeje a água quente e o milho, deixe ferver, tampe e cozinhe em fogo baixo por 18–20 minutos, até o arroz ficar macio e ainda levemente úmido.',
      ),
      minutes: 20,
    },
    {
      title: t('Rest and finish', 'Descanse e finalize'),
      body: t(
        'Turn off the heat, rest covered for 5 minutes, then fold in the parsley and spring onion and serve from the pot.',
        'Desligue o fogo, deixe descansar tampado por 5 minutos, misture o cheiro-verde e sirva direto da panela.',
      ),
      minutes: 5,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'If you find pequi, add 4–5 fruits with the rice. Never bite into it: scrape the pulp gently with your teeth — the stone is covered in spines.',
        'Se achar pequi, junte 4–5 frutos com o arroz. Nunca morda: raspe a polpa com os dentes, devagar — o caroço tem espinhos.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Stirring while the rice cooks. It breaks the grains and turns the galinhada mushy.',
        'Mexer enquanto o arroz cozinha. Os grãos quebram e a galinhada vira papa.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Keeps 3 days in the fridge. Reheat with a splash of water in a covered pan.',
        'Dura 3 dias na geladeira. Reaqueça com um pouco de água em panela tampada.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Turmeric', 'Açafrão-da-terra'),
      swap: t('a pinch of saffron or annatto (colorau)', 'uma pitada de açafrão verdadeiro ou colorau'),
      note: t('Colorau gives a redder, earthier colour.', 'O colorau dá uma cor mais avermelhada.'),
    },
    {
      original: t('Bone-in chicken', 'Frango com osso'),
      swap: t('boneless thighs', 'sobrecoxa desossada'),
      note: t('Quicker to eat, slightly less rich — use stock instead of water.', 'Mais prático de comer e um pouco menos saboroso — use caldo em vez de água.'),
    },
  ],
  faq: [
    {
      question: t('Is “açafrão” the same as saffron?', 'Açafrão é a mesma coisa que açafrão-da-terra?'),
      answer: t(
        'In Brazil, “açafrão” usually means turmeric (açafrão-da-terra). Real saffron is rare and expensive in home cooking.',
        'No Brasil, “açafrão” quase sempre quer dizer cúrcuma (açafrão-da-terra). O açafrão verdadeiro é raro e caro na cozinha de casa.',
      ),
    },
  ],
  nutrition: { calories: 560, protein: 34, carbohydrates: 58, fat: 20, fiber: 3, sodium: 760 },
  keywords: tl(
    ['galinhada', 'Brazilian chicken and rice', 'one-pot chicken', 'turmeric rice'],
    ['galinhada', 'galinhada goiana', 'arroz com frango', 'pequi'],
  ),
};
