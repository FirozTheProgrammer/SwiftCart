import ProjectDetailsMain from "@/components/layout/main/ProjectDetailsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getAllProjects from "@/libs/getAllProjects";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Project Details | Bastun- Business Consulting Next Js Template",
  description: "Project Details | Bastun- Business Consulting Next Js Template",
};
const projects = getAllProjects();
export default function ProjectDetails({ params }) {
  const { id } = params;
  const isExistProject = projects?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistProject) {
    notFound();
  }
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ProjectDetailsMain />
    </PageWrapper>
  );
}
export async function generateStaticParams() {
  return projects?.map(({ id }) => ({ id: id.toString() }));
}
