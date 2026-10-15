"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./ScrollTop.module.css";

const SHOW_AFTER = 320;

export function ScrollTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/contact" || pathname === "/en/contact") {
    return null;
  }

  return (
    <button
      type="button"
      className={visible ? `${styles.btn} ${styles.visible}` : styles.btn}
      aria-label="Наверх"
      onClick={() => {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({
          top: 0,
          behavior: reduced ? "auto" : "smooth",
        });
      }}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden
      >
        <path
          d="M6 14.5 12 8.5l6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
