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
  productBoronImage,
  activateImage,
  adActivateImage,
  adMaizeUreaBannerImage,
  adNpkCornBannerImage,
  adSulphateImage
} from '../assets/assetRegistry'

export const products = [
  {
    slug: 'urea-46n',
    title: ' UREA (46%N)',
    summary: 'High-nitrogen fertilizer for fast vegetative growth and yield support.',
    description:
      ' UREA supplies 46% nitrogen in a highly soluble form, making it a dependable choice for fast vegetative growth, greener foliage, and strong crop response during peak demand periods.',
    bullets: [
      '46% nitrogen for rapid canopy development',
      'Suitable for split applications during active growth',
      'Useful for cereals, vegetables, and tree crops',
    ],
    image: productUreaBagNoBg,
    detailImage: adMaizeUreaBannerImage,
    alt: 'UREA 46 percent nitrogen bag',
    composition:
      'UREA (46%N) is produced for efficient nitrogen delivery and dissolves readily in moisture, helping plants absorb nitrogen quickly for vigorous growth and strong canopy development.',
    useCase: 'Nitrogen boost for active growth phases',
    useCaseDetails:
      'Best suited to cereals, maize, rice, vegetables, and tree crops where quick nitrogen uptake improves leaf expansion, tillering, and early vigor.',
    manufacturingMessage:
      'Produced with consistent granule strength and uniform solubility so it performs reliably in both field and nursery programs.',
    packaging: 'Supplied in durable 50kg bags for farm and distributor use.',
    buyerNotes: [
      'The guaranteed analysis is 46% nitrogen, so it is mainly a nitrogen source rather than a complete crop nutrition program.',
      'Keep the product dry and covered because moisture can cause caking and reduce ease of handling.',
      'For best results, apply it when soil moisture is adequate and follow label rates to reduce losses and avoid over-application.',
    ],
    agronomy: {
      whyItWorks: 'The high soluble nitrogen content promotes rapid leaf growth and quick colour response, helping crops recover fast and build biomass early in the season.',
      bestCrops: ['Maize', 'Rice', 'Wheat', 'Vegetables', 'Tree crops'],
      applicationWindow: 'Apply during active growth phases or as a split dressing when quick nitrogen response is needed.',
      fieldNotes: ['Use with moisture and follow label rates to prevent lodging.', 'Avoid over-application in lush fields where excessive growth can be counterproductive.'],
    },
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
    plant: ['Maize', 'Rice', 'Sorghum', 'Millet', 'Tomato'],
  },
  {
    slug: 'tsp-050',
    title: 'TSP (0:50:0)',
    summary: 'Highly concentrated phosphorus fertilizer for strong root development and reproductive growth.',
    description:
      'TSP delivers concentrated phosphorus in a form that supports root establishment, flowering, and fruit set in soils where phosphorus availability is limiting.',
    bullets: [
      '50% phosphorus for strong root and flowering response',
      'Useful where soils are low in available P',
      'Supports early establishment and reproductive vigor',
    ],
    image: productTspBagImage,
    alt: 'Triple superphosphate fertilizer',
    composition:
      'TSP provides a concentrated phosphorus source to improve nutrient uptake, flowering, and crop vigor, especially where soil phosphorus is limiting.',
    useCase: 'Phosphorus supply for early establishment and reproductive growth',
    useCaseDetails:
      'Especially valuable for legumes, oilseeds, vegetables, and fruit crops during planting or early establishment when roots need strong access to phosphorus.',
    manufacturingMessage:
      'Processed for consistent granule quality and dependable field distribution so phosphorus is available where roots need it most.',
    packaging: 'Supplied in standard 50kg fertilizer bags.',
    agronomy: {
      whyItWorks: 'Phosphorus improves root architecture, early vigor, and reproductive performance, especially in low-P soils.',
      bestCrops: ['Legumes', 'Oilseeds', 'Fruit crops', 'Vegetables'],
      applicationWindow: 'Use at planting or early establishment when roots are forming and phosphorus demand is highest.',
      fieldNotes: ['Place where roots can access it early in the season.', 'Pair with balanced potassium and nitrogen programs for full crop support.'],
    },
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
    plant: ['Maize', 'Rice', 'Soybean', 'Groundnut', 'Cotton'],
  },
  {
    slug: 'sulphate-of-ammonia-21n-24s',
    title: 'SOA (21%N, 24%S)',
    summary: 'Dual nitrogen-sulphur fertilizer for growth, protein synthesis, and crop quality.',
    description:
      'SOA supplies nitrogen and sulphur together, helping crops build protein, maintain green foliage, and perform strongly in sulphur-deficient soils.',
    bullets: [
      '21% nitrogen and 24% sulphur',
      'Supports protein formation and enzyme activity',
      'Useful where sulphur deficiency limits growth and quality',
    ],
    image: productAmmoniaBagNoBg,
    detailImage: adSulphateImage,
    alt: 'Sulphate of ammonia fertilizer',
    composition:
      'A granular nitrogen-sulphur fertilizer formulated for efficient crop uptake, balanced nutrition, and improved growth performance across many cropping systems.',
    useCase: 'Nitrogen and sulphur nutrition for high-demand crops',
    useCaseDetails:
      'Often used on cereals, legumes, vegetables, and fruit crops that need both nitrogen and sulphur during vegetative growth and quality formation.',
    manufacturingMessage:
      'Produced with consistent granule quality for dependable field performance in both large and smallholder systems.',
    packaging: 'Supplied in practical 50kg bags.',
    buyerNotes: [
      'SOA supplies both nitrogen and sulphur, so it is useful where sulphur deficiency is a concern as well as nitrogen demand.',
      'Sulphur supports protein formation and healthy leaf growth, especially in crops with strong vegetative demand.',
      'Keep the material dry and avoid prolonged exposure to moisture so it remains easy to spread.',
    ],
    agronomy: {
      whyItWorks: 'Sulphur improves protein synthesis and nutrient efficiency, while nitrogen supports green growth and dry matter accumulation.',
      bestCrops: ['Cereals', 'Legumes', 'Vegetables', 'Fruits'],
      applicationWindow: 'Best used where early growth and protein formation are priorities, especially during active vegetative development.',
      fieldNotes: ['Useful where sulphur deficiency limits crop quality and vigor.', 'Apply with a planned fertilization schedule rather than as a one-off boost.'],
    },
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
    plant: ['Tomato', 'Rice', 'Maize', 'Onion', 'Cabbage'],
  },

  {
    slug: 'npk-23105te',
    title: ' NPK (23:10:5+7S+3MgO)',
    summary: 'Nitrogen-forward NPK with sulphur and magnesium for vigorous growth.',
    description:
      'This formulation combines nitrogen, phosphorus, potassium, sulphur, and magnesium for crops that need vigorous vegetative growth and balanced nutrient support through the season.',
    bullets: [
      '23:10:5 balance with sulphur and magnesium',
      'Good for top-dressing and mid-season nutrition',
      'Supports roots, stems, and foliage together',
    ],
    image: activateImage,
    detailImage: adActivateImage,
    alt: 'NPK 23 10 5 plus sulphur and magnesium',
    composition:
      'A complex plant food formulation designed to supply macro and micro nutrients for healthy root development, stronger stems, robust foliage, and improved crop outcomes.',
    useCase: 'Growth stimulation with balanced macro and micronutrients',
    useCaseDetails:
      'Useful for cereals, vegetables, legumes, and fruit crops where strong early growth and sustained nutrition are important.',
    manufacturingMessage:
      'Blended with precision to support predictable nutrient performance and dependable farm-level application.',
    packaging: 'Packed in 50kg bags for farm distribution and handling.',
    buyerNotes: [
      'This is a multi-nutrient blend, so it is best used as part of a planned nutrition program rather than as a single blanket application.',
      'The sulphur and magnesium content makes it more complete than a simple nitrogen-phosphorus-potassium product for some crops.',
      'Check the product label and field conditions before purchase so the ratio matches the intended crop and growth stage.',
    ],
    agronomy: {
      whyItWorks: 'This balanced NPK blend gives crops a strong start with macro and micronutrient support for roots, foliage, and yield formation.',
      bestCrops: ['Cereals', 'Vegetables', 'Legumes', 'Fruits'],
      applicationWindow: 'Use during early growth and top-dressing for crops that need sustained nutrition through the season.',
      fieldNotes: ['Works well in mixed cropping systems and broadacre fields.', 'Adjust rates to the crop stage and local soil test recommendations.'],
    },
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
    plant: ['Maize', 'Rice', 'Sorghum', 'Millet', 'Sugarcane'],
  },
  {
    slug: 'npk-2010107s',
    title: ' NPK (20:10:10+7S)',
    summary: 'Balanced NPK with sulphur for broad crop nutrition and strong growth.',
    description:
      ' NPK 20:10:10+7S is a balanced formulation for broad-acre and mixed-crop programs where steady growth and efficient nutrient uptake matter.',
    bullets: [
      'Balanced N:P:K ratio with sulphur',
      'Supports general crop feeding and mid-season response',
      'Suitable for cereals, vegetables, and legumes',
    ],
    image: productNpkBagNoBg,
    detailImage: adNpkCornBannerImage,
    alt: ' NPK 20 10 10 plus sulphur',
    composition:
      'A versatile NPK blend designed for balanced nutrient delivery, efficient uptake, and practical use through direct application or water-assisted nutrient programs.',
    useCase: 'General-purpose crop feeding with sulphur support',
    useCaseDetails:
      'A practical option for farms that need a dependable general-purpose NPK for establishment and continued growth across several crop types.',
    manufacturingMessage:
      'Formulated for consistency in colour, spread behaviour, and nutrient availability under varied field conditions.',
    packaging: 'Supplied in standard 50kg fertilizer bags.',
    agronomy: {
      whyItWorks: 'Balanced NPK delivery supports steady growth, nutrient uptake, and crop response across cereals, vegetables, and legumes.',
      bestCrops: ['Legumes', 'Vegetables', 'Cereals', 'Mixed cropping systems'],
      applicationWindow: 'Use where balanced nutrition is required from establishment through mid-season growth.',
      fieldNotes: ['A practical choice for broad cropping programs with varied nutrient needs.', 'Apply with timing that matches the crop’s main growth stages.'],
    },
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
    plant: ['Maize', 'Rice', 'Cassava', 'Cocoa', 'Cotton'],
  },
  {
    slug: 'npk-151515te',
    title: 'NPK (15:15:15+TE)',
    summary: 'Evenly balanced NPK blend for basal application and broad adaptability.',
    description:
      'NPK 15:15:15+TE gives crops an even nutrient balance for basal application, root establishment, and steady early growth.',
    bullets: [
      'Balanced 15:15:15 ratio and trace elements',
      'Good for pre-plant or establishment applications',
      'Supports uniform early growth across varied soils',
    ],
    image: productNpk151515Image,
    alt: 'NPK 15 15 15 with trace elements',
    composition:
      'Designed for pre-plant and soil-preparation stages, this formulation supplies balanced nutrients throughout the root zone to support early vigor and stable growth.',
    useCase: 'Basal feeding before planting and at establishment',
    useCaseDetails:
      'Suitable for tree crops, vegetables, cereals, and fruits where a balanced nutrient base is required from the start of the season.',
    manufacturingMessage:
      'Granulated for uniform field application and dependable nutrient performance across varied soils.',
    packaging: 'Packed in 50kg bags for practical transport and use.',
    buyerNotes: [
      'The 15:15:15 ratio gives an even nutrient balance, which makes it suitable for basal feeding and early establishment.',
      'It is often used where growers want a balanced starter approach rather than a high-nitrogen or high-phosphorus product.',
      'Keep the product dry and use it as part of a soil-based nutrition plan rather than a single corrective feed.',
    ],
    agronomy: {
      whyItWorks: 'The equal nutrient balance supports early establishment, steady growth, and balanced crop development across diverse soils.',
      bestCrops: ['Tree crops', 'Vegetables', 'Cereals', 'Fruits'],
      applicationWindow: 'Ideal for basal application before planting or at establishment when roots are still forming.',
      fieldNotes: ['Useful where a steady nutrient base is needed from the start.', 'Ideal for fields that benefit from a balanced pre-plant feeding strategy.'],
    },
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
    plant: ['Maize', 'Cocoa', 'Cassava', 'Tomato', 'Plantain'],
  },
  {
    slug: 'mop-0060',
    title: 'MOP (0:0:60)',
    summary: 'High-potassium fertilizer for drought tolerance and crop quality improvement.',
    description:
      'MOP provides concentrated potassium for crops that need better water balance, stress tolerance, and higher quality harvests.',
    bullets: [
      '60% potassium for strong crop quality response',
      'Improves drought resilience and stress tolerance',
      'Supports nutrient uptake and plant vigor',
    ],
    image: productMopBagImage,
    alt: 'MOP 0 0 60 fertilizer',
    composition:
      'With 0:0:60 composition, MOP provides concentrated potassium to optimize water-use efficiency, physiological stability, and quality-focused production.',
    useCase: 'Potassium correction and stress resilience programs',
    useCaseDetails:
      'Used in field crops, horticulture, tree crops, nut crops, and forage systems where potassium demand rises during flowering, fruiting, or stress periods.',
    manufacturingMessage:
      'Processed for stable granule quality and practical use in large-scale and smallholder crop production.',
    packaging: 'Supplied in sturdy 50kg bags.',
    buyerNotes: [
      'MOP is mainly a potassium source, so it should be paired with nitrogen and phosphorus where those nutrients are also needed.',
      'Potassium is important for crop quality and stress response, but it does not replace the role of nitrogen or phosphorus.',
      'Store in a dry, covered area and avoid handling in wet conditions to keep the material free-flowing.',
    ],
    agronomy: {
      whyItWorks: 'Potassium strengthens water balance, stress tolerance, and fruit quality, helping crops remain productive under challenging conditions.',
      bestCrops: ['Maize', 'Wheat', 'Rice', 'Potato', 'Citrus'],
      applicationWindow: 'Use where potassium demand rises during flowering, fruiting, or stress periods.',
      fieldNotes: ['Supports resilience during dry spells and high-demand growth stages.', 'Best results come when potassium is used as part of a full nutrition program.'],
    },
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
    plant: ['Cocoa', 'Tomato', 'Onion', 'Plantain', 'Cotton'],
  },

  {
    slug: 'dap-18460',
    title: 'DAP (18:46:0)',
    summary: 'Water-soluble phosphorus-rich fertilizer for root development and early crop growth.',
    description:
      'DAP is a fast-acting source of nitrogen and phosphorus that supports early establishment, root growth, and strong early vigor.',
    bullets: [
      '18% nitrogen and 46% phosphorus',
      'Water-soluble and plant-available',
      'Suitable for early-season soil and foliar application',
    ],
    image: productDapBagImage,
    alt: 'DAP 18 46 0 fertilizer',
    composition:
      'A soluble nutrient formulation designed for efficient phosphorus delivery and dependable uptake during key establishment and reproductive stages.',
    useCase: 'Rooting and early growth support with phosphorus emphasis',
    useCaseDetails:
      'Used for fruits, vegetables, cereals, legumes, and flowering plants where early root development and rapid establishment matter most.',
    manufacturingMessage:
      'Formulated to support uniform nutrient delivery and dependable agronomic response throughout the crop cycle.',
    packaging: 'Available in 50kg bags for commercial and farm-level use.',
    buyerNotes: [
      'DAP provides both nitrogen and phosphorus, which makes it useful for early-season establishment and rooting.',
      'It is best used where strong early growth is needed, but it should not be treated as a full crop nutrition program on its own.',
      'Keep it dry and store it away from moisture so it remains easy to apply and transport.',
    ],
    agronomy: {
      whyItWorks: 'The nitrogen-phosphorus combination gives plants a strong early start, helping roots establish quickly and supporting rapid vegetative growth.',
      bestCrops: ['Fruits', 'Vegetables', 'Cereals', 'Legumes'],
      applicationWindow: 'Apply early in the season or when crops need rapid establishment and strong root development.',
      fieldNotes: ['Works especially well where early vigor matters most.', 'Use as part of a planned program rather than a single corrective dose.'],
    },
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
    plant: ['Maize', 'Rice', 'Sorghum', 'Millet', 'Cotton'],
  },
 
  {
    slug: 'boron',
    title: 'Boron',
    summary: 'Micronutrient fertilizer for flowering, fruit set, and healthy cell development.',
    description:
      'Boron is a micronutrient fertilizer used to support flowering, fruit set, pollen development, and strong cell wall formation in crops that need trace-element nutrition.',
    bullets: [
      'Important for flowering and fruit development',
      'Supports pollen viability and cell wall strength',
      'Useful where boron deficiency limits crop performance',
    ],
    image: productBoronImage,
    alt: 'Boron micronutrient fertilizer',
    composition:
      'A micronutrient formulation designed to correct boron deficiencies and improve reproductive development, nutrient transport, and structural strength in crops.',
    useCase: 'Trace-element support for flowering and fruiting crops',
    useCaseDetails:
      'Commonly used on fruits, vegetables, legumes, and oilseeds where boron deficiency can reduce flower retention, fruit set, and overall yield quality.',
    manufacturingMessage:
      'Produced to provide dependable boron availability for targeted micronutrient programs and field correction strategies.',
    packaging: 'Supplied in practical fertilizer bags for farm and distributor use.',
    buyerNotes: [
      'Boron is a micronutrient, so it should be used carefully and only when deficiency or crop need is identified.',
      'Excess boron can be harmful, so follow recommended rates and label guidance.',
      'Store in a dry place and avoid mixing or applying it without a proper nutrition plan.',
    ],
    agronomy: {
      whyItWorks: 'Boron improves pollen formation, fruit setting, and cell wall development, helping crops maintain better reproductive performance and quality.',
      bestCrops: ['Fruits', 'Vegetables', 'Legumes', 'Oilseeds'],
      applicationWindow: 'Use during flowering and early fruit development, or where soil and tissue testing indicate a boron deficiency.',
      fieldNotes: ['Important for crops with sensitive reproductive stages.', 'Use only as part of a well-managed micronutrient program.'],
    },
    features: [
      'Supports flowering and fruit set',
      'Corrects boron deficiency',
      'Improves cell wall strength',
      'Useful in micronutrient programs',
    ],
    usedFor: [
      'Fruit crops',
      'Vegetables and legumes',
      'Oilseeds and other reproductive crops',
    ],
    plant: ['Cocoa', 'Cotton', 'Tomato', 'Onion', 'Mango'],
  },
  {
    slug: 'blended-npks',
    title: 'Blended NPKs',
    summary: 'Different blended NPK formulations for balanced growth, strong establishment, and crop-specific nutrition.',
    description:
      'Blended NPKs cover several fertilizer types, including balanced NPKs, nitrogen-rich blends, sulphur-enriched formulations, and trace-element fortified products for different crops and soil conditions.',
    bullets: [
      'Includes balanced, nitrogen-forward, sulphur-enriched, and TE-fortified NPK blends',
      'Designed to match crop stage, soil needs, and field goals',
      'Suitable for cereals, vegetables, legumes, fruits, and tree crops',
    ],
    image: productNpkBagNoBg,
    alt: 'Blended NPK fertilizers',
    composition:
      'These products are formulated by combining nitrogen, phosphorus, potassium, and supporting nutrients in different ratios to create practical blends for vegetative growth, root development, flowering, and yield formation.',
    useCase: 'Flexible nutrient programs across crop types and growth stages',
    useCaseDetails:
      'Common examples include balanced formulations such as 15:15:15+TE for steady basal feeding, nitrogen-forward blends such as 23:10:5+7S+3MgO for vigorous early growth, and sulphur-enriched options such as 20:10:10+7S for broad crop nutrition programs.',
    manufacturingMessage:
      'Produced in different blended NPK grades to meet the needs of farms that require tailored nutrition instead of one single standard formula.',
    packaging: 'Supplied in fertilizer bags suitable for distribution and farm use.',
    buyerNotes: [
      'Blended NPK products come in different nutrient ratios, so buyers should confirm the guaranteed analysis before purchase.',
      'The right choice depends on crop type, soil fertility, growth stage, and whether the goal is establishment, balanced growth, or yield support.',
      'Store the bags in a dry place and use them as part of a planned fertility program.',
    ],
    agronomy: {
      whyItWorks: 'Different blended NPK types let growers choose a formulation that matches the crop, soil, and growth stage for more efficient nutrition and better field response.',
      bestCrops: ['Cereals', 'Vegetables', 'Legumes', 'Fruits', 'Tree crops'],
      applicationWindow: 'Use when crop-specific nutrition plans need a tailored balance of nutrients rather than one standard formula.',
      fieldNotes: ['A flexible option for farms with mixed crops and changing soil conditions.', 'Pair with soil tests and field observation to choose the most suitable blend.'],
    },
    features: [
      'Balanced and crop-specific NPK options',
      'Includes sulphur and trace elements in selected grades',
      'Supports early growth, flowering, and yield formation',
      'Designed for broad agronomic use',
    ],
    usedFor: [
      'Cereals and staples',
      'Vegetables and legumes',
      'Fruits and tree crops',
      'General crop nutrition programs',
    ],
    plant: ['Maize', 'Cocoa', 'Cassava', 'Tomato', 'Plantain'],
  },
 
]
