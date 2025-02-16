import ProjectCard2 from "@/components/shared/cards/ProjectCard2";
import getAllProjects from "@/libs/getAllProjects";
import Image from "next/image";
import Link from "next/link";
import brandBadgeImage from "@/assets/img/footer/brand__badge.png";
import brandBadgeInnerImage from "@/assets/img/footer/brand__badge__inner.png";

const Projects4 = () => {
  const projects = getAllProjects().slice(3, 6);
  return (
    <div className="related__project  sp_bottom_140 special__spacing">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title  text-center sp_bottom_60">
              <div className="section__title__button">
                <span className="text__gradient ">Our Projects</span>
              </div>
              <div className="section__title__heading">
                <h3>Related Projects</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row position-relative">
          {projects?.map((project, idx) => (
            <ProjectCard2 key={idx} project={project} type={2} />
          ))}

          <div className="bastun__brand__badge related__project__badge">
            <div className="bastun__brand__badge__inner position-relative">
              <Link href="/">
                <Image
                  className="bbb__animate"
                  src={brandBadgeImage}
                  alt="Footer badge"
                />
                <Image
                  className="bbb__icon"
                  src={brandBadgeInnerImage}
                  alt="Footer icon badge"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects4;
