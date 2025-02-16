"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard2 from "@/components/shared/cards/ServiceCard2";
import getAllServices from "@/libs/getAllServices";
import serviceBgImage3 from "@/assets/img/service/service__bg__3.png";

const Services6 = () => {
  const services = getAllServices()?.slice(10, 13);
  const tabConrollers = [
    { id: 1, title: "STRATEGY" },
    { id: 2, title: "DEVELOPMENT" },
    { id: 3, title: "REPORTING" },
  ];
  const tabContents = [
    {
      id: 1,
      title: "Need Service, How may we help you?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      services: services?.slice(1, 3),
    },
    {
      id: 2,
      title: "Which Service Provided?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      services: services?.slice(0, 2),
    },
    {
      id: 3,
      title: "Discover Most Popular.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      services: services?.slice(1, 3),
    },
  ];
  return (
    <div
      className="pricing business__strategy sp_top_120 sp_bottom_120 special__spacing"
      style={{ background: `url('${serviceBgImage3.src}')` }}
      id="tb__strategy"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center  sp_bottom_50">
              <div className="section__title__heading">
                <h3>HERE LIES OUR BUSINESS STRATEGY.</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-content tab__content__wrapper business__strategy__wrapper"
          id="myTabContent"
        >
          <div className="row">
            <div
              className="col-xl-12"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <ul
                className="nav  pricing__tab business__strategy__tab"
                id="myTab"
                role="tablist"
              >
                {tabConrollers?.map(({ title, id }, idx) => (
                  <li key={idx} className="nav-item" role="presentation">
                    <button
                      className={`pricing__tab__link  ${
                        idx === 0 ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      data-bs-target={`#business__projects__${idx + 1}`}
                      type="button"
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {tabContents?.map(({ title, services, desc, id }, idx) => (
            <div
              key={idx}
              className={`tab-pane fade  ${idx === 0 ? "active show" : ""}`}
              id={`business__projects__${idx + 1}`}
              role="tabpanel"
              aria-labelledby={`projects__${idx + 1}`}
            >
              <div className="social__wrapper">
                <div className="row align-items-center">
                  <div
                    className="col-xl-4 col-lg-12 col-sm-12 col-12"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="section__title  section__title--2">
                      <div className="section__title__heading sp_bottom_20">
                        <h3>{title}</h3>
                      </div>
                      <div className="blog__4__section__title__text">
                        <p>{desc}</p>
                      </div>
                      <div className="section__title__button">
                        <ButtonPrimary
                          text={"   VIEW ARCHIVE POST"}
                          path={"/blogs"}
                        />
                      </div>
                    </div>
                  </div>
                  {services?.map((service, idx1) => (
                    <ServiceCard2 key={idx1 + 10} service={service} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services6;
