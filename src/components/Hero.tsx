import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-forest">
      <Image
        src="/banner.webp"
        alt="Misty green spice plantation in the high ranges"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[72%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.38)_46%,rgba(0,0,0,0.22))] sm:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.58),rgba(0,0,0,0.34),rgba(0,0,0,0.08))] sm:block" />

      <div className="relative mx-auto flex min-h-[760px] w-full max-w-7xl items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex max-w-full items-center rounded-full border border-gold/35 bg-ivory/12 px-4 py-2 text-sm font-bold text-ivory shadow-lg shadow-black/10 backdrop-blur-md">
            <span className="mr-2 text-gold" aria-hidden="true">
              🌿
            </span>
            100% Farm Fresh · Now Delivering Across India
          </div>
          <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-ivory sm:text-6xl lg:text-7xl xl:text-8xl">
            From Our Land to Your Hands
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/86 sm:text-xl">
            Premium, naturally grown spices — handpicked from our own farms in
            the high ranges of Idukki, Kerala.
          </p>
          <Link
            href="/#products"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-forest shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#d9b63b] hover:shadow-gold/25"
          >
            Shop Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
