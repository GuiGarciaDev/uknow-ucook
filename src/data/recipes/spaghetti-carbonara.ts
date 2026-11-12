import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/spaghetti-carbonara/hero.jpg';
import ingredients from '../../assets/recipes/spaghetti-carbonara/ingredients.jpg';
import finalDish from '../../assets/recipes/spaghetti-carbonara/final.jpg';

export const spaghettiCarbonara: RecipeSource = {
  slug: 'spaghetti-carbonara',
  categories: ['dinner'],
  cuisines: ['italian'],
  diets: [],
  mainIngredients: ['pasta', 'eggs', 'pork', 'cheese'],
  difficulty: 'medium',
  prepMinutes: 10,
  cookMinutes: 20,
  servings: 4,
  rating: { value: 4.9, count: 1284 },
  popularity: 9840,
  datePublished: '2026-03-14',
  dateModified: '2026-10-02',
  author: authors.marina,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Javier Somoza', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Espaguetis_carbonara.jpg' },
      alt: t(
        'A twirl of glossy spaghetti carbonara with crisp guanciale on a dark plate, set on a rustic wooden table.',
        'Uma porção de espaguete à carbonara brilhante com guanciale crocante em um prato escuro, sobre uma mesa de madeira rústica.',
      ),
      caption: t('Five ingredients, zero cream, total silence at the table.', 'Cinco ingredientes, zero creme de leite, silêncio total à mesa.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Sir James', license: 'CC BY 4.0', source: 'https://commons.wikimedia.org/wiki/File:2019-02-01_Guanciale_al_Pepe_gewuerfelt.JPG' },
      alt: t(
        'Cubes of pepper-crusted guanciale on a wooden cutting board, showing layers of white fat and pink meat.',
        'Cubos de guanciale com crosta de pimenta em uma tábua de madeira, mostrando camadas de gordura branca e carne rosada.',
      ),
      caption: t('Guanciale: cured pork cheek, and the real star of the show.', 'Guanciale: bochecha de porco curada, a verdadeira estrela do prato.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Mattes Boch', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:Spaghetti_alla_Carbonara.jpg' },
      alt: t(
        'A white bowl of spaghetti carbonara finished with grated pecorino and cracked black pepper, a glass of red wine beside it.',
        'Um prato branco de espaguete à carbonara finalizado com pecorino ralado e pimenta-do-reino moída, ao lado de uma taça de vinho tinto.',
      ),
      caption: t('Serve immediately. Carbonara waits for no one.', 'Sirva na hora. Carbonara não espera ninguém.'),
    },
  },

  title: t('Classic Spaghetti Carbonara', 'Espaguete à Carbonara Clássico'),
  description: t(
    'The Roman original: silky egg-and-pecorino sauce, crispy guanciale and a serious amount of black pepper. No cream. We checked.',
    'O original romano: molho sedoso de ovos e pecorino, guanciale crocante e muita pimenta-do-reino. Sem creme de leite. Nós conferimos.',
  ),
  headnote: t(
    'Carbonara is a magic trick: eggs, cheese and starchy pasta water become a glossy sauce with no cream at all. The only secret is temperature — hot enough to thicken the eggs, never hot enough to scramble them. Do it off the heat, toss like you mean it, and you will never order it at a restaurant again.',
    'A carbonara é um truque de mágica: ovos, queijo e a água do cozimento da massa viram um molho brilhante sem nenhum creme de leite. O único segredo é a temperatura — quente o suficiente para engrossar os ovos, nunca a ponto de virar ovo mexido. Faça fora do fogo, misture com vontade e você nunca mais vai pedir isso em restaurante.',
  ),
  ingredientGroups: [
    {
      title: t('For the pasta', 'Para a massa'),
      items: [
        { amount: 400, unit: 'g', name: t('spaghetti', 'espaguete'), note: t('bronze-cut if you can find it', 'de preferência trefilado em bronze') },
        { amount: 1, unit: 'tbsp', name: t('coarse salt', 'sal grosso'), note: t('for the cooking water', 'para a água do cozimento') },
      ],
    },
    {
      title: t('For the sauce', 'Para o molho'),
      items: [
        { amount: 150, unit: 'g', name: t('guanciale', 'guanciale'), note: t('rind removed, cut into 1 cm strips', 'sem a pele, cortado em tiras de 1 cm') },
        { amount: 4, name: t('large egg yolks', 'gemas grandes'), note: t('at room temperature', 'em temperatura ambiente') },
        { amount: 1, name: t('large whole egg', 'ovo grande inteiro') },
        { amount: 80, unit: 'g', name: t('Pecorino Romano', 'Pecorino Romano'), note: t('finely grated, plus extra to serve', 'ralado fino, mais um pouco para servir') },
        { amount: 2, unit: 'tsp', name: t('black peppercorns', 'pimenta-do-reino em grãos'), note: t('freshly and coarsely cracked', 'moída na hora, grossa') },
      ],
    },
  ],
  steps: [
    {
      title: t('Put the water on', 'Coloque a água para ferver'),
      body: t(
        'Bring 4 litres of water to a rolling boil in a large pot. Add the coarse salt only once it is boiling — it should taste pleasantly salty, like a mild broth.',
        'Leve 4 litros de água a uma fervura forte em uma panela grande. Adicione o sal grosso só quando estiver fervendo — a água deve ficar levemente salgada, como um caldo suave.',
      ),
      minutes: 10,
    },
    {
      title: t('Render the guanciale', 'Derreta o guanciale'),
      body: t(
        'Place the guanciale strips in a large, cold, wide skillet. Turn the heat to medium-low and let the fat melt slowly, stirring now and then, until the edges are golden and crisp but the centre is still slightly chewy, 8–10 minutes. Turn off the heat and leave everything in the pan.',
        'Coloque as tiras de guanciale em uma frigideira grande e larga, ainda fria. Ligue o fogo médio-baixo e deixe a gordura derreter devagar, mexendo de vez em quando, até as bordas ficarem douradas e crocantes, mas o centro ainda levemente macio, 8–10 minutos. Desligue o fogo e deixe tudo na frigideira.',
      ),
      minutes: 10,
      tip: t(
        'Starting in a cold pan renders more fat and keeps the meat from burning before it crisps.',
        'Começar com a frigideira fria derrete mais gordura e evita que a carne queime antes de ficar crocante.',
      ),
    },
    {
      title: t('Make the pecorino cream', 'Faça o creme de pecorino'),
      body: t(
        'In a bowl, whisk the egg yolks, whole egg, Pecorino and most of the cracked pepper into a thick, sandy paste. It should look like wet cement — that is exactly right.',
        'Em uma tigela, bata as gemas, o ovo inteiro, o pecorino e quase toda a pimenta até formar uma pasta grossa e arenosa. Deve parecer cimento molhado — é exatamente isso.',
      ),
      minutes: 3,
    },
    {
      title: t('Cook the spaghetti', 'Cozinhe o espaguete'),
      body: t(
        'Cook the spaghetti for 1 minute less than the packet says, stirring in the first minute so it does not stick. Before draining, scoop out a big mug (about 250 ml) of the starchy cooking water.',
        'Cozinhe o espaguete 1 minuto a menos do que indica a embalagem, mexendo no primeiro minuto para não grudar. Antes de escorrer, reserve uma caneca grande (cerca de 250 ml) da água do cozimento, cheia de amido.',
      ),
      minutes: 9,
    },
    {
      title: t('Toss with the fat', 'Misture com a gordura'),
      body: t(
        'Transfer the spaghetti straight into the skillet with the guanciale and its fat. Add 3 tablespoons of the pasta water and toss over very low heat for 30 seconds so every strand is coated. Then take the pan completely off the heat.',
        'Transfira o espaguete direto para a frigideira com o guanciale e a gordura. Junte 3 colheres (sopa) da água do cozimento e misture em fogo bem baixo por 30 segundos, para envolver todos os fios. Depois tire a frigideira totalmente do fogo.',
      ),
      minutes: 1,
    },
    {
      title: t('Emulsify the sauce', 'Emulsione o molho'),
      body: t(
        'Wait about 30 seconds, then pour in the egg mixture. Toss and stir vigorously with tongs, adding splashes of pasta water, until the sauce turns glossy and coats the spaghetti like silk, about 2 minutes. If it looks thin, keep tossing — it thickens as it cools slightly.',
        'Espere cerca de 30 segundos e despeje a mistura de ovos. Mexa e envolva vigorosamente com uma pinça, adicionando pequenas porções da água do cozimento, até o molho ficar brilhante e envolver o espaguete como seda, cerca de 2 minutos. Se parecer ralo, continue mexendo — ele engrossa conforme esfria um pouco.',
      ),
      minutes: 2,
      tip: t(
        'The sauce sets at around 65–70 °C. If your pan sizzles when the eggs go in, it is too hot.',
        'O molho firma por volta de 65–70 °C. Se a frigideira chiar quando os ovos entrarem, ela está quente demais.',
      ),
    },
    {
      title: t('Serve right away', 'Sirva imediatamente'),
      body: t(
        'Divide between warm bowls, finish with the remaining pepper and a snowfall of Pecorino. Eat immediately, ideally in silence.',
        'Divida em pratos aquecidos e finalize com o restante da pimenta e uma chuva de pecorino. Coma imediatamente, de preferência em silêncio.',
      ),
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Toast the cracked pepper in the guanciale fat for 20 seconds before adding the pasta. It blooms the aroma and turns "a lot of pepper" into "the right amount of pepper".',
        'Toste a pimenta moída na gordura do guanciale por 20 segundos antes de juntar a massa. Isso libera o aroma e transforma "muita pimenta" em "a pimenta certa".',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Adding the eggs over direct heat. That is how carbonara becomes breakfast. Always take the pan off the stove first.',
        'Adicionar os ovos com a panela no fogo. É assim que a carbonara vira café da manhã. Sempre tire a frigideira do fogão antes.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'The eggs are gently cooked, not fully set. Use very fresh, good-quality eggs, and consider pasteurized eggs for pregnant guests or young children.',
        'Os ovos ficam levemente cozidos, não totalmente firmes. Use ovos bem frescos e de boa qualidade, e considere ovos pasteurizados para gestantes ou crianças pequenas.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Carbonara is best eaten immediately. Leftovers keep 1 day in the fridge; reheat gently in a pan with a splash of water over low heat, stirring constantly.',
        'A carbonara é melhor comida na hora. Sobras duram 1 dia na geladeira; reaqueça em fogo baixo, em uma frigideira com um pouco de água, mexendo sempre.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Guanciale', 'Guanciale'),
      swap: t('thick-cut pancetta or unsmoked bacon', 'pancetta em cubos ou bacon sem defumação'),
      note: t('Pancetta is the closest match. Smoked bacon works but changes the flavour noticeably.', 'A pancetta é a opção mais próxima. Bacon defumado funciona, mas muda bastante o sabor.'),
    },
    {
      original: t('Pecorino Romano', 'Pecorino Romano'),
      swap: t('half Pecorino, half Parmigiano Reggiano', 'metade pecorino, metade parmesão'),
      note: t('A milder, nuttier sauce. Using only Parmigiano makes it noticeably sweeter.', 'Um molho mais suave e amendoado. Só parmesão deixa o molho visivelmente mais adocicado.'),
    },
    {
      original: t('Spaghetti', 'Espaguete'),
      swap: t('rigatoni or mezze maniche', 'rigatoni ou mezze maniche'),
      note: t('Short tubes trap pockets of sauce and guanciale — very popular in Rome.', 'Massas curtas em tubo prendem molho e guanciale — muito populares em Roma.'),
    },
  ],
  faq: [
    {
      question: t('Does real carbonara have cream?', 'Carbonara de verdade leva creme de leite?'),
      answer: t(
        'No. The creaminess comes from emulsifying egg, cheese, rendered fat and starchy pasta water. Cream dulls the flavour and is not needed if you control the temperature.',
        'Não. A cremosidade vem da emulsão de ovo, queijo, gordura derretida e água do cozimento cheia de amido. O creme de leite apaga o sabor e não é necessário se você controlar a temperatura.',
      ),
    },
    {
      question: t('Why did my sauce turn into scrambled eggs?', 'Por que meu molho virou ovo mexido?'),
      answer: t(
        'The pan was too hot. Take it off the heat, wait 30 seconds, and add pasta water to cool and loosen the sauce as you toss.',
        'A frigideira estava quente demais. Tire do fogo, espere 30 segundos e acrescente a água do cozimento para resfriar e soltar o molho enquanto mistura.',
      ),
    },
    {
      question: t('Can I use only egg yolks?', 'Posso usar só gemas?'),
      answer: t(
        'Yes — 6 yolks give a richer, more golden sauce. The whole egg in this recipe just makes it a little more forgiving and lighter.',
        'Sim — 6 gemas deixam o molho mais rico e dourado. O ovo inteiro desta receita só o deixa um pouco mais leve e fácil de acertar.',
      ),
    },
    {
      question: t('Can I make it ahead for guests?', 'Posso adiantar para receber convidados?'),
      answer: t(
        'Render the guanciale and mix the egg paste up to an hour ahead (keep the paste covered at room temperature). Cook the pasta and finish the sauce at the last minute.',
        'Derreta o guanciale e prepare a pasta de ovos com até uma hora de antecedência (mantenha a pasta coberta em temperatura ambiente). Cozinhe a massa e finalize o molho na hora.',
      ),
    },
  ],
  nutrition: { calories: 720, protein: 32, carbohydrates: 76, fat: 31, fiber: 3, sodium: 980 },
  keywords: tl(
    ['carbonara', 'spaghetti', 'Roman pasta', 'guanciale', 'pecorino'],
    ['carbonara', 'espaguete', 'massa romana', 'guanciale', 'pecorino'],
  ),
};
