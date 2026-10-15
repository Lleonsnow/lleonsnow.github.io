import type { Metadata } from "next";
import { ProjectsView } from "@/components/ProjectsView";
import { getSite } from "@/content/site";

const site = getSite("en");

export const metadata: Metadata = {
  title: site.ui.projects,
  description: site.ui.projectsLead,
};

export default function EnProjectsPage() {
  return <ProjectsView locale="en" />;
}
