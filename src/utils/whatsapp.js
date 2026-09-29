import { CONTACT } from "../data/contact";

/** Construye un link de wa.me con un mensaje pre-cargado. */
export function waLink(message) {
  return "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(message);
}
