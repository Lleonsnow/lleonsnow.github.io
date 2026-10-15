"use client";

import { useEffect, useState } from "react";
import styles from "./KeyCta.module.css";

const FRAME_COUNT = 150;
const FRAME_MS = 40;

function frameSrc(index: number) {
  return `/media/key/Key_01_${index}.png`;
}

type Props = {
  href: string;
  label: string;
};

export function KeyCta({ href, label }: Props) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    for (let i = 0; i < FRAME_COUNT; i += 1) {
      const img = new Image();
      img.src = frameSrc(i);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setFrame((current) => (current + 1) % FRAME_COUNT);
    }, FRAME_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <a
      className={styles.wrap}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className={styles.stage}>
        {Array.from({ length: FRAME_COUNT }, (_, index) => (
          <img
            key={index}
            className={
              index === frame ? `${styles.frame} ${styles.show}` : styles.frame
            }
            src={frameSrc(index)}
            alt=""
            width={540}
            height={540}
            draggable={false}
            decoding="async"
          />
        ))}
      </span>
    </a>
  );
}
