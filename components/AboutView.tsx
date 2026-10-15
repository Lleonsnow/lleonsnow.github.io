import { getSite } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import styles from "@/app/about/page.module.css";

export function AboutView({ locale }: { locale: Locale }) {
  const site = getSite(locale);

  return (
    <div className="page shell">
      <h1 className="pageTitle">{site.ui.about}</h1>
      <p className="lead">{site.bio}</p>

      <ul className={styles.list}>
        {site.strengths.map((item) => (
          <li key={item.title}>
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <p className={styles.itemText}>{item.text}</p>
          </li>
        ))}
      </ul>

      <section className={styles.stack} aria-labelledby="about-stack">
        <h2 id="about-stack" className={styles.stackHeading}>
          {site.ui.stack}
        </h2>
        <ul className={styles.stackList}>
          {site.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
