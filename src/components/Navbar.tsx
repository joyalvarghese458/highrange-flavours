"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/#products" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
];

export function Navbar() {
  const { itemCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-forest/10 bg-ivory/92 py-2 shadow-lg shadow-forest/10 backdrop-blur-xl"
          : "border-transparent bg-forest/28 py-4 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group leading-none"
          aria-label="Highrange Flavours home"
        >
          <span
            className={`block font-serif text-xl font-semibold tracking-wide transition-colors sm:text-2xl ${
              scrolled ? "text-forest" : "text-gold"
            }`}
          >
            Highrange Flavours
          </span>
          <span
            className={`mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.34em] ${
              scrolled ? "text-charcoal/55" : "text-ivory/75"
            }`}
          >
            Idukki, Kerala
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-[0.18em] transition-colors ${
                scrolled
                  ? "text-charcoal/75 hover:text-forest"
                  : "text-ivory/90 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className={`relative grid size-11 place-items-center rounded-full border transition-all hover:scale-105 ${
              scrolled
                ? "border-forest/15 bg-white/70 text-forest shadow-sm"
                : "border-ivory/25 bg-ivory/10 text-ivory"
            }`}
            aria-label={`Cart with ${itemCount} items`}
          >
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[0.68rem] font-extrabold text-forest shadow">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className={`grid size-11 place-items-center rounded-full border lg:hidden ${
              scrolled
                ? "border-forest/15 bg-white/70 text-forest"
                : "border-ivory/25 bg-ivory/10 text-ivory"
            }`}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-forest/10 bg-ivory p-3 shadow-xl shadow-forest/15 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-forest hover:bg-forest/8"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
