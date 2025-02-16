import Image from "next/image";
import Link from "next/link";

const ProjectCard3 = ({ project }) => {
  const { title, id, img } = project;
  return (
    <div className="project__3__img single__transform">
      <Image src={img} alt="" />
      <div className="project__3__name">
        <h6>
          <Link href={`/projects/${id}`}>{title}</Link>
        </h6>
        <div className="project__3__icon">
          <Link className="direction__btn" href={`/projects/${id}`}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4258 10.9898L23.0101 10.9898L23.0101 19.5741"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9902 23.0106L22.8908 11.11"
                stroke="white"
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
  );
};

export default ProjectCard3;
