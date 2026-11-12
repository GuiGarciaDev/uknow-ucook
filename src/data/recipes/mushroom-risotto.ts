import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/mushroom-risotto/hero.jpg';
import ingredients from '../../assets/recipes/mushroom-risotto/ingredients.jpg';
import finalDish from '../../assets/recipes/mushroom-risotto/final.jpg';

export const mushroomRisotto: RecipeSource = {
  slug: 'mushroom-risotto',
  categories: ['dinner'],
  cuisines: ['italian'],
  diets: ['vegetarian', 'gluten-free'],
  mainIngredients: ['rice', 'mushrooms', 'cheese'],
  difficulty: 'medium',
  prepMinutes: 15,
  cookMinutes: 35,
  servings: 4,
  rating: { value: 4.7, count: 734 },
  popularity: 6420,
  datePublished: '2026-09-30',
  dateModified: '2026-11-04',
  author: authors.lucas,
  images: {
    hero: {
      src: hero,
      credit: { author: 'Kolforn', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:-2019-12-22_Mushroom_Risotto_with_onion_and_herbs_finished_with_Parmesan_and_Mushroom,_Trimingham.JPG' },
      alt: t(
        'A plate of creamy mushroom risotto scattered with sautéed mushrooms, fresh herbs and shavings of Parmesan.',
        'Um prato de risoto de cogumelos cremoso, com cogumelos salteados, ervas frescas e lascas de parmesão.',
      ),
      caption: t('All’onda: it should flow like a slow wave.', 'All\'onda: deve escorrer como uma onda lenta.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Katrin Gilger', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Mushroom_Risotto_(4789409441).jpg' },
      alt: t(
        'Risotto ingredients laid out on a striped cloth: a colander of chanterelles and button mushrooms, a bowl of rice, a wedge of Parmesan, an onion, garlic and spring onions.',
        'Ingredientes do risoto sobre um pano listrado: um escorredor com cogumelos-paris e chanterelles, uma tigela de arroz, um pedaço de parmesão, cebola, alho e cebolinha.',
      ),
      caption: t('Short list, long stir.', 'Lista curta, mexida longa.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'spurekar', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Mushroom_and_Leek_Risotto_(49535206656).jpg' },
      alt: t(
        'A shallow grey bowl of risotto topped with a tangle of golden, crisp-fried mushrooms.',
        'Um prato raso cinza com risoto, coberto por cogumelos dourados e crocantes.',
      ),
      caption: t('Crispy mushrooms on top for crunch. Highly recommended.', 'Cogumelos crocantes por cima para dar textura. Altamente recomendado.'),
    },
  },

  title: t('Creamy Mushroom Risotto', 'Risoto Cremoso de Cogumelos'),
  description: t(
    'Deeply savoury risotto made with porcini broth, golden roasted mushrooms and a final swirl of cold butter and Parmesan.',
    'Risoto profundamente saboroso, feito com caldo de porcini, cogumelos dourados e finalizado com manteiga gelada e parmesão.',
  ),
  headnote: t(
    'Risotto is not difficult — it just asks for 20 minutes of your attention. Toast the rice, add hot stock a ladle at a time, and stir often so the grains release their starch into a naturally creamy sauce. The porcini soaking liquid is the secret: it turns plain stock into something wonderfully earthy.',
    'Risoto não é difícil — só pede 20 minutos da sua atenção. Toste o arroz, acrescente o caldo quente uma concha por vez e mexa com frequência para que os grãos soltem o amido e formem um molho naturalmente cremoso. O segredo é a água de hidratação do porcini: ela transforma um caldo comum em algo maravilhosamente terroso.',
  ),
  ingredientGroups: [
    {
      title: t('For the mushrooms', 'Para os cogumelos'),
      items: [
        { amount: 20, unit: 'g', name: t('dried porcini mushrooms', 'cogumelos porcini secos') },
        { amount: 250, unit: 'ml', name: t('hot water', 'água quente'), note: t('for soaking', 'para hidratar') },
        { amount: 400, unit: 'g', name: t('mixed fresh mushrooms', 'cogumelos frescos variados'), note: t('chestnut, shiitake, oyster — sliced', 'paris, shiitake, shimeji — fatiados') },
        { amount: 2, unit: 'tbsp', name: t('olive oil', 'azeite de oliva') },
        { amount: 2, unit: 'sprig', name: t('fresh thyme', 'tomilho fresco') },
      ],
    },
    {
      title: t('For the risotto', 'Para o risoto'),
      items: [
        { amount: 1.2, unit: 'l', name: t('vegetable stock', 'caldo de legumes'), note: t('kept hot', 'mantido quente') },
        { amount: 25, unit: 'g', name: t('unsalted butter', 'manteiga sem sal') },
        { amount: 2, name: t('shallots', 'echalotas'), note: t('finely chopped', 'picadas fino') },
        { amount: 2, unit: 'clove', name: t('garlic', 'alho'), note: t('minced', 'picado') },
        { amount: 320, unit: 'g', name: t('risotto rice', 'arroz para risoto'), note: t('Carnaroli or Arborio', 'carnaroli ou arbóreo') },
        { amount: 120, unit: 'ml', name: t('dry white wine', 'vinho branco seco') },
      ],
    },
    {
      title: t('To finish (mantecatura)', 'Para finalizar (mantecatura)'),
      items: [
        { amount: 30, unit: 'g', name: t('cold unsalted butter', 'manteiga sem sal gelada'), note: t('cubed', 'em cubos') },
        { amount: 60, unit: 'g', name: t('Parmigiano Reggiano', 'parmesão'), note: t('finely grated', 'ralado fino') },
        { amount: 2, unit: 'tbsp', name: t('flat-leaf parsley', 'salsinha'), note: t('chopped', 'picada') },
        { name: t('salt and black pepper', 'sal e pimenta-do-reino'), note: t('to taste', 'a gosto') },
      ],
    },
  ],
  steps: [
    {
      title: t('Soak the porcini', 'Hidrate o porcini'),
      body: t(
        'Cover the dried porcini with the hot water and soak for 15 minutes. Lift them out, squeeze gently and chop. Strain the soaking liquid through a paper towel into the stock pot to catch any grit, and keep the stock at a bare simmer.',
        'Cubra o porcini seco com a água quente e deixe de molho por 15 minutos. Retire, esprema levemente e pique. Coe a água de hidratação com papel-toalha direto na panela do caldo, para segurar qualquer areia, e mantenha o caldo em fervura bem baixa.',
      ),
      minutes: 15,
    },
    {
      title: t('Brown the mushrooms', 'Doure os cogumelos'),
      body: t(
        'Heat the olive oil in a large, wide pan over high heat. Add the fresh mushrooms in a single layer (in batches if needed) with the thyme and leave them alone for 3 minutes, then stir and cook until golden, 6–8 minutes total. Season, add the chopped porcini, and set aside a quarter of the mushrooms for topping.',
        'Aqueça o azeite em uma panela larga em fogo alto. Coloque os cogumelos frescos em camada única (em porções, se necessário) com o tomilho e não mexa por 3 minutos; depois mexa e cozinhe até dourar, 6–8 minutos no total. Tempere, junte o porcini picado e reserve um quarto dos cogumelos para decorar.',
      ),
      minutes: 8,
      tip: t(
        'Crowding the pan steams the mushrooms instead of browning them. Patience equals flavour.',
        'Lotar a panela cozinha os cogumelos no vapor em vez de dourá-los. Paciência é igual a sabor.',
      ),
    },
    {
      title: t('Toast the rice', 'Toste o arroz'),
      body: t(
        'In the same pan, melt the butter over medium heat. Cook the shallots for 3 minutes until soft, add the garlic for 30 seconds, then the rice. Stir for 2 minutes until the grains are hot and slightly translucent at the edges.',
        'Na mesma panela, derreta a manteiga em fogo médio. Refogue as echalotas por 3 minutos até amolecerem, junte o alho por 30 segundos e depois o arroz. Mexa por 2 minutos, até os grãos ficarem quentes e levemente translúcidos nas bordas.',
      ),
      minutes: 6,
    },
    {
      title: t('Deglaze with wine', 'Deglaceie com vinho'),
      body: t(
        'Pour in the wine and stir until it has almost completely evaporated, about 1 minute.',
        'Despeje o vinho e mexa até evaporar quase completamente, cerca de 1 minuto.',
      ),
      minutes: 1,
    },
    {
      title: t('Add the stock, ladle by ladle', 'Acrescente o caldo, concha por concha'),
      body: t(
        'Add a ladle of hot stock and stir until mostly absorbed. Continue adding stock one ladle at a time, stirring often, for 16–18 minutes. Stir the browned mushrooms back in halfway through. The rice is ready when tender with a slight bite in the centre.',
        'Junte uma concha de caldo quente e mexa até ser quase todo absorvido. Continue acrescentando o caldo uma concha por vez, mexendo com frequência, por 16–18 minutos. Devolva os cogumelos dourados na metade do tempo. O arroz está pronto quando estiver macio, com o centro ainda levemente firme.',
      ),
      minutes: 18,
    },
    {
      title: t('Mantecatura: the creamy finish', 'Mantecatura: a finalização cremosa'),
      body: t(
        'Take the pan off the heat. Add one last splash of stock, the cold butter and the Parmesan, and beat vigorously with a wooden spoon for 1 minute until glossy and flowing. Cover and rest for 2 minutes.',
        'Tire a panela do fogo. Junte um último fio de caldo, a manteiga gelada e o parmesão, e bata vigorosamente com uma colher de pau por 1 minuto, até ficar brilhante e fluido. Tampe e deixe descansar por 2 minutos.',
      ),
      minutes: 3,
      tip: t(
        'Proper risotto should spread slowly when spooned onto a plate — "all\'onda", like a wave.',
        'O risoto no ponto deve se espalhar devagar quando colocado no prato — "all\'onda", como uma onda.',
      ),
    },
    {
      title: t('Serve', 'Sirva'),
      body: t(
        'Spoon onto warm plates, top with the reserved mushrooms, parsley, more Parmesan and black pepper.',
        'Sirva em pratos aquecidos e cubra com os cogumelos reservados, salsinha, mais parmesão e pimenta-do-reino.',
      ),
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Use Carnaroli if you can find it. It holds its shape better than Arborio and gives a creamier result with less risk of mushiness.',
        'Use carnaroli se encontrar. Ele mantém a forma melhor que o arbóreo e dá um resultado mais cremoso, com menos risco de empapar.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Adding cold stock. It shocks the rice and stalls the cooking. Keep the stock simmering on the next burner.',
        'Acrescentar caldo frio. Ele "assusta" o arroz e interrompe o cozimento. Mantenha o caldo fervendo na boca ao lado.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'Traditional Parmigiano Reggiano is made with animal rennet. For a strictly vegetarian dish, choose a vegetarian hard cheese.',
        'O Parmigiano Reggiano tradicional é feito com coalho animal. Para um prato estritamente vegetariano, escolha um queijo duro vegetariano.',
      ),
    },
    {
      type: 'storage',
      text: t(
        'Risotto thickens as it sits. Refrigerate leftovers up to 2 days and reheat with a splash of stock — or roll cold leftovers into balls, bread them and fry as arancini.',
        'O risoto engrossa ao descansar. Guarde as sobras na geladeira por até 2 dias e reaqueça com um pouco de caldo — ou modele bolinhas com as sobras frias, empane e frite como arancini.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Dry white wine', 'Vinho branco seco'),
      swap: t('extra stock + 1 tsp white wine vinegar', 'mais caldo + 1 colher (chá) de vinagre de vinho branco'),
      note: t('Keeps the brightness the wine provides, without the alcohol.', 'Mantém a acidez que o vinho traz, sem o álcool.'),
    },
    {
      original: t('Butter and Parmesan', 'Manteiga e parmesão'),
      swap: t('olive oil and 2 tbsp nutritional yeast', 'azeite e 2 colheres (sopa) de levedura nutricional'),
      note: t('Makes the risotto vegan and dairy-free. Use vegetable stock.', 'Deixa o risoto vegano e sem lactose. Use caldo de legumes.'),
    },
    {
      original: t('Dried porcini', 'Porcini seco'),
      swap: t('1 tbsp white miso stirred into the stock', '1 colher (sopa) de missô branco dissolvido no caldo'),
      note: t('Not the same, but adds a similar savoury depth.', 'Não é igual, mas traz uma profundidade de sabor semelhante.'),
    },
  ],
  faq: [
    {
      question: t('Do I really have to stir constantly?', 'Preciso mesmo mexer o tempo todo?'),
      answer: t(
        'No — stir often, not constantly. Frequent stirring helps release starch, but you can step away for 30 seconds without disaster.',
        'Não — mexa com frequência, não sem parar. Mexer bastante ajuda a soltar o amido, mas dá para se afastar 30 segundos sem desastre.',
      ),
    },
    {
      question: t('Can I use regular long-grain rice?', 'Posso usar arroz agulhinha comum?'),
      answer: t(
        'Unfortunately not. Long-grain rice lacks the starch needed for creaminess. You need a short-grain Italian rice like Carnaroli, Arborio or Vialone Nano.',
        'Infelizmente, não. O arroz agulhinha não tem o amido necessário para a cremosidade. Você precisa de um arroz italiano de grão curto, como carnaroli, arbóreo ou vialone nano.',
      ),
    },
    {
      question: t('Can I make risotto ahead for a dinner party?', 'Dá para adiantar o risoto para um jantar?'),
      answer: t(
        'Yes: cook it two-thirds of the way (about 12 minutes of stock), spread on a tray to cool, and refrigerate. Finish with hot stock for 6–8 minutes just before serving.',
        'Sim: cozinhe até dois terços (cerca de 12 minutos de caldo), espalhe em uma assadeira para esfriar e leve à geladeira. Finalize com caldo quente por 6–8 minutos pouco antes de servir.',
      ),
    },
  ],
  nutrition: { calories: 560, protein: 15, carbohydrates: 70, fat: 22, fiber: 4, sodium: 890 },
  keywords: tl(
    ['mushroom risotto', 'porcini', 'vegetarian dinner', 'Italian rice'],
    ['risoto de cogumelos', 'porcini', 'jantar vegetariano', 'risoto'],
  ),
};
