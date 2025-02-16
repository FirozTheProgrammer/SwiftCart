import ProductCard from "@/components/shared/cards/ProductCard";
import getAllProducts from "@/libs/getAllProducts";
import React from "react";

const PopularProducts = ({ id }) => {
  const products = getAllProducts();
  const tabControllers = ["New Collection", "Hot Sale", "Best Selling"];
  const tabContents = [
    [...products?.filter(({ collection }) => collection === "new").slice(0, 4)],
    [
      ...products
        ?.filter(({ collection }) => collection === "hot sale")
        .slice(0, 4),
    ],
    [
      ...products
        ?.filter(({ collection }) => collection === "best selling")
        .slice(0, 4),
    ],
  ];
  return (
    <div
      className="tabcollectionarea sp_bottom_140"
      id={id ? id : "popular__products"}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center sp_bottom_40">
              <div className="section__title__button">
                <span className="text__gradient ">Popular Collections</span>
              </div>
              <div className="section__title__heading">
                <h3>AWESOME COLLECTIONS</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 sp_bottom_30">
            <ul className="nav tabcollectionarea__item__wrap tabcollectionarea__button__area text-center">
              {tabControllers?.map((controller, idx) => (
                <li
                  key={idx}
                  className="tabcollectionarea__product__item"
                  role="presentation"
                >
                  <button
                    className={`tabcollectionarea__product__item__link ${
                      idx === 0 ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    data-bs-target={`#projects__${idx + 1}`}
                    type="button"
                  >
                    {controller}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tab-content tab__content__wrapper" id="myTabContent">
          {tabContents?.map((contents, idx) => (
            <div
              key={idx}
              className={`tab-pane fade ${idx === 0 ? "active show " : ""}`}
              id={`projects__${idx + 1}`}
              role="tabpanel"
              aria-labelledby={`projects__${idx + 1}`}
            >
              <div className="social__wrapper">
                <div className="row">
                  {contents?.map((product, idx) => (
                    <div
                      key={idx + 3}
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 column__custom__class"
                    >
                      <ProductCard product={product} />
                    </div>
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

export default PopularProducts;
