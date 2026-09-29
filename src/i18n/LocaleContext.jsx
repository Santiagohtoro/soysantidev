import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { I18N } from "./translations";

const LocaleContext = createContext({ locale: "es", t: I18N.es, setLocale: () => {} });

const STORAGE_KEY = "santi-locale";

/**
 * Provee el idioma actual (es | en) y su diccionario de textos a todo el
 * árbol de componentes. Persiste la elección del usuario en localStorage,
 * igual que el tema oscuro/claro.
 */
export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || "es";
    } catch {
      return "es";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // localStorage puede no estar disponible (modo privado, etc.) — no es crítico.
    }
  }, [locale]);

  const value = useMemo(() => ({ locale, t: I18N[locale], setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
