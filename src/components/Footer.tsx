import { Camera, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
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
      { label: "Premium Cardamom", href: "/#products" },
      { label: "Black Pepper", href: "/#products" },
      { label: "Cloves", href: "/#products" },
      { label: "Cinnamon", href: "/#products" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gold/20 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.10),transparent_32%),linear-gradient(135deg,#0f1f14_0%,#050a07_100%)] text-ivory"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-gold">
              Highrange Flavours
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-ivory/72">
              Premium spices from the misty high ranges of Idukki, packed fresh
              for kitchens across India.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-serif text-xl font-semibold text-gold">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-ivory/74 transition hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-serif text-xl font-semibold text-gold">
              Contact Us
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic leading-7 text-ivory/76">
              <p>📞 +91 75929 72101</p>
              <p>✉️ support@highrangeflavours.in</p>
              <p>📍 High Range Estate Road, Idukki, Kerala, India - 685602</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-ivory/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ivory/65">
            © 2026 Highrange Flavours. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/highrangeflavoursidukki/"
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-forest"
              aria-label="Highrange Flavours Instagram"
            >
              <Camera size={18} />
            </a>
            <a
              href="https://wa.me/917592972101"
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-forest"
              aria-label="Highrange Flavours WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-forest"
              aria-label="Highrange Flavours Facebook"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
