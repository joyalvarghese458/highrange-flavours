import Link from "next/link";

const titles: Record<string, string> = {
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms & Conditions",
  "shipping-policy": "Shipping Policy",
  "refund-cancellation-policy": "Refund / Cancellation Policy",
};

type PolicyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const title = titles[slug] ?? "Policy";

  return (
    <section className="min-h-screen bg-ivory px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-forest/10 bg-white p-8 shadow-xl shadow-forest/10 sm:p-10">
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
          Highrange Flavours
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-forest">
          {title}
        </h1>
        <p className="mt-5 leading-8 text-charcoal/68">
          This page is a placeholder for the full {title.toLowerCase()} content.
          The final legal copy can be added before launch without changing the
          storefront flow.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-forest"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}
