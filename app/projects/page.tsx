import type { Metadata } from "next";
import { ProjectsView } from "@/components/ProjectsView";
import { getSite } from "@/content/site";

const site = getSite("ru");

export const metadata: Metadata = {
  title: site.ui.projects,
  description: site.ui.projectsLead,
};

export default function ProjectsPage() {
  return <ProjectsView locale="ru" />;
}
