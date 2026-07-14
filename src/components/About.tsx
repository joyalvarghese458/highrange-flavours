import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

const images = [
  {
    src: "/about-cardamom-plants.png",
    alt: "Cardamom plants growing under shade trees in a high-range plantation",
  },
  {
    src: "/about-pepper-plants.png",
    alt: "Black pepper vines growing in a tropical spice plantation",
  },
];

export function About() {
  return (
    <section id="about" className="bg-[#f3ead9] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <SectionReveal className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl shadow-2xl shadow-forest/15 ${
                index === 0
                  ? "aspect-[4/5] translate-y-8"
                  : "aspect-[4/5] -translate-y-2"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 32vw"
                className="object-cover"
              />
            </div>
          ))}
        </SectionReveal>

        <SectionReveal>
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-gold">
            Our story
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Grown With Care in the Hills of Idukki
          </h2>
          <p className="mt-6 text-lg leading-9 text-charcoal/76">
            Highrange Flavours grows its cardamom and black pepper on its own
            plantations in the high ranges of Idukki, Kerala. Every batch is
            handpicked at peak ripeness, naturally dried, and hygienically
            packed to preserve aroma and freshness — delivering the true taste
            of Kerala&apos;s spice mountains straight to your door, anywhere in
            India.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Own plantations", "Naturally dried", "Packed fresh"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-forest/10 bg-ivory p-4 text-sm font-extrabold uppercase tracking-[0.12em] text-forest shadow-sm"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
