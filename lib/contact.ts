// CodedSEO ki contact details – EK hi jagah.
// Har page (city pages, sticky bar, schema) yahin se number/email leta hai.
// Number badalna ho to sirf yahan badlo, poori site par apne aap update ho jayega.
// NOTE: Yahan sirf CodedSEO ka apna data rakhna hai (SEO Discovery ka kuch nahi).

export const CONTACT = {
  phoneDisplay: "+91 73409 05942",
  phoneTel: "+917340905942", // tel: link ke liye
  whatsapp: "917340905942", // wa.me ke liye (bina + ke)
  email: "hello@codedseo.com",
  calendly: "https://calendly.com/codedseo-sales/30min",
} as const;

export const telHref = `tel:${CONTACT.phoneTel}`;

export function whatsappHref(message = "Hi CodedSEO, I'd like a free SEO audit.") {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
