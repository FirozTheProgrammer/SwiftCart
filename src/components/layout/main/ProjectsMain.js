import HeroInner from "@/components/sections/hero-banners/HeroInner";
import ProjectsPrimary from "@/components/sections/projects/ProjectsPrimary";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";

const ProjectsMain = () => {
  return (
    <main>
      <HeroInner title={"All Project"} currentItem={"All Project"} />
      <ProjectsPrimary />
      <Testimonials3 type={2} pb="sp_bottom_160" pt={"sp_top_0"} />
    </main>
  );
};

export default ProjectsMain;
