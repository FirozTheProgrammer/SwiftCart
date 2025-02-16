import FaqPrimary from "@/components/sections/faq/FaqPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";

const FaqMain = () => {
  return (
    <main>
      <HeroInner title={"FAQ"} currentItem={"Question & Answer"} />
      <FaqPrimary />
    </main>
  );
};

export default FaqMain;
