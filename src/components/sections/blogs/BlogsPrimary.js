"use client";
import BlogCard3 from "@/components/shared/cards/BlogCard3";
import Nodata from "@/components/shared/no-data/Nodata";
import Pagination from "@/components/shared/paginations/Pagination";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import filterItems from "@/libs/filterItems";
import getAllBlogs from "@/libs/getAllBlogs";
import CommonContext from "@/providers/CommonContext";
import { useSearchParams } from "next/navigation";

import { useEffect } from "react";

const BlogsPrimary = () => {
  const allBlogs = getAllBlogs()?.filter(({ id }) => id > 3);
  const category = useSearchParams().get("category");
  const tag = useSearchParams().get("tag");

  // get searched blogs
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

  // filterd blogs
  const filteredBlogs =
    !isShowSearch || searchString === null || tag || category
      ? !previousSearchedItems || tag || category
        ? filterItems(
            allBlogs,
            category ? "category" : tag ? "tag" : "default",
            category ? category : tag ? tag : "default"
          )
        : previousSearchedItems
      : searchedItems;
  //get pagination and final blogs
  const {
    currentItems: blogs,
    currentpage,
    setCurrentpage,
    paginationItems,
    totalPages,
    handleCurrentPage,
  } = usePagination(filteredBlogs);
  useEffect(() => {
    setCurrentpage(0);
  }, [tag, category, searchString, setCurrentpage]);
  return (
    <div
      className="service__details sp_top_140 sp_bottom_140 special__spacing"
      id="blogs"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
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
          {/* blogs */}
          <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
            <div className="row">
              {!blogs?.length ? (
                <Nodata text={"No Product"} />
              ) : (
                blogs?.map((blog, idx) => (
                  <BlogCard3 key={idx} blog={blog} bg={"pink"} />
                ))
              )}
            </div>
            {totalPages > 1 ? (
              <Pagination
                items={paginationItems}
                handleCurrentPage={handleCurrentPage}
                currenIndex={currentpage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPrimary;
