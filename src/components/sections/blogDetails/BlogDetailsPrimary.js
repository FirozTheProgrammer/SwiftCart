"use client";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import useSearch from "@/hooks/useSearch";
import getAllBlogs from "@/libs/getAllBlogs";
import CommonContext from "@/providers/CommonContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetailsPrimary = () => {
  const { id: currentId } = useParams();

  const blogs = getAllBlogs();
  const blog = blogs.find(({ id }) => id === parseInt(currentId));
  const { title, img, publishDate } = blog;
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
  } = useSearch(blogs, "/blogs");
  return (
    <div className="blog__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
              <BlogSidebar />
            </CommonContext>
          </div>
          <div
            className="col-xl-8 col-lg-8 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="blog__details__wrapper">
              <div
                className="blog__details__img__wrapper"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="blog__details__img">
                  <Image src={img} alt="" placeholder="blur" />
                </div>
                <div className="blog__details__small__button">
                  <span>{publishDate}</span>
                </div>
              </div>

              <div
                className="blog__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>{title}</h4>
              </div>
              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                className="blog__details__list"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </li>
                  <li>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </li>
                  <li>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi{" "}
                  </li>
                  <li>
                    Commodo consequat. Duis aute irure dolor in reprehenderit in{" "}
                  </li>
                  <li>
                    Voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </li>
                </ul>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                className="blog__details__heading"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>
                  The ROI of Business Consulting: Why {"It's"} Worth the
                  Investment
                </h4>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                className="blog__details__text blog__details__text--2"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation”.
                </p>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                className="blog__details__list"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                  </li>
                  <li>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </li>
                  <li>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi{" "}
                  </li>
                  <li>
                    Commodo consequat. Duis aute irure dolor in reprehenderit in{" "}
                  </li>
                  <li>
                    Voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </li>
                </ul>
              </div>
              <div
                className="blog__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                className="blog__details__social__icon"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <ul>
                  <div className="blog__details__share">
                    <span>Share Post:</span>
                  </div>

                  <li>
                    <a
                      className="common__gradient__bg"
                      href="https://www.facebook.com/"
                    >
                      <span>
                        <i className="icofont-facebook"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="common__gradient__bg" href="https://x.com/">
                      <span>
                        <i className="icofont-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="common__gradient__bg"
                      href="https://www.skype.com/"
                    >
                      <span>
                        <i className="icofont-skype"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="common__gradient__bg"
                      href="https://www.linkedin.com/"
                    >
                      <span>
                        <i className="icofont-linkedin"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPrimary;
