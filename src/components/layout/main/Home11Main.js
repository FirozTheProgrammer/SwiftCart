"use client";
import About3 from "@/components/sections/about/About3";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import Hero3 from "@/components/sections/hero-banners/Hero3";
import Features from "@/components/sections/features/Features";
import Projects3 from "@/components/sections/projects/Projects3";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Contact1 from "@/components/sections/contacts/Contact1";
import { useHeaderContex } from "@/providers/HeaderContex";
import FixedShadow from "@/components/shared/others/FixedShadow";
import Team from "@/components/sections/team/Team";
import Offer2 from "@/components/sections/offers/Offer2";
import Services5 from "@/components/sections/services/Services5";
import WorkProcess from "@/components/sections/work-process/WorkProcess";

const Home11Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <FixedShadow type={2} />
      <Hero3 type={2} />
      <About3 />
      <Services5 />
      <Offer2 type={2} />
      <Team />
      <WorkProcess />
      <Features />
      <Projects3 />
      <CounterUp2 />
      <Testimonials3 />
      <Blogs3 />
      {isOnepage ? <Contact1 pt={true} pb={true} /> : ""}
    </main>
  );
};

export default Home11Main;
