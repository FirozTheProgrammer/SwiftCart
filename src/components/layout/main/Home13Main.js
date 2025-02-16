"use client";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import Projects3 from "@/components/sections/projects/Projects3";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Contact1 from "@/components/sections/contacts/Contact1";
import { useHeaderContex } from "@/providers/HeaderContex";
import FixedShadow from "@/components/shared/others/FixedShadow";
import Team from "@/components/sections/team/Team";
import Offer2 from "@/components/sections/offers/Offer2";
import Pricing from "@/components/sections/pricing/Pricing";
import Hero13 from "@/components/sections/hero-banners/Hero13";
import WorkProcess from "@/components/sections/work-process/WorkProcess";

const Home13Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <FixedShadow type={2} />
      <Hero13 />

      <WorkProcess type={2} />
      <CounterUp2 />
      <Offer2 type={2} isVideo={true} />
      <Team />
      <Projects3 />
      <Pricing plan={2} isDarkBg={true} />
      <Blogs3 />
      {isOnepage ? <Contact1 pt={true} pb={true} /> : ""}
    </main>
  );
};

export default Home13Main;
