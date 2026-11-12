import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/tapioca/hero.jpg';
import ingredients from '../../assets/recipes/tapioca/ingredients.jpg';
import finalDish from '../../assets/recipes/tapioca/final.jpg';

export const tapioca: RecipeSource = {
  slug: 'tapioca',
  categories: ['breakfast', 'snack'],
  cuisines: ['brazilian'],
  diets: ['vegetarian', 'gluten-free'],
  mainIngredients: ['cheese'],
  difficulty: 'easy',
  prepMinutes: 5,
  cookMinutes: 6,
  servings: 2,
  rating: { value: 4.6, count: 1720 },
  popularity: 11240,
  datePublished: '2026-10-08',
  dateModified: '2026-10-30',
  author: authors.june,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Silvagc', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Tapioca_com_queijo_coalho_9354_orig.jpg' },
      alt: t('A folded tapioca crepe on a blue-patterned plate', 'Tapioca dobrada em um prato com estampa azul'),
      caption: t('Tapioca with cheese, ready in minutes.', 'Tapioca de queijo, pronta em minutos.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'MoRntashamL GOLD', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:HK_food_%E6%9C%A8%E8%96%AF%E7%B2%89_Pondan_brand_Tapioca_Starch_November_2022_Px3_10.jpg' },
      alt: t('A pile of white tapioca starch', 'Monte de goma de tapioca branca'),
      caption: t('Hydrated cassava starch — the only base ingredient.', 'Goma de mandioca hidratada — o único ingrediente da massa.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Anizio (Olinda) da Silva', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Tapioca_do_Alto_da_S%C3%A9_-_Olinda-PE.jpg' },
      alt: t('A tapioca crepe held in a paper napkin', 'Tapioca segurada em um guardanapo de papel'),
      caption: t('Street-stall style, in a napkin.', 'Do jeito da barraquinha, no guardanapo.'),
    },
  },

  title: t('Tapioca Crepes with Cheese and Coconut', 'Tapioca de Queijo com Coco'),
  description: t(
    'Naturally gluten-free “crepes” made from hydrated cassava starch that melt together in a dry pan — ready in five minutes.',
    'A tapioca de todo café da manhã: goma de mandioca que vira disco na frigideira seca, recheada de queijo e coco em cinco minutos.',
  ),
  headnote: t(
    'Tapioca looks like magic the first time you make it: you sprinkle what seems like damp powder into a dry pan, and a minute later it has fused into a soft, chewy disc. It comes from indigenous Brazilian cooking and is everywhere in the north-east, where street stalls fill them with everything from cheese and coconut to banana and condensed milk.',
    'A tapioca parece mágica na primeira vez: você espalha um pó úmido na frigideira seca e, um minuto depois, ele virou um disco macio e elástico. Herança da culinária indígena, ela está em todo canto do Nordeste, onde as barraquinhas recheiam com tudo — de queijo com coco a banana com leite condensado.',
  ),
  yieldNote: t('2 large tapiocas.', '2 tapiocas grandes.'),
  ingredientGroups: [
    {
      title: t('For the tapioca', 'Para a tapioca'),
      items: [
        { amount: 150, unit: 'g', name: t('hydrated tapioca starch (goma de tapioca)', 'goma de tapioca hidratada') },
        { amount: 1, unit: 'pinch', name: t('fine salt', 'sal') },
      ],
    },
    {
      title: t('For the filling', 'Para o recheio'),
      items: [
        { amount: 100, unit: 'g', name: t('queijo coalho or mozzarella', 'queijo coalho ou mussarela'), note: t('grated', 'ralado') },
        { amount: 3, unit: 'tbsp', name: t('fresh or desiccated coconut', 'coco ralado'), note: t('unsweetened', 'sem açúcar') },
        { amount: 1, unit: 'tbsp', name: t('butter', 'manteiga'), note: t('to brush', 'para pincelar') },
      ],
    },
  ],
  steps: [
    {
      title: t('Sift the starch', 'Peneire a goma'),
      body: t(
        'Rub the hydrated starch with the salt between your fingers, then push it through a sieve so it is fine and fluffy, like damp sand.',
        'Esfarele a goma com o sal entre os dedos e passe pela peneira para ficar fina e soltinha, como areia úmida.',
      ),
      minutes: 2,
      tip: t('Sifting is the step that makes the tapioca hold together — don’t skip it.', 'Peneirar é o que faz a tapioca “colar” — não pule.'),
    },
    {
      title: t('Heat a dry pan', 'Aqueça a frigideira seca'),
      body: t(
        'Heat a 22 cm non-stick pan over medium heat. No oil or butter — the starch needs a dry surface.',
        'Aqueça uma frigideira antiaderente de 22 cm em fogo médio. Sem óleo nem manteiga — a goma precisa da superfície seca.',
      ),
      minutes: 1,
    },
    {
      title: t('Spread and set', 'Espalhe e deixe firmar'),
      body: t(
        'Spread half the starch evenly over the pan with a spoon, pressing lightly. After about 1 minute the grains fuse into one disc and the edges lift.',
        'Espalhe metade da goma de forma uniforme com uma colher, pressionando de leve. Em cerca de 1 minuto os grãos se unem em um disco e as bordas se soltam.',
      ),
      minutes: 1,
    },
    {
      title: t('Fill and fold', 'Recheie e dobre'),
      body: t(
        'Flip, scatter the cheese and coconut over one half, cook for 1 more minute until the cheese starts to melt, then fold in half and brush with butter.',
        'Vire, espalhe o queijo e o coco em uma das metades, cozinhe por mais 1 minuto até o queijo começar a derreter, dobre ao meio e pincele com manteiga.',
      ),
      minutes: 2,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'For a sweet tapioca, fill with sliced banana, cinnamon and a drizzle of condensed milk.',
        'Para uma versão doce, recheie com banana fatiada, canela e um fio de leite condensado.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Spreading the starch too thick. It turns gummy in the middle — aim for 3–4 mm.',
        'Espalhar a goma grossa demais. O meio fica borrachudo — o ideal é 3–4 mm.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Hydrated starch keeps 1 week in the fridge in a sealed container. Cooked tapiocas are best eaten immediately.',
        'A goma hidratada dura 1 semana na geladeira em pote fechado. A tapioca pronta deve ser comida na hora.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Ready-hydrated starch', 'Goma pronta'),
      swap: t('500 g dry tapioca starch + 200 ml water', '500 g de polvilho doce + 200 ml de água'),
      note: t('Mix, rest 8 hours, drain any water on top, then sift.', 'Misture, descanse 8 horas, descarte a água da superfície e peneire.'),
    },
    {
      original: t('Cheese and coconut', 'Queijo e coco'),
      swap: t('scrambled egg and tomato', 'ovo mexido e tomate'),
      note: t('A protein-packed breakfast version.', 'Uma versão de café da manhã cheia de proteína.'),
    },
  ],
  faq: [
    {
      question: t('Is tapioca gluten-free?', 'Tapioca tem glúten?'),
      answer: t(
        'Yes — it is pure cassava starch. Check the packet for cross-contamination warnings if you are coeliac.',
        'Não — é amido puro de mandioca. Se for celíaco, confira na embalagem se há risco de contaminação cruzada.',
      ),
    },
    {
      question: t('Why does my tapioca crumble?', 'Por que minha tapioca esfarela?'),
      answer: t(
        'The starch is too dry or was not sifted. Sprinkle a few drops of water, rub and sift again.',
        'A goma está seca demais ou não foi peneirada. Borrife algumas gotas de água, esfarele e peneire de novo.',
      ),
    },
  ],
  nutrition: { calories: 360, protein: 11, carbohydrates: 48, fat: 14, fiber: 2, sodium: 380 },
  keywords: tl(
    ['tapioca crepe', 'gluten-free breakfast', 'cassava starch', 'Brazilian breakfast'],
    ['tapioca', 'goma de tapioca', 'café da manhã', 'sem glúten'],
  ),
};
