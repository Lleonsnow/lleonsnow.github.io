import { KeyCta } from "@/components/KeyCta";
import { getSite } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import styles from "@/app/contact/page.module.css";

export function ContactView({ locale }: { locale: Locale }) {
  const site = getSite(locale);

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{site.ui.contact}</h1>
          <p className={`lead ${styles.lead}`}>{site.openTo}</p>

          <ul className={styles.list}>
            <li>
              <p className={styles.label}>{site.github.label}</p>
              <p className={styles.handle}>
                <a
                  href={site.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.github.handle}
                </a>
              </p>
            </li>
            <li>
              <p className={styles.label}>{site.telegram.label}</p>
              <p className={styles.handle}>
                <a
                  href={site.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.telegram.handle}
                </a>
              </p>
            </li>
          </ul>

          <p className={styles.note}>{site.ui.techLine}</p>
        </div>

        <div className={styles.keyPanel}>
          <KeyCta href={site.telegram.url} label={site.ui.keyCta} />
        </div>
      </div>
    </div>
  );
}
