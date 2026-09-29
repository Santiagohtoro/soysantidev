import { useLocale } from "../i18n/LocaleContext";
import { waLink } from "../utils/whatsapp";
import { CONTACT, CV_FILES } from "../data/contact";
import Icon from "./Icon";

export default function Contact() {
  const { t, locale } = useLocale();
  return (
    <section id="contacto">
      <div className="container">
        <div className="contact-box">
          <div>
            <div className="eyebrow">
              <span className="num">{t.contact.num}</span> {t.contact.eyebrow}
            </div>
            <h2>{t.contact.heading}</h2>
            <p>{t.contact.body}</p>
            <div className="contact-actions">
              <a className="btn btn-wa" href={waLink(t.wa.contact)} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={17} /> {t.contact.wa}
              </a>
              <a className="btn btn-outline" href={"mailto:" + CONTACT.email}>
                {t.contact.more}
              </a>
              <a className="btn btn-outline" href={CV_FILES[locale]} download>
                <Icon name="download" size={16} /> {t.hero.ctaCv}
              </a>
            </div>
          </div>
          <div className="contact-list">
            <div className="contact-row">
              <div className="ic">
                <Icon name="mail" size={16} />
              </div>
              <div>
                <span className="lbl">{t.contact.email}</span>
                <a href={"mailto:" + CONTACT.email}>{CONTACT.email}</a>
              </div>
            </div>
            <div className="contact-row">
              <div className="ic">
                <Icon name="linkedin" size={16} />
              </div>
              <div>
                <span className="lbl">{t.contact.linkedin}</span>
                <a href={"https://" + CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  {CONTACT.linkedin}
                </a>
              </div>
            </div>
            <div className="contact-row">
              <div className="ic">
                <Icon name="github" size={16} />
              </div>
              <div>
                <span className="lbl">{t.contact.github}</span>
                <a href={"https://" + CONTACT.github} target="_blank" rel="noopener noreferrer">
                  {CONTACT.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
