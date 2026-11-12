import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/acai-na-tigela/hero.jpg';
import ingredients from '../../assets/recipes/acai-na-tigela/ingredients.jpg';
import finalDish from '../../assets/recipes/acai-na-tigela/final.jpg';

export const acaiNaTigela: RecipeSource = {
  slug: 'acai-na-tigela',
  categories: ['breakfast', 'snack', 'dessert'],
  cuisines: ['brazilian'],
  diets: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
  mainIngredients: ['vegetables'],
  difficulty: 'easy',
  prepMinutes: 10,
  cookMinutes: 0,
  servings: 2,
  rating: { value: 4.6, count: 1406 },
  popularity: 10620,
  datePublished: '2026-10-25',
  dateModified: '2026-11-06',
  author: authors.marina,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Ella Olsson from Stockholm, Sweden', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Acai_bowl_(43110767814).jpg' },
      alt: t('A purple açaí bowl with a wooden spoon on a wooden board', 'Tigela de açaí roxo com colher de pau sobre tábua de madeira'),
      caption: t('Thick enough to hold a spoon.', 'Grosso o suficiente para segurar a colher.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Cornelius Kibelka from Berlin, Germany', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:A%C3%A7a%C3%AD_(4386387492).jpg' },
      alt: t('A cup of açaí next to a cup of granola', 'Copo de açaí ao lado de um copo de granola'),
      caption: t('Açaí and granola, the essential pair.', 'Açaí e granola, a dupla essencial.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'A Healthier Michigan from Detroit, United States', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Acai_Berry_Bowl_(34046937903).jpg' },
      alt: t('An açaí bowl topped with kiwi, strawberries, blueberries, mango and walnuts', 'Tigela de açaí coberta com kiwi, morango, mirtilo, manga e nozes'),
      caption: t('Top with whatever fruit is in season.', 'Cubra com as frutas da estação.'),
    },
  },

  title: t('Açaí Bowl', 'Açaí na Tigela'),
  description: t(
    'Frozen açaí blended thick with banana and topped with granola, fresh fruit and a drizzle of honey — Brazil’s beach-day ritual.',
    'Açaí batido bem grosso com banana e coberto de granola, frutas e um fio de mel — o ritual pós-praia do Brasil.',
  ),
  headnote: t(
    'In the Amazon, açaí is a savoury staple eaten with fish and cassava flour. Somewhere along the way to Rio’s beaches it became something else entirely: a thick, icy, deep-purple bowl topped with granola and banana, eaten with a spoon after surfing. The secret to the right texture is using very little liquid — it should be closer to sorbet than to a smoothie.',
    'Na Amazônia, o açaí é comida salgada do dia a dia, servido com peixe e farinha. No caminho até as praias do Rio ele virou outra coisa: uma tigela grossa, gelada e roxa, coberta de granola e banana, comida de colher depois do surfe. O segredo da textura certa é usar pouquíssimo líquido — o ponto é mais de sorvete do que de vitamina.',
  ),
  ingredientGroups: [
    {
      title: t('For the açaí base', 'Para o creme de açaí'),
      items: [
        { amount: 400, unit: 'g', name: t('frozen unsweetened açaí pulp', 'polpa de açaí congelada sem açúcar'), note: t('4 packets', '4 pacotes') },
        { amount: 1, name: t('frozen banana', 'banana congelada'), note: t('in chunks', 'em pedaços') },
        { amount: 2, unit: 'tbsp', name: t('guaraná syrup or honey', 'xarope de guaraná ou mel'), note: t('to taste', 'a gosto') },
        { amount: 60, unit: 'ml', name: t('apple juice or water', 'suco de maçã ou água'), note: t('only as needed', 'só o necessário') },
      ],
    },
    {
      title: t('Toppings', 'Coberturas'),
      items: [
        { amount: 60, unit: 'g', name: t('granola', 'granola') },
        { amount: 1, name: t('banana', 'banana'), note: t('sliced', 'fatiada') },
        { amount: 1, unit: 'handful', name: t('strawberries or berries', 'morangos ou frutas vermelhas') },
        { amount: 1, name: t('kiwi', 'kiwi'), note: t('sliced, optional', 'fatiado, opcional') },
        { amount: 1, unit: 'tbsp', name: t('honey or agave', 'mel ou agave') },
      ],
    },
  ],
  steps: [
    {
      title: t('Soften the packets', 'Amoleça os pacotes'),
      body: t(
        'Run the frozen açaí packets under warm water for 10 seconds, then break them into chunks straight into the blender.',
        'Passe os pacotes de açaí congelado em água morna por 10 segundos e quebre em pedaços direto no liquidificador.',
      ),
      minutes: 2,
    },
    {
      title: t('Blend thick', 'Bata bem grosso'),
      body: t(
        'Add the frozen banana and syrup and blend, using the tamper and stopping to scrape down. Add liquid one spoonful at a time only if the blades stall.',
        'Junte a banana congelada e o xarope e bata, usando o socador e parando para raspar as laterais. Acrescente líquido de colher em colher só se as lâminas travarem.',
      ),
      minutes: 4,
      tip: t('The texture should hold a spoon upright. Too runny? Add more frozen banana.', 'A textura deve segurar uma colher em pé. Ficou mole? Junte mais banana congelada.'),
    },
    {
      title: t('Top and serve immediately', 'Monte e sirva na hora'),
      body: t(
        'Spoon into chilled bowls, add granola, sliced fruit and a drizzle of honey, and eat right away before it melts.',
        'Distribua em tigelas geladas, cubra com granola, frutas fatiadas e um fio de mel e coma em seguida, antes de derreter.',
      ),
      minutes: 4,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Chill the bowls in the freezer for 10 minutes beforehand — your açaí stays thick much longer.',
        'Deixe as tigelas no freezer por 10 minutos antes — o açaí fica firme por muito mais tempo.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Adding too much liquid. You end up with a purple smoothie, not açaí na tigela.',
        'Colocar líquido demais. Vira vitamina roxa, não açaí na tigela.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Best eaten fresh. Leftover blended açaí can be frozen in a lidded tub and re-blended.',
        'O ideal é comer na hora. A sobra pode ir ao freezer em pote fechado e ser batida de novo.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Banana', 'Banana'),
      swap: t('frozen mango or strawberries', 'manga ou morango congelados'),
      note: t('Mango gives a creamier, fruitier bowl.', 'A manga deixa a tigela mais cremosa e frutada.'),
    },
    {
      original: t('Granola', 'Granola'),
      swap: t('paçoca (peanut candy), crumbled', 'paçoca esfarelada'),
      note: t('A very Brazilian topping — trust us.', 'Cobertura muito brasileira — confie.'),
    },
  ],
  faq: [
    {
      question: t('Is açaí naturally sweet?', 'O açaí é doce naturalmente?'),
      answer: t(
        'No — pure açaí is earthy and slightly bitter, closer to dark chocolate and berries. The sweetness comes from banana and syrup.',
        'Não — o açaí puro é terroso e levemente amargo, lembrando chocolate amargo e frutas vermelhas. A doçura vem da banana e do xarope.',
      ),
    },
    {
      question: t('Can I use açaí powder?', 'Posso usar açaí em pó?'),
      answer: t(
        'Yes: blend 2 tablespoons of powder with 2 frozen bananas and a handful of frozen berries.',
        'Pode: bata 2 colheres (sopa) do pó com 2 bananas congeladas e um punhado de frutas vermelhas congeladas.',
      ),
    },
  ],
  nutrition: { calories: 420, protein: 7, carbohydrates: 64, fat: 16, fiber: 11, sodium: 40 },
  keywords: tl(
    ['açaí bowl', 'acai', 'smoothie bowl', 'vegan breakfast'],
    ['açaí na tigela', 'açaí', 'granola', 'lanche saudável'],
  ),
};
