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
import LLMvsGenerativeAI from "@/components/blogs/LLMvsGenerativeAI";
import LLMvsGenerativeAIFaq from "@/components/blogs/faqs/LLMvsGenerativeAIFaq";
export const metadata = {
  title:
    "From Text to Canvas: Ultimate Battle of LLM vs Generative AI || AI Monitor",
  description:
    "LLM vs Generative AI: What’s the difference? Get actionable insights, case studies, and ethical tips to harness AI’s creative and linguistic power.",
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
            pageName="From Text to Canvas: Ultimate Battle of LLM vs Generative AI"
            src="/assets/images/blog/LLMvsGenerativeAI.webp"
            publishedOn="Apr 30, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <LLMvsGenerativeAI />
          <Author />
          <LLMvsGenerativeAIFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={"/llm-vs-generative-ai-what-should-you-pick/"}
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
