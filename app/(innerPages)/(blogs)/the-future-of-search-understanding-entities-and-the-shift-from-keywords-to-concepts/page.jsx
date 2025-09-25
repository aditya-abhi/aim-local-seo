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
import FutureofSearchEntities from "@/components/blogs/FutureofSearchEntities";
export const metadata = {
  title: "Learn the Shift from Keywords to Entities in Search || AI Monitor",
  description:
    "Explore the rise of entity-based search and how understanding concepts, not just keywords, is reshaping SEO and digital discovery.",
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
            pageName="The Future of Search: Understanding Entities and the Shift from Keywords to Concepts
"
            src="/assets/images/blog/future-of-search-understanding-entities-main-image.webp"
            publishedOn="Jun 27, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <FutureofSearchEntities />
          <Author />
          {/* <Blog1Faqs /> */}
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/the-future-of-search-understanding-entities-and-the-shift-from-keywords-to-concepts/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
