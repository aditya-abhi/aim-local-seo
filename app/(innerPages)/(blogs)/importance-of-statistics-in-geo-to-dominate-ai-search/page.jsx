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
import ImportanceOfStatistics from "@/components/blogs/Importanceofstatistics";
import ImportanceofstatisticsFaq from "@/components/blogs/faqs/ImportanceofstatisticsFaq";
export const metadata = {
  title: "Importance of Statistics in GEO to Dominate AI Search || AI Monitor",
  description:
    "Learn the importance of statistics in GEO for AI search success. Use credible data from trusted sources to boost authority and ranks higher.",
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
            pageName="Importance of Statistics in GEO to Dominate AI Search Results (and Captivate Readers)"
            src="/assets/images/blog/Importanceofstatistics.webp"
            publishedOn="May 12, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <ImportanceOfStatistics />
          <Author />
          <ImportanceofstatisticsFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/importance-of-statistics-in-geo-to-dominate-ai-search/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
