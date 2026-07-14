import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustBadges } from "@/components/TrustBadges";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ProductGrid />
      <About />
    </>
  );
}
