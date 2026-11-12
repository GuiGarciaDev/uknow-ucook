import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/coxinha/hero.jpg';
import ingredients from '../../assets/recipes/coxinha/ingredients.jpg';
import finalDish from '../../assets/recipes/coxinha/final.jpg';

export const coxinha: RecipeSource = {
  slug: 'coxinha',
  categories: ['snack'],
  cuisines: ['brazilian'],
  diets: [],
  mainIngredients: ['chicken'],
  difficulty: 'hard',
  prepMinutes: 60,
  cookMinutes: 45,
  restMinutes: 30,
  servings: 10,
  rating: { value: 4.8, count: 2210 },
  popularity: 13110,
  datePublished: '2026-06-02',
  dateModified: '2026-09-30',
  author: authors.theo,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Horacio Cambeiro', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Coxinhas_made_in_Puerto_Iguaz%C3%BA,_Misiones,_Argentina.jpg' },
      alt: t('Rows of golden teardrop-shaped coxinhas on a bakery counter', 'Fileiras de coxinhas douradas em formato de gota no balcão de uma padaria'),
      caption: t('The bakery-counter classic.', 'A clássica do balcão da padaria.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'kakyusei', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Raw_chicken_slices.jpg' },
      alt: t('Raw chicken breasts on a white plate', 'Peitos de frango crus em um prato branco'),
      caption: t('Poached and shredded, chicken becomes the filling.', 'Cozido e desfiado, o frango vira o recheio.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Sintegrity', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Coxinha_-_iguaria_brasileira_03.jpg' },
      alt: t('A single coxinha on a paper napkin on a plate', 'Uma coxinha sobre um guardanapo de papel em um prato'),
      caption: t('Eat it hot, with a napkin.', 'Coma quente, no guardanapo.'),
    },
  },

  title: t('Chicken Coxinha', 'Coxinha de Frango'),
  description: t(
    'Brazil’s favourite bar snack: a teardrop of soft dough filled with creamy shredded chicken, breaded and fried until golden.',
    'O salgado mais amado do Brasil: massa macia em formato de gota, recheio cremoso de frango desfiado, empanada e frita até dourar.',
  ),
  headnote: t(
    'Every Brazilian bakery has a glass case of coxinhas, and every Brazilian has an opinion about them. The dough is the surprise: it is cooked in the chicken broth, so it tastes of chicken all the way through. Shaping takes a little practice — the first three will look like mice, the next ten like drumsticks, which is exactly what “coxinha” means.',
    'Toda padaria brasileira tem uma vitrine de coxinhas, e todo brasileiro tem uma opinião sobre elas. A massa é o pulo do gato: ela é cozida no próprio caldo do frango, então tem gosto de frango de ponta a ponta. Modelar exige um pouco de prática — as três primeiras vão parecer ratinhos, as dez seguintes, coxinhas de verdade.',
  ),
  yieldNote: t('About 30 medium coxinhas (3 per serving).', 'Cerca de 30 coxinhas médias (3 por porção).'),
  ingredientGroups: [
    {
      title: t('For the filling', 'Para o recheio'),
      items: [
        { amount: 700, unit: 'g', name: t('boneless chicken breast', 'peito de frango sem osso') },
        { amount: 1.5, unit: 'l', name: t('water', 'água') },
        { amount: 1, name: t('chicken stock cube', 'tablete de caldo de galinha'), note: t('optional', 'opcional') },
        { amount: 2, unit: 'tbsp', name: t('olive oil', 'azeite') },
        { amount: 1, name: t('onion', 'cebola'), note: t('finely chopped', 'picada') },
        { amount: 2, unit: 'clove', name: t('garlic', 'alho'), note: t('minced', 'picado') },
        { amount: 2, unit: 'tbsp', name: t('tomato paste', 'extrato de tomate') },
        { amount: 150, unit: 'g', name: t('requeijão or cream cheese', 'requeijão cremoso') },
        { amount: 1, unit: 'handful', name: t('parsley and spring onion', 'cheiro-verde'), note: t('chopped', 'picado') },
      ],
    },
    {
      title: t('For the dough', 'Para a massa'),
      items: [
        { amount: 1, unit: 'l', name: t('chicken cooking broth (reserved)', 'caldo do cozimento do frango (reservado)') },
        { amount: 30, unit: 'g', name: t('butter', 'manteiga') },
        { amount: 500, unit: 'g', name: t('plain flour', 'farinha de trigo') },
      ],
    },
    {
      title: t('For breading and frying', 'Para empanar e fritar'),
      items: [
        { amount: 2, name: t('eggs', 'ovos'), note: t('beaten with a splash of milk', 'batidos com um pouco de leite') },
        { amount: 200, unit: 'g', name: t('fine breadcrumbs', 'farinha de rosca') },
        { amount: 1.5, unit: 'l', name: t('oil for deep-frying', 'óleo para fritar') },
      ],
    },
  ],
  steps: [
    {
      title: t('Poach the chicken', 'Cozinhe o frango'),
      body: t(
        'Simmer the chicken in the water with the stock cube for 20 minutes until cooked. Lift it out and reserve exactly 1 litre of the broth for the dough.',
        'Cozinhe o frango na água com o caldo por 20 minutos. Retire e reserve exatamente 1 litro do caldo para a massa.',
      ),
      minutes: 25,
    },
    {
      title: t('Make the filling', 'Prepare o recheio'),
      body: t(
        'Shred the chicken finely. Sauté the onion and garlic in olive oil, add the tomato paste and chicken and cook for 5 minutes. Off the heat, stir in the requeijão and herbs. Season and let cool completely.',
        'Desfie bem o frango. Refogue a cebola e o alho no azeite, junte o extrato de tomate e o frango e cozinhe por 5 minutos. Fora do fogo, misture o requeijão e o cheiro-verde. Acerte o sal e deixe esfriar completamente.',
      ),
      minutes: 15,
    },
    {
      title: t('Cook the dough', 'Cozinhe a massa'),
      body: t(
        'Bring the reserved broth and butter to a boil. Add the flour all at once and stir vigorously with a wooden spoon until the dough pulls away from the pan in a smooth ball, about 3 minutes.',
        'Leve o caldo reservado e a manteiga para ferver. Despeje a farinha de uma vez e mexa vigorosamente com colher de pau até a massa desgrudar da panela em uma bola lisa, cerca de 3 minutos.',
      ),
      minutes: 5,
    },
    {
      title: t('Knead while warm', 'Sove ainda morna'),
      body: t(
        'Turn the dough onto an oiled surface and knead for 3–4 minutes, until smooth and elastic. Keep it covered with a towel so it does not dry out.',
        'Passe a massa para uma superfície untada e sove por 3–4 minutos, até ficar lisa e elástica. Mantenha coberta com um pano para não ressecar.',
      ),
      minutes: 5,
      tip: t('Smooth dough = no cracks when frying. If it tears, knead a little longer.', 'Massa lisa = coxinha que não racha na fritura. Se rasgar, sove mais um pouco.'),
    },
    {
      title: t('Shape the coxinhas', 'Modele as coxinhas'),
      body: t(
        'Take a walnut-sized piece of dough, flatten it into a cup in your palm, add a teaspoon of filling and close it, pinching the top into a teardrop. Repeat with the rest.',
        'Pegue uma porção de massa do tamanho de uma noz, abra na palma da mão formando uma concha, coloque uma colher (chá) de recheio e feche, puxando a ponta em formato de gota. Repita com o restante.',
      ),
      minutes: 35,
    },
    {
      title: t('Bread and chill', 'Empane e gele'),
      body: t(
        'Dip each coxinha in egg, then roll in breadcrumbs. Chill for 30 minutes so the coating sets.',
        'Passe cada coxinha no ovo e depois na farinha de rosca. Leve à geladeira por 30 minutos para a casquinha firmar.',
      ),
      minutes: 30,
    },
    {
      title: t('Fry until golden', 'Frite até dourar'),
      body: t(
        'Heat the oil to 175 °C and fry 4–5 at a time for 3–4 minutes, until deep golden. Drain on paper towels and serve warm with a squeeze of lime or hot sauce.',
        'Aqueça o óleo a 175 °C e frite 4–5 por vez por 3–4 minutos, até ficarem bem douradas. Escorra em papel-toalha e sirva quente, com limão ou pimenta.',
      ),
      minutes: 25,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Freeze them breaded and uncooked on a tray, then bag them. Fry straight from frozen at 165 °C for 6–7 minutes.',
        'Congele as coxinhas já empanadas e cruas em uma assadeira e depois passe para um saco. Frite direto do freezer a 165 °C por 6–7 minutos.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Using warm filling. It steams inside the dough and makes the coxinhas burst in the oil.',
        'Usar o recheio ainda quente. Ele solta vapor dentro da massa e a coxinha estoura no óleo.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'Hot oil is dangerous. Use a deep pot filled no more than halfway and never leave it unattended.',
        'Óleo quente é perigoso. Use uma panela funda preenchida até no máximo a metade e nunca a deixe sozinha.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Requeijão', 'Requeijão'),
      swap: t('Catupiry or cream cheese', 'Catupiry ou cream cheese'),
      note: t('“Coxinha com Catupiry” is a beloved upgrade.', 'A “coxinha com Catupiry” é um upgrade muito amado.'),
    },
    {
      original: t('Deep-frying', 'Fritura por imersão'),
      swap: t('air fryer at 200 °C for 15 minutes', 'air fryer a 200 °C por 15 minutos'),
      note: t('Spray with oil first. Less crunchy, still very good.', 'Borrife óleo antes. Fica menos crocante, mas muito boa.'),
    },
  ],
  faq: [
    {
      question: t('Why does my dough stick to my hands?', 'Por que a massa gruda nas mãos?'),
      answer: t(
        'Lightly oil or flour your hands, and make sure the dough was cooked until it pulled away from the pan.',
        'Unte as mãos com um pouco de óleo ou farinha, e garanta que a massa cozinhou até desgrudar da panela.',
      ),
    },
    {
      question: t('Can I make the dough with mashed potato?', 'Posso fazer a massa com batata?'),
      answer: t(
        'Yes — many cooks add 1 cooked, mashed potato to the broth for a softer, more tender dough.',
        'Pode — muita gente junta 1 batata cozida e amassada ao caldo para uma massa mais macia.',
      ),
    },
  ],
  nutrition: { calories: 430, protein: 22, carbohydrates: 44, fat: 18, fiber: 2, sodium: 690 },
  keywords: tl(
    ['coxinha', 'Brazilian chicken croquettes', 'party snacks', 'salgadinhos'],
    ['coxinha', 'coxinha de frango', 'salgadinho de festa', 'salgado frito'],
  ),
};
