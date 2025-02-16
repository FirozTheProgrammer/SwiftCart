import BlogDetailsPrimary from "@/components/sections/blogDetails/BlogDetailsPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import React from "react";

const BlogDetailsMain = () => {
  return (
    <main>
      <HeroInner title={"Blog Details"} currentItem={"Blog Details"} />
      <BlogDetailsPrimary />
    </main>
  );
};

export default BlogDetailsMain;
