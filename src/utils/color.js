/** Luminancia relativa (0–1) de un color hexadecimal, usada para decidir
 * si un logo de marca necesita un fondo claro de respaldo para ser legible. */
export function hexLuminance(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
