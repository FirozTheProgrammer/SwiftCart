import Image from "next/image";
import featuresImage1 from "@/assets/img/about/healthcare.png";
import featuresImage2 from "@/assets/img/about/deal.png";
import featuresImage3 from "@/assets/img/about/money-bag.png";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features2 = ({ type }) => {
  const features = [
    {
      id: 1,
      title: type === 2 ? "Identify" : "Best coverage",
      desc:
        type === 2
          ? "Finding the right talent is crucial for any success."
          : "Insurance aids in the transformation of finances into.",
      duration: "1800",
      img: type === 2 ? featuresImage2 : featuresImage1,
    },
    {
      id: 2,
      title: type === 2 ? "Possibility" : "Reduced Issues",
      desc:
        type === 2
          ? "Smooth onboarding sets the stage for employee engagement"
          : "Insurance aids in the transformation of finances into.",
      duration: "2200",
      img: type === 2 ? featuresImage1 : featuresImage2,
    },
    {
      id: 3,
      title: type === 2 ? "Recruited" : "More advantages",
      desc:
        type === 2
          ? "Fair and competitive compensation packages are essential"
          : "Insurance aids in the transformation of finances into.",
      duration: "2600",
      img: featuresImage3,
    },
  ];
  return (
    <section className={`service__features ${type === 2 ? "sp_top_50" : ""}`}>
      <div className="container">
        <div className="service__features__wrap">
          <div className="row justify-content-center">
            {features?.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
