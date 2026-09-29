import { useLocale } from "../i18n/LocaleContext";
import { waLink } from "../utils/whatsapp";
import { TIMELINE, WHY } from "../data/timeline";
import Icon from "./Icon";

export default function About() {
  const { locale, t } = useLocale();
  return (
    <section id="sobre-mi">
      <div className="container about-grid">
        <div>
          <div className="eyebrow">
            <span className="num">{t.about.num}</span> {t.about.eyebrow}
          </div>
          <h2 style={{ marginBottom: 10 }}>{t.about.heading}</h2>
          <p style={{ color: "var(--ink-muted)", fontSize: 14.5 }}>{t.about.body}</p>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <div className="timeline-item" key={item[locale].title + item[locale].org}>
                <h4>{item[locale].title}</h4>
                <div className="tl-meta">
                  {item[locale].org} · {item[locale].meta}
                </div>
                <p>{item[locale].desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="side-card" style={{ marginBottom: "var(--space-6)" }}>
            <h4>{t.about.whyTitle}</h4>
            <div className="why-list">
              {WHY.map((w) => (
                <div className="why-item" key={w.en.title}>
                  <div className="why-icon">
                    <Icon name={w.icon} size={17} />
                  </div>
                  <div>
                    <h4>{w[locale].title}</h4>
                    <p>{w[locale].desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a className="btn btn-outline btn-block" href={waLink(t.wa.about)} target="_blank" rel="noopener noreferrer">
            {t.about.learnMore} <Icon name="arrow-right" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
