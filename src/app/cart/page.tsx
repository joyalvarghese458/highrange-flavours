"use client";

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CartSummary } from "@/components/CartSummary";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, setItemQuantity, removeItem } = useCart();

  return (
    <section className="min-h-screen bg-ivory px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
            Your order
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-forest sm:text-5xl">
            Cart
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-forest/10 bg-white p-10 text-center shadow-xl shadow-forest/10">
            <div className="mx-auto grid size-24 place-items-center rounded-full bg-forest/8 text-forest">
              <ShoppingBag size={42} />
            </div>
            <h2 className="mt-6 font-serif text-3xl font-semibold text-forest">
              Your cart is waiting for fresh spices
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-charcoal/64">
              Add cardamom, pepper, cloves, cinnamon, or nutmeg and send your
              order to our team on WhatsApp for confirmation.
            </p>
            <Link
              href="/#products"
              className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-forest transition hover:scale-105"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-xl shadow-forest/10">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.weight}`}
                  className="grid gap-5 border-b border-forest/10 p-4 last:border-b-0 sm:grid-cols-[112px_1fr] sm:p-5 lg:grid-cols-[128px_1fr_auto]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={item.image}
                      alt={`${item.name} ${item.weight}`}
                      fill
                      sizes="128px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-serif text-2xl font-semibold text-forest">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-sm font-bold text-charcoal/52">
                      {item.localName} · {item.weight}
                    </p>
                    <p className="mt-4 text-sm text-charcoal/60">
                      Unit price{" "}
                      <span className="font-bold text-charcoal">
                        {formatPrice(item.unitPrice)}
                      </span>
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <div className="flex h-11 items-center rounded-full border border-forest/12 bg-ivory p-1">
                        <button
                          type="button"
                          className="grid size-9 place-items-center rounded-full text-forest transition hover:bg-forest hover:text-ivory"
                          onClick={() =>
                            setItemQuantity(
                              item.productId,
                              item.weight,
                              item.quantity - 1,
                            )
                          }
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          <Minus size={15} />
                        </button>
                        <span className="w-9 text-center text-sm font-extrabold text-forest">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="grid size-9 place-items-center rounded-full text-forest transition hover:bg-forest hover:text-ivory"
                          onClick={() =>
                            setItemQuantity(
                              item.productId,
                              item.weight,
                              item.quantity + 1,
                            )
                          }
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.weight)}
                        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-4 lg:min-w-32 lg:flex-col lg:items-end">
                    <span className="text-sm font-bold uppercase tracking-[0.14em] text-charcoal/45">
                      Line total
                    </span>
                    <span className="font-serif text-3xl font-semibold text-forest">
                      {formatPrice(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <CartSummary />
          </div>
        )}
      </div>
    </section>
  );
}
