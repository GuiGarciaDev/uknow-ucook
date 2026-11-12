import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/pizza-margherita/hero.jpg';
import ingredients from '../../assets/recipes/pizza-margherita/ingredients.jpg';
import finalDish from '../../assets/recipes/pizza-margherita/final.jpg';

export const pizzaMargherita: RecipeSource = {
  slug: 'pizza-margherita',
  categories: ['dinner'],
  cuisines: ['italian'],
  diets: ['vegetarian'],
  mainIngredients: ['cheese'],
  difficulty: 'medium',
  prepMinutes: 30,
  cookMinutes: 10,
  restMinutes: 1440,
  servings: 4,
  rating: { value: 4.8, count: 2215 },
  popularity: 12370,
  datePublished: '2026-03-14',
  dateModified: '2026-10-09',
  author: authors.lucas,
  images: {
    hero: {
      src: hero,
      credit: { author: 'ノボホショコロトソ', license: 'CC BY 4.0', source: 'https://commons.wikimedia.org/wiki/File:Pizza_Margherita_%E3%83%94%E3%82%B6%E3%83%BB%E3%83%9E%E3%83%AB%E3%82%B2%E3%83%AA%E3%83%BC%E3%82%BF.jpg' },
      alt: t('A margherita pizza topped with fresh basil leaves', 'Pizza margherita coberta com folhas de manjericão fresco'),
      caption: t('Tomato, mozzarella, basil.', 'Tomate, mussarela e manjericão.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Rainer Zenz', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Caprese-1.jpg' },
      alt: t('Slices of tomato and mozzarella with basil leaves on a plate', 'Fatias de tomate e mussarela com folhas de manjericão em um prato'),
      caption: t('The three colours of the Italian flag.', 'As três cores da bandeira italiana.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Lombroso', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Pizza_Margherita_().JPG' },
      alt: t('A Neapolitan-style margherita with a blistered crust', 'Margherita estilo napolitano com borda cheia de bolhas'),
      caption: t('A blistered, airy rim.', 'Borda aerada e cheia de bolhas.'),
    },
  },

  title: t('Homemade Pizza Margherita', 'Pizza Margherita Caseira'),
  description: t(
    'A slow-fermented dough stretched thin, topped with crushed San Marzano tomatoes, fresh mozzarella and basil, and baked as hot as your oven goes.',
    'Massa de fermentação lenta aberta bem fina, com tomate pelado amassado, mussarela fresca e manjericão, assada no forno mais quente possível.',
  ),
  headnote: t(
    'Margherita is the pizza with nowhere to hide: dough, tomato, cheese, basil. That is why the dough matters most. Using very little yeast and a full day in the fridge gives a crust that is airy, blistered and deeply flavoured. A pizza stone or upturned heavy tray, preheated for 45 minutes, is the home oven’s best impression of a wood-fired one.',
    'A margherita é a pizza que não tem onde se esconder: massa, tomate, queijo e manjericão. Por isso a massa é o que mais importa. Pouquíssimo fermento e um dia inteiro na geladeira dão uma borda aerada, cheia de bolhas e muito saborosa. Uma pedra de pizza ou uma assadeira pesada virada, preaquecida por 45 minutos, é a melhor imitação doméstica do forno a lenha.',
  ),
  yieldNote: t('4 pizzas of about 28 cm.', '4 pizzas de cerca de 28 cm.'),
  ingredientGroups: [
    {
      title: t('For the dough', 'Para a massa'),
      items: [
        { amount: 500, unit: 'g', name: t('tipo 00 or bread flour', 'farinha tipo 00 ou de pão') },
        { amount: 325, unit: 'ml', name: t('cold water', 'água gelada') },
        { amount: 12, unit: 'g', name: t('fine salt', 'sal') },
        { amount: 2, unit: 'g', name: t('instant dried yeast', 'fermento biológico seco'), note: t('about ½ tsp', 'cerca de ½ colher de chá') },
      ],
    },
    {
      title: t('For the topping', 'Para a cobertura'),
      items: [
        { amount: 400, unit: 'g', name: t('canned San Marzano tomatoes', 'tomate pelado italiano'), note: t('crushed by hand', 'amassado à mão') },
        { amount: 1, unit: 'pinch', name: t('salt', 'sal') },
        { amount: 250, unit: 'g', name: t('fresh mozzarella (fior di latte)', 'mussarela de búfala ou fior di latte'), note: t('torn and drained', 'rasgada e escorrida') },
        { amount: 1, unit: 'handful', name: t('fresh basil', 'manjericão fresco') },
        { amount: 2, unit: 'tbsp', name: t('extra-virgin olive oil', 'azeite extravirgem') },
      ],
    },
  ],
  steps: [
    {
      title: t('Mix the dough', 'Faça a massa'),
      body: t(
        'Mix the flour, yeast and water until shaggy, rest 20 minutes, add the salt and knead for 8–10 minutes until smooth and elastic.',
        'Misture a farinha, o fermento e a água até formar uma massa grosseira, descanse 20 minutos, junte o sal e sove por 8–10 minutos, até ficar lisa e elástica.',
      ),
      minutes: 30,
    },
    {
      title: t('Cold-ferment', 'Fermente na geladeira'),
      body: t(
        'Divide into 4 balls, place in a lightly oiled covered container and refrigerate for 24–48 hours. Take out 2 hours before baking.',
        'Divida em 4 bolas, coloque em um pote levemente untado e tampado e leve à geladeira por 24–48 horas. Retire 2 horas antes de assar.',
      ),
      minutes: 1440,
      tip: t('The long, cold rest develops flavour and makes the dough easy to stretch.', 'O descanso longo e frio desenvolve sabor e deixa a massa fácil de abrir.'),
    },
    {
      title: t('Preheat hard', 'Preaqueça bem'),
      body: t(
        'Put a pizza stone or heavy upturned tray on the top shelf and heat the oven to its maximum (250–280 °C) for at least 45 minutes.',
        'Coloque a pedra de pizza ou uma assadeira pesada virada na grade de cima e aqueça o forno na temperatura máxima (250–280 °C) por pelo menos 45 minutos.',
      ),
      minutes: 45,
    },
    {
      title: t('Stretch and top', 'Abra e cubra'),
      body: t(
        'On a floured surface, press each ball out from the centre with your fingertips, leaving a 2 cm rim, and stretch to 28 cm. Spread with 3–4 tablespoons of salted tomato and scatter with mozzarella.',
        'Em superfície enfarinhada, abra cada bola com as pontas dos dedos do centro para fora, deixando uma borda de 2 cm, até 28 cm. Espalhe 3–4 colheres de tomate temperado com sal e distribua a mussarela.',
      ),
      minutes: 3,
    },
    {
      title: t('Bake', 'Asse'),
      body: t(
        'Slide onto the stone and bake for 7–9 minutes, until the crust is blistered and the cheese bubbling. Finish with basil and a drizzle of olive oil.',
        'Deslize sobre a pedra e asse por 7–9 minutos, até a borda criar bolhas e o queijo borbulhar. Finalize com manjericão e um fio de azeite.',
      ),
      minutes: 9,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'mistake',
      text: t(
        'Using a rolling pin. It pushes out all the air — stretch by hand to keep the rim puffy.',
        'Usar rolo de massa. Ele expulsa todo o ar — abra com as mãos para a borda crescer.',
      ),
    },
    {
      type: 'chef',
      text: t(
        'Squeeze the mozzarella in a towel before using: wet cheese makes a soggy centre.',
        'Esprema a mussarela em um pano antes de usar: queijo molhado deixa o centro encharcado.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Dough balls freeze for 2 months; thaw overnight in the fridge.',
        'As bolas de massa congelam por 2 meses; descongele na geladeira de um dia para o outro.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('24-hour cold ferment', 'Fermentação de 24 horas'),
      swap: t('same-day dough with 7 g yeast', 'massa no mesmo dia com 7 g de fermento'),
      note: t('Rise 2 hours at room temperature — less flavour, still good.', 'Cresce 2 horas em temperatura ambiente — menos sabor, ainda boa.'),
    },
    {
      original: t('Pizza stone', 'Pedra de pizza'),
      swap: t('cast-iron pan + grill', 'frigideira de ferro + gratinador'),
      note: t('Cook the base on the hob, then finish under the grill.', 'Doure a base no fogão e termine no gratinador.'),
    },
  ],
  faq: [
    {
      question: t('Why is my base soggy?', 'Por que minha pizza ficou mole no meio?'),
      answer: t(
        'Too much sauce, wet mozzarella, or an oven that wasn’t hot enough. Less is more on a margherita.',
        'Molho demais, mussarela molhada ou forno pouco quente. Na margherita, menos é mais.',
      ),
    },
  ],
  nutrition: { calories: 610, protein: 25, carbohydrates: 92, fat: 16, fiber: 4, sodium: 1260 },
  keywords: tl(
    ['pizza margherita', 'homemade pizza', 'Neapolitan pizza', 'pizza dough'],
    ['pizza margherita', 'pizza caseira', 'massa de pizza', 'pizza napolitana'],
  ),
};
