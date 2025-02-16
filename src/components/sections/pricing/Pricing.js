import PricingCard from "@/components/shared/cards/PricingCard";
import servcieBgImage3 from "@/assets/img/service/service__bg__3.png";
const Pricing = ({ plan, title, isDarkBg, isGrdient, tag, bg, isNotTag }) => {
  const plans = [
    [
      {
        id: 1,
        name: "BASIC PLAN",
        price: "$80.26",
        business: "Small Business",
        features: [
          "Initial Consultation",
          "Strategy Development",
          "Market Research",
          "Marketing Strategy",
          "Risk Management",
        ],
      },
      {
        id: 2,
        name: "SLIVER PLAN",
        price: "$90.26",
        business: "Mid Business",
        features: [
          "Initial Consultation",
          "Strategy Development",
          "Market Research",
          "Marketing Strategy",
          "Risk Management",
        ],
      },
      {
        id: 3,
        name: "GOLD PLAN",
        price: "$95.26",
        business: "Big Business",
        features: [
          "Initial Consultation",
          "Strategy Development",
          "Market Research",
          "Marketing Strategy",
          "Risk Management",
        ],
      },
      {
        id: 4,
        name: "POPULAR PLAN",
        price: "$99.99",
        business: "All Business",
        features: [
          "Initial Consultation",
          "Strategy Development",
          "Market Research",
          "Marketing Strategy",
          "Risk Management",
        ],
        isSpecial: true,
      },
    ],
    [
      {
        id: 1,
        name: "BASIC PLAN",
        price: "$380.26",
        business: "Small Business",
        features: [
          "Initial Consultation",
          "Strategy Development",
          "Market Research",
          "Marketing Strategy",
          "Risk Management",
        ],
      },
      {
        id: 2,
        name: "SLIVER PLAN",
        price: "$390.26",
        business: "Mid Business",
        features: [
          "Initial Consultation",
          "Strategy Development",
          "Market Research",
          "Marketing Strategy",
          "Risk Management",
        ],
      },
      {
        id: 3,
        name: "GOLD PLAN",
        price: "$395.26",
        business: "Big Business",
        features: [
          "Initial Consultation",
          "Strategy Development",
          "Market Research",
          "Marketing Strategy",
          "Risk Management",
        ],
      },
      {
        id: 4,
        name: "POPULAR PLAN",
        price: "$399.99",
        business: "All Business",
        features: [
          "Initial Consultation",
          "Strategy Development",
          "Market Research",
          "Marketing Strategy",
          "Risk Management",
        ],
        isSpecial: true,
      },
    ],
  ];
  return (
    <div
      className="pricing sp_top_120 sp_bottom_120 special__spacing"
      style={{
        background:
          bg === "white"
            ? ""
            : `${isDarkBg ? "var(--blackBlue)" : "var(--pinkcolor)"} url('${
                servcieBgImage3.src
              }')`,
      }}
      id="tb__pricing"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className={`section__title ${
                isDarkBg ? "section__title--3 sp_bottom_70" : "sp_bottom_50"
              } text-center  `}
            >
              {isNotTag ? (
                ""
              ) : (
                <div
                  className={`${
                    plan === 2
                      ? "section__title__button"
                      : "section__title__small"
                  } `}
                >
                  <span className={`${isGrdient ? "text__gradient" : ""}`}>
                    {tag ? tag : "PRICE & PLANNING"}
                  </span>
                </div>
              )}
              <div className="section__title__heading">
                <h3>
                  {title ? title : "DISCOVER OUR COMPETITIVE CONSULTING RATESS"}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <ul className="nav  pricing__tab" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="pricing__tab__link active"
                  data-bs-toggle="tab"
                  data-bs-target="#projects__one"
                  type="button"
                >
                  BILLED MONTHLY
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="pricing__tab__link"
                  data-bs-toggle="tab"
                  data-bs-target="#projects__two"
                  type="button"
                >
                  BILLED YEARLY
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content tab__content__wrapper" id="myTabContent">
          {plans?.map((plan, idx) => (
            <div
              key={idx}
              className={`tab-pane fade  ${idx === 0 ? "active show" : ""}`}
              id={`projects__${idx === 0 ? "one" : "two"}`}
              role="tabpanel"
              aria-labelledby={`projects__${idx === 0 ? "one" : "two"}`}
            >
              <div className="social__wrapper">
                <div className="row">
                  {plan?.map((planSingle, idx1) => (
                    <PricingCard key={idx1} plan={planSingle} />
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

export default Pricing;
