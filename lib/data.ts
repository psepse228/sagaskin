/**
 * Real product catalog, supplied directly by the client (names, prices,
 * photos, ingredient lists) 2026-08-26 — see feedback/ for the source
 * material this was built from. This is still a stand-in for the eventual
 * Shopify Storefront API (no live inventory/stock sync, no real
 * cart/checkout — see lib/whatsapp.ts for the stopgap order path), but
 * the product data itself is real, not placeholder.
 *
 * Shape deliberately mirrors what lib/shopify/queries.ts returns (id,
 * handle, title, image, price) so swapping this out for a real
 * storefrontFetch() call later is a drop-in replacement, not a rewrite.
 */

export type MockProduct = {
  id: string;
  handle: string;
  title: string;
  brand: string;
  category: "cleansers" | "toners" | "serums" | "moisturisers" | "masks" | "spf";
  price: number;
  currency: string;
  image: string;
  description: string;
  howToUse?: string;
  ingredients?: string;
  vegan?: boolean;
  // "Perfect for" / "Suitable for" skin types, straight from the client's
  // product copy (see products/*_des.txt) — not a separate list, since
  // most of the copy already says who each product is for. Products
  // whose copy says "All skin types" (or doesn't specify) get all four.
  skinTypes: ("dry" | "oily" | "combination" | "balanced")[];
};

export const PRODUCT_CATEGORIES = [
  { key: "cleansers", label: "Cleansers" },
  { key: "toners", label: "Toners" },
  { key: "serums", label: "Serums" },
  { key: "moisturisers", label: "Moisturiser" },
  { key: "masks", label: "Masks" },
  { key: "spf", label: "SPF" },
] as const;

// `label` is the short chip text (matches the client's wireframe circles —
// "Comb" is deliberate there, space-constrained). `fullLabel` is the real
// word, for anywhere rendering full text (page headings, etc.) so it
// doesn't read as a typo.
export const SKIN_TYPES = [
  { key: "dry", label: "Dry", fullLabel: "Dry" },
  { key: "oily", label: "Oily", fullLabel: "Oily" },
  { key: "combination", label: "Comb", fullLabel: "Combination" },
  { key: "balanced", label: "Balanced / Normal", fullLabel: "Balanced / Normal" },
] as const;

export const ROUTINE_STEPS = [
  { step: 1, label: "Cleanser" },
  { step: 2, label: "Toner" },
  { step: 3, label: "Serum" },
  { step: 4, label: "Moisturiser" },
  { step: 5, label: "Sunscreen" },
] as const;

// A–Z is a real Shopify collection link once wired up. The rest are the
// brands actually in the catalog below, plus Anua from the client's
// wireframe (homepage-bestsellers-brands-nav.jpg) which isn't stocked yet.
export const BRANDS = [
  { handle: "a-z", label: "A–Z" },
  { handle: "anua", label: "Anua" },
  { handle: "axis-y", label: "AXIS-Y" },
  { handle: "celimax", label: "Celimax" },
  { handle: "dr-althea", label: "Dr. Althea" },
  { handle: "haruharu-wonder", label: "Haruharu Wonder" },
  { handle: "medicube", label: "Medicube" },
  { handle: "missha", label: "MISSHA" },
  { handle: "skin1004", label: "Skin1004" },
] as const;

