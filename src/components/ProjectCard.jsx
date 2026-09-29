import { Link } from "react-router-dom";
import { useLocale } from "../i18n/LocaleContext";
import Icon from "./Icon";

const THUMB_BARS = [38, 64, 48, 76, 32];

/**
 * Tarjeta de proyecto — usada tanto en la grilla principal de Projects como
 * en "otros proyectos" al final de ProjectDetail.
 */
export default function ProjectCard({ project }) {
  const { locale, t } = useLocale();
  const tr = project[locale];
  const isLogo = project.image?.type === "logo";

  return (
    <Link to={`/proyecto/${project.id}`} className="proj-card">
      <div
        className={`proj-thumb${isLogo ? " proj-thumb-logo-bg" : ""}`}
        style={isLogo ? undefined : { backgroundImage: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
      >
        {project.image ? (
          <img
            src={project.image.src}
            alt={tr.title}
            className={project.image.type === "logo" ? "proj-thumb-logo" : "proj-thumb-screenshot"}
          />
        ) : (
          <>
            <div className="proj-thumb-chrome">
              <span className="proj-thumb-dot" style={{ background: "rgba(255,255,255,.55)" }}></span>
              <span className="proj-thumb-dot" style={{ background: "rgba(255,255,255,.55)" }}></span>
              <span className="proj-thumb-dot" style={{ background: "rgba(255,255,255,.55)" }}></span>
            </div>
            <div className="proj-thumb-bars">
              {THUMB_BARS.map((h, i) => (
                <span key={i} className="proj-thumb-bar" style={{ height: h + "%" }}></span>
              ))}
            </div>
          </>
        )}
        <span className="status">{tr.status}</span>
      </div>
      <div className="proj-body">
        <span className="proj-cat">{tr.category}</span>
        <h3>{tr.title}</h3>
        <p>{tr.summary}</p>
        <div className="proj-tags">
          {project.tags.map((tag) => (
            <span className="tag-sm" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="proj-footer">
          {t.projects.viewDetails} <Icon name="arrow-right" size={14} />
        </div>
      </div>
    </Link>
  );
}
