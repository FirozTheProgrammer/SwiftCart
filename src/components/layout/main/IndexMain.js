"use client";
import About from "@/components/sections/about/About";
import Blogs from "@/components/sections/blogs/Blogs";
import Brands from "@/components/sections/brands/Brands";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import Projects from "@/components/sections/projects/Projects";

import OfferedServices from "@/components/sections/services/OfferedServices";
import Team from "@/components/sections/team/Team";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Video from "@/components/sections/videos/Video";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";

const IndexMain = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero1 />
      <OfferedServices />
      <Video />
      <About />
      <Team />
      <PinkColor />
      <Projects />
      <Testimonials />
      {isOnepage ? <Contact1 /> : ""}

      <Brands />
      <Blogs />
    </main>
  );
};

export default IndexMain;
