"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Features2 from "@/components/sections/features/Features2";
import Projects2 from "@/components/sections/projects/Projects2";
import Skills from "@/components/sections/skills/Skills";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import React from "react";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Blogs from "@/components/sections/blogs/Blogs";
import Brands from "@/components/sections/brands/Brands";
import Hero8 from "@/components/sections/hero-banners/Hero8";
import Services2 from "@/components/sections/services/Services2";
import About2 from "@/components/sections/about/About2";
import Team2 from "@/components/sections/team/Team2";
import CallToAction from "@/components/sections/CallToActions/CallToAction";
const Home8Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero8 />
      <Services2 service={2} />
      <PinkColor />
      <Projects2 project={2} />
      <Features2 />
      <About2 />
      <CounterUp />
      <Team2 />
      <Skills title={"Creative Agency Solutions."} type={2} />
      <Testimonials />
      <CallToAction
        title={"Need an outstanding and successful awesome project?"}
        label={"Let's Work Together"}
      />
      <Contact1 pt={true} />
      <Brands />
      <Blogs blogsType={2} />
    </main>
  );
};

export default Home8Main;
