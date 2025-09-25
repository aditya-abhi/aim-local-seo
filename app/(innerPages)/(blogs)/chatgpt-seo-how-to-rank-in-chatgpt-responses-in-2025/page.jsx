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
import ChatGPTSEOfaq from "@/components/blogs/faqs/ChatGPTSEOFaq";
export const metadata = {
  title: "How to Rank in ChatGpt Responses With ChatGpt SEO || AI Monitor",
  description:
    "Learn proven ChatGPT SEO strategies to rank your content in ChatGPT responses in 2025. Discover how AI impacts search and how to optimize for AI-driven answers.",
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
            pageName="ChatGPT SEO: How to Rank in ChatGPT Responses in 2025"
            src="/assets/images/blog/Chat-GPT-SEO.webp"
            publishedOn="Aug 08, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <ChatGPTSEO />
          <Author />
          <ChatGPTSEOfaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/chatgpt-seo-how-to-rank-in-chatgpt-responses-in-2025/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
