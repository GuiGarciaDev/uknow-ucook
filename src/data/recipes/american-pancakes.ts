import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/american-pancakes/hero.jpg';
import ingredients from '../../assets/recipes/american-pancakes/ingredients.jpg';
import finalDish from '../../assets/recipes/american-pancakes/final.jpg';

export const americanPancakes: RecipeSource = {
  slug: 'american-pancakes',
  categories: ['breakfast'],
  cuisines: ['american'],
  diets: ['vegetarian'],
  mainIngredients: ['eggs'],
  difficulty: 'easy',
  prepMinutes: 10,
  cookMinutes: 20,
  restMinutes: 5,
  servings: 4,
  rating: { value: 4.7, count: 2045 },
  popularity: 9310,
  datePublished: '2026-05-11',
  dateModified: '2026-09-07',
  author: authors.june,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Shared Food', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Slicing_Pancakes_with_Fork_374819.jpg' },
      alt: t(
        'A fork cutting into a tall stack of fluffy pancakes topped with a pat of melting butter.',
        'Um garfo cortando uma pilha alta de panquecas fofinhas, cobertas com um pedaço de manteiga derretendo.',
      ),
      caption: t('Tall, fluffy, and structurally ambitious.', 'Altas, fofinhas e estruturalmente ambiciosas.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Famartin', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:2025-12-06_18_18_41_Pancake_batter_being_mixed_in_the_Mountainview_section_of_Ewing_Township,_Mercer_County,_New_Jersey.jpg' },
      alt: t(
        'An electric hand mixer whisking pale pancake batter in a red mixing bowl.',
        'Uma batedeira de mão misturando massa clara de panqueca em uma tigela vermelha.',
      ),
      caption: t('A few lumps are a feature, not a bug.', 'Alguns grumos são parte do charme, não um defeito.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Andy Li', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:American_Pancakes_with_banana_and_blueberries_-_Jonny%27s_Goring_Bar_%26_Kitchen_2026-01-29.jpg' },
      alt: t(
        'A blue plate of pancakes topped with blueberries and banana slices, with a small jug of syrup and a cup of coffee.',
        'Um prato azul de panquecas com mirtilos e rodelas de banana, uma jarrinha de calda e uma xícara de café.',
      ),
      caption: t('Syrup on the side so everyone can overdo it personally.', 'Calda à parte, para cada um exagerar do seu jeito.'),
    },
  },

  title: t('Fluffy American Pancakes', 'Panquecas Americanas Fofinhas'),
  description: t(
    'Thick, buttery, diner-style buttermilk pancakes that rise tall and stay fluffy. Weekend mornings, solved.',
    'Panquecas americanas grossas e amanteigadas, estilo lanchonete, que crescem alto e ficam fofinhas. Café da manhã de domingo resolvido.',
  ),
  headnote: t(
    'Fluffy pancakes come down to three things: buttermilk for lift and tang, a batter mixed only until barely combined, and a short rest so the baking powder can wake up. Cook them on a pan that is hot but not angry, and flip once — when the bubbles on top pop and stay open.',
    'Panquecas fofinhas dependem de três coisas: leitelho para crescer e dar um toque azedinho, uma massa misturada só até incorporar e um descanso rápido para o fermento acordar. Cozinhe em uma frigideira quente, mas não furiosa, e vire só uma vez — quando as bolhas da superfície estourarem e ficarem abertas.',
  ),
  yieldNote: t('About 12 pancakes of 10 cm.', 'Cerca de 12 panquecas de 10 cm.'),
  ingredientGroups: [
    {
      title: t('Dry ingredients', 'Ingredientes secos'),
      items: [
        { amount: 250, unit: 'g', name: t('all-purpose flour', 'farinha de trigo') },
        { amount: 2, unit: 'tbsp', name: t('granulated sugar', 'açúcar refinado') },
        { amount: 2, unit: 'tsp', name: t('baking powder', 'fermento químico em pó') },
        { amount: 0.5, unit: 'tsp', name: t('baking soda', 'bicarbonato de sódio') },
        { amount: 0.5, unit: 'tsp', name: t('fine salt', 'sal refinado') },
      ],
    },
    {
      title: t('Wet ingredients', 'Ingredientes líquidos'),
      items: [
        { amount: 480, unit: 'ml', name: t('buttermilk', 'leitelho'), note: t('or see substitutions', 'ou veja as substituições') },
        { amount: 2, name: t('large eggs', 'ovos grandes') },
        { amount: 45, unit: 'g', name: t('unsalted butter', 'manteiga sem sal'), note: t('melted and slightly cooled, plus extra for the pan', 'derretida e amornada, mais um pouco para a frigideira') },
        { amount: 1, unit: 'tsp', name: t('vanilla extract', 'extrato de baunilha') },
      ],
    },
    {
      title: t('To serve', 'Para servir'),
      items: [
        { amount: 120, unit: 'ml', name: t('maple syrup', 'xarope de bordo (maple syrup)') },
        { amount: 125, unit: 'g', name: t('fresh blueberries', 'mirtilos frescos') },
        { amount: 1, name: t('banana', 'banana'), note: t('sliced', 'em rodelas') },
      ],
    },
  ],
  steps: [
    {
      title: t('Whisk the dry ingredients', 'Misture os secos'),
      body: t(
        'In a large bowl, whisk the flour, sugar, baking powder, baking soda and salt until evenly combined.',
        'Em uma tigela grande, misture a farinha, o açúcar, o fermento, o bicarbonato e o sal até ficarem bem combinados.',
      ),
      minutes: 2,
    },
    {
      title: t('Combine the wet ingredients', 'Junte os líquidos'),
      body: t(
        'In a jug, whisk the buttermilk, eggs and vanilla, then whisk in the melted butter in a thin stream.',
        'Em uma jarra, bata o leitelho, os ovos e a baunilha, depois incorpore a manteiga derretida em fio, sem parar de mexer.',
      ),
      minutes: 2,
    },
    {
      title: t('Mix — but barely', 'Misture — mas pouco'),
      body: t(
        'Pour the wet ingredients into the dry and fold with a spatula just until no dry flour remains. The batter should be thick and lumpy. Stop mixing.',
        'Despeje os líquidos sobre os secos e misture com uma espátula só até não restar farinha seca. A massa deve ficar grossa e com grumos. Pare de mexer.',
      ),
      minutes: 1,
      tip: t(
        'Overmixing develops gluten and gives you flat, rubbery pancakes.',
        'Misturar demais desenvolve o glúten e deixa as panquecas achatadas e borrachudas.',
      ),
    },
    {
      title: t('Let it rest', 'Deixe descansar'),
      body: t(
        'Rest the batter for 5–10 minutes while the pan heats. You will see bubbles forming — that is the leavening getting to work.',
        'Deixe a massa descansar por 5–10 minutos enquanto a frigideira aquece. Você vai ver bolhinhas se formando — é o fermento começando a trabalhar.',
      ),
      minutes: 5,
    },
    {
      title: t('Heat the pan', 'Aqueça a frigideira'),
      body: t(
        'Heat a large non-stick skillet or griddle over medium heat. Brush lightly with butter. It is ready when a drop of water skitters across the surface.',
        'Aqueça uma frigideira antiaderente grande ou uma chapa em fogo médio. Pincele um pouco de manteiga. Está no ponto quando uma gota de água dança na superfície.',
      ),
      minutes: 3,
    },
    {
      title: t('Cook the pancakes', 'Cozinhe as panquecas'),
      body: t(
        'Pour 60 ml (¼ cup) of batter per pancake. Cook for 2–3 minutes, until bubbles appear across the surface and the edges look set, then flip and cook 1–2 minutes more until golden. Keep warm in a 90 °C oven while you finish the batch.',
        'Despeje 60 ml (¼ de xícara) de massa por panqueca. Cozinhe por 2–3 minutos, até surgirem bolhas por toda a superfície e as bordas parecerem firmes; vire e cozinhe por mais 1–2 minutos, até dourar. Mantenha aquecidas no forno a 90 °C enquanto termina o restante.',
      ),
      minutes: 15,
      tip: t(
        'Do not press the pancakes with the spatula after flipping. You will squash all that hard-won fluff.',
        'Não aperte as panquecas com a espátula depois de virar. Você vai esmagar toda a fofura conquistada.',
      ),
    },
    {
      title: t('Stack and serve', 'Empilhe e sirva'),
      body: t(
        'Stack high, top with blueberries, banana and a pat of butter, and pour over warm maple syrup.',
        'Empilhe bem alto, cubra com mirtilos, banana e um pedaço de manteiga, e regue com xarope de bordo morno.',
      ),
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Scatter blueberries onto each pancake right after pouring, instead of mixing them into the batter. No purple streaks, no sinking berries.',
        'Espalhe os mirtilos sobre cada panqueca logo depois de despejar a massa, em vez de misturá-los. Nada de massa roxa nem frutas afundadas.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Cooking on high heat. The outside burns before the middle sets. Medium is your friend; adjust after the first (sacrificial) pancake.',
        'Cozinhar em fogo alto. A parte de fora queima antes de o meio firmar. O fogo médio é seu amigo; ajuste depois da primeira panqueca (a de sacrifício).',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Cool completely, then freeze in a single layer before bagging, for up to 2 months. Reheat straight from frozen in the toaster or a 180 °C oven for 8 minutes.',
        'Deixe esfriar completamente e congele em camada única antes de colocar em um saco, por até 2 meses. Reaqueça direto do congelador na torradeira ou no forno a 180 °C por 8 minutos.',
      ),
    },
    {
      type: 'substitution',
      text: t(
        'No buttermilk? Stir 2 tablespoons of lemon juice into 480 ml of milk and let it sit for 5 minutes.',
        'Sem leitelho? Misture 2 colheres (sopa) de suco de limão em 480 ml de leite e deixe descansar por 5 minutos.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Buttermilk', 'Leitelho'),
      swap: t('milk soured with lemon juice, or thinned plain yogurt', 'leite com suco de limão ou iogurte natural diluído'),
      note: t('Use 2 tbsp lemon juice per 480 ml milk, or 300 g yogurt + 180 ml milk.', 'Use 2 colheres (sopa) de limão para 480 ml de leite, ou 300 g de iogurte + 180 ml de leite.'),
    },
    {
      original: t('All-purpose flour', 'Farinha de trigo'),
      swap: t('a 1:1 gluten-free baking flour blend', 'mistura sem glúten para panificação (1:1)'),
      note: t('Rest the batter for 15 minutes so the starches hydrate.', 'Deixe a massa descansar por 15 minutos para os amidos hidratarem.'),
    },
    {
      original: t('Eggs', 'Ovos'),
      swap: t('2 tbsp ground flaxseed + 6 tbsp water', '2 colheres (sopa) de linhaça moída + 6 colheres (sopa) de água'),
      note: t('Combined with plant milk and vegan butter, this makes the recipe vegan.', 'Com bebida vegetal e manteiga vegana, a receita fica vegana.'),
    },
  ],
  faq: [
    {
      question: t('Why are my pancakes flat?', 'Por que minhas panquecas ficaram baixas?'),
      answer: t(
        'Usually overmixed batter or old baking powder. Test your baking powder by dropping a pinch into hot water — it should fizz vigorously.',
        'Geralmente é massa misturada demais ou fermento velho. Teste o fermento colocando uma pitada em água quente — ele deve borbulhar bastante.',
      ),
    },
    {
      question: t('Can I make the batter the night before?', 'Posso preparar a massa na noite anterior?'),
      answer: t(
        'You can, but the pancakes will be a little less fluffy. Mix the dry and wet ingredients separately the night before and combine in the morning for best results.',
        'Pode, mas as panquecas ficam um pouco menos fofas. Para o melhor resultado, misture os secos e os líquidos separadamente à noite e junte de manhã.',
      ),
    },
    {
      question: t('How do I know when to flip?', 'Como sei a hora de virar?'),
      answer: t(
        'When bubbles cover the surface and the ones near the edge pop and stay open, and the edges look matte rather than glossy.',
        'Quando as bolhas cobrirem a superfície, as das bordas estourarem e ficarem abertas, e as bordas parecerem foscas em vez de brilhantes.',
      ),
    },
  ],
  nutrition: { calories: 520, protein: 13, carbohydrates: 82, fat: 15, fiber: 3, sodium: 690 },
  keywords: tl(
    ['pancakes', 'buttermilk pancakes', 'fluffy pancakes', 'breakfast'],
    ['panquecas americanas', 'panqueca fofinha', 'café da manhã', 'pancake'],
  ),
};
