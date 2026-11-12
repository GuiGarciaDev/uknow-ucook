import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/pastel-de-feira/hero.jpg';
import ingredients from '../../assets/recipes/pastel-de-feira/ingredients.jpg';
import finalDish from '../../assets/recipes/pastel-de-feira/final.jpg';

export const pastelDeFeira: RecipeSource = {
  slug: 'pastel-de-feira',
  categories: ['snack', 'lunch'],
  cuisines: ['brazilian'],
  diets: ['dairy-free'],
  mainIngredients: ['beef'],
  difficulty: 'medium',
  prepMinutes: 40,
  cookMinutes: 25,
  restMinutes: 30,
  servings: 6,
  rating: { value: 4.7, count: 1188 },
  popularity: 8760,
  datePublished: '2026-04-11',
  dateModified: '2026-08-19',
  author: authors.lucas,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Avelludo', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Pastel_de_Feira_02.jpg' },
      alt: t('A large golden pastel with a blistered, crackly crust', 'Pastel grande e dourado com massa crocante cheia de bolhas'),
      caption: t('The street-market pastel, blistered and crisp.', 'O pastel de feira, bolhudo e crocante.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Chen Zhao', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Spring_onions,_garlic,_and_ginger.jpg' },
      alt: t('Chopped spring onions and garlic on a plate', 'Cebolinha picada e alho em um prato'),
      caption: t('Aromatics for the beef filling.', 'Temperos para o recheio de carne.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Simplus Menegati', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Pastel%C3%A3o_t%C3%ADpico_de_Imba%C3%BA,_Paran%C3%A1.jpg' },
      alt: t('A fried pastel on a plate on a marble counter', 'Pastel frito em um prato sobre bancada de mármore'),
      caption: t('Serve straight from the fryer.', 'Sirva assim que sair do óleo.'),
    },
  },

  title: t('Street-Market Pastel', 'Pastel de Feira'),
  description: t(
    'Huge, blistered, paper-thin fried pastries filled with seasoned ground beef — the star of every Brazilian street market.',
    'Aquele pastel enorme, crocante e cheio de bolhas, recheado de carne moída temperada — a estrela de toda feira livre.',
  ),
  headnote: t(
    'Sunday morning at a São Paulo street market means one thing: a pastel the size of your forearm and a glass of ice-cold sugarcane juice. The dough gets its blistered crunch from a splash of cachaça (or vodka), which evaporates fast in hot oil. The filling is simple, so season it boldly — olives and boiled egg are optional, opinions about them are not.',
    'Domingo de manhã na feira de São Paulo quer dizer uma coisa: um pastel do tamanho do antebraço e um copo de caldo de cana bem gelado. A massa ganha aquelas bolhas crocantes graças a um pouco de cachaça, que evapora rápido no óleo quente. O recheio é simples, então tempere sem medo — azeitona e ovo cozido são opcionais; as opiniões sobre eles, não.',
  ),
  yieldNote: t('12 large pastéis (2 per serving).', '12 pastéis grandes (2 por porção).'),
  ingredientGroups: [
    {
      title: t('For the dough', 'Para a massa'),
      items: [
        { amount: 500, unit: 'g', name: t('plain flour', 'farinha de trigo') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal') },
        { amount: 2, unit: 'tbsp', name: t('neutral oil', 'óleo') },
        { amount: 2, unit: 'tbsp', name: t('cachaça or vodka', 'cachaça') },
        { amount: 1, unit: 'tbsp', name: t('white vinegar', 'vinagre branco') },
        { amount: 240, unit: 'ml', name: t('warm water', 'água morna'), note: t('add gradually', 'adicione aos poucos') },
      ],
    },
    {
      title: t('For the beef filling', 'Para o recheio de carne'),
      items: [
        { amount: 500, unit: 'g', name: t('ground beef', 'carne moída') },
        { amount: 1, name: t('onion', 'cebola'), note: t('finely chopped', 'picada') },
        { amount: 2, unit: 'clove', name: t('garlic', 'alho'), note: t('minced', 'picado') },
        { amount: 1, unit: 'tsp', name: t('ground cumin', 'cominho em pó') },
        { amount: 1, unit: 'handful', name: t('green olives', 'azeitonas verdes'), note: t('chopped, optional', 'picadas, opcional') },
        { amount: 2, name: t('hard-boiled eggs', 'ovos cozidos'), note: t('chopped, optional', 'picados, opcional') },
        { amount: 1, unit: 'handful', name: t('parsley and spring onion', 'cheiro-verde'), note: t('chopped', 'picado') },
        { amount: 1, unit: 'l', name: t('oil for deep-frying', 'óleo para fritar') },
      ],
    },
  ],
  steps: [
    {
      title: t('Make the dough', 'Faça a massa'),
      body: t(
        'Mix the flour and salt, add the oil, cachaça and vinegar, then add the water little by little, kneading until smooth and not sticky — about 8 minutes. Wrap and rest for 30 minutes.',
        'Misture a farinha e o sal, junte o óleo, a cachaça e o vinagre e vá acrescentando a água aos poucos, sovando até a massa ficar lisa e sem grudar — cerca de 8 minutos. Embrulhe e deixe descansar por 30 minutos.',
      ),
      minutes: 40,
    },
    {
      title: t('Cook the filling', 'Prepare o recheio'),
      body: t(
        'Brown the beef in a hot pan, breaking it up, until no pink remains. Add the onion, garlic and cumin and cook for 5 minutes. Season, stir in the olives, eggs and herbs, and cool completely.',
        'Doure a carne em uma panela bem quente, soltando os grãos, até não ter mais partes rosadas. Junte a cebola, o alho e o cominho e refogue por 5 minutos. Acerte o sal, misture azeitonas, ovos e cheiro-verde e deixe esfriar completamente.',
      ),
      minutes: 15,
    },
    {
      title: t('Roll it thin', 'Abra bem fina'),
      body: t(
        'Divide the dough into 12 pieces and roll each into a thin rectangle about 12 × 20 cm. A pasta machine at its second-thinnest setting is perfect.',
        'Divida a massa em 12 partes e abra cada uma em um retângulo fino de cerca de 12 × 20 cm. Um cilindro de macarrão na penúltima espessura é perfeito.',
      ),
      minutes: 15,
    },
    {
      title: t('Fill and seal', 'Recheie e feche'),
      body: t(
        'Spoon filling onto one half, leaving a 2 cm border. Fold over, press out the air and seal the edges firmly with a fork.',
        'Coloque o recheio em uma das metades, deixando 2 cm de borda. Dobre, aperte para tirar o ar e feche bem as bordas com um garfo.',
      ),
      minutes: 10,
      tip: t('Trapped air is what makes pastéis burst — press it all out.', 'Ar preso é o que faz o pastel estourar — tire todo.'),
    },
    {
      title: t('Fry hot and fast', 'Frite em óleo bem quente'),
      body: t(
        'Fry one or two at a time at 190 °C, spooning hot oil over the top, for 1–2 minutes until puffed, blistered and golden. Drain and serve immediately.',
        'Frite um ou dois por vez a 190 °C, regando a parte de cima com o óleo quente, por 1–2 minutos, até inflar, formar bolhas e dourar. Escorra e sirva na hora.',
      ),
      minutes: 15,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Classic feira pairing: a pastel and a glass of caldo de cana (sugarcane juice) with lime. Non-negotiable.',
        'Combinação clássica da feira: pastel e caldo de cana com limão. Inegociável.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Frying at too low a temperature. The dough soaks up oil instead of blistering and turns greasy.',
        'Fritar em óleo morno. A massa absorve óleo em vez de formar bolhas e fica encharcada.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Uncooked, sealed pastéis freeze for 2 months between sheets of baking paper. Fry from frozen.',
        'Pastéis crus e fechados congelam por 2 meses separados por papel-manteiga. Frite direto do freezer.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Beef filling', 'Recheio de carne'),
      swap: t('mozzarella and oregano, or palm hearts', 'mussarela com orégano, ou palmito'),
      note: t('Cheese pastel is the other national favourite.', 'O pastel de queijo é o outro favorito nacional.'),
    },
    {
      original: t('Homemade dough', 'Massa caseira'),
      swap: t('store-bought pastel dough sheets', 'massa de pastel pronta'),
      note: t('Sold in rolls in Brazilian supermarkets — a huge time saver.', 'Vendida em rolo nos supermercados — economiza muito tempo.'),
    },
  ],
  faq: [
    {
      question: t('Why add alcohol to the dough?', 'Por que colocar cachaça na massa?'),
      answer: t(
        'Alcohol evaporates faster than water in hot oil, creating the signature bubbles and keeping the crust crisp for longer.',
        'O álcool evapora mais rápido que a água no óleo quente, criando as bolhas típicas e mantendo a massa crocante por mais tempo.',
      ),
    },
    {
      question: t('Can I bake them?', 'Dá para assar?'),
      answer: t(
        'You can, brushed with egg at 200 °C for 20 minutes, but they will be more like empanadas than street-market pastel.',
        'Dá, pincelados com ovo, a 200 °C por 20 minutos — mas ficam mais parecidos com empanada do que com pastel de feira.',
      ),
    },
  ],
  nutrition: { calories: 560, protein: 24, carbohydrates: 62, fat: 23, fiber: 3, sodium: 640 },
  keywords: tl(
    ['pastel', 'Brazilian fried pastry', 'street food', 'beef turnover'],
    ['pastel de feira', 'pastel de carne', 'comida de rua', 'feira livre'],
  ),
};
