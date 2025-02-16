import ProjectCard from "@/components/shared/cards/ProjectCard";
import Nodata from "@/components/shared/no-data/Nodata";
import getAllProjects from "@/libs/getAllProjects";
import React from "react";

const ProjectsPrimary = () => {
  const allProducts = getAllProjects();
  const projects = allProducts?.filter(({ id }) => id < 4 || id > 6);
  return (
    <div className="all__project sp_top_140 sp_bottom_140 special__spacing">
      <div className="container">
        <div className="row">
          {!projects?.length ? (
            <Nodata text={"No Project"} />
          ) : (
            projects?.map((project, idx) => (
              <ProjectCard key={idx} project={project} type={2} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPrimary;
