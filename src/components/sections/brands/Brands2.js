import Image from "next/image";
import brandImage1 from "@/assets/img/brand/brand__1.png";
import brandImage2 from "@/assets/img/brand/brand__2.png";

const Brands2 = ({ isRotate }) => {
  const brands = [
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
    brandImage1,
    brandImage2,
  ];
  return (
    <div
      className={`brand brand--2 sp_40 overflow-hidden ${
        isRotate ? " brand__roated " : ""
      }`}
    >
      <div className="brand__inner brand__animate">
        {brands?.map((brand, idx) => (
          <div key={idx} className="brand__single">
            <Image src={brand} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands2;
