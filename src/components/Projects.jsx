import { useLocale } from "../i18n/LocaleContext";
import { PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLocale();
  return (
    <section id="proyectos">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">{t.projects.num}</span> {t.projects.eyebrow}
            </div>
            <h2>{t.projects.heading}</h2>
            <p>{t.projects.body}</p>
          </div>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
