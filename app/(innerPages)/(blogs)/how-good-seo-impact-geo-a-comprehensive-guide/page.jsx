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
import GoodSEOImpactGEO from "@/components/blogs/GoodSEOImpactGEO";
import GoodSEOImpactFaq from "@/components/blogs/faqs/GoodSEOImpactFaq";
export const metadata = {
  title:
    "Good SEO Impact on GEO | A Comprehensive Guide for 2025 || AI Monitor",
  description:
    "Discover how powerful SEO impact your GEO strategy and reshapes the game—dive into our most comprehensive 2025 guide to learn new tactics!",
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
            pageName="How Good SEO Impact GEO | A Comprehensive Guide for 2025"
            src="/assets/images/blog/good-seo-imapact-main.webp"
            publishedOn="May 16, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <GoodSEOImpactGEO />
          <Author />
          <GoodSEOImpactFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={"/how-good-seo-impact-geo-a-comprehensive-guide/"}
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
