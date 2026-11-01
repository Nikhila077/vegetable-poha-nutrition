// Vegetable Poha – Central Recipe and Nutritional Dataset
// Based on B.Tech Food Technology Formulation (100g basis)

export const DEFAULT_FORMULATION = [
  {
    id: 'flattened-rice',
    name: 'Flattened rice',
    hindiName: 'Poha / Chivda',
    category: 'Cereal grain base',
    defaultWeight: 50.0,
    unit: 'g',
    color: '#E6C687',
    standardNutrients: {
      protein: 6.70,
      carbs: 77.00,
      fat: 1.00,
      fibre: 1.30,
      iron: 2.00,        // (1.000 / 50) * 100 = 2.00 mg/100g
      calcium: 20.00,    // (10.00 / 50) * 100 = 20.00 mg/100g
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    defaultNutrients: {
      protein: 3.350,
      carbs: 38.500,
      fat: 0.500,
      fibre: 0.650,
      iron: 1.000,
      calcium: 10.00,
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    role: 'Primary energy & carbohydrate source; parboiled and flattened paddy grain.',
  },
  {
    id: 'onion',
    name: 'Onion',
    hindiName: 'Pyaz',
    category: 'Vegetable / Allium',
    defaultWeight: 10.0,
    unit: 'g',
    color: '#D89CA4',
    standardNutrients: {
      protein: 1.10,
      carbs: 9.30,
      fat: 0.10,
      fibre: 1.70,
      iron: 0.30,        // (0.030 / 10) * 100 = 0.30 mg/100g
      calcium: 23.00,    // (2.30 / 10) * 100 = 23.00 mg/100g
      vitaminC: 7.40,    // (0.74 / 10) * 100 = 7.40 mg/100g
      vitaminA: 0.00,
    },
    defaultNutrients: {
      protein: 0.110,
      carbs: 0.930,
      fat: 0.010,
      fibre: 0.170,
      iron: 0.030,
      calcium: 2.30,
      vitaminC: 0.74,
      vitaminA: 0.00,
    },
    role: 'Savoury aroma, moisture, prebiotic fructooligosaccharides, and quercetin.',
  },
  {
    id: 'carrot',
    name: 'Carrot',
    hindiName: 'Gajar',
    category: 'Root vegetable',
    defaultWeight: 7.5,
    unit: 'g',
    color: '#EE7B30',
    standardNutrients: {
      protein: 1.04,
      carbs: 6.71,
      fat: 0.47,
      fibre: 3.09,
      iron: 0.3067,      // (0.023 / 7.5) * 100
      calcium: 33.0667,  // (2.48 / 7.5) * 100
      vitaminC: 5.8667,  // (0.44 / 7.5) * 100
      vitaminA: 835.0667,// (62.63 / 7.5) * 100
    },
    defaultNutrients: {
      protein: 0.078,
      carbs: 0.503,
      fat: 0.035,
      fibre: 0.232,
      iron: 0.023,
      calcium: 2.48,
      vitaminC: 0.44,
      vitaminA: 62.63,
    },
    role: 'Rich in beta-carotene (provitamin A), crisp texture, dietary fibre, and sweetness.',
  },
  {
    id: 'green-peas',
    name: 'Green peas',
    hindiName: 'Matar',
    category: 'Legume / Vegetable',
    defaultWeight: 7.5,
    unit: 'g',
    color: '#70A34E',
    standardNutrients: {
      protein: 5.40,
      carbs: 14.50,
      fat: 0.40,
      fibre: 5.10,
      iron: 1.5067,      // (0.113 / 7.5) * 100
      calcium: 25.0667,  // (1.88 / 7.5) * 100
      vitaminC: 40.00,   // (3.00 / 7.5) * 100
      vitaminA: 38.00,   // (2.85 / 7.5) * 100
    },
    defaultNutrients: {
      protein: 0.405,
      carbs: 1.088,
      fat: 0.030,
      fibre: 0.383,
      iron: 0.113,
      calcium: 1.88,
      vitaminC: 3.00,
      vitaminA: 2.85,
    },
    role: 'Supplies plant protein, Vitamin C, water-soluble dietary fibre, and vibrant color.',
  },
  {
    id: 'potato',
    name: 'Potato',
    hindiName: 'Aloo',
    category: 'Tuber',
    defaultWeight: 7.5,
    unit: 'g',
    color: '#D4B26F',
    standardNutrients: {
      protein: 1.54,
      carbs: 14.89,
      fat: 0.23,
      fibre: 1.71,
      iron: 0.80,        // (0.060 / 7.5) * 100
      calcium: 12.00,    // (0.90 / 7.5) * 100
      vitaminC: 19.7333, // (1.48 / 7.5) * 100
      vitaminA: 0.00,
    },
    defaultNutrients: {
      protein: 0.116,
      carbs: 1.117,
      fat: 0.017,
      fibre: 0.128,
      iron: 0.060,
      calcium: 0.90,
      vitaminC: 1.48,
      vitaminA: 0.00,
    },
    role: 'Digestible starch, satiety factor, mild potassium and vitamin C contribution.',
  },
  {
    id: 'peanuts',
    name: 'Peanuts',
    hindiName: 'Moongphali',
    category: 'Oilseed / Legume',
    defaultWeight: 5.0,
    unit: 'g',
    color: '#B36D38',
    standardNutrients: {
      protein: 25.80,
      carbs: 16.10,
      fat: 49.20,
      fibre: 8.50,
      iron: 4.60,        // (0.230 / 5) * 100
      calcium: 92.00,    // (4.60 / 5) * 100
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    defaultNutrients: {
      protein: 1.290,
      carbs: 0.805,
      fat: 2.460,
      fibre: 0.425,
      iron: 0.230,
      calcium: 4.60,
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    role: 'Major contributor of plant protein, monounsaturated lipids, and crunchy texture.',
  },
  {
    id: 'cooking-oil',
    name: 'Cooking oil',
    hindiName: 'Tel',
    category: 'Lipid / Fat',
    defaultWeight: 4.0,
    unit: 'g',
    color: '#E5B942',
    standardNutrients: {
      protein: 0.00,
      carbs: 0.00,
      fat: 100.00,
      fibre: 0.00,
      iron: 0.00,
      calcium: 0.00,
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    defaultNutrients: {
      protein: 0.000,
      carbs: 0.000,
      fat: 4.000,
      fibre: 0.000,
      iron: 0.000,
      calcium: 0.00,
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    role: 'Thermal cooking medium, lipophilic aroma extraction, calorie density, essential fatty acids.',
  },
  {
    id: 'green-chilli',
    name: 'Green chilli',
    hindiName: 'Hari Mirch',
    category: 'Spice / Condiment',
    defaultWeight: 1.5,
    unit: 'g',
    color: '#498B3F',
    standardNutrients: {
      protein: 2.00,
      carbs: 9.00,
      fat: 0.20,
      fibre: 1.50,
      iron: 1.20,        // (0.018 / 1.5) * 100
      calcium: 18.00,    // (0.27 / 1.5) * 100
      vitaminC: 143.3333,// (2.15 / 1.5) * 100
      vitaminA: 530.00,  // (7.95 / 1.5) * 100
    },
    defaultNutrients: {
      protein: 0.030,
      carbs: 0.135,
      fat: 0.003,
      fibre: 0.023,
      iron: 0.018,
      calcium: 0.27,
      vitaminC: 2.15,
      vitaminA: 7.95,
    },
    role: 'Capsaicin for pungency, gastric stimulation, high density Vitamin C & Provitamin A.',
  },
  {
    id: 'lemon-juice',
    name: 'Lemon juice',
    hindiName: 'Nimbu Ras',
    category: 'Citrus extract',
    defaultWeight: 2.5,
    unit: 'g',
    color: '#F4D03F',
    standardNutrients: {
      protein: 0.40,
      carbs: 6.90,
      fat: 0.20,
      fibre: 0.30,
      iron: 0.08,        // (0.002 / 2.5) * 100
      calcium: 6.00,     // (0.15 / 2.5) * 100
      vitaminC: 38.80,   // (0.97 / 2.5) * 100
      vitaminA: 0.00,
    },
    defaultNutrients: {
      protein: 0.010,
      carbs: 0.173,
      fat: 0.005,
      fibre: 0.008,
      iron: 0.002,
      calcium: 0.15,
      vitaminC: 0.97,
      vitaminA: 0.00,
    },
    role: 'Citric acid for tartness, pH lowering, Vitamin C enhances non-heme iron bioavailability.',
  },
  {
    id: 'coriander-leaves',
    name: 'Coriander leaves',
    hindiName: 'Dhaniya Patta',
    category: 'Herb / Garnish',
    defaultWeight: 1.5,
    unit: 'g',
    color: '#348353',
    standardNutrients: {
      protein: 2.10,
      carbs: 3.70,
      fat: 0.50,
      fibre: 2.80,
      iron: 1.80,        // (0.027 / 1.5) * 100
      calcium: 67.3333,  // (1.01 / 1.5) * 100
      vitaminC: 27.3333, // (0.41 / 1.5) * 100
      vitaminA: 337.3333,// (5.06 / 1.5) * 100
    },
    defaultNutrients: {
      protein: 0.032,
      carbs: 0.056,
      fat: 0.008,
      fibre: 0.042,
      iron: 0.027,
      calcium: 1.01,
      vitaminC: 0.41,
      vitaminA: 5.06,
    },
    role: 'Fresh volatile terpenes (linalool), phenolic antioxidants, bioavailable carotenoids.',
  },
  {
    id: 'mustard-seeds',
    name: 'Mustard seeds',
    hindiName: 'Rai / Sarson',
    category: 'Spice / Tempering',
    defaultWeight: 1.0,
    unit: 'g',
    color: '#5C381E',
    standardNutrients: {
      protein: 26.00,
      carbs: 28.00,
      fat: 36.00,
      fibre: 12.00,
      iron: 9.20,        // (0.092 / 1) * 100
      calcium: 266.00,   // (2.66 / 1) * 100
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    defaultNutrients: {
      protein: 0.260,
      carbs: 0.280,
      fat: 0.360,
      fibre: 0.120,
      iron: 0.092,
      calcium: 2.66,
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    role: 'Crucial tempering spice (tadka), glucosinolates, calcium and iron micronutrient density.',
  },
  {
    id: 'curry-leaves',
    name: 'Curry leaves',
    hindiName: 'Kadi Patta',
    category: 'Herb / Tempering',
    defaultWeight: 1.0,
    unit: 'g',
    color: '#2D6345',
    standardNutrients: {
      protein: 6.10,
      carbs: 18.70,
      fat: 1.00,
      fibre: 6.40,
      iron: 0.90,        // (0.009 / 1) * 100
      calcium: 830.00,   // (8.30 / 1) * 100
      vitaminC: 4.00,    // (0.04 / 1) * 100
      vitaminA: 756.00,  // (7.56 / 1) * 100
    },
    defaultNutrients: {
      protein: 0.061,
      carbs: 0.187,
      fat: 0.010,
      fibre: 0.064,
      iron: 0.009,
      calcium: 8.30,
      vitaminC: 0.04,
      vitaminA: 7.56,
    },
    role: 'Signature aromatic curry aroma, dense source of calcium (8.3 mg) and beta-carotene.',
  },
  {
    id: 'salt',
    name: 'Salt',
    hindiName: 'Namak',
    category: 'Mineral seasoning',
    defaultWeight: 1.0,
    unit: 'g',
    color: '#BDC3C7',
    standardNutrients: {
      protein: 0.00,
      carbs: 0.00,
      fat: 0.00,
      fibre: 0.00,
      iron: 0.00,
      calcium: 0.00,
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    defaultNutrients: {
      protein: 0.000,
      carbs: 0.000,
      fat: 0.000,
      fibre: 0.000,
      iron: 0.000,
      calcium: 0.00,
      vitaminC: 0.00,
      vitaminA: 0.00,
    },
    role: 'Electrolyte balance (sodium chloride), palatability, flavour potentiator.',
  },
];

// Reference Dietary Allowances for Sedentary Adult Woman (ICMR-NIN 2020 illustrative targets)
export const RDA_REFERENCE = {
  group: 'Sedentary Adult Woman',
  authority: 'ICMR-National Institute of Nutrition (ICMR-NIN 2020)',
  targets: {
    energy: {
      label: 'Energy',
      value: 1660,
      unit: 'kcal/day',
      expectedRecipeAmount: 265,
      expectedRDA: 15.96,
      color: '#E07A41',
    },
    protein: {
      label: 'Protein',
      value: 45.7,
      unit: 'g/day',
      expectedRecipeAmount: 5.742,
      expectedRDA: 12.56,
      color: '#557A69',
    },
    fibre: {
      label: 'Dietary Fibre',
      value: 25.0,
      unit: 'g/day',
      expectedRecipeAmount: 2.245,
      expectedRDA: 9.00,
      color: '#6E7F5E',
    },
    iron: {
      label: 'Iron (Fe)',
      value: 29.0,
      unit: 'mg/day',
      expectedRecipeAmount: 1.60,
      expectedRDA: 5.52,
      color: '#C0392B',
    },
    calcium: {
      label: 'Calcium (Ca)',
      value: 1000.0,
      unit: 'mg/day',
      expectedRecipeAmount: 34.55,
      expectedRDA: 3.46,
      color: '#2980B9',
    },
    vitaminC: {
      label: 'Vitamin C',
      value: 65.0,
      unit: 'mg/day',
      expectedRecipeAmount: 9.23,
      expectedRDA: 14.20,
      color: '#F39C12',
    },
    vitaminA: {
      label: 'Vitamin A',
      value: 840.0,
      unit: 'µg RAE/day',
      expectedRecipeAmount: 86.05,
      expectedRDA: 10.24,
      color: '#E67E22',
    },
  },
  notes: [
    'Illustrative reference values based on ICMR-NIN (2020) guidelines for a Sedentary Adult Indian Woman.',
    'No single universal daily reference target is established for Carbohydrates or Fat in this specific assignment framework, hence their percentage RDA is intentionally omitted.',
    'Values are subject to verification against official ICMR-NIN tables prior to final academic submission.',
  ],
};

// Preparation Steps
export const PREPARATION_STEPS = [
  {
    step: 1,
    title: 'Weighing & Measurement',
    desc: 'Accurately weigh all 13 formulation ingredients using an analytical or precision digital balance to meet the 100 g recipe benchmark.',
    icon: 'Scale',
  },
  {
    step: 2,
    title: 'Gentle Washing of Poha',
    desc: 'Transfer flattened rice into a stainless steel colander and wash gently under running water for 15–20 seconds without bruising grains.',
    icon: 'Droplets',
  },
  {
    step: 3,
    title: 'Draining Excess Moisture',
    desc: 'Allow the rinsed flattened rice to drain completely in the colander for 5 minutes so grains hydrate evenly without becoming soggy.',
    icon: 'Filter',
  },
  {
    step: 4,
    title: 'Heating the Medium',
    desc: 'Pour 4 g of cooking oil into a heavy-bottomed stainless steel pan and gently heat over medium thermal flame.',
    icon: 'Flame',
  },
  {
    step: 5,
    title: 'Tempering (Tadka)',
    desc: 'Add mustard seeds (1 g); upon spluttering (releasing allylisothiocyanates), add fresh curry leaves (1 g) to impart characteristic aroma.',
    icon: 'Sparkles',
  },
  {
    step: 6,
    title: 'Sautéing Aromatics',
    desc: 'Add chopped onion (10 g) and finely sliced green chilli (1.5 g). Sauté until onions turn soft and translucent.',
    icon: 'Utensils',
  },
  {
    step: 7,
    title: 'Vegetable Cooking',
    desc: 'Add finely diced carrots (7.5 g), fresh green peas (7.5 g), and diced potatoes (7.5 g). Cover pan and cook on low heat until tender-crisp.',
    icon: 'Carrot',
  },
  {
    step: 8,
    title: 'Incorporating Peanuts',
    desc: 'Add peanuts (5 g) roasted to a golden hue, distributing them evenly to provide protein, lipid density, and textural contrast.',
    icon: 'Nut',
  },
  {
    step: 9,
    title: 'Adding Fluffed Rice & Salt',
    desc: 'Gently introduce the drained flattened rice (50 g) and table salt (1 g), lifting carefully from the base with a flat silicone spatula.',
    icon: 'Layers',
  },
  {
    step: 10,
    title: 'Gentle Cooking & Steaming',
    desc: 'Toss smoothly for 2–3 minutes over low heat, allowing residual steam to soften the poha flakes uniformly without clumping.',
    icon: 'Timer',
  },
  {
    step: 11,
    title: 'Finishing & Garnish',
    desc: 'Turn off the heat. Drizzle fresh lemon juice (2.5 g) and toss in freshly chopped coriander leaves (1.5 g) to retain heat-labile Vitamin C.',
    icon: 'Citrus',
  },
  {
    step: 12,
    title: 'Yield Determination',
    desc: 'Transfer the prepared vegetable poha onto a tared weighing plate, record the finished cooked product weight, and calculate moisture retention.',
    icon: 'ClipboardCheck',
  },
];

// Health and Nutritional Science Rationale
export const HEALTH_BENEFITS = [
  {
    nutrient: 'Flattened Rice',
    title: 'Digestible Carbohydrates & Quick Energy',
    description: 'Flattened rice (poha) undergoes hydrothermal parboiling prior to flattening, which partially gelatinises starch. This ensures easy digestion and a rapid yet steady release of glucose for morning cognitive and physical metabolic demands.',
    badge: 'Macro energy',
    icon: 'Zap',
  },
  {
    nutrient: 'Peanuts',
    title: 'Plant Protein & Heart-Healthy Lipids',
    description: 'Peanuts contribute over 22% of total formulation protein (1.29 g) alongside monounsaturated and polyunsaturated fatty acids (MUFA/PUFA), improving satiety index and balancing blood glucose response.',
    badge: 'Proteins & Lipids',
    icon: 'ShieldCheck',
  },
  {
    nutrient: 'Vegetables',
    title: 'Dietary Fibre & Micronutrient Diversity',
    description: 'Carrots, green peas, and potatoes contribute soluble and insoluble dietary fibres (2.245 g total), supporting healthy gut transit, short-chain fatty acid (SCFA) production, and steady postprandial glycemic regulation.',
    badge: 'Fibre & Gut Health',
    icon: 'Salad',
  },
  {
    nutrient: 'Carrots',
    title: 'Provitamin A (Beta-Carotene) Density',
    description: 'Carrots deliver 62.63 µg RAE of Provitamin A carotenoids (over 72% of total recipe Vitamin A). Cooking with 4 g oil enhances the micellar solubilization and absorption of this fat-soluble antioxidant.',
    badge: 'Provitamin A',
    icon: 'Eye',
  },
  {
    nutrient: 'Lemon Juice & Chilli',
    title: 'Vitamin C & Non-Heme Iron Absorption',
    description: 'Lemon juice (0.97 mg) and fresh green chilli (2.15 mg) supply ascorbic acid (Vitamin C). In food chemistry, ascorbic acid acts as a powerful reducing agent, converting ferric iron (Fe³⁺) into ferrous iron (Fe²⁺) for significantly improved intestinal absorption.',
    badge: 'Bioavailability',
    icon: 'Sparkle',
  },
  {
    nutrient: 'Cooking Oil',
    title: 'Essential Fatty Acids & Energy Density',
    description: 'The formulation uses 4 g of culinary vegetable oil, supplying 36 kcal and facilitating the intestinal transport of lipophilic carotenoids while delivering essential fatty acids without excessive saturated fat.',
    badge: 'Lipids & Transport',
    icon: 'Droplet',
  },
];

// Academic References
export const ACADEMIC_REFERENCES = [
  {
    citation: 'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables (IFCT 2017).',
    institution: 'National Institute of Nutrition (NIN), Indian Council of Medical Research (ICMR), Hyderabad, India.',
    description: 'Official national compendium providing comprehensive nutritional breakdown of Indian raw food commodities, cereals, pulses, vegetables, and condiments.',
    url: 'https://www.nin.res.in/ebooks/IFCT2017.pdf',
    type: 'Official Compendium',
  },
  {
    citation: 'ICMR-NIN Expert Group on Nutrient Requirements for Indians (2020). Recommended Dietary Allowances (RDA) and Estimated Average Requirements (EAR).',
    institution: 'National Institute of Nutrition (NIN), Indian Council of Medical Research (ICMR), Hyderabad, India.',
    description: 'Benchmark daily dietary reference standards for various age, gender, physiological condition, and activity level groups in the Indian population.',
    url: 'https://www.nin.res.in/rdabook/brief_note.pdf',
    type: 'Official RDA Guidelines',
  },
];
