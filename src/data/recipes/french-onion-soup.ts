import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/french-onion-soup/hero.jpg';
import ingredients from '../../assets/recipes/french-onion-soup/ingredients.jpg';
import finalDish from '../../assets/recipes/french-onion-soup/final.jpg';

export const frenchOnionSoup: RecipeSource = {
  slug: 'french-onion-soup',
  categories: ['dinner', 'lunch'],
  cuisines: ['french'],
  diets: [],
  mainIngredients: ['vegetables', 'cheese'],
  difficulty: 'medium',
  prepMinutes: 20,
  cookMinutes: 90,
  servings: 4,
  rating: { value: 4.8, count: 1167 },
  popularity: 7420,
  datePublished: '2026-02-08',
  dateModified: '2026-10-21',
  author: authors.theo,
  images: {
    hero: {
      src: hero,
      credit: { author: 'jeffreyw', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Mmm...onion_soup_(5344349906).jpg' },
      alt: t('A crock of French onion soup with a browned cheese crust and parsley', 'Cumbuca de sopa de cebola com crosta de queijo gratinado e salsinha'),
      caption: t('Bubbling Gruyère on top.', 'Gruyère borbulhando por cima.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Key West Wedding Photography', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:French_Onion_Soup_-_48360842832.jpg' },
      alt: t('Raw sliced onions in an orange cast-iron pot', 'Cebolas cruas fatiadas em uma panela de ferro laranja'),
      caption: t('A mountain of onions that cooks down to a cup.', 'Uma montanha de cebolas que vira uma xícara.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Key West Wedding Photography', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:French_Onion_Soup_-_48360705471.jpg' },
      alt: t('Two gratinéed soup crocks on a tray', 'Duas cumbucas de sopa gratinada em uma bandeja'),
      caption: t('Serve on plates — the bowls are hot.', 'Sirva sobre pratos — as cumbucas ficam quentes.'),
    },
  },

  title: t('French Onion Soup', 'Sopa de Cebola Francesa'),
  description: t(
    'Onions slowly caramelised to deep mahogany, simmered in beef stock and wine, and crowned with a molten Gruyère crouton.',
    'Cebolas caramelizadas devagar até ficarem cor de mogno, cozidas em caldo de carne e vinho e cobertas com torrada gratinada de gruyère.',
  ),
  headnote: t(
    'There is no shortcut to great onion soup: the flavour is built in the hour the onions spend slowly collapsing and browning in butter. Once that is done, everything else is easy — deglaze, simmer, top with bread and cheese and slide under the grill until bubbling. It is the soup Les Halles market porters ate at dawn, and it still fixes a cold night.',
    'Não existe atalho para uma boa sopa de cebola: o sabor nasce na hora em que as cebolas passam murchando e dourando devagar na manteiga. Depois disso tudo é fácil — deglaçar, cozinhar, cobrir com pão e queijo e gratinar até borbulhar. É a sopa que os carregadores do mercado Les Halles tomavam de madrugada, e ainda salva qualquer noite fria.',
  ),
  ingredientGroups: [
    {
      title: t('For the soup', 'Para a sopa'),
      items: [
        { amount: 1.2, unit: 'kg', name: t('yellow onions', 'cebolas'), note: t('halved and thinly sliced', 'cortadas ao meio e em fatias finas') },
        { amount: 50, unit: 'g', name: t('butter', 'manteiga') },
        { amount: 1, unit: 'tbsp', name: t('olive oil', 'azeite') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal') },
        { amount: 1, unit: 'tbsp', name: t('plain flour', 'farinha de trigo') },
        { amount: 150, unit: 'ml', name: t('dry white wine', 'vinho branco seco') },
        { amount: 1.2, unit: 'l', name: t('beef stock', 'caldo de carne') },
        { amount: 3, unit: 'sprig', name: t('thyme', 'tomilho') },
        { amount: 1, name: t('bay leaf', 'folha de louro') },
      ],
    },
    {
      title: t('For the topping', 'Para a cobertura'),
      items: [
        { amount: 8, unit: 'slice', name: t('baguette', 'baguete'), note: t('1.5 cm, toasted', '1,5 cm, torradas') },
        { amount: 200, unit: 'g', name: t('Gruyère or Comté', 'gruyère ou comté'), note: t('grated', 'ralado') },
      ],
    },
  ],
  steps: [
    {
      title: t('Caramelise the onions', 'Caramelize as cebolas'),
      body: t(
        'Melt the butter with the oil in a heavy pot, add the onions and salt and cook over medium-low heat for 60–70 minutes, stirring every few minutes and scraping the bottom, until deep golden brown and jammy.',
        'Derreta a manteiga com o azeite em uma panela pesada, junte as cebolas e o sal e cozinhe em fogo médio-baixo por 60–70 minutos, mexendo a cada poucos minutos e raspando o fundo, até ficarem bem douradas e com textura de geleia.',
      ),
      minutes: 70,
      tip: t('If the bottom browns too fast, add a tablespoon of water and scrape — that fond is pure flavour.', 'Se o fundo dourar rápido demais, pingue uma colher de água e raspe — esse fundinho é puro sabor.'),
    },
    {
      title: t('Deglaze and simmer', 'Deglace e cozinhe'),
      body: t(
        'Sprinkle in the flour and stir for 1 minute. Pour in the wine and scrape the pot clean, then add the stock, thyme and bay leaf and simmer for 20 minutes. Season with salt and pepper.',
        'Polvilhe a farinha e mexa por 1 minuto. Despeje o vinho raspando bem o fundo, junte o caldo, o tomilho e o louro e cozinhe por 20 minutos. Acerte o sal e a pimenta.',
      ),
      minutes: 22,
    },
    {
      title: t('Gratinate', 'Gratine'),
      body: t(
        'Heat the grill. Ladle the soup into oven-safe bowls, float two toasts on each and cover generously with cheese. Grill for 3–5 minutes until bubbling and spotted brown.',
        'Ligue o gratinador. Distribua a sopa em cumbucas que possam ir ao forno, coloque duas torradas em cada e cubra generosamente com queijo. Gratine por 3–5 minutos, até borbulhar e dourar.',
      ),
      minutes: 5,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'warning',
      text: t(
        'The bowls come out of the grill extremely hot. Serve them on plates and warn your guests.',
        'As cumbucas saem do forno muito quentes. Sirva sobre pratos e avise os convidados.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Turning up the heat to rush the onions. They burn and turn bitter instead of sweet.',
        'Aumentar o fogo para apressar as cebolas. Elas queimam e amargam em vez de adoçar.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'The soup (without topping) keeps 4 days in the fridge and freezes for 3 months.',
        'A sopa (sem cobertura) dura 4 dias na geladeira e 3 meses no freezer.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Beef stock', 'Caldo de carne'),
      swap: t('rich mushroom stock', 'caldo de cogumelos encorpado'),
      note: t('Makes it vegetarian (check your cheese is rennet-free).', 'Deixa a sopa vegetariana (confira se o queijo não usa coalho animal).'),
    },
    {
      original: t('Gruyère', 'Gruyère'),
      swap: t('mozzarella + parmesan', 'mussarela + parmesão'),
      note: t('Stretchy and salty — a fine everyday stand-in.', 'Puxa-puxa e salgado — bom substituto do dia a dia.'),
    },
  ],
  faq: [
    {
      question: t('Can I caramelise the onions in advance?', 'Posso caramelizar as cebolas antes?'),
      answer: t(
        'Yes — they keep 5 days in the fridge or 3 months frozen, which makes the soup a 30-minute job.',
        'Pode — elas duram 5 dias na geladeira ou 3 meses no freezer, e a sopa vira um preparo de 30 minutos.',
      ),
    },
  ],
  nutrition: { calories: 540, protein: 22, carbohydrates: 48, fat: 27, fiber: 5, sodium: 1320 },
  keywords: tl(
    ['French onion soup', 'soupe à l’oignon', 'caramelised onions', 'gratinéed soup'],
    ['sopa de cebola', 'sopa de cebola francesa', 'cebola caramelizada', 'sopa gratinada'],
  ),
};
