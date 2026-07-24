"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { startTransition, useState, ViewTransition } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice, Product } from "@/lib/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
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

  const handleNavigate = () => {
    startTransition(() => {
      router.push(`/products/${product.id}`, {
        scroll: true,
        transitionTypes: ["nav-forward"],
      });
    });
  };

  const stopCardNavigation = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <motion.article
      role="link"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
      onClick={handleNavigate}
      onKeyDown={(event) => {
        if (event.currentTarget !== event.target) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleNavigate();
        }
      }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_20px_60px_rgba(27,59,47,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_26px_80px_rgba(27,59,47,0.16)] focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/35"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <ViewTransition name={`product-image-${product.id}`} share="product-morph">
          <Image
            src={product.image}
            alt={`${product.name} from Highrange Flavours`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
          />
        </ViewTransition>
        {product.badge !== "BULK ORDERS WELCOME" && (
          <div className="absolute left-4 top-4 rounded-r-full bg-gold px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-forest shadow-lg">
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-2xl font-semibold text-forest transition group-hover:text-gold">
          {product.name}
          <span className="block pt-1 font-sans text-sm font-bold text-charcoal/52">
            {product.localName}
          </span>
        </h3>

        <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-charcoal/62">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.variants.map((item, index) => (
            <button
              type="button"
              key={item.weight}
              onClick={(event) => {
                stopCardNavigation(event);
                setVariantIndex(index);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-extrabold transition-all ${
                variant.weight === item.weight
                  ? "border-forest bg-forest text-ivory shadow-md"
                  : "border-forest/12 bg-ivory text-forest hover:border-gold hover:bg-gold/12"
              }`}
            >
              {item.weight}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          {product.showLatestPriceCTA ? (
            <div>
              <a
                href={buildWhatsAppUrl(latestPriceMessage)}
                target="_blank"
                rel="noreferrer"
                onClick={stopCardNavigation}
                className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-forest transition hover:border-gold hover:bg-gold/10"
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
                <span className="font-serif text-3xl font-semibold text-forest">
                  {formatPrice(variant.price)}
                </span>
                <span className="text-sm font-bold text-charcoal/45 line-through">
                  {formatPrice(variant.originalPrice)}
                </span>
              </div>
            </div>
          )}

          <div className="flex h-11 items-center rounded-full border border-forest/12 bg-ivory p-1">
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full text-forest transition hover:bg-forest hover:text-ivory"
              onClick={(event) => {
                stopCardNavigation(event);
                setQuantity((value) => Math.max(1, value - 1));
              }}
              aria-label={`Decrease ${product.name} quantity`}
            >
              <Minus size={15} />
            </button>
            <span className="w-8 text-center text-sm font-extrabold text-forest">
              {quantity}
            </span>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full text-forest transition hover:bg-forest hover:text-ivory"
              onClick={(event) => {
                stopCardNavigation(event);
                setQuantity((value) => value + 1);
              }}
              aria-label={`Increase ${product.name} quantity`}
            >
              <Plus size={15} />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={(event) => {
            stopCardNavigation(event);
            handleAdd();
          }}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-gold px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-forest shadow-lg shadow-gold/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#dbb63d] hover:shadow-xl active:scale-[0.99]"
        >
          {added ? <Check size={19} /> : <ShoppingBag size={19} />}
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>

      {added && (
        <div className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 rounded-full bg-forest px-4 py-2 text-sm font-bold text-ivory shadow-xl">
          Added to cart
        </div>
      )}
    </motion.article>
  );
}
