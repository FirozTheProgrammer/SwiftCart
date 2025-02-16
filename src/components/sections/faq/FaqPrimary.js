"use client";
import Image from "next/image";
import contactImage2 from "@/assets/img/contact/contact__2.png";
import useSearch from "@/hooks/useSearch";
import CommonContext from "@/providers/CommonContext";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import getAllBlogs from "@/libs/getAllBlogs";

const FaqPrimary = () => {
  const allBlogs = getAllBlogs();
  const {
    searchString,
    searchedItems,
    previousSearchedItems,
    isShowSearch,
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    isShowQuickSearchResult,
    setIsShowQuickSearchResult,
  } = useSearch(allBlogs, "/blogs");
  const items = [
    "What is business consulting?",
    "How do I choose the right consultant?",
    "What services do business consultants offer?",
    "How do I choose the right consultant?",
    "What is the cost of business consulting?",
    "How long do consulting projects typically last?",
    "Can consultants help with startup businesses?",
    "Do consultants guarantee results?",
  ];
  return (
    <div className="faq__area sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
            <CommonContext
              value={{
                searchedItems,
                handleSearch,
                handleSearchString,
                startSearch,
                closeSearch,
                isShowSearch,
                isShowQuickSearchResult,
                setIsShowQuickSearchResult,
              }}
            >
              <BlogSidebar sidebar="faq" />
            </CommonContext>
          </div>
          <div
            className="col-xl-8 col-lg-8 col-md-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="faq__accordion">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                {items?.map((item, idx) => (
                  <div key={idx} className="accordion-item">
                    <h2
                      className="accordion-header"
                      id={`panelsStayOpen-heading${idx + 1}`}
                    >
                      <button
                        className={`accordion-button ${
                          idx === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${idx + 1}`}
                        aria-expanded={idx === 0 ? true : false}
                        aria-controls={`panelsStayOpen-collapse${idx + 1}`}
                      >
                        {item}
                      </button>
                    </h2>
                    <div
                      id={`panelsStayOpen-collapse${idx + 1}`}
                      className={`accordion-collapse collapse ${
                        idx === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`panelsStayOpen-heading${idx + 1}`}
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="accordion__text">
                              <p>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="accordion__img">
                              <Image src={contactImage2} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPrimary;
