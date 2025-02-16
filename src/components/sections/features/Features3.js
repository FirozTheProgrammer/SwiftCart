import FeatureCard from "@/components/shared/cards/FeatureCard";
import featuresImage1 from "@/assets/img/about/delivery.png";
import featuresImage2 from "@/assets/img/about/secure.png";
import featuresImage3 from "@/assets/img/about/support.png";

const Features3 = ({ id }) => {
  const features = [
    {
      id: 1,
      title: "Delivery",
      desc: "Free delivery on all orders with no minimum purchase.",
      duration: "1800",
      img: featuresImage1,
    },
    {
      id: 2,
      title: "Secure",
      desc: "Your money is secure with our advanced protection.",
      duration: "2200",
      img: featuresImage2,
    },
    {
      id: 3,
      title: "Support",
      desc: "Get 24/7 support for all your technical issues.",
      duration: "2600",
      img: featuresImage3,
    },
  ];
  return (
    <section
      className="service__features sp_bottom_130"
      id={id ? id : "service__area"}
    >
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

export default Features3;
