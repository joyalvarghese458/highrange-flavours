import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { SectionReveal } from "./SectionReveal";

export function ProductGrid() {
  return (
    <section id="products" className="bg-ivory py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
            Shop farm-fresh
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-forest sm:text-5xl">
            Our Premium Spices
          </h2>
          <p className="mt-5 text-base leading-8 text-charcoal/70 sm:text-lg">
            Small-batch Kerala spices selected for aroma, freshness, and the
            quiet luxury of a kitchen that smells like the hills.
          </p>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
