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

      <section className={styles.blockFeatured} aria-labelledby="featured-projects">
        <h2 id="featured-projects" className={styles.titleFeatured}>
          {site.ui.featuredShort}
        </h2>
        <ProjectList projects={site.featured} />
      </section>

      <section className={styles.blockMore} aria-labelledby="more-projects">
        <h2 id="more-projects" className={styles.titleMore}>
          {site.ui.more}
        </h2>
        <ProjectList projects={site.more} compact />
      </section>

      <section className={styles.blockSmaller} aria-labelledby="smaller-projects">
        <h2 id="smaller-projects" className={styles.titleSmaller}>
          {site.ui.smaller}
        </h2>
        <ProjectList projects={site.smaller} compact />
      </section>
    </div>
  );
}
