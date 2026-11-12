import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/chocolate-chip-cookies/hero.jpg';
import ingredients from '../../assets/recipes/chocolate-chip-cookies/ingredients.jpg';
import finalDish from '../../assets/recipes/chocolate-chip-cookies/final.jpg';

export const chocolateChipCookies: RecipeSource = {
  slug: 'chocolate-chip-cookies',
  categories: ['dessert', 'snack'],
  cuisines: ['american'],
  diets: ['vegetarian'],
  mainIngredients: ['chocolate'],
  difficulty: 'easy',
  prepMinutes: 20,
  cookMinutes: 12,
  restMinutes: 60,
  servings: 18,
  rating: { value: 4.9, count: 3876 },
  popularity: 15220,
  datePublished: '2026-09-12',
  dateModified: '2026-11-02',
  author: authors.june,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Mshuang2', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Chocolate_chip_cookies_on_cutting_board.jpg' },
      alt: t('Chocolate chunk cookies on baking parchment', 'Cookies com pedaços de chocolate sobre papel-manteiga'),
      caption: t('Crisp edges, chewy middles.', 'Borda crocante, miolo macio.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Infrogmation', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Chocolate_chip_cookies_fresh_from_the_oven,_July_2024.jpg' },
      alt: t('Balls of cookie dough on baking trays', 'Bolinhas de massa de cookie em assadeiras'),
      caption: t('Chill the dough balls before baking.', 'Gele as bolinhas antes de assar.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Urvi Yagnik', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Chocolate_Chip_Cookies_5.jpg' },
      alt: t('A stack of cookies beside cups of tea', 'Pilha de cookies ao lado de xícaras de chá'),
      caption: t('Best with something hot to drink.', 'Melhor com uma bebida quente.'),
    },
  },

  title: t('Brown Butter Chocolate Chip Cookies', 'Cookies com Gotas de Chocolate e Manteiga Noisette'),
  description: t(
    'Crisp-edged, chewy-centred cookies made with nutty brown butter and big pools of dark chocolate, finished with flaky salt.',
    'Cookies de borda crocante e miolo macio, feitos com manteiga noisette e pedaços grandes de chocolate amargo, finalizados com flor de sal.',
  ),
  headnote: t(
    'Two small upgrades turn a good cookie into a great one. Browning the butter adds a toasty, toffee-like depth, and resting the dough in the fridge for an hour lets the flour hydrate, so the cookies spread less and bake up thicker and chewier. Chop a bar of chocolate instead of using chips for those molten, layered puddles.',
    'Dois detalhes transformam um cookie bom em um cookie incrível. Dourar a manteiga traz um sabor tostado de caramelo, e descansar a massa na geladeira por uma hora hidrata a farinha, então os cookies espalham menos e ficam mais altos e macios. Pique uma barra de chocolate em vez de usar gotas para ter aquelas poças derretidas em camadas.',
  ),
  yieldNote: t('About 18 cookies.', 'Cerca de 18 cookies.'),
  ingredientGroups: [
    {
      title: t('For the dough', 'Para a massa'),
      items: [
        { amount: 170, unit: 'g', name: t('unsalted butter', 'manteiga sem sal') },
        { amount: 150, unit: 'g', name: t('light brown sugar', 'açúcar mascavo claro') },
        { amount: 100, unit: 'g', name: t('caster sugar', 'açúcar refinado') },
        { amount: 1, name: t('egg', 'ovo') },
        { amount: 1, name: t('egg yolk', 'gema') },
        { amount: 2, unit: 'tsp', name: t('vanilla extract', 'extrato de baunilha') },
        { amount: 260, unit: 'g', name: t('plain flour', 'farinha de trigo') },
        { amount: 1, unit: 'tsp', name: t('bicarbonate of soda', 'bicarbonato de sódio') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal') },
        { amount: 200, unit: 'g', name: t('dark chocolate (60–70%)', 'chocolate meio amargo (60–70%)'), note: t('roughly chopped', 'picado grosseiramente') },
      ],
    },
    {
      title: t('To finish', 'Para finalizar'),
      items: [{ amount: 1, unit: 'pinch', name: t('flaky sea salt', 'flor de sal') }],
    },
  ],
  steps: [
    {
      title: t('Brown the butter', 'Faça a manteiga noisette'),
      body: t(
        'Melt the butter in a light-coloured pan over medium heat, swirling, until it foams and the solids turn hazelnut brown, 5–7 minutes. Pour into a large bowl, scraping in the brown bits, and cool 10 minutes.',
        'Derreta a manteiga em uma panela clara em fogo médio, girando, até espumar e os sólidos ficarem cor de avelã, 5–7 minutos. Despeje em uma tigela grande, raspando o fundinho, e deixe amornar por 10 minutos.',
      ),
      minutes: 15,
      tip: t('Your nose will tell you when it’s ready: it smells like toasted hazelnuts.', 'O nariz avisa quando está pronta: cheira a avelã torrada.'),
    },
    {
      title: t('Mix the dough', 'Misture a massa'),
      body: t(
        'Whisk both sugars into the butter, then the egg, yolk and vanilla, until glossy. Fold in the flour, bicarbonate and salt, then the chopped chocolate.',
        'Bata os dois açúcares com a manteiga e depois o ovo, a gema e a baunilha, até ficar brilhante. Incorpore a farinha, o bicarbonato e o sal e, por último, o chocolate picado.',
      ),
      minutes: 5,
    },
    {
      title: t('Rest the dough', 'Descanse a massa'),
      body: t(
        'Scoop into 45 g balls, place on a tray and refrigerate for at least 1 hour (or up to 3 days).',
        'Faça bolas de 45 g, coloque em uma assadeira e leve à geladeira por pelo menos 1 hora (ou até 3 dias).',
      ),
      minutes: 60,
    },
    {
      title: t('Bake', 'Asse'),
      body: t(
        'Heat the oven to 180 °C. Bake on lined trays, 8 per tray and well spaced, for 10–12 minutes until the edges are golden but the centres look underdone. Sprinkle with flaky salt and cool on the tray for 10 minutes.',
        'Preaqueça o forno a 180 °C. Asse em assadeiras forradas, 8 por vez e bem espaçados, por 10–12 minutos, até as bordas dourarem e o centro parecer cru. Salpique flor de sal e deixe esfriar na assadeira por 10 minutos.',
      ),
      minutes: 12,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'mistake',
      text: t(
        'Waiting until the centres look done. They firm up as they cool — pull them early for chewy middles.',
        'Esperar o centro parecer assado. Ele firma ao esfriar — tire antes para o miolo ficar macio.',
      ),
    },
    {
      type: 'chef',
      text: t(
        'For ripples, lift the tray and drop it on the oven rack twice in the last 2 minutes of baking.',
        'Para as ondinhas, levante a assadeira e solte na grade duas vezes nos últimos 2 minutos.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Cookies keep 4 days in an airtight tin. Dough balls freeze for 3 months — bake from frozen, adding 2 minutes.',
        'Os cookies duram 4 dias em pote fechado. As bolinhas congelam por 3 meses — asse direto do freezer com 2 minutos a mais.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Dark chocolate', 'Chocolate meio amargo'),
      swap: t('half milk chocolate, half white chocolate', 'metade chocolate ao leite, metade branco'),
      note: t('Sweeter, more nostalgic.', 'Mais doce e nostálgico.'),
    },
    {
      original: t('Plain flour', 'Farinha de trigo'),
      swap: t('gluten-free flour blend', 'mix de farinha sem glúten'),
      note: t('Rest the dough the full hour so it hydrates properly.', 'Descanse a massa a hora inteira para hidratar bem.'),
    },
  ],
  faq: [
    {
      question: t('Why did my cookies spread flat?', 'Por que meus cookies esparramaram?'),
      answer: t(
        'The butter was too warm or the dough wasn’t chilled. Rest it in the fridge and bake on cool trays.',
        'A manteiga estava quente demais ou a massa não foi gelada. Descanse na geladeira e asse em assadeiras frias.',
      ),
    },
  ],
  nutrition: { calories: 230, protein: 3, carbohydrates: 28, fat: 12, fiber: 1, sodium: 190 },
  keywords: tl(
    ['chocolate chip cookies', 'brown butter cookies', 'chewy cookies', 'baking'],
    ['cookies', 'cookie de chocolate', 'manteiga noisette', 'cookie macio'],
  ),
};
