import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/chicken-tikka-masala/hero.jpg';
import ingredients from '../../assets/recipes/chicken-tikka-masala/ingredients.jpg';
import finalDish from '../../assets/recipes/chicken-tikka-masala/final.jpg';

export const chickenTikkaMasala: RecipeSource = {
  slug: 'chicken-tikka-masala',
  categories: ['dinner'],
  cuisines: ['indian', 'asian'],
  diets: ['gluten-free'],
  mainIngredients: ['chicken'],
  difficulty: 'medium',
  prepMinutes: 25,
  cookMinutes: 45,
  restMinutes: 60,
  servings: 4,
  rating: { value: 4.8, count: 1122 },
  popularity: 8890,
  datePublished: '2026-07-19',
  dateModified: '2026-11-01',
  author: authors.marina,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Guilhem Vellut', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Chicken_Tikka_Masala_@_Indian%27s_Food_@_Annecy_(38894403364).jpg' },
      alt: t(
        'Chunks of charred chicken in a vibrant orange-red tikka masala sauce, served in a metal dish beside basmati rice.',
        'Pedaços de frango tostado em um molho tikka masala laranja-avermelhado e vibrante, servidos em um recipiente de metal ao lado de arroz basmati.',
      ),
      caption: t('Smoky chicken, silky sauce, rice on standby.', 'Frango defumado, molho sedoso e arroz a postos.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Holger Casselmann', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Garam_Masala_new_2008.JPG' },
      alt: t(
        'Whole and ground spices for garam masala — cinnamon sticks, bay leaves, cardamom, cumin, cloves and peppercorns — arranged on a white surface.',
        'Especiarias inteiras e moídas para garam masala — canela em pau, louro, cardamomo, cominho, cravo e pimenta em grãos — dispostas sobre uma superfície branca.',
      ),
      caption: t('Your spice drawer, finally living its best life.', 'Sua gaveta de temperos, finalmente vivendo seu auge.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Rezwalker', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Homemade_chicken_tikka_masala.jpg' },
      alt: t(
        'A skillet of homemade chicken tikka masala in a rich, deep-orange sauce garnished with fresh coriander leaves.',
        'Uma frigideira de chicken tikka masala caseiro em um molho alaranjado e encorpado, finalizado com folhas de coentro fresco.',
      ),
      caption: t('Mop it up with naan. Leave no sauce behind.', 'Raspe tudo com pão naan. Nenhum molho fica para trás.'),
    },
  },

  title: t('Traditional Chicken Tikka Masala', 'Chicken Tikka Masala Tradicional'),
  description: t(
    'Yogurt-marinated chicken, charred under the grill, then simmered in a spiced tomato and cream sauce. Restaurant flavour, home kitchen.',
    'Frango marinado no iogurte, tostado no forno e depois cozido em um molho especiado de tomate e creme. Sabor de restaurante, na cozinha de casa.',
  ),
  headnote: t(
    'Tikka masala has two stages, and both matter. First, a tangy yogurt marinade that tenderises the chicken and chars beautifully under a hot grill. Second, a sauce built slowly — onions cooked until jammy, spices bloomed in butter, tomatoes reduced until they turn brick-red. Give it time, and it repays you with the best curry night of the year.',
    'O tikka masala tem duas etapas, e as duas importam. Primeiro, uma marinada azedinha de iogurte que amacia o frango e tosta lindamente no forno bem quente. Depois, um molho construído com calma — cebola cozida até virar geleia, especiarias despertadas na manteiga, tomate reduzido até ficar vermelho-tijolo. Dê tempo a ele, e ele retribui com a melhor noite de curry do ano.',
  ),
  ingredientGroups: [
    {
      title: t('For the marinade', 'Para a marinada'),
      items: [
        { amount: 700, unit: 'g', name: t('boneless chicken thighs', 'sobrecoxa de frango desossada'), note: t('cut into 4 cm pieces', 'em pedaços de 4 cm') },
        { amount: 200, unit: 'g', name: t('plain whole-milk yogurt', 'iogurte natural integral') },
        { amount: 1, unit: 'tbsp', name: t('lemon juice', 'suco de limão') },
        { amount: 3, unit: 'clove', name: t('garlic', 'alho'), note: t('grated', 'ralado') },
        { amount: 1, unit: 'tbsp', name: t('fresh ginger', 'gengibre fresco'), note: t('grated', 'ralado') },
        { amount: 2, unit: 'tsp', name: t('garam masala', 'garam masala') },
        { amount: 2, unit: 'tsp', name: t('Kashmiri chilli powder', 'pimenta caxemira em pó'), note: t('or sweet paprika', 'ou páprica doce') },
        { amount: 1, unit: 'tsp', name: t('ground cumin', 'cominho em pó') },
        { amount: 1, unit: 'tsp', name: t('fine salt', 'sal refinado') },
      ],
    },
    {
      title: t('For the masala sauce', 'Para o molho masala'),
      items: [
        { amount: 40, unit: 'g', name: t('ghee or butter', 'ghee ou manteiga') },
        { amount: 2, name: t('medium onions', 'cebolas médias'), note: t('finely chopped', 'picadas fino') },
        { amount: 4, unit: 'clove', name: t('garlic', 'alho'), note: t('grated', 'ralado') },
        { amount: 1, unit: 'tbsp', name: t('fresh ginger', 'gengibre fresco'), note: t('grated', 'ralado') },
        { amount: 1, name: t('green chilli', 'pimenta verde'), note: t('slit lengthways', 'aberta ao meio no comprimento') },
        { amount: 2, unit: 'tsp', name: t('garam masala', 'garam masala') },
        { amount: 1, unit: 'tsp', name: t('ground coriander', 'coentro em pó') },
        { amount: 1, unit: 'tsp', name: t('ground turmeric', 'cúrcuma em pó') },
        { amount: 1, unit: 'tsp', name: t('Kashmiri chilli powder', 'pimenta caxemira em pó') },
        { amount: 400, unit: 'g', name: t('tomato passata', 'passata de tomate') },
        { amount: 150, unit: 'ml', name: t('heavy cream', 'creme de leite fresco') },
        { amount: 1, unit: 'tsp', name: t('dried fenugreek leaves (kasuri methi)', 'folhas secas de feno-grego (kasuri methi)'), note: t('crushed', 'esfareladas') },
        { amount: 1, unit: 'tsp', name: t('sugar', 'açúcar') },
        { amount: 1, unit: 'handful', name: t('fresh coriander', 'coentro fresco'), note: t('chopped, to serve', 'picado, para servir') },
      ],
    },
  ],
  steps: [
    {
      title: t('Marinate the chicken', 'Marine o frango'),
      body: t(
        'Mix all the marinade ingredients in a bowl, add the chicken and coat thoroughly. Cover and refrigerate for at least 1 hour, or up to 24 hours.',
        'Misture todos os ingredientes da marinada em uma tigela, junte o frango e envolva bem. Cubra e leve à geladeira por pelo menos 1 hora, ou até 24 horas.',
      ),
      minutes: 60,
    },
    {
      title: t('Char the chicken', 'Toste o frango'),
      body: t(
        'Heat the grill (broiler) to high. Thread the chicken onto skewers or spread on a foil-lined tray, leaving the excess marinade behind. Grill 10–12 minutes, turning once, until charred in spots and cooked through.',
        'Aqueça o grill do forno no máximo. Coloque o frango em espetos ou espalhe em uma assadeira forrada com papel-alumínio, deixando o excesso de marinada para trás. Grelhe por 10–12 minutos, virando uma vez, até tostar em alguns pontos e cozinhar por completo.',
      ),
      minutes: 12,
      tip: t(
        'Those blackened edges are not burnt — they are the "tikka". Let them get properly charred.',
        'Essas bordas escurecidas não estão queimadas — elas são o "tikka". Deixe tostar de verdade.',
      ),
    },
    {
      title: t('Cook the onions low and slow', 'Cozinhe a cebola em fogo baixo'),
      body: t(
        'Meanwhile, melt the ghee in a large, heavy pan over medium-low heat. Add the onions with a pinch of salt and cook, stirring often, for 15 minutes until deep golden and jammy.',
        'Enquanto isso, derreta o ghee em uma panela grande e pesada, em fogo médio-baixo. Junte a cebola com uma pitada de sal e cozinhe, mexendo com frequência, por 15 minutos, até ficar bem dourada e com textura de geleia.',
      ),
      minutes: 15,
    },
    {
      title: t('Bloom the aromatics and spices', 'Desperte os aromáticos e as especiarias'),
      body: t(
        'Add the garlic, ginger and green chilli and cook for 2 minutes. Add the ground spices and stir constantly for 1 minute until fragrant — add a splash of water if they start to stick.',
        'Acrescente o alho, o gengibre e a pimenta verde e refogue por 2 minutos. Junte as especiarias em pó e mexa sem parar por 1 minuto, até perfumar — pingue um pouco de água se começarem a grudar.',
      ),
      minutes: 3,
    },
    {
      title: t('Simmer the tomato base', 'Cozinhe a base de tomate'),
      body: t(
        'Pour in the passata and 100 ml of water. Simmer, partially covered, for 12–15 minutes, stirring occasionally, until thick and brick-red with drops of oil on the surface.',
        'Despeje a passata e 100 ml de água. Cozinhe em fogo baixo, com a tampa entreaberta, por 12–15 minutos, mexendo de vez em quando, até engrossar, ficar vermelho-tijolo e soltar gotinhas de gordura na superfície.',
      ),
      minutes: 15,
    },
    {
      title: t('Finish with cream', 'Finalize com o creme'),
      body: t(
        'Stir in the cream, fenugreek and sugar. Add the charred chicken and simmer gently for 5 minutes. Taste and adjust salt, lemon and chilli.',
        'Incorpore o creme de leite, o feno-grego e o açúcar. Junte o frango tostado e cozinhe em fogo baixo por 5 minutos. Prove e ajuste o sal, o limão e a pimenta.',
      ),
      minutes: 5,
    },
    {
      title: t('Serve', 'Sirva'),
      body: t(
        'Scatter with fresh coriander and serve with basmati rice, warm naan and lime wedges.',
        'Finalize com coentro fresco e sirva com arroz basmati, pão naan quentinho e gomos de limão.',
      ),
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Kasuri methi (dried fenugreek) is the secret restaurant flavour. Crush it between your palms before adding to release its aroma.',
        'O kasuri methi (feno-grego seco) é o sabor secreto dos restaurantes. Esfregue entre as palmas das mãos antes de adicionar para liberar o aroma.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Rushing the onions. Pale onions make a thin, sharp sauce; properly caramelised ones give body and sweetness.',
        'Apressar a cebola. Cebola clara deixa o molho ralo e ácido; bem caramelizada, dá corpo e doçura.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'Ground spices burn in seconds over high heat and turn bitter. Keep the heat moderate and stir constantly when blooming them.',
        'Especiarias moídas queimam em segundos no fogo alto e ficam amargas. Mantenha o fogo moderado e mexa sem parar ao refogá-las.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Even better the next day. Keeps 3 days in the fridge or 3 months in the freezer; reheat gently, adding a splash of water if the sauce has thickened.',
        'Fica ainda melhor no dia seguinte. Dura 3 dias na geladeira ou 3 meses no congelador; reaqueça em fogo baixo, com um pouco de água se o molho tiver engrossado.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Chicken thighs', 'Sobrecoxa de frango'),
      swap: t('paneer or extra-firm tofu', 'paneer ou tofu extrafirme'),
      note: t('Marinate for 30 minutes and grill for only 6–8 minutes. Makes it vegetarian.', 'Marine por 30 minutos e grelhe por apenas 6–8 minutos. Deixa a receita vegetariana.'),
    },
    {
      original: t('Heavy cream', 'Creme de leite fresco'),
      swap: t('full-fat coconut milk', 'leite de coco integral'),
      note: t('Use coconut yogurt in the marinade too for a dairy-free version.', 'Use também iogurte de coco na marinada para uma versão sem lactose.'),
    },
    {
      original: t('Kashmiri chilli powder', 'Pimenta caxemira em pó'),
      swap: t('2 parts sweet paprika + 1 part cayenne', '2 partes de páprica doce + 1 parte de pimenta-caiena'),
      note: t('Kashmiri chilli is more about colour than heat — adjust the cayenne to taste.', 'A pimenta caxemira dá mais cor do que ardência — ajuste a caiena a gosto.'),
    },
  ],
  faq: [
    {
      question: t('Is tikka masala Indian or British?', 'O tikka masala é indiano ou britânico?'),
      answer: t(
        'Both, sort of. It is built on the North Indian tikka and makhani traditions, but the dish as we know it was popularised in British curry houses in the 1960s–70s.',
        'Os dois, de certa forma. Ele se baseia nas tradições do tikka e do makhani do norte da Índia, mas o prato como conhecemos foi popularizado nos restaurantes de curry britânicos nos anos 1960 e 1970.',
      ),
    },
    {
      question: t('Can I use chicken breast?', 'Posso usar peito de frango?'),
      answer: t(
        'Yes, but thighs stay juicier. If using breast, marinate for no more than 6 hours and grill for 8–10 minutes so it does not dry out.',
        'Pode, mas a sobrecoxa fica mais suculenta. Se usar peito, marine por no máximo 6 horas e grelhe por 8–10 minutos para não ressecar.',
      ),
    },
    {
      question: t('How do I make it less spicy?', 'Como deixo menos picante?'),
      answer: t(
        'Leave out the green chilli and swap the Kashmiri chilli for sweet paprika. The sauce stays rich and flavourful.',
        'Retire a pimenta verde e troque a pimenta caxemira por páprica doce. O molho continua rico e saboroso.',
      ),
    },
    {
      question: t('Can I make it without a grill?', 'Dá para fazer sem grill?'),
      answer: t(
        'Sear the marinated chicken in a very hot cast-iron pan in batches for 3–4 minutes per side.',
        'Doure o frango marinado em uma frigideira de ferro bem quente, em porções, por 3–4 minutos de cada lado.',
      ),
    },
  ],
  nutrition: { calories: 610, protein: 42, carbohydrates: 18, fat: 41, fiber: 4, sodium: 1080 },
  keywords: tl(
    ['chicken tikka masala', 'curry', 'Indian food', 'garam masala'],
    ['frango tikka masala', 'curry', 'comida indiana', 'garam masala'],
  ),
};
