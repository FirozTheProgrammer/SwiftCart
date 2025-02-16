import serviceSmallImage1 from "@/assets/img/service/service__small__img.png";
import serviceBgImage from "@/assets/img/service/service__bg__img.png";
import ServiceCard from "@/components/shared/cards/ServiceCard";
import Image from "next/image";
import getAllServices from "@/libs/getAllServices";

const OfferedServices = ({ service, pb }) => {
  const services = getAllServices()?.slice(6, 10);
  return (
    <div
      className={`service sp_top_140 special__spacing ${
        pb ? pb : "sp_bottom_330"
      }`}
      id="service__area"
      style={{ background: `var(--pinkcolor) url('${serviceBgImage.src}')` }}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_90">
              {service === 2 ? (
                <div className="section__title__button">
                  <span>Our Service</span>
                </div>
              ) : (
                ""
              )}
              <div className="section__title__heading">
                <h3>WE OFFER CONSULTANCY SERVICES.</h3>
              </div>
              <div className="section__title__text">
                <p>
                  Sagittis purus sit amet volutpat consequat mauris nunc congue
                  and tortor dignissim
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {services?.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
      <div className="section__strock__line__animation">
        <Image
          className="ssla__animation service__line__animation"
          src={serviceSmallImage1}
          alt=""
        />
      </div>
    </div>
  );
};

export default OfferedServices;
