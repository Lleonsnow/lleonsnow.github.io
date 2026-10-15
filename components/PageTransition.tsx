"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.css";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pathRef = useRef(pathname);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (pathname === pathRef.current) return;
    pathRef.current = pathname;
    window.scrollTo(0, 0);
    setTick((n) => n + 1);
  }, [pathname]);

  return (
    <main className={styles.main}>
      <div key={`${pathname}-${tick}`} className={styles.stage}>
        {children}
      </div>
    </main>
  );
}
