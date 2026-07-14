import { MessageCircle } from "lucide-react";

const message =
  "Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Highrange%20Flavours%20spices.";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/917592972101?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/35 ring-8 ring-[#25D366]/12 transition hover:scale-105 sm:bottom-7 sm:right-7"
      aria-label="Chat with Highrange Flavours on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/25" />
      <MessageCircle className="relative" size={26} />
    </a>
  );
}
