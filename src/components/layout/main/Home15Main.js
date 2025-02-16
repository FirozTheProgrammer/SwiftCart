"use client";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import Projects3 from "@/components/sections/projects/Projects3";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Contact1 from "@/components/sections/contacts/Contact1";
import FixedShadow from "@/components/shared/others/FixedShadow";
import Pricing from "@/components/sections/pricing/Pricing";
import Hero15 from "@/components/sections/hero-banners/Hero15";
import Brands5 from "@/components/sections/brands/Brands5";
import Skills2 from "@/components/sections/skills/Skills2";
import WorkProcess from "@/components/sections/work-process/WorkProcess";

const Home15Main = () => {
  return (
    <main>
      <FixedShadow type={2} />
      <Hero15 />
      <Brands5 type={2} />
      <Skills2 />
      <WorkProcess type={2} />
      <CounterUp2 />

      <Projects3 />
      <Pricing plan={2} isDarkBg={true} />
      <Blogs3 />
      <Contact1 pt={true} type={3} />
    </main>
  );
};
export default Home15Main;
