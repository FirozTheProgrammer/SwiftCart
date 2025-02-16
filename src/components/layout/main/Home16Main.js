"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import Projects2 from "@/components/sections/projects/Projects2";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import Offer2 from "@/components/sections/offers/Offer2";
import Blogs from "@/components/sections/blogs/Blogs";
import Brands from "@/components/sections/brands/Brands";
import Brands5 from "@/components/sections/brands/Brands5";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import aboutSassImage2 from "@/assets/img/about/about__sass__2.png";
import Hero16 from "@/components/sections/hero-banners/Hero16";
import Services2 from "@/components/sections/services/Services2";
import Team2 from "@/components/sections/team/Team2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import About7 from "@/components/sections/about/About7";

const Home16Main = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero16 />
      <Brands5 type={2} />
      <Services2
        service={2}
        title={"WE OFFER CONSULTANCY SERVICES."}
        pt="sp_bottom_70"
        pb=" sp_top_100"
      />
      <CounterUp2 />
      <Offer2
        img={aboutSassImage2}
        title={"WE PROVIDE CLIENTS WITH BEST SOLUTIONS."}
        tag="What we Offer"
        id={"about__mission__area"}
      />
      <PinkColor />
      <Projects2 project={2} />
      <Team2 type={2} />
      <Brands />
      <About7 id="tb_about" />
      <Testimonials2 isGradient={true} type={2} />
      <Blogs />
      {isOnepage ? <Contact1 pt={true} /> : ""}
    </main>
  );
};
export default Home16Main;
