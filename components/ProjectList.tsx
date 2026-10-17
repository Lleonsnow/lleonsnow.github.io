import { ProjectGallery } from "@/components/ProjectGallery";
import styles from "./ProjectList.module.css";

type Project = {
  name: string;
  blurb: string;
  stack?: string;
  description?: string;
  url: string | null;
  gallery?: readonly string[];
};

type Props = {
  projects: readonly Project[];
  compact?: boolean;
  showGallery?: boolean;
};

export function ProjectList({ projects, compact, showGallery }: Props) {
  return (
    <ul className={compact ? `${styles.list} ${styles.compact}` : styles.list}>
      {projects.map((project) => (
        <li key={project.name} className={styles.item}>
          <h3 className={styles.name}>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <p className={styles.blurb}>{project.blurb}</p>
          {project.stack ? <p className={styles.stack}>{project.stack}</p> : null}
          {project.description ? (
            <p className={styles.desc}>{project.description}</p>
          ) : null}
          {showGallery && !compact && project.gallery?.length ? (
            <ProjectGallery
              images={project.gallery}
              label={`${project.name} screenshots`}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
