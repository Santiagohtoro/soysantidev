/**
 * Set de íconos inline en SVG. Añadir uno nuevo es agregar un `case` con su
 * `path`/`d` — no depende de ninguna librería de íconos externa.
 */
export default function Icon({ name, size = 18 }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "sun":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "moon":
      return (
        <svg {...p}>
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...p}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...p}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "external":
      return (
        <svg {...p}>
          <path d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h5" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.7-1.5.1-.2.1-.3 0-.5C10.9 9.5 10.4 8 10.2 7.5c-.2-.4-.3-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4z" />
          <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1120.2 12 8.2 8.2 0 0112 20.2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...p}>
          <path d="M4 4h16v16H4z" opacity="0" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 110-4 2 2 0 010 4zM7 20.4H3.6V9H7z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
          <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0012 2z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...p}>
          <path d="M12 21s7-6.4 7-11a7 7 0 10-14 0c0 4.6 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "code":
      return (
        <svg {...p}>
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
        </svg>
      );
    case "chart":
      return (
        <svg {...p}>
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...p}>
          <path d="M13 2L4 13h6l-1 9 9-11h-6l1-9z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        </svg>
      );
    case "check":
      return (
        <svg {...p} strokeWidth="2.4">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18" />
        </svg>
      );
    case "tag":
      return (
        <svg {...p}>
          <path d="M20.6 12.3L12 20.9a2 2 0 01-2.8 0l-7-7a2 2 0 010-2.8L10.7 2.5a2 2 0 011.4-.6H19a2 2 0 012 2v6.9a2 2 0 01-.6 1.4z" />
          <circle cx="15" cy="7" r="1.5" />
        </svg>
      );
    case "cup":
      return (
        <svg {...p}>
          <path d="M4 3h13v9a5 5 0 01-5 5H9a5 5 0 01-5-5V3z" />
          <path d="M17 6h1.5a2.5 2.5 0 010 5H17M5 21h11" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...p}>
          <path d="M7 18a4.5 4.5 0 01-.5-8.98A5.5 5.5 0 0117 8.5a4 4 0 011 7.9M7 18h11" />
        </svg>
      );
    case "plug":
      return (
        <svg {...p}>
          <path d="M9 2v5M15 2v5M6 8h12l-1 4a5 5 0 01-5 4h0a5 5 0 01-5-4L6 8zM12 16v6" />
        </svg>
      );
    case "download":
      return (
        <svg {...p}>
          <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />
        </svg>
      );
    default:
      return null;
  }
}
