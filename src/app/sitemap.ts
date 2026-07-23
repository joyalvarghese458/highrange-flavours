import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { SITE_URL, getCanonicalUrl } from "@/lib/seo";

const policySlugs = [
  "privacy-policy",
  "terms-and-conditions",
  "shipping-policy",
  "refund-cancellation-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getCanonicalUrl("/cart"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...products.map((product) => ({
      url: getCanonicalUrl(`/products/${product.id}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [getCanonicalUrl(product.image)],
    })),
    ...policySlugs.map((slug) => ({
      url: getCanonicalUrl(`/policy/${slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
