"use client";
import Blogs from "@/components/sections/blogs/Blogs";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero12 from "@/components/sections/hero-banners/Hero12";
import Portfolio from "@/components/sections/portfolios/Portfolio";
import heroIntConsultingImage from "@/assets/img/herobaner/international__consulting.png";
import { useHeaderContex } from "@/providers/HeaderContex";
import React from "react";
import Services6 from "@/components/sections/services/Services6";
import Offer2 from "@/components/sections/offers/Offer2";
import aboutHrImage from "@/assets/img/about/about__hr.png";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import Brands2 from "@/components/sections/brands/Brands2";
import Pricing from "@/components/sections/pricing/Pricing";
const Home19Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero12
        bgImg={heroIntConsultingImage}
        title={
          <>
            International <br />
            <span className="text__gradient">Business</span> &amp;{" "}
            <span className="text__gradient">Consulting</span>.
          </>
        }
        desc={
          "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor. Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        }
        isNotTag={true}
      />

      <Services6 />
      <Offer2
        img={aboutHrImage}
        title={"RESOURCE PLANNING, SIMPLE TOOLS, POWERFUL EFFECTS."}
        tag="What we Offer"
        id={"about__mission__area"}
        isVideo={true}
        isNotPt={true}
        pt="sp_top_0"
      />
      <CounterUp2 />

      <Portfolio type={3} isLarge={true} isNotTag={true} />
      <Brands2 isRotate={true} />
      <Pricing plan={2} isNotTag={true} bg={"white"} />
      {isOnepage ? <Contact1 /> : ""}
      <Blogs />
    </main>
  );
};
export default Home19Main;
