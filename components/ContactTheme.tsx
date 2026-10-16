"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function ContactTheme() {
  const pathname = usePathname();
  const dark =
    pathname === "/contact" ||
    pathname === "/en/contact" ||
    pathname.startsWith("/contact/") ||
    pathname.startsWith("/en/contact/");

  useLayoutEffect(() => {
    document.body.classList.toggle("theme-contact", dark);
  }, [dark]);

  return null;
}
