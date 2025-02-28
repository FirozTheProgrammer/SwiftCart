"use client";
import About from "@/components/sections/about/About";
import Blogs from "@/components/sections/blogs/Blogs";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands from "@/components/sections/brands/Brands";
import Brands5 from "@/components/sections/brands/Brands5";
import Contact1 from "@/components/sections/contacts/Contact1";
import Features3 from "@/components/sections/features/Features3";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import Hero9 from "@/components/sections/hero-banners/Hero9";
import Offer3 from "@/components/sections/offers/Offer3";
import FeatureProducts from "@/components/sections/products/FeatureProducts";
import PopularProducts from "@/components/sections/products/PopularProducts";
import Projects from "@/components/sections/projects/Projects";
import Projects2 from "@/components/sections/projects/Projects2";

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
      <Hero9 />
      <Offer3 />
      <Brands5 />
      <FeatureProducts id="popular__products" />
      <Features3 />

      <PopularProducts id={"a"} />
      <PinkColor />
      <Projects2 project={3} />
      <Testimonials type={2} />
      {isOnepage ? <Contact1 type={2} /> : ""}
      <Blogs3 />
    </main>
  );
};

export default IndexMain;
