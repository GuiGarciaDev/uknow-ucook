import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/smash-burger/hero.jpg';
import ingredients from '../../assets/recipes/smash-burger/ingredients.jpg';
import finalDish from '../../assets/recipes/smash-burger/final.jpg';

export const smashBurger: RecipeSource = {
  slug: 'smash-burger',
  categories: ['lunch', 'dinner'],
  cuisines: ['american'],
  diets: [],
  mainIngredients: ['beef', 'cheese'],
  difficulty: 'easy',
  prepMinutes: 15,
  cookMinutes: 10,
  servings: 4,
  rating: { value: 4.8, count: 1497 },
  popularity: 12480,
  datePublished: '2026-06-05',
  dateModified: '2026-10-28',
  author: authors.theo,
  images: {
    hero: {
      src: hero,
      credit: { author: 'JIP', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Sriracha_Double_Smash_Burger.jpg' },
      alt: t(
        'A double smash burger with melted cheese oozing over crispy-edged patties in a glossy brioche bun, fries on the side.',
        'Um smash burger duplo com queijo derretido escorrendo sobre carnes de bordas crocantes, em um pão brioche brilhante, com batatas fritas ao lado.',
      ),
      caption: t('Lacy, crispy edges: the whole reason we smash.', 'Bordas rendadas e crocantes: o motivo de amassarmos.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Kamil', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Smashburger_03.jpg' },
      alt: t(
        'A gloved hand pressing a ball of ground beef flat onto a hot griddle with a heavy metal smasher.',
        'Uma mão de luva pressionando uma bola de carne moída sobre uma chapa quente com um amassador de metal pesado.',
      ),
      caption: t('Smash once, smash hard, then leave it alone.', 'Amasse uma vez, com força, e depois não mexa.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Wiki.cullin', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Double_Smash_Burger_with_Fries.jpg' },
      alt: t(
        'A double smash burger and a pile of golden fries on a white plate, ready to eat.',
        'Um smash burger duplo e uma porção de batatas fritas douradas em um prato branco, prontos para comer.',
      ),
      caption: t('Napkins: mandatory. Dignity: optional.', 'Guardanapos: obrigatórios. Dignidade: opcional.'),
    },
  },

  title: t('Homemade Smash Burger', 'Smash Burger Caseiro'),
  description: t(
    'Diner-style double cheeseburgers with ultra-crispy, lacy edges and a tangy house sauce. Ten minutes on the stove.',
    'Cheeseburgers duplos estilo lanchonete americana, com bordas ultracrocantes e um molho especial azedinho. Dez minutos no fogão.',
  ),
  headnote: t(
    'Smashing a ball of beef onto a screaming-hot pan creates maximum contact, which means maximum browning — and browning is flavour. Two thin patties beat one thick one every time. Get everything ready before you start: once the beef hits the pan, the whole thing takes four minutes.',
    'Amassar uma bola de carne em uma frigideira muito quente cria o máximo de contato, o que significa o máximo de douração — e douração é sabor. Duas carnes finas sempre ganham de uma grossa. Deixe tudo pronto antes de começar: depois que a carne toca a frigideira, o processo todo leva quatro minutos.',
  ),
  yieldNote: t('4 double burgers.', '4 hambúrgueres duplos.'),
  ingredientGroups: [
    {
      title: t('For the house sauce', 'Para o molho da casa'),
      items: [
        { amount: 4, unit: 'tbsp', name: t('mayonnaise', 'maionese') },
        { amount: 2, unit: 'tbsp', name: t('ketchup', 'ketchup') },
        { amount: 1, unit: 'tbsp', name: t('yellow mustard', 'mostarda amarela') },
        { amount: 1, unit: 'tbsp', name: t('dill pickles', 'picles de pepino'), note: t('finely chopped', 'picados fino') },
        { amount: 1, unit: 'tsp', name: t('pickle brine', 'salmoura do picles') },
        { amount: 0.5, unit: 'tsp', name: t('smoked paprika', 'páprica defumada') },
      ],
    },
    {
      title: t('For the burgers', 'Para os hambúrgueres'),
      items: [
        { amount: 600, unit: 'g', name: t('ground beef chuck (20% fat)', 'carne moída de acém (20% de gordura)'), note: t('cold, divided into 8 loose balls', 'gelada, dividida em 8 bolas soltas') },
        { amount: 4, name: t('potato or brioche buns', 'pães de batata ou brioche') },
        { amount: 20, unit: 'g', name: t('butter', 'manteiga'), note: t('softened, for the buns', 'amolecida, para os pães') },
        { amount: 8, unit: 'slice', name: t('American cheese', 'queijo cheddar fatiado') },
        { amount: 1, name: t('small white onion', 'cebola branca pequena'), note: t('paper-thin slices', 'em fatias bem finas') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal refinado') },
        { amount: 0.5, unit: 'tsp', name: t('black pepper', 'pimenta-do-reino moída') },
        { amount: 12, unit: 'slice', name: t('dill pickle chips', 'rodelas de picles'), note: t('to serve', 'para servir') },
      ],
    },
  ],
  steps: [
    {
      title: t('Mix the sauce', 'Misture o molho'),
      body: t(
        'Stir together all the house sauce ingredients. Refrigerate while you prepare everything else — it gets better as it sits.',
        'Misture todos os ingredientes do molho da casa. Leve à geladeira enquanto prepara o resto — ele melhora com o descanso.',
      ),
      minutes: 3,
    },
    {
      title: t('Toast the buns', 'Toste os pães'),
      body: t(
        'Butter the cut sides of the buns and toast them in a large cast-iron skillet over medium heat until golden, about 1 minute. Spread sauce on both halves and set aside.',
        'Passe manteiga nos lados cortados dos pães e toste em uma frigideira grande de ferro fundido, em fogo médio, até dourar, cerca de 1 minuto. Espalhe o molho nas duas metades e reserve.',
      ),
      minutes: 3,
    },
    {
      title: t('Get the pan screaming hot', 'Deixe a frigideira muito quente'),
      body: t(
        'Wipe out the skillet and heat it over high heat for 3–4 minutes, until it just starts to smoke. Turn on your extractor fan. Seriously.',
        'Limpe a frigideira e aqueça em fogo alto por 3–4 minutos, até começar a soltar fumaça. Ligue o exaustor. É sério.',
      ),
      minutes: 4,
    },
    {
      title: t('Smash', 'Amasse'),
      body: t(
        'Place 2–4 beef balls in the pan, well spaced. Top each with a square of parchment and smash firmly with a sturdy spatula until about 5 mm thin. Peel off the parchment and season generously with salt and pepper.',
        'Coloque de 2 a 4 bolas de carne na frigideira, bem espaçadas. Cubra cada uma com um quadrado de papel-manteiga e amasse com firmeza usando uma espátula resistente, até ficarem com cerca de 5 mm. Retire o papel e tempere generosamente com sal e pimenta.',
      ),
      minutes: 1,
      tip: t(
        'Smash only in the first 30 seconds. Pressing later squeezes out the juices.',
        'Amasse só nos primeiros 30 segundos. Pressionar depois espreme os sucos.',
      ),
    },
    {
      title: t('Sear and flip', 'Sele e vire'),
      body: t(
        'Cook without touching for about 2 minutes, until the edges are deeply brown and lacy. Scrape under each patty with the spatula — keep all the crust — and flip. Add a slice of cheese to each and cook 30 seconds more.',
        'Cozinhe sem mexer por cerca de 2 minutos, até as bordas ficarem bem douradas e rendadas. Raspe por baixo de cada carne com a espátula — mantendo toda a crosta — e vire. Coloque uma fatia de queijo em cada uma e cozinhe por mais 30 segundos.',
      ),
      minutes: 3,
    },
    {
      title: t('Stack and serve', 'Monte e sirva'),
      body: t(
        'Stack two patties per bun, add onion slices and pickles, close and press gently. Repeat with the remaining beef and serve immediately.',
        'Empilhe duas carnes por pão, adicione as fatias de cebola e os picles, feche e pressione levemente. Repita com o restante da carne e sirva imediatamente.',
      ),
      minutes: 2,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Keep the beef balls in the fridge until the very last second. Cold fat renders more slowly, giving you crispier edges and juicier centres.',
        'Mantenha as bolas de carne na geladeira até o último segundo. A gordura gelada derrete mais devagar, o que dá bordas mais crocantes e centro mais suculento.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Using lean beef. Anything under 15% fat will stick, dry out and refuse to crisp. Smash burgers need fat.',
        'Usar carne magra. Qualquer coisa abaixo de 15% de gordura gruda, resseca e não fica crocante. Smash burger precisa de gordura.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'A smoking-hot cast-iron pan and splattering fat can burn. Use a long, sturdy spatula, keep children away and never use a non-stick pan at this heat.',
        'Uma frigideira de ferro soltando fumaça e a gordura espirrando podem queimar. Use uma espátula longa e firme, mantenha as crianças longe e nunca use frigideira antiaderente nessa temperatura.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'The sauce keeps for 1 week in the fridge. Cooked patties are best fresh; portioned raw beef balls can be frozen for up to 3 months between sheets of parchment.',
        'O molho dura 1 semana na geladeira. As carnes ficam melhores feitas na hora; as bolas de carne cruas podem ser congeladas por até 3 meses, separadas com papel-manteiga.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Ground beef', 'Carne moída'),
      swap: t('a 50/50 blend of beef and ground pork', 'mistura de metade carne bovina e metade carne suína moída'),
      note: t('Extra juicy, slightly sweeter. Cook pork through to 71 °C.', 'Fica ainda mais suculento e um pouco adocicado. Cozinhe a carne suína até 71 °C.'),
    },
    {
      original: t('American cheese', 'Queijo cheddar fatiado'),
      swap: t('young cheddar, Gouda or Swiss', 'cheddar jovem, gouda ou queijo suíço'),
      note: t('Slice thinly. American cheese melts best, but these taste great.', 'Fatie fino. O cheddar processado derrete melhor, mas esses ficam ótimos.'),
    },
    {
      original: t('Potato buns', 'Pães de batata'),
      swap: t('gluten-free buns or crisp lettuce leaves', 'pães sem glúten ou folhas crocantes de alface'),
      note: t('Lettuce wraps make it low-carb and gluten-free.', 'A alface deixa a receita com pouco carboidrato e sem glúten.'),
    },
  ],
  faq: [
    {
      question: t('Why do my patties stick to the spatula?', 'Por que a carne gruda na espátula?'),
      answer: t(
        'Put a square of parchment between the beef and the spatula when smashing, and make sure the spatula is clean and dry.',
        'Coloque um quadrado de papel-manteiga entre a carne e a espátula na hora de amassar, e garanta que a espátula esteja limpa e seca.',
      ),
    },
    {
      question: t('Can I make smash burgers on a grill?', 'Dá para fazer smash burger na churrasqueira?'),
      answer: t(
        'Not on grates — you need a solid surface. Put a cast-iron griddle or skillet directly on the grill and proceed as normal.',
        'Na grelha, não — é preciso uma superfície lisa. Coloque uma chapa ou frigideira de ferro sobre a churrasqueira e siga normalmente.',
      ),
    },
    {
      question: t('Should I season the beef before shaping?', 'Devo temperar a carne antes de modelar?'),
      answer: t(
        'No. Salt mixed into ground beef makes it dense and sausage-like. Season the surface right after smashing.',
        'Não. Sal misturado na carne moída deixa a textura densa, como linguiça. Tempere a superfície logo depois de amassar.',
      ),
    },
  ],
  nutrition: { calories: 780, protein: 42, carbohydrates: 36, fat: 52, fiber: 2, sodium: 1250 },
  keywords: tl(
    ['smash burger', 'cheeseburger', 'burger recipe', 'diner style'],
    ['smash burger', 'hambúrguer caseiro', 'cheeseburger', 'hambúrguer artesanal'],
  ),
};
