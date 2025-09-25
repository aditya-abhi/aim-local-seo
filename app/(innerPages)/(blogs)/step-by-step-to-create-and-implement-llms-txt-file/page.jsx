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
import LLMSTXTGuide from "@/components/blogs/LLMSTXTGuide";
import StepbyStepGuideFaq from "@/components/blogs/faqs/StepbyStepGuideFaq";
export const metadata = {
  title:
    "How to Create and Set Up an llms.txt File | Step by Step Guide || AI Monitor",
  description:
    "A clear, step-by-step tutorial on setting up an llms.txt file to manage large language model (LLM) access and permissions effectively.",
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
            pageName="Step by Step Guide: How to Create and Implement an llms.txt File"
            src="/assets/images/blog/ImplementllmsFile.webp"
            publishedOn="Apr 16, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <LLMSTXTGuide />
          <Author />
          <StepbyStepGuideFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/step-by-step-to-create-and-implement-llms-txt-file/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
