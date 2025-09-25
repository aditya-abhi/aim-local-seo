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
import LeverageReddit from "@/components/blogs/LeverageReddit";
import LeverageRedditFaq from "@/components/blogs/faqs/LeverageRedditFaq";
export const metadata = {
  title:
    "How to Leverage Reddit for Generative Engine Optimization || AI Monitor",
  description:
    "Discover the advantages of Reddit for Generative Engine Optimization to boost your brand presence in AI-generated results.",
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
            pageName="Leverage Reddit for Generative Engine Optimization: Boost Your Brand with Strategic Reddit Geo Marketing"
            src="/assets/images/blog/reddit-main-image.webp"
            publishedOn="July 05, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <LeverageReddit />
          <Author />
          <LeverageRedditFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/leverage-reddit-for-generative-engine-optimization/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
