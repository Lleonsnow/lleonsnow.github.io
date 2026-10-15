import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";
import { getSite } from "@/content/site";

const site = getSite("ru");

export const metadata: Metadata = {
  title: site.ui.about,
  description: site.bio,
};

export default function AboutPage() {
  return <AboutView locale="ru" />;
}
