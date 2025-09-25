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
import FeedbacktoLLM from "@/components/blogs/FeedbacktoLLM";
import FeedbacktoLLMFaq from "@/components/blogs/faqs/FeedbacktoLLMFaq";
export const metadata = {
  title: "AI Got Your Brand Wrong? Feedback to LLM Fixes It || AI Monitor",
  description:
    "Stop missing out on AI search. Optimize GEO with strategic Feedback to LLM. Learn how to train AI to prioritize YOUR brand in search results. Get ahead now!",
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
            pageName="AI Got Your Brand Wrong? Feedback to LLM Fixes It"
            src="/assets/images/blog/Feedback-to-LLM.webp"
            publishedOn="May 27, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <FeedbacktoLLM />
          <Author />
          <FeedbacktoLLMFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
