import Image from "next/image";
import brandImage1 from "@/assets/img/brand/brand__1.png";
import brandImage2 from "@/assets/img/brand/brand__2.png";

const Brands4 = ({ type }) => {
  const brands = [
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
  ];
  return (
    <div
      className={`brand__4  ${type === "footer" ? "brand__3" : ""}`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="brand__inner brand__inner--2">
          {brands?.map((brand, idx) => (
            <div key={idx} className="brand__single">
              <Image src={brand} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Brands4;
