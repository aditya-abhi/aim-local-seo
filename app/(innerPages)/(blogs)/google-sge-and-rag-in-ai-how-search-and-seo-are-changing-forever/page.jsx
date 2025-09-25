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
import GoogleSGEansRAG from "@/components/blogs/GoogleSGEandRAG";
export const metadata = {
  title: "Google SGE and RAG in AI: The Future of Search and SEO || AI Monitor",
  description:
    "Discover how Google’s SGE and RAG technology are transforming search and SEO. Learn what these AI advancements mean for digital marketing.",
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
            pageName="Google SGE and RAG in AI: How Search and SEO Are Changing Forever"
            src="/assets/images/blog/Blog-sge-&-rag.webp"
            publishedOn="Jan 05, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <GoogleSGEansRAG />
          <Author />
          {/* <Blog1Faqs /> */}
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/google-sge-and-rag-in-ai-how-search-and-seo-are-changing-forever/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
