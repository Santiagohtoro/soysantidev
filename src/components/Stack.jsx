import { useLocale } from "../i18n/LocaleContext";
import { STACK } from "../data/stack";
import { BRAND_LOGOS } from "../data/brandLogos";
import BrandLogo from "./BrandLogo";
import Icon from "./Icon";

const FALLBACK_ICON = { "Power BI": "chart", Java: "cup", AWS: "cloud", "REST APIs": "plug" };

function StackIcon({ name }) {
  if (BRAND_LOGOS[name]) return <BrandLogo name={name} size={26} />;
  return <Icon name={FALLBACK_ICON[name] || "code"} size={22} />;
}

export default function Stack() {
  const { t } = useLocale();
  return (
    <section className="alt-bg">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">{t.stack.num}</span> {t.stack.eyebrow}
            </div>
            <h2>{t.stack.heading}</h2>
            <p>{t.stack.body}</p>
          </div>
        </div>
        <div className="stack-grid">
          {STACK.map((s) => (
            <div className="stack-item" key={s}>
              <div className="ic">
                <StackIcon name={s} />
              </div>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
