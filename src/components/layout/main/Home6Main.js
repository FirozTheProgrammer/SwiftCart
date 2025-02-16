"use client";
import About2 from "@/components/sections/about/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import Contact1 from "@/components/sections/contacts/Contact1";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Features2 from "@/components/sections/features/Features2";
import Hero6 from "@/components/sections/hero-banners/Hero6";
import Offer from "@/components/sections/offers/Offer";
import Pricing from "@/components/sections/pricing/Pricing";
import Projects2 from "@/components/sections/projects/Projects2";
import Services2 from "@/components/sections/services/Services2";
import Skills from "@/components/sections/skills/Skills";
import Team2 from "@/components/sections/team/Team2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import React from "react";
import offerImage from "@/assets/img/about/about__insurance.png";
import OfferedServices from "@/components/sections/services/OfferedServices";
import Video from "@/components/sections/videos/Video";
import Team3 from "@/components/sections/team/Team3";
const Home6Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero6 />
      <Features2 />
      <Offer
        title={"Today any insurance deductible can feel like."}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptates? Quis nam odit doloremque."
        }
        img={offerImage}
        offer={2}
        label={"Insurance Agency"}
        id="about__mission__area"
      />
      <OfferedServices service={2} />
      <Video />
      <CounterUp />
      <About2 id="about" />
      <Skills />
      <Team3 type={2} label={"Our Team"} />

      <PinkColor />
      <Projects2 />
      <div className="border__line"></div>
      <Testimonials2 />
      <Pricing title="WE OFFER CONSULTANCY SERVICES." plan={2} />
      {isOnepage ? <Contact1 pt={true} /> : ""}
      <Blogs2 />
    </main>
  );
};

export default Home6Main;
