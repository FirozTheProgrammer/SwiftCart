import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, type }) => {
  const { title, id, duration, img } = project;
  return (
    <div
      className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="project__single single__transform">
        <div className="project__img">
          <Image src={img} alt="" />
        </div>
        <div className="project__content">
          <div className="project__heading">
            <h3>
              <Link href={`/projects/${id}`}>{title}</Link>
            </h3>
          </div>
          <div className="project__icon">
            <Link
              className={`direction__btn ${
                type === 2 ? " direction__btn--2" : ""
              }`}
              href={`/projects/${id}`}
            >
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

export default ProjectCard;
