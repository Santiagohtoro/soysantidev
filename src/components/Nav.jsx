import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../i18n/LocaleContext";
import { waLink } from "../utils/whatsapp";
import { CV_FILES } from "../data/contact";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { t, locale } = useLocale();

  const links = [
    [t.nav.inicio, "/#inicio"],
    [t.nav.servicios, "/#servicios"],
    [t.nav.proyectos, "/#proyectos"],
    [t.nav.sobreMi, "/#sobre-mi"],
    [t.nav.contacto, "/#contacto"],
  ];

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          <span className="caret">&gt;_</span> soysanti<span className="dot">.dev</span>
        </Link>

        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <LangToggle />
          <ThemeToggle />
          <a href={waLink(t.wa.nav)} target="_blank" rel="noopener noreferrer" className="nav-cta">
            {t.nav.cta} <Icon name="arrow-right" size={14} />
          </a>
          <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menú">
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {open && (
        <div className="container mobile-menu">
          {links.map(([label, href]) => (
            <Link key={href} to={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a
            className="btn btn-primary btn-block"
            href={waLink(t.wa.nav)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {t.nav.cta} <Icon name="arrow-right" size={15} />
          </a>
          <a className="btn btn-outline btn-block" href={CV_FILES[locale]} download onClick={() => setOpen(false)}>
            <Icon name="download" size={15} /> {t.hero.ctaCv}
          </a>
        </div>
      )}
    </nav>
  );
}
