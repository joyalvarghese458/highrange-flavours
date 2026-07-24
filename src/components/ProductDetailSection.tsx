"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Leaf,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState, ViewTransition } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice, Product } from "@/lib/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ProductDetailSection({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [variantIndex, setVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const variant = product.variants[variantIndex];
  const latestPriceMessage = `Hi, I'd like to check the latest price for ${product.name} (${variant.weight}).`;

  const handleAdd = () => {
    addItem({ product, variant, quantity });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="bg-ivory px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#products"
          transitionTypes={["nav-back"]}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/12 bg-white px-4 py-2 text-sm font-extrabold text-forest shadow-sm transition hover:border-gold hover:text-gold"
        >
          <ArrowLeft size={17} />
          Back to Products
        </Link>

        <ViewTransition
          enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
          exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
          default="none"
        >
          <motion.article
            key={product.id}
            className="overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white shadow-[0_30px_90px_rgba(27,59,47,0.12)] sm:rounded-[2rem]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(135deg,#fbf7ef,#efe5d2)] sm:min-h-[480px]">
            <ViewTransition name={`product-image-${product.id}`} share="product-morph">
              <Image
                src={product.image}
                alt={`${product.name} product detail`}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-contain p-8 sm:p-12 lg:p-14"
              />
            </ViewTransition>
            {product.badge && (
              <div className="absolute left-5 top-5 rounded-full bg-forest px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ivory shadow-lg">
                {product.badge}
              </div>
            )}
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">
                Product details
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 text-sm font-bold text-charcoal/52">
                {product.localName}
              </p>
            </div>

            <p className="mt-6 text-lg leading-8 text-charcoal/72">
              {product.detailDescription}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <DetailFact icon={<Leaf size={18} />} label="Origin" value={product.origin} />
              <DetailFact icon={<Sparkles size={18} />} label="Aroma" value={product.aroma} />
              <DetailFact icon={<Truck size={18} />} label="Delivery" value="Ships across India" />
              <DetailFact icon={<ShieldCheck size={18} />} label="Quality" value="Fresh batch packed" />
            </div>

            <div className="mt-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-forest">
                Select pack size
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((item, index) => (
                  <button
                    type="button"
                    key={item.weight}
                    onClick={() => setVariantIndex(index)}
                    className={`rounded-full border px-5 py-3 text-sm font-extrabold transition-all ${
                      variant.weight === item.weight
                        ? "border-forest bg-forest text-ivory shadow-md"
                        : "border-forest/12 bg-ivory text-forest hover:border-gold hover:bg-gold/12"
                    }`}
                  >
                    {item.weight}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-forest/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
              {product.showLatestPriceCTA ? (
                <div>
                  <a
                    href={buildWhatsAppUrl(latestPriceMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-forest transition hover:border-gold hover:bg-gold/10"
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    Check Latest Price
                  </a>
                </div>
              ) : (
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-charcoal/45">
                    Price
                  </p>
                  <div className="mt-1 flex items-baseline gap-3">
                    <span className="font-serif text-4xl font-semibold text-forest">
                      {formatPrice(variant.price)}
                    </span>
                    <span className="text-sm font-bold text-charcoal/45 line-through">
                      {formatPrice(variant.originalPrice)}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex h-12 w-fit items-center rounded-full border border-forest/12 bg-ivory p-1">
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-full text-forest transition hover:bg-forest hover:text-ivory"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  aria-label={`Decrease ${product.name} quantity`}
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm font-extrabold text-forest">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-full text-forest transition hover:bg-forest hover:text-ivory"
                  onClick={() => setQuantity((value) => value + 1)}
                  aria-label={`Increase ${product.name} quantity`}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-gold px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-forest shadow-lg shadow-gold/20 transition-all duration-300 hover:scale-[1.01] hover:bg-[#dbb63d] hover:shadow-xl active:scale-[0.99]"
            >
              {added ? <Check size={19} /> : <ShoppingBag size={19} />}
              {added ? "Added to Cart" : "Add to Cart"}
            </button>

            <div className="mt-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-forest">
                Best for
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-cream-deep px-4 py-2 text-sm font-bold text-forest"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <ul className="mt-6 grid gap-2 text-sm font-semibold text-charcoal/70 sm:grid-cols-3">
              {product.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={16} className="shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
          </motion.article>
        </ViewTransition>
      </div>
    </section>
  );
}

function DetailFact({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-forest/10 bg-ivory p-4">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-gold/18 text-forest">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.16em] text-charcoal/45">
          {label}
        </span>
        <span className="mt-1 block text-sm font-extrabold leading-6 text-forest">
          {value}
        </span>
      </span>
    </div>
  );
}
