import brandImage10 from "@/assets/img/brand/brand__10.png";
import Image from "next/image";

const Brands5 = ({ type }) => {
  const brands =
    type === 2
      ? [
          "ONLINE SOLUTION",
          "LEGAL CONSULTING",
          "SOFTWARE SOLUTION",
          "APPS SOLUTION",
          "SASS CONSULTING",
          "WEB CONSULTING",
          "SEO CONSULTING",
          "WEB AGENCY",
        ]
      : [
          "ONLINE SOLUTION",
          "WOMEN FASHION",
          "MENS FASHION",
          "KIDS FASHION",
          "BABY FASHION",
          "GIRLS FASHION",
          "SEO CONSULTING",
          "WEB AGENCY",
        ];
  return (
    <div className="animate__content">
      <div className="container-fluid">
        <div className="animate__content__wraper">
          {brands?.map((brand, idx) => (
            <div
              key={idx}
              className={`animate__content__item  ${
                idx % 2 === 0 ? "animate__content__item--2" : ""
              }`}
            >
              <Image src={brandImage10} alt="" />
              <h3>{brand}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands5;
