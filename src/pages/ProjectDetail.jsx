import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useLocale } from "../i18n/LocaleContext";
import { waLink } from "../utils/whatsapp";
import { CONTACT } from "../data/contact";
import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Icon from "../components/Icon";

export default function ProjectDetail() {
  const { id } = useParams();
  const { locale, t } = useLocale();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  const tr = project[locale];
  const others = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div>
      <div className="detail-hero">
        <div className="container">
          <a href="/#proyectos" className="back-link">
            {t.detail.back}
          </a>
          <div className="detail-top">
            <div>
              <span className="proj-cat">{tr.category}</span>
              <h1>{tr.title}</h1>
              <p style={{ color: "var(--ink-muted)", fontSize: 15.5, maxWidth: "60ch" }}>{tr.summary}</p>
              <div className="proj-tags" style={{ marginTop: 14 }}>
                {project.tags.map((tag) => (
                  <span className="tag-sm" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="detail-cta-col">
              <a className="btn btn-wa btn-block" href={waLink(t.wa.similar(tr.title))} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={16} /> {t.detail.ctaSimilar}
              </a>
              <a
                className="btn btn-outline btn-block"
                href={"mailto:" + CONTACT.email + "?subject=" + encodeURIComponent(t.detail.mailSubject + tr.title)}
              >
                {t.detail.more}
              </a>
            </div>
          </div>
          <div
            className="detail-banner"
            style={
              project.image?.type === "logo"
                ? {
                    backgroundColor: "#05070b",
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,.14) 1.6px, transparent 1.6px), radial-gradient(circle at 30% 20%, rgba(255,255,255,.08), transparent 60%)",
                  }
                : {
                    backgroundColor: project.gradient[1],
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,.14) 1.6px, transparent 1.6px), linear-gradient(135deg, " +
                      project.gradient[0] +
                      "40, transparent)",
                  }
            }
          >
            {project.image && (
              <img
                src={project.image.src}
                alt={tr.title}
                className={project.image.type === "logo" ? "detail-banner-logo" : "detail-banner-screenshot"}
              />
            )}
            <span className="status">{tr.status}</span>
          </div>
        </div>
      </div>

      <div className="container detail-body">
        <div>
          <h2>{t.detail.about}</h2>
          <p className="desc">{tr.description}</p>
          <h2>{t.detail.highlights}</h2>
          <ul className="highlight-list">
            {tr.highlights.map((h) => (
              <li key={h}>
                <span className="ic">
                  <Icon name="check" size={16} />
                </span>
                {h}
              </li>
            ))}
          </ul>
          {project.infographic && (
            <img src={project.infographic} alt={tr.title} className="detail-infographic" />
          )}
          {project.certificate && (
            <figure className="detail-certificate">
              <img src={project.certificate} alt={locale === "es" ? "Reconocimiento a mejor trabajo de grado" : "Best thesis project recognition"} />
              <figcaption>
                {locale === "es" ? "Reconocimiento a mejor trabajo de grado" : "Best thesis project recognition"}
              </figcaption>
            </figure>
          )}
        </div>
        <div>
          <div className="side-card">
            <h4>{t.detail.sheet}</h4>
            <div className="side-row">
              <span className="k">{t.detail.role}</span>
              <span className="v">{tr.role}</span>
            </div>
            <div className="side-row">
              <span className="k">{t.detail.year}</span>
              <span className="v">{project.year}</span>
            </div>
            <div className="side-row">
              <span className="k">{t.detail.status}</span>
              <span className="v">{tr.status}</span>
            </div>
            <div className="side-row">
              <span className="k">{t.detail.stackLabel}</span>
              <span className="v">{project.tags.join(", ")}</span>
            </div>
          </div>
          <a className="btn btn-primary btn-block" href={waLink(t.wa.like(tr.title))} target="_blank" rel="noopener noreferrer">
            {t.detail.ctaTalk} <Icon name="arrow-right" size={15} />
          </a>
        </div>
      </div>

      <div className="alt-bg">
        <div className="container" style={{ paddingBlock: "var(--space-12)" }}>
          <div className="section-head">
            <div>
              <h2 style={{ fontSize: 20 }}>{t.detail.other}</h2>
            </div>
          </div>
          <div className="other-projects">
            {others.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
