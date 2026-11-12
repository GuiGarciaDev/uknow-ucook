import type { RecipeSource } from '../types';
import { authors, t, tl } from './_helpers';
import hero from '../../assets/recipes/picanha/hero.jpg';
import ingredients from '../../assets/recipes/picanha/ingredients.jpg';
import finalDish from '../../assets/recipes/picanha/final.jpg';

export const picanha: RecipeSource = {
  slug: 'picanha',
  categories: ['lunch', 'dinner'],
  cuisines: ['brazilian'],
  diets: ['gluten-free', 'dairy-free'],
  mainIngredients: ['beef'],
  difficulty: 'medium',
  prepMinutes: 15,
  cookMinutes: 25,
  restMinutes: 40,
  servings: 6,
  rating: { value: 4.9, count: 1964 },
  popularity: 12480,
  datePublished: '2026-03-14',
  dateModified: '2026-10-04',
  author: authors.theo,
  images: {
    hero: {
      src: hero,
      credit: { author: 'TravelPhotosNL', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Picanha_above_charcoal_at_the_Fire_Food_Festival_2024_in_Abu_Dhabi,_UAE.jpg' },
      alt: t('C-shaped picanha steaks with their fat cap sizzling on a grill', 'Fatias de picanha em formato de C, com a capa de gordura, chiando na grelha'),
      caption: t('Picanha folded in a C, the churrascaria way.', 'Picanha dobrada em C, do jeito das churrascarias.'),
    },
    ingredients: {
      src: ingredients,
      credit: { author: 'Frettie', license: 'CC BY 3.0', source: 'https://commons.wikimedia.org/wiki/File:Preparing_grill_for_grilling,_grill_with_flames_and_cones_near_Host%C3%A1kov,_Vladislav,_T%C5%99eb%C3%AD%C4%8D_District.jpg' },
      alt: t('A charcoal grill with tall flames', 'Churrasqueira a carvão com chamas altas'),
      caption: t('Strong coals, then patience.', 'Brasa forte e depois paciência.'),
    },
    finalDish: {
      src: finalDish,
      credit: { author: 'Christian Benseler', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Picanha_(14759358544).jpg' },
      alt: t('Sliced picanha with a pink centre on a wooden board', 'Picanha fatiada, rosada por dentro, sobre tábua de madeira'),
      caption: t('Slice against the grain and serve.', 'Fatie contra as fibras e sirva.'),
    },
  },

  title: t('Churrasco-Style Picanha', 'Picanha na Brasa'),
  description: t(
    'The king of the Brazilian barbecue: thick slices of rump cap with a crackling fat cap, seasoned with nothing but coarse salt.',
    'A rainha do churrasco: fatias grossas de picanha com capa de gordura tostadinha, temperadas só com sal grosso.',
  ),
  headnote: t(
    'Brazilian churrasco is beautifully minimalist. Picanha — the rump cap, with its thick blanket of fat — is cut into fat steaks, folded into a “C” on a skewer and seasoned only with coarse salt. The fat melts down over the coals, the smoke flares, and the edges caramelise. It is ready when the person in charge of the grill says it is ready.',
    'O churrasco brasileiro é lindamente minimalista. A picanha — com sua capa grossa de gordura — é cortada em bifes altos, dobrada em “C” no espeto e temperada só com sal grosso. A gordura derrete sobre a brasa, a fumaça sobe e as bordas caramelizam. Fica pronta quando o churrasqueiro diz que está pronta.',
  ),
  ingredientGroups: [
    {
      title: t('For the picanha', 'Para a picanha'),
      items: [
        { amount: 1.3, unit: 'kg', name: t('whole picanha (rump cap)', 'peça inteira de picanha'), note: t('with a 1–2 cm fat cap', 'com capa de gordura de 1–2 cm') },
        { amount: 3, unit: 'tbsp', name: t('coarse rock salt (sal grosso)', 'sal grosso') },
      ],
    },
    {
      title: t('For the vinaigrette (molho à campanha)', 'Para o vinagrete'),
      items: [
        { amount: 3, name: t('ripe tomatoes', 'tomates maduros'), note: t('seeded and diced', 'sem sementes, em cubinhos') },
        { amount: 1, name: t('red onion', 'cebola roxa'), note: t('finely diced', 'em cubinhos') },
        { amount: 1, name: t('green bell pepper', 'pimentão verde'), note: t('finely diced', 'em cubinhos') },
        { amount: 4, unit: 'tbsp', name: t('olive oil', 'azeite') },
        { amount: 3, unit: 'tbsp', name: t('white wine vinegar', 'vinagre de vinho branco') },
        { amount: 1, unit: 'handful', name: t('parsley', 'salsinha'), note: t('chopped', 'picada') },
      ],
    },
  ],
  steps: [
    {
      title: t('Temper the meat', 'Tire a carne da geladeira'),
      body: t(
        'Take the picanha out of the fridge 30 minutes before grilling. Meanwhile, mix all the vinaigrette ingredients, season with salt and leave to mingle.',
        'Tire a picanha da geladeira 30 minutos antes de grelhar. Enquanto isso, misture todos os ingredientes do vinagrete, tempere com sal e deixe descansar.',
      ),
      minutes: 30,
    },
    {
      title: t('Cut into thick steaks', 'Corte em bifes grossos'),
      body: t(
        'With the fat facing up, cut the picanha with the grain into 3–4 steaks about 4 cm thick. Bend each into a “C” shape, fat on the outside, and thread onto skewers.',
        'Com a gordura para cima, corte a picanha a favor da fibra em 3–4 bifes de cerca de 4 cm. Dobre cada um em “C”, com a gordura para fora, e espete.',
      ),
      minutes: 8,
    },
    {
      title: t('Salt generously', 'Salgue com generosidade'),
      body: t(
        'Coat all sides with coarse salt right before grilling, pressing it into the fat.',
        'Cubra todos os lados com sal grosso logo antes de ir para a churrasqueira, pressionando na gordura.',
      ),
      minutes: 2,
      tip: t('Coarse salt does not dissolve instantly, so it seasons without drawing out too much juice.', 'O sal grosso não dissolve na hora, então tempera sem puxar muito o suco da carne.'),
    },
    {
      title: t('Grill fat-side first', 'Grelhe começando pela gordura'),
      body: t(
        'Grill over hot coals (or a very hot grill pan), fat side towards the heat, for 8 minutes until crackling. Turn and cook the meat sides 5–7 minutes each for medium-rare (54 °C inside).',
        'Asse sobre brasa forte (ou em uma grelha bem quente), com a gordura virada para o calor, por 8 minutos até estalar. Vire e asse os lados da carne por 5–7 minutos cada para ao ponto para mal (54 °C por dentro).',
      ),
      minutes: 22,
    },
    {
      title: t('Rest, slice, repeat', 'Descanse, fatie e repita'),
      body: t(
        'Rest for 5 minutes, then slice thinly against the grain. In churrasco style, slice only the outside, return the skewer to the grill and keep serving as the next layer cooks.',
        'Deixe descansar 5 minutos e fatie fino contra a fibra. No estilo churrascaria, fatie só a parte de fora, volte o espeto para a brasa e vá servindo conforme a próxima camada assa.',
      ),
      minutes: 8,
      image: 'finalDish',
    },
  ],
  callouts: [
    {
      type: 'chef',
      text: t(
        'Ask your butcher for “picanha” or “top sirloin cap / coulotte”. A good one weighs no more than 1.5 kg — bigger means it includes tougher muscle.',
        'Uma boa picanha pesa no máximo 1,5 kg — peças maiores costumam incluir parte do coxão duro.',
      ),
    },
    {
      type: 'mistake',
      text: t(
        'Trimming the fat cap. It is the whole point — it bastes the meat and gives the smoky crust.',
        'Tirar a capa de gordura. Ela é o grande lance — rega a carne e forma a crosta defumada.',
      ),
    },
    {
      type: 'warning',
      text: t(
        'Dripping fat causes flare-ups. Keep a clear zone on the grill to move the skewers to if flames rise.',
        'A gordura que pinga levanta labaredas. Deixe uma área da churrasqueira livre para afastar os espetos se o fogo subir.',
      ),
    },
  ],
  substitutions: [
    {
      original: t('Charcoal grill', 'Churrasqueira a carvão'),
      swap: t('cast-iron pan and a hot oven', 'frigideira de ferro e forno quente'),
      note: t('Sear the fat side for 5 minutes, then finish in the oven at 220 °C for 10 minutes.', 'Sele a gordura por 5 minutos e finalize no forno a 220 °C por 10 minutos.'),
    },
    {
      original: t('Picanha', 'Picanha'),
      swap: t('tri-tip or thick sirloin steaks', 'maminha ou contrafilé alto'),
      note: t('Different texture, same churrasco spirit.', 'Textura diferente, mesmo espírito de churrasco.'),
    },
  ],
  faq: [
    {
      question: t('Should I add garlic or marinade?', 'Devo marinar ou colocar alho?'),
      answer: t(
        'Purists say no — good picanha needs only salt. If you want garlic, serve it as garlic bread on the side.',
        'Os puristas dizem que não — picanha boa só precisa de sal. Se quiser alho, sirva um pão de alho de acompanhamento.',
      ),
    },
    {
      question: t('What should I serve with it?', 'O que servir junto?'),
      answer: t(
        'Vinaigrette, farofa, white rice and garlic bread. And a cold drink for whoever is manning the grill.',
        'Vinagrete, farofa, arroz branco e pão de alho. E uma bebida gelada para quem está na churrasqueira.',
      ),
    },
  ],
  nutrition: { calories: 590, protein: 46, carbohydrates: 5, fat: 42, fiber: 1, sodium: 1120 },
  keywords: tl(
    ['picanha', 'Brazilian barbecue', 'churrasco', 'rump cap steak'],
    ['picanha', 'churrasco', 'carne na brasa', 'sal grosso'],
  ),
};
