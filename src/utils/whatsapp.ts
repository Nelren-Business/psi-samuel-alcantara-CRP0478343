// src/utils/whatsapp.ts

// Centralizamos o número aqui. Se mudar no futuro, muda no site todo de uma vez!
export const WHATSAPP_PHONE = "5537998164092";

// Exportamos a função geradora de links
export const createWhatsAppUrl = (text: string) => {
  const params = new URLSearchParams({ phone: WHATSAPP_PHONE, text });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
};