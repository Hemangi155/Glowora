export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: "Cleansers" | "Serums" | "Moisturizers" | "Sunscreens";
  price: number;
  volume: string;
  rating: number;
  reviewCount: number;
  activeIngredients: string;
  description: string;
  details: string[];
  ritualHowTo: string;
  badges: string[];
  primaryImage: string;
  secondaryImage: string;
  skinType: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  texture: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "luminescent-c-serum",
    name: "Luminescent C-Complex Brightening Serum",
    tagline: "15% Bio-Active Vitamin C + Marine Peptides",
    category: "Serums",
    price: 82,
    volume: "30ml / 1.0 fl. oz.",
    rating: 4.9,
    reviewCount: 486,
    activeIngredients: "15% 3-O-Ethyl Ascorbic Acid, Ferulic Acid, Golden Sea Kelp, Biomimetic Tripeptide-5",
    description: "A clinically potent brightening concentrate formulated with ultra-stable vitamin C and ocean ferments to fade stubborn dark spots, boost firmness, and ignite an unmistakable, lit-from-within glow.",
    details: [
      "Visibly reduces uneven tone and hyperpigmentation in 14 days",
      "Stimulates dermal collagen synthesis by up to 68%",
      "Shields skin against free-radical urban oxidation",
      "Silky, non-sticky micro-emulsion that melts upon contact"
    ],
    ritualHowTo: "Warm 3-4 golden drops between palms every morning. Gently press onto cleansed face, neck, and décolleté before moisturizer and sunscreen.",
    badges: ["Bestseller", "Vogue Beauty 2026 Winner"],
    primaryImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=900&auto=format&fit=crop",
    skinType: "All Skin Types, Dullness, Uneven Tone",
    isBestseller: true,
    isNewArrival: false,
    texture: "Featherlight golden serum"
  },
  {
    id: "velvet-dew-oil-cleanser",
    name: "Velvet Dew Balancing Oil Cleanser",
    tagline: "Japanese Camellia Seed + Botanical Squalane",
    category: "Cleansers",
    price: 48,
    volume: "150ml / 5.1 fl. oz.",
    rating: 4.8,
    reviewCount: 320,
    activeIngredients: "Cold-Pressed Camellia Japonica, Sugar-Cane Squalane, Bisabolol, Vitamin E",
    description: "A decadent antioxidant cleansing oil that transforms into a milky emulsion on water contact. Effortlessly dissolves waterproof cosmetics, pollution, and excess sebum while preserving essential skin lipids.",
    details: [
      "Effortlessly removes long-wear makeup and water-resistant SPF",
      "Leaves zero oily residue and does not clog delicate pores",
      "Soothes redness and maintains cutaneous microbiome balance",
      "Infused with calming notes of French lavender and neroli"
    ],
    ritualHowTo: "Dispense 2-3 pumps onto dry hands. Massage into dry skin in upward circular motions for 60 seconds. Add lukewarm water to emulsify into milk, then rinse thoroughly.",
    badges: ["Bestseller", "Clean Beauty Choice"],
    primaryImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=900&auto=format&fit=crop",
    skinType: "Normal, Dry, Sensitive & Combination",
    isBestseller: true,
    isNewArrival: false,
    texture: "Silken transforming oil-to-milk"
  },
  {
    id: "bio-ceramide-cashmere-creme",
    name: "Bio-Ceramide Cashmere Hydration Crème",
    tagline: "5 Biomimetic Ceramides + Centella Asiatica",
    category: "Moisturizers",
    price: 76,
    volume: "50ml / 1.7 fl. oz.",
    rating: 4.9,
    reviewCount: 512,
    activeIngredients: "Ceramides EOP, NP, AP, Phytosphingosine, Organic Centella Asiatica, Shea Butter Esters",
    description: "An ultra-restorative barrier barrier cream engineered to mimic the skin's lipid structure. Delivers 72 hours of cellular hydration, repairs environmental distress, and leaves a breathable cashmere finish.",
    details: [
      "Clinically proven to repair moisture barrier within 24 hours",
      "Locks in hydration without heavy occlusive greasiness",
      "Defends against trans-epidermal water loss (TEWL)",
      "Optimal biocompatible pH 5.2 for sensitive, compromised skin"
    ],
    ritualHowTo: "Smooth a pearl-sized amount between fingertips and massage across face and neck after serum application. Use morning and night.",
    badges: ["Bestseller", "Dermatologist #1 Pick"],
    primaryImage: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=900&auto=format&fit=crop",
    skinType: "Dry, Dehydrated, Reactive & Normal Skin",
    isBestseller: true,
    isNewArrival: false,
    texture: "Rich yet weightless whipped cashmere"
  },
  {
    id: "silk-veil-mineral-sun-drops",
    name: "Silk Veil Mineral Sun Drops SPF 50+",
    tagline: "12% Non-Nano Zinc Oxide + Ectoin Defense",
    category: "Sunscreens",
    price: 54,
    volume: "50ml / 1.7 fl. oz.",
    rating: 4.9,
    reviewCount: 394,
    activeIngredients: "Non-Nano Micronized Zinc Oxide (12%), Ectoin Extremolyte, Niacinamide (2%), Pongamia Seed",
    description: "The next evolution in daily photoprotection. An invisible, silky mineral sunscreen drop that glides effortlessly with zero white cast, deflecting UVA, UVB, blue light, and infrared environmental stressors.",
    details: [
      "PA++++ broad spectrum mineral shield with invisible dry-down",
      "Infused with Ectoin to safeguard skin cells against thermal aging",
      "Flawlessly primes skin for makeup without pilling or flashback",
      "Reef-safe, fragrance-free, water-resistant for up to 40 minutes"
    ],
    ritualHowTo: "Shake bottle vigorously before each use. Apply 2 full finger-lengths evenly to face, neck, and ears as the final step in your morning routine. Reapply every two hours.",
    badges: ["Bestseller", "Zero White Cast"],
    primaryImage: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
    skinType: "All Skin Types, Acne-Prone & Sensitive",
    isBestseller: true,
    isNewArrival: false,
    texture: "Fluid velvet drop"
  },
  {
    id: "bakuchiol-midnight-renewal-elixir",
    name: "Bakuchiol Midnight Renewal Elixir",
    tagline: "2% Phyto-Retinol + Blue Tansy & Squalane",
    category: "Serums",
    price: 88,
    volume: "30ml / 1.0 fl. oz.",
    rating: 4.9,
    reviewCount: 278,
    activeIngredients: "2% Ayurvedic Babchi Seed Bakuchiol, Moroccan Blue Tansy, Cold-Pressed Rosehip, CoQ10",
    description: "An overnight restorative nectar that delivers all the firming, line-smoothing benefits of traditional retinol without peeling, flaking, or photosensitivity. Awakens fatigued skin with replenished vitality.",
    details: [
      "Accelerates natural cellular turnover while you sleep",
      "Smooths fine expression lines and refines coarse texture",
      "Blue tansy calms irritation and reduces nocturnal inflammation",
      "Intoxicating natural herbaceous aroma from pure botanicals"
    ],
    ritualHowTo: "Press 3-4 drops into clean skin every evening. Allow the botanical blue hue to melt into a clear, golden veil before finishing with night cream.",
    badges: ["New Arrival", "Gentle Alternative"],
    primaryImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=900&auto=format&fit=crop",
    skinType: "Mature, Sensitive & Aging Skin",
    isBestseller: false,
    isNewArrival: true,
    texture: "Azure jewel-toned oil"
  },
  {
    id: "glacial-marine-jelly-cleanser",
    name: "Glacial Marine Micro-Jelly Cleanser",
    tagline: "Brittany Sea Kelp + Tremella Snow Mushroom",
    category: "Cleansers",
    price: 42,
    volume: "120ml / 4.0 fl. oz.",
    rating: 4.7,
    reviewCount: 195,
    activeIngredients: "Sub-Arctic Sea Kelp Extract, Tremella Fuciformis (Snow Mushroom), Green Tea Ferment, Amino Acid Surfactants",
    description: "A revitalizing water-jelly cleanser that cushions skin during cleansing. Rinses completely clean without that tight, stripped sensation, infusing skin with oceanic trace minerals and humectants.",
    details: [
      "Gentle sulfate-free amino acid cleansing base",
      "Purifies pores and removes micro-particulate city dust",
      "Tremella mushroom holds 500x its weight in moisture",
      "Slightly acidic pH 5.5 preserves the acid mantle"
    ],
    ritualHowTo: "Lather a dime-sized amount with damp hands. Gently work across wet skin for 45 seconds, then rinse with cool water. Ideal for AM cleansing or second cleanse in PM.",
    badges: ["New Arrival", "Microbiome Safe"],
    primaryImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=900&auto=format&fit=crop",
    skinType: "Oily, Combination & Blemish-Prone Skin",
    isBestseller: false,
    isNewArrival: true,
    texture: "Cushioning crystal jelly"
  },
  {
    id: "cloud-infusion-hydro-gel",
    name: "Cloud Infusion Hydro-Barrier Dew Gel",
    tagline: "Multi-Weight Hyaluronic Acid + Prickly Pear",
    category: "Moisturizers",
    price: 68,
    volume: "50ml / 1.7 fl. oz.",
    rating: 4.8,
    reviewCount: 340,
    activeIngredients: "8 Molecular Weights of Hyaluronic Acid, Organic Prickly Pear Cactus, Beta-Glucan, Aloe Leaf Water",
    description: "An instant quench for thirsty skin. This cooling, oil-free water gel floods the epidermis with multi-layer hydration, plumping fine dehydration lines and creating a silky canvas for glass skin.",
    details: [
      "Quenches dehydration instantly and increases water retention by 84%",
      "Cooling gel formula depuffs and calms hot, sensitized skin",
      "Fast-absorbing, non-comedogenic and 100% silicone-free",
      "Layerable under makeup for an all-day luminous finish"
    ],
    ritualHowTo: "Smooth generously over face and neck in upward sweeps. Can be applied chilled from the beauty fridge for an extra depuffing morning ritual.",
    badges: ["Hydration Hero"],
    primaryImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=900&auto=format&fit=crop",
    skinType: "Dehydrated, Oily & Normal Skin",
    isBestseller: false,
    isNewArrival: true,
    texture: "Dew-burst cooling gel"
  },
  {
    id: "solar-shield-daily-glow-fluid",
    name: "Solar Shield Daily Sheer Fluid SPF 45",
    tagline: "Broad Spectrum Mineral + Golden Algae",
    category: "Sunscreens",
    price: 52,
    volume: "50ml / 1.7 fl. oz.",
    rating: 4.8,
    reviewCount: 215,
    activeIngredients: "Zinc Oxide (9.8%), Golden Seaweed (Laminaria Ochroleuca), Vitamin C Ester, Bisabolol",
    description: "A whisper-weight fluid sunscreen offering flawless daily broad-spectrum shielding. Infused with antioxidant golden seaweed to neutralize infrared heat stress while bestowing a sheer, dewy pearl radiance.",
    details: [
      "Shields against UVA/UVB rays and high-energy visible blue light",
      "Subtle light-diffusing pearl minerals blur minor imperfections",
      "Sweat and humidity resistant with zero greasy feel",
      "Dermatologically approved for delicate and rosacea-prone skin"
    ],
    ritualHowTo: "Shake well. Apply smoothly across face and neck 15 minutes before sun exposure. Reapply liberally after swimming or perspiring.",
    badges: ["New Arrival", "Editorial Favorite"],
    primaryImage: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=900&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
    skinType: "All Skin Types, Especially Dull or Fatigued Skin",
    isBestseller: false,
    isNewArrival: true,
    texture: "Ultra-sheer illuminating fluid"
  }
];

