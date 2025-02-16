import Link from "next/link";

const { default: Image } = require("next/image");

const ProjectCard2 = ({ project, type }) => {
  const { title, id, duration, img } = project;
  return (
    <div
      className={`col-xl-4 col-md-6   ${
        type === 2 ? "col-lg-4 col-sm-12" : " col-lg-6  col-sm-6 col-12"
      }`}
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="project__single single__transform">
        <div className="project__img project__img--2">
          <Image src={img} alt="" />
          <div className="project__heading project__heading--2">
            <h3>
              <Link href={`/projects/${id}`}>{title}</Link>
            </h3>
          </div>
          <div className="project__icon project__icon--2">
            <Link className="direction__btn" href={`/projects/${id}`}>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                  stroke="#0A0624"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9902 23.0107L22.8908 11.1101"
                  stroke="#0A0624"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard2;
