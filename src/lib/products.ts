export type ProductVariant = {
  weight: string;
  price: number;
  originalPrice?: number;
};

export type Product = {
  id: string;
  name: string;
  localName: string;
  image: string;
  badge?: "BEST SELLER" | "BULK ORDERS WELCOME" | "NEW";
  shortDescription: string;
  detailDescription: string;
  origin: string;
  aroma: string;
  bestFor: string[];
  highlights: string[];
  showLatestPriceCTA?: boolean;
  variants: ProductVariant[];
};

export const products: Product[] = [
  {
    id: "premium-cardamom",
    name: "Premium Cardamom",
    localName: "Elaichi",
    image: "/cardamom.webp",
    badge: "BEST SELLER",
    shortDescription: "Bold green pods with a sweet, floral lift.",
    detailDescription:
      "Hand-selected cardamom pods from Kerala's high ranges, chosen for bright color, full seeds, and a naturally sweet aroma that opens beautifully in chai, biryani, and desserts.",
    origin: "Idukki high ranges, Kerala",
    aroma: "Sweet, eucalyptus-like, and floral",
    bestFor: ["Chai", "Biryani", "Payasam", "Bakery"],
    highlights: ["Whole green pods", "Farm-sourced freshness", "Naturally sun-finished"],
    showLatestPriceCTA: true,
    variants: [
      { weight: "100g", price: 249, originalPrice: 299 },
      { weight: "250g", price: 459, originalPrice: 549 },
      { weight: "500g", price: 1049, originalPrice: 1249 },
    ],
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    localName: "Kurumulaku",
    image: "/Pepper.webp",
    badge: "BEST SELLER",
    shortDescription: "Sharp, warm peppercorns with deep hill-grown heat.",
    detailDescription:
      "Aromatic black pepper with a clean bite and lingering warmth. It is dried carefully to preserve the essential oils that make everyday cooking taste fuller and fresher.",
    origin: "Idukki high ranges, Kerala",
    aroma: "Woody, warm, and sharply spicy",
    bestFor: ["Curries", "Soups", "Marinades", "Table grinding"],
    highlights: ["Whole peppercorns", "High essential-oil aroma", "No artificial polish"],
    variants: [
      { weight: "100g", price: 110 },
      { weight: "250g", price: 260 },
      { weight: "500g", price: 520 },
      { weight: "1kg", price: 1040 },
    ],
  },
  {
    id: "cloves",
    name: "Cloves",
    localName: "Grambu",
    image: "/clove.webp",
    badge: "BULK ORDERS WELCOME",
    shortDescription: "Intensely aromatic whole cloves for rich seasoning.",
    detailDescription:
      "Full-bodied cloves with a warm sweetness and strong natural fragrance. A small quantity brings depth to masalas, festive sweets, tea blends, and slow-cooked dishes.",
    origin: "Kerala spice gardens",
    aroma: "Warm, sweet, and intensely aromatic",
    bestFor: ["Masala tea", "Biriyani", "Garam masala", "Festive sweets"],
    highlights: ["Whole flower buds", "Strong natural fragrance", "Bulk order friendly"],
    variants: [
      { weight: "100g", price: 260 },
      { weight: "250g", price: 520 },
      { weight: "500g", price: 1040 },
      { weight: "1kg", price: 2080 },
    ],
  },
  {
    id: "cinnamon",
    name: "Imported Cinnamon",
    localName: "Karugapatta",
    image: "/cinnamon.webp",
    badge: "BULK ORDERS WELCOME",
    shortDescription: "Warm cinnamon bark with a gentle natural sweetness.",
    detailDescription:
      "Fragrant cinnamon bark selected for balanced sweetness and spice. It adds a comforting warmth to tea, desserts, rice dishes, spice blends, and slow-simmered curries.",
    origin: "Kerala spice gardens",
    aroma: "Sweet, woody, and gently spicy",
    bestFor: ["Tea", "Desserts", "Rice dishes", "Spice blends"],
    highlights: ["Whole bark pieces", "Warm natural sweetness", "Great for home and bulk use"],
    variants: [
      { weight: "100g", price: 95 },
      { weight: "250g", price: 220 },
      { weight: "500g", price: 440 },
      { weight: "1kg", price: 880 },
    ],
  },
  {
    id: "star-anase",
    name: "Star Anise",
    localName: "Thakkolam",
    image: "/star-anase.webp",
    shortDescription: "Distinct star-shaped spice with a sweet licorice-like warmth.",
    detailDescription:
      "Carefully packed whole star anise selected for its bold aroma and naturally sweet spice profile. It adds beautiful depth to biryani, masala blends, broths, and slow-cooked dishes.",
    origin: "Kerala spice gardens",
    aroma: "Sweet, warm, and gently licorice-like",
    bestFor: ["Biryani", "Masala blends", "Broths", "Slow-cooked curries"],
    highlights: ["Whole star-shaped spice", "Rich natural aroma", "Packed for everyday freshness"],
    variants: [
      { weight: "100g", price: 95 },
      { weight: "250g", price: 230 },
      { weight: "500g", price: 460 },
      { weight: "1kg", price: 900 },
    ],
  },
  {
    id: "premium-cardamom-tea",
    name: "Premium Cardamom Tea",
    localName: "Elaichi Chaya",
    image: "/tea.webp",
    shortDescription: "Fragrant cardamom tea with a smooth, refreshing finish.",
    detailDescription:
      "A comforting cardamom tea blend crafted for rich aroma, balanced taste, and everyday refreshment. It brings the warm lift of cardamom into every cup.",
    origin: "Idukki high ranges, Kerala",
    aroma: "Warm, sweet, and cardamom-rich",
    bestFor: ["Morning tea", "Evening chai", "Guests", "Daily refreshment"],
    highlights: ["Cardamom-infused blend", "Rich natural aroma", "Smooth everyday cup"],
    variants: [
      { weight: "250g", price: 140 },
    ],
  },
  {
    id: "tea-premium",
    name: "Premium Tea",
    localName: "Premium Chaya",
    image: "/tea-premium.webp",
    shortDescription: "Rich premium tea with a smooth body and refreshing finish.",
    detailDescription:
      "A premium tea crafted for full flavor, inviting aroma, and a satisfying everyday cup. Its balanced character works beautifully for morning brews, evening tea breaks, and serving guests.",
    origin: "Idukki high ranges, Kerala",
    aroma: "Rich, malty, and clean",
    bestFor: ["Morning tea", "Evening tea", "Guests", "Daily brewing"],
    highlights: ["Premium tea blend", "Smooth full-bodied cup", "Freshly packed goodness"],
    variants: [{ weight: "250g", price: 110 }],
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
