import { useLocale } from "../i18n/LocaleContext";
import { CONTACT, CV_FILES } from "../data/contact";
import Icon from "./Icon";
import BrandLogo from "./BrandLogo";
import avatarImg from "../assets/avatar.webp";

const HERO_PILLS = ["Python", "Django", "React", "SQL", "Power BI"];

export default function Hero() {
  const { t, locale } = useLocale();
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">
            <span className="num">&gt;_</span> {t.hero.eyebrow}
          </div>
          <h1>
            {t.hero.h1Pre}
            <span className="accent-text">{t.hero.h1Accent}</span>
          </h1>
          <p className="lede">
            {t.hero.ledePre}
            <strong>Python</strong>
            {t.hero.ledePost}
          </p>
          <div className="stack-pills">
            {HERO_PILLS.map((s) => (
              <span key={s} className="pill">
                {s}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contacto">
              {t.hero.ctaPrimary} <Icon name="arrow-right" size={16} />
            </a>
            <a className="btn btn-outline" href="#proyectos">
              {t.hero.ctaSecondary}
            </a>
            <a className="btn btn-outline" href={CV_FILES[locale]} download>
              <Icon name="download" size={16} /> {t.hero.ctaCv}
            </a>
          </div>
          <div className="hero-meta">
            <Icon name="pin" size={15} /> {CONTACT.location} · {t.hero.locationSuffix}
          </div>
        </div>
        <div className="avatar-visual">
          <div className="avatar-glow"></div>
          <div className="logo-badge lb-1" title="Python">
            <BrandLogo name="Python" size={26} />
          </div>
          <div className="logo-badge lb-2" title="React">
            <BrandLogo name="React" size={26} />
          </div>
          <div className="logo-badge logo-badge-sm lb-4" title="Data">
            <Icon name="chart" size={19} />
          </div>
          <div className="logo-badge logo-badge-sm lb-5" title="Cloud">
            <Icon name="cloud" size={19} />
          </div>
          <img
            className="avatar-img"
            src={avatarImg}
            alt="Santi, systems engineer, illustrated with Python, React, SQL and data icons"
          />
          <div className="float-badge badge-1">
            <span className="chip-icon" style={{ background: "#4f8cff" }}></span> {t.hero.badgeFullStack}
          </div>
          <div className="float-badge badge-2">
            <span className="chip-icon" style={{ background: "#22d97a" }}></span> {t.hero.badgeData}
          </div>
        </div>
      </div>
    </section>
  );
}
