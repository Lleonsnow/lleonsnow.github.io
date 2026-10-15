"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSite } from "@/content/site";
import {
  getLocaleFromPath,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const site = getSite(locale);
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={homeHref} className={styles.brand}>
          {site.name}
        </Link>

        <nav className={styles.nav} aria-label={locale === "ru" ? "Меню" : "Main"}>
          {site.nav.map((item) => {
            const active =
              item.path === "/"
                ? pathname === homeHref
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active ? `${styles.link} ${styles.linkActive}` : styles.link
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.langs} aria-label="Language">
          {(["ru", "en"] as Locale[]).map((code) => {
            const href = switchLocalePath(pathname, code);
            const active = locale === code;
            return (
              <Link
                key={code}
                href={href}
                className={
                  active ? `${styles.lang} ${styles.langActive}` : styles.lang
                }
                hrefLang={code}
                lang={code}
              >
                {code.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
