"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import Projects2 from "@/components/sections/projects/Projects2";
import Skills from "@/components/sections/skills/Skills";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import React from "react";
import Video from "@/components/sections/videos/Video";
import Hero7 from "@/components/sections/hero-banners/Hero7";
import Services4 from "@/components/sections/services/Services4";
import Offer2 from "@/components/sections/offers/Offer2";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Team from "@/components/sections/team/Team";
import Blogs from "@/components/sections/blogs/Blogs";
import Brands from "@/components/sections/brands/Brands";
import Brands5 from "@/components/sections/brands/Brands5";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import aboutSassImage from "@/assets/img/about/about__sass.png";
import About6 from "@/components/sections/about/About6";
const Home14Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero7 type={2} />
      <Brands5 type={2} />
      <Video video={2} />

      <CounterUp2 />
      <Services4
        title={"WE OFFER CONSULTANCY SERVICES."}
        service={2}
        desc={
          " Sagittis purus sit amet volutpat consequat mauris nunc congue and tortor dignissim"
        }
      />
      <About6 />
      <Offer2
        img={aboutSassImage}
        title={"Resource Planning, Simple Tools, Powerful Effects."}
        tag="What we Offer"
      />
      <Skills title={"Best amazing skills we have."} type={3} />
      <PinkColor />
      <Projects2 project={2} />
      <div className="border__line"></div>
      <Team />
      <Testimonials />

      <Brands />

      <Blogs blogsType={2} />
      {isOnepage ? <Contact1 /> : ""}
    </main>
  );
};
export default Home14Main;
