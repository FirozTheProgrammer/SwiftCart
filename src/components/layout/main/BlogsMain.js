import HeroInner from "@/components/sections/hero-banners/HeroInner";
import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";

const BlogsMain = () => {
  return (
    <main>
      <HeroInner title={"Blog"} currentItem={"Blog"} />
      <BlogsPrimary />
    </main>
  );
};

export default BlogsMain;
