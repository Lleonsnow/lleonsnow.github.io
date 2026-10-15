import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";
import { getSite } from "@/content/site";

const site = getSite("ru");

export const metadata: Metadata = {
  title: site.ui.contact,
  description: site.openTo,
};

export default function ContactPage() {
  return <ContactView locale="ru" />;
}