export const CATEGORIES_DATA = [
  {
    id: "cleansers",
    name: "Cleansers",
    tagline: "Purify & Restore",
    description: "Transformative oil and jelly cleansers formulated to melt makeup and clarify pores without disturbing the skin's vital acid mantle.",
    productCount: 2,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=900&auto=format&fit=crop",
    featuredKey: "Camellia & Sea Kelp"
  },
  {
    id: "serums",
    name: "Serums",
    tagline: "Concentrated Bio-Actives",
    description: "Potent botanical elixirs packed with stable vitamin C, bio-retinol, and marine peptides for targeted cellular repair.",
    productCount: 2,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop",
    featuredKey: "Vitamin C & Bakuchiol"
  },
  {
    id: "moisturizers",
    name: "Moisturizers",
    tagline: "Deep Barrier Hydration",
    description: "Whipped cashmere crèmes and cooling hydro-gels delivering biocompatible ceramides for 72-hour moisture lock.",
    productCount: 2,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=900&auto=format&fit=crop",
    featuredKey: "5 Biomimetic Ceramides"
  },
  {
    id: "sunscreens",
    name: "Sunscreens",
    tagline: "Invisible Mineral Shield",
    description: "Silky, featherlight broad-spectrum mineral drops providing PA++++ photoprotection with zero white cast or grease.",
    productCount: 2,
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=900&auto=format&fit=crop",
    featuredKey: "Non-Nano Zinc & Ectoin"
  }
];

