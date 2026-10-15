import { ProjectList } from "@/components/ProjectList";
import { getSite } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import styles from "@/app/projects/page.module.css";

export function ProjectsView({ locale }: { locale: Locale }) {
  const site = getSite(locale);

  return (
    <div className="page shell">
      <h1 className="pageTitle">{site.ui.projects}</h1>
      <p className="lead">{site.ui.projectsLead}</p>

      <section className={styles.block} aria-labelledby="featured-projects">
        <h2 id="featured-projects" className={styles.blockTitle}>
          {site.ui.featuredShort}
        </h2>
        <ProjectList projects={site.featured} />
      </section>

      <section className={styles.block} aria-labelledby="more-projects">
        <h2 id="more-projects" className={styles.blockTitle}>
          {site.ui.more}
        </h2>
        <ProjectList projects={site.more} compact />
      </section>

      <section className={styles.block} aria-labelledby="smaller-projects">
        <h2 id="smaller-projects" className={styles.blockTitle}>
          {site.ui.smaller}
        </h2>
        <ProjectList projects={site.smaller} compact />
      </section>
    </div>
  );
}
