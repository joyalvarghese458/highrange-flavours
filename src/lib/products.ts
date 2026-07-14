export type ProductVariant = {
  weight: string;
  price: number;
  originalPrice: number;
};

export type Product = {
  id: string;
  name: string;
  localName: string;
  image: string;
  badge: "BEST SELLER" | "BULK ORDERS WELCOME" | "NEW";
  shortDescription: string;
  detailDescription: string;
  origin: string;
  aroma: string;
  bestFor: string[];
  highlights: string[];
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
    variants: [
      { weight: "50g", price: 249, originalPrice: 299 },
      { weight: "100g", price: 459, originalPrice: 549 },
      { weight: "250g", price: 1049, originalPrice: 1249 },
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
      { weight: "100g", price: 129, originalPrice: 159 },
      { weight: "250g", price: 279, originalPrice: 339 },
      { weight: "500g", price: 499, originalPrice: 599 },
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
      { weight: "50g", price: 99, originalPrice: 129 },
      { weight: "100g", price: 179, originalPrice: 229 },
      { weight: "200g", price: 329, originalPrice: 399 },
    ],
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
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
      { weight: "50g", price: 89, originalPrice: 109 },
      { weight: "100g", price: 159, originalPrice: 199 },
      { weight: "200g", price: 289, originalPrice: 349 },
    ],
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
