import { useLocale } from "../i18n/LocaleContext";

export default function LangToggle() {
  const { locale, setLocale } = useLocale();
  const next = locale === "es" ? "en" : "es";

  return (
    <button
      className="lang-btn"
      onClick={() => setLocale(next)}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
      title={locale === "es" ? "Switch to English" : "Cambiar a español"}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
