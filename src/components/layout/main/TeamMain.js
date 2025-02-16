import Blogs2 from "@/components/sections/blogs/Blogs2";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import TeamPrimary from "@/components/sections/team/TeamPrimary";
import React from "react";

const TeamMain = () => {
  return (
    <main>
      <HeroInner title={"Team"} currentItem={"Team"} />
      <TeamPrimary />
      <Blogs3 />
    </main>
  );
};

export default TeamMain;
