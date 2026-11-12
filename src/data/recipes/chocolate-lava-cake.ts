import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/chocolate-lava-cake/hero.jpg';
import ingredients from '../../assets/recipes/chocolate-lava-cake/ingredients.jpg';
import finalDish from '../../assets/recipes/chocolate-lava-cake/final.jpg';

export const chocolateLavaCake: RecipeSource = {
  slug: 'chocolate-lava-cake',
  categories: ['dessert'],
  cuisines: ['french'],
  diets: ['vegetarian'],
  mainIngredients: ['chocolate', 'eggs'],
  difficulty: 'medium',
  prepMinutes: 15,
  cookMinutes: 13,
  restMinutes: 2,
  servings: 4,
  rating: { value: 4.9, count: 1736 },
  popularity: 10430,
  datePublished: '2026-01-10',
  dateModified: '2026-10-21',
  author: authors.june,
  images: {
    hero: {
      src: hero,
      credit: { author: 'sanctumsolitude', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Chocolate_lava_cake.jpg' },
      alt: t(
        'A small chocolate lava cake on an ornate white plate, molten chocolate pooling out from its base.',
        'Um pequeno petit gâteau de chocolate em um prato branco trabalhado, com o chocolate derretido escorrendo pela base.',
      ),
      caption: t('The ooze is the point.', 'O recheio escorrendo é o objetivo.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Simon A. Eugster', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Dark_chocolate_bar.jpg' },
      alt: t(
        'Broken squares of dark chocolate on crumpled silver foil.',
        'Quadradinhos de chocolate amargo quebrados sobre papel-alumínio amassado.',
      ),
      caption: t('Use a chocolate you would happily eat on its own — 64–72% cocoa.', 'Use um chocolate que você comeria puro — de 64% a 72% de cacau.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Riyadh Al Balushi', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Chili%27s_Molten_Chocolate_Cake.jpg' },
      alt: t(
        'A plated molten chocolate cake topped with a scoop of chocolate-coated ice cream and drizzled with caramel.',
        'Um petit gâteau empratado, coberto com uma bola de sorvete com casquinha de chocolate e fios de caramelo.',
      ),
      caption: t('Ice cream on top: legally required in several countries.', 'Sorvete por cima: obrigatório por lei em vários países.'),
    },
  },

  title: t('Classic Chocolate Lava Cake', 'Petit Gâteau de Chocolate Clássico'),
  description: t(
    'Individual French-style chocolate cakes with a set crust and a molten, gooey centre. Ready in under 30 minutes.',
    'Bolinhos individuais de chocolate ao estilo francês, com casquinha firme e centro derretido. Prontos em menos de 30 minutos.',
  ),
  headnote: t(
    'Lava cake is mostly about timing: bake until the edges are set and the centre still wobbles like a waterbed, then flip it out after exactly one minute. You can prepare the batter hours ahead and bake it while everyone finishes dinner — maximum drama, minimum effort.',
    'O petit gâteau é basicamente uma questão de tempo: asse até as bordas firmarem e o centro ainda tremer como colchão d\'água, e desenforme depois de exatamente um minuto. Dá para deixar a massa pronta com horas de antecedência e assar enquanto todos terminam o jantar — drama máximo, esforço mínimo.',
  ),
  ingredientGroups: [
    {
      title: t('For the ramekins', 'Para as forminhas'),
      items: [
        { amount: 10, unit: 'g', name: t('soft butter', 'manteiga amolecida') },
        { amount: 1, unit: 'tbsp', name: t('unsweetened cocoa powder', 'cacau em pó sem açúcar') },
      ],
    },
    {
      title: t('For the batter', 'Para a massa'),
      items: [
        { amount: 115, unit: 'g', name: t('dark chocolate (64–72%)', 'chocolate amargo (64–72%)'), note: t('chopped', 'picado') },
        { amount: 115, unit: 'g', name: t('unsalted butter', 'manteiga sem sal'), note: t('cubed', 'em cubos') },
        { amount: 2, name: t('large eggs', 'ovos grandes'), note: t('at room temperature', 'em temperatura ambiente') },
        { amount: 2, name: t('large egg yolks', 'gemas grandes') },
        { amount: 50, unit: 'g', name: t('caster sugar', 'açúcar refinado') },
        { amount: 1, unit: 'pinch', name: t('flaky sea salt', 'flor de sal') },
        { amount: 25, unit: 'g', name: t('plain flour', 'farinha de trigo'), note: t('sifted', 'peneirada') },
      ],
    },
    {
      title: t('To serve', 'Para servir'),
      items: [
        { amount: 4, unit: 'handful', name: t('fresh raspberries', 'framboesas frescas'), note: t('optional', 'opcional') },
        { name: t('vanilla ice cream or whipped cream', 'sorvete de creme ou chantili'), note: t('to taste', 'a gosto') },
      ],
    },
  ],
  steps: [
    {
      title: t('Prepare the ramekins', 'Prepare as forminhas'),
      body: t(
        'Preheat the oven to 220 °C (200 °C fan). Brush four 180 ml ramekins generously with soft butter, using upward strokes, then dust with cocoa powder and tap out the excess. Place them on a baking tray.',
        'Preaqueça o forno a 220 °C (200 °C com ventilação). Pincele generosamente quatro forminhas de 180 ml com manteiga amolecida, em movimentos de baixo para cima, polvilhe com cacau e retire o excesso. Coloque-as em uma assadeira.',
      ),
      minutes: 4,
    },
    {
      title: t('Melt the chocolate and butter', 'Derreta o chocolate e a manteiga'),
      body: t(
        'Melt the chocolate and butter together in a heatproof bowl over barely simmering water (or in 20-second bursts in the microwave), stirring until smooth. Set aside to cool slightly.',
        'Derreta o chocolate e a manteiga juntos em uma tigela refratária sobre água em fervura bem baixa (ou no micro-ondas em intervalos de 20 segundos), mexendo até ficar liso. Reserve para amornar.',
      ),
      minutes: 5,
    },
    {
      title: t('Whisk the eggs and sugar', 'Bata os ovos com o açúcar'),
      body: t(
        'Whisk the eggs, yolks, sugar and salt with an electric mixer for 3–4 minutes, until pale, thick and doubled in volume — the whisk should leave a ribbon trail.',
        'Bata os ovos, as gemas, o açúcar e o sal na batedeira por 3–4 minutos, até ficar claro, espesso e dobrar de volume — o batedor deve deixar um rastro em fita.',
      ),
      minutes: 4,
    },
    {
      title: t('Fold it together', 'Incorpore tudo'),
      body: t(
        'Pour the warm chocolate into the eggs and fold gently with a spatula. Sift over the flour and fold until just combined — no streaks, but do not overmix.',
        'Despeje o chocolate morno sobre os ovos e incorpore delicadamente com uma espátula. Peneire a farinha por cima e misture só até incorporar — sem listras, mas sem bater demais.',
      ),
      minutes: 2,
    },
    {
      title: t('Fill and bake', 'Encha as forminhas e asse'),
      body: t(
        'Divide the batter among the ramekins (about three-quarters full). Bake for 12–14 minutes, until the tops are domed and set at the edges but the centres still jiggle when you nudge the tray.',
        'Divida a massa entre as forminhas (cerca de três quartos da altura). Asse por 12–14 minutos, até o topo estufar e as bordas firmarem, mas o centro ainda tremer quando você mexer a assadeira.',
      ),
      minutes: 13,
      tip: t(
        'Ovens vary. Bake one test cake first and note the perfect time for your oven.',
        'Cada forno é um forno. Asse um bolinho de teste primeiro e anote o tempo perfeito para o seu.',
      ),
    },
    {
      title: t('Rest, then flip', 'Descanse e desenforme'),
      body: t(
        'Let the cakes rest for exactly 1 minute. Run a thin knife around each edge, place a plate on top and invert confidently. Lift off the ramekin.',
        'Deixe os bolinhos descansarem por exatamente 1 minuto. Passe uma faca fina pelas bordas, coloque um prato por cima e vire com confiança. Retire a forminha.',
      ),
      minutes: 2,
    },
    {
      title: t('Serve warm', 'Sirva quente'),
      body: t(
        'Dust with cocoa or icing sugar and serve immediately with raspberries and a scoop of vanilla ice cream.',
        'Polvilhe cacau ou açúcar de confeiteiro e sirva imediatamente com framboesas e uma bola de sorvete de creme.',
      ),
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Make the batter up to 24 hours ahead, fill the ramekins and refrigerate. Bake straight from the fridge, adding 2–3 minutes.',
        'Prepare a massa com até 24 horas de antecedência, encha as forminhas e leve à geladeira. Asse direto da geladeira, acrescentando 2–3 minutos.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Under-greasing the ramekins. If even one patch is bare, the cake will tear when you flip it. Butter every millimetre.',
        'Untar mal as forminhas. Se sobrar um pedacinho sem manteiga, o bolo rasga ao desenformar. Unte cada milímetro.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'The centre is intentionally soft and the eggs are not fully cooked. Use fresh eggs, or bake 2 minutes longer for a fudgy rather than molten middle.',
        'O centro é propositalmente mole e os ovos não cozinham totalmente. Use ovos frescos ou asse 2 minutos a mais para um centro cremoso, em vez de líquido.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Unbaked batter keeps 2 days in the fridge or 1 month frozen in the ramekins (bake from frozen for 16–18 minutes). Baked cakes lose their lava — eat them right away.',
        'A massa crua dura 2 dias na geladeira ou 1 mês congelada nas forminhas (asse congelada por 16–18 minutos). Depois de assados, os bolinhos perdem o recheio líquido — coma na hora.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Plain flour', 'Farinha de trigo'),
      swap: t('almond flour or cornstarch', 'farinha de amêndoas ou amido de milho'),
      note: t('Makes the recipe gluten-free with a near-identical result.', 'Deixa a receita sem glúten com resultado quase idêntico.'),
    },
    {
      original: t('Dark chocolate', 'Chocolate amargo'),
      swap: t('milk chocolate', 'chocolate ao leite'),
      note: t('Reduce the sugar to 25 g and bake 1 minute less — milk chocolate sets faster.', 'Reduza o açúcar para 25 g e asse 1 minuto a menos — o chocolate ao leite firma mais rápido.'),
    },
    {
      original: t('Butter', 'Manteiga'),
      swap: t('a firm plant-based block butter', 'manteiga vegetal em barra'),
      note: t('Works for a dairy-free version if paired with dairy-free chocolate.', 'Funciona para uma versão sem lactose, combinada com chocolate sem leite.'),
    },
  ],
  faq: [
    {
      question: t('Why didn\'t my cake have a molten centre?', 'Por que meu bolinho não ficou com o centro derretido?'),
      answer: t(
        'It baked too long. Even 60 seconds matters. Pull it when the centre still wobbles.',
        'Ele assou demais. Até 60 segundos fazem diferença. Tire do forno quando o centro ainda estiver tremendo.',
      ),
    },
    {
      question: t('Can I bake these in a muffin tin?', 'Posso assar em forma de muffin?'),
      answer: t(
        'Yes — grease and cocoa a 6-hole muffin tin very well and bake for 8–10 minutes. They are smaller, so watch closely.',
        'Sim — unte muito bem uma forma de muffin com 6 cavidades, polvilhe cacau e asse por 8–10 minutos. Como são menores, fique de olho.',
      ),
    },
    {
      question: t('Is lava cake the same as fondant au chocolat?', 'Petit gâteau é o mesmo que fondant au chocolat?'),
      answer: t(
        'Essentially, yes. The French fondant and the American lava cake are siblings; in Brazil it is famously called petit gâteau.',
        'Basicamente, sim. O fondant francês e o lava cake americano são irmãos; no Brasil ficou famoso como petit gâteau.',
      ),
    },
  ],
  nutrition: { calories: 480, protein: 7, carbohydrates: 34, fat: 36, fiber: 3, sodium: 140 },
  keywords: tl(
    ['lava cake', 'molten chocolate cake', 'fondant au chocolat', 'chocolate dessert'],
    ['petit gâteau', 'bolo de chocolate', 'fondant', 'sobremesa de chocolate'],
  ),
};
