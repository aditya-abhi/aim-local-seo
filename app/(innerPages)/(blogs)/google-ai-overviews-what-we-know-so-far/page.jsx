import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import Blog1Faqs from "@/components/blogs/faqs/Blog1Faqs";
import NextPrevBlogs from "@/components/blogs/components/NextPrevBlogs";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
import WhatWeKnowAboutGoogleAIOverview from "@/components/blogs/WhatWeKnowAboutGoogleAIOverview";
export const metadata = {
  title: "Google AI Overviews: Key Insights &amp; Latest Updates || AI Monitor",
  description:
    "Explore Google AI Overviews, how they work, their impact on search results, and what users and businesses need to know so far.",
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
            pageName="Google AI Overviews: What We Know So Far"
            src="/assets/images/blog/GoogleAIOverview.webp"
            publishedOn="May 14, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <WhatWeKnowAboutGoogleAIOverview />
          <Author />
          {/* <Blog1Faqs /> */}
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={"/google-ai-overviews-what-we-know-so-far/"}
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
