"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";

export function LocaleHtml() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
