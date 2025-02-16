import About5 from "@/components/sections/about/About5";
import Blogs from "@/components/sections/blogs/Blogs";
import Brands5 from "@/components/sections/brands/Brands5";
import Contact1 from "@/components/sections/contacts/Contact1";
import Features2 from "@/components/sections/features/Features2";
import Portfolio from "@/components/sections/portfolios/Portfolio";
import OfferedServices from "@/components/sections/services/OfferedServices";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import aboutTravelImage from "@/assets/img/about/about__travel.png";
import aboutTravelImage1 from "@/assets/img/about/about__travel__1.png";

import Offer2 from "@/components/sections/offers/Offer2";
import Hero17 from "@/components/sections/hero-banners/Hero17";
const Home18Main = () => {
  return (
    <main>
      <Hero17 />
      <Features2 type={2} />
      <Portfolio
        type={2}
        isNotTag={true}
        isLarge={true}
        isSmallContainer={true}
      />
      <Brands5 type={2} />
      <About5
        title={
          <>
            WE PROVIDE ALL KIND OF CONSULTING SERVICE FROMS{" "}
            <span className="text__gradient">1998.</span>{" "}
          </>
        }
        desc={
          "Sagittis purus sit amet volutpat consequat mauris nunc congue and tortor dignissim"
        }
        type={2}
        img={aboutTravelImage1}
        pt={true}
      />
      <OfferedServices pb={"sp_bottom_140"} />
      <Offer2
        img={aboutTravelImage}
        title={"RESOURCE PLANNING, SIMPLE TOOLS, POWERFUL EFFECTS."}
        tag="What we Offer"
        id={"a"}
        isVideo={true}
      />
      <Testimonials type={2} />
      <Blogs />
      <Contact1 pt={true} />
    </main>
  );
};

export default Home18Main;
