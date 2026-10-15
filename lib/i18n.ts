export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === "ru") return clean || "/";
  return `/en${clean || ""}` || "/en";
}

export function switchLocalePath(pathname: string, next: Locale): string {
  const current = getLocaleFromPath(pathname);
  if (current === next) return pathname || "/";

  if (next === "en") {
    if (pathname === "/" || pathname === "") return "/en";
    return `/en${pathname}`;
  }

  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname || "/";
}
