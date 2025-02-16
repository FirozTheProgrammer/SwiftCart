import Image from "next/image";
import Link from "next/link";

const TeamCard4 = ({ teamSingle }) => {
  const { id, name, desig, img, duration } = teamSingle;
  return (
    <div
      className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="team__member__single__4 common__gradient__bg single__transform">
        <div className="team__member__img__4">
          <Image src={img} alt="" />
        </div>
        <div className="team__member__content__4">
          <h6>
            <Link href={`/team/${id}`}>{name}</Link>
          </h6>
          <span>{desig}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard4;
