import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/cuscuz-nordestino/hero.jpg';
import ingredients from '../../assets/recipes/cuscuz-nordestino/ingredients.jpg';
import finalDish from '../../assets/recipes/cuscuz-nordestino/final.jpg';

export const cuscuzNordestino: RecipeSource = {
  slug: 'cuscuz-nordestino',
  categories: ['breakfast'],
  cuisines: ['brazilian'],
  diets: ['vegetarian', 'gluten-free'],
  mainIngredients: ['eggs', 'vegetables'],
  difficulty: 'easy',
  prepMinutes: 5,
  cookMinutes: 12,
  restMinutes: 10,
  servings: 3,
  rating: { value: 4.7, count: 932 },
  popularity: 7150,
  datePublished: '2025-12-03',
  dateModified: '2026-07-14',
  author: authors.lucas,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Xandu', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:Cuscuz_2.jpg' },
      alt: t('Steamed corn cuscuz with butter on a checked tablecloth', 'Cuscuz de milho com manteiga sobre toalha xadrez'),
      caption: t('Cuscuz with melting butter.', 'Cuscuz com manteiga derretendo.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Popo le Chien', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Polenta_uncooked.jpg' },
      alt: t('A bowl of coarse corn flakes (flocão)', 'Tigela com flocão de milho'),
      caption: t('Flocão, the coarse corn flakes used for cuscuz.', 'Flocão, o milho em flocos do cuscuz.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Xandu', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:Cuscuz_1.jpg' },
      alt: t('A whole moulded cuscuz on a plate', 'Cuscuz inteiro desenformado em um prato'),
      caption: t('Turned out of the cuscuzeira.', 'Recém-saído da cuscuzeira.'),
    },
  },

  title: t('North-Eastern Steamed Corn Couscous', 'Cuscuz Nordestino'),
  description: t(
    'Fluffy steamed corn flakes, the breakfast of Brazil’s north-east — served with butter, fried eggs and a splash of milk.',
    'O café da manhã do Nordeste: flocão de milho cozido no vapor, servido com manteiga, ovo frito e um pouco de leite.',
  ),
  headnote: t(
    'Despite the name, cuscuz nordestino has nothing to do with North African semolina. It is made from flocão — coarse flakes of corn — moistened with salted water and steamed in a special two-part pot called a cuscuzeira. The result is a fragrant, crumbly cake of corn that tastes like a Sunday morning in Recife, especially with butter melting on top.',
    'Apesar do nome, o cuscuz nordestino não tem nada a ver com a sêmola do norte da África. Ele é feito de flocão de milho umedecido com água e sal e cozido no vapor na cuscuzeira. O resultado é um bolo de milho perfumado e soltinho com cara de domingo de manhã em Recife — principalmente com manteiga derretendo por cima.',
  ),
  ingredientGroups: [
    {
      title: t('For the cuscuz', 'Para o cuscuz'),
      items: [
        { amount: 250, unit: 'g', name: t('flocão (coarse corn flakes)', 'flocão de milho') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal') },
        { amount: 200, unit: 'ml', name: t('water', 'água') },
        { amount: 30, unit: 'g', name: t('butter', 'manteiga') },
      ],
    },
    {
      title: t('To serve', 'Para servir'),
      items: [
        { amount: 3, name: t('eggs', 'ovos') },
        { amount: 120, unit: 'g', name: t('queijo coalho', 'queijo coalho'), note: t('sliced and grilled', 'em fatias, grelhado') },
        { amount: 150, unit: 'ml', name: t('whole milk', 'leite integral'), note: t('warm, optional', 'morno, opcional') },
      ],
    },
  ],
  steps: [
    {
      title: t('Moisten the corn', 'Hidrate o flocão'),
      body: t(
        'Mix the corn flakes and salt, then add the water gradually, rubbing with your fingers until it looks like damp sand. Leave for 10 minutes to hydrate.',
        'Misture o flocão com o sal e vá acrescentando a água aos poucos, esfregando com os dedos até parecer areia úmida. Deixe hidratar por 10 minutos.',
      ),
      minutes: 10,
      tip: t('Squeeze a handful: it should hold its shape but crumble when you poke it.', 'Aperte um punhado: ele deve manter a forma, mas esfarelar ao toque.'),
    },
    {
      title: t('Steam', 'Cozinhe no vapor'),
      body: t(
        'Fill the bottom of the cuscuzeira with water up to the line, add the corn to the top part without pressing it down, cover and steam over medium heat for 10–12 minutes, until fragrant and steam escapes through the top.',
        'Coloque água na base da cuscuzeira até a marca, acomode o flocão na parte de cima sem apertar, tampe e cozinhe em fogo médio por 10–12 minutos, até perfumar e o vapor sair pela tampa.',
      ),
      minutes: 12,
    },
    {
      title: t('Fry the eggs and cheese', 'Frite os ovos e o queijo'),
      body: t(
        'Meanwhile, fry the eggs and grill the coalho slices in a hot pan until golden on both sides.',
        'Enquanto isso, frite os ovos e grelhe as fatias de queijo coalho em uma frigideira quente até dourarem dos dois lados.',
      ),
      minutes: 6,
    },
    {
      title: t('Unmould and serve', 'Desenforme e sirva'),
      body: t(
        'Turn the cuscuz onto a plate, top with the butter so it melts in, and serve with the eggs, cheese and a little warm milk poured over.',
        'Vire o cuscuz em um prato, coloque a manteiga por cima para derreter e sirva com os ovos, o queijo e um pouco de leite morno por cima.',
      ),
      minutes: 2,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'No cuscuzeira? Use a steamer basket lined with a clean cloth, or microwave in a covered bowl for 4 minutes.',
        'Sem cuscuzeira? Use um cesto de cozimento a vapor forrado com pano limpo, ou o micro-ondas em tigela tampada por 4 minutos.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Packing the corn down. Pressed cuscuz steams unevenly and turns dense and gummy.',
        'Apertar o flocão na cuscuzeira. O vapor não passa por igual e o cuscuz fica pesado e empapado.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Leftover cuscuz keeps 2 days. Crumble and fry it in butter with an egg — “cuscuz mexido” is a breakfast of its own.',
        'A sobra dura 2 dias. Esfarele e frite na manteiga com um ovo — o cuscuz mexido é outro café da manhã.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Fried eggs and cheese', 'Ovos e queijo'),
      swap: t('shredded carne seca or sausage', 'carne-seca desfiada ou linguiça'),
      note: t('A heartier, very traditional topping.', 'Uma cobertura mais sustanciosa e muito tradicional.'),
    },
    {
      original: t('Water', 'Água'),
      swap: t('coconut milk diluted with water', 'leite de coco diluído em água'),
      note: t('Gives a gentle coconut perfume.', 'Dá um perfume suave de coco.'),
    },
  ],
  faq: [
    {
      question: t('Can I use polenta or cornmeal?', 'Posso usar fubá ou polenta?'),
      answer: t(
        'Not really — fine cornmeal turns into a paste. Look for flocão, “flocos de milho” or arepa-style coarse corn flakes.',
        'Não muito — o fubá fino vira uma pasta. Procure flocão ou flocos de milho.',
      ),
    },
  ],
  nutrition: { calories: 430, protein: 18, carbohydrates: 52, fat: 17, fiber: 4, sodium: 640 },
  keywords: tl(
    ['cuscuz nordestino', 'Brazilian corn couscous', 'steamed corn', 'Brazilian breakfast'],
    ['cuscuz', 'cuscuz nordestino', 'flocão de milho', 'café da manhã'],
  ),
};
