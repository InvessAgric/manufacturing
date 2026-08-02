import {
  productAmmoniaBagNoBg,
  productBlessCocoaBagImage,
  productDapBagImage,
  productMopBagImage,
  productNpkBagNoBg,
  productNpk151515Image,
  productPotassiumBagImage,
  productTspBagImage,
  productUreaBagNoBg,
  productYellowMaizeBagImage,
  activateImage
} from '../assets/assetRegistry'

export const products = [
  {
    slug: 'urea-46n',
    title: 'CHALEEE UREA (46%N)',
    summary: 'High-nitrogen fertilizer for fast vegetative growth and yield support.',
    description:
      'CHALEEE UREA provides a concentrated 46% nitrogen source for crops that need rapid vegetative development and a timely growth response during critical stages.',
    bullets: [
      'High nitrogen concentration (46%)',
      'Can be soil-applied or used as foliar spray',
      'Fast release for quick crop response',
    ],
    image: productUreaBagNoBg,
    alt: 'UREA 46 percent nitrogen bag',
    composition:
      'UREA (46%N) is produced for efficient nitrogen delivery and dissolves readily in moisture, helping plants absorb nitrogen quickly for vigorous growth and strong canopy development.',
    useCase: 'Nitrogen boost for active growth phases',
    useCaseDetails:
      'Best for cereals, tree crops, fruit crops, and other nitrogen-demanding fields where quick greening and vegetative support are required.',
    manufacturingMessage:
      'Manufactured to deliver reliable nitrogen performance with consistent granule quality and field-ready handling.',
    packaging: 'Supplied in durable 50kg bags for farm and distributor use.',
    features: [
      'High nitrogen concentration (46%)',
      'Dual application method: soil and foliar',
      'Enhanced solubility',
      'Rapid nutrient release',
    ],
    usedFor: [
      'Tree crops such as citrus, mango, grapes, and apples',
      'Cereal crops including rice, wheat, maize, and barley',
      'Fruit and legume production systems',
    ],
    plant: ['Cereals', 'Tree Crops', 'Fruits', 'Legumes'],
  },
  {
    slug: 'tsp-050',
    title: 'TSP (0:50:0)',
    summary: 'Highly concentrated phosphorus fertilizer for strong root development and reproductive growth.',
    description:
      'TSP (Triple Superphosphate) is a phosphorus-rich fertilizer (0:50:0) designed to strengthen root development, flowering, and fruiting in phosphorus-demanding crops.',
    bullets: [
      'Contains 50% phosphorus',
      'Supports vigorous root development',
      'Ideal for phosphorus-deficient soils',
    ],
    image: productTspBagImage,
    alt: 'Triple superphosphate fertilizer',
    composition:
      'TSP provides a concentrated phosphorus source to improve nutrient uptake, flowering, and crop vigor, especially where soil phosphorus is limiting.',
    useCase: 'Phosphorus supply for early establishment and reproductive growth',
    useCaseDetails:
      'Especially suitable for legumes and other crops with high phosphorus demand during early growth and reproductive stages.',
    manufacturingMessage:
      'Processed for consistency and field distribution, supporting efficient phosphorus use in modern crop nutrition programs.',
    packaging: 'Supplied in standard 50kg fertilizer bags.',
    features: [
      'High phosphorus concentration (0:50:0)',
      'Easy to handle and apply',
      'Supports root and flower development',
      'Designed to reduce nutrient wastage',
    ],
    usedFor: [
      'Legume crops such as beans, peas, and lentils',
      'Flower and fruit initiation programs',
      'Soil fertility improvement in phosphorus-deficient fields',
    ],
    plant: ['Legumes', 'Beans', 'Peas', 'Lentils'],
  },
  {
    slug: 'sulphate-of-ammonia-21n-24s',
    title: 'SOA (21%N, 24%S)',
    summary: 'Dual nitrogen-sulphur fertilizer for growth, protein synthesis, and crop quality.',
    description:
      'SOA combines nitrogen and sulphur in a readily absorbable form to support vegetative growth, enzyme activity, and improved nutrient utilization.',
    bullets: [
      '21% nitrogen and 24% sulphur',
      'Supports protein synthesis and enzyme function',
      'Uniform granules for even field distribution',
    ],
    image: productAmmoniaBagNoBg,
    alt: 'Sulphate of ammonia fertilizer',
    composition:
      'A granular nitrogen-sulphur fertilizer formulated for efficient crop uptake, balanced nutrition, and improved growth performance across many cropping systems.',
    useCase: 'Nitrogen and sulphur nutrition for high-demand crops',
    useCaseDetails:
      'Useful in cereals, legumes, vegetables, fruits, and ornamental systems where nitrogen and sulphur support yield and quality outcomes.',
    manufacturingMessage:
      'Produced with consistent granule quality for predictable field performance and practical application in large and small farms.',
    packaging: 'Supplied in practical 50kg bags.',
    features: [
      'Readily available nutrients',
      'Easy handling and application',
      'Suitable for most crop systems',
      'Supports balanced nitrogen-sulphur feeding',
    ],
    usedFor: [
      'Field crops including cereals, legumes, and oilseeds',
      'Vegetables such as tomato, pepper, cucumber, and leafy greens',
      'Fruit crops and ornamental plants',
      'Soil improvement through sulphur-supported nutrient release',
    ],
    plant: ['Cereals', 'Legumes', 'Vegetables', 'Fruits', 'Ornamentals'],
  },

  {
    slug: 'npk-23105te',
    title: 'CHALEEE NPK (23:10:5+7S+3MgO)',
    summary: 'Nitrogen-forward NPK with sulphur and magnesium for vigorous growth.',
    description:
      'CHALEEE NPK provides strong nitrogen support with balanced phosphorus and potassium, plus sulphur and magnesium for healthier foliage, stems, and productivity.',
    bullets: [
      '23:10:5 ratio with 7S and 3MgO',
      'Includes trace elements for balanced nutrition',
      'Suitable for top-dressing application',
    ],
    image: activateImage,
    alt: 'NPK 23 10 5 plus sulphur and magnesium',
    composition:
      'A complex plant food formulation designed to supply macro and micro nutrients for healthy root development, stronger stems, robust foliage, and improved crop outcomes.',
    useCase: 'Growth stimulation with balanced macro and micro nutrients',
    useCaseDetails:
      'Used for root development, foliage stimulation, flowering, fruiting, and overall productivity support in diverse crop programs.',
    manufacturingMessage:
      'Blended with precision to support predictable nutrient performance and dependable farm-level application.',
    packaging: 'Packed in 50kg bags for farm distribution and handling.',
    features: [
      'Greyish-pink to light-brown granules',
      'Complex plant food formulation',
      'Environmentally considerate profile',
      'Effective for top-dressing',
    ],
    usedFor: [
      'Supporting healthy root development',
      'Stimulating vigorous foliage growth',
      'Enhancing flowering and fruiting',
      'Improving plant vitality and yield potential',
    ],
    plant: ['Cereals', 'Vegetables', 'Legumes', 'Fruits'],
  },
  {
    slug: 'npk-2010107s',
    title: 'CHALEEE NPK (20:10:10+7S)',
    summary: 'Balanced NPK with sulphur for broad crop nutrition and strong growth.',
    description:
      'CHALEEE NPK combines balanced macro nutrients with sulphur for strong growth, effective nutrient uptake, and reliable performance across many crops.',
    bullets: [
      'Good spread accuracy and field coverage',
      'Well absorbed by plants',
      'Includes sulphur for improved crop nutrition',
    ],
    image: productNpkBagNoBg,
    alt: 'CHALEEE NPK 20 10 10 plus sulphur',
    composition:
      'A versatile NPK blend designed for balanced nutrient delivery, efficient uptake, and practical use through direct application or water-assisted nutrient programs.',
    useCase: 'General-purpose crop feeding with sulphur support',
    useCaseDetails:
      'Suitable for legumes, vegetables, cereals, and mixed cropping systems where balanced nutrition drives consistent growth and yield.',
    manufacturingMessage:
      'Formulated for consistency in color, spread behavior, and nutrient availability under varied field conditions.',
    packaging: 'Supplied in standard 50kg fertilizer bags.',
    features: [
      'Available in grey and pink granules',
      'High spread accuracy',
      'Top-dressing efficient',
      'Good solubility and nutrient absorption',
    ],
    usedFor: [
      'Legumes',
      'Vegetables',
      'Cereal crops',
      'General balanced nutrient programs',
    ],
    plant: ['Legumes', 'Vegetables', 'Cereals'],
  },
  {
    slug: 'npk-151515te',
    title: 'NPK (15:15:15+TE)',
    summary: 'Evenly balanced NPK blend for basal application and broad adaptability.',
    description:
      'NPK (15:15:15+TE) provides equal proportions of major nutrients and trace elements, supporting root establishment, steady growth, and balanced development.',
    bullets: [
      'Balanced 15:15:15 nutrient ratio',
      'Adaptable to most soil types',
      'Efficient for basal application',
    ],
    image: productNpk151515Image,
    alt: 'NPK 15 15 15 with trace elements',
    composition:
      'Designed for pre-plant and soil-preparation stages, this formulation supplies balanced nutrients throughout the root zone to support early vigor and stable growth.',
    useCase: 'Basal feeding before planting and at establishment',
    useCaseDetails:
      'Suitable for tree crops, vegetables, cereals, and fruits where a balanced nutrient base is required from the start.',
    manufacturingMessage:
      'Granulated for uniform field application and dependable nutrient performance across varied soils.',
    packaging: 'Packed in 50kg bags for practical transport and use.',
    features: [
      'Greyish-pink granules',
      'Balanced nutrient profile',
      'Soil-type adaptability',
      'Reliable basal-application performance',
    ],
    usedFor: [
      'Tree crops and orchards',
      'Vegetables',
      'Cereals',
      'Fruit crops',
    ],
    plant: ['Tree Crops', 'Vegetables', 'Cereals', 'Fruits'],
  },
  {
    slug: 'mop-0060',
    title: 'MOP (0:0:60)',
    summary: 'High-potassium fertilizer for drought tolerance and crop quality improvement.',
    description:
      'MOP (Muriate of Potash) is a high-potassium fertilizer that supports root development, flowering, fruit quality, and plant resilience under stress conditions.',
    bullets: [
      'Contains 60% potassium',
      'Improves drought resilience',
      'Supports nutrient uptake and plant vigor',
    ],
    image: productMopBagImage,
    alt: 'MOP 0 0 60 fertilizer',
    composition:
      'With 0:0:60 composition, MOP provides concentrated potassium to optimize water-use efficiency, physiological stability, and quality-focused production.',
    useCase: 'Potassium correction and stress resilience programs',
    useCaseDetails:
      'Used in field crops, horticulture, tree crops, nut crops, and forage systems where potassium demand is high.',
    manufacturingMessage:
      'Processed for stable granule quality and practical use in large-scale and smallholder crop production.',
    packaging: 'Supplied in sturdy 50kg bags.',
    features: [
      'Reddish-brown granules',
      'High potassium concentration (60%)',
      'Supports drought tolerance',
      'Improves crop quality and vigor',
    ],
    usedFor: [
      'Field crops including maize, wheat, rice, soybeans, and cotton',
      'Horticultural crops such as tomato, potato, pepper, citrus, and melon',
      'Tree and nut crops',
      'Forage crop programs',
    ],
    plant: ['Field Crops', 'Horticulture', 'Tree Crops', 'Forage'],
  },

  {
    slug: 'dap-18460',
    title: 'DAP (18:46:0)',
    summary: 'Water-soluble phosphorus-rich fertilizer for root development and early crop growth.',
    description:
      'DAP combines nitrogen and high phosphorus in a soluble format to support root establishment, early vigor, flowering, and productive crop development.',
    bullets: [
      '18% nitrogen and 46% phosphorus',
      'Water-soluble and plant-available',
      'Suitable for soil and foliar application',
    ],
    image: productDapBagImage,
    alt: 'DAP 18 46 0 fertilizer',
    composition:
      'A soluble nutrient formulation designed for efficient phosphorus delivery and dependable uptake during key establishment and reproductive stages.',
    useCase: 'Rooting and early growth support with phosphorus emphasis',
    useCaseDetails:
      'Used for fruits, vegetables, cereals, legumes, and flowering plants in both field and managed-crop systems.',
    manufacturingMessage:
      'Formulated to support uniform nutrient delivery and dependable agronomic response throughout the crop cycle.',
    packaging: 'Available in 50kg bags for commercial and farm-level use.',
    features: [
      'Water-soluble formulation',
      'Well absorbed by plants',
      'Suitable for many crop types',
      'Balanced nitrogen-phosphorus profile',
    ],
    usedFor: [
      'Fruits and vegetables',
      'Cereals and legumes',
      'Flowering plants and general establishment programs',
    ],
    plant: ['Fruits', 'Vegetables', 'Cereals', 'Legumes'],
  },
 
  {
    slug: 'blended-npks',
    title: 'Blended NPKs',
    summary: 'Custom-balanced NPK blends for diverse crops and nutrition strategies.',
    description:
      'Blended NPK fertilizers combine nitrogen, phosphorus, potassium, and micro-nutrients in practical ratios tailored to crop requirements and growth stages.',
    bullets: [
      'Balanced macro and micronutrient formulation',
      'Designed for optimal nutrient uptake',
      'Suitable for a wide crop range',
    ],
    image: productNpkBagNoBg,
    alt: 'Blended NPK fertilizers',
    composition:
      'Expertly blended plant nutrition formulas with macro and micro nutrients to improve crop vigor, flowering, fruiting, and overall yield performance.',
    useCase: 'Flexible nutrient programs across crop types',
    useCaseDetails:
      'Used in cereals, vegetables, legumes, fruits, and tree crops where tailored nutrient ratios are required.',
    manufacturingMessage:
      'Blended with precision to align with crop nutrition plans and field-level productivity targets.',
    packaging: 'Supplied in fertilizer bags suitable for distribution and farm use.',
    features: [
      'Balanced NPK formulation',
      'Includes essential micronutrients',
      'Enhanced solubility and availability',
      'Designed for broad agronomic use',
    ],
    usedFor: [
      'Cereals and staples',
      'Vegetables and legumes',
      'Fruits and tree crops',
    ],
    plant: ['Cereals', 'Vegetables', 'Legumes', 'Fruits', 'Tree Crops'],
  },
 
]
