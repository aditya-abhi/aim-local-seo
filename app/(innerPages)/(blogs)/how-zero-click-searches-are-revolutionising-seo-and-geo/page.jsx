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
import ZeroClickSearches from "@/components/blogs/ZeroClickSearches";
import ZeroClickSearchesFaq from "@/components/blogs/faqs/ZeroClickSearchesFaq";
export const metadata = {
  title:
    "How Zero Click Searches are Revolutionising SEO and GEO || AI Monitor",
  description:
    "Master zero click searches in the AI era! Learn how GEO replaces traditional SEO as 65% of searches now end without clicks. Adapt your strategy today.",
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
            pageName="How Zero-Click Searches are Revolutionising SEO and GEO"
            src="/assets/images/blog/zero-click-search-main-image.webp"
            publishedOn="May 28, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <ZeroClickSearches />
          <Author />
          <ZeroClickSearchesFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/how-zero-click-searches-are-revolutionising-seo-and-geo/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
