import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";
import { getSite } from "@/content/site";

const site = getSite("en");

export const metadata: Metadata = {
  title: site.ui.contact,
  description: site.openTo,
};

export default function EnContactPage() {
  return <ContactView locale="en" />;
}
