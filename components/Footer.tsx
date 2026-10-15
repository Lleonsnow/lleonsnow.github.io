"use client";

import { usePathname } from "next/navigation";
import { getSite } from "@/content/site";
import { getLocaleFromPath } from "@/lib/i18n";
import styles from "./Footer.module.css";

export function Footer() {
  const pathname = usePathname();
  const site = getSite(getLocaleFromPath(pathname));

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          {site.fullName} · {site.role}
        </p>
        <div className={styles.links}>
          <a href={site.github.url} target="_blank" rel="noopener noreferrer">
            {site.github.label}
          </a>
          <a href={site.telegram.url} target="_blank" rel="noopener noreferrer">
            {site.telegram.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
