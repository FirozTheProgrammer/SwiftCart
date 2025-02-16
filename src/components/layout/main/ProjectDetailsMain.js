import HeroInner from "@/components/sections/hero-banners/HeroInner";
import ProjectDetalisPrimary from "@/components/sections/project-details/ProjectDetalisPrimary";
import Projects4 from "@/components/sections/projects/Projects4";

const ProjectDetailsMain = () => {
  return (
    <main>
      <HeroInner title={"Project Details"} currentItem={"Project-details"} />
      <ProjectDetalisPrimary />
      <Projects4 />
    </main>
  );
};

export default ProjectDetailsMain;
