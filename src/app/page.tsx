import { About } from "@/components/About";
import { BulkOrderNotice } from "@/components/BulkOrderNotice";
import { FAQSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustBadges } from "@/components/TrustBadges";

export default function Home() {
  return (
    <>
      <Hero />
      <BulkOrderNotice />
      <TrustBadges />
      <ProductGrid />
      <About />
      <FAQSection />
    </>
  );
}
