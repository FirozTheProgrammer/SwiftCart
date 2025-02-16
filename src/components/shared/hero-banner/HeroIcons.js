import Image from "next/image";
import vectorImage1 from "@/assets/img/herobaner/vector__1.png";
import vectorImage2 from "@/assets/img/herobaner/Vector__2.png";
import vectorImage3 from "@/assets/img/herobaner/vector__3.png";
import vectorImage4 from "@/assets/img/herobaner/vector__4.png";

const HeroIcons = () => {
  return (
    <div className="herobanner__icon">
      <Image
        className="herobanner__vector hero__icon__1"
        src={vectorImage1}
        alt="Vector photo"
      />
      <Image
        className="herobanner__vector hero__icon__2"
        src={vectorImage2}
        alt="Vector photo"
      />
      <Image
        className="herobanner__vector hero__icon__3"
        src={vectorImage3}
        alt="Vector photo"
      />
      <Image
        className="herobanner__vector hero__icon__4"
        src={vectorImage4}
        alt="Vector photo"
      />
    </div>
  );
};

export default HeroIcons;
