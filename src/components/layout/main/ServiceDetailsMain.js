import HeroInner from "@/components/sections/hero-banners/HeroInner";
import ServiceDetailsPrimary from "@/components/sections/service-details/ServiceDetailsPrimary";

const ServiceDetailsMain = () => {
  return (
    <main>
      <HeroInner title={"Service Details"} currentItem={"Service Details"} />
      <ServiceDetailsPrimary />
    </main>
  );
};

export default ServiceDetailsMain;
