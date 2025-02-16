"use client";

import About4 from "@/components/sections/about/About4";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands4 from "@/components/sections/brands/Brands4";
import CallToAction from "@/components/sections/CallToActions/CallToAction";

import Contact1 from "@/components/sections/contacts/Contact1";
import Hero4 from "@/components/sections/hero-banners/Hero4";
import Portfolio from "@/components/sections/portfolios/Portfolio";
import Pricing from "@/components/sections/pricing/Pricing";
import Services4 from "@/components/sections/services/Services4";
import Team4 from "@/components/sections/team/Team4";
import Testimonials4 from "@/components/sections/testimonials/Testimonials4";
import FixedShadow from "@/components/shared/others/FixedShadow";
import { useHeaderContex } from "@/providers/HeaderContex";

const Home4Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <FixedShadow />
      <Hero4 />
      <Brands4 />
      <About4 />
      <Services4 />
      <Team4 />
      <CallToAction />
      <Portfolio />
      <div className="border__line"></div>
      <Testimonials4 />
      <Pricing />
      <Blogs3 blogsType={4} />

      {isOnepage ? <Contact1 /> : ""}
    </main>
  );
};

export default Home4Main;
