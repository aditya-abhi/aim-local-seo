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
import GEOvsSEO from "@/components/blogs/GEOvsSEO";
import GEOvsSEOFaq from "@/components/blogs/faqs/GEOvsSEOFaq";
export const metadata = {
  title:
    "GEO vs SEO: Mastering AI-Driven Search Optimization in 2025 || AI Monitor",
  description:
    "Explore the key differences between GEO and SEO in 2025. Learn how AI-driven search optimization is transforming digital visibility on SERP.",
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
            pageName="GEO vs SEO: Key Differences, Optimization Strategies, and Future Trends"
            src="/assets/images/blog/Chat-GPT-SEO.webp"
            publishedOn="Feb 24, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <GEOvsSEO />
          <Author />
          <GEOvsSEOFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs currentBlogLink={"/geo-vs-seo-key-differences/"} />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
