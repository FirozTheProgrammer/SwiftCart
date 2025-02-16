import serviceBgImage from "@/assets/img/service/service__bg__4.png";

import getAllServices from "@/libs/getAllServices";
import ServiceCard3 from "@/components/shared/cards/ServiceCard3";

const Services3 = () => {
  const services = getAllServices()?.slice(13, 17);
  return (
    <div
      className="service sp_top_140 sp_bottom_140 special__spacing"
      id="service__area"
      style={{ background: `url('${serviceBgImage.src}')` }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title section__title--3 text-center sp_bottom_80">
              <div className="section__title__button">
                <span>Our Service</span>
              </div>
              <div className="section__title__heading">
                <h3>WE PROVIDE HIGHT QUALITY CONSULTING SERVICE</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {services?.map((service, idx) => (
            <div
              key={idx}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="fade-up"
              data-aos-duration={service.duration}
            >
              <ServiceCard3 service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services3;