export const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: "haruharu-black-rice-cleansing-oil",
    handle: "haruharu-black-rice-cleansing-oil",
    title: "Black Rice Moisture Cleansing Oil (100ml)",
    brand: "haruharu-wonder",
    category: "cleansers",
    price: 19.5,
    currency: "GBP",
    image: "/images/products/haruharu-black-rice-cleansing-oil.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `A gentle yet powerful cleansing oil that effortlessly melts away makeup, SPF, and impurities while keeping your skin soft, balanced, and nourished. The Black Rice Moisture Cleansing Oil is designed with a minimal yet highly effective formula to deliver a deep cleanse without irritation. With just nine carefully selected ingredients, it removes buildup from the day while maintaining your skin's natural moisture barrier. Enriched with black rice extract, this antioxidant-rich formula helps support a brighter, healthier-looking complexion. A blend of nourishing plant oils, including jojoba, olive, and sunflower, works to dissolve excess sebum and impurities while leaving the skin feeling hydrated and comfortable — never greasy or stripped. Its lightweight texture transforms into a silky milky emulsion upon contact with water, allowing for a thorough cleanse that helps reduce blackheads and congestion over time.`,
    howToUse: `Dispense an appropriate amount onto dry hands and gently massage onto a dry face. Add a small amount of water to emulsify the oil into a milky texture, then continue massaging. Rinse thoroughly with lukewarm water. For best results, follow with the Moisture 5.5 Soft Cleansing Gel as part of your double cleansing routine.`,
    ingredients: `Oryza Sativa (Rice) Bran Oil, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Oil, Olea Europaea (Olive) Fruit Oil, Sorbeth-30 Tetraoleate, Simmondsia Chinensis (Jojoba) Seed Oil, Macadamia Integrifolia Seed Oil, Tocopherol, Ethylhexylglycerin`,
  },
  {
    id: "axis-y-eye-serum",
    handle: "axis-y-eye-serum",
    title: "Vegan Collagen Eye Serum (10ml)",
    brand: "axis-y",
    category: "serums",
    price: 21.5,
    currency: "GBP",
    image: "/images/products/axis-y-eye-serum.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    vegan: true,
    description: `A targeted eye serum designed to visibly smooth, brighten, and restore the delicate eye area. The Vegan Collagen Eye Serum is a clinically informed formula developed to address common concerns such as fine lines, loss of elasticity, dark circles, and puffiness. Lightweight yet deeply hydrating, it absorbs quickly into the skin, delivering essential nutrients without irritation. Formulated with high-purity vegan collagen and a 5-peptide complex, this serum helps support skin firmness and elasticity while improving the appearance of fine lines over time. A blend of triple hyaluronic acid provides multi-level hydration, helping to plump and smooth the skin for a refreshed, well-rested look. Enriched with vitamin-rich fruit extracts and soothing ingredients, it helps brighten the under-eye area while supporting overall skin balance and resilience. Designed for daily use, this formula is suitable for even the most delicate and sensitive skin.`,
    howToUse: `Dispense a small amount using the pump and apply gently to the eye area using the applicator. Lightly massage in upward circular motions until fully absorbed.`,
    ingredients: `Water, Methylpropanediol, Glycerin, 1,2-Hexanediol, Niacinamide, Adenosine, Collagen (450ppm), Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Acetylated Hyaluronate, Tripeptide-1, Palmitoyl Pentapeptide-4, Hexapeptide-9, Acetyl Hexapeptide-8, Copper Tripeptide-1, Pyrus Malus (Apple) Fruit Extract, Prunus Mume Fruit Extract, Vitis Vinifera (Grape) Fruit Extract, Helianthus Annuus (Sunflower) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Limnanthes Alba (Meadowfoam) Seed Oil, Carica Papaya (Papaya) Fruit Extract, Centella Asiatica Extract, Ficus Carica (Fig) Fruit Extract, Ulmus Davidiana Root Extract, Amaranthus Caudatus Seed Extract, Ceramide NP, Hydrogenated Lecithin, Leuconostoc/Radish Root Ferment Filtrate, Butylene Glycol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, C13-14 Alkane, Sodium Acrylic Acid/MA Copolymer, C15-23 Alkane, Ethylhexylglycerin, Decyl Glucoside, Caprylyl Glycol, Polyglyceryl-10 Stearate, Tocopherol.`,
  },
  {
    id: "axis-y-glow-toner",
    handle: "axis-y-glow-toner",
    title: "Dark Spot Correcting Glow Toner (125ml)",
    brand: "axis-y",
    category: "toners",
    price: 20,
    currency: "GBP",
    image: "/images/products/axis-y-glow-toner.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `A brightening, hydrating toner designed to visibly improve skin tone, reduce dark spots, and restore a natural, radiant glow. The Dark Spot Correcting Glow Toner works as the first step after cleansing to rebalance, hydrate, and refine the skin. Its lightweight, dual-layer formula delivers both moisture and nourishment, helping to soften the skin while preparing it for the next steps in your routine. Powered by a combination of glutathione, niacinamide, and a stable vitamin C derivative, this toner helps support a brighter, more even-looking complexion. With consistent use, it works to reduce the appearance of dark spots, improve clarity, and enhance overall skin radiance. The ultra-fine mist application provides a soothing, refreshing experience, instantly calming the skin while delivering hydration evenly across the face. Enriched with multiple forms of hyaluronic acid, ceramides, and botanical extracts, it helps maintain moisture levels and support a healthy skin barrier.`,
    howToUse: `Shake well to mix the dual layers. Close your eyes and spray evenly over the face, allowing the mist to absorb into the skin. Use after cleansing or throughout the day for an extra boost of hydration and glow. For best results, pair with the Glow Serum and Glow Cream as part of a complete brightening routine.`,
    ingredients: `Water, Butylene Glycol, Niacinamide, Ethylhexyl Stearate, Caprylic/Capric Triglyceride, Cetyl Ethylhexanoate, Glutathione, Sodium Ascorbyl Phosphate, Salix Alba (Willow) Bark Extract, Adenosine, Sodium Hyaluronate, Hydroxypropyltrimonium Hyaluronate, Sodium Acetylated Hyaluronate, Hydrolyzed Hyaluronic Acid, Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Hydrolyzed Sodium Hyaluronate, Potassium Hyaluronate, Panthenol, Squalane, Glycerin, Allantoin, Cyanocobalamin, Terminalia Ferdinandiana Fruit Extract, Hippophae Rhamnoides Fruit Extract, Malpighia Glabra (Acerola) Fruit Extract, Brassica Oleracea Italica (Broccoli) Extract, Morus Alba Root Extract, Phaseolus Radiatus Seed Extract, Canavalia Gladiata Seed Extract, Glycine Soja (Soybean) Seed Extract, Lens Esculenta (Lentil) Seed Extract, Ceratonia Siliqua (Carob) Seed Extract, Centella Asiatica Leaf Extract, Ceramide NP, Acetyl Octapeptide-3, Dipeptide-1, Tripeptide-2, Palmitoyl Dipeptide-7, Dipeptide-4, Sorbitan Stearate, Cetearyl Alcohol, 1,2-Hexanediol, Stearic Acid, Polysorbate 60, Ethylhexylglycerin, Hydrogenated Olive Oil Unsaponifiables, Disodium EDTA, Hydroxypropyl Cyclodextrin, Pueraria Lobata Root Extract, Lactobacillus Ferment Lysate, Chlorphenesin, Maltodextrin, Melia Azadirachta Flower Extract, Ocimum Sanctum Leaf Extract, Melia Azadirachta Leaf Extract, Arginine, Phytosterols, Carbomer, Curcuma Longa (Turmeric) Root Extract, Corallina Officinalis Extract, Caprylyl Glycol, Sodium Citrate, Polyglyceryl-10 Laurate, Citric Acid.`,
  },
  {
    id: "celimax-retinol-serum",
    handle: "celimax-retinol-serum",
    title: "Vita A Retinol Shot Tightening Serum",
    brand: "celimax",
    category: "serums",
    price: 20,
    currency: "GBP",
    image: "/images/products/celimax-retinol-serum.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `A targeted retinol serum designed to smooth fine lines, refine pores, and improve overall skin firmness. The Vita A Retinol Shot Tightening Serum is an advanced treatment formulated with 0.1% pure retinol to support visible skin renewal and improve texture over time. Designed to target signs of ageing and enlarged pores, it helps promote a smoother, more refined complexion with consistent use. Enhanced with A-Shot™ technology, this formula is developed to support deeper delivery of active ingredients, allowing retinol to work more effectively within the skin. A blend of peptides and soothing ingredients helps maintain balance, minimising irritation while supporting firmness and elasticity. Its lightweight texture absorbs easily into the skin, making it suitable for evening use as part of a structured skincare routine. With gradual introduction, it helps improve skin clarity, tone, and overall resilience.`,
    howToUse: `Use in the evening after cleansing and toning. Apply a small amount to the face or targeted areas and gently pat until absorbed. If new to retinol, use every other night for the first two weeks, then gradually increase frequency as your skin builds tolerance. Always apply sunscreen during the day when using retinol products.`,
    ingredients: `Water, Methylpropanediol, Glycerin, 1,2-Hexanediol, Caprylic/Capric Triglyceride, Panthenol, Polypropylsilsesquioxane, C14-22 Alcohols, Glyceryl Stearate, Ammonium Acryloyldimethyltaurate/VP Copolymer, Hydrolyzed Sponge, Helianthus Annuus (Sunflower) Seed Oil, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Tocopherol, Retinol, Allantoin, Arginine, Undecane, Xanthan Gum, Ethylhexylglycerin, C12-20 Alkyl Glucoside, Lauryl Glucoside, Polyglyceryl-6 Laurate, Adenosine, Tridecane, Disodium EDTA, Daucus Carota Sativa (Carrot) Root Extract, Beta-Carotene, Glucose, Tripeptide-1, Palmitoyl Tripeptide-1, Nonapeptide-1, Hexapeptide-9, Dipeptide-2, Copper Tripeptide-1, Acetyl Tetrapeptide-5, Acetyl Hexapeptide-8, Palmitoyl Pentapeptide-4.`,
  },
  {
    id: "celimax-creamy-toner",
    handle: "celimax-creamy-toner",
    title: "Dual Barrier Creamy Toner",
    brand: "celimax",
    category: "toners",
    price: 18,
    currency: "GBP",
    image: "/images/products/celimax-creamy-toner.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `A rich, nourishing toner designed to deeply hydrate, strengthen the skin barrier, and lock in long-lasting moisture. The Dual Barrier Creamy Toner delivers intensive hydration with a soft, milky texture that comforts and replenishes the skin. Formulated to support a healthy skin barrier, it helps prevent moisture loss while improving overall skin balance and resilience. Infused with ceramides and a peptide complex, this toner works to reinforce the skin's natural protective layer, keeping it hydrated, smooth, and better protected against external stressors. Its creamy consistency provides a boost of nourishment without feeling heavy, making it ideal for daily use. With added soothing and hydrating ingredients, it helps calm dryness and leave the skin feeling soft, supple, and well-conditioned.`,
    howToUse: `After cleansing, apply an appropriate amount to the face and neck. Gently pat using the warmth of your hands until fully absorbed. Layer as needed for additional hydration.`,
    ingredients: `Water, Dipropylene Glycol, Glycerin, Glycereth-26, 1,2-Hexanediol, Dipentaerythrityl Hexa C5-9 Acid Esters, Panthenol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Macadamia Integrifolia Seed Oil, Caprylic/Capric Triglyceride, Styrene/VP Copolymer, Phenyl Trimethicone, Ethylhexylglycerin, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Allantoin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Tromethamine, Hydrogenated Lecithin, Disodium EDTA, Sodium Hyaluronate, Sorbitan Isostearate, Heptasodium Hexacarboxymethyl Dipeptide-12, Sorbic Acid, Glyceryl Stearate, Phytosphingosine, Ceramide NP, 2,3-Butanediol, Tocopherol, Ceramide NS, Ceramide AS, Ceramide AP, Cholesterol, Ceramide EOP.`,
  },
  {
    id: "celimax-wearable-cream",
    handle: "celimax-wearable-cream",
    title: "Dual Barrier Skin Wearable Cream",
    brand: "celimax",
    category: "moisturisers",
    price: 21,
    currency: "GBP",
    image: "/images/products/celimax-wearable-cream.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `A nourishing moisturiser designed to strengthen the skin barrier, lock in hydration, and provide long-lasting comfort for dry and sensitive skin. The Dual Barrier Skin Wearable Cream delivers rich yet balanced hydration, helping to protect the skin from moisture loss while improving overall resilience. Its smooth, comforting texture melts into the skin, creating a protective layer that supports barrier function without feeling heavy or greasy. Formulated with ceramides, panthenol, and skin-replenishing lipids, this cream helps reinforce the skin's natural barrier while soothing dryness and irritation. With continued use, it leaves the skin feeling softer, more balanced, and deeply hydrated. The formula is free from artificial fragrance and harsh additives, making it suitable for daily use across all skin types, including sensitive skin.`,
    howToUse: `Apply an appropriate amount to the skin as the final step of your skincare routine. Gently press into the skin using the warmth of your hands until fully absorbed. For very dry skin, apply an additional layer to enhance hydration and prevent moisture loss.`,
    ingredients: `Water, Glycerin, Caprylic/Capric Triglyceride, Butylene Glycol, Propanediol, Stearic Acid, Cetearyl Alcohol, Methyl Trimethicone, Caprylyl Methicone, 1,2-Hexanediol, C12-16 Alcohols, Panthenol, Olea Europaea (Olive) Fruit Oil, Hydrogenated Lecithin, Glyceryl Stearate, Palmitic Acid, Cetearyl Glucoside, Ceramide NP, Carbomer, Tromethamine, Allantoin, Xanthan Gum, Tocopherol, Ethylhexylglycerin, Dipropylene Glycol, Disodium EDTA, Pantolactone, Sodium Hyaluronate, Heptasodium Hexacarboxymethyl Dipeptide-12, Malt Extract, Ceramide NS, Phytosphingosine, Cholesterol, Ceramide AS, Ceramide AP, Ceramide EOP.`,
  },
  {
    id: "medicube-zero-pore-pads",
    handle: "medicube-zero-pore-pads",
    title: "Zero Pore Pad 2.0 (60 Pads)",
    brand: "medicube",
    category: "toners",
    price: 21.5,
    currency: "GBP",
    image: "/images/products/medicube-zero-pore-pads.jpg",
    skinTypes: ["oily", "combination"],
    description: `Textured facial toner pads designed for gentle exfoliation and pore care. Infused with 4.5% AHA Lactic Acid and 0.45% BHA Salicylic Acid, these pads help reduce the appearance of stretched pores while preventing clogged pores. Ideal for oily, combination, and acne-prone skin.`,
    howToUse: `Cleanse your face thoroughly to remove makeup, dirt, and impurities. Gently swipe a toner pad across your face in upward motions, starting from the center outward. Avoid the eye area. Allow the toner residue to absorb, then continue with serums, moisturizers, or sunscreen. Close the package promptly after use to prevent remaining pads from drying out.`,
    ingredients: `Aqua, Methylpropanediol, Tromethamine, Lactic Acid, Alcohol Denat., 1,2-Hexanediol, Salicylic Acid, Polyglyceryl-10 Laurate, Glycerin, Glycereth-26, Ethylhexylglycerin, Polyglyceryl-10 Myristate, Betaine, Allantoin, Trehalose, Disodium EDTA, Butylene Glycol, Panthenol, Betaine Salicylate, Ammonium Acryloyldimethyltaurate/VP Copolymer, Citrus Aurantium Dulcis (Orange) Peel Oil, Citrus Limon (Lemon) Peel Oil, Citrus Paradisi (Grapefruit) Peel Oil, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil, Lavandula Angustifolia (Lavender) Oil, Sodium Hyaluronate, Eucalyptus Globulus Leaf Oil, Citrus Aurantifolia (Lime) Fruit Extract, Vitis Vinifera (Grape) Fruit Extract, Ethyl Hexanediol, Citrus Aurantium Dulcis (Orange) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Citrus Limon (Lemon) Fruit Extract, Tocopherol, Salix Alba (Willow) Bark Extract, Origanum Vulgare Leaf Extract, Centella Asiatica Extract, Chamaecyparis Obtusa Leaf Extract, Portulaca Oleracea Extract, Cinnamomum Cassia Bark Extract, Scutellaria Baicalensis Root Extract, Lactobacillus/Soybean Ferment Extract, Oenothera Biennis (Evening Primrose) Flower Extract, Pueraria Lobata Root Extract, Pinus Palustris Leaf Extract, Ulmus Davidiana Root Extract`,
  },
  {
    id: "medicube-wrapping-mask",
    handle: "medicube-wrapping-mask",
    title: "Overnight Wrapping Mask — Collagen Boost",
    brand: "medicube",
    category: "masks",
    price: 27,
    currency: "GBP",
    image: "/images/products/medicube-wrapping-mask.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `An overnight mask enriched with collagen to improve skin elasticity and hydration. Leaves skin looking glowy, dewy, and refreshed by morning.`,
    howToUse: `After cleansing, apply toner and your usual cream. Evenly apply a layer of the wrapping mask to your face using a brush or spatula. Avoid eyebrows, hairline, eyes, and lips. Let it dry for about 15 minutes, then go to sleep. In the morning, gently peel off the mask from the edges or rinse thoroughly with lukewarm water.`,
    ingredients: `Aqua, Polyvinyl Alcohol, Glycerin, Agave Americana Stem Extract, Niacinamide, Sodium Hyaluronate, 1,2-Hexanediol, Caprylyl Glycol, Polyglyceryl-10 Laurate, Chlorella Vulgaris Extract, Glucose, Butylene Glycol, Ethylhexylglycerin, Fructooligosaccharides, Fructose, Adenosine, Xanthan Gum, Cynanchum Atratum Extract, Caprylic/Capric Triglyceride, Hydrogenated Lecithin, Althaea Rosea Flower Extract, Ceramide NP, Tocopherol, Pancratium Maritimum Extract, Collagen Extract, Sodium Stearoyl Glutamate`,
  },
  {
    id: "medicube-jelly-cream",
    handle: "medicube-jelly-cream",
    title: "Collagen Jelly Cream — 98% Hydrolyzed Collagen",
    brand: "medicube",
    category: "moisturisers",
    price: 26.5,
    currency: "GBP",
    image: "/images/products/medicube-jelly-cream.avif",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `A gel cream enriched with 98% hydrolyzed collagen for anti-aging benefits, improving skin elasticity while deeply hydrating. Ideal for maintaining firm, plump, and youthful-looking skin.`,
    howToUse: `After cleansing and toning, apply a moderate amount of the jelly cream to your face. Gently pat or massage until fully absorbed.`,
    ingredients: `Aqua, Propanediol, Dipropylene Glycol, Butylene Glycol, Methylpropanediol, Diethoxyethyl Succinate, Ethoxydiglycol, Ammonium Acryloyldimethyltaurate/Beheneth-25 Methacrylate Crosspolymer, Niacinamide, Trehalose, 1,2-Hexanediol, Carbomer, Polyglyceryl-10 Isostearate, Tromethamine, Chlorella Vulgaris Extract, Glucose, Polyglyceryl-10 Oleate, Ethylhexylglycerin, Fructooligosaccharides, Fructose, Xanthan Gum, Adenosine, Parfum, Sodium Phytate, Cyanocobalamin, Collagen, Hydrolyzed Collagen, Cynanchum Atratum Extract, Althaea Rosea Flower Extract, Tocopherol, Pullulan, Glycerin, Hydroxypropyltrimonium Hyaluronate, Soluble Collagen, Squalane, Soluble Proteoglycan, Allium Sativum (Garlic) Bulb Extract, Avena Sativa (Oat) Kernel Extract, Bertholletia Excelsa Seed Extract, Brassica Oleracea Italica (Broccoli) Extract, Camellia Sinensis Seed Extract, Hydrolyzed Elastin, Salmon Egg Extract, Solanum Lycopersicum (Tomato) Fruit Extract, Spinacia Oleracea (Spinach) Leaf Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract, Wine Extract, Sodium DNA`,
  },
  {
    id: "dr-althea-vitamin-c-serum",
    handle: "dr-althea-vitamin-c-serum",
    title: "Vitamin C Boosting Serum 63%",
    brand: "dr-althea",
    category: "serums",
    price: 19.8,
    currency: "GBP",
    image: "/images/products/dr-althea-vitamin-c-serum.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `A powerful brightening serum designed to reduce dark spots, even out skin tone, and restore a healthy, radiant glow. The Vitamin C Boosting Serum delivers targeted care for dull and uneven skin using a high-performance blend of brightening and antioxidant ingredients. Formulated with 63% Hippophae Rhamnoides Water, along with niacinamide, alpha arbutin, and tranexamic acid, it works to visibly reduce pigmentation while improving overall skin clarity. Its lightweight, fast-absorbing texture layers effortlessly into your routine, delivering deep hydration while supporting a smoother, more refined complexion. Enriched with multiple forms of vitamin C and soothing ingredients like centella asiatica, it helps brighten the skin while maintaining balance and comfort — making it suitable even for sensitive skin. Free from artificial colours and fragrance, this gentle yet effective formula provides visible results without irritation. With consistent use, skin appears clearer, more even-toned, and naturally luminous.`,
    howToUse: `After cleansing and toning, apply an even layer to the face and gently pat until fully absorbed. Follow with moisturiser. In the morning, always finish with sunscreen for optimal protection.`,
    ingredients: `Hippophae Rhamnoides Water, Centella Asiatica Leaf Water, Niacinamide, Butylene Glycol, 1,2-Hexanediol, Dipropylene Glycol, Water, Methyl Gluceth-20, Methylpropanediol, Betaine, Tranexamic Acid, Glycerin, Pentylene Glycol, Propanediol, Hydroxyethyl Urea, Laminaria Japonica Extract, Eclipta Prostrata Leaf Extract, Ficus Carica (Fig) Fruit Extract, Centella Asiatica Extract, Hydrogenated Lecithin, Sodium Hyaluronate, Carbomer, 3-O-Ethyl Ascorbic Acid, C12-14 Pareth-12, Ammonium Acryloyldimethyltaurate/VP Copolymer, Xanthan Gum, Tromethamine, Panthenol, Ethylhexylglycerin, Adenosine, Disodium EDTA, Fructooligosaccharides, Beta-Glucan, Ascorbic Acid, Hydrolyzed Hyaluronic Acid, Ceramide NP, Alpha-Arbutin, Tocopherol, Bifida Ferment Lysate, Bisabolol, Ubiquinone, Hydroxydecyl Ubiquinone, Sodium Acetylated Hyaluronate`,
  },
  {
    id: "dr-althea-345-relief-cream",
    handle: "dr-althea-345-relief-cream",
    title: "345 Relief Cream",
    brand: "dr-althea",
    category: "moisturisers",
    price: 21.8,
    currency: "GBP",
    image: "/images/products/dr-althea-345-relief-cream.jpg",
    skinTypes: ["oily", "combination"],
    vegan: true,
    description: `A lightweight, soothing gel cream designed to calm breakouts, support skin recovery, and restore balance for a clearer, healthier complexion. The 345 Relief Cream (Ver.2) is a nutrient-rich, vegan formula developed to provide targeted care for acne-prone and sensitive skin. Clinically tested as non-comedogenic, it helps treat blemishes while maintaining hydration and comfort, making it ideal for daily use. Infused with niacinamide, ceramide NP, and tea tree leaf water, this cream works to brighten uneven tone, strengthen the skin barrier, and deliver long-lasting moisture without clogging pores. Its lightweight, ointment-gel texture absorbs easily into the skin, providing soothing relief while helping to reduce redness and irritation. Enriched with calming ingredients like centella asiatica and panthenol, it supports skin recovery and resilience, leaving the skin feeling balanced, smooth, and refreshed.`,
    howToUse: `After cleansing and applying toner or lighter products, apply an appropriate amount evenly to the face as the final or semi-final step. Gently pat until fully absorbed. Use morning and evening.`,
    ingredients: `Aqua (Water), Melaleuca Alternifolia (Tea Tree) Leaf Water, Propanediol, Glycerin, 1,2-Hexanediol, Hydrogenated Polydecene, Vinyl Dimethicone, C14-22 Alcohols, Niacinamide, Caprylic/Capric Triglyceride, Panthenol, Dicaprylyl Carbonate, Butylene Glycol, Ammonium Acryloyldimethyltaurate/VP Copolymer, Caprylyl Methicone, Polymethylsilsesquioxane, C12-20 Alkyl Glucoside, Hydroxyacetophenone, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Polyquaternium-51, Ethylhexylglycerin, Tromethamine, Sodium Hyaluronate, Sodium Stearoyl Glutamate, Coptis Japonica Root Extract, Centella Asiatica Leaf Water, Beta-Glucan, Resveratrol, Hydrolyzed Hyaluronic Acid, Camellia Sinensis Leaf Water, Tocopherol, Madecassoside, Sodium DNA, Centella Asiatica Extract, Ceramide NP, Tannic Acid, Disodium EDTA, Sodium Phytate`,
  },
  {
    id: "skin1004-centella-ampoule",
    handle: "skin1004-centella-ampoule",
    title: "Madagascar Centella Tone Brightening Capsule Ampoule (100ml)",
    brand: "skin1004",
    category: "serums",
    price: 26.9,
    currency: "GBP",
    image: "/images/products/skin1004-centella-ampoule.avif",
    skinTypes: ["dry", "combination", "balanced"],
    description: `A gentle, daily brightening ampoule designed to improve uneven skin tone and dullness. Formulated with Niacinamide, Tranexamic Acid, and encapsulated Madecassoside (Madewhite™), it helps enhance radiance while soothing and hydrating the skin. The lightweight, essence-like texture absorbs quickly, leaving a soft, non-sticky, glowing finish. Suitable for Normal, Dry, Combination skin.`,
    howToUse: `Apply after cleansing and toning. Use an appropriate amount and spread evenly across the face. Gently pat for better absorption. Follow with moisturizer.`,
    ingredients: `Water, Butylene Glycol, Niacinamide, Glycerin, Tranexamic Acid, 1,2-Hexanediol, Betaine, Centella Asiatica Extract, Zea Mays (Corn) Starch, Xanthan Gum, Microcrystalline Cellulose, Mannitol, Panthenol, Pentylene Glycol, Ethylhexylglycerin, Hydroxyethylcellulose, Madecassoside, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Arginine, Hydrogenated Lecithin, Xylitylglucoside, Anhydroxylitol, Xylitol, Glucose, 3-O-Ethyl Ascorbic Acid, Lactobacillus Ferment`,
  },
  {
    id: "skin1004-centella-toner",
    handle: "skin1004-centella-toner",
    title: "Madagascar Centella Tone Brightening Boosting Toner (210ml)",
    brand: "skin1004",
    category: "toners",
    price: 21.5,
    currency: "GBP",
    image: "/images/products/skin1004-centella-toner.avif",
    skinTypes: ["dry", "combination", "balanced"],
    description: `A mild exfoliating toner designed to gently refine and prep the skin while enhancing radiance. Formulated with fruit extracts, Niacinamide, and Madecassoside (Madewhite™), it helps remove dead skin cells, improve skin clarity, and leave the complexion smoother, brighter, and well-hydrated. The lightweight watery texture absorbs quickly with a refreshing finish. Suitable for Normal, Dry, Combination skin.`,
    howToUse: `Apply after cleansing. Dispense onto hands or a cotton pad. Gently sweep or pat across the face. Follow with serum and moisturizer. Key ingredients: Centella Asiatica Extract (soothes and calms the skin), Niacinamide (brightens and improves skin clarity), 3-O-Ethyl Ascorbic Acid (stable Vitamin C derivative for radiance), Madecassoside/Madewhite™ (helps even and clarify skin tone), fruit extracts — papaya, apple, plum, grape (gently exfoliate and refine texture).`,
    ingredients: `Water, 1,2-Hexanediol, Niacinamide, Pentylene Glycol, Butylene Glycol, Glycerin, Propanediol, Centella Asiatica Extract, Xanthan Gum, Panthenol, Allantoin, Betaine, Ethylhexylglycerin, Xylitylglucoside, Anhydroxylitol, Disodium EDTA, Xylitol, Madecassoside, Glucose, Carica Papaya (Papaya) Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Prunus Mume Fruit Extract, Vitis Vinifera (Grape) Fruit Extract, 3-O-Ethyl Ascorbic Acid, Caprylic/Capric Triglyceride`,
  },
  {
    id: "skin1004-centella-clay-mask",
    handle: "skin1004-centella-clay-mask",
    title: "Madagascar Centella Poremizing Quick Clay Stick Mask",
    brand: "skin1004",
    category: "masks",
    price: 16,
    currency: "GBP",
    image: "/images/products/skin1004-centella-clay-mask.jpg",
    skinTypes: ["oily", "combination", "balanced"],
    description: `A convenient stick-type clay mask designed to absorb excess sebum and deeply cleanse pores. Formulated with five types of clay (including 18% kaolin) and finely crushed red bean powder, it helps remove impurities, gently exfoliate dead skin cells, and improve the appearance of enlarged pores. The smooth, moist texture glides easily onto the skin and rinses off without dryness or irritation. Suitable for Oily, Normal, Combination skin.`,
    howToUse: `Apply directly to clean, dry skin, avoiding the eye area. Leave on for 3–5 minutes. Rinse thoroughly with lukewarm water. Use 1–2 times a week or as needed.`,
    ingredients: `Water, Kaolin, Dipropylene Glycol, Glycerin, Titanium Dioxide (CI 77891), Butylene Glycol, Sodium Stearate, 1,2-Hexanediol, Aloe Barbadensis Leaf Extract, Phaseolus Angularis Seed Powder, Cetearyl Olivate, Propanediol, Sorbitan Olivate, Dimethicone, Iron Oxides (CI 77491), Centella Asiatica Extract, Ethylhexylglycerin, Sodium Phytate, Bentonite, Illite, Mineral Salts, Montmorillonite, Calamine`,
  },
  {
    id: "missha-daily-sheet-mask",
    handle: "missha-daily-sheet-mask",
    title: "Daily Sheet Mask",
    brand: "missha",
    category: "masks",
    price: 2,
    currency: "GBP",
    image: "/images/products/missha-daily-sheet-mask.jpg",
    skinTypes: ["dry", "oily", "combination", "balanced"],
    description: `A refreshing Korean sheet mask designed to deliver an instant boost of hydration and nourishment to the skin. The soft, skin-fitting sheet is infused with a lightweight essence that helps replenish moisture, soothe the skin, and leave the complexion looking fresh, smooth, and radiant. Suitable for all skin types.`,
    howToUse: `After cleansing and toning, carefully apply the sheet mask to the face, avoiding the eye and lip areas. Leave on for 15–20 minutes. Remove the mask and gently pat the remaining essence into the skin until fully absorbed. Use 2–3 times a week or whenever your skin needs an extra boost of hydration.`,
  },
];

export function getBestSellers(count = 3): MockProduct[] {
  return MOCK_PRODUCTS.slice(0, count);
}

export function getProductsByCategory(
  category: MockProduct["category"],
): MockProduct[] {
  return MOCK_PRODUCTS.filter((p) => p.category === category);
}

export function getProductByHandle(handle: string): MockProduct | undefined {
  return MOCK_PRODUCTS.find((p) => p.handle === handle);
}

export function getProductsByBrand(brandHandle: string): MockProduct[] {
  return MOCK_PRODUCTS.filter((p) => p.brand === brandHandle);
}

export function getProductsBySkinType(
  type: MockProduct["skinTypes"][number],
): MockProduct[] {
  return MOCK_PRODUCTS.filter((p) => p.skinTypes.includes(type));
}

export function getBrand(handle: string) {
  return BRANDS.find((b) => b.handle === handle);
}

export function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(amount);
}
