"use client";

import { useState } from "react";

const usePagination = (filteredItems, currentLimit) => {
  // stats
  const [currentpage, setCurrentpage] = useState(0);

  // pagination related
  const limit = currentLimit ? currentLimit : 6;
  const skip = limit * currentpage;
  const currentItems = filteredItems?.slice(skip, skip + limit);
  const totalPages = Math.ceil(filteredItems?.length / limit);
  const paginationItems = [...Array(totalPages)];

  // hande currentpage
  const handleCurrentPage = (e, id) => {
    e.preventDefault();
    setCurrentpage(id);
  };
  return {
    currentItems,
    currentpage,
    setCurrentpage,
    paginationItems,
    totalPages,
    handleCurrentPage,
    firstItem: skip + 1,
    lastItem: skip + limit,
  };
};

export default usePagination;
