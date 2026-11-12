import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/baiao-de-dois/hero.jpg';
import ingredients from '../../assets/recipes/baiao-de-dois/ingredients.jpg';
import finalDish from '../../assets/recipes/baiao-de-dois/final.jpg';

export const baiaoDeDois: RecipeSource = {
  slug: 'baiao-de-dois',
  categories: ['lunch', 'dinner'],
  cuisines: ['brazilian'],
  diets: ['gluten-free'],
  mainIngredients: ['rice', 'beans', 'cheese'],
  difficulty: 'easy',
  prepMinutes: 20,
  cookMinutes: 40,
  servings: 6,
  rating: { value: 4.7, count: 864 },
  popularity: 6420,
  datePublished: '2026-02-20',
  dateModified: '2026-08-02',
  author: authors.lucas,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Márcia Cristina Machado', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Bai%C3%A3o_de_dois_com_lingui%C3%A7a.jpg' },
      alt: t('A large platter of baião de dois with sausage and fresh coriander', 'Travessa grande de baião de dois com linguiça e coentro fresco'),
      caption: t('Baião de dois for a crowd.', 'Baião de dois para a família toda.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Thiago Parente Lima', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Queijo_coalho.jpg' },
      alt: t('A whole wheel of queijo coalho', 'Uma peça inteira de queijo coalho'),
      caption: t('Queijo coalho holds its shape in the heat.', 'O queijo coalho não derrete na panela.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Senado Federal', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Fotos_produzidas_pelo_Senado_-_Bai%C3%A3o_de_Dois_lateral_view_(30514610651).jpg' },
      alt: t('A plate of baião de dois topped with crispy browned cheese', 'Prato de baião de dois coberto com queijo dourado e crocante'),
      caption: t('Finish with browned coalho on top.', 'Finalize com coalho dourado por cima.'),
    },
  },

  title: t('Baião de Dois (Rice, Beans and Coalho Cheese)', 'Baião de Dois'),
  description: t(
    'A one-pot north-eastern classic of rice and green beans cooked together with bacon, sausage and squeaky grilled coalho cheese.',
    'O clássico do Ceará em uma panela só: arroz e feijão-verde cozidos juntos com bacon, linguiça e queijo coalho.',
  ),
  headnote: t(
    'Named after the baião, a dance for two, this dish is what happens when rice and beans stop being side-by-side and move in together. In Ceará it is made with feijão-de-corda (black-eyed peas), cooked in their own broth with the rice so every grain soaks up the flavour. Cubes of queijo coalho — a firm cheese that browns without melting — go in at the end.',
    'Batizado em homenagem ao baião, a dança a dois, este prato é o que acontece quando o arroz e o feijão param de dividir o prato e resolvem morar juntos. No Ceará é feito com feijão-de-corda, cozido no próprio caldo junto com o arroz, para cada grão pegar sabor. Os cubos de queijo coalho — que doura sem derreter — entram no final.',
  ),
  ingredientGroups: [
    {
      title: t('For the beans', 'Para o feijão'),
      items: [
        { amount: 250, unit: 'g', name: t('black-eyed peas (feijão-de-corda)', 'feijão-de-corda ou feijão-fradinho') },
        { amount: 1.2, unit: 'l', name: t('water', 'água') },
        { amount: 2, name: t('bay leaves', 'folhas de louro') },
      ],
    },
    {
      title: t('For the rice', 'Para o arroz'),
      items: [
        { amount: 150, unit: 'g', name: t('smoked bacon', 'bacon'), note: t('diced', 'em cubos') },
        { amount: 200, unit: 'g', name: t('smoked sausage (calabresa)', 'linguiça calabresa'), note: t('diced', 'em cubos') },
        { amount: 1, name: t('onion', 'cebola'), note: t('chopped', 'picada') },
        { amount: 3, unit: 'clove', name: t('garlic', 'alho'), note: t('minced', 'picado') },
        { amount: 1, name: t('green bell pepper', 'pimentão verde'), note: t('diced', 'em cubos') },
        { amount: 300, unit: 'g', name: t('long-grain white rice', 'arroz branco'), note: t('rinsed', 'lavado') },
        { amount: 250, unit: 'g', name: t('queijo coalho', 'queijo coalho'), note: t('cut into 2 cm cubes', 'em cubos de 2 cm') },
        { amount: 1, unit: 'handful', name: t('fresh coriander', 'coentro'), note: t('chopped', 'picado') },
      ],
    },
  ],
  steps: [
    {
      title: t('Cook the beans', 'Cozinhe o feijão'),
      body: t(
        'Simmer the black-eyed peas with the water and bay leaves for 25–30 minutes until just tender but still whole. Drain, reserving the cooking liquid.',
        'Cozinhe o feijão com a água e o louro por 25–30 minutos, até ficar macio mas ainda inteiro. Escorra e reserve o caldo.',
      ),
      minutes: 30,
      tip: t('Black-eyed peas do not need soaking — one of their best features.', 'Feijão-de-corda não precisa ficar de molho — uma das melhores qualidades dele.'),
    },
    {
      title: t('Render the bacon and sausage', 'Frite o bacon e a linguiça'),
      body: t(
        'In a large pot, cook the bacon over medium heat until it releases its fat, then add the sausage and fry until browned. Add the onion, garlic and pepper and cook for 4 minutes.',
        'Em uma panela grande, frite o bacon em fogo médio até soltar a gordura, junte a linguiça e doure. Acrescente a cebola, o alho e o pimentão e refogue por 4 minutos.',
      ),
      minutes: 10,
    },
    {
      title: t('Toast the rice', 'Refogue o arroz'),
      body: t(
        'Add the rice and stir for 2 minutes until the grains are coated and slightly translucent.',
        'Junte o arroz e mexa por 2 minutos, até os grãos ficarem envolvidos na gordura e levemente translúcidos.',
      ),
      minutes: 2,
    },
    {
      title: t('Cook it all together', 'Cozinhe tudo junto'),
      body: t(
        'Add the beans and 600 ml of the hot bean broth (top up with water if short). Season with salt, bring to a boil, cover and cook on low for 15–18 minutes until the rice is tender.',
        'Junte o feijão e 600 ml do caldo quente do feijão (complete com água se faltar). Acerte o sal, deixe ferver, tampe e cozinhe em fogo baixo por 15–18 minutos, até o arroz ficar macio.',
      ),
      minutes: 18,
    },
    {
      title: t('Add the cheese and serve', 'Junte o queijo e sirva'),
      body: t(
        'Brown the coalho cubes in a hot dry pan, fold them into the rice with the coriander and serve straight away.',
        'Doure os cubos de queijo coalho em uma frigideira quente sem óleo, misture ao arroz com o coentro e sirva em seguida.',
      ),
      minutes: 6,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'A drizzle of manteiga de garrafa on top just before serving makes it taste like a trip to Fortaleza.',
        'Um fio de manteiga de garrafa por cima na hora de servir deixa com gosto de viagem a Fortaleza.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Overcooking the beans at the start — they cook again with the rice and turn to mush.',
        'Cozinhar demais o feijão no início — ele cozinha de novo com o arroz e vira papa.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Keeps 3 days in the fridge. Reheat with a splash of water, covered.',
        'Dura 3 dias na geladeira. Requente tampado, com um pouco de água.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Queijo coalho', 'Queijo coalho'),
      swap: t('halloumi', 'halloumi'),
      note: t('Same squeaky texture and browns without melting.', 'Mesma textura “rangente” e também doura sem derreter.'),
    },
    {
      original: t('Bacon and sausage', 'Bacon e linguiça'),
      swap: t('smoked paprika and extra cheese', 'páprica defumada e mais queijo'),
      note: t('Makes a lovely vegetarian version.', 'Vira uma ótima versão vegetariana.'),
    },
  ],
  faq: [
    {
      question: t('Can I use canned beans?', 'Posso usar feijão em lata?'),
      answer: t(
        'Yes — drain and rinse them, and use stock instead of the bean broth.',
        'Pode — escorra e lave, e use caldo de legumes no lugar do caldo do feijão.',
      ),
    },
    {
      question: t('Is it a side or a main?', 'É acompanhamento ou prato principal?'),
      answer: t(
        'Both. In Ceará it often accompanies grilled meat, but with the cheese and sausage it is a full meal on its own.',
        'Os dois. No Ceará costuma acompanhar carne de sol, mas com queijo e linguiça já é uma refeição completa.',
      ),
    },
  ],
  nutrition: { calories: 560, protein: 26, carbohydrates: 60, fat: 23, fiber: 7, sodium: 890 },
  keywords: tl(
    ['baião de dois', 'Brazilian rice and beans', 'coalho cheese', 'north-eastern food'],
    ['baião de dois', 'arroz com feijão-verde', 'queijo coalho', 'comida nordestina'],
  ),
};
