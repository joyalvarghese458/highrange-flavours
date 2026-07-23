import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailSection } from "@/components/ProductDetailSection";
import { products } from "@/lib/products";
import { SITE_NAME, SITE_URL, getCanonicalUrl } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return {
      title: `Product Not Found | ${SITE_NAME}`,
    };
  }

  const title = `${product.name} | ${SITE_NAME}`;
  const canonicalPath = `/products/${product.id}`;
  const canonicalUrl = getCanonicalUrl(canonicalPath);
  const imageUrl = getCanonicalUrl(product.image);

  return {
    title,
    description: product.detailDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description: product.detailDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          alt: `${product.name} from Highrange Flavours`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.detailDescription,
      images: [imageUrl],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const productUrl = getCanonicalUrl(`/products/${product.id}`);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.detailDescription,
    image: getCanonicalUrl(product.image),
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: product.variants.map((variant) => ({
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "INR",
      price: variant.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailSection product={product} />
    </>
  );
}
