import BrandBadge from "@/components/shared/badges/BrandBadge";
import Image from "next/image";

import projectSmallImage1 from "@/assets/img/project/project__small__img.png";
import projectSmallImage2 from "@/assets/img/project/project__small__img__1.png";
import projectSmallImage3 from "@/assets/img/project/project__small__img__2.png";
import ProjectCard from "@/components/shared/cards/ProjectCard";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getAllProjects from "@/libs/getAllProjects";

const Projects = () => {
  const projects = getAllProjects().slice(0, 3);
  return (
    <div
      className="project special__spacing"
      id="project__area"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="project__margin">
        <div className="container  sp_bottom_60 sp_top_70 ">
          <div className="row align-items-center sp_bottom_80">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
              <div className="section__title section__title--2">
                <div className="section__title__heading">
                  <h3 className="mb-0">
                    {" "}
                    OUR TRACK RECORD OF COMPLETED{" "}
                    <span className=" text__unerline">CONSULTING </span>{" "}
                    PROJECTS.{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12">
              <div className="project__section__img text__end">
                <BrandBadge />
              </div>
            </div>
            <div className="row">
              {projects?.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
            <div className="project__small__img">
              <Image
                className="project__img__1"
                src={projectSmallImage1}
                alt=""
              />
              <Image
                className="project__img__2"
                src={projectSmallImage2}
                alt=""
              />
            </div>
          </div>
          <div
            className="container project__bottom"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="project__bottom__button">
                  <ButtonPrimary text="VIEW OTHER PROJECT" path="/projects" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="project__bottom__img text-center">
                  <Image src={projectSmallImage3} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="project__bottom__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor{" "}
                    <a href="#">incididunt ut labore et dolore magna aliqua.</a>{" "}
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
