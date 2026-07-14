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
  variants: ProductVariant[];
};

export const products: Product[] = [
  {
    id: "premium-cardamom",
    name: "Premium Cardamom",
    localName: "Elaichi",
    image: "/cardamom.webp",
    badge: "BEST SELLER",
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
