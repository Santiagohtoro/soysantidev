import { BRAND_LOGOS } from "../data/brandLogos";
import { hexLuminance } from "../utils/color";

/**
 * Renderiza el logo oficial de una tecnología (path SVG real, no un ícono
 * genérico) para la sección "Stack" y el hero. Si la marca no está en
 * BRAND_LOGOS (p. ej. Power BI, AWS, Java plano no tienen un mark libre de
 * marca registrada disponible), no renderiza nada — el caller debe usar un
 * ícono genérico de respaldo en ese caso (ver StackIcon en Stack.jsx).
 */
export default function BrandLogo({ name, size = 22 }) {
  const b = BRAND_LOGOS[name];
  if (!b) return null;

  const icon = (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={b.color}>
      <path d={b.path} />
    </svg>
  );

  // Algunas marcas oficiales (p. ej. el verde casi negro de Django) son muy
  // oscuras para leerse sobre nuestras superficies oscuras — les damos un
  // pequeño fondo claro para que se mantengan legibles.
  if (hexLuminance(b.color) < 0.18) {
    const pad = Math.round(size * 0.22);
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: size + pad,
          height: size + pad,
          background: "#eef2f7",
          borderRadius: 7,
        }}
      >
        {icon}
      </span>
    );
  }

  return icon;
}
