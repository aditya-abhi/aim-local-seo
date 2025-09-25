import Blog1 from "@/components/blogs/blog-1";
import Newsletter from "@/components/blogs/Newsletter";
import BlogSidebarLeft from "@/components/blog-old/BlogSidebarLeft";
import Footer1 from "@/components/footers/Footer1";
import Footer7 from "@/components/footers/Footer7";
import Header1 from "@/components/headers/Header1";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title:
    "Blog 1 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default async function BlogDetail1(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <div className="theme-4">
      <div className="page-wrapper uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-700 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <Blog1 blogItem={blogItem} />
          {/* <BlogSidebarLeft /> */}
          <Newsletter />
        </div>
        <Footer7 />
      </div>
    </div>
  );
}
