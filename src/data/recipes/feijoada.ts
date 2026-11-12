import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/feijoada/hero.jpg';
import ingredients from '../../assets/recipes/feijoada/ingredients.jpg';
import finalDish from '../../assets/recipes/feijoada/final.jpg';

export const feijoada: RecipeSource = {
  slug: 'feijoada',
  categories: ['lunch', 'dinner'],
  cuisines: ['brazilian'],
  diets: ['gluten-free', 'dairy-free'],
  mainIngredients: ['beans', 'pork'],
  difficulty: 'hard',
  prepMinutes: 40,
  cookMinutes: 180,
  restMinutes: 720,
  servings: 8,
  rating: { value: 4.9, count: 2741 },
  popularity: 14920,
  datePublished: '2026-09-05',
  dateModified: '2026-11-02',
  author: authors.lucas,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Melsj', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Feijoada_%C3%A0_brasileira_1.jpg' },
      alt: t('A black iron pot full of dark feijoada stew with pieces of pork', 'Panela de ferro cheia de feijoada escura com pedaços de carne de porco'),
      caption: t('Feijoada straight from the pot.', 'Feijoada direto da panela.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Sintegrity', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Feijoada_-_S%C3%A3o_Carlos.jpg' },
      alt: t('Small clay pots of farofa, sautéed collard greens and other feijoada sides', 'Cumbuquinhas de barro com farofa, couve refogada e outros acompanhamentos'),
      caption: t('The sides matter as much as the beans.', 'Os acompanhamentos importam tanto quanto o feijão.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Ridiculopathy', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Feijoada_(Brazilian_dish),_S%C3%A3o_Lu%C3%ADs,_Maranh%C3%A3o.jpg' },
      alt: t('A plate with white rice, collard greens and orange slices next to a bowl of feijoada', 'Prato com arroz branco, couve e laranja ao lado de uma cumbuca de feijoada'),
      caption: t('The full Saturday spread: rice, couve, orange and feijoada.', 'O sábado completo: arroz, couve, laranja e feijoada.'),
    },
  },

  title: t('Feijoada Completa', 'Feijoada Completa'),
  description: t(
    'Brazil’s legendary black bean and pork stew, slow-simmered for hours and served with rice, farofa, collard greens and orange.',
    'O clássico dos sábados brasileiros: feijão-preto cozido lentamente com carnes de porco, servido com arroz, farofa, couve e laranja.',
  ),
  headnote: t(
    'Feijoada is less a recipe than an event. In Brazil it is a Saturday ritual: a pot that bubbles all morning, a table that fills up by lunchtime and a nap that is not optional. The secret is patience — the beans need hours to turn creamy and inky, and the smoked and salted meats need a night in cold water so the stew ends up deep and savoury rather than aggressively salty.',
    'Feijoada é menos uma receita e mais um evento. No Brasil é ritual de sábado: uma panela borbulhando a manhã inteira, uma mesa que enche na hora do almoço e uma soneca que não é opcional. O segredo é paciência — o feijão precisa de horas para ficar cremoso e escuro, e as carnes salgadas e defumadas precisam de uma noite de molho para o caldo ficar profundo e saboroso, não salgado demais.',
  ),
  yieldNote: t('Serves 8 generously, with leftovers that are even better the next day.', 'Serve 8 pessoas com fartura — e a sobra fica ainda melhor no dia seguinte.'),
  ingredientGroups: [
    {
      title: t('For the beans and meats', 'Para o feijão e as carnes'),
      items: [
        { amount: 1, unit: 'kg', name: t('dried black beans', 'feijão-preto'), note: t('picked over and rinsed', 'escolhido e lavado') },
        { amount: 500, unit: 'g', name: t('salted pork ribs', 'costelinha de porco salgada') },
        { amount: 300, unit: 'g', name: t('carne seca (Brazilian dried beef)', 'carne-seca'), note: t('cut into 4 cm chunks', 'em cubos de 4 cm') },
        { amount: 300, unit: 'g', name: t('smoked pork sausage (linguiça calabresa)', 'linguiça calabresa'), note: t('sliced 1 cm thick', 'em rodelas de 1 cm') },
        { amount: 200, unit: 'g', name: t('smoked bacon', 'bacon defumado'), note: t('in one piece', 'em pedaço') },
        { amount: 3, unit: 'l', name: t('water', 'água'), note: t('plus more as needed', 'e mais se precisar') },
        { amount: 3, name: t('bay leaves', 'folhas de louro') },
      ],
    },
    {
      title: t('For the refogado (aromatic base)', 'Para o refogado'),
      items: [
        { amount: 2, unit: 'tbsp', name: t('neutral oil or lard', 'óleo ou banha') },
        { amount: 2, name: t('large onions', 'cebolas grandes'), note: t('finely chopped', 'picadas') },
        { amount: 6, unit: 'clove', name: t('garlic', 'alho'), note: t('crushed', 'amassado') },
        { name: t('salt and black pepper', 'sal e pimenta-do-reino'), note: t('to taste — add salt only at the end', 'a gosto — sal só no final') },
      ],
    },
    {
      title: t('To serve', 'Para acompanhar'),
      items: [
        { amount: 4, unit: 'cup', name: t('cooked white rice', 'arroz branco cozido') },
        { amount: 1, name: t('bunch of collard greens', 'maço de couve'), note: t('finely shredded and sautéed in garlic', 'em tiras finas, refogada no alho') },
        { amount: 2, name: t('oranges', 'laranjas'), note: t('peeled and sliced', 'descascadas e fatiadas') },
        { amount: 2, unit: 'cup', name: t('farofa (toasted cassava flour)', 'farofa') },
      ],
    },
  ],
  steps: [
    {
      title: t('Soak the salted meats overnight', 'Dessalgue as carnes na véspera'),
      body: t(
        'Put the salted ribs and carne seca in a large bowl of cold water and refrigerate for 12 hours, changing the water 3–4 times. Soak the beans in a separate bowl of cold water at the same time.',
        'Coloque a costelinha e a carne-seca em uma tigela grande com água fria e leve à geladeira por 12 horas, trocando a água 3–4 vezes. Deixe o feijão de molho em outra tigela com água fria no mesmo período.',
      ),
      minutes: 720,
      tip: t('Taste a sliver of carne seca after soaking. It should be pleasantly salty, not briny.', 'Prove uma lasquinha da carne-seca depois do molho. Ela deve estar agradavelmente salgada, não salmoura.'),
    },
    {
      title: t('Blanch the meats', 'Escalde as carnes'),
      body: t(
        'Drain the meats, cover with fresh water in a pot, bring to a boil for 5 minutes and drain again. This removes the last of the excess salt and any scum.',
        'Escorra as carnes, cubra com água limpa em uma panela, ferva por 5 minutos e escorra de novo. Isso tira o restinho do sal e as impurezas.',
      ),
      minutes: 10,
    },
    {
      title: t('Start the beans', 'Comece o feijão'),
      body: t(
        'Drain the beans and put them in your largest pot with the water and bay leaves. Bring to a boil, then simmer partly covered for 45 minutes.',
        'Escorra o feijão e coloque na maior panela que tiver, com a água e o louro. Ferva e depois cozinhe em fogo baixo, com a tampa entreaberta, por 45 minutos.',
      ),
      minutes: 45,
    },
    {
      title: t('Add the meats in order of toughness', 'Junte as carnes por ordem de dureza'),
      body: t(
        'Add the carne seca and ribs first and simmer for 1 hour. Then add the bacon and sausage and simmer for another 45 minutes, stirring now and then and topping up with hot water if the beans start to look dry.',
        'Coloque primeiro a carne-seca e a costelinha e cozinhe por 1 hora. Depois junte o bacon e a linguiça e cozinhe por mais 45 minutos, mexendo de vez em quando e completando com água quente se o feijão começar a secar.',
      ),
      minutes: 105,
    },
    {
      title: t('Make the refogado', 'Faça o refogado'),
      body: t(
        'In a frying pan, heat the oil and cook the onions over medium heat until golden, about 8 minutes. Add the garlic for 1 minute. Stir in two ladlefuls of beans, mash them roughly and tip everything back into the pot.',
        'Em uma frigideira, aqueça o óleo e doure a cebola em fogo médio, cerca de 8 minutos. Junte o alho por 1 minuto. Acrescente duas conchas de feijão, amasse grosseiramente e devolva tudo à panela.',
      ),
      minutes: 12,
      tip: t('The mashed beans are what makes the broth thick and velvety — don’t skip them.', 'O feijão amassado é o que deixa o caldo grosso e aveludado — não pule essa parte.'),
    },
    {
      title: t('Finish and season', 'Finalize e acerte o sal'),
      body: t(
        'Simmer for 15–20 minutes more until the broth is thick and glossy. Only now taste and add salt and pepper. Slice the bacon and ribs into serving pieces.',
        'Cozinhe por mais 15–20 minutos, até o caldo ficar grosso e brilhante. Só agora prove e acerte sal e pimenta. Corte o bacon e a costelinha em pedaços para servir.',
      ),
      minutes: 20,
    },
    {
      title: t('Serve the full spread', 'Monte a mesa completa'),
      body: t(
        'Bring the pot to the table with bowls of rice, garlicky collards, farofa and orange slices. The orange is not decoration — its acidity cuts through the richness.',
        'Leve a panela à mesa com o arroz, a couve refogada no alho, a farofa e as fatias de laranja. A laranja não é enfeite — a acidez dela equilibra a gordura.',
      ),
      minutes: 5,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Make it a day ahead. Like most stews, feijoada tastes better after a night in the fridge — and skimming the solidified fat is easy.',
        'Faça na véspera. Como quase todo cozido, a feijoada fica melhor depois de uma noite na geladeira — e fica fácil tirar a gordura que endurece por cima.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Salting early. The cured meats keep releasing salt for hours; season only in the last 15 minutes.',
        'Salgar cedo demais. As carnes curadas soltam sal por horas; acerte o tempero só nos últimos 15 minutos.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Keeps for 4 days in the fridge and 3 months in the freezer. Add a splash of water when reheating.',
        'Dura 4 dias na geladeira e 3 meses no freezer. Acrescente um pouco de água ao requentar.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Salted pork ribs and carne seca', 'Costelinha salgada e carne-seca'),
      swap: t('fresh pork ribs and beef brisket', 'costelinha fresca e peito bovino'),
      note: t('No overnight soak needed, but season more generously at the end.', 'Não precisa dessalgar, mas tempere com mais generosidade no final.'),
    },
    {
      original: t('All the meats', 'Todas as carnes'),
      swap: t('smoked tofu, mushrooms and smoked paprika', 'tofu defumado, cogumelos e páprica defumada'),
      note: t('A respectable vegan “feijoada” — use 2 tsp paprika for the smoky depth.', 'Uma “feijoada” vegana respeitável — use 2 colheres (chá) de páprica para o defumado.'),
    },
  ],
  faq: [
    {
      question: t('Can I use a pressure cooker?', 'Posso usar panela de pressão?'),
      answer: t(
        'Yes. Cook the soaked beans with the carne seca and ribs for 30 minutes at pressure, release, add the sausage and bacon, and simmer uncovered for 30 minutes.',
        'Sim. Cozinhe o feijão já de molho com a carne-seca e a costelinha por 30 minutos na pressão, tire a pressão, junte linguiça e bacon e cozinhe destampado por 30 minutos.',
      ),
    },
    {
      question: t('Where do I find carne seca?', 'Onde encontro carne-seca?'),
      answer: t(
        'In Brazilian or Latin American shops. Outside Brazil, salted beef or even good corned beef works in a pinch.',
        'Em qualquer supermercado no Brasil. Fora do país, procure lojas brasileiras ou latinas; carne bovina salgada também serve.',
      ),
    },
    {
      question: t('Why is it served with orange?', 'Por que se serve com laranja?'),
      answer: t(
        'Tradition and science agree: the acidity and freshness of the orange balance the rich, fatty stew and make the meal feel lighter.',
        'Tradição e ciência concordam: a acidez e o frescor da laranja equilibram o cozido gorduroso e deixam a refeição mais leve.',
      ),
    },
  ],
  nutrition: { calories: 640, protein: 42, carbohydrates: 58, fat: 26, fiber: 16, sodium: 1450 },
  keywords: tl(
    ['feijoada', 'Brazilian black bean stew', 'pork and beans', 'Saturday lunch'],
    ['feijoada', 'feijão-preto', 'feijoada completa', 'almoço de sábado'],
  ),
};
