import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/pudim-de-leite/hero.jpg';
import ingredients from '../../assets/recipes/pudim-de-leite/ingredients.jpg';
import finalDish from '../../assets/recipes/pudim-de-leite/final.jpg';

export const pudimDeLeite: RecipeSource = {
  slug: 'pudim-de-leite',
  categories: ['dessert'],
  cuisines: ['brazilian'],
  diets: ['vegetarian', 'gluten-free'],
  mainIngredients: ['eggs'],
  difficulty: 'medium',
  prepMinutes: 20,
  cookMinutes: 60,
  restMinutes: 360,
  servings: 10,
  rating: { value: 4.9, count: 2894 },
  popularity: 12960,
  datePublished: '2025-11-22',
  dateModified: '2026-08-28',
  author: authors.june,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Marcelo Träsel from Porto Alegre, Brasil', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Pudim_de_leite_(3544235183).jpg' },
      alt: t('A ring-shaped condensed milk flan glistening with caramel', 'Pudim de leite condensado em forma de anel, brilhando de calda'),
      caption: t('The moment of truth: unmoulded and whole.', 'O momento da verdade: desenformado e inteiro.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Samsule2', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Eggs_in_a_plastic_bowl_gotten_from_Noiler_Birds_05.jpg' },
      alt: t('Fresh eggs in a bowl', 'Ovos frescos em uma tigela'),
      caption: t('Three eggs set the custard.', 'Três ovos dão o ponto do pudim.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Marcelo Träsel from Porto Alegre, Brasil', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Pudim_de_leite_(3544228689).jpg' },
      alt: t('A slice of pudim with caramel sauce', 'Fatia de pudim com calda de caramelo'),
      caption: t('Smooth, dense and caramel-soaked.', 'Liso, denso e banhado em calda.'),
    },
  },

  title: t('Brazilian Condensed Milk Flan', 'Pudim de Leite Condensado'),
  description: t(
    'Silky, dense, caramel-drenched flan made with condensed milk and baked in a water bath — Sunday lunch’s grand finale.',
    'Lisinho, cremoso e banhado em calda de caramelo: o pudim de leite condensado é o grand finale do almoço de domingo.',
  ),
  headnote: t(
    'Brazilian pudim is denser and creamier than a French crème caramel, thanks to a whole can of condensed milk. It is baked in a ring mould inside a water bath, chilled overnight and turned out in front of everyone — the moment of truth. The holy grail is a pudim “sem furinhos”, with no little holes, and the trick is simpler than you think: gentle mixing and a low oven.',
    'O pudim brasileiro é mais denso e cremoso que o crème caramel francês, graças a uma lata inteira de leite condensado. Ele assa em forma de furo no meio, em banho-maria, gela de um dia para o outro e é desenformado na frente de todo mundo — o momento da verdade. O santo graal é o pudim sem furinhos, e o truque é mais simples do que parece: bater pouco e forno baixo.',
  ),
  yieldNote: t('One 22 cm ring-mould pudim, 10 slices.', 'Um pudim em forma de 22 cm, 10 fatias.'),
  ingredientGroups: [
    {
      title: t('For the caramel', 'Para a calda'),
      items: [
        { amount: 200, unit: 'g', name: t('sugar', 'açúcar') },
        { amount: 80, unit: 'ml', name: t('hot water', 'água quente') },
      ],
    },
    {
      title: t('For the custard', 'Para o pudim'),
      items: [
        { amount: 395, unit: 'g', name: t('sweetened condensed milk', 'leite condensado'), note: t('1 can', '1 lata') },
        { amount: 395, unit: 'ml', name: t('whole milk', 'leite integral'), note: t('measure with the empty can', 'meça com a lata vazia') },
        { amount: 3, name: t('eggs', 'ovos'), note: t('room temperature', 'em temperatura ambiente') },
        { amount: 1, unit: 'tsp', name: t('vanilla extract', 'extrato de baunilha'), note: t('optional', 'opcional') },
      ],
    },
  ],
  steps: [
    {
      title: t('Make the caramel', 'Faça a calda'),
      body: t(
        'Melt the sugar in a pan over medium heat without stirring, swirling the pan, until it turns deep amber. Off the heat, carefully add the hot water (it will splutter), then return to the heat and stir until smooth.',
        'Derreta o açúcar em fogo médio sem mexer, apenas girando a panela, até ficar cor de âmbar escuro. Fora do fogo, junte a água quente com cuidado (vai espirrar), volte ao fogo e mexa até ficar liso.',
      ),
      minutes: 10,
    },
    {
      title: t('Coat the mould', 'Caramelize a forma'),
      body: t(
        'Pour the caramel into a 22 cm ring mould and tilt it to coat the base and sides. Set aside while you make the custard.',
        'Despeje a calda em uma forma de furo no meio de 22 cm e gire para cobrir o fundo e as laterais. Reserve enquanto prepara o pudim.',
      ),
      minutes: 3,
    },
    {
      title: t('Blend gently', 'Bata rapidamente'),
      body: t(
        'Heat the oven to 160 °C. Blend the condensed milk, milk, eggs and vanilla for just 30 seconds on low speed, then strain into the mould to remove any foam and egg strands.',
        'Preaqueça o forno a 160 °C. Bata o leite condensado, o leite, os ovos e a baunilha por apenas 30 segundos em velocidade baixa e coe direto na forma, para tirar a espuma e as películas do ovo.',
      ),
      minutes: 4,
      tip: t('Less air in the mix = fewer holes. Blend briefly, then let it stand 5 minutes before baking.', 'Menos ar na mistura = menos furinhos. Bata pouco e deixe descansar 5 minutos antes de assar.'),
    },
    {
      title: t('Bake in a water bath', 'Asse em banho-maria'),
      body: t(
        'Cover the mould with foil, place it in a larger tin and pour hot water halfway up the sides. Bake for 55–65 minutes, until set but still with a gentle wobble in the centre.',
        'Cubra a forma com papel-alumínio, coloque dentro de uma assadeira maior e despeje água quente até a metade da altura. Asse por 55–65 minutos, até firmar mas ainda tremer levemente no centro.',
      ),
      minutes: 60,
    },
    {
      title: t('Chill overnight', 'Gele de um dia para o outro'),
      body: t(
        'Cool to room temperature, then refrigerate for at least 6 hours, ideally overnight.',
        'Deixe esfriar em temperatura ambiente e leve à geladeira por pelo menos 6 horas, de preferência de um dia para o outro.',
      ),
      minutes: 360,
    },
    {
      title: t('Unmould with confidence', 'Desenforme com confiança'),
      body: t(
        'Run a thin knife around the edges, briefly warm the base of the mould over a flame or in hot water, place a deep plate on top and flip in one decisive move.',
        'Passe uma faca fina pelas bordas, aqueça rapidamente o fundo da forma na chama ou em água quente, coloque um prato fundo por cima e vire de uma vez, com decisão.',
      ),
      minutes: 3,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'warning',
      text: t(
        'Molten caramel reaches 170 °C and sticks to skin. Keep children away and pour the water in with your arm stretched out.',
        'A calda chega a 170 °C e gruda na pele. Mantenha as crianças longe e despeje a água com o braço esticado.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Baking too hot. The eggs boil, leaving a spongy pudim full of holes.',
        'Assar em forno quente demais. Os ovos fervem e o pudim fica esponjoso e cheio de furinhos.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Keeps 4 days in the fridge, covered. Do not freeze — the texture breaks.',
        'Dura 4 dias na geladeira, coberto. Não congele — a textura desanda.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Whole milk', 'Leite integral'),
      swap: t('coconut milk', 'leite de coco'),
      note: t('A tropical pudim with a gentle coconut flavour.', 'Um pudim tropical com sabor suave de coco.'),
    },
    {
      original: t('Oven water bath', 'Banho-maria no forno'),
      swap: t('pressure cooker, 25 minutes', 'panela de pressão, 25 minutos'),
      note: t('A popular Brazilian shortcut: cover tightly and cook on a rack with water.', 'Atalho bem brasileiro: tampe bem e cozinhe sobre um suporte com água.'),
    },
  ],
  faq: [
    {
      question: t('How do I get a pudim with no holes?', 'Como fazer pudim sem furinhos?'),
      answer: t(
        'Blend for only 30 seconds, strain, rest the mix, and bake at 160 °C or lower in a water bath.',
        'Bata só por 30 segundos, coe, deixe a mistura descansar e asse a 160 °C ou menos, em banho-maria.',
      ),
    },
    {
      question: t('My caramel hardened in the mould. Is that a problem?', 'A calda endureceu na forma. Tem problema?'),
      answer: t(
        'No — it melts again in the oven and liquefies as the pudim chills.',
        'Não — ela derrete de novo no forno e vira calda enquanto o pudim gela.',
      ),
    },
  ],
  nutrition: { calories: 330, protein: 8, carbohydrates: 56, fat: 8, fiber: 0, sodium: 120 },
  keywords: tl(
    ['pudim', 'Brazilian flan', 'condensed milk flan', 'caramel custard'],
    ['pudim de leite', 'pudim de leite condensado', 'sobremesa', 'pudim sem furinhos'],
  ),
};
