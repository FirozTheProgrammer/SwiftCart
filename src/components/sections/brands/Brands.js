import brandImage1 from "@/assets/img/brand/brand__1.png";
import brandImage2 from "@/assets/img/brand/brand__2.png";
import Image from "next/image";
const Brands = () => {
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
    <div className="brand sp_40" id="brand__area">
      <div className="container">
        <div className="brand__inner">
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

export default Brands;
