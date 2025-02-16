import HeroInner from "@/components/sections/hero-banners/HeroInner";
import TeamDetailsPrimary from "@/components/sections/team-details/TeamDetailsPrimary";
import TeamPrimary from "@/components/sections/team/TeamPrimary";
import React from "react";

const TeamDetailsMain = () => {
  return (
    <main>
      <HeroInner title={"Team Details"} currentItem={"Team Details"} />
      <TeamDetailsPrimary pb="sp_bottom_0" />
      <TeamPrimary pt=" sp_top_0" type={2} />
    </main>
  );
};

export default TeamDetailsMain;
