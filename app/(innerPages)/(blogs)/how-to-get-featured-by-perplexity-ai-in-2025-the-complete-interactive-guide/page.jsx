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
import GetFeaturedbyPerplexity from "@/components/blogs/GetFeaturedbyPerplexity";
import GetFeaturedbyPerplexityFaq from "@/components/blogs/faqs/GetFeaturedbyPerplexityFaq";
export const metadata = {
  title: "Learn How to Get Featured by Perplexity AI in 2025 || AI Monitor",
  description:
    "Discover the secret to get featured by Perplexity AI in 2025 | Complete Interactive Guide | AI Monitor",
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
            pageName="How to Get Featured by Perplexity AI in 2025: The Complete Interactive Guide"
            src="/assets/images/blog/perplexity-main-image.webp"
            publishedOn="July 22, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <GetFeaturedbyPerplexity />
          <Author />
          <GetFeaturedbyPerplexityFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/how-to-get-featured-by-perplexity-ai-in-2025-the-complete-interactive-guide/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
