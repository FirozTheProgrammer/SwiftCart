import TeamCard4 from "@/components/shared/cards/TeamCard4";
import getTeamMembers from "@/libs/getTeamMembers";

const Team4 = () => {
  const team = getTeamMembers().slice(21, 27);
  return (
    <div className="team sp_top_140 sp_bottom_100 white__bg special__spacing">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center sp_bottom_50">
              <div className="section__title__small">
                <span>OUR TEAM</span>
              </div>
              <div className="section__title__heading">
                <h3>OUR MOST POPULAR CONSULTING SERVICE.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {team?.map((teamSingle, idx) => (
            <TeamCard4 key={idx} teamSingle={teamSingle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team4;
