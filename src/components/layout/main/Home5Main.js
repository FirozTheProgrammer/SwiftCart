"use client";
import About2 from "@/components/sections/about/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import Contact1 from "@/components/sections/contacts/Contact1";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Hero5 from "@/components/sections/hero-banners/Hero5";
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

const Home5Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero5 />
      <Brands2 />
      <About2 />
      <Services2 />
      <CounterUp />
      <Offer />
      <Skills />
      <Team2 />
      <PinkColor />
      <Projects2 />
      <div className="border__line"></div>
      <Testimonials2 />
      <Pricing title="WE OFFER CONSULTANCY SERVICES." plan={2} />
      <Blogs2 />
      {isOnepage ? <Contact1 pt={true} /> : ""}
    </main>
  );
};

export default Home5Main;
