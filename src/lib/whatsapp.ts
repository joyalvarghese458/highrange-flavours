export const WHATSAPP_PHONE_NUMBER = "917592972101";

export const buildWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};
