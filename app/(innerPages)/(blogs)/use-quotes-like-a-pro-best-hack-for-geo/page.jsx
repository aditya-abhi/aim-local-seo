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
import ChatGPTSEO from "@/components/blogs/ChatGPT-SEO";
import BestHackforGEO from "@/components/blogs/BestHackforGEO";
import UseQuotesLikeProFaq from "@/components/blogs/faqs/UseQuotesLikeProFaq";
export const metadata = {
  title: "Use Quotes like a pro | Best hack for GEO in 2025 || AI Monitor",
  description:
    "Use quotes wisely—your secret weapon to surpass competitors, refine search visibility, and align perfectly with AI Algorithms in 2025.",
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
            pageName="Use Quotes Like a Pro | Best Hack for GEO in 2025"
            src="/assets/images/blog/BestHackforGEO.webp"
            publishedOn="May 21, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <BestHackforGEO />
          <Author />
          <UseQuotesLikeProFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={"/use-quotes-like-a-pro-best-hack-for-geo/"}
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
