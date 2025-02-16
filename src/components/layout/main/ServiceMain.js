"use client";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import Services2 from "@/components/sections/services/Services2";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import { useSearchParams } from "next/navigation";

const ServiceMain = () => {
  const currentCategory = useSearchParams().get("category");
  return (
    <main>
      <HeroInner title={"Service Page"} currentItem={"Service Page"} />
      <Services2
        service={2}
        isBg={true}
        all={true}
        type={2}
        isNotTitle={true}
      />
      {currentCategory ? "" : <Testimonials3 type={2} pb="sp_bottom_180" />}
    </main>
  );
};

export default ServiceMain;
