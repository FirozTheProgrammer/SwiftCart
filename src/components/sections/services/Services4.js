import getAllServices from "@/libs/getAllServices";
import Image from "next/image";
import Link from "next/link";
import serviceBgImage3 from "@/assets/img/service/service__bg__3.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard4 from "@/components/shared/cards/ServiceCard4";
const Services4 = ({ title, desc, service }) => {
  const services = getAllServices().slice(17, 21);
  return (
    <div
      className="service sp_top_120 sp_bottom_130 special__spacing"
      id="service__area"
      style={{ background: `var(--pinkcolor) url('${serviceBgImage3.src}')` }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center sp_bottom_50">
              {service === 2 ? (
                ""
              ) : (
                <div className="section__title__small">
                  <span>OUR SECTION</span>
                </div>
              )}
              <div className="section__title__heading">
                <h3>
                  {title ? title : "OUR MOST POPULAR CONSULTING SERVICE."}
                </h3>
              </div>
              {desc ? (
                <div className="section__title__text">
                  <p>{desc}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="row">
          {services?.map((service, idx) => (
            <ServiceCard4 key={idx} service={service} />
          ))}

          {service === 2 ? (
            ""
          ) : (
            <div
              className="col-xl-12"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="service__bitton__4 text-center">
                <ButtonPrimary text={"OTHER SERVICE"} path={"/services"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services4;
