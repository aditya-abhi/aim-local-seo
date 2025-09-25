import Newsletter from "@/components/blogs/Newsletter";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import AEOTools from "@/components/blogs/AEOTools";
import AEOToolsNew from "@/components/blogs/AEOToolsNew";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import Blog1Faqs from "@/components/blogs/faqs/Blog1Faqs";
import NextPrevBlogs from "@/components/blogs/components/NextPrevBlogs";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
import AEOToolsNewCopy from "@/components/blogs/AEOToolsNewCopy";
import WhatisAEO from "@/components/blogs/WhatisAEO";
import AEOvsSEO from "@/components/blogs/AEOvsSEO";
import AEOvsSEOFaq from "@/components/blogs/faqs/AEOvsSEOFaq";
export const metadata = {
  title:
    "AEO vs SEO | Best Explanation and Key Differences in 2025 || AI Monitor",
  description:
    "Explore the key differences between AEO and SEO in 2025. Learn how each strategy impacts search rankings and which is best for your business.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="theme-3 ">
        <div
          className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 disable-cursor"
          style={{ overflowX: "clip" }}
        >
          <Header7 />
          <Head
            pageName="AEO vs SEO: Answer Engine Optimization vs Search Engine Optimization Explained 
"
            src="/assets/images/blog/AEOvsSEO.webp"
            publishedOn="Mar 17, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <AEOvsSEO />
          <Author />
          <AEOvsSEOFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
