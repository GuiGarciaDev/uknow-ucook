import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/brigadeiro/hero.jpg';
import ingredients from '../../assets/recipes/brigadeiro/ingredients.jpg';
import finalDish from '../../assets/recipes/brigadeiro/final.jpg';

export const brigadeiro: RecipeSource = {
  slug: 'brigadeiro',
  categories: ['dessert', 'snack'],
  cuisines: ['brazilian'],
  diets: ['vegetarian', 'gluten-free'],
  mainIngredients: ['chocolate'],
  difficulty: 'easy',
  prepMinutes: 20,
  cookMinutes: 15,
  restMinutes: 60,
  servings: 12,
  rating: { value: 4.9, count: 3088 },
  popularity: 13870,
  datePublished: '2026-08-12',
  dateModified: '2026-10-15',
  author: authors.june,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Mayra (Maych)', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Brigadeiro.jpg' },
      alt: t(
        'Close-up of round chocolate brigadeiros covered in chocolate sprinkles, sitting in shiny gold paper cups.',
        'Close de brigadeiros redondos cobertos de granulado de chocolate, em forminhas de papel douradas e brilhantes.',
      ),
      caption: t('Brazil\'s favourite party sweet. No party required.', 'O doce de festa favorito do Brasil. Não precisa de festa.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Krassotkin', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Homemade_condensed_milk.jpg' },
      alt: t(
        'A blue-rimmed porcelain bowl filled with thick, creamy sweetened condensed milk.',
        'Uma tigela de porcelana com borda azul cheia de leite condensado espesso e cremoso.',
      ),
      caption: t('Condensed milk: the backbone of Brazilian dessert culture.', 'Leite condensado: a espinha dorsal da confeitaria brasileira.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Dianakc', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Brigadeiro_(candy).JPG' },
      alt: t(
        'A large round platter covered with dozens of brigadeiros and beijinhos in little paper cups.',
        'Uma bandeja redonda grande coberta com dezenas de brigadeiros e beijinhos em forminhas de papel.',
      ),
      caption: t('Make a lot. They disappear suspiciously fast.', 'Faça bastante. Eles somem com uma rapidez suspeita.'),
    },
  },

  title: t('Brazilian Brigadeiro', 'Brigadeiro Tradicional'),
  description: t(
    'Fudgy, chocolatey Brazilian truffles made with just condensed milk, cocoa and butter, rolled in chocolate sprinkles.',
    'O doce mais amado do Brasil: leite condensado, chocolate e manteiga, enrolado e passado no granulado.',
  ),
  headnote: t(
    'No Brazilian birthday party is complete without brigadeiros. The whole recipe comes down to one moment: the "ponto", when the mixture pulls away from the bottom of the pan in one thick, glossy mass. Get that right and the rest is just rolling — and trying not to eat the mixture straight from the pan with a spoon. (Spoiler: everyone does.)',
    'Nenhuma festa de aniversário no Brasil está completa sem brigadeiro. A receita inteira se resume a um momento: o ponto, quando a massa desgruda do fundo da panela em um bloco espesso e brilhante. Acertando isso, o resto é só enrolar — e tentar não comer a massa direto da panela de colher. (Spoiler: todo mundo come.)',
  ),
  yieldNote: t('About 24 brigadeiros (2 per serving).', 'Cerca de 24 brigadeiros (2 por porção).'),
  ingredientGroups: [
    {
      title: t('For the brigadeiro mixture', 'Para a massa'),
      items: [
        { amount: 395, unit: 'g', name: t('sweetened condensed milk', 'leite condensado'), note: t('1 standard can', '1 lata padrão') },
        { amount: 20, unit: 'g', name: t('unsweetened cocoa powder', 'cacau em pó'), note: t('or 30 g of 50% chocolate powder', 'ou 30 g de chocolate em pó 50%') },
        { amount: 15, unit: 'g', name: t('unsalted butter', 'manteiga sem sal'), note: t('plus extra for your hands', 'mais um pouco para untar as mãos') },
        { amount: 1, unit: 'pinch', name: t('fine salt', 'sal refinado') },
      ],
    },
    {
      title: t('For rolling', 'Para enrolar'),
      items: [
        { amount: 100, unit: 'g', name: t('chocolate sprinkles', 'granulado de chocolate'), note: t('good-quality, ideally Belgian-style', 'de boa qualidade, de preferência do tipo belga') },
        { amount: 24, name: t('small paper candy cups', 'forminhas de papel nº 4') },
      ],
    },
  ],
  steps: [
    {
      title: t('Combine in a cold pan', 'Misture na panela ainda fria'),
      body: t(
        'In a heavy-bottomed, non-stick saucepan, combine the condensed milk, cocoa, butter and salt. Stir until the cocoa is fully dissolved before turning on the heat.',
        'Em uma panela antiaderente de fundo grosso, junte o leite condensado, o cacau, a manteiga e o sal. Mexa até o cacau dissolver completamente antes de ligar o fogo.',
      ),
      minutes: 2,
    },
    {
      title: t('Cook to the "ponto"', 'Cozinhe até dar o ponto'),
      body: t(
        'Cook over medium-low heat, stirring constantly with a silicone spatula, scraping the bottom and sides. After 10–15 minutes the mixture thickens and, when you tilt the pan, slides away from the bottom in one glossy mass.',
        'Cozinhe em fogo médio-baixo, mexendo sem parar com uma espátula de silicone e raspando o fundo e as laterais. Depois de 10–15 minutos, a massa engrossa e, ao inclinar a panela, desgruda do fundo em um bloco único e brilhante.',
      ),
      minutes: 13,
      tip: t(
        'Draw a line across the bottom of the pan with the spatula. If the line stays open for 2–3 seconds, you are there.',
        'Passe a espátula no fundo da panela formando um caminho. Se o caminho ficar aberto por 2–3 segundos, chegou ao ponto.',
      ),
    },
    {
      title: t('Cool completely', 'Deixe esfriar completamente'),
      body: t(
        'Transfer to a buttered plate, press a sheet of cling film onto the surface and let cool to room temperature, then refrigerate for at least 1 hour until firm enough to roll.',
        'Transfira para um prato untado com manteiga, cubra com filme plástico encostando na superfície e deixe esfriar em temperatura ambiente; depois leve à geladeira por pelo menos 1 hora, até ficar firme o bastante para enrolar.',
      ),
      minutes: 60,
    },
    {
      title: t('Roll the balls', 'Enrole as bolinhas'),
      body: t(
        'Butter your hands lightly. Scoop teaspoon-sized portions (about 15 g) and roll into smooth balls between your palms.',
        'Unte levemente as mãos com manteiga. Pegue porções do tamanho de uma colher de chá (cerca de 15 g) e enrole bolinhas lisas entre as palmas.',
      ),
      minutes: 12,
    },
    {
      title: t('Coat in sprinkles', 'Passe no granulado'),
      body: t(
        'Drop each ball into the bowl of sprinkles and roll until completely coated, pressing gently so they stick. Place in paper cups.',
        'Coloque cada bolinha na tigela de granulado e role até cobrir completamente, pressionando de leve para grudar. Acomode nas forminhas.',
      ),
      minutes: 8,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'For a softer "brigadeiro de colher" to eat with a spoon, stop cooking 3 minutes earlier and add 2 tablespoons of cream at the end.',
        'Para um brigadeiro de colher mais mole, pare de cozinhar 3 minutos antes e acrescente 2 colheres (sopa) de creme de leite no final.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Cooking on high heat to save time. The bottom scorches before the mixture thickens evenly, giving you bitter, grainy brigadeiros.',
        'Cozinhar em fogo alto para ganhar tempo. O fundo queima antes de a massa engrossar por igual, e os brigadeiros ficam amargos e açucarados.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'The mixture is extremely hot and sticky — like caramel. Do not taste it straight from the pan, and keep little helpers at a safe distance.',
        'A massa fica extremamente quente e grudenta — como caramelo. Não prove direto da panela e mantenha os pequenos ajudantes a uma distância segura.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Keep covered at room temperature for up to 2 days, or refrigerate for up to 5 days (let them come to room temperature before serving). Rolled brigadeiros freeze well for 2 months.',
        'Guarde cobertos em temperatura ambiente por até 2 dias, ou na geladeira por até 5 dias (deixe voltar à temperatura ambiente antes de servir). Brigadeiros enrolados congelam bem por 2 meses.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Chocolate sprinkles', 'Granulado de chocolate'),
      swap: t('chopped pistachios, cocoa powder or desiccated coconut', 'pistache picado, cacau em pó ou coco ralado'),
      note: t('Coconut turns them into a cousin of the "beijinho".', 'Com coco, eles viram primos do beijinho.'),
    },
    {
      original: t('Cocoa powder', 'Cacau em pó'),
      swap: t('60 g chopped dark chocolate', '60 g de chocolate meio amargo picado'),
      note: t('Richer and glossier ("brigadeiro gourmet"). Add it with the butter.', 'Fica mais intenso e brilhante (o "brigadeiro gourmet"). Junte com a manteiga.'),
    },
    {
      original: t('Condensed milk', 'Leite condensado'),
      swap: t('coconut condensed milk', 'leite condensado de coco'),
      note: t('Use coconut oil instead of butter for a dairy-free, vegan version.', 'Use óleo de coco no lugar da manteiga para uma versão vegana e sem lactose.'),
    },
  ],
  faq: [
    {
      question: t('My brigadeiro is too soft to roll. What happened?', 'Meu brigadeiro ficou mole demais para enrolar. O que aconteceu?'),
      answer: t(
        'It needed a few more minutes on the stove. You can return it to the pan and cook for 2–3 minutes more, then cool again.',
        'Faltaram alguns minutos no fogo. Dá para voltar a massa à panela, cozinhar por mais 2–3 minutos e esfriar de novo.',
      ),
    },
    {
      question: t('Why is my brigadeiro grainy?', 'Por que meu brigadeiro ficou açucarado?'),
      answer: t(
        'It was overcooked or cooked too fast, which crystallises the sugar. Cook on medium-low and stop as soon as it reaches the ponto.',
        'Ele cozinhou demais ou rápido demais, o que cristaliza o açúcar. Cozinhe em fogo médio-baixo e pare assim que der o ponto.',
      ),
    },
    {
      question: t('Can I make them a day ahead?', 'Posso fazer na véspera?'),
      answer: t(
        'Yes — they are actually easier to roll when the mixture has rested overnight in the fridge.',
        'Sim — na verdade fica mais fácil enrolar quando a massa descansa uma noite na geladeira.',
      ),
    },
  ],
  nutrition: { calories: 190, protein: 4, carbohydrates: 30, fat: 7, fiber: 1, sodium: 65 },
  keywords: tl(
    ['brigadeiro', 'Brazilian truffles', 'chocolate fudge balls', 'party sweets'],
    ['brigadeiro', 'docinho de festa', 'doce brasileiro', 'chocolate'],
  ),
};
