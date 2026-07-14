import { MessageCircle, PackageCheck } from "lucide-react";
import Link from "next/link";

const bulkOrderMessage =
  "Hi%2C%20I%27d%20like%20to%20place%20a%20bulk%20order%20with%20Highrange%20Flavours.";

export function BulkOrderNotice() {
  return (
    <section className="bg-ivory px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-gold/25 bg-forest px-5 py-6 text-ivory shadow-xl shadow-forest/10 sm:px-7 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold text-forest">
            <PackageCheck size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">
              Bulk Orders Open
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ivory sm:text-3xl">
              Planning a large spice order?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ivory/76 sm:text-base">
              We are accepting bulk orders for homes, retailers, restaurants,
              and gifting. Contact us for quantity pricing and availability.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-gold transition hover:bg-gold hover:text-forest"
          >
            Contact Us
          </Link>
          <a
            href={`https://wa.me/917592972101?text=${bulkOrderMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-forest transition hover:bg-[#d9b63b]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
