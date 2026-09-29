import { useLocale } from "../i18n/LocaleContext";
import { waLink } from "../utils/whatsapp";
import { SERVICES } from "../data/services";
import Icon from "./Icon";

export default function Services() {
  const { locale, t } = useLocale();
  return (
    <section className="alt-bg" id="servicios">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">{t.services.num}</span> {t.services.eyebrow}
            </div>
            <h2>{t.services.heading}</h2>
            <p>{t.services.body}</p>
          </div>
          <a className="link-more" href={waLink(t.wa.quote)} target="_blank" rel="noopener noreferrer">
            {t.services.linkMore}
          </a>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.en.title}>
              <div className="service-icon">
                <Icon name={s.icon} size={19} />
              </div>
              <h3>{s[locale].title}</h3>
              <p>{s[locale].desc}</p>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span className="tag-sm" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
