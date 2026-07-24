"use client";

import { MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CartSummary() {
  const { items, subtotal } = useCart();
  const hasPriceOnRequestItems = items.some((item) => item.priceOnRequest);

  const message = [
    "Hi, I'd like to place an order:",
    ...items.map(
      (item, index) =>
        `${index + 1}. ${item.name} (${item.weight}) x${item.quantity} - ${
          item.priceOnRequest
            ? "Price to be confirmed"
            : formatPrice(item.unitPrice * item.quantity)
        }`,
    ),
    hasPriceOnRequestItems
      ? `Grand Total: ${formatPrice(subtotal)} (excluding items marked price to be confirmed)`
      : `Grand Total: ${formatPrice(subtotal)}`,
    "Please confirm availability and delivery details.",
  ].join("\n");

  return (
    <aside className="rounded-2xl border border-forest/10 bg-white p-6 shadow-xl shadow-forest/10 lg:sticky lg:top-28">
      <h2 className="font-serif text-2xl font-semibold text-forest">
        Order Summary
      </h2>
      <div className="mt-6 space-y-4 text-sm">
        <div className="flex items-center justify-between text-charcoal/72">
          <span>
            Subtotal
            {hasPriceOnRequestItems ? (
              <span className="block text-xs text-charcoal/45">
                Excludes price to be confirmed items
              </span>
            ) : null}
          </span>
          <span className="font-bold text-charcoal">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between gap-6 text-charcoal/48">
          <span>Delivery</span>
          <span className="text-right">Calculated on confirmation</span>
        </div>
        <div className="h-px bg-forest/10" />
        <div className="flex items-end justify-between">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-forest">
            Grand Total
          </span>
          <span className="font-serif text-4xl font-semibold text-gold">
            {formatPrice(subtotal)}
          </span>
        </div>
      </div>

      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noreferrer"
        className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-gold px-5 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-forest shadow-lg shadow-gold/20 transition hover:scale-[1.02] hover:bg-[#dbb63d]"
      >
        <MessageCircle size={19} />
        Place Order via WhatsApp
      </a>
      <p className="mt-3 text-center text-sm leading-6 text-charcoal/52">
        You&apos;ll be redirected to WhatsApp to confirm your order with our
        team.
      </p>
    </aside>
  );
}
