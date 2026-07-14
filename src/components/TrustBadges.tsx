import { Leaf, PackageCheck, Sprout, Truck } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const badges = [
  { icon: Sprout, label: "100% Naturally Grown" },
  { icon: Leaf, label: "Handpicked From Our Farms" },
  { icon: PackageCheck, label: "Hygienically Packed" },
  { icon: Truck, label: "Delivering Pan-India" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-forest/10 bg-[#f5ecdc] py-6">
      <SectionReveal className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {badges.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-ivory/75 p-4 shadow-sm"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest text-gold">
              <Icon size={20} />
            </span>
            <span className="text-sm font-extrabold uppercase tracking-[0.08em] text-forest">
              {label}
            </span>
          </div>
        ))}
      </SectionReveal>
    </section>
  );
}
