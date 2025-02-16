import Image from "next/image";
import Link from "next/link";

const TeamCard = ({ teamSingle }) => {
  const { id, name, desig, img, duration } = teamSingle;
  return (
    <div
      className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="team__single single__transform">
        <div className="team__img">
          <Image src={img} alt="" />
        </div>
        <div className="team__name">
          <h6>
            <Link href={`/team/${id}`}>{name}</Link>
          </h6>
          <span>{desig}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
