import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/pad-thai/hero.jpg';
import ingredients from '../../assets/recipes/pad-thai/ingredients.jpg';
import finalDish from '../../assets/recipes/pad-thai/final.jpg';

export const padThai: RecipeSource = {
  slug: 'pad-thai',
  categories: ['dinner', 'lunch'],
  cuisines: ['asian'],
  diets: ['gluten-free', 'dairy-free'],
  mainIngredients: ['seafood', 'eggs'],
  difficulty: 'medium',
  prepMinutes: 25,
  cookMinutes: 10,
  servings: 2,
  rating: { value: 4.7, count: 1534 },
  popularity: 10140,
  datePublished: '2026-05-21',
  dateModified: '2026-09-18',
  author: authors.theo,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Andy Li', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Pad_Thai_Noodles_-_Little_Thai,_Brighton_2024-03-21.jpg' },
      alt: t('A plate of pad thai with lime wedges and fresh greens', 'Prato de pad thai com gomos de limão e folhas frescas'),
      caption: t('Sweet, sour, salty — in balance.', 'Doce, azedo e salgado em equilíbrio.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Mystery6002', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Chinese_spicy_soup_rice_noodle_with_spicy_tofu.jpg' },
      alt: t('Small bowls of peanuts, dried shrimp and bean sprouts', 'Tigelinhas com amendoim, camarão seco e broto de feijão'),
      caption: t('Line everything up before the wok goes on.', 'Separe tudo antes de ligar o fogo.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Chainwit.', license: 'CC BY 4.0', source: 'https://commons.wikimedia.org/wiki/File:Ang_Thong_(2024)_-_%22ancient%22_pad_thai_%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%82%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%93.jpg' },
      alt: t('Pad thai on a blue plate with chopsticks', 'Pad thai em um prato azul com hashis'),
      caption: t('Finish with crushed peanuts and lime.', 'Finalize com amendoim e limão.'),
    },
  },

  title: t('Shrimp Pad Thai', 'Pad Thai de Camarão'),
  description: t(
    'Chewy rice noodles tossed in a sweet-sour tamarind sauce with shrimp, egg, bean sprouts, peanuts and lime — faster than takeaway.',
    'Talharim de arroz salteado no molho agridoce de tamarindo com camarão, ovo, broto de feijão, amendoim e limão — mais rápido que o delivery.',
  ),
  headnote: t(
    'Pad Thai is a stir-fry of balance: tamarind for sourness, palm sugar for sweetness, fish sauce for salt, and chilli to taste. The cooking takes under ten minutes, so everything must be chopped and lined up before the wok goes on. Cook two portions at a time at most — a crowded wok steams the noodles into a clump.',
    'O Pad Thai é um salteado de equilíbrio: tamarindo para o azedo, açúcar de palma para o doce, molho de peixe para o salgado e pimenta a gosto. O cozimento leva menos de dez minutos, então tudo precisa estar picado e separado antes de o wok ir ao fogo. Faça no máximo duas porções por vez — wok cheio cozinha no vapor e empapa o macarrão.',
  ),
  ingredientGroups: [
    {
      title: t('For the sauce', 'Para o molho'),
      items: [
        { amount: 3, unit: 'tbsp', name: t('tamarind concentrate', 'polpa de tamarindo concentrada') },
        { amount: 2, unit: 'tbsp', name: t('fish sauce', 'molho de peixe') },
        { amount: 2, unit: 'tbsp', name: t('palm or brown sugar', 'açúcar de palma ou mascavo') },
        { amount: 1, unit: 'tsp', name: t('chilli flakes', 'pimenta calabresa'), note: t('to taste', 'a gosto') },
      ],
    },
    {
      title: t('For the stir-fry', 'Para o salteado'),
      items: [
        { amount: 200, unit: 'g', name: t('flat rice noodles (5 mm)', 'talharim de arroz (5 mm)') },
        { amount: 250, unit: 'g', name: t('raw prawns', 'camarão cru'), note: t('peeled and deveined', 'limpo') },
        { amount: 2, name: t('eggs', 'ovos') },
        { amount: 3, unit: 'tbsp', name: t('neutral oil', 'óleo') },
        { amount: 2, unit: 'clove', name: t('garlic', 'alho'), note: t('minced', 'picado') },
        { amount: 1, name: t('shallot', 'chalota'), note: t('sliced', 'fatiada') },
        { amount: 1, unit: 'tbsp', name: t('dried shrimp', 'camarão seco'), note: t('optional', 'opcional') },
        { amount: 100, unit: 'g', name: t('bean sprouts', 'broto de feijão') },
        { amount: 4, name: t('garlic chives or spring onions', 'cebolinha'), note: t('in 4 cm pieces', 'em pedaços de 4 cm') },
      ],
    },
    {
      title: t('To serve', 'Para servir'),
      items: [
        { amount: 40, unit: 'g', name: t('roasted peanuts', 'amendoim torrado'), note: t('crushed', 'triturado') },
        { amount: 1, name: t('lime', 'limão'), note: t('in wedges', 'em gomos') },
      ],
    },
  ],
  steps: [
    {
      title: t('Soak the noodles', 'Hidrate o macarrão'),
      body: t(
        'Soak the noodles in warm (not boiling) water for 20–25 minutes until bendy but still firm in the centre. Drain.',
        'Deixe o macarrão de molho em água morna (não fervente) por 20–25 minutos, até ficar maleável mas ainda firme no centro. Escorra.',
      ),
      minutes: 25,
      tip: t('They finish cooking in the wok. Fully soft noodles turn to mush.', 'Ele termina de cozinhar no wok. Macarrão já mole demais vira papa.'),
    },
    {
      title: t('Mix the sauce', 'Misture o molho'),
      body: t(
        'Stir the tamarind, fish sauce, sugar and chilli until the sugar dissolves. Taste: it should be punchy — sour, sweet and salty at once.',
        'Misture o tamarindo, o molho de peixe, o açúcar e a pimenta até dissolver o açúcar. Prove: deve ser intenso — azedo, doce e salgado ao mesmo tempo.',
      ),
      minutes: 2,
    },
    {
      title: t('Cook prawns and egg', 'Salteie o camarão e o ovo'),
      body: t(
        'Heat the oil in a wok over high heat. Fry the garlic, shallot and dried shrimp for 30 seconds, add the prawns and cook until just pink. Push aside, crack in the eggs and scramble lightly.',
        'Aqueça o óleo no wok em fogo alto. Frite o alho, a chalota e o camarão seco por 30 segundos, junte o camarão e cozinhe até ficar rosado. Empurre para o lado, quebre os ovos e mexa levemente.',
      ),
      minutes: 3,
    },
    {
      title: t('Toss the noodles', 'Salteie o macarrão'),
      body: t(
        'Add the noodles and sauce and toss constantly for 2–3 minutes until the sauce is absorbed. Add a splash of water if the noodles stick.',
        'Junte o macarrão e o molho e mexa sem parar por 2–3 minutos, até o molho ser absorvido. Pingue água se grudar.',
      ),
      minutes: 3,
    },
    {
      title: t('Finish and serve', 'Finalize e sirva'),
      body: t(
        'Toss in the bean sprouts and chives for 30 seconds, then plate and top with crushed peanuts and lime wedges.',
        'Junte o broto de feijão e a cebolinha por 30 segundos, sirva e finalize com amendoim triturado e gomos de limão.',
      ),
      minutes: 1,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'warning',
      text: t(
        'Contains shellfish, fish and peanuts — three of the most common allergens.',
        'Contém crustáceos, peixe e amendoim — três dos alérgenos mais comuns.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Doubling the recipe in one wok. Cook in batches of two portions for properly seared noodles.',
        'Dobrar a receita em um wok só. Faça em levas de duas porções para o macarrão ficar bem salteado.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Best eaten immediately; leftovers keep a day and reheat in a pan with a splash of water.',
        'Melhor comido na hora; a sobra dura um dia e pode ser reaquecida na frigideira com um pouco de água.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Prawns', 'Camarão'),
      swap: t('firm tofu', 'tofu firme'),
      note: t('Fry cubes until golden; use soy sauce instead of fish sauce for a vegan version without egg.', 'Doure os cubos; use shoyu no lugar do molho de peixe e tire o ovo para uma versão vegana.'),
    },
    {
      original: t('Tamarind concentrate', 'Tamarindo concentrado'),
      swap: t('lime juice + a little ketchup', 'suco de limão + um pouco de ketchup'),
      note: t('An emergency fix, less complex but tasty.', 'Quebra-galho: menos complexo, mas gostoso.'),
    },
  ],
  faq: [
    {
      question: t('Why are my noodles sticky?', 'Por que meu macarrão grudou?'),
      answer: t(
        'They were over-soaked or the wok wasn’t hot enough. Soak only until bendy and keep the heat high.',
        'Ficou de molho tempo demais ou o wok não estava quente o suficiente. Hidrate só até ficar maleável e mantenha o fogo alto.',
      ),
    },
  ],
  nutrition: { calories: 690, protein: 34, carbohydrates: 88, fat: 24, fiber: 4, sodium: 1480 },
  keywords: tl(
    ['pad thai', 'shrimp pad thai', 'Thai noodles', 'stir-fry'],
    ['pad thai', 'pad thai de camarão', 'macarrão tailandês', 'comida tailandesa'],
  ),
};