export const ROUTINE_STEPS = [
  {
    stepNumber: "01",
    stepName: "Cleanse",
    title: "Melt & Purify",
    description: "Dissolve waterproof makeup, environmental pollutants, and excess sebum with cold-pressed botanical lipids that replenish rather than strip.",
    timing: "AM & PM",
    recommendedProduct: PRODUCTS[1], // Velvet Dew
    keyBenefit: "Zero residue, pH 5.5 balanced, preserves cutaneous microbiome",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=900&auto=format&fit=crop"
  },
  {
    stepNumber: "02",
    stepName: "Treat",
    title: "Potent Cellular Activation",
    description: "Penetrate deep beneath the stratum corneum with high-potency bio-active antioxidants to erase dullness and accelerate collagen synthesis.",
    timing: "AM: Vitamin C / PM: Bakuchiol",
    recommendedProduct: PRODUCTS[0], // Luminescent C
    keyBenefit: "Fades dark spots, smooths micro-texture, illuminates instantly",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop"
  },
  {
    stepNumber: "03",
    stepName: "Hydrate",
    title: "Lipid Barrier Fortification",
    description: "Infuse five skin-identical ceramides and plant squalane to seal in moisture and construct an impenetrable defense against moisture evaporation.",
    timing: "AM & PM",
    recommendedProduct: PRODUCTS[2], // Bio-Ceramide Crème
    keyBenefit: "72-hour sustained hydration, plumping cashmere finish",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=900&auto=format&fit=crop"
  },
  {
    stepNumber: "04",
    stepName: "Protect",
    title: "Invisible Daily Defense",
    description: "Deflect UVA, UVB, HEV blue light, and infrared radiation with ultra-micronized non-nano zinc and extremolyte cellular protectors.",
    timing: "AM Routine Final Step",
    recommendedProduct: PRODUCTS[3], // Silk Veil SPF
    keyBenefit: "PA++++ SPF 50+, invisible zero-white cast, velvety makeup primer",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=900&auto=format&fit=crop"
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    quote: "GLOWORA has completely transformed my sensitive skin barrier. After two weeks using the 4-step ritual, my redness disappeared and I finally have that dewy glass radiance without makeup.",
    author: "Genevieve L.",
    title: "Verified Client",
    skinProfile: "Dry / Sensitive Skin",
    productUsed: "Complete 4-Step Ritual",
    rating: 5
  },
  {
    id: "test-2",
    quote: "The Luminescent C-Serum is pure alchemy. I've tried every luxury brand on the market; this is the first formula that actually faded my sun spots without causing a single breakout.",
    author: "Camille D.",
    title: "Beauty Editor & Verified Buyer",
    skinProfile: "Combination / Hyperpigmentation",
    productUsed: "Luminescent C-Complex Serum",
    rating: 5
  },
  {
    id: "test-3",
    quote: "Finally a mineral SPF that disappears on medium skin tones! The Silk Veil feels like liquid silk and leaves the most ethereal, candlelit glow.",
    author: "Sienna M.",
    title: "Verified Client",
    skinProfile: "Normal / Dehydrated Skin",
    productUsed: "Silk Veil Mineral Sun Drops SPF 50+",
    rating: 5
  }
];

export const PRESS_MENTIONS = [
  { name: "VOGUE", quote: "The botanical breakthrough elevating clinical skincare into high art." },
  { name: "HARPER'S BAZAAR", quote: "GLOWORA's cashmere barrier cream is the modern gold standard." },
  { name: "ELLE", quote: "Clean science meets Parisian sensorial luxury." },
  { name: "ALLURE", quote: "Best Mineral Sunscreen Award 2026: Silk Veil is in a league of its own." },
  { name: "VANITY FAIR", quote: "The discerning minimalist's holy grail skincare ritual." }
];
