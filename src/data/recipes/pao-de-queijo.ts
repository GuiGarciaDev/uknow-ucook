import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/pao-de-queijo/hero.jpg';
import ingredients from '../../assets/recipes/pao-de-queijo/ingredients.jpg';
import finalDish from '../../assets/recipes/pao-de-queijo/final.jpg';

export const paoDeQueijo: RecipeSource = {
  slug: 'pao-de-queijo',
  categories: ['snack', 'breakfast'],
  cuisines: ['brazilian'],
  diets: ['vegetarian', 'gluten-free'],
  mainIngredients: ['cheese', 'eggs'],
  difficulty: 'easy',
  prepMinutes: 25,
  cookMinutes: 30,
  restMinutes: 15,
  servings: 10,
  rating: { value: 4.8, count: 2311 },
  popularity: 11250,
  datePublished: '2026-02-02',
  dateModified: '2026-09-18',
  author: authors.lucas,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Murilo Manzini', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Cheesebread.jpg' },
      alt: t(
        'A wicker basket lined with a napkin, piled high with golden, round Brazilian cheese breads.',
        'Uma cesta de vime forrada com guardanapo, cheia de pães de queijo redondos e dourados.',
      ),
      caption: t('Crisp outside, stretchy inside, gone in four minutes.', 'Casquinha crocante, miolo elástico, acabam em quatro minutos.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: '18610 Arthurdent', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:P%C3%A3o_de_Queijo.jpg' },
      alt: t(
        'A white bowl filled with pale yellow balls of shaped cheese-bread dough on a green gingham tablecloth.',
        'Uma tigela branca cheia de bolinhas de massa de pão de queijo, amarelo-claras, sobre uma toalha xadrez verde.',
      ),
      caption: t('Rolled and ready. Oil your hands — trust us.', 'Enroladas e prontas. Unte as mãos — confie.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Melsj', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:P%C3%A3o_de_queijo_3.jpg' },
      alt: t(
        'Close-up of a single puffed pão de queijo on a paper napkin, its crackled golden crust flecked with cheese.',
        'Close de um pão de queijo estufado sobre um guardanapo de papel, com a casquinha dourada e rachada pontilhada de queijo.',
      ),
      caption: t('Best enjoyed warm, with coffee and zero restraint.', 'Melhor quentinho, com café e zero moderação.'),
    },
  },

  title: t('Brazilian Pão de Queijo', 'Pão de Queijo Mineiro'),
  description: t(
    'Golden, chewy, naturally gluten-free cheese bread from Minas Gerais. Crisp on the outside, gloriously stretchy inside.',
    'O clássico de Minas Gerais: dourado, elástico e naturalmente sem glúten. Crocante por fora, gloriosamente puxa-puxa por dentro.',
  ),
  headnote: t(
    'Pão de queijo is what happens when tapioca starch meets cheese and decides to become everyone\'s favourite snack. The scalding step — pouring hot milk and oil over the starch — is what gives it that famous chewy, stretchy crumb. Make a double batch and freeze half; future you will be grateful.',
    'O pão de queijo é o que acontece quando o polvilho encontra o queijo e decide virar o lanche favorito de todo mundo. A escaldadura — despejar leite e óleo quentes sobre o polvilho — é o que dá aquela textura elástica famosa. Faça receita dobrada e congele metade; o você do futuro vai agradecer.',
  ),
  yieldNote: t('About 40 small breads (4 per serving).', 'Cerca de 40 pãezinhos (4 por porção).'),
  ingredientGroups: [
    {
      title: t('For the scalded dough', 'Para a escaldadura'),
      items: [
        { amount: 500, unit: 'g', name: t('sour tapioca starch (polvilho azedo)', 'polvilho azedo') },
        { amount: 240, unit: 'ml', name: t('whole milk', 'leite integral') },
        { amount: 120, unit: 'ml', name: t('water', 'água') },
        { amount: 120, unit: 'ml', name: t('neutral oil', 'óleo neutro'), note: t('sunflower or canola', 'girassol ou canola') },
        { amount: 2, unit: 'tsp', name: t('fine salt', 'sal refinado') },
      ],
    },
    {
      title: t('To finish', 'Para finalizar'),
      items: [
        { amount: 3, name: t('large eggs', 'ovos grandes'), note: t('at room temperature, lightly beaten', 'em temperatura ambiente, levemente batidos') },
        { amount: 200, unit: 'g', name: t('semi-cured Minas cheese', 'queijo minas meia-cura'), note: t('or aged Gouda, finely grated', 'ou gouda curado, ralado fino') },
        { amount: 50, unit: 'g', name: t('Parmesan', 'parmesão'), note: t('finely grated', 'ralado fino') },
      ],
    },
  ],
  steps: [
    {
      title: t('Heat the liquids', 'Aqueça os líquidos'),
      body: t(
        'Preheat the oven to 200 °C (180 °C fan). In a saucepan, bring the milk, water, oil and salt just to a boil — watch it, milk loves to escape.',
        'Preaqueça o forno a 200 °C (180 °C com ventilação). Em uma panela, leve o leite, a água, o óleo e o sal só até ferver — fique de olho, o leite adora fugir.',
      ),
      minutes: 5,
    },
    {
      title: t('Scald the starch', 'Escalde o polvilho'),
      body: t(
        'Put the tapioca starch in a large bowl. Pour the boiling liquid over it all at once and mix with a wooden spoon until there are no dry patches. It will look lumpy and strange — that is correct.',
        'Coloque o polvilho em uma tigela grande. Despeje o líquido fervente de uma só vez e misture com uma colher de pau até não sobrar nenhuma parte seca. Vai parecer empelotado e estranho — está certo.',
      ),
      minutes: 3,
    },
    {
      title: t('Let it cool', 'Deixe esfriar'),
      body: t(
        'Leave the dough to cool until warm to the touch, about 15 minutes, so it does not cook the eggs.',
        'Deixe a massa esfriar até ficar morna ao toque, cerca de 15 minutos, para não cozinhar os ovos.',
      ),
      minutes: 15,
    },
    {
      title: t('Add the eggs', 'Junte os ovos'),
      body: t(
        'Add the eggs a little at a time, kneading with your hand or a stand mixer with the paddle after each addition, until the dough is smooth, sticky and shiny.',
        'Acrescente os ovos aos poucos, sovando com a mão ou na batedeira com a pá após cada adição, até a massa ficar lisa, grudenta e brilhante.',
      ),
      minutes: 5,
      tip: t(
        'Hold back a few spoonfuls of egg. If the dough is already soft enough to shape, you will not need them.',
        'Reserve algumas colheradas de ovo. Se a massa já estiver macia o suficiente para enrolar, você não vai precisar delas.',
      ),
    },
    {
      title: t('Knead in the cheese', 'Incorpore o queijo'),
      body: t(
        'Add both cheeses and knead until evenly distributed. The dough should be soft and slightly tacky, but hold its shape when rolled.',
        'Adicione os dois queijos e sove até distribuir bem. A massa deve ficar macia e levemente pegajosa, mas manter a forma ao ser enrolada.',
      ),
      minutes: 3,
    },
    {
      title: t('Shape the balls', 'Modele as bolinhas'),
      body: t(
        'Grease your hands with a little oil and roll the dough into balls about 3 cm across (roughly 25 g each). Arrange them on a lined baking sheet, 3 cm apart.',
        'Unte as mãos com um pouco de óleo e enrole bolinhas de cerca de 3 cm (mais ou menos 25 g cada). Disponha em uma assadeira forrada, com 3 cm de distância entre elas.',
      ),
      minutes: 10,
    },
    {
      title: t('Bake until golden', 'Asse até dourar'),
      body: t(
        'Bake for 25–30 minutes, until puffed and lightly golden on the bottom and top. Do not open the oven in the first 15 minutes or they may collapse. Serve warm.',
        'Asse por 25–30 minutos, até crescerem e dourarem levemente em cima e embaixo. Não abra o forno nos primeiros 15 minutos, ou eles podem murchar. Sirva quentinho.',
      ),
      minutes: 30,
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Use a mix of sour and sweet tapioca starch (300 g azedo + 200 g doce) for a lighter, more even rise.',
        'Use uma mistura de polvilho azedo e doce (300 g de azedo + 200 g de doce) para pães mais leves e com crescimento uniforme.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Adding the eggs while the dough is still hot. They cook on contact and the breads come out dense and flat.',
        'Adicionar os ovos com a massa ainda quente. Eles cozinham na hora e os pães ficam densos e achatados.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Freeze shaped, unbaked balls on a tray, then bag them for up to 3 months. Bake straight from frozen at 200 °C for 30–35 minutes. Baked breads are best the same day; revive them in a hot oven for 5 minutes.',
        'Congele as bolinhas cruas em uma assadeira e depois transfira para um saco, por até 3 meses. Asse direto do congelador a 200 °C por 30–35 minutos. Pães assados são melhores no mesmo dia; reaqueça em forno quente por 5 minutos.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'Naturally gluten-free — but check your starch packaging for cross-contamination if you are cooking for someone with coeliac disease.',
        'Naturalmente sem glúten — mas confira a embalagem do polvilho quanto à contaminação cruzada se for cozinhar para alguém com doença celíaca.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Minas cheese', 'Queijo minas meia-cura'),
      swap: t('aged Gouda, Gruyère or sharp white cheddar', 'gouda curado, gruyère ou cheddar branco'),
      note: t('Any firm, flavourful melting cheese works. Avoid very oily cheeses.', 'Qualquer queijo firme, saboroso e que derreta funciona. Evite queijos muito gordurosos.'),
    },
    {
      original: t('Whole milk', 'Leite integral'),
      swap: t('unsweetened oat milk', 'bebida de aveia sem açúcar'),
      note: t('Works well; the crumb is very slightly less rich.', 'Funciona bem; o miolo fica só um pouquinho menos rico.'),
    },
    {
      original: t('Sour tapioca starch', 'Polvilho azedo'),
      swap: t('sweet tapioca starch only', 'só polvilho doce'),
      note: t('Breads will be denser and rise less, with a milder flavour.', 'Os pães ficam mais densos, crescem menos e têm sabor mais suave.'),
    },
  ],
  faq: [
    {
      question: t('Where do I find polvilho azedo outside Brazil?', 'Onde encontro polvilho azedo fora do Brasil?'),
      answer: t(
        'Look for "sour cassava starch" or "polvilho azedo" in Latin American shops or online. Regular tapioca starch (sweet) also works, with a slightly denser result.',
        'Procure por "sour cassava starch" ou "polvilho azedo" em mercados latinos ou on-line. O polvilho doce comum também funciona, com resultado um pouco mais denso.',
      ),
    },
    {
      question: t('Why are my breads flat?', 'Por que meus pães ficaram achatados?'),
      answer: t(
        'Usually the dough was too wet (too much egg) or the oven was not hot enough. Add egg gradually and make sure the oven is fully preheated.',
        'Geralmente a massa ficou mole demais (excesso de ovo) ou o forno não estava quente o suficiente. Adicione o ovo aos poucos e preaqueça bem o forno.',
      ),
    },
    {
      question: t('Can I make them without a mixer?', 'Dá para fazer sem batedeira?'),
      answer: t(
        'Absolutely — Brazilian grandmothers have been doing it by hand for generations. Expect about 5 minutes of enthusiastic kneading.',
        'Com certeza — as avós mineiras fazem à mão há gerações. Conte com uns 5 minutos de sova entusiasmada.',
      ),
    },
  ],
  nutrition: { calories: 290, protein: 8, carbohydrates: 34, fat: 14, fiber: 0, sodium: 380 },
  keywords: tl(
    ['pão de queijo', 'Brazilian cheese bread', 'gluten-free', 'tapioca'],
    ['pão de queijo', 'polvilho', 'sem glúten', 'receita mineira'],
  ),
};
