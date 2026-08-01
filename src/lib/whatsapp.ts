export const WHATSAPP_PHONE_NUMBER = "916282337643";

export const buildWhatsAppUrl = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};
