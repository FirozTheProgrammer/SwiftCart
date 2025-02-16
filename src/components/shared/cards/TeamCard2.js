import Image from "next/image";
import Link from "next/link";

const TeamCard2 = ({ teamSingle, type }) => {
  const { id, name, desig, img, duration } = teamSingle;
  return (
    <div
      className={`  ${
        type === 2 ? "col-xxl-3 col-xl-4" : "col-xl-3"
      }   col-lg-4 col-md-6 col-sm-6 col-12`}
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div
        className={`team__member__3__single ${
          type === 2 ? "team__member__border" : ""
        } text-center single__transform`}
      >
        <div className="team__member__3__single__inner">
          <div className="team__member__3__img">
            <Image src={img} alt="" />
          </div>
          <div className="team__member__name">
            <h6>
              <Link href={`/team/${id}`}>{name}</Link>
            </h6>
            <p>{desig}</p>
          </div>
          <div className="team__member__icon">
            <ul>
              <li>
                <Link
                  className="direction__btn"
                  href="https://www.facebook.com"
                >
                  <i className="icofont-facebook"></i>
                </Link>
              </li>{" "}
              <li>
                <Link className="direction__btn" href="https://x.com">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>{" "}
              <li>
                <Link className="direction__btn" href="https://www.skype.com">
                  <i className="icofont-skype"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard2;
