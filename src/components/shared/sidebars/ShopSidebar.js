import getAllProducts from "@/libs/getAllProducts";
import Link from "next/link";
import CollpaseButton from "./widgets/CollpaseButton";

const filterAccordions = [
  {
    controllerName: "Availability",
    inputName: "availability",
    checks: ["In stock", "Out of stock"],
  },
  {
    controllerName: "Product type",
    inputName: "productType",
    checks: ["Chair", "Table"],
  },
  {
    controllerName: "Brand",
    inputName: "brand",
    checks: ["Apple", "Amazon"],
  },
  {
    controllerName: "Color",
    inputName: "color",
    checks: [
      "Black",
      "Blue",
      "Grey",
      "Pink",
      "Red",
      "Violet",
      "White",
      "Yellow",
    ],
  },
  {
    controllerName: "Size",
    inputName: "size",
    checks: ["S", "M", "L", "XL", "XXL"],
  },
];
const ShopSidebar = ({
  handleFilters,
  availability,
  type,
  brand,
  color,
  size,
  handleReset,
  category,
}) => {
  const allProducts = getAllProducts();

  return (
    <div className="col-xl-3 col-lg-4 col-md-12 column__custom__class">
      <CollpaseButton />

      <div className="sidebar-collapse-hide">
        <div
          className="shopsidebar"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <div className="shopsidebar__top">
            <h2>Filter:</h2>
            <div className="shopsidebar__remove">
              <button onClick={handleReset}>Remove all</button>
            </div>
          </div>
          <div className="shopsidebar__bitton">
            <button
              onClick={() => handleFilters(null, null, null, true)}
              className="default__button"
              href="#"
            >
              $0.00-$80.00
            </button>
          </div>

          {filterAccordions?.map(
            ({ controllerName, checks, inputName }, idx) => (
              <div key={idx} className="shopsidebar__widget">
                <details open>
                  <summary>{controllerName}</summary>
                  <div className="shopsidebar__list">
                    <ul>
                      {checks?.map((check, idx1) => (
                        <li key={idx1}>
                          <div className="shopsidebar__box">
                            <input
                              checked={
                                inputName === "availability"
                                  ? availability.includes(check) || false
                                  : inputName === "productType"
                                  ? type.includes(check) || false
                                  : inputName === "brand"
                                  ? brand.includes(check)
                                  : inputName === "color"
                                  ? color.includes(check) || false
                                  : inputName === "size"
                                  ? size.includes(check) || false
                                  : false
                              }
                              type="checkbox"
                              id={check}
                              onChange={(e) =>
                                handleFilters(e, inputName, check)
                              }
                            />
                            <label htmlFor={check}> {check}</label>
                          </div>
                          <Link href="#">
                            <span className="shopsidebar__number">
                              (
                              {
                                allProducts?.filter(
                                  ({
                                    availability,
                                    productType,
                                    brand,
                                    color,
                                    size,
                                  }) =>
                                    (inputName === "availability"
                                      ? availability
                                      : inputName === "productType"
                                      ? productType
                                      : inputName === "brand"
                                      ? brand
                                      : inputName === "color"
                                      ? color
                                      : inputName === "size"
                                      ? size
                                      : "") === check
                                )?.length
                              }
                              )
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
