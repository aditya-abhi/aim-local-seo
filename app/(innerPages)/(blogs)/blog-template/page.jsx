import BlogTemplate from "@/components/blogs/BlogTemplate";
// import Breadcumb3 from "@/components/blogs/components/Head";
// import Topbar from "@/components/headers/Topbar";
import React from "react";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import Blog1Faqs from "@/components/blogs/faqs/Blog1Faqs";
import NextPrevBlogs from "@/components/blogs/components/NextPrevBlogs";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
export const metadata = {
  title:
    "Blog Template || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <>
      <div className="theme-3 ">
        <div
          className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 disable-cursor"
          style={{ overflowX: "clip" }}
        >
          {/* <Topbar /> */}
          <Header7 staticPosition={true} />
          <div id="wrapper" className="wrap">
            <Head
              pageName="Blog Template"
              src="/assets/images/blog/blog-1.webp"
              publishedOn="May 27, 2025"
              updatedOn=""
            />
            <Experiment1 />
            <AuthorBioShort />
            <BlogTemplate />
            <Author />
            <Blog1Faqs />
            <Experiment2 />
            <NextPrevBlogs />
            <RelatedBlogs />
            <Footer7 />
          </div>
        </div>
      </div>
    </>
  );
}
