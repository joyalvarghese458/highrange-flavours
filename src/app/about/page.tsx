import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  Heart,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { BulkOrderNotice } from "@/components/BulkOrderNotice";
import { InternalHashLink } from "@/components/InternalHashLink";
import { SectionReveal } from "@/components/SectionReveal";
import { DEFAULT_OG_IMAGE, SITE_NAME, getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Our Story | ${SITE_NAME}`,
  description:
    "Learn about Highrange Flavours, our Idukki farms, natural spice process, quality promise, and commitment to authentic Kerala flavour.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `Our Story | ${SITE_NAME}`,
    description:
      "Discover the Idukki roots, careful selection, and honest quality behind Highrange Flavours spices.",
    url: getCanonicalUrl("/about"),
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Premium Kerala spices from Highrange Flavours",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Story | ${SITE_NAME}`,
    description:
      "Discover the Idukki roots, careful selection, and honest quality behind Highrange Flavours spices.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No artificial colours, flavours, or preservatives.",
  },
  {
    icon: ClipboardCheck,
    title: "Carefully Selected",
    description: "Every batch is inspected for freshness, colour, and aroma.",
  },
  {
    icon: PackageCheck,
    title: "Freshly Packed",
    description: "Packed to preserve natural oils and authentic taste.",
  },
  {
    icon: Heart,
    title: "Quality You Can Trust",
    description:
      "From farm selection to final packaging, quality comes first.",
  },
];

const processSteps = [
  "Carefully grown in the high ranges of Idukki",
  "Harvested at peak maturity",
  "Naturally dried for maximum flavour",
  "Expertly cleaned and sorted",
  "Hygienically packed",
  "Delivered fresh to your home",
];

const aboutImages = {
  hero: {
    src: "/about/idukki-spice-hero.webp",
    alt: "Illustration of misty Idukki spice plantations with cardamom plants and pepper vines",
  },
  plantation: {
    src: "/about/idukki-plantation.webp",
    alt: "Illustration of terraced Idukki spice plantations after rain",
  },
  sustainability: {
    src: "/about/responsible-farming.webp",
    alt: "Illustration of responsible spice farming with baskets of cardamom and pepper",
  },
};

const galleryImages = [
  {
    src: "/about/idukki-spice-hero.webp",
    alt: "Illustration of mist-covered spice plantations in Idukki",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/about/pepper-harvest.png",
    alt: "Illustration of black pepper being carefully harvested from vines",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/about/cardamom-pods.webp",
    alt: "Illustration of green cardamom pods growing in the high ranges",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/about/spices-drying.mp4",
    alt: "Cloves, cinnamon, pepper, and cardamom drying on woven trays",
    aspect: "aspect-[4/5]",
    video: true,
  },
  {
    src: "/about/idukki-plantation.webp",
    alt: "Illustration of lush spice plantations across Idukki hills",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/about/packed-products.mp4",
    alt: "Illustration of packed spice products with cardamom, pepper, cloves, and cinnamon",
    aspect: "aspect-[4/5]",
    video: true,
  },
  {
    src: "/about/responsible-farming.webp",
    alt: "Illustration of careful spice harvesting baskets on rich farm soil",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/about/family-heritage.webp",
    alt: "Illustration of family spice cultivation heritage in the Idukki hills",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/about/highrange1.webp",
    alt: "A view from the high ranges of Idukki",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/about/highrange2.jpg",
    alt: "The natural landscape of the high ranges",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/about/highrange3.webp",
    alt: "Life and cultivation in the high ranges",
    aspect: "aspect-square",
  },
  {
    src: "/about/highrange4.jpg",
    alt: "The green hills of the high ranges",
    aspect: "aspect-[4/5]",
  },
];

// TODO: client to confirm/replace actual numbers before launch
const stats = [
  "10,000+ Happy Customers",
  "25+ Premium Spice Products",
  "100% Natural Products",
  "Freshly Packed Every Day",
  "Serving Customers Across India",
];

const certifications = [
  { icon: ShieldCheck, label: "FSSAI Certified" },
  { icon: CheckCircle2, label: "Quality Tested" },
  { icon: PackageCheck, label: "Food Grade Packaging" },
  { icon: CreditCard, label: "Secure Payments" },
  { icon: Award, label: "Made in Kerala" },
];

function AboutImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-gold/25 bg-cream-deep shadow-2xl shadow-forest/12 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest px-4 pb-20 pt-36 text-ivory sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionReveal>
            <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Our Story
            </h1>
            <div className="mt-6 space-y-5 text-base leading-8 text-ivory/82 sm:text-lg">
              <p>
                High Range Flavours was founded with a simple purpose: to bring
                the authentic taste of Kerala&apos;s high ranges directly to homes
                around the world.
              </p>
              <p>
                Located in the beautiful hills of Idukki, our journey begins
                where spices naturally thrive. Surrounded by cool mountain air,
                fertile soil, and abundant rainfall, our farms produce some of
                the world&apos;s most aromatic spices.
              </p>
              <p>
                We believe great flavour starts long before packaging. It begins
                with healthy plants, careful harvesting, natural drying, and
                strict quality selection. Every product is chosen with the same
                care we would choose for our own family.
              </p>
              <p className="font-extrabold text-gold">
                Our commitment is simple: Pure spices. Natural flavour. Honest
                quality.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <AboutImage
              src={aboutImages.hero.src}
              alt={aboutImages.hero.alt}
              priority
              className="aspect-[5/4] rounded-[1.5rem]"
            />
          </SectionReveal>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionReveal>
            <AboutImage
              src={aboutImages.plantation.src}
              alt={aboutImages.plantation.alt}
              className="aspect-[4/3]"
            />
          </SectionReveal>

          <SectionReveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
              The High Ranges
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Why Idukki?
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-9 text-charcoal/74">
              <p>
                Idukki is internationally recognised for producing premium
                quality spices because of its unique climate.
              </p>
              <p>
                The cool temperatures, rich mountain soil, and frequent rainfall
                create ideal growing conditions that enhance the aroma, colour,
                and essential oils within every spice.
              </p>
              <p>
                This natural advantage gives our spices their unmistakable
                freshness and bold flavour.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-[#f5ecdc] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
              Our Standards
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-forest sm:text-5xl">
              What Makes Us Different
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <SectionReveal key={title}>
                <div className="h-full rounded-2xl border border-forest/10 bg-ivory p-6 shadow-sm transition hover:border-gold/45">
                  <span className="grid size-12 place-items-center rounded-full bg-forest text-gold">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-forest">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/68">
                    {description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
              From Farm to Pack
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-forest sm:text-5xl">
              Our Process
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-forest/10 bg-white p-5 shadow-sm lg:text-center"
              >
                {index < processSteps.length - 1 && (
                  <span className="absolute left-8 top-full h-5 w-px bg-gold/45 lg:left-[calc(100%-0.25rem)] lg:top-10 lg:h-px lg:w-5" />
                )}
                <span className="grid size-12 place-items-center rounded-full bg-gold text-base font-black text-forest lg:mx-auto">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm font-bold leading-6 text-forest">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="bg-forest py-20 text-ivory sm:py-24 lg:py-28">
        <SectionReveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto text-gold" size={34} aria-hidden="true" />
          <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            Our Promise
          </h2>
          <div className="mt-7 space-y-6 text-xl leading-9 text-ivory/84">
            <p>
              We don&apos;t believe spices should simply add colour to food. They
              should awaken memories, enrich family recipes, and fill every
              kitchen with the unmistakable aroma of authentic Kerala spices.
            </p>
            <p>
              Every pack from High Range Flavours carries the freshness of
              Idukki and the trust of generations of spice cultivation.
            </p>
          </div>
        </SectionReveal>
      </section>

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionReveal className="lg:order-2">
            <AboutImage
              src={aboutImages.sustainability.src}
              alt={aboutImages.sustainability.alt}
              className="aspect-[4/3]"
            />
          </SectionReveal>

          <SectionReveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
              Sustainability
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Respecting the Land
            </h2>
            <p className="mt-6 text-lg leading-9 text-charcoal/74">
              We respect the land that gives us these exceptional spices. By
              supporting responsible farming practices and careful harvesting
              methods, we aim to preserve the natural beauty of Idukki while
              delivering products our customers can enjoy with confidence.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-[#f5ecdc] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
              Gallery
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-forest sm:text-5xl">
              A Glimpse Into Our World
            </h2>
          </SectionReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <SectionReveal key={image.alt}>
                {image.video ? (
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-gold/25 bg-cream-deep shadow-2xl shadow-forest/12 ${image.aspect}`}
                  >
                    <video
                      src={image.src}
                      aria-label={image.alt}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="pointer-events-none size-full object-cover"
                    />
                  </div>
                ) : (
                  <AboutImage
                    src={image.src}
                    alt={image.alt}
                    className={image.aspect}
                  />
                )}
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-2xl border border-gold/20 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-lg font-extrabold leading-7 text-forest">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="bg-forest py-20 text-ivory sm:py-24 lg:py-28">
        <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
              Customer Notes
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Loved for Authentic Aroma
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {/* // TODO: client to provide 2-3 real testimonials */}
            {["Priya Nair", "Amit Varma", "Meera Joseph"].map(
              (name, index) => (
                <article
                  key={name}
                  className="rounded-2xl border border-gold/20 bg-ivory p-6 text-forest shadow-xl shadow-black/10"
                >
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={18}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-5 text-base font-semibold leading-8 text-charcoal/76">
                    &quot;The aroma reminds me of the spices we used to buy
                    directly from Kerala. Truly authentic.&quot;
                  </p>
                  <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-forest">
                    {name}, {index === 0 ? "Bengaluru" : "India"}
                  </p>
                </article>
              ),
            )}
          </div>
        </SectionReveal>
      </section>

      <section className="border-y border-forest/10 bg-[#f5ecdc] py-8">
        <SectionReveal className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
          {certifications.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-ivory/75 p-4 shadow-sm"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest text-gold">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-extrabold uppercase tracking-[0.08em] text-forest">
                {label}
              </span>
            </div>
          ))}
        </SectionReveal>
      </section>

      <BulkOrderNotice />

      <section className="bg-ivory px-4 pb-20 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-lg border border-gold/25 bg-white p-6 shadow-xl shadow-forest/10 sm:p-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold">
              Ready to Taste Idukki?
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-forest">
              Bring authentic Kerala spices home.
            </h2>
          </div>
          <InternalHashLink
            href="/#products"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-forest transition hover:bg-[#d9b63b]"
          >
            Shop Now
          </InternalHashLink>
        </SectionReveal>
      </section>
    </>
  );
}
