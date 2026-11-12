import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/strogonoff-de-frango/hero.jpg';
import ingredients from '../../assets/recipes/strogonoff-de-frango/ingredients.jpg';
import finalDish from '../../assets/recipes/strogonoff-de-frango/final.jpg';

export const strogonoffDeFrango: RecipeSource = {
  slug: 'strogonoff-de-frango',
  categories: ['lunch', 'dinner'],
  cuisines: ['brazilian'],
  diets: ['gluten-free'],
  mainIngredients: ['chicken', 'mushrooms'],
  difficulty: 'easy',
  prepMinutes: 15,
  cookMinutes: 25,
  servings: 4,
  rating: { value: 4.8, count: 2541 },
  popularity: 13480,
  datePublished: '2026-06-02',
  dateModified: '2026-10-12',
  author: authors.lucas,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Pittaya Sroilong', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Beef_Stroganoff-02.jpg' },
      alt: t('Creamy chicken stroganoff served with white rice', 'Strogonoff de frango cremoso servido com arroz branco'),
      caption: t('Brazil’s favourite weeknight dinner.', 'O jantar de semana favorito do Brasil.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Judgefloro', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:8087Foods_and_goods_in_Bulacan_04.jpg' },
      alt: t('A plate of crispy shoestring potato sticks', 'Prato de batata palha crocante'),
      caption: t('Batata palha: non-negotiable.', 'Batata palha: inegociável.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Melsj', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Estrogonofe_de_carne,_arroz,_batata_palha,_batata_assada,_vinagrete.jpg' },
      alt: t('Stroganoff with rice and a pile of potato sticks on a plate', 'Strogonoff com arroz e batata palha no prato'),
      caption: t('Add the potato sticks right before eating.', 'Coloque a batata palha na hora de comer.'),
    },
  },

  title: t('Brazilian Chicken Stroganoff', 'Strogonoff de Frango'),
  description: t(
    'Tender chicken in a creamy tomato-tinged sauce with mushrooms, served the Brazilian way: white rice and a mountain of crispy potato sticks.',
    'Frango macio em molho cremoso e rosado com cogumelos, servido do jeito brasileiro: arroz branco e muita batata palha.',
  ),
  headnote: t(
    'Brazilian strogonoff took the Russian classic on a detour: it swapped sour cream for “creme de leite”, added ketchup and mustard for a gentle pink tang, and is never served without white rice and batata palha — crunchy shoestring potatoes scattered on top at the last second. It is the dish of birthday parties, weeknights and every Brazilian’s childhood, and it is ready in 40 minutes.',
    'O strogonoff brasileiro pegou o clássico russo e mudou o caminho: trocou o sour cream pelo creme de leite, ganhou ketchup e mostarda para aquele tom rosado e nunca é servido sem arroz branco e batata palha jogada por cima na última hora. É prato de aniversário, de dia de semana e da infância de todo brasileiro — e fica pronto em 40 minutos.',
  ),
  ingredientGroups: [
    {
      title: t('For the stroganoff', 'Para o strogonoff'),
      items: [
        { amount: 700, unit: 'g', name: t('chicken breast', 'peito de frango'), note: t('in 2 cm cubes', 'em cubos de 2 cm') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal') },
        { amount: 2, unit: 'tbsp', name: t('butter', 'manteiga') },
        { amount: 1, name: t('onion', 'cebola'), note: t('finely chopped', 'picada') },
        { amount: 2, unit: 'clove', name: t('garlic', 'alho'), note: t('minced', 'picado') },
        { amount: 200, unit: 'g', name: t('button mushrooms', 'champignon'), note: t('sliced', 'fatiado') },
        { amount: 3, unit: 'tbsp', name: t('ketchup', 'ketchup') },
        { amount: 1, unit: 'tbsp', name: t('yellow mustard', 'mostarda') },
        { amount: 200, unit: 'g', name: t('table cream (creme de leite) or single cream', 'creme de leite'), note: t('1 box', '1 caixinha') },
      ],
    },
    {
      title: t('To serve', 'Para servir'),
      items: [
        { amount: 300, unit: 'g', name: t('white rice', 'arroz branco'), note: t('cooked', 'cozido') },
        { amount: 120, unit: 'g', name: t('shoestring potato sticks (batata palha)', 'batata palha') },
      ],
    },
  ],
  steps: [
    {
      title: t('Sear the chicken', 'Doure o frango'),
      body: t(
        'Season the chicken with salt. Melt the butter in a wide pan over high heat and brown the chicken in two batches, 4–5 minutes each. Set aside.',
        'Tempere o frango com sal. Derreta a manteiga em uma panela larga em fogo alto e doure o frango em duas levas, 4–5 minutos cada. Reserve.',
      ),
      minutes: 10,
      tip: t('Don’t crowd the pan — crowded chicken steams instead of browning.', 'Não lote a panela — frango amontoado cozinha no vapor em vez de dourar.'),
    },
    {
      title: t('Soften the aromatics', 'Refogue os temperos'),
      body: t(
        'In the same pan, cook the onion for 3 minutes, add the garlic and mushrooms and cook until the mushrooms release their liquid and turn golden.',
        'Na mesma panela, refogue a cebola por 3 minutos, junte o alho e os cogumelos e cozinhe até soltarem a água e dourarem.',
      ),
      minutes: 6,
    },
    {
      title: t('Build the sauce', 'Monte o molho'),
      body: t(
        'Return the chicken with its juices, stir in the ketchup and mustard and simmer for 3 minutes.',
        'Volte o frango com o caldo, junte o ketchup e a mostarda e cozinhe por 3 minutos.',
      ),
      minutes: 4,
    },
    {
      title: t('Finish with cream', 'Finalize com creme de leite'),
      body: t(
        'Lower the heat, stir in the cream and warm through without boiling. Taste for salt and serve right away with rice and a generous handful of batata palha.',
        'Abaixe o fogo, misture o creme de leite e aqueça sem deixar ferver. Acerte o sal e sirva na hora com arroz e um punhado generoso de batata palha.',
      ),
      minutes: 3,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'mistake',
      text: t(
        'Boiling after adding the cream. It can split and turn grainy — keep it just below a simmer.',
        'Deixar ferver depois do creme de leite. Ele pode talhar — mantenha logo abaixo da fervura.',
      ),
    },
    {
      type: 'chef',
      text: t(
        'A splash of brandy, flambéed after the mushrooms, makes it taste like a restaurant strogonoff.',
        'Um pouco de conhaque flambado depois dos cogumelos deixa com gosto de strogonoff de restaurante.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Keeps 3 days in the fridge. Reheat gently and add the batata palha only when serving.',
        'Dura 3 dias na geladeira. Reaqueça em fogo baixo e coloque a batata palha só na hora de servir.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Chicken', 'Frango'),
      swap: t('beef sirloin strips', 'tiras de alcatra'),
      note: t('The classic strogonoff de carne — sear fast over very high heat.', 'O clássico strogonoff de carne — sele rápido em fogo bem alto.'),
    },
    {
      original: t('Table cream', 'Creme de leite'),
      swap: t('coconut cream', 'creme de coco'),
      note: t('A dairy-free version (use oil instead of butter).', 'Versão sem lactose (use azeite no lugar da manteiga).'),
    },
  ],
  faq: [
    {
      question: t('Is it gluten-free?', 'Strogonoff tem glúten?'),
      answer: t(
        'This recipe is, as long as your ketchup, mustard and potato sticks are labelled gluten-free.',
        'Esta receita não leva, desde que o ketchup, a mostarda e a batata palha sejam sem glúten.',
      ),
    },
    {
      question: t('Can I make it ahead?', 'Posso fazer com antecedência?'),
      answer: t(
        'Yes — make it up to step 3, then reheat and add the cream just before serving.',
        'Pode — faça até a etapa 3 e, na hora de servir, reaqueça e acrescente o creme de leite.',
      ),
    },
  ],
  nutrition: { calories: 640, protein: 45, carbohydrates: 52, fat: 27, fiber: 2, sodium: 820 },
  keywords: tl(
    ['chicken stroganoff', 'Brazilian stroganoff', 'creamy chicken', 'weeknight dinner'],
    ['strogonoff de frango', 'strogonoff', 'batata palha', 'jantar rápido'],
  ),
};
