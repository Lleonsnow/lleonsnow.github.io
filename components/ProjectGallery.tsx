"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { createPortal } from "react-dom";
import styles from "./ProjectGallery.module.css";

type Props = {
  images: readonly string[];
  label: string;
  note?: string;
};

const MIN_SCALE = 1;
const MAX_SCALE = 4;

export function ProjectGallery({ images, label, note }: Props) {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const dragRef = useRef<{
    pointerId: number;
    x: number;
    y: number;
    ox: number;
    oy: number;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resetView = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const close = useCallback(() => {
    setOpenAt(null);
    resetView();
  }, [resetView]);

  const go = useCallback(
    (delta: number) => {
      setOpenAt((current) => {
        if (current === null) return null;
        return (current + delta + images.length) % images.length;
      });
      resetView();
    },
    [images.length, resetView],
  );

  useEffect(() => {
    if (openAt === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key === "+" || event.key === "=") {
        setScale((value) => Math.min(MAX_SCALE, value + 0.25));
        return;
      }
      if (event.key === "-" || event.key === "_") {
        setScale((value) => {
          const next = Math.max(MIN_SCALE, value - 0.25);
          if (next === MIN_SCALE) setOffset({ x: 0, y: 0 });
          return next;
        });
        return;
      }
      if (event.key === "0") {
        resetView();
        return;
      }
      if (images.length < 2) return;
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const { body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    html.classList.add("gallery-open");
    body.classList.add("gallery-open");

    const blockScroll = (event: Event) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest("[data-gallery-root]")
      ) {
        return;
      }
      event.preventDefault();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", blockScroll, { passive: false });
    window.addEventListener("touchmove", blockScroll, { passive: false });

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      html.classList.remove("gallery-open");
      body.classList.remove("gallery-open");
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", blockScroll);
      window.removeEventListener("touchmove", blockScroll);
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
      html.style.scrollBehavior = prevBehavior;
    };
  }, [openAt, images.length, close, go, resetView]);

  const onWheel = (event: ReactWheelEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const delta = event.deltaY > 0 ? -0.15 : 0.15;
    setScale((value) => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, value + delta));
      if (next === MIN_SCALE) setOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (scale <= MIN_SCALE) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      ox: offset.x,
      oy: offset.y,
    };
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    setOffset({
      x: drag.ox + (event.clientX - drag.x),
      y: drag.oy + (event.clientY - drag.y),
    });
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
    }
  };

  if (images.length === 0) return null;

  const overlay =
    openAt !== null && mounted
      ? createPortal(
          <div
            className={styles.overlay}
            data-gallery-root
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onClick={close}
          >
            <div
              className={`${styles.stage} ${scale > 1 ? styles.panning : ""}`}
              onClick={(event) => {
                event.stopPropagation();
                if (scale <= 1) close();
              }}
              onWheel={onWheel}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onDoubleClick={() => {
                if (scale > 1) {
                  resetView();
                } else {
                  setScale(2);
                }
              }}
            >
              <img
                className={styles.full}
                src={images[openAt]}
                alt=""
                draggable={false}
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                }}
              />
            </div>

            <div
              className={styles.toolbar}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.tool}
                onClick={() =>
                  setScale((value) => Math.min(MAX_SCALE, value + 0.25))
                }
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                className={styles.tool}
                onClick={() =>
                  setScale((value) => {
                    const next = Math.max(MIN_SCALE, value - 0.25);
                    if (next === MIN_SCALE) setOffset({ x: 0, y: 0 });
                    return next;
                  })
                }
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                className={styles.tool}
                onClick={resetView}
                aria-label="Reset zoom"
              >
                1:1
              </button>
              <span className={styles.meta}>
                {openAt + 1}/{images.length}
              </span>
            </div>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.prev}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Previous"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M14.5 5.5 8 12l6.5 6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.next}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    go(1);
                  }}
                  aria-label="Next"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M9.5 5.5 16 12l-6.5 6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            ) : null}

            <button
              type="button"
              className={styles.close}
              onClick={(event) => {
                event.stopPropagation();
                close();
              }}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <ul className={styles.strip} aria-label={label}>
        {images.map((src, index) => (
          <li key={src}>
            <button
              type="button"
              className={styles.thumb}
              onClick={() => {
                resetView();
                setOpenAt(index);
              }}
              aria-label={`${label} ${index + 1}`}
            >
              <img src={src} alt="" loading="lazy" decoding="async" />
            </button>
          </li>
        ))}
      </ul>
      {note ? <p className={styles.note}>{note}</p> : null}
      {overlay}
    </>
  );
}
