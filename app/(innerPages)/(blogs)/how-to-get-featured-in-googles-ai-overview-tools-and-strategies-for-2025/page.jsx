import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import NextPrevBlogs from "@/components/blogs/components/NextPrevBlogs";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
import FeaturedinGoogleAI from "@/components/blogs/FeaturedinGoogleAI";
import FeaturedinGoogleAIFaq from "@/components/blogs/faqs/FeaturedinGoogleAIFaq";
export const metadata = {
  title: "How to Get Featured in Google's AI Overview || AI Monitor",
  description:
    "Learn how Google AI Overview works and how Generative Engine Optimization can help your content appear in AI-powered search results.",
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
            pageName="How to Get Featured in Google’s AI Overview? Tools and Strategies for 2025"
            src="/assets/images/blog/FeaturedinGoogleAI.webp"
            publishedOn="July 07, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <FeaturedinGoogleAI />
          <Author />
          <FeaturedinGoogleAIFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/how-to-get-featured-in-googles-ai-overview-tools-and-strategies-for-2025/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
