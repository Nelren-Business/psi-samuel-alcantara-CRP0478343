export const WHATSAPP_PHONE = "5537998164092";

export const createWhatsAppUrl = (text: string) => {
  const params = new URLSearchParams({ phone: WHATSAPP_PHONE, text });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
};