import brandImage3 from "@/assets/img/brand/brand__3.png";
import Image from "next/image";
import React from "react";

const CounterUp = () => {
  const items = [
    {
      id: 1,
      title: "Total products",
      img: null,
      num: 835,
      sym: "+",
      duration: 1500,
      imgDuration: null,
    },
    {
      id: 2,
      title: "Project Completed",
      img: brandImage3,
      num: 6246,
      sym: "+",
      duration: 2000,
      imgDuration: 1800,
    },
    {
      id: 3,
      title: "Happy Customers",
      img: brandImage3,
      num: 2000,
      sym: "+",
      duration: 2400,
      imgDuration: 2200,
    },
    {
      id: 4,
      title: "Team Members",
      img: brandImage3,
      num: 60,
      sym: "+",
      duration: 2800,
      imgDuration: 2600,
    },
  ];

  return (
    <div className="facts sp_40">
      <div className="container">
        <div className="facts__inner" id="funfactId">
          {items?.map(
            ({ title, img, num, sym, duration, imgDuration }, idx) => (
              <React.Fragment key={idx}>
                {img ? (
                  <div
                    key={idx + 5}
                    className="facts__single"
                    data-aos="fade-up"
                    data-aos-duration={imgDuration}
                  >
                    <Image src={img} alt="" />
                  </div>
                ) : (
                  ""
                )}
                <div
                  key={idx}
                  className="facts__single text-center"
                  data-aos="fade-up"
                  data-aos-duration={duration}
                >
                  <div className="facts__single__counter">
                    <div className="counter__number">
                      <span
                        className="counter js-counter"
                        data-count={`${num}`}
                      >
                        {num}
                      </span>
                      {sym}
                    </div>
                    <p>{title}</p>
                  </div>
                </div>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
