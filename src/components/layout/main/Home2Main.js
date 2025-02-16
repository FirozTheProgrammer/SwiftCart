"use client";
import About2 from "@/components/sections/about/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import Contact1 from "@/components/sections/contacts/Contact1";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import Projects2 from "@/components/sections/projects/Projects2";
import Services2 from "@/components/sections/services/Services2";
import Team2 from "@/components/sections/team/Team2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";

const Home2Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero2 />
      <Brands2 isRotate={true} />
      <About2 />
      <Services2 />
      <CounterUp />
      <Team2 />
      <PinkColor />
      <Projects2 />
      <div className="border__line"></div>
      <Testimonials2 />
      <Blogs2 />
      {isOnepage ? <Contact1 pt={true} /> : ""}
    </main>
  );
};

export default Home2Main;
