import { useEffect, useState } from "react";
import Icon from "./Icon";

const STORAGE_KEY = "santi-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // localStorage puede no estar disponible — no es crítico.
    }
  }, [theme]);

  return (
    <button
      className="theme-btn"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label="Cambiar tema / Switch theme"
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
    </button>
  );
}
