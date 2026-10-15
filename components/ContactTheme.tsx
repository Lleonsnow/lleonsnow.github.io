"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ContactTheme() {
  const pathname = usePathname();
  const dark =
    pathname === "/contact" ||
    pathname === "/en/contact" ||
    pathname.startsWith("/contact/") ||
    pathname.startsWith("/en/contact/");

  useEffect(() => {
    document.body.classList.toggle("theme-contact", dark);
    return () => document.body.classList.remove("theme-contact");
  }, [dark]);

  return null;
}
