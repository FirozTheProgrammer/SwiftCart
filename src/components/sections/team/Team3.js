import TeamCard2 from "@/components/shared/cards/TeamCard2";
import getTeamMembers from "@/libs/getTeamMembers";
const Team3 = ({ type, label }) => {
  const team = getTeamMembers().slice(18, 21);

  return (
    <div className="team__member__3  sp_top_140 sp_bottom_140 special__spacing">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className={`section__title section__title--2 ${
                type === 2 ? "" : "  section__title--3"
              }`}
            >
              <div className="section__title__button">
                <span className={`${type === 2 ? "text__gradient " : ""}`}>
                  {label ? label : "Team Members"}
                </span>
              </div>
              <div className="section__title__heading sp_bottom_20">
                <h3>CONSULTING EXPERTISE! YOU CAN TRUST.</h3>
              </div>
              <div className="section__title__text__3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed ut
                  labore et dolore magna aliqua enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
          {team?.map((item, idx) => (
            <TeamCard2 key={idx} teamSingle={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team3;
