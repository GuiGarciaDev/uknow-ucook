import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/mediterranean-chicken-salad/hero.jpg';
import ingredients from '../../assets/recipes/mediterranean-chicken-salad/ingredients.jpg';
import finalDish from '../../assets/recipes/mediterranean-chicken-salad/final.jpg';

export const mediterraneanChickenSalad: RecipeSource = {
  slug: 'mediterranean-chicken-salad',
  categories: ['lunch', 'dinner'],
  cuisines: ['mediterranean'],
  diets: ['gluten-free'],
  mainIngredients: ['chicken', 'vegetables', 'cheese'],
  difficulty: 'easy',
  prepMinutes: 20,
  cookMinutes: 12,
  restMinutes: 20,
  servings: 4,
  rating: { value: 4.6, count: 612 },
  popularity: 5870,
  datePublished: '2026-10-20',
  dateModified: '2026-11-06',
  author: authors.marina,
  images: {
    hero: {
      src: hero,
      credit: { author: 'cyclonebill', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Flickr_-_cyclonebill_-_Gr%C3%A6sk_salat.jpg' },
      alt: t(
        'A colourful salad of cubed feta, tomatoes, cucumber, red onion rings and black olives.',
        'Uma salada colorida com cubos de feta, tomate, pepino, anéis de cebola roxa e azeitonas pretas.',
      ),
      caption: t('Summer in a bowl, any time of year.', 'O verão em uma tigela, em qualquer época do ano.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Shixart1985', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Chopping_red_bell_pepper_and_carrot_in_a_kitchen.jpg' },
      alt: t(
        'Hands slicing a red bell pepper into strips on a wooden cutting board.',
        'Mãos cortando um pimentão vermelho em tiras sobre uma tábua de madeira.',
      ),
      caption: t('Chop everything to roughly the same size — every forkful gets a bit of everything.', 'Corte tudo mais ou menos do mesmo tamanho — cada garfada leva um pouco de tudo.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'PattayaPatrol', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:DSC_7112_A_plate_of_grilled_chicken_Caesar_salad_on_a_table_set_for_dinner_with_glasses_of_red_wine_and_soft_candlelight_in_the_background.jpg' },
      alt: t(
        'A bowl of crisp greens topped with slices of grilled chicken on a candlelit dinner table with glasses of red wine.',
        'Uma tigela de folhas crocantes coberta com fatias de frango grelhado, em uma mesa de jantar à luz de velas com taças de vinho tinto.',
      ),
      caption: t('A salad that is actually dinner. Candles optional.', 'Uma salada que é jantar de verdade. Velas opcionais.'),
    },
  },

  title: t('Fresh Mediterranean Chicken Salad', 'Salada Mediterrânea com Frango'),
  description: t(
    'Lemon-oregano grilled chicken over crunchy vegetables, olives and feta with a punchy red wine vinaigrette. Big, bright and filling.',
    'Frango grelhado com limão e orégano sobre legumes crocantes, azeitonas e feta, com um vinagrete de vinho tinto marcante. Farta, colorida e saciante.',
  ),
  headnote: t(
    'This is the salad for people who say salads are not a meal. Juicy marinated chicken, chickpeas for heft, briny olives and creamy feta, all tossed in a vinaigrette sharp enough to wake up every vegetable. Prep the components ahead and it comes together in minutes — a perfect packed lunch.',
    'Esta é a salada para quem diz que salada não é refeição. Frango marinado e suculento, grão-de-bico para dar sustância, azeitonas salgadinhas e feta cremoso, tudo envolvido em um vinagrete ácido o suficiente para despertar cada legume. Deixe os componentes prontos e ela fica pronta em minutos — perfeita para a marmita.',
  ),
  ingredientGroups: [
    {
      title: t('For the chicken', 'Para o frango'),
      items: [
        { amount: 600, unit: 'g', name: t('boneless, skinless chicken breasts', 'peito de frango sem pele e sem osso') },
        { amount: 2, unit: 'tbsp', name: t('olive oil', 'azeite de oliva') },
        { amount: 2, unit: 'tbsp', name: t('lemon juice', 'suco de limão-siciliano') },
        { amount: 2, unit: 'clove', name: t('garlic', 'alho'), note: t('grated', 'ralado') },
        { amount: 1, unit: 'tsp', name: t('dried oregano', 'orégano seco') },
        { amount: 1, unit: 'tsp', name: t('smoked paprika', 'páprica defumada') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal refinado') },
      ],
    },
    {
      title: t('For the vinaigrette', 'Para o vinagrete'),
      items: [
        { amount: 60, unit: 'ml', name: t('extra-virgin olive oil', 'azeite extravirgem') },
        { amount: 2, unit: 'tbsp', name: t('red wine vinegar', 'vinagre de vinho tinto') },
        { amount: 1, unit: 'tbsp', name: t('lemon juice', 'suco de limão-siciliano') },
        { amount: 1, unit: 'tsp', name: t('Dijon mustard', 'mostarda Dijon') },
        { amount: 1, unit: 'tsp', name: t('honey', 'mel') },
        { amount: 1, unit: 'tsp', name: t('dried oregano', 'orégano seco') },
        { amount: 1, unit: 'clove', name: t('garlic', 'alho'), note: t('very finely grated', 'ralado bem fino') },
      ],
    },
    {
      title: t('For the salad', 'Para a salada'),
      items: [
        { amount: 300, unit: 'g', name: t('romaine lettuce', 'alface-romana'), note: t('about 1 large head, chopped', 'cerca de 1 pé grande, picado') },
        { amount: 250, unit: 'g', name: t('cherry tomatoes', 'tomates-cereja'), note: t('halved', 'cortados ao meio') },
        { amount: 1, name: t('English cucumber', 'pepino japonês'), note: t('halved and sliced', 'cortado ao meio e fatiado') },
        { amount: 1, name: t('red bell pepper', 'pimentão vermelho'), note: t('thinly sliced', 'em tiras finas') },
        { amount: 0.5, name: t('red onion', 'cebola roxa'), note: t('thinly sliced', 'em fatias finas') },
        { amount: 240, unit: 'g', name: t('cooked chickpeas', 'grão-de-bico cozido'), note: t('drained and rinsed', 'escorrido e lavado') },
        { amount: 80, unit: 'g', name: t('Kalamata olives', 'azeitonas Kalamata'), note: t('pitted', 'sem caroço') },
        { amount: 150, unit: 'g', name: t('feta cheese', 'queijo feta'), note: t('crumbled or cubed', 'esfarelado ou em cubos') },
        { amount: 1, unit: 'handful', name: t('fresh mint and parsley', 'hortelã e salsinha frescas'), note: t('roughly torn', 'rasgadas grosseiramente') },
      ],
    },
  ],
  steps: [
    {
      title: t('Marinate the chicken', 'Marine o frango'),
      body: t(
        'Slice each breast in half horizontally to make thin cutlets. Combine with the olive oil, lemon juice, garlic, oregano, paprika and salt. Marinate for at least 20 minutes (or up to 8 hours in the fridge).',
        'Corte cada peito ao meio na horizontal para formar bifes finos. Misture com o azeite, o suco de limão, o alho, o orégano, a páprica e o sal. Deixe marinar por pelo menos 20 minutos (ou até 8 horas na geladeira).',
      ),
      minutes: 20,
    },
    {
      title: t('Shake the vinaigrette', 'Agite o vinagrete'),
      body: t(
        'Put all the vinaigrette ingredients in a jar with a pinch of salt, close the lid and shake hard until emulsified. Taste — it should be bold.',
        'Coloque todos os ingredientes do vinagrete em um pote com uma pitada de sal, tampe e agite vigorosamente até emulsionar. Prove — ele deve ser marcante.',
      ),
      minutes: 2,
    },
    {
      title: t('Prep the vegetables', 'Prepare os legumes'),
      body: t(
        'Chop the lettuce, halve the tomatoes, slice the cucumber, pepper and onion. Soak the onion in cold water for 10 minutes to soften its bite, then drain well.',
        'Pique a alface, corte os tomates ao meio e fatie o pepino, o pimentão e a cebola. Deixe a cebola de molho em água fria por 10 minutos para suavizar o ardido e escorra bem.',
      ),
      minutes: 10,
      tip: t(
        'Dry the lettuce thoroughly in a salad spinner. Wet leaves dilute the dressing.',
        'Seque bem a alface na centrífuga de salada. Folhas molhadas diluem o molho.',
      ),
    },
    {
      title: t('Grill the chicken', 'Grelhe o frango'),
      body: t(
        'Heat a grill pan or skillet over medium-high heat. Cook the cutlets for 3–4 minutes per side until nicely charred and 74 °C inside. Rest for 5 minutes, then slice.',
        'Aqueça uma bistequeira ou frigideira em fogo médio-alto. Grelhe os bifes por 3–4 minutos de cada lado, até ficarem bem marcados e atingirem 74 °C por dentro. Deixe descansar por 5 minutos e fatie.',
      ),
      minutes: 12,
    },
    {
      title: t('Toss and assemble', 'Misture e monte'),
      body: t(
        'In a large bowl, toss the lettuce, tomatoes, cucumber, pepper, onion, chickpeas and olives with two-thirds of the vinaigrette. Top with the chicken, feta and herbs, and drizzle over the rest of the dressing.',
        'Em uma tigela grande, misture a alface, os tomates, o pepino, o pimentão, a cebola, o grão-de-bico e as azeitonas com dois terços do vinagrete. Cubra com o frango, o feta e as ervas, e regue com o restante do molho.',
      ),
      minutes: 3,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Splitting the breasts into thin cutlets is the trick: they marinate faster, cook evenly in minutes and never dry out.',
        'Abrir os peitos em bifes finos é o truque: eles marinam mais rápido, cozinham por igual em minutos e nunca ressecam.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Dressing the salad too early. Lettuce wilts within minutes — toss just before serving, or pack the dressing separately.',
        'Temperar a salada cedo demais. A alface murcha em minutos — misture só na hora de servir ou leve o molho separado.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Store chicken, chopped vegetables and dressing separately in the fridge for up to 3 days. Assemble just before eating for a crisp salad every time.',
        'Guarde o frango, os legumes picados e o molho separadamente na geladeira por até 3 dias. Monte só na hora de comer para ter uma salada crocante sempre.',
      ),
    },
    {
      type: 'substitution',
      text: t(
        'Swap the chicken for grilled halloumi or an extra can of chickpeas to make it vegetarian.',
        'Troque o frango por halloumi grelhado ou mais uma lata de grão-de-bico para deixar a salada vegetariana.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Feta cheese', 'Queijo feta'),
      swap: t('diced avocado or a marinated tofu feta', 'abacate em cubos ou "feta" de tofu marinado'),
      note: t('Makes the salad dairy-free while keeping it creamy.', 'Deixa a salada sem lactose, mantendo a cremosidade.'),
    },
    {
      original: t('Romaine lettuce', 'Alface-romana'),
      swap: t('baby spinach, rocket or cooked quinoa', 'espinafre baby, rúcula ou quinoa cozida'),
      note: t('Quinoa turns it into a sturdy grain bowl that keeps well.', 'A quinoa transforma a receita em um bowl encorpado que se conserva bem.'),
    },
    {
      original: t('Honey', 'Mel'),
      swap: t('maple syrup or a pinch of sugar', 'xarope de bordo ou uma pitada de açúcar'),
      note: t('Just enough sweetness to round off the vinegar.', 'Só o suficiente para equilibrar a acidez do vinagre.'),
    },
  ],
  faq: [
    {
      question: t('Can I use leftover roast chicken?', 'Posso usar sobras de frango assado?'),
      answer: t(
        'Absolutely. Toss 450 g shredded cooked chicken with 1 tbsp of the vinaigrette and skip the marinating and grilling steps.',
        'Com certeza. Misture 450 g de frango cozido desfiado com 1 colher (sopa) do vinagrete e pule as etapas de marinar e grelhar.',
      ),
    },
    {
      question: t('Is this salad good for meal prep?', 'Esta salada é boa para marmita?'),
      answer: t(
        'Very. Pack the chicken and sturdy vegetables in one container, the lettuce in another and the dressing in a small jar. It stays crisp for 3 days.',
        'Muito. Coloque o frango e os legumes mais firmes em um pote, a alface em outro e o molho em um potinho. Fica crocante por 3 dias.',
      ),
    },
    {
      question: t('How do I keep the chicken juicy?', 'Como mantenho o frango suculento?'),
      answer: t(
        'Thin cutlets, a short marinade with acid and oil, high heat, and a 5-minute rest before slicing. And use a thermometer: pull it at 74 °C.',
        'Bifes finos, uma marinada curta com acidez e gordura, fogo alto e 5 minutos de descanso antes de fatiar. E use termômetro: tire do fogo aos 74 °C.',
      ),
    },
  ],
  nutrition: { calories: 520, protein: 44, carbohydrates: 22, fat: 29, fiber: 7, sodium: 1020 },
  keywords: tl(
    ['Mediterranean salad', 'chicken salad', 'Greek salad', 'healthy lunch', 'meal prep'],
    ['salada mediterrânea', 'salada com frango', 'salada grega', 'almoço saudável', 'marmita'],
  ),
};
