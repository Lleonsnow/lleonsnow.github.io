"use client";

import { useEffect, useState } from "react";
import styles from "./ProjectGallery.module.css";

type Props = {
  images: readonly string[];
  label: string;
};

export function ProjectGallery({ images, label }: Props) {
  const [openAt, setOpenAt] = useState<number | null>(null);

  useEffect(() => {
    if (openAt === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenAt(null);
        return;
      }
      if (images.length < 2) return;
      if (event.key === "ArrowRight") {
        setOpenAt((current) =>
          current === null ? null : (current + 1) % images.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setOpenAt((current) =>
          current === null
            ? null
            : (current - 1 + images.length) % images.length,
        );
      }
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openAt, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <ul className={styles.strip} aria-label={label}>
        {images.map((src, index) => (
          <li key={src}>
            <button
              type="button"
              className={styles.thumb}
              onClick={() => setOpenAt(index)}
              aria-label={`${label} ${index + 1}`}
            >
              <img src={src} alt="" loading="lazy" decoding="async" />
            </button>
          </li>
        ))}
      </ul>

      {openAt !== null ? (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpenAt(null)}
        >
          <img
            className={styles.full}
            src={images[openAt]}
            alt=""
            onClick={(event) => event.stopPropagation()}
          />
          {images.length > 1 ? (
            <>
              <button
                type="button"
                className={`${styles.nav} ${styles.prev}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenAt((current) =>
                    current === null
                      ? null
                      : (current - 1 + images.length) % images.length,
                  );
                }}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.nav} ${styles.next}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenAt((current) =>
                    current === null ? null : (current + 1) % images.length,
                  );
                }}
                aria-label="Next"
              >
                ›
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
