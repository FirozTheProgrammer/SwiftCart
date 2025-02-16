"use client";
import About3 from "@/components/sections/about/About3";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import Hero3 from "@/components/sections/hero-banners/Hero3";
import Services3 from "@/components/sections/services/Services3";
import Team3 from "@/components/sections/team/Team3";
import Features from "@/components/sections/features/Features";
import Projects3 from "@/components/sections/projects/Projects3";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Contact1 from "@/components/sections/contacts/Contact1";
import { useHeaderContex } from "@/providers/HeaderContex";
import WorkProcess from "@/components/sections/work-process/WorkProcess";

const Home3Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero3 />
      <About3 />
      <Services3 />
      <CounterUp2 />
      <Team3 />
      <WorkProcess />
      <Features />
      <Projects3 />
      <Testimonials3 />
      {isOnepage ? <Contact1 pt={true} /> : ""}

      <Blogs3 />
    </main>
  );
};

export default Home3Main;
