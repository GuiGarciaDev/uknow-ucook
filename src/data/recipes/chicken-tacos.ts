import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/chicken-tacos/hero.jpg';
import ingredients from '../../assets/recipes/chicken-tacos/ingredients.jpg';
import finalDish from '../../assets/recipes/chicken-tacos/final.jpg';

export const chickenTacos: RecipeSource = {
  slug: 'chicken-tacos',
  categories: ['dinner', 'lunch'],
  cuisines: ['mexican'],
  diets: ['gluten-free', 'dairy-free'],
  mainIngredients: ['chicken'],
  difficulty: 'easy',
  prepMinutes: 20,
  cookMinutes: 15,
  restMinutes: 30,
  servings: 4,
  rating: { value: 4.7, count: 1288 },
  popularity: 9870,
  datePublished: '2026-07-11',
  dateModified: '2026-10-03',
  author: authors.marina,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Larry Miller', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:001_Tacos_de_carnitas,_carne_asada_y_al_pastor.jpg' },
      alt: t('A plate of chicken tacos with sliced radish and lime wedges', 'Prato de tacos de frango com rabanete fatiado e gomos de limão'),
      caption: t('Taco night, sorted.', 'Noite do taco resolvida.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Dnor', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:Kycklingfil%C3%A9.jpg' },
      alt: t('Sliced raw chicken on a cutting board', 'Frango cru fatiado sobre uma tábua'),
      caption: t('Thin strips cook fast and stay juicy.', 'Tiras finas cozinham rápido e ficam suculentas.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Kurt Kaiser', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Tacos_in_a_soft_tortilla_5.jpg' },
      alt: t('A tray of assembled tacos ready to serve', 'Bandeja de tacos montados prontos para servir'),
      caption: t('Let everyone build their own.', 'Deixe cada um montar o seu.'),
    },
  },

  title: t('Chili-Lime Chicken Tacos', 'Tacos de Frango com Limão e Pimenta'),
  description: t(
    'Charred chili-lime chicken thighs on warm corn tortillas with quick-pickled onion, radish, coriander and a squeeze of lime.',
    'Sobrecoxa marinada em limão e pimenta, tostada na chapa e servida em tortilhas de milho com cebola em conserva rápida, rabanete e coentro.',
  ),
  headnote: t(
    'Good tacos are about contrast: smoky, juicy meat against something sharp, something crunchy and something fresh. Thighs stay tender under high heat, a 30-minute marinade does the heavy lifting, and the pickled onions take five minutes. Set everything out and let everyone build their own.',
    'Taco bom é feito de contraste: carne suculenta e defumada, algo ácido, algo crocante e algo fresco. A sobrecoxa continua macia no fogo alto, a marinada de 30 minutos faz o trabalho pesado e a cebola em conserva leva cinco minutos. Coloque tudo na mesa e deixe cada um montar o seu.',
  ),
  yieldNote: t('12 small tacos.', '12 tacos pequenos.'),
  ingredientGroups: [
    {
      title: t('For the chicken', 'Para o frango'),
      items: [
        { amount: 700, unit: 'g', name: t('boneless chicken thighs', 'sobrecoxa desossada') },
        { amount: 2, name: t('limes', 'limões'), note: t('zest and juice', 'raspas e suco') },
        { amount: 2, unit: 'tsp', name: t('chipotle or ancho chili powder', 'pimenta chipotle ou ancho em pó') },
        { amount: 1, unit: 'tsp', name: t('ground cumin', 'cominho em pó') },
        { amount: 2, unit: 'clove', name: t('garlic', 'alho'), note: t('grated', 'ralado') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal') },
        { amount: 2, unit: 'tbsp', name: t('olive oil', 'azeite') },
      ],
    },
    {
      title: t('To serve', 'Para servir'),
      items: [
        { amount: 12, name: t('small corn tortillas', 'tortilhas de milho pequenas') },
        { amount: 1, name: t('red onion', 'cebola roxa'), note: t('thinly sliced', 'em fatias finas') },
        { amount: 60, unit: 'ml', name: t('white vinegar', 'vinagre branco') },
        { amount: 4, name: t('radishes', 'rabanetes'), note: t('thinly sliced', 'em fatias finas') },
        { amount: 1, unit: 'handful', name: t('fresh coriander', 'coentro fresco') },
        { amount: 1, name: t('avocado', 'abacate'), note: t('sliced', 'fatiado') },
        { amount: 2, name: t('limes', 'limões'), note: t('in wedges', 'em gomos') },
      ],
    },
  ],
  steps: [
    {
      title: t('Marinate', 'Marine'),
      body: t(
        'Mix the lime zest and juice, chili, cumin, garlic, salt and oil, toss with the chicken and leave for 30 minutes.',
        'Misture as raspas e o suco de limão, a pimenta, o cominho, o alho, o sal e o azeite, envolva o frango e deixe marinar por 30 minutos.',
      ),
      minutes: 30,
    },
    {
      title: t('Quick-pickle the onion', 'Faça a cebola em conserva'),
      body: t(
        'Toss the onion with the vinegar and a pinch each of salt and sugar. It turns bright pink in 10 minutes.',
        'Misture a cebola com o vinagre e uma pitada de sal e de açúcar. Em 10 minutos ela fica rosa-choque.',
      ),
      minutes: 3,
    },
    {
      title: t('Char the chicken', 'Toste o frango'),
      body: t(
        'Cook the chicken in a very hot cast-iron pan or grill for 5–6 minutes per side, until charred at the edges and cooked through. Rest 5 minutes, then slice.',
        'Grelhe o frango em frigideira de ferro bem quente ou na grelha por 5–6 minutos de cada lado, até tostar nas bordas e cozinhar por dentro. Descanse 5 minutos e fatie.',
      ),
      minutes: 15,
    },
    {
      title: t('Warm the tortillas and build', 'Aqueça as tortilhas e monte'),
      body: t(
        'Warm the tortillas directly over a gas flame or in a dry pan for 20 seconds per side. Fill with chicken, pickled onion, radish, avocado and coriander, with lime wedges on the side.',
        'Aqueça as tortilhas direto na chama do fogão ou em frigideira seca por 20 segundos de cada lado. Recheie com frango, cebola, rabanete, abacate e coentro e sirva com gomos de limão.',
      ),
      minutes: 5,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Stack two tortillas per taco, like taquerías do — they hold the juices without tearing.',
        'Use duas tortilhas por taco, como nas taquerías — elas seguram o caldo sem rasgar.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Using cold tortillas. Corn tortillas crack unless they are warm and pliable.',
        'Usar a tortilha fria. A de milho racha se não estiver quente e maleável.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Cooked chicken keeps 3 days; pickled onions keep 2 weeks in the fridge.',
        'O frango dura 3 dias; a cebola em conserva, 2 semanas na geladeira.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Chicken thighs', 'Sobrecoxa'),
      swap: t('portobello mushrooms', 'cogumelos portobello'),
      note: t('Same marinade, 4 minutes per side, for vegan tacos.', 'Mesma marinada, 4 minutos de cada lado, para tacos veganos.'),
    },
    {
      original: t('Corn tortillas', 'Tortilhas de milho'),
      swap: t('flour tortillas', 'tortilhas de trigo'),
      note: t('Softer and bigger, but no longer gluten-free.', 'Mais macias e maiores, mas deixam de ser sem glúten.'),
    },
  ],
  faq: [
    {
      question: t('Can I use chicken breast?', 'Posso usar peito de frango?'),
      answer: t(
        'Yes, but butterfly it to an even thickness and cook 1–2 minutes less per side so it stays juicy.',
        'Pode, mas abra em borboleta para ficar com espessura uniforme e grelhe 1–2 minutos a menos de cada lado.',
      ),
    },
  ],
  nutrition: { calories: 520, protein: 38, carbohydrates: 42, fat: 22, fiber: 8, sodium: 690 },
  keywords: tl(
    ['chicken tacos', 'chili lime chicken', 'Mexican tacos', 'taco night'],
    ['tacos de frango', 'taco mexicano', 'tortilha de milho', 'noite do taco'],
  ),
};
