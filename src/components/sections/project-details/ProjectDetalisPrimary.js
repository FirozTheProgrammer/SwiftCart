"use client";
import ProjectSidebar from "@/components/shared/sidebars/ProjectSidebar";
import getAllProjects from "@/libs/getAllProjects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProjectDetalisPrimary = () => {
  const projects = getAllProjects();
  const totalProjects = projects?.length;
  const { id: currnetIdString } = useParams();
  const currentId = currnetIdString ? parseInt(currnetIdString) : null;
  const currentProjects = projects?.filter(({ id }) =>
    currentId > 3 && currentId < 7
      ? id > 3 && id < 7
      : currentId === 1
      ? id < 4
      : currentId === 3
      ? (id > 1 && id < 4) || id === 7
      : currentId === 7
      ? id === 3 || (id > 6 && id < 9)
      : currentId === totalProjects
      ? id > currentId - 3
      : id > currentId - 2 && id < currentId + 2
  );
  const [currentProject, setCurrentProject] = useState(
    currentProjects?.find(({ id }) => id === currentId)
  );
  const { title } = currentProject;
  return (
    <div className="project__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="project__details__bottom__border">
          <div className="row">
            <ProjectSidebar />
            <div className="col-xl-8 col-xl-8 col-lg-8 col-md-12 col-12">
              <div className="project__details__wraper">
                <div
                  className="projects__tap__wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div
                    className="tab-content tab__content__wrapper"
                    id="myTabContent"
                  >
                    {currentProjects?.map(({ img, detailsImg, id }, idx) => (
                      <div
                        key={idx}
                        className={`tab-pane fade  ${
                          id === currentId ? "active show" : ""
                        }`}
                        id={`projects__${id}`}
                        role="tabpanel"
                        aria-labelledby={`projects__${id}`}
                      >
                        <div className="projects__img">
                          <Image src={detailsImg} alt="" placeholder="blur" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <ul
                        className="nav  projects__nav__wrap"
                        id="myTab"
                        role="tablist"
                      >
                        {currentProjects?.map((project, idx) => {
                          const { img, detailsImg, id } = project;
                          return (
                            <li
                              onClick={() => setCurrentProject(project)}
                              key={idx}
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className={`projects__tab__link  ${
                                  id === currentId ? "active " : ""
                                }`}
                                data-bs-toggle="tab"
                                data-bs-target={`#projects__${id}`}
                              >
                                <Image src={detailsImg} alt="projectsimg" />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="service__details__heading"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h4>{title}</h4>
                </div>
                <div
                  className="service__details__text"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Odio facilisis mauris sit amet massa vitae tortor
                    condimentum. Etiam sit amet nisl purus in mollis nunc sed.
                    Quam vulputate dignissim suspendisse in est ante in. Amet
                    commodo nulla facilisi nullam vehicula. Arcu vitae elementum
                    curabitur vitae nunc. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat. Aenean vel elit
                    scelerisque mauris pellentesque pulvinar. Turpis egestas
                    maecenas pharetra convallis. Ac turpis egestas maecenas
                    pharetra convallis. Morbi tincidunt augue interdum velit
                    euismod. Accumsan sit amet nulla facilisi morbi tempus.
                    Scelerisque eleifend donec pretium vulputate sapien nec
                    sagittis aliquam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Odio facilisis mauris sit amet massa vitae tortor
                    condimentum. Etiam sit amet nisl purus in mollis nunc sed.
                    Quam vulputate dignissim suspendisse in est ante in. Amet
                    commodo nulla facilisi nullam vehicula. Arcu vitae elementum
                    curabitur vitae nunc. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat. Aenean vel elit
                    scelerisque mauris pellentesque pulvinar.
                  </p>
                </div>
                <div
                  className="project__details__challenges"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="project__details__challenges__heading">
                    <h6>Project Challenges:</h6>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Odio facilisis mauris sit amet massa vitae tortor
                    condimentum. Etiam sit amet nisl purus in mollis nunc sed.
                    Quam vulputate dignissim suspendisse in est ante in. Amet
                    commodo nulla facilisi nullam vehicula. Arcu vitae elementum
                    curabitur vitae nunc. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat. Aenean vel elit
                    scelerisque mauris pellentesque pulvinar.
                  </p>
                  <p className="project__details__challenges__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Odio facilisis mauris sit amet massa vitae tortor
                    condimentum. Etiam sit amet nisl purus in mollis nunc sed.
                    Quam vulputate dignissim suspendisse in est ante in. Amet
                    commodo nulla facilisi nullam vehicula. Arcu vitae elementum
                    curabitur vitae nunc. Duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat.
                  </p>
                </div>
                <div
                  className="project__details__button"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <Link className="default__button" href="#">
                    PREV.PROJECT
                  </Link>
                  <Link className="default__button" href="#">
                    NEXT.PROJECT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetalisPrimary;
