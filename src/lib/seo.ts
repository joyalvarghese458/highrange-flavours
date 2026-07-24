export const SITE_URL = "https://highrangeflavoursidukki.com";
export const SITE_NAME = "Highrange Flavours";
export const SITE_DESCRIPTION =
  "Shop farm-fresh cardamom, black pepper, cloves, cinnamon, and nutmeg grown in the high ranges of Idukki, Kerala.";

export const DEFAULT_OG_IMAGE =
  `${SITE_URL}/banner.webp`;

export const getCanonicalUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
