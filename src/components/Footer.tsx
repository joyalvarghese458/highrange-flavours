import { Camera, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { InternalHashLink } from "./InternalHashLink";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Shop", href: "/#products" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Our Policies",
    links: [
      { label: "Privacy Policy", href: "/policy/privacy-policy" },
      { label: "Terms & Conditions", href: "/policy/terms-and-conditions" },
      { label: "Shipping Policy", href: "/policy/shipping-policy" },
      {
        label: "Refund / Cancellation Policy",
        href: "/policy/refund-cancellation-policy",
      },
    ],
  },
  {
    title: "Best Sellers",
    links: [
      { label: "Premium Cardamom", href: "/products/premium-cardamom" },
      { label: "Black Pepper", href: "/products/black-pepper" },
      { label: "Cloves", href: "/products/cloves" },
      { label: "Imported Cinnamon", href: "/products/cinnamon" },
      { label: "Star Anise", href: "/products/star-anase" },
      { label: "Premium Cardamom Tea", href: "/products/premium-cardamom-tea" },
      { label: "Premium Tea", href: "/products/tea-premium" },
    ],
  },
];

const columnClasses = [
  "lg:col-span-2",
  "sm:col-span-2 md:col-span-1 lg:col-span-3",
  "lg:col-span-3",
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gold/20 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.10),transparent_32%),linear-gradient(135deg,#0f1f14_0%,#050a07_100%)] text-ivory"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:gap-x-10">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 lg:pr-6">
            <h2 className="max-w-xs font-serif text-3xl font-semibold leading-tight text-gold sm:text-4xl">
              Highrange Flavours
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-ivory/70">
              Premium spices from the misty high ranges of Idukki, packed fresh
              for kitchens across India.
            </p>

            <h3 className="mt-8 font-serif text-xl font-semibold text-gold">
              Contact Us
            </h3>
            <address className="mt-4 max-w-md space-y-3 not-italic text-ivory/75">
              <div className="flex items-start gap-3">
                <Phone
                  className="mt-1 size-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <p className="flex flex-wrap gap-x-2 gap-y-1 text-sm leading-6">
                  <a
                    href="tel:+916282337643"
                    className="transition hover:text-gold"
                  >
                    +91 6282 337 643
                  </a>
                  <span className="text-ivory/30" aria-hidden="true">
                    •
                  </span>
                  <a
                    href="tel:+917592972101"
                    className="transition hover:text-gold"
                  >
                    +91 7592 972 101
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  className="mt-1 size-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a
                  href="mailto:highrangeflavoursidukki@gmail.com"
                  className="min-w-0 break-all text-sm leading-6 transition hover:text-gold sm:break-normal"
                >
                  highrangeflavoursidukki@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6">
                  Kumily–Anakkara, Idukki, Kerala 685509
                </p>
              </div>
            </address>
          </div>

          {columns.map((column, index) => (
            <div key={column.title} className={columnClasses[index]}>
              <h3 className="font-serif text-xl font-semibold text-gold">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.includes("#") ? (
                      <InternalHashLink
                        href={link.href}
                        className="inline-flex min-h-10 items-center py-1 text-sm font-semibold leading-6 text-ivory/72 transition hover:translate-x-1 hover:text-gold"
                      >
                        {link.label}
                      </InternalHashLink>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-flex min-h-10 items-center py-1 text-sm font-semibold leading-6 text-ivory/72 transition hover:translate-x-1 hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 border-t border-ivory/12 pt-6 text-center sm:mt-12 sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm leading-6 text-ivory/60">
            © 2026 Highrange Flavours. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/highrangeflavoursidukki/"
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-gold/30 text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-forest"
              aria-label="Highrange Flavours on Instagram"
            >
              <Camera size={18} />
            </a>
            <a
              href="https://wa.me/916282337643"
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-gold/30 text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-forest"
              aria-label="Highrange Flavours on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="mailto:highrangeflavoursidukki@gmail.com"
              className="grid size-11 place-items-center rounded-full border border-gold/30 text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-forest"
              aria-label="Email Highrange Flavours"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
