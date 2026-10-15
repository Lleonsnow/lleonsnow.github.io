import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactTheme } from "@/components/ContactTheme";
import { CustomScrollbar } from "@/components/CustomScrollbar";
import { LocaleHtml } from "@/components/LocaleHtml";
import { PageTransition } from "@/components/PageTransition";
import { ScrollTop } from "@/components/ScrollTop";
import { getSite } from "@/content/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const ibm = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm",
  display: "swap",
});

const site = getSite("ru");

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s · ${site.fullName}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${syne.variable} ${ibm.variable}`}>
      <body>
        <CustomScrollbar />
        <LocaleHtml />
        <ContactTheme />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
