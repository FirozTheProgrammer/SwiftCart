import React from "react";
import BlogSearch from "./widgets/BlogSearch";
import BlogCategories from "./widgets/BlogCategories";
import RecentPosts from "./widgets/RecentPosts";
import PopularBlogTags from "./widgets/PopularBlogTags";
import Download from "./widgets/Download";

const BlogSidebar = ({ sidebar }) => {
  return (
    <div className="service__details__sidebar sidebar">
      <BlogSearch />

      <BlogCategories />

      {sidebar === "faq" || sidebar === "service" ? "" : <RecentPosts />}

      {sidebar === "faq" || sidebar === "service" ? "" : <PopularBlogTags />}
      {sidebar === "service" ? <Download /> : ""}
    </div>
  );
};

export default BlogSidebar;
