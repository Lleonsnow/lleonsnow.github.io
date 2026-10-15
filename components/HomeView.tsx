import Link from "next/link";
import { ProjectList } from "@/components/ProjectList";
import { getSite } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import styles from "@/app/page.module.css";

export function HomeView({ locale }: { locale: Locale }) {
  const site = getSite(locale);

  return (
    <>
      <section className={styles.hero} aria-label={site.ui.intro}>
        <p className={styles.brand}>{site.name}</p>
        <h1 className={styles.headline}>{site.headline}</h1>
        <p className={styles.tagline}>{site.tagline}</p>
        <div className={`${styles.cta} ctaTarget`}>
          <a
            className={styles.primary}
            href={site.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.ui.ctaGithub}
          </a>
          <Link
            className={styles.secondary}
            href={localizedPath(locale, "/contact")}
          >
            {site.ui.ctaContact}
          </Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="stack-heading">
        <h2 id="stack-heading" className={styles.sectionTitle}>
          {site.ui.stack}
        </h2>
        <ul className={styles.stack}>
          {site.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="featured-heading">
        <h2 id="featured-heading" className={styles.sectionTitle}>
          {site.ui.featured}
        </h2>
        <ProjectList projects={site.featured.slice(0, 4)} />
        <p className={styles.moreLink}>
          <Link href={localizedPath(locale, "/projects")}>
            {site.ui.allProjects}
          </Link>
        </p>
      </section>

      <section className={styles.contactStrip} aria-label={site.ui.contact}>
        <p>{site.openTo}</p>
        <div className={styles.contactLinks}>
          <a href={site.github.url} target="_blank" rel="noopener noreferrer">
            {site.github.handle}
          </a>
          <a href={site.telegram.url} target="_blank" rel="noopener noreferrer">
            {site.telegram.handle}
          </a>
        </div>
      </section>
    </>
  );
}
