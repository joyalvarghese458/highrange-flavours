import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RouteScrollReset } from "@/components/RouteScrollReset";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Highrange Flavours | Premium Kerala Spices from Idukki",
  description:
    "Shop farm-fresh cardamom, black pepper, cloves, cinnamon, and nutmeg grown in the high ranges of Idukki, Kerala.",
  openGraph: {
    title: "Highrange Flavours | Premium Kerala Spices from Idukki",
    description:
      "Naturally grown spices handpicked from Highrange Flavours farms in Idukki, Kerala and delivered across India.",
    url: "https://highrangeflavours.in",
    siteName: "Highrange Flavours",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Premium Kerala spices from Highrange Flavours",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ivory text-charcoal">
        <CartProvider>
          <RouteScrollReset />
          <SmoothScroll />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
