import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailSection } from "@/components/ProductDetailSection";
import { products } from "@/lib/products";

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
      title: "Product Not Found | Highrange Flavours",
    };
  }

  return {
    title: `${product.name} | Highrange Flavours`,
    description: product.detailDescription,
    openGraph: {
      title: `${product.name} | Highrange Flavours`,
      description: product.detailDescription,
      images: [
        {
          url: `https://highrangeflavours.in${product.image}`,
          alt: `${product.name} from Highrange Flavours`,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailSection product={product} />;
}
