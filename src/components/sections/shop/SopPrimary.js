"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import Nodata from "@/components/shared/no-data/Nodata";
import Pagination from "@/components/shared/paginations/Pagination";
import SortInputs from "@/components/shared/shop/SortInputs";
import ShopSidebar from "@/components/shared/sidebars/ShopSidebar";
import usePagination from "@/hooks/usePagination";
import getAllProducts from "@/libs/getAllProducts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const allProductsBeforeFilter = getAllProducts();
const getAllFilteredProducts = (filterObject, isReset) => {
  const {
    availability: availabilityNew,
    type,
    brand: brandNew,
    color: colorNew,
    size: sizeNew,
    category: newCategory,
    offer: newOffer,
  } = filterObject;

  const filteredProducts = isReset
    ? allProductsBeforeFilter
    : allProductsBeforeFilter?.filter(
        ({
          availability,
          productType,
          brand,
          color,
          size,
          type: category,
          offer,
        }) =>
          (!availabilityNew?.length ||
            availabilityNew?.includes(availability)) &&
          (!type?.length || type.includes(productType)) &&
          (!brandNew?.length || brandNew?.includes(brand)) &&
          (!colorNew?.length || colorNew?.includes(color)) &&
          (!sizeNew?.length || sizeNew?.includes(size)) &&
          (!newCategory?.length ||
            newCategory?.includes(category.toLowerCase())) &&
          (!newOffer?.length ||
            newOffer?.includes(offer.toLowerCase()?.split(" ").join("-")))
      );
  return filteredProducts;
};
const getSortedProduct = (allProducts, sortInput, priceRange) => {
  switch (sortInput) {
    case "featured":
      return [...allProducts];
    case "best-selling":
      return [...allProducts]?.filter(({ bestSeller }) => bestSeller);
    case "title-ascending":
      return [...allProducts]?.sort((a, b) => a.title.localeCompare(b.title));
    case "title-descending":
      return [...allProducts]?.sort((a, b) => b.title.localeCompare(a.title));
    case "price-ascending":
      return [...allProducts]?.sort(
        (a, b) =>
          (a.disc ? a.price * ((100 - a.disc) / 100) : a.price) -
          (b.disc ? b.price * ((100 - b.disc) / 100) : b.price)
      );
    case "price-descending":
      return [...allProducts]?.sort(
        (a, b) =>
          (b.disc ? b.price * ((100 - b.disc) / 100) : b.price) -
          (a.disc ? a.price * ((100 - a.disc) / 100) : a.price)
      );
    case "created-descending":
      return [...allProducts]?.sort((a, b) => a.date - b.date);
    case "created-ascending":
      return [...allProducts]?.sort((a, b) => b.date - a.date);
    default:
      return [...allProducts].filter(({ price }) => {
        return price > priceRange[0] && price <= priceRange[1];
      });
  }
};
const SopPrimary = ({ listIndex }) => {
  const category = useSearchParams().get("category");
  const offer = useSearchParams().get("offer");
  const initialActiveIndex = category || offer ? 2 : listIndex;
  // stats
  const [availability, setAvailability] = useState([]);
  const [type, setType] = useState([]);
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [reset, setReset] = useState(false);
  const [sortInput, setSortInput] = useState("featured");
  const [isPriceRange, setIsPriceRange] = useState(false);
  const [currentListIndex, setCurrentListIndex] = useState(initialActiveIndex);
  const isPageOne = JSON.stringify({
    type,
    brand,
    color,
    size,
    availability,
    sortInput,
    category,
    isPriceRange,
    currentListIndex,
    reset,
    offer,
  });
  const filterIputs = {
    availability,
    type,
    brand,
    color,
    size,
    category: category ? [category] : [],
    offer: offer ? [offer] : [],
  };
  const allProducts = getAllFilteredProducts(filterIputs, reset);
  const filteredProducts = getSortedProduct(
    allProducts,
    isPriceRange ? "no-input" : sortInput,
    isPriceRange ? [0, 80] : null
  );
  const limit = currentListIndex === 0 ? 6 : currentListIndex === 1 ? 9 : 16;
  const totalProducts = filteredProducts?.length;
  const tabControllers = [
    {
      id: 1,
      name: "grid__view",
    },
    {
      id: 2,
      name: "list_view",
    },
    {
      id: 3,
      name: "list_four",
    },
  ];
  // handle filterProduct
  const filterItem = (e, ps, check) => {
    return e.target.checked
      ? [check, ...ps]
      : [...ps.filter((pevCheck, idx) => pevCheck !== check)];
  };

  const handleFilters = (e, inputName, check, isRange) => {
    setReset(false);
    if (isRange) {
      setIsPriceRange(true);
    } else {
      switch (inputName) {
        case "availability":
          return setAvailability((ps) => filterItem(e, ps, check));
        case "productType":
          return setType((ps) => filterItem(e, ps, check));
        case "brand":
          return setBrand((ps) => filterItem(e, ps, check));
        case "color":
          return setColor((ps) => filterItem(e, ps, check));
        case "size":
          return setSize((ps) => filterItem(e, ps, check));
      }
    }
  };
  const handleReset = () => {
    setAvailability([]);
    setType([]);
    setColor([]);
    setBrand([]);
    setSize([]);
    setReset(true);
    setIsPriceRange(false);
  };
  //get pagination and final blogs
  const {
    currentItems: products,
    currentpage,
    setCurrentpage,
    paginationItems,
    totalPages,
    handleCurrentPage,
    firstItem,
    lastItem,
  } = usePagination(filteredProducts, limit);
  useEffect(() => {
    setCurrentpage(0);
  }, [isPageOne, setCurrentpage]);

  return (
    <section className="shop__page__wrap sp_top_100 sp_bottom_140" id="shop">
      <div className="container">
        <div className="row row__custom__class">
          <div className="col-xl-12 column__custom__class">
            <div
              className="shoptab"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="shoptab__inner nav">
                <ul className="nav" id="myTab" role="tablist">
                  {tabControllers?.map(({ id, name }, idx) => (
                    <li
                      onClick={() => setCurrentListIndex(idx)}
                      key={idx}
                      className={`nav-item  `}
                      role="presentation"
                      style={{ marginRight: idx !== 2 ? "5px" : "" }}
                    >
                      <button
                        data-bs-toggle="tab"
                        data-bs-target={`#${name}`}
                        type="button"
                        className={initialActiveIndex === idx ? "active" : ""}
                      >
                        {id === 1 ? (
                          <>
                            {" "}
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 5.5 12.5"
                            >
                              <defs></defs>
                              <defs></defs>
                              <g dataname="Layer 2">
                                <g dataname="Layer 1">
                                  <g dataname="shop page">
                                    <g id="Group-10">
                                      <path
                                        d="M.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 01.75 0z"
                                        className="cls-1"
                                      ></path>
                                      <path
                                        d="M4.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 014.75 0z"
                                        className="cls-1"
                                        dataname="Rectangle"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>{" "}
                          </>
                        ) : id === 2 ? (
                          <>
                            <svg
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 9.5 12.5"
                            >
                              <defs></defs>
                              <defs>
                                <style>{"fill-rule:evenodd"}</style>
                              </defs>
                              <g dataname="Layer 2">
                                <g dataname="Layer 1">
                                  <g dataname="shop page">
                                    <g id="Group-16">
                                      <path
                                        d="M.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 01.75 0z"
                                        className="cls-1"
                                      ></path>
                                      <path
                                        d="M4.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 014.75 0z"
                                        className="cls-1"
                                        dataname="Rectangle"
                                      ></path>
                                      <path
                                        d="M8.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 018.75 0z"
                                        className="cls-1"
                                        dataname="Rectangle"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>{" "}
                          </>
                        ) : (
                          <svg
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 13.5 12.5"
                          >
                            <defs></defs>
                            <defs>
                              <style>{"fill-rule:evenodd"}</style>
                            </defs>
                            <g dataname="Layer 2">
                              <g dataname="Layer 1">
                                <g dataname="shop page">
                                  <g id="_4_col" dataname="4_col">
                                    <path
                                      d="M.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 01.75 0z"
                                      className="cls-1"
                                    ></path>
                                    <path
                                      d="M4.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 014.75 0z"
                                      className="cls-1"
                                      dataname="Rectangle"
                                    ></path>
                                    <path
                                      d="M8.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11A.76.76 0 018.75 0z"
                                      className="cls-1"
                                      dataname="Rectangle"
                                    ></path>
                                    <path
                                      id="Rectangle-4"
                                      d="M12.75 0a.76.76 0 01.75.75v11a.76.76 0 01-.75.75.76.76 0 01-.75-.75v-11a.76.76 0 01.75-.75z"
                                      className="cls-1"
                                      dataname="Rectangle"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shoptab__shoing__wrap">
                <SortInputs
                  sortInput={sortInput}
                  setSortInput={setSortInput}
                  setIsPriceRange={setIsPriceRange}
                />
                <p>
                  Showing {firstItem} -{" "}
                  {lastItem > totalProducts ? totalProducts : lastItem} of{" "}
                  {totalProducts} results{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row row__custom__class">
          {category || offer ? (
            ""
          ) : (
            <ShopSidebar
              handleFilters={handleFilters}
              size={size}
              availability={availability}
              color={color}
              type={type}
              brand={brand}
              handleReset={handleReset}
              category={category}
            />
          )}

          <div
            className={`${
              category || offer ? "" : "col-xl-9 col-lg-8 col-md-12"
            } column__custom__class `}
          >
            {!products?.length ? (
              <Nodata text={"No Product"} />
            ) : (
              <div
                className="tab-content"
                id="myTabContent"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div
                  className={`tab-pane fade  ${
                    initialActiveIndex === 0 ? "tab-pane fade active show" : ""
                  }`}
                  id="grid__view"
                >
                  <div className="row row__custom__class">
                    {products?.map((product, idx) => (
                      <div
                        key={idx}
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 column__custom__class"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`tab-pane fade  ${
                    initialActiveIndex === 1 ? "tab-pane fade active show" : ""
                  }`}
                  id="list_view"
                >
                  <div className="row row__custom__class">
                    {products?.map((product, idx) => (
                      <div
                        key={idx}
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 column__custom__class"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`tab-pane fade  ${
                    initialActiveIndex === 2 ? "tab-pane fade active show" : ""
                  }`}
                  id="list_four"
                >
                  <div className="row row__custom__class">
                    {products?.map((product, idx) => (
                      <div
                        key={idx}
                        className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 column__custom__class"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {totalPages < 2 ? (
              ""
            ) : (
              <Pagination
                items={paginationItems}
                currenIndex={currentpage}
                handleCurrentPage={handleCurrentPage}
                path={"shop"}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SopPrimary;
