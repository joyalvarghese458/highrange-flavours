import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { InternalHashLink } from "./InternalHashLink";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[700px] overflow-hidden bg-forest md:min-h-[760px]"
    >
      <Image
        src="/landing-mobile-view.webp"
        alt="Misty green spice plantation in the high ranges"
        fill
        preload
        quality={95}
        sizes="(max-width: 767px) 100vw"
        className="object-cover object-top md:hidden"
      />
      <Image
        src="/banner.webp"
        alt="Misty green spice plantation in the high ranges"
        fill
        preload
        quality={95}
        sizes="(min-width: 768px) 100vw"
        className="hidden object-cover object-center md:block"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_34%,rgba(0,0,0,0.64)_68%,rgba(0,0,0,0.70)_100%)] md:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.58),rgba(0,0,0,0.34),rgba(0,0,0,0.08))] md:block" />

      <div className="relative mx-auto flex min-h-[700px] w-full max-w-7xl items-center px-4 pb-12 pt-52 sm:px-6 sm:pt-32 md:min-h-[760px] md:pb-16 lg:px-8">
        <div className="max-w-3xl translate-y-12 md:translate-y-0">
          <div className="mb-6 hidden max-w-full items-center rounded-full border border-gold/35 bg-ivory/12 px-4 py-2 text-sm font-bold text-ivory shadow-lg shadow-black/10 backdrop-blur-md md:inline-flex">
            <span className="mr-2 text-gold" aria-hidden="true">
              🌿
            </span>
            100% Farm Fresh · Now Delivering Across India
          </div>
          <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            From Our Land to Your Hands
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/95 sm:text-xl md:mt-6">
            Premium, naturally grown spices — handpicked from our own farms in
            the high ranges of Idukki, Kerala.
          </p>
          <InternalHashLink
            href="/#products"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-forest shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#d9b63b] hover:shadow-gold/25 md:mt-9"
          >
            Shop Now
            <ArrowRight size={18} />
          </InternalHashLink>
        </div>
      </div>
    </section>
  );
}
