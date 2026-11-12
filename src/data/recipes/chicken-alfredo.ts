import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/chicken-alfredo/hero.jpg';
import ingredients from '../../assets/recipes/chicken-alfredo/ingredients.jpg';
import finalDish from '../../assets/recipes/chicken-alfredo/final.jpg';

export const chickenAlfredo: RecipeSource = {
  slug: 'chicken-alfredo',
  categories: ['dinner'],
  cuisines: ['italian', 'american'],
  diets: [],
  mainIngredients: ['pasta', 'chicken', 'cheese'],
  difficulty: 'easy',
  prepMinutes: 15,
  cookMinutes: 25,
  servings: 4,
  rating: { value: 4.6, count: 865 },
  popularity: 8120,
  datePublished: '2026-04-21',
  dateModified: '2026-08-30',
  author: authors.theo,
  images: {
    hero: {
      src: hero,
      credit: { author: 'BrokenSphere', license: 'CC BY 3.0', source: 'https://commons.wikimedia.org/wiki/File:Lori%27s_Diner_chicken_fettucine_alfredo.JPG' },
      alt: t(
        'Close-up of fettuccine coated in a creamy white Alfredo sauce with slices of chicken, broccoli florets and chopped parsley.',
        'Close de fettuccine envolto em molho Alfredo branco e cremoso, com fatias de frango, floretes de brócolis e salsinha picada.',
      ),
      caption: t('Comfort food with a business degree.', 'Comida afetiva com diploma de administração.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Isiwal', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Parmigiano_Reggiano_DOP_Billa.jpg' },
      alt: t(
        'A wedge of Parmigiano Reggiano with its stamped rind, photographed on a light background.',
        'Uma fatia de Parmigiano Reggiano com a casca carimbada, fotografada sobre um fundo claro.',
      ),
      caption: t('Buy the wedge, grate it yourself. Pre-grated cheese will not melt smoothly.', 'Compre o pedaço e rale na hora. Queijo já ralado não derrete direito.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Missvain', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Jacob%27s_Restaurant_-_December_2025_-_Sarah_Stierch_05.jpg' },
      alt: t(
        'A wide white bowl of chicken fettuccine Alfredo with a slice of toasted garlic bread on the rim.',
        'Um prato fundo branco de fettuccine Alfredo com frango e uma fatia de pão de alho tostado na borda.',
      ),
      caption: t('Garlic bread optional. (It is not optional.)', 'Pão de alho opcional. (Não é opcional.)'),
    },
  },

  title: t('Creamy Chicken Alfredo', 'Fettuccine Alfredo com Frango'),
  description: t(
    'Juicy seared chicken and fettuccine in a velvety garlic-Parmesan cream sauce. Weeknight-easy, weekend-worthy.',
    'Frango dourado e suculento com fettuccine em um molho aveludado de creme, alho e parmesão. Fácil para o dia a dia, digno de fim de semana.',
  ),
  headnote: t(
    'The Rome original is just butter, Parmigiano and pasta water. The Italian-American version — cream, garlic and seared chicken — is the one that conquered the world, and honestly, we get it. The trick is to keep the sauce at a gentle simmer and add the cheese off the heat so it melts into silk instead of clumping.',
    'O original de Roma leva só manteiga, parmesão e água do cozimento. A versão ítalo-americana — com creme de leite, alho e frango dourado — é a que conquistou o mundo, e, sinceramente, entendemos o motivo. O truque é manter o molho em fervura suave e juntar o queijo fora do fogo, para ele derreter como seda em vez de empelotar.',
  ),
  ingredientGroups: [
    {
      title: t('For the chicken', 'Para o frango'),
      items: [
        { amount: 500, unit: 'g', name: t('boneless, skinless chicken breasts', 'peito de frango sem pele e sem osso'), note: t('about 2 large', 'cerca de 2 grandes') },
        { amount: 1, unit: 'tbsp', name: t('olive oil', 'azeite de oliva') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal refinado') },
        { amount: 0.5, unit: 'tsp', name: t('black pepper', 'pimenta-do-reino moída') },
        { amount: 0.5, unit: 'tsp', name: t('garlic powder', 'alho em pó') },
      ],
    },
    {
      title: t('For the pasta', 'Para a massa'),
      items: [
        { amount: 400, unit: 'g', name: t('fettuccine', 'fettuccine') },
        { amount: 250, unit: 'g', name: t('broccoli florets', 'floretes de brócolis'), note: t('optional, but recommended', 'opcional, mas recomendado') },
      ],
    },
    {
      title: t('For the Alfredo sauce', 'Para o molho Alfredo'),
      items: [
        { amount: 50, unit: 'g', name: t('unsalted butter', 'manteiga sem sal') },
        { amount: 3, unit: 'clove', name: t('garlic', 'alho'), note: t('finely grated', 'ralado fino') },
        { amount: 360, unit: 'ml', name: t('heavy cream', 'creme de leite fresco'), note: t('35% fat', '35% de gordura') },
        { amount: 100, unit: 'g', name: t('Parmigiano Reggiano', 'parmesão'), note: t('finely grated, plus extra to serve', 'ralado fino, mais um pouco para servir') },
        { amount: 1, unit: 'pinch', name: t('freshly grated nutmeg', 'noz-moscada ralada na hora') },
        { amount: 2, unit: 'tbsp', name: t('flat-leaf parsley', 'salsinha'), note: t('chopped', 'picada') },
      ],
    },
  ],
  steps: [
    {
      title: t('Even out the chicken', 'Nivele o frango'),
      body: t(
        'Pound the thick end of each chicken breast between two sheets of parchment until about 2 cm thick all over. Pat dry and season with salt, pepper and garlic powder.',
        'Bata a parte mais grossa de cada peito de frango entre duas folhas de papel-manteiga até ficar com cerca de 2 cm de espessura por inteiro. Seque bem e tempere com sal, pimenta e alho em pó.',
      ),
      minutes: 5,
    },
    {
      title: t('Sear the chicken', 'Doure o frango'),
      body: t(
        'Heat the olive oil in a large skillet over medium-high heat. Sear the chicken without moving it for 5–6 minutes per side, until deeply golden and 74 °C in the thickest part. Rest on a board for 5 minutes, then slice.',
        'Aqueça o azeite em uma frigideira grande em fogo médio-alto. Doure o frango sem mexer por 5–6 minutos de cada lado, até ficar bem dourado e atingir 74 °C na parte mais grossa. Deixe descansar em uma tábua por 5 minutos e fatie.',
      ),
      minutes: 12,
      tip: t(
        'Do not wash the skillet — those browned bits are the base of your sauce.',
        'Não lave a frigideira — esses resíduos dourados são a base do molho.',
      ),
    },
    {
      title: t('Cook the pasta and broccoli', 'Cozinhe a massa e o brócolis'),
      body: t(
        'Cook the fettuccine in well-salted boiling water until al dente. Add the broccoli to the same pot for the final 3 minutes. Reserve 200 ml of pasta water, then drain.',
        'Cozinhe o fettuccine em água fervente bem salgada até ficar al dente. Coloque o brócolis na mesma panela nos últimos 3 minutos. Reserve 200 ml da água do cozimento e escorra.',
      ),
      minutes: 10,
    },
    {
      title: t('Start the sauce', 'Comece o molho'),
      body: t(
        'In the chicken skillet, melt the butter over medium-low heat. Add the garlic and cook for 1 minute, until fragrant but not browned. Pour in the cream, scrape up the browned bits and simmer gently for 4–5 minutes, until slightly thickened.',
        'Na frigideira do frango, derreta a manteiga em fogo médio-baixo. Junte o alho e refogue por 1 minuto, até perfumar sem dourar. Despeje o creme de leite, raspe os resíduos do fundo e deixe ferver suavemente por 4–5 minutos, até engrossar um pouco.',
      ),
      minutes: 6,
    },
    {
      title: t('Melt in the Parmesan', 'Derreta o parmesão'),
      body: t(
        'Take the skillet off the heat. Add the Parmesan a handful at a time, stirring until each addition melts. Season with nutmeg, then taste for salt and pepper.',
        'Tire a frigideira do fogo. Acrescente o parmesão aos punhados, mexendo até cada porção derreter. Tempere com noz-moscada e acerte o sal e a pimenta.',
      ),
      minutes: 2,
      tip: t(
        'Adding cheese to boiling cream makes it seize into stringy clumps. Off the heat, always.',
        'Colocar queijo no creme fervendo faz ele empelotar em fios. Sempre fora do fogo.',
      ),
    },
    {
      title: t('Toss everything together', 'Misture tudo'),
      body: t(
        'Add the pasta and broccoli to the sauce and toss over low heat, loosening with splashes of pasta water until glossy. Fold in the sliced chicken and any resting juices.',
        'Junte a massa e o brócolis ao molho e misture em fogo baixo, soltando com um pouco da água do cozimento até ficar brilhante. Incorpore o frango fatiado e o caldo que soltou no descanso.',
      ),
      minutes: 2,
    },
    {
      title: t('Serve', 'Sirva'),
      body: t(
        'Plate immediately, finish with parsley, more Parmesan and a crack of black pepper.',
        'Sirva imediatamente, finalizando com salsinha, mais parmesão e pimenta-do-reino moída na hora.',
      ),
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Grate the garlic on a microplane so it dissolves into the sauce — no bitter, crunchy surprises.',
        'Rale o alho no ralador fino para ele se dissolver no molho — sem pedacinhos amargos e crocantes.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Using pre-grated Parmesan from a tub. It contains anti-caking agents that turn the sauce grainy.',
        'Usar parmesão já ralado de pacote. Ele tem antiumectantes que deixam o molho arenoso.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Refrigerate in an airtight container for up to 3 days. Reheat gently on the stove with a splash of milk, stirring until creamy again; the microwave tends to split the sauce.',
        'Guarde na geladeira em pote hermético por até 3 dias. Reaqueça no fogão em fogo baixo com um pouco de leite, mexendo até voltar a ficar cremoso; o micro-ondas tende a talhar o molho.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'Always check chicken with a thermometer: 74 °C (165 °F) in the thickest part is the safe target.',
        'Sempre confira o frango com termômetro: 74 °C na parte mais grossa é o ponto seguro.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Heavy cream', 'Creme de leite fresco'),
      swap: t('half-and-half plus 1 tsp cornstarch', 'creme de leite de caixinha com 1 colher (chá) de amido de milho'),
      note: t('Lighter, slightly less rich. Whisk the starch into the cold liquid first.', 'Mais leve e um pouco menos rico. Dissolva o amido no líquido frio antes.'),
    },
    {
      original: t('Chicken breast', 'Peito de frango'),
      swap: t('boneless chicken thighs or large shrimp', 'sobrecoxa desossada ou camarões grandes'),
      note: t('Thighs stay juicier; shrimp need only 2 minutes per side.', 'A sobrecoxa fica mais suculenta; os camarões precisam de só 2 minutos de cada lado.'),
    },
    {
      original: t('Fettuccine', 'Fettuccine'),
      swap: t('gluten-free fettuccine', 'fettuccine sem glúten'),
      note: t('Cook 1 minute less than the packet suggests — it softens further in the sauce.', 'Cozinhe 1 minuto a menos que o indicado — ela amolece mais no molho.'),
    },
  ],
  faq: [
    {
      question: t('Why did my Alfredo sauce turn grainy?', 'Por que meu molho Alfredo ficou arenoso?'),
      answer: t(
        'Either the cheese went into boiling cream or it was pre-grated. Use freshly grated Parmigiano and add it off the heat.',
        'Ou o queijo foi para o creme fervendo, ou era parmesão já ralado. Use parmesão ralado na hora e junte fora do fogo.',
      ),
    },
    {
      question: t('Is this the authentic Italian Alfredo?', 'Este é o Alfredo autêntico italiano?'),
      answer: t(
        'Not quite. In Rome, fettuccine Alfredo is only butter, Parmigiano and pasta water. This is the beloved Italian-American version with cream and chicken.',
        'Não exatamente. Em Roma, o fettuccine Alfredo leva só manteiga, parmesão e água do cozimento. Esta é a querida versão ítalo-americana, com creme de leite e frango.',
      ),
    },
    {
      question: t('Can I make the sauce ahead?', 'Posso preparar o molho com antecedência?'),
      answer: t(
        'It is best fresh, but you can make it up to a day ahead and reheat slowly with a little milk, whisking constantly.',
        'Fica melhor feito na hora, mas dá para preparar até um dia antes e reaquecer devagar com um pouco de leite, mexendo sempre.',
      ),
    },
  ],
  nutrition: { calories: 980, protein: 52, carbohydrates: 72, fat: 54, fiber: 4, sodium: 820 },
  keywords: tl(
    ['chicken alfredo', 'fettuccine alfredo', 'creamy pasta', 'weeknight dinner'],
    ['fettuccine alfredo', 'macarrão com frango', 'massa cremosa', 'jantar rápido'],
  ),
};
