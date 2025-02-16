import ContactPrimary from "@/components/sections/contacts/ContactPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import Map from "@/components/sections/map/Map";

const ContactMain = () => {
  return (
    <main>
      <HeroInner title={"Contact us"} currentItem={"Contact us"} />
      <ContactPrimary />
      <Map />
    </main>
  );
};

export default ContactMain;
