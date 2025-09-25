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
import WhatisAEO from "@/components/blogs/WhatisAEO";
import WhatisAEO2 from "@/components/blogs/WhatisAEO2";
import WhatisAEO3 from "@/components/blogs/WhatisAEO3";
import WhatisAEOFaq from "@/components/blogs/faqs/WhatisAEOFaq";
export const metadata = {
  title:
    "What is Answer Engine Optimization? Future of SEO in 2025 || AI Monitor",
  description:
    "Discover Answer Engine Optimization (AEO) and how it will shape the future of SEO in 2025. Learn how AI-driven search is changing rankings and online visibility.",
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
            pageName="Answer Engine Optimization (AEO) in 2025: The Complete Guide to Dominating AI Search
"
            src="/assets/images/blog/what-is-aeo.webp"
            publishedOn="Feb 19, 2025"
            updatedOn="Sep 15, 2025"
          />
          <Experiment1 />
          <AuthorBioShort />
          <WhatisAEO />
          {/* <WhatisAEO2 /> */}
          {/* <WhatisAEO3 /> */}
          <Author />
          <WhatisAEOFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={"/what-is-answer-engine-optimization/"}
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
