import About5 from "@/components/sections/about/About5";
import Brands2 from "@/components/sections/brands/Brands2";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero10 from "@/components/sections/hero-banners/Hero10";
import Portfolio from "@/components/sections/portfolios/Portfolio";
import Pricing from "@/components/sections/pricing/Pricing";
import Services4 from "@/components/sections/services/Services4";
import Skills from "@/components/sections/skills/Skills";
import Testimonials4 from "@/components/sections/testimonials/Testimonials4";
import FixedShadow from "@/components/shared/others/FixedShadow";

const Home10Main = () => {
  return (
    <main>
      <FixedShadow />
      <Hero10 />
      <Brands2 isRotate={true} />
      <About5
        title={
          <>
            I CRAFT WONDERFUL DIGITAL EXPERIENCES FOR BRAND FROM{" "}
            <span className="text__gradient">1998.</span>{" "}
          </>
        }
        desc={
          "Sagittis purus sit amet volutpat consequat mauris nunc congue and tortor dignissim"
        }
        type={2}
      />
      <Skills title={"My best awesome skills."} type={3} />
      <Services4 />

      <Portfolio />
      <div className="border__line"></div>
      <Testimonials4 />
      <Pricing />

      <Contact1 pt={true} />
    </main>
  );
};

export default Home10Main;
