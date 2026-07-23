import type { Metadata } from "next";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  getCanonicalUrl,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: `Cart | ${SITE_NAME}`,
  description: `Review your selected ${SITE_NAME} spices and confirm your order through WhatsApp.`,
  alternates: {
    canonical: "/cart",
  },
  openGraph: {
    title: `Cart | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: getCanonicalUrl("/cart"),
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
    title: `Cart | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
