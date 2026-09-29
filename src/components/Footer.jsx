import { useLocale } from "../i18n/LocaleContext";
import { CONTACT } from "../data/contact";
import Icon from "./Icon";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer>
      <div className="container footer-inner">
        <span className="footer-brand">{t.footer.tagline}</span>
        <div className="footer-social">
          <a href={"https://" + CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon name="github" size={18} />
          </a>
          <a href={"https://" + CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={18} />
          </a>
          <a href={"mailto:" + CONTACT.email} aria-label="Email">
            <Icon name="mail" size={18} />
          </a>
        </div>
        <span className="footer-brand mono">
          <Icon name="pin" size={13} /> {CONTACT.location}
        </span>
      </div>
    </footer>
  );
}
